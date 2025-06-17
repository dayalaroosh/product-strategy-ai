'use client';

import * as React from 'react';
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Brain, Users, Zap, Shield, Play, CheckCircle, TrendingUp, Star, Award, Target, Building, UserX, Clock, DollarSign, AlertTriangle } from 'lucide-react';

export default function PresentationPage() {
  const [activeDemo, setActiveDemo] = useState<string | null>(null);

  const handleTryDemo = () => {
    window.open('/council', '_blank');
  };

  const handleGetStarted = () => {
    window.open('/council', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section with Animation */}
      <div className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        
        <div className="relative container mx-auto px-4 py-24">
          <div className="text-center max-w-5xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center bg-blue-100 text-blue-800 text-sm font-medium px-4 py-2 rounded-full mb-8">
              <Award className="w-4 h-4 mr-2" />
              AI-Powered Product Strategy for Early-Stage Companies
            </div>
            
            {/* Main Heading */}
            <h1 className="text-6xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 leading-tight">
              Product Strategy
              <span className="block text-white">Council</span>
            </h1>
            
            {/* Subheading */}
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              When you have <strong>limited customers</strong> and <strong>no access to real users</strong>, how do you make confident product decisions? Our AI expert council solves the early-stage PM's biggest challenge.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                size="lg" 
                className="text-lg px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-2xl transform hover:scale-105 transition-all duration-300"
                onClick={handleTryDemo}
              >
                <Play className="mr-2 h-5 w-5" />
                Experience Live Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-4 border-2 border-white/20 text-white hover:bg-white/10 backdrop-blur-sm"
                onClick={() => setActiveDemo('video')}
              >
                See Problem Demo
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">0-50</div>
                <div className="text-gray-400">Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">5 Experts</div>
                <div className="text-gray-400">In 5 Minutes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-400">10x</div>
                <div className="text-gray-400">Faster Insights</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* The Real Problem - Early Stage PM Pain Points */}
      <div className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              The Early-Stage PM's Nightmare
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Having worked at early-stage companies like Eightfold, I've experienced this firsthand. When you have limited customers and no user base, traditional product strategy approaches completely break down.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
            <Card className="p-8 shadow-2xl border-0 bg-gradient-to-br from-red-50 to-orange-50 hover:shadow-3xl transition-all duration-300">
              <div className="text-red-600 mb-4">
                <AlertTriangle className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">The Brutal Reality</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <UserX className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700"><strong>0-50 customers:</strong> Not enough for meaningful user research</span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Weeks of research:</strong> for insights that may be completely wrong</span>
                </li>
                <li className="flex items-start gap-3">
                  <DollarSign className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Expensive consultants:</strong> $200-500/hour for generic advice</span>
                </li>
                <li className="flex items-start gap-3">
                  <Building className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Investor pressure:</strong> "Where's your product-market fit data?"</span>
                </li>
              </ul>
            </Card>
            
            <Card className="p-8 shadow-2xl border-0 bg-gradient-to-br from-blue-50 to-indigo-50 hover:shadow-3xl transition-all duration-300">
              <div className="text-blue-600 mb-4">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">What You Really Need</h3>
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                  <span className="font-medium text-gray-700">Expert Perspectives</span>
                  <span className="text-2xl font-bold text-green-600">✓</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                  <span className="font-medium text-gray-700">Fast Validation</span>
                  <span className="text-2xl font-bold text-green-600">✓</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                  <span className="font-medium text-gray-700">Multiple Viewpoints</span>
                  <span className="text-2xl font-bold text-green-600">✓</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                  <span className="font-medium text-gray-700">Structured Analysis</span>
                  <span className="text-2xl font-bold text-green-600">✓</span>
                </div>
              </div>
            </Card>
          </div>

          {/* Real Use Cases */}
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Three Critical Scenarios I've Lived Through</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 shadow-xl border-0 hover:shadow-2xl transition-all duration-300">
                <div className="text-purple-600 mb-4">
                  <Users className="h-6 w-6" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">The Early-Stage PM</h4>
                <p className="text-gray-600 text-sm mb-4">
                  "I have 15 customers, limited budget, and my CEO wants a roadmap. How do I prioritize features when I can't run proper user research?"
                </p>
                <div className="text-xs text-purple-600 font-medium">❌ Current: Guess and hope</div>
                <div className="text-xs text-green-600 font-medium">✅ With PSC: Expert validation in 5 min</div>
              </Card>

              <Card className="p-6 shadow-xl border-0 hover:shadow-2xl transition-all duration-300">
                <div className="text-blue-600 mb-4">
                  <Building className="h-6 w-6" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">The Founder/CTO</h4>
                <p className="text-gray-600 text-sm mb-4">
                  "Should we pivot? Our metrics are flat, but is it the product or the market? I need multiple expert perspectives fast."
                </p>
                <div className="text-xs text-purple-600 font-medium">❌ Current: Expensive consultants</div>
                <div className="text-xs text-green-600 font-medium">✅ With PSC: 5 experts debate in real-time</div>
              </Card>

              <Card className="p-6 shadow-xl border-0 hover:shadow-2xl transition-all duration-300">
                <div className="text-green-600 mb-4">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">The VC/Innovation Head</h4>
                <p className="text-gray-600 text-sm mb-4">
                  "I need to evaluate 20 startup pitches this week. How do I quickly assess product-market fit potential without deep research?"
                </p>
                <div className="text-xs text-purple-600 font-medium">❌ Current: Surface-level analysis</div>
                <div className="text-xs text-green-600 font-medium">✅ With PSC: Deep expert analysis per pitch</div>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* The Multi-Agent Solution */}
      <div className="py-24 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Multi-Agent AI Changes Everything
            </h2>
            <p className="text-xl text-blue-200 max-w-4xl mx-auto leading-relaxed">
              Traditional single LLM approaches give you one perspective. Our multi-agent framework creates actual expert debates with conflicting viewpoints, just like a real strategy council.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-8 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 group">
              <div className="text-blue-400 mb-6 transform group-hover:scale-110 transition-transform duration-300">
                <Brain className="h-12 w-12" />
              </div>
              <h3 className="text-2xl font-bold mb-4">5 Specialized AI Experts</h3>
              <p className="text-blue-200 mb-6">
                Each AI agent has deep domain expertise and argues from their specialized perspective, creating natural tension and comprehensive analysis.
              </p>
              <ul className="space-y-2 text-blue-100">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span><strong>Market Research Expert:</strong> TAM, competition, trends</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span><strong>Technical Architect:</strong> Feasibility, scalability</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span><strong>Business Strategist:</strong> Revenue, partnerships</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span><strong>UX Researcher:</strong> User behavior, adoption</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span><strong>Financial Analyst:</strong> Unit economics, pricing</span>
                </li>
              </ul>
            </Card>
            
            <Card className="p-8 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 group">
              <div className="text-purple-400 mb-6 transform group-hover:scale-110 transition-transform duration-300">
                <Users className="h-12 w-12" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Real Debate Dynamics</h3>
              <p className="text-blue-200 mb-6">
                Watch experts challenge each other's assumptions in structured rounds, surfacing blind spots you'd never find with a single AI response.
              </p>
              <ul className="space-y-2 text-blue-100">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span><strong>Opposing Viewpoints:</strong> Natural conflicts emerge</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span><strong>Evidence-Based Arguments:</strong> Each claim backed by reasoning</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span><strong>Iterative Refinement:</strong> Ideas evolve through discussion</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span><strong>Consensus Building:</strong> Final aligned recommendations</span>
                </li>
              </ul>
            </Card>
            
            <Card className="p-8 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 group">
              <div className="text-yellow-400 mb-6 transform group-hover:scale-110 transition-transform duration-300">
                <Zap className="h-12 w-12" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Tangible Outputs</h3>
              <p className="text-blue-200 mb-6">
                Get specific, actionable deliverables you can present to stakeholders, not generic AI responses.
              </p>
              <ul className="space-y-2 text-blue-100">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span><strong>RICE Scores:</strong> Prioritized feature ranking</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span><strong>Risk Assessment:</strong> What could go wrong</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span><strong>Market Positioning:</strong> Competitive analysis</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span><strong>Implementation Roadmap:</strong> Step-by-step plan</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>

      {/* Why Multi-Agent vs Single LLM */}
      <div className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Single LLM vs. Multi-Agent Framework
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The difference between asking one smart person versus assembling a diverse expert council.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="p-8 shadow-xl border-0 hover:shadow-2xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                  <AlertTriangle className="h-5 w-5 text-red-600" />
                </div>
                Single LLM Approach
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                  <span className="font-medium">One Perspective Only</span>
                  <span className="text-red-600 font-bold">❌</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                  <span className="font-medium">Generic Responses</span>
                  <span className="text-red-600 font-bold">❌</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                  <span className="font-medium">No Challenge/Debate</span>
                  <span className="text-red-600 font-bold">❌</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                  <span className="font-medium">Surface-Level Analysis</span>
                  <span className="text-red-600 font-bold">❌</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-red-100 rounded-lg">
                <p className="text-red-800 text-sm italic">
                  "Here's a generic product strategy framework. Apply it to your situation."
                </p>
              </div>
            </Card>
            
            <Card className="p-8 shadow-xl border-0 hover:shadow-2xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                  <Users className="h-5 w-5 text-green-600" />
                </div>
                Multi-Agent Council
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <span className="font-medium">5 Expert Perspectives</span>
                  <span className="text-green-600 font-bold">✓</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <span className="font-medium">Domain-Specific Insights</span>
                  <span className="text-green-600 font-bold">✓</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <span className="font-medium">Active Debate & Challenge</span>
                  <span className="text-green-600 font-bold">✓</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <span className="font-medium">Deep, Contextual Analysis</span>
                  <span className="text-green-600 font-bold">✓</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-green-100 rounded-lg">
                <p className="text-green-800 text-sm italic">
                  "Based on your 15 customers and SaaS metrics, here's why the UX expert disagrees with the business strategist about pricing..."
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* CTA Section - Enhanced */}
      <div className="py-24 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              Stop Guessing. Start Getting Expert Insights.
            </h2>
            <p className="text-xl md:text-2xl text-purple-200 mb-12 leading-relaxed">
              Every early-stage PM deserves access to expert strategy counsel. Try our AI council and see what you've been missing.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                size="lg" 
                className="text-xl px-12 py-6 bg-white text-purple-900 hover:bg-purple-50 shadow-2xl transform hover:scale-105 transition-all duration-300 font-bold"
                onClick={handleGetStarted}
              >
                Try Free Analysis
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-xl px-12 py-6 border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
                onClick={() => window.open('/council', '_blank')}
              >
                View Live Demo
              </Button>
            </div>
            
            <div className="mt-16 flex items-center justify-center gap-8 text-purple-200">
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-yellow-400" />
                <span>Perfect for 0-50 Customers</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span>5-Minute Expert Analysis</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-blue-400" />
                <span>No Setup Required</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 