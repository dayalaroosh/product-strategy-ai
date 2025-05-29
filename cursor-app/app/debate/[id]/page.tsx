'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';

interface Message {
  round: number;
  participant: string;
  profession: string;
  content: string;
  timestamp: string;
  speaking_style: string;
  personality_traits: string[];
}

interface Conversation {
  id: string;
  topic: string;
  style: string;
  participants: string[];
  participant_ids: string[];
  messages: Message[];
  status: string;
  created_at: string;
  rounds: number;
  max_rounds: number;
}

interface SocialContent {
  conversation_id: string;
  topic: string;
  participants: string[];
  formats: {
    twitter_thread: string[];
    instagram_quote: {
      quote: string;
      author: string;
      design_suggestion: string;
    };
    linkedin_post: string;
    tiktok_script: {
      hook: string;
      setup: string;
      highlights: Array<{
        scene: string;
        speaker: string;
        text: string;
        visual_cue: string;
      }>;
      cta: string;
    };
  };
  hashtags: string[];
  generated_at: string;
}

export default function DebateRoom() {
  const params = useParams();
  const router = useRouter();
  const conversationId = params.id as string;
  
  const [conversation, setConversation] = useState<Conversation | null>(null);
  const [loading, setLoading] = useState(false);
  const [socialContent, setSocialContent] = useState<SocialContent | null>(null);
  const [showSocialPanel, setShowSocialPanel] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (conversationId) {
      fetchConversation();
    }
  }, [conversationId]);

  const fetchConversation = async () => {
    try {
      const response = await fetch(`http://localhost:8001/api/debate/conversation/${conversationId}`);
      const data = await response.json();
      
      if (data.error) {
        setError(data.error);
      } else {
        setConversation(data);
      }
    } catch (error) {
      console.error('Failed to fetch conversation:', error);
      setError('Failed to load conversation');
    }
  };

  const addRound = async () => {
    if (!conversation || loading) return;
    
    setLoading(true);
    try {
      const response = await fetch('http://localhost:8001/api/debate/round', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ conversation_id: conversationId })
      });

      const data = await response.json();
      
      if (data.error) {
        alert(data.error);
      } else {
        // Refresh conversation to get updated messages
        await fetchConversation();
      }
    } catch (error) {
      console.error('Failed to add round:', error);
      alert('Failed to add round');
    } finally {
      setLoading(false);
    }
  };

  const generateSocialContent = async () => {
    if (!conversation) return;
    
    try {
      const response = await fetch(`http://localhost:8001/api/debate/social-content/${conversationId}`);
      const data = await response.json();
      
      if (data.error) {
        alert(data.error);
      } else {
        setSocialContent(data);
        setShowSocialPanel(true);
      }
    } catch (error) {
      console.error('Failed to generate social content:', error);
      alert('Failed to generate social content');
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert('Copied to clipboard!');
  };

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Debate Not Found</h1>
          <p className="text-gray-600 mb-6">{error}</p>
          <Link href="/debate" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            ← Back to Debates
          </Link>
        </div>
      </div>
    );
  }

  if (!conversation) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading debate...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <Link href="/debate" className="text-blue-600 hover:text-blue-800 font-medium">
                ← Back to Debates
              </Link>
              <h1 className="text-2xl font-bold text-gray-900 mt-2">{conversation.topic}</h1>
              <p className="text-gray-600 mt-1">
                {conversation.participants.join(' vs ')} • Round {conversation.rounds}/{conversation.max_rounds}
              </p>
            </div>
            
            <div className="flex space-x-4">
              <button
                onClick={generateSocialContent}
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg transition-colors"
              >
                📱 Generate Content
              </button>
              
              {conversation.status === 'active' && (
                <button
                  onClick={addRound}
                  disabled={loading}
                  className="bg-green-600 hover:bg-green-700 disabled:bg-gray-300 text-white font-bold py-2 px-4 rounded-lg transition-colors"
                >
                  {loading ? 'Adding...' : '➕ Next Round'}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Main Chat Area */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-lg">
              {/* Debate Header */}
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">Live Debate</h2>
                    <p className="text-gray-600">Watch the conversation unfold</p>
                  </div>
                  
                  <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                    conversation.status === 'active' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    {conversation.status === 'active' ? '🔴 Live' : '✅ Completed'}
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="p-6 space-y-6 max-h-96 overflow-y-auto">
                {conversation.messages.length === 0 ? (
                  <div className="text-center py-12">
                    <p className="text-gray-500 mb-4">The debate hasn't started yet.</p>
                    <button
                      onClick={addRound}
                      disabled={loading}
                      className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 text-white font-bold py-2 px-4 rounded-lg"
                    >
                      {loading ? 'Starting...' : '🚀 Start Debate'}
                    </button>
                  </div>
                ) : (
                  conversation.messages.map((message, index) => (
                    <div key={index} className="flex space-x-4">
                      {/* Avatar */}
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                          {message.participant.split(' ').map(n => n[0]).join('')}
                        </div>
                      </div>
                      
                      {/* Message Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-baseline space-x-2">
                          <h4 className="text-lg font-bold text-gray-900">{message.participant}</h4>
                          <span className="text-sm text-blue-600 font-medium">{message.profession}</span>
                          <span className="text-xs text-gray-500">Round {message.round}</span>
                        </div>
                        
                        <div className="mt-2 p-4 bg-gray-50 rounded-lg">
                          <p className="text-gray-900 leading-relaxed">{message.content}</p>
                        </div>
                        
                        <div className="mt-2 text-xs text-gray-500">
                          <span className="italic">{message.speaking_style}</span>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Action Bar */}
              {conversation.status === 'active' && (
                <div className="p-6 border-t border-gray-200 bg-gray-50 rounded-b-xl">
                  <div className="flex items-center justify-between">
                    <p className="text-gray-600">
                      Ready for round {conversation.rounds + 1}?
                    </p>
                    <button
                      onClick={addRound}
                      disabled={loading}
                      className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 text-white font-bold py-2 px-6 rounded-lg transition-colors"
                    >
                      {loading ? 'Loading...' : '▶️ Continue Debate'}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Participants */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">👥 Participants</h3>
              <div className="space-y-4">
                {conversation.participants.map((participant, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                      {participant.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{participant}</p>
                      <p className="text-sm text-gray-500">AI Personality</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">📊 Debate Stats</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Rounds</span>
                  <span className="font-bold">{conversation.rounds}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Messages</span>
                  <span className="font-bold">{conversation.messages.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Status</span>
                  <span className="font-bold">{conversation.status}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Style</span>
                  <span className="font-bold capitalize">{conversation.style}</span>
                </div>
              </div>
            </div>

            {/* Viral Content */}
            <div className="bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl shadow-lg p-6 text-white">
              <h3 className="text-lg font-bold mb-4">🚀 Go Viral</h3>
              <p className="text-sm mb-4 opacity-90">
                Generate shareable content for social media platforms
              </p>
              <button
                onClick={generateSocialContent}
                className="w-full bg-white hover:bg-gray-100 text-purple-600 font-bold py-2 px-4 rounded-lg transition-colors"
              >
                Create Content
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Social Content Modal */}
      {showSocialPanel && socialContent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-96 overflow-y-auto">
            <div className="p-6 border-b border-gray-200 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">📱 Viral Content Generator</h2>
              <button
                onClick={() => setShowSocialPanel(false)}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>

            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Twitter Thread */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-blue-600">🐦 Twitter Thread</h3>
                <div className="space-y-2">
                  {socialContent.formats.twitter_thread.map((tweet, index) => (
                    <div key={index} className="p-3 bg-blue-50 rounded-lg">
                      <p className="text-sm">{tweet}</p>
                      <button
                        onClick={() => copyToClipboard(tweet)}
                        className="text-xs text-blue-600 hover:text-blue-800 mt-1"
                      >
                        Copy Tweet
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Instagram Quote */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-pink-600">📸 Instagram Quote</h3>
                <div className="p-4 bg-gradient-to-br from-pink-100 to-purple-100 rounded-lg">
                  <p className="text-lg font-bold mb-2">{socialContent.formats.instagram_quote.quote}</p>
                  <p className="text-sm text-gray-600">— {socialContent.formats.instagram_quote.author}</p>
                  <button
                    onClick={() => copyToClipboard(`${socialContent.formats.instagram_quote.quote}\n\n— ${socialContent.formats.instagram_quote.author}`)}
                    className="text-xs text-pink-600 hover:text-pink-800 mt-2"
                  >
                    Copy Quote
                  </button>
                </div>
              </div>

              {/* LinkedIn Post */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-blue-800">💼 LinkedIn Post</h3>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm whitespace-pre-line">{socialContent.formats.linkedin_post}</p>
                  <button
                    onClick={() => copyToClipboard(socialContent.formats.linkedin_post)}
                    className="text-xs text-blue-600 hover:text-blue-800 mt-2"
                  >
                    Copy Post
                  </button>
                </div>
              </div>

              {/* Hashtags */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-purple-600">#️⃣ Hashtags</h3>
                <div className="p-4 bg-purple-50 rounded-lg">
                  <p className="text-sm">{socialContent.hashtags.join(' ')}</p>
                  <button
                    onClick={() => copyToClipboard(socialContent.hashtags.join(' '))}
                    className="text-xs text-purple-600 hover:text-purple-800 mt-2"
                  >
                    Copy Hashtags
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 