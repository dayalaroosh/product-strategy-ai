'use client';

import { useEffect, useState } from 'react';

export default function TestEnvPage() {
  const [envInfo, setEnvInfo] = useState<any>({});

  useEffect(() => {
    // Get environment variables on client side
    const info = {
      NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
      NEXT_PUBLIC_BACKEND_URL: process.env.NEXT_PUBLIC_BACKEND_URL,
      NODE_ENV: process.env.NODE_ENV,
      actualUrl: process.env.NEXT_PUBLIC_API_BASE_URL || process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:8001'
    };
    setEnvInfo(info);
  }, []);

  const testEndpoint = async () => {
    const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:8001';
    
    try {
      console.log('Testing endpoint:', `${API_BASE_URL}/api/council/agents`);
      const response = await fetch(`${API_BASE_URL}/api/council/agents`);
      const data = await response.json();
      console.log('Response:', data);
      alert(`Success! Found ${Object.keys(data.available_agents || {}).length} agents`);
    } catch (error) {
      console.error('Error:', error);
      alert(`Error: ${error}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Environment Test Page</h1>
        
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Environment Variables</h2>
          <pre className="bg-gray-100 p-4 rounded text-sm">
            {JSON.stringify(envInfo, null, 2)}
          </pre>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">API Test</h2>
          <button
            onClick={testEndpoint}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Test Council Agents Endpoint
          </button>
        </div>
      </div>
    </div>
  );
} 