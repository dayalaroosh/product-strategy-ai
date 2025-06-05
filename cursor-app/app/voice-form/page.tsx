'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import VoiceFormFiller from '../../components/VoiceFormFiller';

export default function VoiceFormPage() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    target_market: '',
    key_features: '',
    business_model: '',
    competitive_advantage: ''
  });

  const [showPreview, setShowPreview] = useState(false);

  const formFields = [
    { name: 'name', label: 'Product Name', placeholder: 'Enter your product name' },
    { name: 'description', label: 'Product Description', placeholder: 'Describe your product and its main features' },
    { name: 'target_market', label: 'Target Market', placeholder: 'Who are your target customers?' },
    { name: 'key_features', label: 'Key Features', placeholder: 'List your main product features' },
    { name: 'business_model', label: 'Business Model', placeholder: 'How will you make money?' },
    { name: 'competitive_advantage', label: 'Competitive Advantage', placeholder: 'What makes you unique?' }
  ];

  const handleFieldUpdate = (fieldName: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [fieldName]: value
    }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    handleFieldUpdate(name, value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setShowPreview(true);
  };

  const submitToAnalysis = () => {
    // Redirect to voice analysis with the form data
    const params = new URLSearchParams(formData);
    window.location.href = `/voice?${params.toString()}`;
  };

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
              <h1 className="text-3xl font-bold text-gray-900 mt-2">🎤 Smart Voice Forms</h1>
              <p className="text-gray-600 mt-1">Fill any form using your voice - naturally and intelligently</p>
            </div>
            
            <div className="text-right">
              <div className="text-sm text-gray-500">Phase 1 Feature</div>
              <div className="text-lg font-bold text-purple-600">Voice-First Form Filling</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Voice Form Section */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Demo Banner */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center">
                    <span className="bg-white text-blue-600 px-2 py-1 rounded-full text-xs font-bold mr-3">NEW</span>
                    <h3 className="text-xl font-bold">🎙️ Voice Form Demo</h3>
                  </div>
                  <p className="text-blue-100 mt-2 text-sm">
                    Try saying: "Fill product name with TaskFlow Pro" or "Set description to A project management tool for remote teams"
                  </p>
                </div>
              </div>
            </div>

            {/* Voice Control Panel */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">🎤 Voice Control Panel</h2>
              <VoiceFormFiller 
                onFieldUpdate={handleFieldUpdate}
                fields={formFields}
                isGlobalMode={true}
              />
            </div>

            {/* Form */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-900">Product Strategy Form</h2>
                <div className="text-sm text-gray-500">
                  Fill manually or use voice commands above ↑
                </div>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {formFields.map((field) => (
                  <div key={field.name}>
                    <label htmlFor={field.name} className="block text-sm font-medium text-gray-700 mb-2">
                      {field.label}
                      {formData[field.name as keyof typeof formData] && (
                        <span className="ml-2 text-green-600 text-xs">✓ Filled</span>
                      )}
                    </label>
                    {field.name === 'description' || field.name === 'key_features' || field.name === 'business_model' ? (
                      <textarea
                        name={field.name}
                        id={field.name}
                        rows={3}
                        value={formData[field.name as keyof typeof formData]}
                        onChange={handleInputChange}
                        className={`
                          w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent
                          transition-all duration-200
                          ${formData[field.name as keyof typeof formData] ? 'bg-green-50 border-green-300' : ''}
                        `}
                        placeholder={field.placeholder}
                      />
                    ) : (
                      <input
                        type="text"
                        name={field.name}
                        id={field.name}
                        value={formData[field.name as keyof typeof formData]}
                        onChange={handleInputChange}
                        className={`
                          w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent
                          transition-all duration-200
                          ${formData[field.name as keyof typeof formData] ? 'bg-green-50 border-green-300' : ''}
                        `}
                        placeholder={field.placeholder}
                      />
                    )}
                  </div>
                ))}

                <div className="flex justify-center pt-4">
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors transform hover:scale-105 shadow-lg"
                  >
                    📊 Preview & Analyze
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            
            {/* Form Progress */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">📋 Form Progress</h3>
              <div className="space-y-3">
                {formFields.map((field) => {
                  const isFilled = formData[field.name as keyof typeof formData].length > 0;
                  return (
                    <div key={field.name} className="flex items-center space-x-3">
                      <div className={`w-4 h-4 rounded-full ${isFilled ? 'bg-green-500' : 'bg-gray-300'}`}>
                        {isFilled && <span className="text-white text-xs flex items-center justify-center">✓</span>}
                      </div>
                      <span className={`text-sm ${isFilled ? 'text-green-700 font-medium' : 'text-gray-600'}`}>
                        {field.label}
                      </span>
                    </div>
                  );
                })}
              </div>
              <div className="mt-4 pt-4 border-t">
                <div className="text-sm text-gray-600">
                  Completion: {Math.round((Object.values(formData).filter(v => v.length > 0).length / formFields.length) * 100)}%
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{width: `${(Object.values(formData).filter(v => v.length > 0).length / formFields.length) * 100}%`}}
                  ></div>
                </div>
              </div>
            </div>

            {/* Voice Commands Reference */}
            <div className="bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl shadow-lg p-6 text-white">
              <h3 className="text-lg font-bold mb-4">🎙️ Voice Commands</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <div className="font-medium mb-1">Field-Specific:</div>
                  <div className="text-purple-100 text-xs space-y-1">
                    <div>• "Fill name with TaskFlow"</div>
                    <div>• "Set description to ..."</div>
                    <div>• "Target market is businesses"</div>
                  </div>
                </div>
                <div>
                  <div className="font-medium mb-1">Navigation:</div>
                  <div className="text-purple-100 text-xs space-y-1">
                    <div>• "Next field"</div>
                    <div>• "Previous field"</div>
                    <div>• "Clear description"</div>
                  </div>
                </div>
                <div>
                  <div className="font-medium mb-1">Smart Detection:</div>
                  <div className="text-purple-100 text-xs">
                    Just speak naturally! AI detects which field to fill based on content.
                  </div>
                </div>
              </div>
            </div>

            {/* Feature Highlights */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">✨ Smart Features</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-2">
                  <span className="text-green-500">🎯</span>
                  <span>Auto field detection</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-blue-500">🔄</span>
                  <span>Real-time preview</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-purple-500">⚡</span>
                  <span>Global hotkeys (⌘M)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-yellow-500">🧠</span>
                  <span>Smart content inference</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-red-500">✋</span>
                  <span>Confirmation dialogs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Preview Modal */}
      {showPreview && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900">📊 Form Preview</h3>
              <button
                onClick={() => setShowPreview(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="space-y-4 mb-6">
              {formFields.map((field) => {
                const value = formData[field.name as keyof typeof formData];
                return (
                  <div key={field.name} className="border-b pb-3">
                    <div className="font-medium text-gray-900">{field.label}</div>
                    <div className="text-gray-700 mt-1">
                      {value || <span className="text-gray-400 italic">Not filled</span>}
                    </div>
                  </div>
                );
              })}
            </div>
            
            <div className="flex space-x-4">
              <button
                onClick={submitToAnalysis}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium transition-colors"
              >
                🚀 Analyze with AI Council
              </button>
              <button
                onClick={() => setShowPreview(false)}
                className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-700 py-3 px-6 rounded-lg font-medium transition-colors"
              >
                📝 Continue Editing
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 