'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Celebrity {
  name: string;
  profession: string;
  speaking_style: string;
  core_beliefs: string[];
  famous_quotes: string[];
  personality_traits: string[];
  background: string;
}

interface TrendingConversation {
  id: string;
  topic: string;
  participants: string[];
  status: string;
  rounds: number;
  created_at: string;
  preview: string;
}

export default function DebatePage() {
  const [celebrities, setCelebrities] = useState<Record<string, Celebrity>>({});
  const [selectedCelebrities, setSelectedCelebrities] = useState<string[]>([]);
  const [topic, setTopic] = useState('');
  const [trending, setTrending] = useState<TrendingConversation[]>([]);
  const [loading, setLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  useEffect(() => {
    fetchCelebrities();
    fetchTrending();
  }, []);

  const fetchCelebrities = async () => {
    try {
      const response = await fetch('http://localhost:8001/api/debate/celebrities');
      const data = await response.json();
      setCelebrities(data.celebrities || {});
    } catch (error) {
      console.error('Failed to fetch celebrities:', error);
    }
  };

  const fetchTrending = async () => {
    try {
      const response = await fetch('http://localhost:8001/api/debate/trending');
      const data = await response.json();
      setTrending(data.trending || []);
    } catch (error) {
      console.error('Failed to fetch trending:', error);
    }
  };

  const toggleCelebrity = (celebrityId: string) => {
    setSelectedCelebrities(prev => 
      prev.includes(celebrityId) 
        ? prev.filter(id => id !== celebrityId)
        : [...prev, celebrityId]
    );
  };

  const startDebate = async () => {
    if (!topic || selectedCelebrities.length < 2) {
      alert('Please select a topic and at least 2 celebrities');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('http://localhost:8001/api/debate/start', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          topic,
          participants: selectedCelebrities,
          style: 'debate'
        })
      });

      const data = await response.json();
      if (data.conversation_id) {
        // Redirect to debate room
        window.location.href = `/debate/${data.conversation_id}`;
      } else {
        alert(data.error || 'Failed to start debate');
      }
    } catch (error) {
      console.error('Failed to start debate:', error);
      alert('Failed to start debate');
    } finally {
      setLoading(false);
    }
  };

  const CelebrityCard = ({ celebrityId, celebrity }: { celebrityId: string, celebrity: Celebrity }) => (
    <div 
      onClick={() => toggleCelebrity(celebrityId)}
      className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
        selectedCelebrities.includes(celebrityId)
          ? 'border-blue-500 bg-blue-50 scale-105'
          : 'border-gray-200 hover:border-gray-300 hover:shadow-md'
      }`}
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-gray-900">{celebrity.name}</h3>
        <div className={`w-6 h-6 rounded-full border-2 ${
          selectedCelebrities.includes(celebrityId) 
            ? 'bg-blue-500 border-blue-500' 
            : 'border-gray-300'
        }`}>
          {selectedCelebrities.includes(celebrityId) && (
            <div className="text-white text-sm flex items-center justify-center h-full">✓</div>
          )}
        </div>
      </div>
      
      <p className="text-blue-600 font-medium mb-2">{celebrity.profession}</p>
      <p className="text-gray-600 text-sm mb-3">{celebrity.background.slice(0, 120)}...</p>
      
      <div className="space-y-2">
        <div>
          <span className="text-xs font-medium text-gray-500">SPEAKING STYLE:</span>
          <p className="text-sm text-gray-700">{celebrity.speaking_style}</p>
        </div>
        
        {celebrity.famous_quotes.length > 0 && (
          <div>
            <span className="text-xs font-medium text-gray-500">FAMOUS QUOTE:</span>
            <p className="text-sm italic text-gray-700">"{celebrity.famous_quotes[0]}"</p>
          </div>
        )}
      </div>
    </div>
  );

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
              <h1 className="text-3xl font-bold text-gray-900 mt-2">🎭 Celebrity AI Debates</h1>
              <p className="text-gray-600 mt-1">Watch AI personalities debate trending topics</p>
            </div>
            
            <div className="text-right">
              <div className="text-sm text-gray-500">Phase 2 Feature</div>
              <div className="text-lg font-bold text-purple-600">Viral Content Engine</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Debate Creator */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Step 1: Topic Selection */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">🔥 Start a Debate</h2>
                <div className="flex space-x-2">
                  {[1, 2, 3].map(step => (
                    <div key={step} className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                      step <= currentStep ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-500'
                    }`}>
                      {step}
                    </div>
                  ))}
                </div>
              </div>

              {currentStep === 1 && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      What should they debate about?
                    </label>
                    <input
                      type="text"
                      value={topic}
                      onChange={(e) => setTopic(e.target.value)}
                      placeholder="e.g., The future of artificial intelligence, Cryptocurrency adoption, Remote work vs office culture..."
                      className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {[
                      "The future of AI",
                      "Cryptocurrency adoption", 
                      "Remote work culture",
                      "Social media impact",
                      "Climate change solutions",
                      "Space exploration priority"
                    ].map(suggestion => (
                      <button
                        key={suggestion}
                        onClick={() => setTopic(suggestion)}
                        className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm text-gray-700 transition-colors"
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                  
                  <button
                    onClick={() => topic && setCurrentStep(2)}
                    disabled={!topic}
                    className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                  >
                    Next: Select Participants
                  </button>
                </div>
              )}

              {currentStep === 2 && (
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Selected Topic: <span className="text-blue-600">"{topic}"</span>
                    </h3>
                    <p className="text-gray-600 mb-4">Choose at least 2 celebrities to participate:</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.entries(celebrities).map(([celebrityId, celebrity]) => (
                      <CelebrityCard key={celebrityId} celebrityId={celebrityId} celebrity={celebrity} />
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <button
                      onClick={() => setCurrentStep(1)}
                      className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-3 px-6 rounded-lg transition-colors"
                    >
                      Back
                    </button>
                    <button
                      onClick={() => selectedCelebrities.length >= 2 && setCurrentStep(3)}
                      disabled={selectedCelebrities.length < 2}
                      className="flex-1 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                    >
                      Next: Start Debate ({selectedCelebrities.length} selected)
                    </button>
                  </div>
                </div>
              )}

              {currentStep === 3 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Ready to Start!</h3>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="font-medium text-blue-900">Topic: {topic}</p>
                      <p className="text-blue-700 mt-1">
                        Participants: {selectedCelebrities.map(id => celebrities[id]?.name).join(', ')}
                      </p>
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <button
                      onClick={() => setCurrentStep(2)}
                      className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-3 px-6 rounded-lg transition-colors"
                    >
                      Back
                    </button>
                    <button
                      onClick={startDebate}
                      disabled={loading}
                      className="flex-1 bg-green-600 hover:bg-green-700 disabled:bg-gray-300 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                    >
                      {loading ? 'Starting...' : '🚀 Start Debate!'}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar: Trending Debates */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">🔥 Trending Debates</h3>
              
              {trending.length === 0 ? (
                <p className="text-gray-500 text-center py-8">
                  No debates yet. Start the first one! 🎉
                </p>
              ) : (
                <div className="space-y-4">
                  {trending.map(conv => (
                    <Link 
                      key={conv.id} 
                      href={`/debate/${conv.id}`}
                      className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
                    >
                      <h4 className="font-medium text-gray-900 mb-1">{conv.topic}</h4>
                      <p className="text-sm text-gray-600 mb-2">
                        {conv.participants.join(' vs ')}
                      </p>
                      <p className="text-xs text-gray-500 mb-2">{conv.preview}</p>
                      <div className="flex justify-between items-center text-xs">
                        <span className={`px-2 py-1 rounded-full ${
                          conv.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-600'
                        }`}>
                          {conv.status}
                        </span>
                        <span className="text-gray-500">{conv.rounds} rounds</span>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Quick Stats */}
            <div className="bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl shadow-lg p-6 text-white">
              <h3 className="text-lg font-bold mb-4">🎯 Platform Stats</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Celebrity AIs</span>
                  <span className="font-bold">{Object.keys(celebrities).length}</span>
                </div>
                <div className="flex justify-between">
                  <span>Total Debates</span>
                  <span className="font-bold">{trending.length}</span>
                </div>
                <div className="flex justify-between">
                  <span>Viral Potential</span>
                  <span className="font-bold">🚀 HIGH</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 