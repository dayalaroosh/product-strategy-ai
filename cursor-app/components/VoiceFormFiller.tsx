'use client';

import React, { useState, useRef, useEffect } from 'react';

interface VoiceFormFillerProps {
  onFieldUpdate: (fieldName: string, value: string) => void;
  fields: { name: string; label: string; placeholder?: string }[];
  isGlobalMode?: boolean;
}

interface VoiceCommand {
  action: 'fill' | 'clear' | 'next' | 'previous';
  field?: string;
  content?: string;
}

export default function VoiceFormFiller({ onFieldUpdate, fields, isGlobalMode = false }: VoiceFormFillerProps) {
  const [isListening, setIsListening] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [currentField, setCurrentField] = useState<string | null>(null);
  const [transcript, setTranscript] = useState('');
  const [previewContent, setPreviewContent] = useState<{field: string, content: string} | null>(null);
  const [voiceMode, setVoiceMode] = useState<'command' | 'dictation'>('command');
  
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const [showConfirmation, setShowConfirmation] = useState(false);

  // Global hotkey listener
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // Ctrl/Cmd + M for global voice toggle
      if ((e.ctrlKey || e.metaKey) && e.key === 'm') {
        e.preventDefault();
        toggleVoiceMode();
      }
      // Escape to cancel
      if (e.key === 'Escape' && isListening) {
        stopListening();
      }
    };

    if (isGlobalMode) {
      document.addEventListener('keydown', handleKeyPress);
      return () => document.removeEventListener('keydown', handleKeyPress);
    }
  }, [isListening, isGlobalMode]);

  const toggleVoiceMode = () => {
    if (isListening) {
      stopListening();
    } else {
      startListening();
    }
  };

  const startListening = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      
      audioChunksRef.current = [];
      
      const options = {
        mimeType: 'audio/webm;codecs=opus'
      };
      
      if (!MediaRecorder.isTypeSupported(options.mimeType)) {
        mediaRecorderRef.current = new MediaRecorder(stream);
      } else {
        mediaRecorderRef.current = new MediaRecorder(stream, options);
      }

      mediaRecorderRef.current.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorderRef.current.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
        processVoiceInput(audioBlob);
        stream.getTracks().forEach(track => track.stop());
      };

      mediaRecorderRef.current.start();
      setIsListening(true);
    } catch (error) {
      console.error('Error starting recording:', error);
      alert('Could not access microphone. Please check permissions.');
    }
  };

  const stopListening = () => {
    if (mediaRecorderRef.current && isListening) {
      mediaRecorderRef.current.stop();
      setIsListening(false);
    }
  };

  const processVoiceInput = async (audioBlob: Blob) => {
    setIsProcessing(true);
    
    try {
      // Send to backend for speech-to-text
      const formData = new FormData();
      formData.append('audio', audioBlob, 'recording.webm');
      
      const response = await fetch('https://product-strategy-ai-production.up.railway.app/api/voice/speech-to-text', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to transcribe audio');
      }

      const { transcript: audioTranscript } = await response.json();
      setTranscript(audioTranscript);
      
      // Parse voice command
      const command = parseVoiceCommand(audioTranscript);
      handleVoiceCommand(command, audioTranscript);

    } catch (error) {
      console.error('Voice processing error:', error);
      alert(`Voice processing failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setIsProcessing(false);
    }
  };

  const parseVoiceCommand = (transcript: string): VoiceCommand => {
    const lowercaseTranscript = transcript.toLowerCase().trim();
    
    // Command patterns
    const fillPatterns = [
      /fill\s+(.+?)\s+with\s+(.+)/i,
      /set\s+(.+?)\s+to\s+(.+)/i,
      /(.+?)\s+is\s+(.+)/i
    ];
    
    // Check for fill commands
    for (const pattern of fillPatterns) {
      const match = lowercaseTranscript.match(pattern);
      if (match) {
        const fieldName = findMatchingField(match[1]);
        if (fieldName) {
          return {
            action: 'fill',
            field: fieldName,
            content: match[2]
          };
        }
      }
    }
    
    // Check for navigation commands
    if (lowercaseTranscript.includes('next field')) {
      return { action: 'next' };
    }
    if (lowercaseTranscript.includes('previous field') || lowercaseTranscript.includes('go back')) {
      return { action: 'previous' };
    }
    if (lowercaseTranscript.includes('clear')) {
      return { action: 'clear', field: currentField || undefined };
    }
    
    // Default to dictation for current field
    if (currentField) {
      return {
        action: 'fill',
        field: currentField,
        content: transcript
      };
    }
    
    // If no current field, try to infer
    const inferredField = inferFieldFromContent(transcript);
    if (inferredField) {
      return {
        action: 'fill',
        field: inferredField,
        content: transcript
      };
    }
    
    return { action: 'fill', content: transcript };
  };

  const findMatchingField = (fieldQuery: string): string | null => {
    const query = fieldQuery.toLowerCase();
    
    // Direct field name matches
    const directMatch = fields.find(field => 
      field.name.toLowerCase().includes(query) || 
      field.label.toLowerCase().includes(query)
    );
    
    if (directMatch) return directMatch.name;
    
    // Fuzzy matching
    const fuzzyMatches = {
      'name': ['name', 'title', 'product'],
      'description': ['description', 'desc', 'about', 'details'],
      'target_market': ['target', 'market', 'audience', 'customers'],
      'key_features': ['features', 'functionality', 'capabilities']
    };
    
    for (const [fieldName, keywords] of Object.entries(fuzzyMatches)) {
      if (keywords.some(keyword => query.includes(keyword))) {
        return fieldName;
      }
    }
    
    return null;
  };

  const inferFieldFromContent = (content: string): string | null => {
    const lower = content.toLowerCase();
    
    // Smart field inference based on content
    if (lower.length < 30 && !lower.includes(' ')) {
      return 'name'; // Short single words likely product names
    }
    
    if (lower.includes('target') || lower.includes('customer') || lower.includes('audience')) {
      return 'target_market';
    }
    
    if (lower.includes('feature') || lower.includes('function') || lower.includes('capability')) {
      return 'key_features';
    }
    
    // Default longer content to description
    if (lower.length > 50) {
      return 'description';
    }
    
    return null;
  };

  const handleVoiceCommand = (command: VoiceCommand, rawTranscript: string) => {
    switch (command.action) {
      case 'fill':
        if (command.field && command.content) {
          setPreviewContent({
            field: command.field,
            content: command.content
          });
          setShowConfirmation(true);
        }
        break;
        
      case 'next':
        navigateField('next');
        break;
        
      case 'previous':
        navigateField('previous');
        break;
        
      case 'clear':
        if (command.field) {
          onFieldUpdate(command.field, '');
        }
        break;
    }
  };

  const navigateField = (direction: 'next' | 'previous') => {
    if (!currentField) {
      setCurrentField(fields[0]?.name || null);
      return;
    }
    
    const currentIndex = fields.findIndex(field => field.name === currentField);
    if (currentIndex === -1) return;
    
    let newIndex;
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % fields.length;
    } else {
      newIndex = currentIndex === 0 ? fields.length - 1 : currentIndex - 1;
    }
    
    setCurrentField(fields[newIndex].name);
  };

  const confirmFill = () => {
    if (previewContent) {
      onFieldUpdate(previewContent.field, previewContent.content);
      setPreviewContent(null);
      setShowConfirmation(false);
    }
  };

  const cancelFill = () => {
    setPreviewContent(null);
    setShowConfirmation(false);
  };

  return (
    <div className="voice-form-filler">
      {/* Voice Control Button */}
      <div className="flex items-center space-x-4 mb-4">
        <button
          onClick={toggleVoiceMode}
          disabled={isProcessing}
          className={`
            relative flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200
            ${isListening 
              ? 'bg-red-500 hover:bg-red-600 text-white animate-pulse' 
              : 'bg-blue-600 hover:bg-blue-700 text-white'
            }
            ${isProcessing ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
            shadow-lg hover:shadow-xl transform hover:scale-105
          `}
        >
          {/* Microphone Icon */}
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" />
          </svg>
          
          <span>
            {isProcessing ? 'Processing...' : isListening ? 'Listening...' : 'Voice Fill'}
          </span>
          
          {/* Waveform Animation */}
          {isListening && (
            <div className="flex items-center space-x-1 ml-2">
              <div className="w-1 h-4 bg-white rounded animate-bounce"></div>
              <div className="w-1 h-6 bg-white rounded animate-bounce" style={{animationDelay: '0.1s'}}></div>
              <div className="w-1 h-5 bg-white rounded animate-bounce" style={{animationDelay: '0.2s'}}></div>
            </div>
          )}
        </button>
        
        <div className="text-sm text-gray-500">
          {isGlobalMode && <span>Press <kbd className="px-2 py-1 bg-gray-100 rounded">⌘M</kbd> to toggle</span>}
        </div>
      </div>

      {/* Current Status */}
      {(transcript || currentField) && (
        <div className="bg-blue-50 rounded-lg p-4 mb-4">
          {transcript && (
            <div className="mb-2">
              <span className="text-sm font-medium text-blue-900">Last command:</span>
              <p className="text-blue-800 italic">"{transcript}"</p>
            </div>
          )}
          {currentField && (
            <div>
              <span className="text-sm font-medium text-blue-900">Current field:</span>
              <span className="text-blue-800 ml-2">{fields.find(f => f.name === currentField)?.label}</span>
            </div>
          )}
        </div>
      )}

      {/* Confirmation Dialog */}
      {showConfirmation && previewContent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Confirm Voice Input</h3>
            <div className="mb-4">
              <p className="text-sm text-gray-600 mb-2">
                Fill <strong>{fields.find(f => f.name === previewContent.field)?.label}</strong> with:
              </p>
              <div className="bg-gray-50 rounded p-3 text-gray-800">
                "{previewContent.content}"
              </div>
            </div>
            <div className="flex space-x-3">
              <button
                onClick={confirmFill}
                className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg font-medium transition-colors"
              >
                ✓ Confirm
              </button>
              <button
                onClick={cancelFill}
                className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded-lg font-medium transition-colors"
              >
                ✗ Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Voice Commands Help */}
      <div className="bg-gray-50 rounded-lg p-4 text-sm">
        <h4 className="font-medium text-gray-900 mb-2">Voice Commands:</h4>
        <ul className="space-y-1 text-gray-600">
          <li>• "Fill [field] with [content]"</li>
          <li>• "Set [field] to [content]"</li>
          <li>• "Next field" / "Previous field"</li>
          <li>• "Clear [field]"</li>
          <li>• Or just speak content for current field</li>
        </ul>
      </div>
    </div>
  );
} 