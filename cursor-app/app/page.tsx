'use client';

import { useState } from 'react';
import { api, ProductAnalysis } from '../lib/api';
import Link from 'next/link';

export default function Home() {
  const [productData, setProductData] = useState({
    name: '',
    description: '',
    target_market: '',
    key_features: ''
  });
  const [analysis, setAnalysis] = useState<ProductAnalysis | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await api.analyzeProduct(productData);
      setAnalysis(response.analysis);
    } catch (error) {
      console.error('Error:', error);
      setAnalysis(null);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    setProductData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-3xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        
        {/* Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg shadow-sm p-1 flex">
            <button className="px-4 py-2 rounded-md text-sm font-medium bg-blue-600 text-white">
              Quick Analysis
            </button>
            <Link href="/council" className="px-4 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50">
              Strategy Council
            </Link>
            <Link href="/debate" className="px-4 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 border-l border-gray-200">
              🎭 Celebrity Debates
            </Link>
          </div>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            AI Product Strategy Analysis
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Get instant AI-powered insights for your product strategy
          </p>
          
          {/* Upgrade Notice */}
          <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <div className="flex items-center justify-center">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-blue-700">
                  Want deeper insights? Try our <Link href="/council" className="font-medium underline">Product Strategy Council</Link> for multi-expert analysis.
                </p>
              </div>
            </div>
          </div>

          {/* Phase 2 New Feature Banner */}
          <div className="mt-4 p-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl shadow-lg text-white">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center">
                  <span className="bg-white text-purple-600 px-2 py-1 rounded-full text-xs font-bold mr-3">NEW</span>
                  <h3 className="text-lg font-bold">🎭 Phase 2: Celebrity AI Debates</h3>
                </div>
                <p className="text-purple-100 mt-2">
                  Watch Elon Musk, Steve Jobs, Warren Buffett, and more debate trending topics. Generate viral content instantly!
                </p>
              </div>
              <Link 
                href="/debate" 
                className="bg-white hover:bg-gray-100 text-purple-600 font-bold py-3 px-6 rounded-lg transition-colors ml-4"
              >
                Try It Now →
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="form-label">
                  Product Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={productData.name}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="Enter your product name"
                  required
                />
              </div>

              <div>
                <label htmlFor="description" className="form-label">
                  Product Description
                </label>
                <textarea
                  name="description"
                  id="description"
                  rows={3}
                  value={productData.description}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="Describe your product and its main features"
                  required
                />
              </div>

              <div>
                <label htmlFor="target_market" className="form-label">
                  Target Market
                </label>
                <textarea
                  name="target_market"
                  id="target_market"
                  rows={2}
                  value={productData.target_market}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="Who are your target customers?"
                  required
                />
              </div>

              <div>
                <label htmlFor="key_features" className="form-label">
                  Key Features
                </label>
                <textarea
                  name="key_features"
                  id="key_features"
                  rows={2}
                  value={productData.key_features}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="List your main product features"
                  required
                />
              </div>

              <div className="flex justify-center pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className={`btn-primary ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {loading ? 'Analyzing...' : 'Analyze Product Strategy'}
                </button>
              </div>
            </form>
          </div>

          {analysis && (
            <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Analysis Results</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-900">Market Fit</h3>
                  <p className="mt-2 text-sm text-gray-500">{analysis.market_fit}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-900">Competitive Advantage</h3>
                  <p className="mt-2 text-sm text-gray-500">{analysis.competitive_advantage}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-900">Risks</h3>
                  <ul className="mt-2 list-disc pl-5 text-sm text-gray-500">
                    {analysis.risks.map((risk: string, index: number) => (
                      <li key={index}>{risk}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-900">Opportunities</h3>
                  <ul className="mt-2 list-disc pl-5 text-sm text-gray-500">
                    {analysis.opportunities.map((opportunity: string, index: number) => (
                      <li key={index}>{opportunity}</li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Upgrade CTA */}
              <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg">
                <div className="text-center">
                  <h3 className="text-sm font-medium text-gray-900 mb-2">Want More Detailed Analysis?</h3>
                  <p className="text-xs text-gray-600 mb-3">
                    Get insights from 5 expert perspectives including technical feasibility, financial viability, and UX analysis.
                  </p>
                  <Link 
                    href="/council" 
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                  >
                    Try Strategy Council →
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
