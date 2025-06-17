'use client';

import * as React from 'react';
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Brain, Users, Zap, Shield, Play, CheckCircle, TrendingUp, Star, Award, Target, Building, UserX, Clock, DollarSign, AlertTriangle, Mic, MessageSquare, Database, Code, Lock, Globe, BarChart3, Settings, Headphones, Bot } from 'lucide-react';

export default function PresentationPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [activeDemo, setActiveDemo] = useState<string | null>(null);

  const handleTryDemo = () => {
    window.open('/council', '_blank');
  };

  const handleGetStarted = () => {
    window.open('/council', '_blank');
  };

  const tabs = [
    { id: 'overview', label: 'Problem & Solution', icon: Target },
    { id: 'technology', label: 'Technology Stack', icon: Code },
    { id: 'features', label: 'Innovative Features', icon: Zap },
    { id: 'enterprise', label: 'B2B Enterprise', icon: Shield },
    { id: 'architecture', label: 'System Architecture', icon: Database },
    { id: 'roadmap', label: 'Product Roadmap', icon: BarChart3 }
  ];

  const renderOverviewTab = () => (
    <div className="space-y-24">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        
        <div className="relative container mx-auto px-4 py-24">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 text-sm font-medium px-4 py-2 rounded-full mb-8">
              <Award className="w-4 h-4 mr-2" />
              AI-Powered Product Strategy for Early-Stage Companies
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 leading-tight">
              Product Strategy
              <span className="block text-white">Council</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              When you have <strong>limited customers</strong> and <strong>no access to real users</strong>, how do you make confident product decisions? Our AI expert council solves the early-stage PM's biggest challenge.
            </p>
            
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
            </div>
            
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

      {/* Problem Section */}
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

          {/* Use Cases */}
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

      {/* Multi-Agent Solution */}
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
    </div>
  );

  const renderTechnologyTab = () => (
    <div className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Technology Stack & Architecture Decisions
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Every technology choice optimized for multi-agent conversations, real-time processing, and enterprise scale.
          </p>
        </div>

        {/* AutoGen vs Others */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why AutoGen for Multi-Agent Framework</h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-6 shadow-xl border-0 hover:shadow-2xl transition-all duration-300">
              <div className="text-red-600 mb-4">
                <AlertTriangle className="h-6 w-6" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-3">LangChain Approach</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>❌ Sequential agent execution</li>
                <li>❌ Complex state management</li>
                <li>❌ Limited conversation flow control</li>
                <li>❌ Debugging nightmare</li>
              </ul>
            </Card>

            <Card className="p-6 shadow-xl border-0 hover:shadow-2xl transition-all duration-300">
              <div className="text-orange-600 mb-4">
                <Settings className="h-6 w-6" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-3">CrewAI Framework</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>⚠️ Good for workflows</li>
                <li>❌ Limited debate dynamics</li>
                <li>❌ Rigid role definitions</li>
                <li>❌ No real-time conversation</li>
              </ul>
            </Card>

            <Card className="p-6 shadow-xl border-0 hover:shadow-2xl transition-all duration-300 border-2 border-green-500">
              <div className="text-green-600 mb-4">
                <CheckCircle className="h-6 w-6" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-3">AutoGen (Our Choice)</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>✅ True conversational agents</li>
                <li>✅ Dynamic turn-taking</li>
                <li>✅ Flexible termination conditions</li>
                <li>✅ Built-in debate patterns</li>
                <li>✅ Microsoft research backing</li>
              </ul>
            </Card>
          </div>
        </div>

        {/* Full Stack */}
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <Card className="p-8 shadow-xl border-0 hover:shadow-2xl transition-all duration-300">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                <Code className="h-5 w-5 text-blue-600" />
              </div>
              Frontend Excellence
            </h3>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold">Next.js 14 (App Router)</span>
                  <span className="text-blue-600 font-bold">Latest</span>
                </div>
                <p className="text-sm text-gray-600">Server components + streaming for real-time agent responses</p>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold">TypeScript + Zod</span>
                  <span className="text-blue-600 font-bold">100% Type Safe</span>
                </div>
                <p className="text-sm text-gray-600">Runtime validation for agent message schemas</p>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold">Tailwind CSS + shadcn/ui</span>
                  <span className="text-blue-600 font-bold">Design System</span>
                </div>
                <p className="text-sm text-gray-600">Consistent, accessible components</p>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold">WebSockets + Server-Sent Events</span>
                  <span className="text-blue-600 font-bold">Real-time</span>
                </div>
                <p className="text-sm text-gray-600">Live agent conversation streaming</p>
              </div>
            </div>
          </Card>
          
          <Card className="p-8 shadow-xl border-0 hover:shadow-2xl transition-all duration-300">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                <Database className="h-5 w-5 text-purple-600" />
              </div>
              Backend Power
            </h3>
            <div className="space-y-4">
              <div className="p-4 bg-purple-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold">Python FastAPI + Pydantic</span>
                  <span className="text-purple-600 font-bold">High Performance</span>
                </div>
                <p className="text-sm text-gray-600">Async endpoints with automatic API docs</p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold">AutoGen + OpenAI GPT-4</span>
                  <span className="text-purple-600 font-bold">Multi-Agent</span>
                </div>
                <p className="text-sm text-gray-600">Conversational agent orchestration</p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold">PostgreSQL + Prisma</span>
                  <span className="text-purple-600 font-bold">Type-Safe ORM</span>
                </div>
                <p className="text-sm text-gray-600">Conversation history + user data</p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold">Redis + Celery</span>
                  <span className="text-purple-600 font-bold">Background Jobs</span>
                </div>
                <p className="text-sm text-gray-600">Agent conversation queuing</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );

  const renderFeaturesTab = () => (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Innovative Features That Set Us Apart
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Advanced interface design meets cutting-edge AI capabilities for an unparalleled user experience.
          </p>
        </div>

        {/* Audio + Text Interface */}
        <div className="mb-16">
          <Card className="p-8 shadow-2xl border-0 bg-gradient-to-br from-blue-50 to-indigo-50 hover:shadow-3xl transition-all duration-300">
            <div className="flex items-start gap-6">
              <div className="bg-blue-100 p-4 rounded-xl">
                <div className="flex gap-2">
                  <Headphones className="h-8 w-8 text-blue-600" />
                  <MessageSquare className="h-8 w-8 text-blue-600" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Seamless Audio + Text Interface</h3>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  Revolutionary multimodal interaction where users can seamlessly switch between voice and text, with AI agents responding in both formats simultaneously.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-3">🎤 Voice Features</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Real-time speech-to-text with context awareness</li>
                      <li>• Natural voice synthesis for each expert persona</li>
                      <li>• Interrupt & resume conversation flow</li>
                      <li>• Multi-language support (English, Spanish, French)</li>
                      <li>• Noise cancellation & echo reduction</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-3">💬 Text Features</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Rich markdown rendering with code blocks</li>
                      <li>• Real-time collaborative editing</li>
                      <li>• Smart auto-complete based on conversation</li>
                      <li>• Copy/paste integration with external tools</li>
                      <li>• Export conversations to multiple formats</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Advanced Agent Brain */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Enhanced Agent Intelligence</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 shadow-xl border-0 hover:shadow-2xl transition-all duration-300">
              <div className="text-purple-600 mb-4">
                <Brain className="h-8 w-8" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Dynamic Knowledge Loading</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Real-time market data integration</li>
                <li>• Company-specific knowledge bases</li>
                <li>• Industry trend analysis</li>
                <li>• Competitive intelligence feeds</li>
                <li>• User behavior pattern recognition</li>
              </ul>
            </Card>

            <Card className="p-6 shadow-xl border-0 hover:shadow-2xl transition-all duration-300">
              <div className="text-green-600 mb-4">
                <Database className="h-8 w-8" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Contextual Memory System</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Long-term conversation memory</li>
                <li>• Cross-session context retention</li>
                <li>• User preference learning</li>
                <li>• Project-specific knowledge graphs</li>
                <li>• Collaborative team memory</li>
              </ul>
            </Card>

            <Card className="p-6 shadow-xl border-0 hover:shadow-2xl transition-all duration-300">
              <div className="text-blue-600 mb-4">
                <Zap className="h-8 w-8" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Adaptive Reasoning Engine</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Domain-specific reasoning patterns</li>
                <li>• Bias detection & correction</li>
                <li>• Multi-step logical inference</li>
                <li>• Uncertainty quantification</li>
                <li>• Explanation generation</li>
              </ul>
            </Card>
          </div>
        </div>

        {/* Advanced Use Cases */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Advanced Use Case Scenarios</h3>
          <div className="space-y-8">
            <Card className="p-8 shadow-xl border-0 hover:shadow-2xl transition-all duration-300">
              <h4 className="text-2xl font-bold text-gray-900 mb-4">🎯 Product Launch Strategy Session</h4>
              <p className="text-gray-600 mb-4">
                User uploads their product spec, target market data, and competitive analysis. AI council debates launch timing, pricing strategy, go-to-market approach, and risk mitigation.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <strong>Input:</strong> Product specs, market data, user interviews<br/>
                <strong>Process:</strong> 5 experts debate for 3 rounds with evidence<br/>
                <strong>Output:</strong> Launch roadmap, pricing tiers, risk assessment, success metrics
              </div>
            </Card>

            <Card className="p-8 shadow-xl border-0 hover:shadow-2xl transition-all duration-300">
              <h4 className="text-2xl font-bold text-gray-900 mb-4">🔄 Pivot Decision Analysis</h4>
              <p className="text-gray-600 mb-4">
                Upload current metrics, user feedback, and market changes. Council analyzes whether to pivot, what direction to take, and how to execute the transition.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <strong>Input:</strong> KPIs, user feedback, market trends, financial data<br/>
                <strong>Process:</strong> Deep analysis of current state vs opportunities<br/>
                <strong>Output:</strong> Pivot recommendation, transition plan, resource requirements
              </div>
            </Card>

            <Card className="p-8 shadow-xl border-0 hover:shadow-2xl transition-all duration-300">
              <h4 className="text-2xl font-bold text-gray-900 mb-4">💰 Investment Pitch Optimization</h4>
              <p className="text-gray-600 mb-4">
                Submit pitch deck and business model. Council critiques from investor perspectives, identifies weak points, and suggests improvements.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <strong>Input:</strong> Pitch deck, financial projections, market sizing<br/>
                <strong>Process:</strong> Multi-perspective investor simulation<br/>
                <strong>Output:</strong> Refined pitch, Q&A preparation, investor-specific versions
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );

  const renderEnterpriseTab = () => (
    <div className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Enterprise-Grade B2B Features
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Built for enterprise scale with security, compliance, and reliability at the core.
          </p>
        </div>

        {/* Security & Compliance */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Security & Compliance</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="p-8 shadow-xl border-0 hover:shadow-2xl transition-all duration-300">
              <div className="text-red-600 mb-4">
                <Shield className="h-8 w-8" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Security Implementation</h4>
              <div className="space-y-4">
                <div className="p-4 bg-red-50 rounded-lg">
                  <div className="font-bold mb-2">🔐 SOC 2 Type II Compliance</div>
                  <p className="text-sm text-gray-600">Annual third-party security audits, comprehensive security controls documentation</p>
                </div>
                <div className="p-4 bg-red-50 rounded-lg">
                  <div className="font-bold mb-2">🛡️ End-to-End Encryption</div>
                  <p className="text-sm text-gray-600">AES-256 encryption at rest, TLS 1.3 in transit, zero-knowledge architecture</p>
                </div>
                <div className="p-4 bg-red-50 rounded-lg">
                  <div className="font-bold mb-2">👥 Role-Based Access Control</div>
                  <p className="text-sm text-gray-600">Granular permissions, multi-factor authentication, session management</p>
                </div>
                <div className="p-4 bg-red-50 rounded-lg">
                  <div className="font-bold mb-2">📋 GDPR & CCPA Compliance</div>
                  <p className="text-sm text-gray-600">Data portability, right to deletion, consent management, audit trails</p>
                </div>
              </div>
            </Card>

            <Card className="p-8 shadow-xl border-0 hover:shadow-2xl transition-all duration-300">
              <div className="text-blue-600 mb-4">
                <Lock className="h-8 w-8" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Data Protection</h4>
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <div className="font-bold mb-2">🏢 Private Cloud Deployment</div>
                  <p className="text-sm text-gray-600">On-premises or private cloud options, air-gapped environments</p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <div className="font-bold mb-2">🔄 Data Residency Control</div>
                  <p className="text-sm text-gray-600">Choose data center regions, comply with local regulations</p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <div className="font-bold mb-2">📊 Audit Logging</div>
                  <p className="text-sm text-gray-600">Comprehensive activity logs, tamper-proof audit trails</p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <div className="font-bold mb-2">🔒 Data Loss Prevention</div>
                  <p className="text-sm text-gray-600">Automatic PII detection, content filtering, leak prevention</p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Scalability & Reliability */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Scalability & Reliability</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 shadow-xl border-0 hover:shadow-2xl transition-all duration-300">
              <div className="text-green-600 mb-4">
                <Globe className="h-8 w-8" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Global Infrastructure</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Multi-region deployment (US, EU, APAC)</li>
                <li>• CDN-optimized content delivery</li>
                <li>• 99.9% uptime SLA guarantee</li>
                <li>• Auto-scaling based on demand</li>
                <li>• Disaster recovery protocols</li>
              </ul>
            </Card>

            <Card className="p-6 shadow-xl border-0 hover:shadow-2xl transition-all duration-300">
              <div className="text-purple-600 mb-4">
                <BarChart3 className="h-8 w-8" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Performance Monitoring</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Real-time performance metrics</li>
                <li>• Automated alerting system</li>
                <li>• Load balancing optimization</li>
                <li>• Database query optimization</li>
                <li>• Agent response time SLAs</li>
              </ul>
            </Card>

            <Card className="p-6 shadow-xl border-0 hover:shadow-2xl transition-all duration-300">
              <div className="text-orange-600 mb-4">
                <Settings className="h-8 w-8" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Enterprise Integration</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• SSO integration (SAML, OAuth)</li>
                <li>• REST API with rate limiting</li>
                <li>• Webhook notifications</li>
                <li>• Slack/Teams integrations</li>
                <li>• Custom branding options</li>
              </ul>
            </Card>
          </div>
        </div>

        {/* Implementation Plan */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Implementation Roadmap</h3>
          <Card className="p-8 shadow-xl border-0 max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">1</div>
                <div>
                  <h4 className="font-bold text-gray-900">Security Foundation (Months 1-2)</h4>
                  <p className="text-gray-600">Implement core security controls, encryption, authentication</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">2</div>
                <div>
                  <h4 className="font-bold text-gray-900">Compliance Certification (Months 3-4)</h4>
                  <p className="text-gray-600">SOC 2 audit preparation, GDPR/CCPA compliance implementation</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">3</div>
                <div>
                  <h4 className="font-bold text-gray-900">Scalability Infrastructure (Months 5-6)</h4>
                  <p className="text-gray-600">Multi-region deployment, auto-scaling, performance optimization</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">4</div>
                <div>
                  <h4 className="font-bold text-gray-900">Enterprise Integrations (Months 7-8)</h4>
                  <p className="text-gray-600">SSO, API development, third-party integrations</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );

  const renderArchitectureTab = () => (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            System Architecture & Design
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Scalable, resilient architecture designed for real-time multi-agent conversations at enterprise scale.
          </p>
        </div>

        {/* Architecture Overview */}
        <div className="mb-16">
          <Card className="p-8 shadow-xl border-0 bg-gradient-to-br from-gray-50 to-blue-50">
            <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">High-Level Architecture</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Frontend Layer</h4>
                <p className="text-sm text-gray-600">Next.js, WebSockets, Real-time UI</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Code className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">API Gateway</h4>
                <p className="text-sm text-gray-600">FastAPI, Authentication, Rate Limiting</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Bot className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Agent Engine</h4>
                <p className="text-sm text-gray-600">AutoGen, GPT-4, Multi-Agent Orchestration</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Database className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Data Layer</h4>
                <p className="text-sm text-gray-600">PostgreSQL, Redis, Vector DB</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Detailed Components */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <Card className="p-8 shadow-xl border-0">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Agent Orchestration Engine</h3>
            <div className="space-y-4">
              <div className="p-4 bg-purple-50 rounded-lg">
                <h4 className="font-bold mb-2">🤖 Agent Manager</h4>
                <p className="text-sm text-gray-600">Spawns, monitors, and terminates agent conversations</p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <h4 className="font-bold mb-2">💬 Conversation Router</h4>
                <p className="text-sm text-gray-600">Routes messages between agents based on expertise</p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <h4 className="font-bold mb-2">⚖️ Consensus Engine</h4>
                <p className="text-sm text-gray-600">Determines when agents reach agreement or need mediation</p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <h4 className="font-bold mb-2">📊 Output Synthesizer</h4>
                <p className="text-sm text-gray-600">Combines agent outputs into coherent recommendations</p>
              </div>
            </div>
          </Card>

          <Card className="p-8 shadow-xl border-0">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Data & Knowledge Management</h3>
            <div className="space-y-4">
              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-bold mb-2">🧠 Vector Database</h4>
                <p className="text-sm text-gray-600">Embeddings for semantic search and knowledge retrieval</p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-bold mb-2">📚 Knowledge Graph</h4>
                <p className="text-sm text-gray-600">Relationships between concepts, companies, and strategies</p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-bold mb-2">🔄 Real-time Data Feeds</h4>
                <p className="text-sm text-gray-600">Market data, news, competitor analysis integration</p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-bold mb-2">💾 Conversation Memory</h4>
                <p className="text-sm text-gray-600">Persistent context across sessions and projects</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Scalability Design */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Scalability & Performance</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 shadow-xl border-0">
              <div className="text-blue-600 mb-4">
                <Zap className="h-8 w-8" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Horizontal Scaling</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Kubernetes orchestration</li>
                <li>• Auto-scaling based on load</li>
                <li>• Stateless service design</li>
                <li>• Load balancer distribution</li>
                <li>• Database read replicas</li>
              </ul>
            </Card>

            <Card className="p-6 shadow-xl border-0">
              <div className="text-green-600 mb-4">
                <BarChart3 className="h-8 w-8" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Performance Optimization</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Redis caching layer</li>
                <li>• Connection pooling</li>
                <li>• Async processing queues</li>
                <li>• CDN for static assets</li>
                <li>• Database query optimization</li>
              </ul>
            </Card>

            <Card className="p-6 shadow-xl border-0">
              <div className="text-purple-600 mb-4">
                <Shield className="h-8 w-8" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Reliability & Monitoring</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Circuit breaker patterns</li>
                <li>• Health check endpoints</li>
                <li>• Distributed tracing</li>
                <li>• Error rate monitoring</li>
                <li>• Automated failover</li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );

  const renderRoadmapTab = () => (
    <div className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Product Roadmap & Vision
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Our journey from MVP to the world's most advanced AI-powered product strategy platform.
          </p>
        </div>

        {/* Current State */}
        <div className="mb-16">
          <Card className="p-8 shadow-xl border-0 bg-gradient-to-br from-green-50 to-emerald-50">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                <CheckCircle className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">Current State (MVP)</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-bold text-gray-900 mb-3">✅ Core Features</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• 5-agent debate system</li>
                  <li>• RICE scoring output</li>
                  <li>• Basic web interface</li>
                  <li>• OpenAI GPT-4 integration</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-3">✅ Technology Stack</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Next.js frontend</li>
                  <li>• FastAPI backend</li>
                  <li>• AutoGen framework</li>
                  <li>• PostgreSQL database</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-3">✅ Deployment</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Vercel hosting</li>
                  <li>• CI/CD pipeline</li>
                  <li>• Basic monitoring</li>
                  <li>• Demo environment</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>

        {/* Roadmap Timeline */}
        <div className="space-y-8">
          {/* Q1 2024 */}
          <Card className="p-8 shadow-xl border-0 border-l-4 border-blue-500">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">Q1</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Q1 2024 - Enhanced User Experience</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-gray-900 mb-3">🎤 Audio Interface</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Speech-to-text integration</li>
                  <li>• Voice synthesis for agents</li>
                  <li>• Real-time audio streaming</li>
                  <li>• Multi-language support</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-3">🔧 Advanced Features</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Custom agent personalities</li>
                  <li>• Document upload & analysis</li>
                  <li>• Export to multiple formats</li>
                  <li>• Collaboration features</li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Q2 2024 */}
          <Card className="p-8 shadow-xl border-0 border-l-4 border-purple-500">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">Q2</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Q2 2024 - Enterprise Features</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-gray-900 mb-3">🔐 Security & Compliance</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• SOC 2 certification</li>
                  <li>• SSO integration</li>
                  <li>• GDPR compliance</li>
                  <li>• Audit logging</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-3">📈 Scalability</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Multi-region deployment</li>
                  <li>• Auto-scaling infrastructure</li>
                  <li>• Performance optimization</li>
                  <li>• 99.9% uptime SLA</li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Q3 2024 */}
          <Card className="p-8 shadow-xl border-0 border-l-4 border-green-500">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">Q3</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Q3 2024 - AI Intelligence Boost</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-gray-900 mb-3">🧠 Advanced AI</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Custom fine-tuned models</li>
                  <li>• Domain-specific expertise</li>
                  <li>• Improved reasoning chains</li>
                  <li>• Bias detection & correction</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-3">📊 Data Integration</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Real-time market data</li>
                  <li>• Competitive intelligence</li>
                  <li>• Industry trend analysis</li>
                  <li>• Custom knowledge bases</li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Q4 2024 */}
          <Card className="p-8 shadow-xl border-0 border-l-4 border-orange-500">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">Q4</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Q4 2024 - Platform Ecosystem</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-gray-900 mb-3">🔌 Integrations</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Slack/Teams integration</li>
                  <li>• Jira/Asana connectors</li>
                  <li>• CRM system integration</li>
                  <li>• Analytics platforms</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-3">🎯 Specialized Modules</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Industry-specific agents</li>
                  <li>• Custom workflow builder</li>
                  <li>• Advanced analytics</li>
                  <li>• White-label solutions</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>

        {/* Future Vision */}
        <div className="mt-16">
          <Card className="p-8 shadow-xl border-0 bg-gradient-to-br from-indigo-50 to-purple-50">
            <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">Future Vision (2025+)</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-indigo-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Brain className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-bold text-gray-900 mb-3">AI-First Product Management</h4>
                <p className="text-sm text-gray-600">Every product decision powered by AI insights, predictive analytics, and automated strategy optimization.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-bold text-gray-900 mb-3">Global Expert Network</h4>
                <p className="text-sm text-gray-600">Connect with real human experts, combine AI and human intelligence for ultimate product strategy.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-bold text-gray-900 mb-3">Industry Standard Platform</h4>
                <p className="text-sm text-gray-600">The go-to platform for product strategy across all industries, from startups to Fortune 500.</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Tab Navigation */}
      <div className="bg-white/10 backdrop-blur-sm border-b border-white/20 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-4 text-sm font-medium whitespace-nowrap transition-all duration-200 border-b-2 ${
                    activeTab === tab.id
                      ? 'text-blue-400 border-blue-400 bg-blue-500/10'
                      : 'text-gray-300 border-transparent hover:text-white hover:border-gray-400'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="min-h-screen">
        {activeTab === 'overview' && renderOverviewTab()}
        {activeTab === 'technology' && renderTechnologyTab()}
        {activeTab === 'features' && renderFeaturesTab()}
        {activeTab === 'enterprise' && renderEnterpriseTab()}
        {activeTab === 'architecture' && renderArchitectureTab()}
        {activeTab === 'roadmap' && renderRoadmapTab()}
      </div>

      {/* CTA Section */}
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