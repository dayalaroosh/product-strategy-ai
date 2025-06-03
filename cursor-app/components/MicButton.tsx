'use client';

import React from 'react';
import { useState, useRef, useEffect } from 'react';

interface MicButtonProps {
  onAudioRecorded: (audioBlob: Blob) => void;
  onTranscription?: (text: string) => void;
  isProcessing?: boolean;
  className?: string;
}

export default function MicButton({ 
  onAudioRecorded, 
  onTranscription, 
  isProcessing = false,
  className = "" 
}: MicButtonProps) {
  const [isRecording, setIsRecording] = useState(false);
  const [audioLevel, setAudioLevel] = useState(0);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const streamRef = useRef<MediaStream | null>(null);

  // Keyboard shortcut: Cmd+M (Mac) or Ctrl+M (Windows)
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key === 'm') {
        event.preventDefault();
        if (!isProcessing) {
          toggleRecording();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isRecording, isProcessing]);

  // Audio level monitoring
  useEffect(() => {
    if (isRecording && analyserRef.current) {
      const updateAudioLevel = () => {
        const dataArray = new Uint8Array(analyserRef.current!.frequencyBinCount);
        analyserRef.current!.getByteFrequencyData(dataArray);
        
        const average = dataArray.reduce((sum, value) => sum + value, 0) / dataArray.length;
        setAudioLevel(average / 255); // Normalize to 0-1
        
        if (isRecording) {
          requestAnimationFrame(updateAudioLevel);
        }
      };
      updateAudioLevel();
    }
  }, [isRecording]);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          sampleRate: 44100
        } 
      });
      
      streamRef.current = stream;

      // Set up audio analysis for visual feedback
      audioContextRef.current = new AudioContext();
      const source = audioContextRef.current.createMediaStreamSource(stream);
      analyserRef.current = audioContextRef.current.createAnalyser();
      analyserRef.current.fftSize = 256;
      source.connect(analyserRef.current);

      // Set up MediaRecorder
      audioChunksRef.current = [];
      mediaRecorderRef.current = new MediaRecorder(stream, {
        mimeType: 'audio/webm;codecs=opus'
      });

      mediaRecorderRef.current.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorderRef.current.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
        onAudioRecorded(audioBlob);
        
        // Clean up
        if (streamRef.current) {
          streamRef.current.getTracks().forEach(track => track.stop());
        }
        if (audioContextRef.current) {
          audioContextRef.current.close();
        }
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
      setAudioLevel(0);
    }
  };

  const toggleRecording = () => {
    if (isRecording) {
      stopRecording();
    } else {
      startRecording();
    }
  };

  const micSize = isRecording ? 'w-20 h-20' : 'w-16 h-16';
  const pulseIntensity = Math.max(0.3, audioLevel);

  return (
    <div className={`flex flex-col items-center space-y-2 ${className}`}>
      {/* Main Mic Button */}
      <button
        onClick={toggleRecording}
        disabled={isProcessing}
        className={`
          ${micSize} rounded-full transition-all duration-200 ease-in-out
          ${isRecording 
            ? 'bg-red-500 hover:bg-red-600 animate-pulse' 
            : 'bg-blue-600 hover:bg-blue-700'
          }
          ${isProcessing ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
          text-white shadow-lg hover:shadow-xl transform hover:scale-105
          flex items-center justify-center relative overflow-hidden
        `}
        style={{
          boxShadow: isRecording 
            ? `0 0 ${20 + pulseIntensity * 30}px rgba(239, 68, 68, ${0.5 + pulseIntensity * 0.5})` 
            : '0 4px 14px 0 rgba(0, 0, 0, 0.3)'
        }}
      >
        {isProcessing ? (
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
        ) : (
          <svg 
            className={`${isRecording ? 'w-10 h-10' : 'w-8 h-8'} transition-all duration-200`}
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

        {/* Audio Level Indicator */}
        {isRecording && (
          <div 
            className="absolute inset-0 bg-white opacity-20 rounded-full transition-all duration-100"
            style={{ transform: `scale(${1 + pulseIntensity * 0.5})` }}
          />
        )}
      </button>

      {/* Status Text */}
      <div className="text-center">
        <p className={`text-sm font-medium ${
          isRecording ? 'text-red-600' : 'text-gray-600'
        }`}>
          {isProcessing 
            ? 'Processing...' 
            : isRecording 
              ? 'Recording... (Click to stop)' 
              : 'Click to record'
          }
        </p>
        <p className="text-xs text-gray-500 mt-1">
          Or press {navigator.platform.includes('Mac') ? '⌘' : 'Ctrl'}+M
        </p>
      </div>

      {/* Audio Level Bars */}
      {isRecording && (
        <div className="flex space-x-1 h-8 items-end">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-1 bg-red-500 rounded-t transition-all duration-100"
              style={{
                height: `${Math.max(8, (audioLevel * 32) + Math.random() * 8)}px`
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
} 