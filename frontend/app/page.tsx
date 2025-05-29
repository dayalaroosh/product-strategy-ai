'use client';

import { useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await axios.post('http://localhost:8000/api/chat', {
        message
      });
      setResponse(result.data.response);
    } catch (error) {
      console.error('Error:', error);
      setResponse('Error: Failed to get response from the server.');
    }
    setLoading(false);
  };

  return (
    <main className="min-h-screen p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Product Strategy AI - POC
      </h1>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-blue-500 min-h-[100px]"
            placeholder="Enter your message here..."
          />
        </div>
        
        <button
          type="submit"
          disabled={loading || !message}
          className={`w-full py-2 px-4 rounded-lg text-white font-medium
            ${loading || !message 
              ? 'bg-gray-400' 
              : 'bg-blue-500 hover:bg-blue-600'}`}
        >
          {loading ? 'Thinking...' : 'Send Message'}
        </button>
      </form>

      {response && (
        <div className="mt-8 p-4 bg-gray-50 rounded-lg">
          <h2 className="font-semibold mb-2">Response:</h2>
          <p className="whitespace-pre-wrap">{response}</p>
        </div>
      )}
    </main>
  );
} 