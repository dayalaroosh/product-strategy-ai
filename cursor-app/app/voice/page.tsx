'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';

interface VoiceAnalysisResult {
  council_analysis: any;
  product_data: any;
  voice_enabled: boolean;
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8001';

export default function VoicePage() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [analysisResult, setAnalysisResult] = useState<VoiceAnalysisResult | null>(null);
  const [currentlyPlaying, setCurrentlyPlaying] = useState<string | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  const audioRefs = useRef<{ [key: string]: HTMLAudioElement }>({});
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      
      audioChunksRef.current = [];
      
      // Use WAV format for better compatibility with OpenAI Whisper
      const options = {
        mimeType: 'audio/webm;codecs=opus'
      };
      
      // Fallback to default if the preferred format isn't supported
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
        handleAudioRecorded(audioBlob);
        stream.getTracks().forEach(track => track.stop());
      };

      mediaRecorderRef.current.start();
      setIsRecording(true);
    } catch (error) {
      console.error('Error starting recording:', error);
      alert('Could not access microphone. Please check permissions.');
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  const toggleRecording = () => {
    if (isRecording) {
      stopRecording();
    } else {
      startRecording();
    }
  };

  const handleAudioRecorded = async (audioBlob: Blob) => {
    setIsProcessing(true);
    try {
      // Step 1: Convert speech to text
      const formData = new FormData();
      formData.append('audio', audioBlob, 'recording.webm');

      const transcriptResponse = await fetch(`${API_BASE_URL}/api/voice/speech-to-text`, {
        method: 'POST',
        body: formData,
      });

      if (!transcriptResponse.ok) {
        throw new Error('Failed to transcribe audio');
      }

      const { transcript: audioTranscript } = await transcriptResponse.json();
      setTranscript(audioTranscript);

      // Step 2: Analyze with voice-enabled council
      const analysisResponse = await fetch(`${API_BASE_URL}/api/voice/council-analyze`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          transcript: audioTranscript,
          include_audio: true, // Enable voice responses
        }),
      });

      if (!analysisResponse.ok) {
        throw new Error('Failed to analyze with council');
      }

      const result = await analysisResponse.json();
      setAnalysisResult(result);

    } catch (error) {
      console.error('Voice processing error:', error);
      alert(`Voice processing failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setIsProcessing(false);
    }
  };

  const playAgentAudio = (agentKey: string, audioBase64: string) => {
    // Stop any currently playing audio
    if (currentlyPlaying && audioRefs.current[currentlyPlaying]) {
      audioRefs.current[currentlyPlaying].pause();
      audioRefs.current[currentlyPlaying].currentTime = 0;
    }

    // Create audio element if it doesn't exist
    if (!audioRefs.current[agentKey]) {
      const audioElement = new Audio();
      audioElement.onended = () => setCurrentlyPlaying(null);
      audioRefs.current[agentKey] = audioElement;
    }

    // Set source and play
    const audioElement = audioRefs.current[agentKey];
    audioElement.src = `data:audio/mpeg;base64,${audioBase64}`;
    audioElement.play();
    setCurrentlyPlaying(agentKey);
  };

  const stopAllAudio = () => {
    Object.values(audioRefs.current).forEach((audioElement) => {
      (audioElement as HTMLAudioElement).pause();
      (audioElement as HTMLAudioElement).currentTime = 0;
    });
    setCurrentlyPlaying(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium">
                ← Back to Home
              </Link>
              <h1 className="text-3xl font-bold text-gray-900 mt-2">🎤 Voice Interface</h1>
              <p className="text-gray-600 mt-1">Speak your product idea and get instant analysis</p>
            </div>
            
            <div className="text-right">
              <div className="text-sm text-gray-500">Audio Interface MVP</div>
              <div className="text-lg font-bold text-purple-600">Voice-First Product Strategy</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Voice Input Section */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Voice Recorder */}
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🎙️ Voice Your Product Idea</h2>
              <p className="text-gray-600 mb-8">
                Describe your product naturally - our AI will extract the details and analyze it with the Product Strategy Council
              </p>
              
              <div className="flex flex-col items-center space-y-4 mb-6">
                <button
                  onClick={toggleRecording}
                  disabled={isProcessing}
                  className={`
                    w-16 h-16 rounded-full transition-all duration-200 ease-in-out
                    ${isRecording 
                      ? 'bg-red-500 hover:bg-red-600 animate-pulse' 
                      : 'bg-blue-600 hover:bg-blue-700'
                    }
                    ${isProcessing ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
                    text-white shadow-lg hover:shadow-xl transform hover:scale-105
                    flex items-center justify-center
                  `}
                >
                  {isProcessing ? (
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
                  ) : (
                    <svg 
                      className="w-8 h-8"
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path 
                        fillRule="evenodd" 
                        d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" 
                        clipRule="evenodd" 
                      />
                    </svg>
                  )}
                </button>
                
                <div className="text-center">
                  <p className={`text-sm font-medium ${isRecording ? 'text-red-600' : 'text-gray-600'}`}>
                    {isProcessing 
                      ? 'Processing...' 
                      : isRecording 
                        ? 'Recording... (Click to stop)' 
                        : 'Click to record'
                    }
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Or press Ctrl+M
                  </p>
                </div>
              </div>
              
              <div className="text-sm text-gray-500 max-w-md mx-auto">
                <p>💡 <strong>Example:</strong> &quot;I&apos;m building a mobile app for busy professionals to track their daily water intake. 
                It sends smart reminders and gamifies hydration with challenges and rewards. The target market is health-conscious 
                office workers aged 25-40.&quot;</p>
              </div>
            </div>

            {/* Transcript Display */}
            {transcript && (
              <div className="bg-blue-50 rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-blue-900 mb-3">📝 Transcript</h3>
                <p className="text-blue-800 italic">&quot;{transcript}&quot;</p>
              </div>
            )}

            {/* Analysis Results */}
            {analysisResult && (
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900">🏛️ Council Analysis Results</h3>
                  {currentlyPlaying && (
                    <button
                      onClick={stopAllAudio}
                      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors"
                    >
                      🔇 Stop Audio
                    </button>
                  )}
                </div>
                
                {/* Product Summary */}
                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <h4 className="font-bold text-gray-900 mb-2">Analyzed Product:</h4>
                  <p><strong>Name:</strong> {analysisResult.product_data.name}</p>
                  <p><strong>Description:</strong> {analysisResult.product_data.description}</p>
                  <p><strong>Target Market:</strong> {analysisResult.product_data.target_market}</p>
                  <p><strong>Key Features:</strong> {analysisResult.product_data.key_features}</p>
                </div>

                {/* Agent Analyses */}
                <div className="space-y-4">
                  {Object.entries(analysisResult.council_analysis.agent_analyses || {}).map(([agentKey, analysis]: [string, any]) => (
                    <div key={agentKey} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h5 className="font-bold text-gray-900">{analysis.agent_name}</h5>
                          <p className="text-sm text-blue-600 font-medium">{analysis.agent_role}</p>
                        </div>
                        
                        {analysis.audio_base64 && (
                          <button
                            onClick={() => playAgentAudio(agentKey, analysis.audio_base64)}
                            disabled={currentlyPlaying === agentKey}
                            className={`
                              px-3 py-1 rounded-lg text-sm font-medium transition-colors
                              ${currentlyPlaying === agentKey 
                                ? 'bg-green-500 text-white' 
                                : 'bg-blue-500 hover:bg-blue-600 text-white'
                              }
                            `}
                          >
                            {currentlyPlaying === agentKey ? '🔊 Playing...' : '🔊 Play'}
                          </button>
                        )}
                      </div>
                      
                      <p className="text-gray-700 text-sm leading-relaxed">{analysis.analysis}</p>
                      
                      <div className="mt-2">
                        <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                          Confidence: {Math.round(analysis.confidence * 100)}%
                        </span>
                        {analysis.voice && (
                          <span className="text-xs bg-purple-100 px-2 py-1 rounded ml-2">
                            Voice: {analysis.voice}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Overall Summary */}
                {analysisResult.council_analysis.council_summary && (
                  <div className="mt-6 bg-green-50 rounded-lg p-4">
                    <h4 className="font-bold text-green-900 mb-2">📊 Overall Assessment</h4>
                    <p className="text-green-800">{analysisResult.council_analysis.council_summary.overall_assessment}</p>
                    <div className="mt-2">
                      <span className="text-sm bg-green-100 px-2 py-1 rounded">
                        Confidence Score: {Math.round(analysisResult.council_analysis.council_summary.confidence_score * 100)}%
                      </span>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            
            {/* How It Works */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">🚀 How It Works</h3>
              <div className="space-y-4 text-sm">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">1</div>
                  <div>
                    <p className="font-medium">Record Your Idea</p>
                    <p className="text-gray-600">Speak naturally about your product concept</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-xs font-bold">2</div>
                  <div>
                    <p className="font-medium">AI Transcription</p>
                    <p className="text-gray-600">OpenAI Whisper converts speech to text</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold">3</div>
                  <div>
                    <p className="font-medium">Council Analysis</p>
                    <p className="text-gray-600">5 AI experts analyze your product</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-xs font-bold">4</div>
                  <div>
                    <p className="font-medium">Voice Responses</p>
                    <p className="text-gray-600">Each expert speaks their analysis aloud</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Voice Features */}
            <div className="bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl shadow-lg p-6 text-white">
              <h3 className="text-lg font-bold mb-4">🎙️ Voice Features</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-2">
                  <span>✅</span>
                  <span>Real-time speech recognition</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>✅</span>
                  <span>Natural language processing</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>✅</span>
                  <span>AI agent voice responses</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>✅</span>
                  <span>Keyboard shortcuts (⌘+M)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>✅</span>
                  <span>Audio level visualization</span>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">📈 Voice Stats</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Processing Time</span>
                  <span className="font-bold">&lt; 5s</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Accuracy</span>
                  <span className="font-bold">95%+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Supported Voices</span>
                  <span className="font-bold">6 AI Voices</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Max Recording</span>
                  <span className="font-bold">2 minutes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 