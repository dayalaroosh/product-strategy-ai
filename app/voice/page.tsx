'use client';

import { useState, useRef } from 'react';
import { MicButton } from '@/components/MicButton';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Loader2, Play, Pause } from 'lucide-react';

export default function VoiceInterface() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [councilResponse, setCouncilResponse] = useState('');
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleRecordingComplete = async (audioBlob: Blob) => {
    setIsProcessing(true);
    try {
      // Convert audio to text
      const formData = new FormData();
      formData.append('audio', audioBlob);

      const transcriptResponse = await fetch('/api/voice/speech-to-text', {
        method: 'POST',
        body: formData,
      });

      const { transcript: newTranscript } = await transcriptResponse.json();
      setTranscript(newTranscript);

      // Get council analysis
      const analysisResponse = await fetch('/api/voice/council-analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          transcript: newTranscript,
          include_audio: true,
        }),
      });

      const { council_analysis, audio_base64 } = await analysisResponse.json();
      setCouncilResponse(JSON.stringify(council_analysis, null, 2));

      // Handle audio response
      if (audio_base64) {
        const audioBlob = new Blob(
          [Uint8Array.from(atob(audio_base64), c => c.charCodeAt(0))],
          { type: 'audio/mpeg' }
        );
        const url = URL.createObjectURL(audioBlob);
        setAudioUrl(url);
      }
    } catch (error) {
      console.error('Error processing audio:', error);
    } finally {
      setIsProcessing(false);
    }
  };

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8 text-center">Voice Interface</h1>
      
      <div className="flex flex-col items-center gap-8">
        <Card className="p-6 w-full">
          <div className="flex flex-col items-center gap-4">
            <MicButton
              onRecordingComplete={handleRecordingComplete}
              isProcessing={isProcessing}
            />
            {isProcessing && (
              <div className="flex items-center gap-2">
                <Loader2 className="h-4 w-4 animate-spin" />
                <span>Processing...</span>
              </div>
            )}
          </div>
        </Card>

        {transcript && (
          <Card className="p-6 w-full">
            <h2 className="text-xl font-semibold mb-4">Transcript</h2>
            <p className="text-gray-700">{transcript}</p>
          </Card>
        )}

        {councilResponse && (
          <Card className="p-6 w-full">
            <h2 className="text-xl font-semibold mb-4">Council Analysis</h2>
            <pre className="bg-gray-100 p-4 rounded-lg overflow-auto">
              {councilResponse}
            </pre>
          </Card>
        )}

        {audioUrl && (
          <Card className="p-6 w-full">
            <div className="flex items-center gap-4">
              <Button
                onClick={toggleAudio}
                variant="outline"
                size="icon"
                className="rounded-full"
              >
                {isPlaying ? (
                  <Pause className="h-4 w-4" />
                ) : (
                  <Play className="h-4 w-4" />
                )}
              </Button>
              <audio
                ref={audioRef}
                src={audioUrl}
                onEnded={() => setIsPlaying(false)}
                className="hidden"
              />
              <span>Council Response Audio</span>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
} 