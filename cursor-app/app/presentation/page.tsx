'use client';

import * as React from 'react';
import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Brain, Users, Zap, Shield, Play, CheckCircle, TrendingUp, Star, Award, Target, Building, UserX, Clock, DollarSign, AlertTriangle, Mic, MessageSquare, Database, Code, Lock, Globe, BarChart3, Settings, Headphones, Bot, User, GraduationCap, Briefcase, Lightbulb, Mail, Linkedin, Github } from 'lucide-react';

export default function PresentationPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [activeDemo, setActiveDemo] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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
    { id: 'gtm', label: 'GTM Strategy', icon: TrendingUp },
    { id: 'roadmap', label: 'Product Roadmap', icon: BarChart3 },
    { id: 'about', label: 'About the Creator', icon: User }
  ];

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    // Scroll to top when switching tabs
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderOverviewTab = () => (
    <div className="space-y-24">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-purple-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-3/4 w-24 h-24 bg-pink-500/10 rounded-full blur-xl animate-pulse delay-500"></div>
        </div>
        
        <div className="relative container mx-auto px-4 py-24">
          <div className={`text-center max-w-5xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center bg-blue-100 text-blue-800 text-sm font-medium px-4 py-2 rounded-full mb-8 animate-bounce">
              <Award className="w-4 h-4 mr-2" />
              AI-Powered Product Strategy for Early-Stage Companies
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 leading-tight animate-fade-in">
              Product Strategy
              <span className="block text-white">Council</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              When you have <strong className="text-blue-400">limited customers</strong> and <strong className="text-purple-400">no access to real users</strong>, how do you make confident product decisions? Our AI expert council solves the early-stage PM's biggest challenge.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                size="lg" 
                className="text-lg px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-2xl transform hover:scale-105 transition-all duration-300 group"
                onClick={handleTryDemo}
              >
                <Play className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                Experience Live Demo
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="text-center transform hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-bold text-blue-400 mb-2 animate-pulse">0-50</div>
                <div className="text-gray-400">Customers</div>
              </div>
              <div className="text-center transform hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-bold text-purple-400 mb-2 animate-pulse delay-200">5 Experts</div>
                <div className="text-gray-400">In 5 Minutes</div>
              </div>
              <div className="text-center transform hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-bold text-pink-400 mb-2 animate-pulse delay-500">10x</div>
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
            <Card className="p-8 shadow-2xl border-0 bg-gradient-to-br from-red-50 to-orange-50 card-hover">
              <div className="text-red-600 mb-4 animate-float">
                <AlertTriangle className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">The Brutal Reality</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 transform hover:translate-x-2 transition-transform duration-200">
                  <UserX className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700"><strong>0-50 customers:</strong> Not enough for meaningful user research</span>
                </li>
                <li className="flex items-start gap-3 transform hover:translate-x-2 transition-transform duration-200">
                  <Clock className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Weeks of research:</strong> for insights that may be completely wrong</span>
                </li>
                <li className="flex items-start gap-3 transform hover:translate-x-2 transition-transform duration-200">
                  <DollarSign className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Expensive consultants:</strong> $200-500/hour for generic advice</span>
                </li>
                <li className="flex items-start gap-3 transform hover:translate-x-2 transition-transform duration-200">
                  <Building className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Investor pressure:</strong> "Where's your product-market fit data?"</span>
                </li>
              </ul>
            </Card>
            
            <Card className="p-8 shadow-2xl border-0 bg-gradient-to-br from-blue-50 to-indigo-50 card-hover">
              <div className="text-blue-600 mb-4 animate-float-delay">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">What You Really Need</h3>
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm transform hover:scale-105 transition-all duration-200">
                  <span className="font-medium text-gray-700">Expert Perspectives</span>
                  <span className="text-2xl font-bold text-green-600 animate-pulse">✓</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm transform hover:scale-105 transition-all duration-200">
                  <span className="font-medium text-gray-700">Fast Validation</span>
                  <span className="text-2xl font-bold text-green-600 animate-pulse">✓</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm transform hover:scale-105 transition-all duration-200">
                  <span className="font-medium text-gray-700">Multiple Viewpoints</span>
                  <span className="text-2xl font-bold text-green-600 animate-pulse">✓</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm transform hover:scale-105 transition-all duration-200">
                  <span className="font-medium text-gray-700">Structured Analysis</span>
                  <span className="text-2xl font-bold text-green-600 animate-pulse">✓</span>
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

          {/* Animated Comparison Chart */}
          <div className="mb-16 max-w-6xl mx-auto">
            <Card className="p-8 bg-white/10 backdrop-blur-sm border border-white/20">
              <h3 className="text-3xl font-bold text-center mb-8">Why Multi-Agent AI Outperforms Everything Else</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <h4 className="text-lg font-semibold mb-4 text-red-300">Traditional PM Tools</h4>
                  <div className="bg-red-500/20 rounded-lg p-4 mb-4">
                    <div className="h-4 bg-red-500 rounded-full animate-pulse" style={{width: '30%'}}></div>
                  </div>
                  <div className="text-xs text-red-200 mb-3 space-y-1">
                    <div>Productboard • Aha! • Roadmunk</div>
                    <div>UserVoice • Hotjar • Mixpanel</div>
                  </div>
                  <ul className="text-sm text-red-200 space-y-1">
                    <li>• Requires existing user data</li>
                    <li>• Manual analysis & insights</li>
                    <li>• No strategic guidance</li>
                    <li>• Expensive for early-stage</li>
                    <li>• Time-intensive setup</li>
                  </ul>
                </div>
                
                <div className="text-center">
                  <h4 className="text-lg font-semibold mb-4 text-orange-300">Single AI Solutions</h4>
                  <div className="bg-orange-500/20 rounded-lg p-4 mb-4">
                    <div className="h-4 bg-orange-500 rounded-full animate-pulse" style={{width: '55%'}}></div>
                  </div>
                  <div className="text-xs text-orange-200 mb-3 space-y-1">
                    <div>ChatGPT • Claude • Gemini</div>
                    <div>Pendo AI • Amplitude AI</div>
                  </div>
                  <ul className="text-sm text-orange-200 space-y-1">
                    <li>• One perspective only</li>
                    <li>• Generic responses</li>
                    <li>• No domain expertise</li>
                    <li>• Limited reasoning depth</li>
                    <li>• No conflict resolution</li>
                  </ul>
                </div>
                
                <div className="text-center">
                  <h4 className="text-lg font-semibold mb-4 text-green-300">Multi-Agent Council</h4>
                  <div className="space-y-2 mb-4">
                    <div className="bg-green-500/20 rounded-lg p-2">
                      <div className="h-2 bg-green-500 rounded-full animate-pulse" style={{width: '95%'}}></div>
                    </div>
                    <div className="bg-blue-500/20 rounded-lg p-2">
                      <div className="h-2 bg-blue-500 rounded-full animate-pulse delay-200" style={{width: '92%'}}></div>
                    </div>
                    <div className="bg-purple-500/20 rounded-lg p-2">
                      <div className="h-2 bg-purple-500 rounded-full animate-pulse delay-500" style={{width: '90%'}}></div>
                    </div>
                  </div>
                  <div className="text-xs text-green-200 mb-3">
                    <div>Our Innovation</div>
                  </div>
                  <ul className="text-sm text-green-200 space-y-1">
                    <li>• 5 specialized experts debate</li>
                    <li>• Deep domain knowledge</li>
                    <li>• Conflicting viewpoints surface</li>
                    <li>• Works with 0 customers</li>
                    <li>• Instant strategic insights</li>
                  </ul>
                </div>
              </div>
              
              {/* Detailed Comparison Table */}
              <div className="mt-8 bg-white/5 rounded-lg p-6">
                <h4 className="text-xl font-bold text-center mb-6">Detailed Feature Comparison</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/20">
                        <th className="text-left py-3 text-gray-300">Feature</th>
                        <th className="text-center py-3 text-red-300">Traditional</th>
                        <th className="text-center py-3 text-orange-300">Single AI</th>
                        <th className="text-center py-3 text-green-300">Multi-Agent</th>
                      </tr>
                    </thead>
                    <tbody className="space-y-2">
                      <tr className="border-b border-white/10">
                        <td className="py-3 text-gray-200">Works with 0-50 customers</td>
                        <td className="text-center py-3 text-red-400">❌</td>
                        <td className="text-center py-3 text-orange-400">⚠️</td>
                        <td className="text-center py-3 text-green-400">✅</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-3 text-gray-200">Multiple expert perspectives</td>
                        <td className="text-center py-3 text-red-400">❌</td>
                        <td className="text-center py-3 text-orange-400">❌</td>
                        <td className="text-center py-3 text-green-400">✅</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-3 text-gray-200">Real-time strategic analysis</td>
                        <td className="text-center py-3 text-red-400">❌</td>
                        <td className="text-center py-3 text-orange-400">⚠️</td>
                        <td className="text-center py-3 text-green-400">✅</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-3 text-gray-200">Debate & conflict resolution</td>
                        <td className="text-center py-3 text-red-400">❌</td>
                        <td className="text-center py-3 text-orange-400">❌</td>
                        <td className="text-center py-3 text-green-400">✅</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-3 text-gray-200">Cost for early-stage startups</td>
                        <td className="text-center py-3 text-red-400">High</td>
                        <td className="text-center py-3 text-orange-400">Medium</td>
                        <td className="text-center py-3 text-green-400">Low</td>
                      </tr>
                      <tr>
                        <td className="py-3 text-gray-200">Setup time</td>
                        <td className="text-center py-3 text-red-400">Weeks</td>
                        <td className="text-center py-3 text-orange-400">Minutes</td>
                        <td className="text-center py-3 text-green-400">Minutes</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </Card>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-8 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 group card-hover">
              <div className="text-blue-400 mb-6 transform group-hover:scale-110 transition-transform duration-300 animate-float">
                <Brain className="h-12 w-12" />
              </div>
              <h3 className="text-2xl font-bold mb-4">5 Specialized AI Experts</h3>
              <p className="text-blue-200 mb-6">
                Each AI agent has deep domain expertise and argues from their specialized perspective, creating natural tension and comprehensive analysis.
              </p>
              <ul className="space-y-2 text-blue-100">
                <li className="flex items-center gap-2 transform hover:translate-x-2 transition-transform duration-200">
                  <CheckCircle className="h-4 w-4 text-green-400 animate-pulse" />
                  <span><strong>Market Research Expert:</strong> TAM, competition, trends</span>
                </li>
                <li className="flex items-center gap-2 transform hover:translate-x-2 transition-transform duration-200">
                  <CheckCircle className="h-4 w-4 text-green-400 animate-pulse" />
                  <span><strong>Technical Architect:</strong> Feasibility, scalability</span>
                </li>
                <li className="flex items-center gap-2 transform hover:translate-x-2 transition-transform duration-200">
                  <CheckCircle className="h-4 w-4 text-green-400 animate-pulse" />
                  <span><strong>Business Strategist:</strong> Revenue, partnerships</span>
                </li>
                <li className="flex items-center gap-2 transform hover:translate-x-2 transition-transform duration-200">
                  <CheckCircle className="h-4 w-4 text-green-400 animate-pulse" />
                  <span><strong>UX Researcher:</strong> User behavior, adoption</span>
                </li>
                <li className="flex items-center gap-2 transform hover:translate-x-2 transition-transform duration-200">
                  <CheckCircle className="h-4 w-4 text-green-400 animate-pulse" />
                  <span><strong>Financial Analyst:</strong> Unit economics, pricing</span>
                </li>
              </ul>
            </Card>
            
            <Card className="p-8 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 group card-hover">
              <div className="text-purple-400 mb-6 transform group-hover:scale-110 transition-transform duration-300 animate-float-delay">
                <Users className="h-12 w-12" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Real Debate Dynamics</h3>
              <p className="text-blue-200 mb-6">
                Watch experts challenge each other's assumptions in structured rounds, surfacing blind spots you'd never find with a single AI response.
              </p>
              <ul className="space-y-2 text-blue-100">
                <li className="flex items-center gap-2 transform hover:translate-x-2 transition-transform duration-200">
                  <CheckCircle className="h-4 w-4 text-green-400 animate-pulse" />
                  <span><strong>Opposing Viewpoints:</strong> Natural conflicts emerge</span>
                </li>
                <li className="flex items-center gap-2 transform hover:translate-x-2 transition-transform duration-200">
                  <CheckCircle className="h-4 w-4 text-green-400 animate-pulse" />
                  <span><strong>Evidence-Based Arguments:</strong> Each claim backed by reasoning</span>
                </li>
                <li className="flex items-center gap-2 transform hover:translate-x-2 transition-transform duration-200">
                  <CheckCircle className="h-4 w-4 text-green-400 animate-pulse" />
                  <span><strong>Iterative Refinement:</strong> Ideas evolve through discussion</span>
                </li>
                <li className="flex items-center gap-2 transform hover:translate-x-2 transition-transform duration-200">
                  <CheckCircle className="h-4 w-4 text-green-400 animate-pulse" />
                  <span><strong>Consensus Building:</strong> Final aligned recommendations</span>
                </li>
              </ul>
            </Card>
            
            <Card className="p-8 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 group card-hover">
              <div className="text-yellow-400 mb-6 transform group-hover:scale-110 transition-transform duration-300 animate-float">
                <Zap className="h-12 w-12" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Tangible Outputs</h3>
              <p className="text-blue-200 mb-6">
                Get specific, actionable deliverables you can present to stakeholders, not generic AI responses.
              </p>
              <ul className="space-y-2 text-blue-100">
                <li className="flex items-center gap-2 transform hover:translate-x-2 transition-transform duration-200">
                  <CheckCircle className="h-4 w-4 text-green-400 animate-pulse" />
                  <span><strong>RICE Scores:</strong> Prioritized feature ranking</span>
                </li>
                <li className="flex items-center gap-2 transform hover:translate-x-2 transition-transform duration-200">
                  <CheckCircle className="h-4 w-4 text-green-400 animate-pulse" />
                  <span><strong>Risk Assessment:</strong> What could go wrong</span>
                </li>
                <li className="flex items-center gap-2 transform hover:translate-x-2 transition-transform duration-200">
                  <CheckCircle className="h-4 w-4 text-green-400 animate-pulse" />
                  <span><strong>Market Positioning:</strong> Competitive analysis</span>
                </li>
                <li className="flex items-center gap-2 transform hover:translate-x-2 transition-transform duration-200">
                  <CheckCircle className="h-4 w-4 text-green-400 animate-pulse" />
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

  const renderGTMTab = () => (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Go-To-Market Strategy & Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Strategic approach to market entry, pricing models, and scaling from early adopters to enterprise customers.
          </p>
        </div>

        {/* Pricing Strategy */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Freemium to Enterprise Pricing Model</h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-8 shadow-xl border-0 hover:shadow-2xl transition-all duration-300 relative">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Free Tier</h4>
                <div className="text-4xl font-bold text-green-600 mb-4">$0</div>
                <p className="text-gray-600 mb-6">Perfect for individual PMs and early exploration</p>
                <ul className="space-y-3 text-left">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>3 strategy sessions/month</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Basic 5-agent council</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>RICE scoring output</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Export to PDF/CSV</span>
                  </li>
                </ul>
                <div className="mt-6 p-3 bg-green-50 rounded-lg">
                  <p className="text-sm text-green-800"><strong>Goal:</strong> 10,000+ signups in Year 1</p>
                </div>
              </div>
            </Card>

            <Card className="p-8 shadow-xl border-0 hover:shadow-2xl transition-all duration-300 relative border-2 border-blue-500">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-bold">Most Popular</span>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Professional</h4>
                <div className="text-4xl font-bold text-blue-600 mb-4">$49<span className="text-lg">/month</span></div>
                <p className="text-gray-600 mb-6">For growing startups and product teams</p>
                <ul className="space-y-3 text-left">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-500" />
                    <span>Unlimited strategy sessions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-500" />
                    <span>Advanced agent personalities</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-500" />
                    <span>Audio + text interface</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-500" />
                    <span>Document upload & analysis</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-500" />
                    <span>Priority support</span>
                  </li>
                </ul>
                <div className="mt-6 p-3 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-800"><strong>Goal:</strong> 1,000+ customers by Month 18</p>
                </div>
              </div>
            </Card>

            <Card className="p-8 shadow-xl border-0 hover:shadow-2xl transition-all duration-300 relative">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Enterprise</h4>
                <div className="text-4xl font-bold text-purple-600 mb-4">Custom</div>
                <p className="text-gray-600 mb-6">For large organizations and teams</p>
                <ul className="space-y-3 text-left">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-purple-500" />
                    <span>Everything in Professional</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-purple-500" />
                    <span>SSO & advanced security</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-purple-500" />
                    <span>Custom agent training</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-purple-500" />
                    <span>API access & integrations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-purple-500" />
                    <span>Dedicated success manager</span>
                  </li>
                </ul>
                <div className="mt-6 p-3 bg-purple-50 rounded-lg">
                  <p className="text-sm text-purple-800"><strong>Goal:</strong> 50+ enterprise deals by Year 2</p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* GTM Strategy */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Go-To-Market Approach</h3>
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="p-8 shadow-xl border-0 hover:shadow-2xl transition-all duration-300">
              <h4 className="text-2xl font-bold text-gray-900 mb-6">Phase 1: Product-Led Growth (Months 1-12)</h4>
              <div className="space-y-4">
                <div className="p-4 bg-green-50 rounded-lg">
                  <h5 className="font-bold mb-2">🎯 Target: Early-Stage PMs</h5>
                  <p className="text-sm text-gray-600">Focus on 0-50 customer companies, solo founders, product consultants</p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <h5 className="font-bold mb-2">📢 Channels</h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Product Hunt launch</li>
                    <li>• PM community engagement (Product School, Mind the Product)</li>
                    <li>• Content marketing (PM pain point blogs)</li>
                    <li>• Twitter/LinkedIn thought leadership</li>
                  </ul>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <h5 className="font-bold mb-2">📊 Success Metrics</h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• 10,000+ free signups</li>
                    <li>• 15% free-to-paid conversion</li>
                    <li>• NPS score above 50</li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="p-8 shadow-xl border-0 hover:shadow-2xl transition-all duration-300">
              <h4 className="text-2xl font-bold text-gray-900 mb-6">Phase 2: Sales-Led Growth (Months 13-24)</h4>
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h5 className="font-bold mb-2">🏢 Target: Growing Startups</h5>
                  <p className="text-sm text-gray-600">Series A-B companies, product teams of 5-50 people</p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h5 className="font-bold mb-2">🤝 Sales Strategy</h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Outbound to VP Products at funded startups</li>
                    <li>• Partner with VC firms for portfolio introductions</li>
                    <li>• Conference speaking (ProductCon, etc.)</li>
                    <li>• Case study development</li>
                  </ul>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h5 className="font-bold mb-2">📈 Success Metrics</h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• $500K ARR</li>
                    <li>• 1,000+ paid customers</li>
                    <li>• Under 5% monthly churn</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Testing & Validation Strategy */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Testing & Validation Strategy</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 shadow-xl border-0 hover:shadow-2xl transition-all duration-300">
              <div className="text-orange-600 mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">User Testing</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Weekly user interviews (10-15 per week)</li>
                <li>• A/B testing on key features</li>
                <li>• Usability testing sessions</li>
                <li>• Beta user feedback loops</li>
                <li>• NPS surveys and follow-ups</li>
              </ul>
            </Card>

            <Card className="p-6 shadow-xl border-0 hover:shadow-2xl transition-all duration-300">
              <div className="text-blue-600 mb-4">
                <BarChart3 className="h-8 w-8" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Product Analytics</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Feature usage tracking</li>
                <li>• Session duration analysis</li>
                <li>• Conversion funnel optimization</li>
                <li>• Cohort retention analysis</li>
                <li>• Agent performance metrics</li>
              </ul>
            </Card>

            <Card className="p-6 shadow-xl border-0 hover:shadow-2xl transition-all duration-300">
              <div className="text-green-600 mb-4">
                <Target className="h-8 w-8" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Market Validation</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Competitive analysis updates</li>
                <li>• Price sensitivity testing</li>
                <li>• Feature demand validation</li>
                <li>• Market size validation</li>
                <li>• Customer segment analysis</li>
              </ul>
            </Card>
          </div>
        </div>

        {/* Rollout Plan */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Market Rollout Timeline</h3>
          <Card className="p-8 shadow-xl border-0 max-w-5xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">Q1</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Launch & Early Adoption</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="font-medium text-gray-700 mb-2">Product:</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Free tier launch</li>
                        <li>• Core 5-agent system</li>
                        <li>• Basic web interface</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium text-gray-700 mb-2">Marketing:</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Product Hunt launch</li>
                        <li>• PM community outreach</li>
                        <li>• Content marketing start</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">Q2</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Feature Enhancement & Paid Tiers</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="font-medium text-gray-700 mb-2">Product:</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Professional tier launch ($49/mo)</li>
                        <li>• Audio interface rollout</li>
                        <li>• Advanced agent features</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium text-gray-700 mb-2">Growth:</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Referral program launch</li>
                        <li>• Case study development</li>
                        <li>• Conference speaking</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">Q3</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Enterprise Push & Partnerships</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="font-medium text-gray-700 mb-2">Product:</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Enterprise features</li>
                        <li>• SSO & security compliance</li>
                        <li>• API development</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium text-gray-700 mb-2">Sales:</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Enterprise sales team</li>
                        <li>• VC partnership program</li>
                        <li>• Custom pricing rollout</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">Q4</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Scale & International</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="font-medium text-gray-700 mb-2">Expansion:</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• International markets</li>
                        <li>• Multi-language support</li>
                        <li>• Regional partnerships</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium text-gray-700 mb-2">Goals:</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• $1M ARR target</li>
                        <li>• 50+ enterprise customers</li>
                        <li>• Series A preparation</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );

  const renderAboutTab = () => (
    <div className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About the Creator
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Built by an IIM Ahmedabad graduate and product leader who scaled products from 1 to 7 customers achieving $12Mn+ ARR.
          </p>
        </div>

        {/* Hero Section */}
        <div className="mb-16">
          <Card className="p-8 shadow-2xl border-0 bg-gradient-to-br from-white to-blue-50 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                <User className="h-16 w-16 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Aroosh Dayal</h3>
                <p className="text-xl text-blue-600 font-semibold mb-4">Senior Product Manager & AI Product Strategist</p>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  IIM Ahmedabad graduate with 7+ years of product management experience across enterprise SaaS, gaming, telecom, and fintech. Currently at Eightfold AI, where I've scaled Resource Management from 1 to 7 customers achieving $12Mn+ ARR. Having lived the early-stage PM struggle firsthand, I built this AI council to democratize access to expert product strategy.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                    <GraduationCap className="h-4 w-4" />
                    <span className="text-sm font-medium">IIM Ahmedabad PGDM</span>
                  </div>
                  <div className="flex items-center gap-2 bg-green-100 text-green-800 px-3 py-1 rounded-full">
                    <Award className="h-4 w-4" />
                    <span className="text-sm font-medium">IIT Guwahati B.Tech</span>
                  </div>
                  <div className="flex items-center gap-2 bg-purple-100 text-purple-800 px-3 py-1 rounded-full">
                    <TrendingUp className="h-4 w-4" />
                    <span className="text-sm font-medium">$12Mn+ ARR Growth</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Experience & Achievements */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <Card className="p-8 shadow-xl border-0 hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Briefcase className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Professional Experience</h3>
            </div>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="text-lg font-bold text-gray-900 mb-2">Senior Product Manager</h4>
                <p className="text-blue-600 font-medium mb-2">Eightfold AI (Jan 2024 - Current)</p>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• Scaled Resource Management from 1 to 7 customers achieving $12Mn+ ARR</li>
                  <li>• Launched 15+ critical features across 4 key personas</li>
                  <li>• Managed 24+ stakeholders across Engineering, GTM, Design & Analytics</li>
                  <li>• Received 50+ shoutouts for Extreme Ownership & Excellence</li>
                </ul>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="text-lg font-bold text-gray-900 mb-2">Senior Product Manager</h4>
                <p className="text-purple-600 font-medium mb-2">Zynga (Feb 2023 - Sep 2023)</p>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• Redesigned opt-out flows saving $3Mn+ revenue</li>
                  <li>• Built Abuse Reporting service integrating 10+ APIs</li>
                  <li>• Improved Gaming Guilds adoption (~5Mn users)</li>
                  <li>• Increased website traffic by 25% via Web Push Notifications</li>
                </ul>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="text-lg font-bold text-gray-900 mb-2">Senior Product Manager</h4>
                <p className="text-green-600 font-medium mb-2">Bharti Airtel (Jun 2021 - Feb 2023)</p>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• Led Field Service Management platform (100K+ users, ₹700Cr+ account)</li>
                  <li>• Achieved 20% fleet productivity increase via ML-driven features</li>
                  <li>• Won Chairman Award 2022 for 'Win with Digital' category</li>
                  <li>• Skip-level reporting to Airtel's Chief Product Officer</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="p-8 shadow-xl border-0 hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <Award className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Key Achievements & Impact</h3>
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-gray-900 mb-3">Revenue & Growth Impact</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                    <span className="text-sm font-medium">ARR Growth at Eightfold</span>
                    <span className="text-green-600 font-bold">$12Mn+</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                    <span className="text-sm font-medium">Revenue Saved at Zynga</span>
                    <span className="text-blue-600 font-bold">$3Mn+</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                    <span className="text-sm font-medium">Revenue Impact at AmEx</span>
                    <span className="text-purple-600 font-bold">$23Mn+</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-3">Product Performance</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                    <span className="text-sm font-medium">Postpaid Digital Leads</span>
                    <span className="text-orange-600 font-bold">+140%</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                    <span className="text-sm font-medium">Fleet Productivity</span>
                    <span className="text-red-600 font-bold">+20%</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-indigo-50 rounded-lg">
                    <span className="text-sm font-medium">Customer Churn Reduction</span>
                    <span className="text-indigo-600 font-bold">-22%</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Education & Skills */}
        <div className="mb-16">
          <Card className="p-8 shadow-xl border-0 max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                <GraduationCap className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Education & Technical Skills</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-gray-900 mb-4">Premier Education</h4>
                <div className="space-y-4">
                  <div className="p-4 bg-indigo-50 rounded-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center">
                        <GraduationCap className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900">PGDM - IIM Ahmedabad</p>
                        <p className="text-sm text-gray-600">Student Exchange @ EM Lyon Business School, France (2015-2017)</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                        <Code className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900">B.Tech - IIT Guwahati</p>
                        <p className="text-sm text-gray-600">Electronics & Communication Engineering (2010-2014)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-4">Technical Expertise</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-medium text-gray-700 mb-2">AI & Machine Learning</h5>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">XGBoost</span>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">AutoGen</span>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">OpenAI GPT-4</span>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Multi-Agent Systems</span>
                    </div>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-700 mb-2">Product & Analytics</h5>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Product Strategy</span>
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Data Science</span>
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">A/B Testing</span>
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Customer Analytics</span>
                    </div>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-700 mb-2">Development & Tools</h5>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Next.js</span>
                      <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Python</span>
                      <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Oracle CPQ</span>
                      <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Enterprise SaaS</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Awards & Recognition */}
        <div className="mb-16">
          <Card className="p-8 shadow-xl border-0 bg-gradient-to-br from-yellow-50 to-orange-50">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Awards & Recognition</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-2xl mb-2">🏆</div>
                <h4 className="font-bold text-gray-900 mb-2">Chairman Award 2022</h4>
                <p className="text-sm text-gray-600">Bharti Airtel - 'Win with Digital' category for App growth & potential</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-2xl mb-2">⭐</div>
                <h4 className="font-bold text-gray-900 mb-2">GCMA Superstar</h4>
                <p className="text-sm text-gray-600">American Express - Top 6 out of 250+ analysts</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-2xl mb-2">🥇</div>
                <h4 className="font-bold text-gray-900 mb-2">Think Tank Award 2017</h4>
                <p className="text-sm text-gray-600">EM Lyon - Jury Award for best retail project (Italy vs Spain vs France)</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Vision & Why This Project */}
        <div className="mb-16">
          <Card className="p-8 shadow-xl border-0 bg-gradient-to-br from-orange-50 to-red-50">
            <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">Why I Built This AI Council</h3>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Having scaled products across Eightfold AI, Zynga, Airtel, and AmEx, I've consistently faced the same challenge at early-stage companies: <strong>How do you make confident product decisions when traditional research methods don't work?</strong>
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">The Pain I Lived</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• At Eightfold: Scaling from 1 to 7 customers with limited user feedback</li>
                    <li>• At Zynga: Making compliance decisions affecting $3Mn+ revenue</li>
                    <li>• At Airtel: Optimizing for 100K+ users without comprehensive research</li>
                    <li>• At AmEx: Building models with limited business context</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">The Solution I Built</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 5 AI experts providing instant diverse perspectives</li>
                    <li>• Evidence-based recommendations in minutes, not weeks</li>
                    <li>• Affordable access to expert-level product strategy</li>
                    <li>• Real debate dynamics surfacing blind spots</li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 p-6 bg-white rounded-lg border-l-4 border-orange-500">
                <p className="text-gray-700 italic text-lg">
                  "Having generated $25Mn+ in revenue impact across companies, I know the value of expert product strategy. This AI council democratizes that expertise for every early-stage PM who's ever felt lost without user data."
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Contact & Next Steps */}
        <div>
          <Card className="p-8 shadow-xl border-0 bg-gradient-to-br from-gray-900 to-blue-900 text-white max-w-4xl mx-auto">
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-6">Let's Build the Future of Product Strategy Together</h3>
              <p className="text-xl text-blue-200 mb-8 leading-relaxed">
                Ready to bring my proven track record of scaling products and generating revenue impact to your team. Let's discuss how I can drive your product strategy forward.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
                <Button 
                  size="lg" 
                  className="text-lg px-8 py-4 bg-white text-blue-900 hover:bg-blue-50 shadow-2xl transform hover:scale-105 transition-all duration-300"
                  onClick={() => window.open('mailto:dayalaroosh@gmail.com', '_blank')}
                >
                  <Mail className="mr-2 h-5 w-5" />
                  dayalaroosh@gmail.com
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-lg px-8 py-4 border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
                  onClick={() => window.open('https://www.linkedin.com/in/aroosh-dayal-a015b59a/', '_blank')}
                >
                  <Linkedin className="mr-2 h-5 w-5" />
                  LinkedIn Profile
                </Button>
              </div>
              <div className="flex items-center justify-center gap-8 text-blue-200">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span>Available Immediately</span>
                </div>
                <div className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-purple-400" />
                  <span>Senior PM Roles</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-yellow-400" />
                  <span>$25Mn+ Revenue Impact</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-float-delay {
          animation: float 3s ease-in-out infinite;
          animation-delay: 1s;
        }
        
        .card-hover {
          transition: all 0.3s ease;
        }
        
        .card-hover:hover {
          transform: translateY(-8px);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }
        
        .gradient-text {
          background: linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899);
          background-size: 200% 200%;
          animation: gradient-shift 3s ease infinite;
        }
        
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .scrollbar-hide {
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none; /* IE and Edge */
        }
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none; /* Chrome, Safari and Opera */
        }
      `}</style>
      
      {/* Tab Navigation */}
      <div className="bg-slate-900/95 backdrop-blur-sm border-b border-white/20 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto scrollbar-hide">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabClick(tab.id)}
                  className={`flex items-center gap-2 px-6 py-4 text-sm font-medium whitespace-nowrap transition-all duration-200 border-b-2 ${
                    activeTab === tab.id
                      ? 'text-blue-400 border-blue-400 bg-blue-500/10'
                      : 'text-gray-200 border-transparent hover:text-white hover:border-gray-400'
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
        {activeTab === 'gtm' && renderGTMTab()}
        {activeTab === 'about' && renderAboutTab()}
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