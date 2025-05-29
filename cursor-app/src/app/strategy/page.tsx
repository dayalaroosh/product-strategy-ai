'use client';

import { useState } from 'react';
import Header from '../../components/Layout/Header';
import { api, ProductAnalysis } from '../../lib/api';

export default function StrategyPage() {
  const [loading, setLoading] = useState(false);
  const [analysis, setAnalysis] = useState<ProductAnalysis | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      description: formData.get('description'),
      target_market: formData.get('target_market'),
      key_features: formData.get('key_features'),
    };

    try {
      const response = await api.analyzeProduct(data);
      setAnalysis(response.analysis);
    } catch (err) {
      setError('Failed to analyze product. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">Product Strategy Analysis</h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Provide details about your product for AI-powered strategy analysis.
            </p>

            <form onSubmit={handleSubmit} className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                  Product Name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="col-span-full">
                <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
                  Description
                </label>
                <div className="mt-2">
                  <textarea
                    id="description"
                    name="description"
                    rows={3}
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-4">
                <label htmlFor="target_market" className="block text-sm font-medium leading-6 text-gray-900">
                  Target Market
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="target_market"
                    id="target_market"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="col-span-full">
                <label htmlFor="key_features" className="block text-sm font-medium leading-6 text-gray-900">
                  Key Features
                </label>
                <div className="mt-2">
                  <textarea
                    id="key_features"
                    name="key_features"
                    rows={3}
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="col-span-full">
                <button
                  type="submit"
                  disabled={loading}
                  className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  {loading ? 'Analyzing...' : 'Analyze Product'}
                </button>
              </div>
            </form>
          </div>

          {error && (
            <div className="rounded-md bg-red-50 p-4">
              <div className="text-sm text-red-700">{error}</div>
            </div>
          )}

          {analysis && (
            <div className="rounded-md bg-white p-6 shadow">
              <h3 className="text-lg font-medium leading-6 text-gray-900 mb-4">Analysis Results</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-medium text-gray-900">Market Fit</h4>
                  <p className="mt-2 text-sm text-gray-500">{analysis.market_fit}</p>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-900">Competitive Advantage</h4>
                  <p className="mt-2 text-sm text-gray-500">{analysis.competitive_advantage}</p>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-900">Risks</h4>
                  <ul className="mt-2 list-disc pl-5 text-sm text-gray-500">
                    {analysis.risks.map((risk: string, index: number) => (
                      <li key={index}>{risk}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-900">Opportunities</h4>
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
    </main>
  );
} 