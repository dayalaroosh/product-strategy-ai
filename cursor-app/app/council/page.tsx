'use client';

import { useState, useEffect } from 'react';
import { api, CouncilAnalysisResult, AgentInfo, AgentAnalysis } from '../../lib/api';
import AgentCard from '../../components/AgentCard';
import Link from 'next/link';

export default function CouncilPage() {
  const [step, setStep] = useState<'select' | 'input' | 'analyzing' | 'results'>('select');
  const [availableAgents, setAvailableAgents] = useState<Record<string, AgentInfo & { key: string }>>({});
  const [selectedAgents, setSelectedAgents] = useState<string[]>([]);
  const [productData, setProductData] = useState({
    name: '',
    description: '',
    target_market: '',
    key_features: ''
  });
  const [analysisResults, setAnalysisResults] = useState<CouncilAnalysisResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Load available agents on component mount
  useEffect(() => {
    loadAvailableAgents();
  }, []);

  const loadAvailableAgents = async () => {
    try {
      const response = await api.getAvailableAgents();
      const agentsWithKeys = Object.entries(response.available_agents).reduce((acc, [key, agent]) => {
        acc[key] = { ...agent, key, focus_areas: agent.focus_areas, personality: agent.expertise };
        return acc;
      }, {} as Record<string, AgentInfo & { key: string }>);
      setAvailableAgents(agentsWithKeys);
    } catch (error) {
      console.error('Failed to load agents:', error);
      setError('Failed to load council members');
    }
  };

  const handleAgentSelect = (agentKey: string) => {
    setSelectedAgents(prev => 
      prev.includes(agentKey) 
        ? prev.filter(key => key !== agentKey)
        : [...prev, agentKey]
    );
  };

  const handleSelectAll = () => {
    const allKeys = Object.keys(availableAgents);
    setSelectedAgents(selectedAgents.length === allKeys.length ? [] : allKeys);
  };

  const proceedToInput = () => {
    if (selectedAgents.length === 0) {
      setError('Please select at least one council member');
      return;
    }
    setError(null);
    setStep('input');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    setProductData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAnalyze = async () => {
    setStep('analyzing');
    setLoading(true);
    setError(null);

    try {
      const response = await api.analyzeWithCouncil({
        ...productData,
        selected_agents: selectedAgents
      });
      setAnalysisResults(response.council_analysis);
      setStep('results');
    } catch (error) {
      console.error('Analysis failed:', error);
      setError('Analysis failed. Please try again.');
      setStep('input');
    } finally {
      setLoading(false);
    }
  };

  const resetWorkflow = () => {
    setStep('select');
    setSelectedAgents([]);
    setProductData({ name: '', description: '', target_market: '', key_features: '' });
    setAnalysisResults(null);
    setError(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        
        {/* Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg shadow-sm p-1 flex">
            <Link href="/" className="px-4 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50">
              Quick Analysis
            </Link>
            <button className="px-4 py-2 rounded-md text-sm font-medium bg-blue-600 text-white">
              Strategy Council
            </button>
          </div>
        </div>
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Product Strategy Council
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Consult with our expert AI council to get comprehensive product strategy insights from multiple perspectives
          </p>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center space-x-4">
            {[
              { key: 'select', label: 'Select Experts', icon: '👥' },
              { key: 'input', label: 'Product Details', icon: '📝' },
              { key: 'analyzing', label: 'Analysis', icon: '🔄' },
              { key: 'results', label: 'Results', icon: '📊' }
            ].map((stepItem, index) => (
              <div key={stepItem.key} className="flex items-center">
                <div className={`
                  flex items-center justify-center w-10 h-10 rounded-full border-2 text-sm font-medium
                  ${step === stepItem.key || (index < ['select', 'input', 'analyzing', 'results'].indexOf(step))
                    ? 'bg-blue-500 text-white border-blue-500' 
                    : 'bg-white text-gray-400 border-gray-300'
                  }
                `}>
                  {stepItem.icon}
                </div>
                <span className={`ml-2 text-sm font-medium ${
                  step === stepItem.key ? 'text-blue-600' : 'text-gray-500'
                }`}>
                  {stepItem.label}
                </span>
                {index < 3 && (
                  <div className={`w-8 h-0.5 mx-4 ${
                    index < ['select', 'input', 'analyzing', 'results'].indexOf(step) 
                      ? 'bg-blue-500' 
                      : 'bg-gray-300'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Error Display */}
        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-800">{error}</p>
          </div>
        )}

        {/* Step 1: Agent Selection */}
        {step === 'select' && (
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold text-gray-900">
                Choose Your Council Members
              </h2>
              <button
                onClick={handleSelectAll}
                className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-800 border border-blue-300 rounded-lg hover:bg-blue-50"
              >
                {selectedAgents.length === Object.keys(availableAgents).length ? 'Deselect All' : 'Select All'}
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              {Object.entries(availableAgents).map(([key, agent]) => (
                <AgentCard
                  key={key}
                  agent={agent}
                  isSelected={selectedAgents.includes(key)}
                  onSelect={handleAgentSelect}
                />
              ))}
            </div>

            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-600">
                {selectedAgents.length} of {Object.keys(availableAgents).length} experts selected
              </p>
              <button
                onClick={proceedToInput}
                disabled={selectedAgents.length === 0}
                className={`px-6 py-3 rounded-lg font-medium ${
                  selectedAgents.length === 0
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                Continue to Product Details
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Product Input */}
        {step === 'input' && (
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Product Information
            </h2>
            
            <form onSubmit={(e) => { e.preventDefault(); handleAnalyze(); }} className="space-y-6">
              <div>
                <label htmlFor="name" className="form-label">
                  Product Name *
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
                  Product Description *
                </label>
                <textarea
                  name="description"
                  id="description"
                  rows={4}
                  value={productData.description}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="Describe your product and its main value proposition"
                  required
                />
              </div>

              <div>
                <label htmlFor="target_market" className="form-label">
                  Target Market *
                </label>
                <textarea
                  name="target_market"
                  id="target_market"
                  rows={3}
                  value={productData.target_market}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="Who are your target customers? Include demographics, pain points, etc."
                  required
                />
              </div>

              <div>
                <label htmlFor="key_features" className="form-label">
                  Key Features *
                </label>
                <textarea
                  name="key_features"
                  id="key_features"
                  rows={3}
                  value={productData.key_features}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="List your main product features and capabilities"
                  required
                />
              </div>

              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={() => setStep('select')}
                  className="px-6 py-3 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50"
                >
                  Back to Agent Selection
                </button>
                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700"
                >
                  Start Council Analysis
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Step 3: Analyzing */}
        {step === 'analyzing' && (
          <div className="bg-white rounded-lg shadow-sm p-12 text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-6"></div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Council Analysis in Progress
            </h2>
            <p className="text-gray-600 mb-6">
              Our expert council members are analyzing your product...
            </p>
            <div className="max-w-md mx-auto space-y-2">
              {selectedAgents.map(agentKey => (
                <div key={agentKey} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm font-medium">{availableAgents[agentKey]?.name}</span>
                  <div className="animate-pulse w-4 h-4 bg-blue-500 rounded-full"></div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Step 4: Results */}
        {step === 'results' && analysisResults && (
          <div className="space-y-6">
            {/* Council Summary */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Council Summary
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {Math.round(analysisResults.council_summary.confidence_score * 100)}%
                  </div>
                  <div className="text-sm text-gray-600">Overall Confidence</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    {analysisResults.successful_analyses}
                  </div>
                  <div className="text-sm text-gray-600">Expert Analyses</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">
                    {analysisResults.council_summary.key_themes.length}
                  </div>
                  <div className="text-sm text-gray-600">Key Themes</div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">Overall Assessment</h3>
                <p className="text-gray-700">{analysisResults.council_summary.overall_assessment}</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Key Themes Identified</h3>
                <div className="flex flex-wrap gap-2">
                  {analysisResults.council_summary.key_themes.map((theme, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
                    >
                      {theme}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Individual Agent Analyses */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Expert Analyses
              </h2>
              <div className="space-y-6">
                {Object.entries(analysisResults.agent_analyses).map(([agentKey, analysis]) => (
                  <div key={agentKey} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                          {analysis.agent_name.split(' ').map(part => part.charAt(0)).join('').toUpperCase().slice(0, 2)}
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{analysis.agent_name}</h3>
                          <p className="text-sm text-gray-600">{analysis.agent_role}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium text-gray-900">
                          {Math.round(analysis.confidence * 100)}% Confidence
                        </div>
                      </div>
                    </div>
                    
                    <div className="prose prose-sm max-w-none">
                      <p className="text-gray-700 whitespace-pre-wrap">{analysis.analysis}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex justify-center space-x-4">
              <button
                onClick={resetWorkflow}
                className="px-6 py-3 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50"
              >
                New Analysis
              </button>
              <button
                onClick={() => window.print()}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700"
              >
                Export Results
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 