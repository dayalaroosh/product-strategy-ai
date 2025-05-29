'use client';

import { useState } from 'react';
import { api, ProductAnalysis } from '../lib/api';

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
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            AI Product Strategy Analysis
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Get instant AI-powered insights for your product strategy
          </p>
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
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
