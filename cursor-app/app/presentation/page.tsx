'use client';

import * as React from 'react';
import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Brain, Users, Zap, Shield, Play, CheckCircle, TrendingUp, Star, Award, Target, Building, UserX, Clock, DollarSign, AlertTriangle, Mic, MessageSquare, Database, Code, Lock, Globe, BarChart3, Settings, Headphones, Bot, User, GraduationCap, Briefcase, Lightbulb, Mail, Linkedin, Github, Rocket, ExternalLink, ArrowLeft, Phone, Download, GitBranch } from 'lucide-react';
import FeedbackForm from "@/components/FeedbackForm"
import Analytics, { trackCTAClick, trackSectionView } from "@/components/Analytics"

export default function PresentationPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [activeDemo, setActiveDemo] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Check for URL parameters to set active tab
    const urlParams = new URLSearchParams(window.location.search);
    const tab = urlParams.get('tab');
    if (tab && ['overview', 'technology', 'features', 'enterprise', 'architecture', 'gtm', 'roadmap', 'about'].includes(tab)) {
      setActiveTab(tab);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
    // Update URL without page reload
    const newUrl = new URL(window.location.href);
    newUrl.searchParams.set('tab', tabId);
    window.history.pushState({}, '', newUrl.toString());
    // Scroll to top when switching tabs
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderOverviewTab = () => (
    <div className="space-y-16 md:space-y-24">
      {/* Hero Section - Mobile Optimized */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-16 h-16 md:w-32 md:h-32 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-24 h-24 md:w-48 md:h-48 bg-purple-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-3/4 w-12 h-12 md:w-24 md:h-24 bg-pink-500/10 rounded-full blur-xl animate-pulse delay-500"></div>
        </div>
        
        <div className="relative container mx-auto px-4 py-16 md:py-24">
          <div className={`text-center max-w-5xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center bg-blue-100 text-blue-800 text-xs md:text-sm font-medium px-3 md:px-4 py-2 rounded-full mb-6 md:mb-8 animate-bounce">
              <Award className="w-3 h-3 md:w-4 md:h-4 mr-2 flex-shrink-0" />
              <span className="text-center">AI-Powered Product Strategy for Early-Stage Companies</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 leading-tight animate-fade-in">
              AI Product Strategy
              <span className="block text-white">Council</span>
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 md:mb-12 max-w-4xl mx-auto leading-relaxed px-2">
              When you have <strong className="text-blue-400">limited customers</strong> and <strong className="text-purple-400">no access to real users</strong>, how do you make confident AI-driven product decisions? Our multi-agent AI council solves the early-stage PM's biggest challenge.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center px-4">
              <Button 
                size="lg" 
                className="w-full sm:w-auto text-lg md:text-xl px-8 md:px-12 py-4 md:py-6 bg-white text-blue-900 hover:bg-blue-50 shadow-2xl transform hover:scale-105 transition-all duration-300 font-bold rounded-xl"
                onClick={() => {
                  trackCTAClick('product', 'Try the AI System', 'hero')
                  window.open('https://product-strategy-council.vercel.app/', '_blank')
                }}
              >
                <div className="flex items-center gap-3">
                  <Rocket className="h-5 w-5 md:h-6 md:w-6 flex-shrink-0" />
                  <div className="flex flex-col">
                    <span className="text-base md:text-lg">Try the AI System</span>
                    <span className="text-xs md:text-sm text-blue-700 font-normal opacity-80">(Beta Version)</span>
                  </div>
                  <ArrowRight className="h-5 w-5 md:h-6 md:w-6 flex-shrink-0" />
                </div>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full sm:w-auto text-lg md:text-xl px-8 md:px-12 py-4 md:py-6 border-2 border-white text-white hover:bg-white hover:text-blue-900 shadow-2xl transform hover:scale-105 transition-all duration-300 font-semibold rounded-xl"
                onClick={() => {
                  trackCTAClick('navigation', 'About Aroosh', 'hero')
                  handleTabClick('about')
                }}
              >
                <Users className="mr-3 h-5 w-5 md:h-6 md:w-6 flex-shrink-0" />
                About Aroosh
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-16 px-4">
              <div className="text-center transform hover:scale-105 transition-all duration-300">
                <div className="text-2xl md:text-3xl font-bold text-blue-400 mb-2 animate-pulse">0-50</div>
                <div className="text-sm md:text-base text-gray-400">Customers</div>
              </div>
              <div className="text-center transform hover:scale-105 transition-all duration-300">
                <div className="text-2xl md:text-3xl font-bold text-purple-400 mb-2 animate-pulse delay-200">5 AI Experts</div>
                <div className="text-sm md:text-base text-gray-400">In 5 Minutes</div>
              </div>
              <div className="text-center transform hover:scale-105 transition-all duration-300">
                <div className="text-2xl md:text-3xl font-bold text-pink-400 mb-2 animate-pulse delay-500">10x</div>
                <div className="text-sm md:text-base text-gray-400">Faster AI Insights</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Streamlined Problem-Solution Section - Mobile Optimized */}
      <div className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6 px-2">
              The Product Manager's Challenge
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto px-2 leading-relaxed">
              As a Product Manager at Eightfold, I've lived this reality: building products with limited user data requires a completely different approach to product strategy.
            </p>
          </div>
          
          {/* Problem vs AI Solution - Mobile Responsive */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto mb-12 md:mb-16">
            <Card className="p-6 md:p-8 shadow-2xl border-0 bg-gradient-to-br from-red-50 to-orange-50 card-hover">
              <div className="text-red-600 mb-4 animate-float">
                <AlertTriangle className="h-6 w-6 md:h-8 md:w-8" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">The PM Reality</h3>
              <ul className="space-y-3 md:space-y-4">
                <li className="flex items-start gap-3 transform hover:translate-x-2 transition-transform duration-200">
                  <UserX className="h-4 w-4 md:h-5 md:w-5 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-sm md:text-base text-gray-700"><strong>0-50 customers:</strong> Not enough for proper validation</span>
                </li>
                <li className="flex items-start gap-3 transform hover:translate-x-2 transition-transform duration-200">
                  <Clock className="h-4 w-4 md:h-5 md:w-5 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-sm md:text-base text-gray-700"><strong>Weeks of research:</strong> for insights that may be wrong</span>
                </li>
                <li className="flex items-start gap-3 transform hover:translate-x-2 transition-transform duration-200">
                  <DollarSign className="h-4 w-4 md:h-5 md:w-5 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-sm md:text-base text-gray-700"><strong>Consultants:</strong> $500-1000/hour for generic advice</span>
                </li>
                <li className="flex items-start gap-3 transform hover:translate-x-2 transition-transform duration-200">
                  <Building className="h-4 w-4 md:h-5 md:w-5 text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-sm md:text-base text-gray-700"><strong>Investor pressure:</strong> "Where's your product-market fit?"</span>
                </li>
              </ul>
            </Card>
            
            <Card className="p-6 md:p-8 shadow-2xl border-0 bg-gradient-to-br from-blue-50 to-indigo-50 card-hover">
              <div className="text-blue-600 mb-4 animate-float-delay">
                <Brain className="h-6 w-6 md:h-8 md:w-8" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">Multi-Agent AI Solution</h3>
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-center justify-between p-3 md:p-4 bg-white rounded-lg shadow-sm transform hover:scale-105 transition-all duration-200">
                  <span className="font-medium text-sm md:text-base text-gray-700">5 AI Expert Perspectives</span>
                  <span className="text-xl md:text-2xl font-bold text-green-600 animate-pulse">✓</span>
                </div>
                <div className="flex items-center justify-between p-3 md:p-4 bg-white rounded-lg shadow-sm transform hover:scale-105 transition-all duration-200">
                  <span className="font-medium text-sm md:text-base text-gray-700">Instant AI Validation</span>
                  <span className="text-xl md:text-2xl font-bold text-green-600 animate-pulse">✓</span>
                </div>
                <div className="flex items-center justify-between p-3 md:p-4 bg-white rounded-lg shadow-sm transform hover:scale-105 transition-all duration-200">
                  <span className="font-medium text-sm md:text-base text-gray-700">Conflicting AI Viewpoints</span>
                  <span className="text-xl md:text-2xl font-bold text-green-600 animate-pulse">✓</span>
                </div>
                <div className="flex items-center justify-between p-3 md:p-4 bg-white rounded-lg shadow-sm transform hover:scale-105 transition-all duration-200">
                  <span className="font-medium text-sm md:text-base text-gray-700">Structured AI Analysis</span>
                  <span className="text-xl md:text-2xl font-bold text-green-600 animate-pulse">✓</span>
                </div>
              </div>
            </Card>
          </div>

          {/* AI Use Cases - Mobile Responsive */}
          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 text-center px-2">Product Management Scenarios We Solve</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <Card className="p-4 md:p-6 shadow-xl border-0 hover:shadow-2xl transition-all duration-300">
                <div className="text-purple-600 mb-4">
                  <Brain className="h-5 w-5 md:h-6 md:w-6" />
                </div>
                <h4 className="text-base md:text-lg font-bold text-gray-900 mb-3">The Early-Stage PM</h4>
                <p className="text-gray-600 text-sm mb-4">
                  "I have 15 customers, limited data, and my CEO wants a roadmap. How do I prioritize features without proper user validation?"
                </p>
                <div className="text-xs text-purple-600 font-medium">❌ Current: Guess strategy</div>
                <div className="text-xs text-green-600 font-medium">✅ With AI Council: Expert validation in 5 min</div>
              </Card>

              <Card className="p-4 md:p-6 shadow-xl border-0 hover:shadow-2xl transition-all duration-300">
                <div className="text-blue-600 mb-4">
                  <Zap className="h-5 w-5 md:h-6 md:w-6" />
                </div>
                <h4 className="text-base md:text-lg font-bold text-gray-900 mb-3">The Startup Founder</h4>
                <p className="text-gray-600 text-sm mb-4">
                  "Should we pivot our product? Our metrics look good but adoption is flat. I need multiple expert perspectives fast."
                </p>
                <div className="text-xs text-purple-600 font-medium">❌ Current: Expensive consultants</div>
                <div className="text-xs text-green-600 font-medium">✅ With AI Council: 5 experts debate in real-time</div>
              </Card>

              <Card className="p-4 md:p-6 shadow-xl border-0 hover:shadow-2xl transition-all duration-300">
                <div className="text-green-600 mb-4">
                  <TrendingUp className="h-5 w-5 md:h-6 md:w-6" />
                </div>
                <h4 className="text-base md:text-lg font-bold text-gray-900 mb-3">The Innovation Head</h4>
                <p className="text-gray-600 text-sm mb-4">
                  "I need to evaluate 20 startup pitches this week. How do I assess product-market fit potential without deep research?"
                </p>
                <div className="text-xs text-purple-600 font-medium">❌ Current: Surface-level analysis</div>
                <div className="text-xs text-green-600 font-medium">✅ With AI Council: Deep expert analysis per pitch</div>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Multi-Agent AI Deep Dive - Mobile Optimized */}
      <div className="py-16 md:py-24 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 px-2">
              Why Multi-Agent AI Changes Everything
            </h2>
            <p className="text-lg md:text-xl text-blue-200 max-w-4xl mx-auto leading-relaxed px-2">
              Traditional single LLM approaches give you one AI perspective. Our multi-agent AI framework creates actual expert debates with conflicting viewpoints, just like a real AI strategy council.
            </p>
          </div>

          {/* Mobile-Responsive Comparison */}
          <div className="mb-12 md:mb-16 max-w-6xl mx-auto">
            <Card className="p-6 md:p-8 bg-white/10 backdrop-blur-sm border border-white/20">
              <h3 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8 px-2">Why Multi-Agent AI Outperforms Everything</h3>
              
              {/* Mobile: Stack cards vertically, Desktop: Side by side */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <h4 className="text-sm md:text-lg font-semibold mb-4 text-red-300">Traditional PM Tools</h4>
                  <div className="bg-red-500/20 rounded-lg p-3 md:p-4 mb-4">
                    <div className="h-3 md:h-4 bg-red-500 rounded-full animate-pulse" style={{width: '30%'}}></div>
                  </div>
                  <div className="text-xs text-red-200 mb-3 space-y-1">
                    <div>Productboard • Aha!</div>
                    <div>UserVoice • Mixpanel</div>
                  </div>
                  <ul className="text-xs md:text-sm text-red-200 space-y-1 text-left">
                    <li>❌ Requires existing customer data</li>
                    <li>❌ Manual analysis needed</li>
                    <li>❌ No strategic guidance</li>
                    <li>❌ Expensive setup costs</li>
                    <li>❌ Time-intensive research</li>
                  </ul>
                </div>
                
                <div className="text-center">
                  <h4 className="text-sm md:text-lg font-semibold mb-4 text-orange-300">Single AI Solutions</h4>
                  <div className="bg-orange-500/20 rounded-lg p-3 md:p-4 mb-4">
                    <div className="h-3 md:h-4 bg-orange-500 rounded-full animate-pulse" style={{width: '55%'}}></div>
                  </div>
                  <div className="text-xs text-orange-200 mb-3 space-y-1">
                    <div>ChatGPT • Claude</div>
                    <div>Pendo AI • Amplitude AI</div>
                  </div>
                  <ul className="text-xs md:text-sm text-orange-200 space-y-1 text-left">
                    <li>⚠️ Single perspective only</li>
                    <li>⚠️ Generic, non-specific responses</li>
                    <li>⚠️ No domain expertise</li>
                    <li>⚠️ Limited reasoning depth</li>
                    <li>⚠️ No conflicting viewpoints</li>
                  </ul>
                </div>
                
                <div className="text-center">
                  <h4 className="text-sm md:text-lg font-semibold mb-4 text-green-300">Multi-Agent AI Council</h4>
                  <div className="space-y-2 mb-4">
                    <div className="bg-green-500/20 rounded-lg p-1 md:p-2">
                      <div className="h-1.5 md:h-2 bg-green-500 rounded-full animate-pulse" style={{width: '95%'}}></div>
                    </div>
                    <div className="bg-blue-500/20 rounded-lg p-1 md:p-2">
                      <div className="h-1.5 md:h-2 bg-blue-500 rounded-full animate-pulse delay-200" style={{width: '92%'}}></div>
                    </div>
                    <div className="bg-purple-500/20 rounded-lg p-1 md:p-2">
                      <div className="h-1.5 md:h-2 bg-purple-500 rounded-full animate-pulse delay-500" style={{width: '90%'}}></div>
                    </div>
                  </div>
                  <div className="text-xs text-green-200 mb-3">
                    <div>Our AI Innovation</div>
                  </div>
                  <ul className="text-xs md:text-sm text-green-200 space-y-1 text-left">
                    <li>✅ 5 specialized AI experts</li>
                    <li>✅ Deep domain knowledge</li>
                    <li>✅ Conflicting viewpoints emerge</li>
                    <li>✅ Works with 0 customers</li>
                    <li>✅ Real-time expert debate</li>
                  </ul>
                </div>
              </div>
              
              {/* Summary comparison for mobile */}
              <div className="mt-8 md:hidden">
                <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg p-4 text-center">
                  <h5 className="font-bold text-white mb-2">Why Our Multi-Agent AI Wins</h5>
                  <p className="text-sm text-green-200">
                    The only solution that works with <span className="font-semibold text-white">zero existing customers</span> and provides <span className="font-semibold text-white">expert-level strategic debate</span> in minutes, not weeks.
                  </p>
                </div>
              </div>
            </Card>
          </div>
          
          {/* AI Expert Cards - Mobile Responsive */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            <Card className="p-6 md:p-8 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 group card-hover">
              <div className="text-blue-400 mb-4 md:mb-6 transform group-hover:scale-110 transition-transform duration-300 animate-float">
                <Brain className="h-8 w-8 md:h-12 md:w-12" />
              </div>
              <h3 className="text-lg md:text-2xl font-bold mb-3 md:mb-4">5 Specialized AI Experts</h3>
              <p className="text-blue-200 mb-4 md:mb-6 text-sm md:text-base">
                Each AI agent has deep domain expertise and argues from their specialized perspective, creating natural tension and comprehensive AI analysis.
              </p>
              <ul className="space-y-2 text-blue-100 text-sm md:text-base">
                <li className="flex items-center gap-2 transform hover:translate-x-2 transition-transform duration-200">
                  <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-green-400 animate-pulse flex-shrink-0" />
                  <span><strong>AI Market Expert:</strong> TAM, AI competition</span>
                </li>
                <li className="flex items-center gap-2 transform hover:translate-x-2 transition-transform duration-200">
                  <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-green-400 animate-pulse flex-shrink-0" />
                  <span><strong>ML Architect:</strong> AI feasibility, scalability</span>
                </li>
                <li className="flex items-center gap-2 transform hover:translate-x-2 transition-transform duration-200">
                  <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-green-400 animate-pulse flex-shrink-0" />
                  <span><strong>AI Business Strategist:</strong> AI revenue models</span>
                </li>
                <li className="flex items-center gap-2 transform hover:translate-x-2 transition-transform duration-200">
                  <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-green-400 animate-pulse flex-shrink-0" />
                  <span><strong>AI UX Researcher:</strong> AI user adoption</span>
                </li>
                <li className="flex items-center gap-2 transform hover:translate-x-2 transition-transform duration-200">
                  <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-green-400 animate-pulse flex-shrink-0" />
                  <span><strong>AI Financial Analyst:</strong> AI unit economics</span>
                </li>
              </ul>
            </Card>
            
            <Card className="p-6 md:p-8 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 group card-hover">
              <div className="text-purple-400 mb-4 md:mb-6 transform group-hover:scale-110 transition-transform duration-300 animate-float-delay">
                <Users className="h-8 w-8 md:h-12 md:w-12" />
              </div>
              <h3 className="text-lg md:text-2xl font-bold mb-3 md:mb-4">Real AI Debate Dynamics</h3>
              <p className="text-blue-200 mb-4 md:mb-6 text-sm md:text-base">
                Watch AI experts challenge each other's assumptions in structured rounds, surfacing AI blind spots you'd never find with single AI responses.
              </p>
              <ul className="space-y-2 text-blue-100 text-sm md:text-base">
                <li className="flex items-center gap-2 transform hover:translate-x-2 transition-transform duration-200">
                  <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-green-400 animate-pulse flex-shrink-0" />
                  <span><strong>Opposing AI Views:</strong> Natural conflicts emerge</span>
                </li>
                <li className="flex items-center gap-2 transform hover:translate-x-2 transition-transform duration-200">
                  <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-green-400 animate-pulse flex-shrink-0" />
                  <span><strong>Evidence-Based AI:</strong> Claims backed by reasoning</span>
                </li>
                <li className="flex items-center gap-2 transform hover:translate-x-2 transition-transform duration-200">
                  <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-green-400 animate-pulse flex-shrink-0" />
                  <span><strong>Iterative AI Refinement:</strong> Ideas evolve through AI discussion</span>
                </li>
                <li className="flex items-center gap-2 transform hover:translate-x-2 transition-transform duration-200">
                  <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-green-400 animate-pulse flex-shrink-0" />
                  <span><strong>AI Consensus Building:</strong> Final aligned AI recommendations</span>
                </li>
              </ul>
            </Card>
            
            <Card className="p-6 md:p-8 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 group card-hover">
              <div className="text-yellow-400 mb-4 md:mb-6 transform group-hover:scale-110 transition-transform duration-300 animate-float">
                <Zap className="h-8 w-8 md:h-12 md:w-12" />
              </div>
              <h3 className="text-lg md:text-2xl font-bold mb-3 md:mb-4">AI-Powered Outputs</h3>
              <p className="text-blue-200 mb-4 md:mb-6 text-sm md:text-base">
                Get specific, actionable AI deliverables you can present to stakeholders, not generic AI responses.
              </p>
              <ul className="space-y-2 text-blue-100 text-sm md:text-base">
                <li className="flex items-center gap-2 transform hover:translate-x-2 transition-transform duration-200">
                  <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-green-400 animate-pulse flex-shrink-0" />
                  <span><strong>AI RICE Scores:</strong> Prioritized AI feature ranking</span>
                </li>
                <li className="flex items-center gap-2 transform hover:translate-x-2 transition-transform duration-200">
                  <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-green-400 animate-pulse flex-shrink-0" />
                  <span><strong>AI Risk Assessment:</strong> What could go wrong with AI</span>
                </li>
                <li className="flex items-center gap-2 transform hover:translate-x-2 transition-transform duration-200">
                  <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-green-400 animate-pulse flex-shrink-0" />
                  <span><strong>AI Market Positioning:</strong> Competitive AI analysis</span>
                </li>
                <li className="flex items-center gap-2 transform hover:translate-x-2 transition-transform duration-200">
                  <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-green-400 animate-pulse flex-shrink-0" />
                  <span><strong>AI Implementation Roadmap:</strong> Step-by-step AI plan</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );

  const renderTechnologyTab = () => (
    <div className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6 px-2">
            AI Technology Stack & Architecture Decisions
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto px-2 leading-relaxed">
            Every AI technology choice optimized for multi-agent conversations, real-time AI processing, and enterprise-scale AI deployment.
          </p>
        </div>

        {/* AutoGen vs Others - Mobile Responsive */}
        <div className="mb-12 md:mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 text-center px-2">Why AutoGen for Multi-Agent AI Framework</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            <Card className="p-4 md:p-6 shadow-xl border-0 hover:shadow-2xl transition-all duration-300">
              <div className="text-red-600 mb-4">
                <AlertTriangle className="h-5 w-5 md:h-6 md:w-6" />
              </div>
              <h4 className="text-base md:text-lg font-bold text-gray-900 mb-3">LangChain AI Approach</h4>
              <ul className="space-y-2 text-xs md:text-sm text-gray-600">
                <li>❌ Sequential AI agent execution</li>
                <li>❌ Complex AI state management</li>
                <li>❌ Limited AI conversation flow</li>
                <li>❌ AI debugging nightmare</li>
              </ul>
            </Card>

            <Card className="p-4 md:p-6 shadow-xl border-0 hover:shadow-2xl transition-all duration-300">
              <div className="text-orange-600 mb-4">
                <Settings className="h-5 w-5 md:h-6 md:w-6" />
              </div>
              <h4 className="text-base md:text-lg font-bold text-gray-900 mb-3">CrewAI Framework</h4>
              <ul className="space-y-2 text-xs md:text-sm text-gray-600">
                <li>⚠️ Good for AI workflows</li>
                <li>❌ Limited AI debate dynamics</li>
                <li>❌ Rigid AI role definitions</li>
                <li>❌ No real-time AI conversation</li>
              </ul>
            </Card>

            <Card className="p-4 md:p-6 shadow-xl border-0 hover:shadow-2xl transition-all duration-300 border-2 border-green-500">
              <div className="text-green-600 mb-4">
                <CheckCircle className="h-5 w-5 md:h-6 md:w-6" />
              </div>
              <h4 className="text-base md:text-lg font-bold text-gray-900 mb-3">AutoGen (Our AI Choice)</h4>
              <ul className="space-y-2 text-xs md:text-sm text-gray-600">
                <li>✅ True conversational AI agents</li>
                <li>✅ Dynamic AI turn-taking</li>
                <li>✅ Flexible AI termination conditions</li>
                <li>✅ Built-in AI debate patterns</li>
                <li>✅ Microsoft AI research backing</li>
              </ul>
            </Card>
          </div>
        </div>

        {/* Full Stack - Mobile Responsive */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          <Card className="p-6 md:p-8 shadow-xl border-0 hover:shadow-2xl transition-all duration-300">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6 flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                <Code className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />
              </div>
              <span>Frontend AI Excellence</span>
            </h3>
            <div className="space-y-3 md:space-y-4">
              <div className="p-3 md:p-4 bg-blue-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-sm md:text-base">Next.js 14 (App Router)</span>
                  <span className="text-blue-600 font-bold text-xs md:text-sm">AI-Ready</span>
                </div>
                <p className="text-xs md:text-sm text-gray-600">Server components + streaming for real-time AI agent responses</p>
              </div>
              <div className="p-3 md:p-4 bg-blue-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-sm md:text-base">TypeScript + Zod</span>
                  <span className="text-blue-600 font-bold text-xs md:text-sm">AI Type Safe</span>
                </div>
                <p className="text-xs md:text-sm text-gray-600">Runtime validation for AI agent message schemas</p>
              </div>
              <div className="p-3 md:p-4 bg-blue-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-sm md:text-base">Tailwind CSS + shadcn/ui</span>
                  <span className="text-blue-600 font-bold text-xs md:text-sm">AI Design System</span>
                </div>
                <p className="text-xs md:text-sm text-gray-600">Consistent, accessible AI components</p>
              </div>
              <div className="p-3 md:p-4 bg-blue-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-sm md:text-base">WebSockets + Server-Sent Events</span>
                  <span className="text-blue-600 font-bold text-xs md:text-sm">AI Real-time</span>
                </div>
                <p className="text-xs md:text-sm text-gray-600">Live AI agent conversation streaming</p>
              </div>
            </div>
          </Card>
          
          <Card className="p-6 md:p-8 shadow-xl border-0 hover:shadow-2xl transition-all duration-300">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6 flex items-center gap-3">
              <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                <Database className="h-4 w-4 md:h-5 md:w-5 text-purple-600" />
              </div>
              <span>AI Backend Power</span>
            </h3>
            <div className="space-y-3 md:space-y-4">
              <div className="p-3 md:p-4 bg-purple-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-sm md:text-base">Python FastAPI + Pydantic</span>
                  <span className="text-purple-600 font-bold text-xs md:text-sm">AI Performance</span>
                </div>
                <p className="text-xs md:text-sm text-gray-600">Async AI endpoints with automatic API docs</p>
              </div>
              <div className="p-3 md:p-4 bg-purple-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-sm md:text-base">AutoGen + OpenAI GPT-4</span>
                  <span className="text-purple-600 font-bold text-xs md:text-sm">Multi-Agent AI</span>
                </div>
                <p className="text-xs md:text-sm text-gray-600">Conversational AI agent orchestration</p>
              </div>
              <div className="p-3 md:p-4 bg-purple-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-sm md:text-base">PostgreSQL + Prisma</span>
                  <span className="text-purple-600 font-bold text-xs md:text-sm">AI Data Safe</span>
                </div>
                <p className="text-xs md:text-sm text-gray-600">AI conversation history + user data</p>
              </div>
              <div className="p-3 md:p-4 bg-purple-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-sm md:text-base">Redis + Celery</span>
                  <span className="text-purple-600 font-bold text-xs md:text-sm">AI Background Jobs</span>
                </div>
                <p className="text-xs md:text-sm text-gray-600">AI agent conversation queuing</p>
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
          {/* Phase 1 */}
          <Card className="p-8 shadow-xl border-0 border-l-4 border-blue-500">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">P1</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Phase 1 - Enhanced User Experience</h3>
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

          {/* Phase 2 */}
          <Card className="p-8 shadow-xl border-0 border-l-4 border-purple-500">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">P2</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Phase 2 - Enterprise Features</h3>
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

          {/* Phase 3 */}
          <Card className="p-8 shadow-xl border-0 border-l-4 border-green-500">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">P3</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Phase 3 - AI Intelligence Boost</h3>
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

          {/* Phase 4 */}
          <Card className="p-8 shadow-xl border-0 border-l-4 border-orange-500">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">P4</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Phase 4 - Platform Ecosystem</h3>
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
            <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">Future Vision</h3>
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
                <div className="text-4xl font-bold text-blue-600 mb-4">$19<span className="text-lg">/month</span></div>
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
                  <p className="text-sm text-blue-800"><strong>Goal:</strong> 1,000+ customers in early growth phase</p>
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
                  <p className="text-sm text-purple-800"><strong>Goal:</strong> 50+ enterprise deals in scaling phase</p>
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
              <h4 className="text-2xl font-bold text-gray-900 mb-6">Phase 1: Product-Led Growth</h4>
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
              <h4 className="text-2xl font-bold text-gray-900 mb-6">Phase 2: Sales-Led Growth</h4>
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
                  <span className="text-white font-bold">1</span>
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
                  <span className="text-white font-bold">2</span>
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
                  <span className="text-white font-bold">3</span>
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
                  <span className="text-white font-bold">4</span>
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
    <div className="py-12 md:py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        {/* Professional Header - B2B AI Product Leader */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent leading-tight">
            Aroosh Dayal
          </h2>
          <p className="text-xl md:text-2xl text-blue-600 font-semibold mb-3 md:mb-4">Senior AI Product Manager | B2B SaaS Expert</p>
          <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-xs md:text-sm font-medium px-4 md:px-6 py-2 md:py-3 rounded-full mb-6 md:mb-8 shadow-lg mx-2">
            <Award className="w-3 h-3 md:w-4 md:h-4 mr-2 flex-shrink-0" />
            <span className="text-center leading-tight">IIM Ahmedabad MBA • 9+ Years B2B Product Leadership • AI/ML Specialist</span>
          </div>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-2">
            Enterprise AI Product Leader with deep expertise in B2B SaaS platforms, machine learning products, and complex stakeholder ecosystems. Proven track record of scaling AI-powered solutions from concept to $50M+ ARR in enterprise markets.
          </p>
        </div>

        {/* Let's Connect Section - B2B Focus */}
        <div className="mb-12 md:mb-16">
          <Card className="p-6 md:p-8 shadow-xl border-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white max-w-4xl mx-auto">
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready for B2B Product Leadership Opportunities</h3>
              <p className="text-lg md:text-xl text-blue-100 mb-6 leading-relaxed">
                Seeking <span className="font-semibold text-white">Principal PM, Group PM, or Product Director roles</span> in <span className="font-semibold text-white">B2B SaaS companies</span> building AI-powered enterprise solutions. Let's discuss how I can drive product success at scale.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
                <Button 
                  size="lg" 
                  className="text-lg px-6 py-4 bg-white text-blue-900 hover:bg-blue-50 shadow-2xl transform hover:scale-105 transition-all duration-300"
                  onClick={() => {
                    trackCTAClick('contact', 'Email Aroosh', 'about-top')
                    window.open('mailto:dayalaroosh@gmail.com?subject=B2B Product Management Opportunity&body=Hi Aroosh,%0D%0A%0D%0AI came across your B2B AI product strategy presentation and would like to discuss potential opportunities in enterprise product management.%0D%0A%0D%0ABest regards', '_blank')
                  }}
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Discuss Opportunities
                </Button>
                
                <Button 
                  size="lg" 
                  className="text-lg px-6 py-4 bg-green-600 hover:bg-green-700 text-white shadow-2xl transform hover:scale-105 transition-all duration-300"
                  onClick={() => {
                    trackCTAClick('contact', 'WhatsApp', 'about-top')
                    window.open('https://wa.me/919550132970?text=Hi%20Aroosh%2C%20I%20saw%20your%20B2B%20AI%20product%20strategy%20presentation%20and%20would%20like%20to%20discuss%20product%20leadership%20opportunities.%20Are%20you%20available%20for%20a%20quick%20chat%3F', '_blank')
                  }}
                >
                  <Phone className="mr-2 h-5 w-5" />
                  WhatsApp
                </Button>
                
                <Button 
                  size="lg" 
                  variant="outline"
                  className="text-lg px-6 py-4 border-white text-white hover:bg-white hover:text-blue-900 shadow-2xl transform hover:scale-105 transition-all duration-300"
                  onClick={() => {
                    trackCTAClick('social', 'LinkedIn', 'about-top')
                    window.open('https://www.linkedin.com/in/aroosh-dayal-a015b59a/', '_blank')
                  }}
                >
                  <Linkedin className="mr-2 h-5 w-5" />
                  LinkedIn
                </Button>
              </div>

              {/* Resume Download CTA */}
              <div className="border-t border-white/20 pt-4">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-blue-900 shadow-2xl transform hover:scale-105 transition-all duration-300"
                  onClick={() => {
                    trackCTAClick('download', 'Resume PDF', 'about-top')
                    window.open('/api/generate-resume', '_blank');
                  }}
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download ATS Resume PDF
                </Button>
                <p className="text-sm text-blue-200 mt-2">ATS-optimized for AI Product Manager roles • Updated January 2025</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Hero Section with Photo - B2B AI Product Leader */}
        <div className="mb-12 md:mb-16">
          <Card className="p-6 md:p-8 shadow-2xl border-0 bg-gradient-to-br from-white to-blue-50 max-w-5xl mx-auto">
            <div className="flex flex-col items-center text-center md:flex-row md:items-start md:text-left gap-6 md:gap-8">
              {/* Professional Photo */}
              <div className="flex-shrink-0">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden shadow-xl border-4 border-white bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mx-auto">
                  <div className="text-4xl md:text-6xl font-bold text-white">AD</div>
                </div>
                <p className="text-center text-sm text-gray-500 mt-2">Aroosh Dayal</p>
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">B2B AI Product Leadership Profile</h3>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-4 md:mb-6">
                  9+ years specializing in enterprise B2B SaaS products with deep AI/ML expertise. Led product strategy for AI-powered platforms serving 300+ enterprise customers, driving $50M+ ARR growth. Expert in complex stakeholder management, enterprise sales cycles, and scaling ML products from 0-1 to market leadership. Proven track record in Resource Management, Talent Intelligence, Field Service Management, and enterprise compliance platforms.
                </p>
                
                <div className="flex flex-wrap justify-center md:justify-start gap-2 md:gap-4 mb-4 md:mb-6">
                  <div className="flex items-center gap-2 bg-blue-100 text-blue-800 px-3 md:px-4 py-1 md:py-2 rounded-full text-sm">
                    <GraduationCap className="h-4 w-4 md:h-5 md:w-5 flex-shrink-0" />
                    <span className="font-medium">IIM Ahmedabad MBA</span>
                  </div>
                  <div className="flex items-center gap-2 bg-green-100 text-green-800 px-3 md:px-4 py-1 md:py-2 rounded-full text-sm">
                    <Code className="h-4 w-4 md:h-5 md:w-5 flex-shrink-0" />
                    <span className="font-medium">IIT Guwahati B.Tech</span>
                  </div>
                  <div className="flex items-center gap-2 bg-purple-100 text-purple-800 px-3 md:px-4 py-1 md:py-2 rounded-full text-sm">
                    <Brain className="h-4 w-4 md:h-5 md:w-5 flex-shrink-0" />
                    <span className="font-medium">AI/ML Product Expert</span>
                  </div>
                </div>

                {/* B2B Career Focus */}
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-3 md:p-4 rounded-lg">
                  <p className="text-gray-700 text-sm leading-relaxed">
                    <strong>B2B Product Leadership Focus:</strong> Seeking Principal PM, Group PM, or Product Director roles in enterprise SaaS companies building AI-powered solutions. Expert in managing complex B2B sales cycles, enterprise customer success, and scaling products to $100M+ ARR.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* B2B Enterprise Experience Timeline */}
        <div className="mb-12 md:mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 text-center">B2B Enterprise Product Journey</h3>
          <div className="max-w-6xl mx-auto">
            {/* Mobile: Vertical Timeline, Desktop: Horizontal */}
            <div className="md:relative">
              {/* Desktop Timeline line */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>
              
              {/* Timeline items - Focus on B2B Experience */}
              <div className="space-y-8 md:space-y-12">
                {/* Current: AI Enterprise SaaS */}
                <div className="md:flex md:items-center">
                  <div className="md:w-1/2 md:pr-8 md:text-right mb-4 md:mb-0">
                    <Card className="p-4 md:p-6 shadow-lg border-0 bg-teal-50 hover:shadow-xl transition-all duration-300">
                      <h4 className="text-base md:text-lg font-bold text-gray-900 mb-2">Senior AI Product Manager</h4>
                      <p className="text-teal-600 font-medium mb-2 text-sm md:text-base">
                        <a 
                          href="https://eightfold.ai/" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="hover:underline cursor-pointer inline-flex items-center gap-1 text-teal-700 hover:text-teal-900 transition-colors duration-200"
                        >
                          <ExternalLink className="h-3 w-3 md:h-4 md:w-4 flex-shrink-0" />
                          Eightfold AI
                        </a> (Jan 2024 - Present)
                      </p>
                      <p className="text-xs md:text-sm text-gray-600">Led AI Resource Management platform for 300+ enterprise customers. Scaled from $1M to $50M+ ARR through ML-powered talent intelligence solutions. Managed complex stakeholder ecosystem across 15+ departments.</p>
                    </Card>
                  </div>
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-teal-500 rounded-full border-4 border-white"></div>
                  <div className="md:w-1/2 md:pl-8">
                    <Card className="p-4 md:p-6 shadow-lg border-0 bg-yellow-50 hover:shadow-xl transition-all duration-300">
                      <h4 className="text-base md:text-lg font-bold text-gray-900 mb-2">Senior Product Manager - Gaming SaaS</h4>
                      <p className="text-yellow-600 font-medium mb-2 text-sm md:text-base">
                        <a 
                          href="https://www.zynga.com/" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="hover:underline cursor-pointer inline-flex items-center gap-1 text-yellow-700 hover:text-yellow-900 transition-colors duration-200"
                        >
                          <ExternalLink className="h-3 w-3 md:h-4 md:w-4 flex-shrink-0" />
                          Zynga
                        </a> (Feb 2023 - Sep 2023)
                      </p>
                      <p className="text-xs md:text-sm text-gray-600">Led B2B compliance platform serving 119+ game studios. Redesigned enterprise workflows saving $3M+ annual revenue. Managed complex multi-tenant SaaS architecture.</p>
                    </Card>
                  </div>
                </div>

                {/* Enterprise Field Service Management */}
                <div className="md:flex md:items-center">
                  <div className="md:w-1/2 md:pr-8 md:text-right mb-4 md:mb-0">
                    <Card className="p-4 md:p-6 shadow-lg border-0 bg-red-50 hover:shadow-xl transition-all duration-300">
                      <h4 className="text-base md:text-lg font-bold text-gray-900 mb-2">Senior Product Manager - Enterprise SaaS</h4>
                      <p className="text-red-600 font-medium mb-2 text-sm md:text-base">
                        <a 
                          href="https://www.airtel.in/" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="hover:underline cursor-pointer inline-flex items-center gap-1 text-red-700 hover:text-red-900 transition-colors duration-200"
                        >
                          <ExternalLink className="h-3 w-3 md:h-4 md:w-4 flex-shrink-0" />
                          Bharti Airtel
                        </a> (2021-2023)
                      </p>
                      <p className="text-xs md:text-sm text-gray-600">Managed Field Service Management platform (100K+ enterprise users, ₹700Cr+ account). Led B2B product strategy for network operations across 22 telecom circles. Won Chairman Award 2022.</p>
                    </Card>
                  </div>
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red-500 rounded-full border-4 border-white"></div>
                  <div className="md:w-1/2 md:pl-8">
                    <Card className="p-4 md:p-6 shadow-lg border-0 bg-indigo-50 hover:shadow-xl transition-all duration-300">
                      <h4 className="text-base md:text-lg font-bold text-gray-900 mb-2">Lead Product Analyst - B2B Platform</h4>
                      <p className="text-indigo-600 font-medium mb-2 text-sm md:text-base">
                        <a 
                          href="https://www.airtel.in/" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="hover:underline cursor-pointer inline-flex items-center gap-1 text-indigo-700 hover:text-indigo-900 transition-colors duration-200"
                        >
                          <ExternalLink className="h-3 w-3 md:h-4 md:w-4 flex-shrink-0" />
                          Bharti Airtel
                        </a> (2019-2021)
                      </p>
                      <p className="text-xs md:text-sm text-gray-600">Led analytics for enterprise customer acquisition platform. Improved B2B digital leads by 140% through ML-powered targeting and conversion optimization.</p>
                    </Card>
                  </div>
                </div>

                {/* Enterprise Software & Financial Services */}
                <div className="md:flex md:items-center">
                  <div className="md:w-1/2 md:pr-8 md:text-right mb-4 md:mb-0">
                    <Card className="p-4 md:p-6 shadow-lg border-0 bg-orange-50 hover:shadow-xl transition-all duration-300">
                      <h4 className="text-base md:text-lg font-bold text-gray-900 mb-2">Business Analyst - Enterprise ML</h4>
                      <p className="text-orange-600 font-medium mb-2 text-sm md:text-base">
                        <a 
                          href="https://www.americanexpress.com/" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="hover:underline cursor-pointer inline-flex items-center gap-1 text-orange-700 hover:text-orange-900 transition-colors duration-200"
                        >
                          <ExternalLink className="h-3 w-3 md:h-4 md:w-4 flex-shrink-0" />
                          American Express
                        </a> (2017-2019)
                      </p>
                      <p className="text-xs md:text-sm text-gray-600">Built XGBoost models for B2B customer targeting and risk assessment. Managed enterprise client relationships worth $23M+ annual revenue. GCMA Superstar recognition (Top 6/250+ analysts).</p>
                    </Card>
                  </div>
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-orange-500 rounded-full border-4 border-white"></div>
                  <div className="md:w-1/2 md:pl-8">
                    <Card className="p-4 md:p-6 shadow-lg border-0 bg-blue-50 hover:shadow-xl transition-all duration-300">
                      <h4 className="text-base md:text-lg font-bold text-gray-900 mb-2">Software Developer - Enterprise SaaS</h4>
                      <p className="text-blue-600 font-medium mb-2 text-sm md:text-base">
                        <a 
                          href="https://www.oracle.com/" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="hover:underline cursor-pointer inline-flex items-center gap-1 text-blue-700 hover:text-blue-900 transition-colors duration-200"
                        >
                          <ExternalLink className="h-3 w-3 md:h-4 md:w-4 flex-shrink-0" />
                          Oracle
                        </a> (2014-2015)
                      </p>
                      <p className="text-xs md:text-sm text-gray-600">Enhanced Oracle CPQ (Configure, Price, Quote) software for enterprise sales teams. Deep experience in B2B software architecture and enterprise customer workflows.</p>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* B2B SaaS Impact Metrics */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">B2B Enterprise Impact & Scale</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 shadow-xl border-0 hover:shadow-2xl transition-all duration-300">
              <div className="text-green-600 mb-4">
                <TrendingUp className="h-8 w-8" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Enterprise Revenue Impact</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                  <span className="text-sm font-medium">ARR Growth (Eightfold AI)</span>
                  <span className="text-green-600 font-bold">$50M+</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                  <span className="text-sm font-medium">Revenue Saved (Zynga B2B)</span>
                  <span className="text-blue-600 font-bold">$3M+</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                  <span className="text-sm font-medium">Enterprise Accounts (AmEx)</span>
                  <span className="text-purple-600 font-bold">$23M+</span>
                </div>
              </div>
            </Card>

            <Card className="p-6 shadow-xl border-0 hover:shadow-2xl transition-all duration-300">
              <div className="text-blue-600 mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Enterprise Scale & Customers</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                  <span className="text-sm font-medium">Enterprise Customers</span>
                  <span className="text-orange-600 font-bold">300+</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                  <span className="text-sm font-medium">B2B Platform Users</span>
                  <span className="text-red-600 font-bold">100K+</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-indigo-50 rounded-lg">
                  <span className="text-sm font-medium">Cross-functional Teams</span>
                  <span className="text-indigo-600 font-bold">15+ Depts</span>
                </div>
              </div>
            </Card>

            <Card className="p-6 shadow-xl border-0 hover:shadow-2xl transition-all duration-300">
              <div className="text-purple-600 mb-4">
                <Award className="h-8 w-8" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">B2B Leadership Recognition</h4>
              <div className="space-y-3">
                <div className="p-3 bg-yellow-50 rounded-lg">
                  <div className="font-bold text-gray-900">Chairman Award 2022</div>
                  <div className="text-sm text-gray-600">Bharti Airtel - Enterprise Digital Innovation</div>
                </div>
                <div className="p-3 bg-green-50 rounded-lg">
                  <div className="font-bold text-gray-900">GCMA Superstar</div>
                  <div className="text-sm text-gray-600">American Express - Top B2B Analyst</div>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg">
                  <div className="font-bold text-gray-900">50+ Shoutouts</div>
                  <div className="text-sm text-gray-600">Eightfold AI - Enterprise Product Excellence</div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* B2B AI/ML Technical Expertise */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <Card className="p-8 shadow-xl border-0 hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Brain className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">AI/ML for Enterprise</h3>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Enterprise AI Platforms</h4>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Talent Intelligence AI</span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Resource Management ML</span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Multi-Agent Systems</span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">AutoGen Framework</span>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">B2B ML Applications</h4>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Predictive Analytics</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Customer Segmentation</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Risk Modeling</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">XGBoost Models</span>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Enterprise SaaS Architecture</h4>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Oracle CPQ</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Multi-tenant SaaS</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Enterprise APIs</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Compliance Platforms</span>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8 shadow-xl border-0 hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <Target className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">B2B Domain Specialization</h3>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">Enterprise SaaS Platforms</h4>
                <p className="text-sm text-gray-600">AI Resource Management, Field Service Management, Talent Intelligence, Oracle CPQ, Compliance Platforms</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">B2B Sales & Customer Success</h4>
                <p className="text-sm text-gray-600">Complex enterprise sales cycles, multi-stakeholder management, customer onboarding, expansion revenue</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">Financial Services & Risk</h4>
                <p className="text-sm text-gray-600">Enterprise risk modeling, business targeting, customer analytics, regulatory compliance</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">Enterprise Product Leadership</h4>
                <p className="text-sm text-gray-600">Cross-functional leadership, stakeholder management, product strategy, roadmap planning</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Personal Interests - Kept Brief */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Beyond B2B Product Management</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 shadow-lg border-0 hover:shadow-xl transition-all duration-300">
              <div className="text-blue-600 mb-4">
                <Globe className="h-8 w-8" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Global Perspective</h4>
              <p className="text-gray-600 mb-3">
                Traveled to <strong>40+ countries</strong> across 4 continents, bringing global market insights and cultural understanding to B2B product strategy.
              </p>
              <p className="text-sm text-gray-500">
                Favorites: Silicon Valley (tech innovation), Singapore (fintech hub), Germany (enterprise software)
              </p>
            </Card>

            <Card className="p-6 shadow-lg border-0 hover:shadow-xl transition-all duration-300">
              <div className="text-green-600 mb-4">
                <Target className="h-8 w-8" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Strategic Thinking</h4>
              <p className="text-gray-600 mb-3">
                Competitive snooker player with <strong>multiple corporate championships</strong>. The strategic planning and precision translate directly to B2B product planning.
              </p>
              <p className="text-sm text-gray-500">
                Best break: 67 in snooker. Strategy under pressure! 🎱
              </p>
            </Card>

            <Card className="p-6 shadow-lg border-0 hover:shadow-xl transition-all duration-300">
              <div className="text-purple-600 mb-4">
                <Brain className="h-8 w-8" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">AI Innovation</h4>
              <p className="text-gray-600 mb-3">
                Building cutting-edge multi-agent AI systems for enterprise product strategy. Passionate about the future of AI in B2B SaaS.
              </p>
              <p className="text-sm text-gray-500">
                Fun fact: The <button onClick={() => setActiveTab('overview')} className="text-purple-600 hover:text-purple-800 underline cursor-pointer">AI Product Strategy Council</button> you experienced? Built using AutoGen! 🤖
              </p>
            </Card>
          </div>
        </div>

        {/* Project Section - AI Product Strategy Council */}
        <div className="mb-16">
          <Card className="p-6 shadow-lg border-0 bg-gradient-to-r from-gray-50 to-blue-50 max-w-4xl mx-auto">
            <h4 className="text-lg font-bold text-gray-900 mb-3 text-center">Side Project: AI Product Strategy Council for B2B</h4>
            <p className="text-gray-600 text-center leading-relaxed mb-4">
              Built a multi-agent AI system specifically for B2B product managers facing complex enterprise decisions with limited user data. 
              Combines my expertise in AI/ML with deep understanding of B2B product challenges.
            </p>
            <div className="text-center">
              <Button 
                onClick={() => setActiveTab('overview')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300"
              >
                Explore the B2B AI Product Strategy →
              </Button>
            </div>
          </Card>
        </div>

        {/* Bottom CTA for B2B Opportunities */}
        <div className="text-center">
          <Card className="p-6 md:p-8 shadow-xl border-0 bg-gradient-to-r from-indigo-600 to-purple-600 text-white max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Drive B2B Product Success?</h3>
            <p className="text-lg text-indigo-100 mb-6 leading-relaxed">
              Looking for a <span className="font-semibold text-white">Principal PM, Group PM, or Product Director</span> with proven B2B SaaS and AI expertise? Let's discuss how I can accelerate your enterprise product growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="text-lg px-8 py-4 bg-white text-indigo-900 hover:bg-indigo-50 shadow-2xl transform hover:scale-105 transition-all duration-300"
                onClick={() => {
                  trackCTAClick('contact', 'Email Aroosh', 'about-bottom')
                  window.open('mailto:dayalaroosh@gmail.com?subject=B2B Product Leadership Opportunity&body=Hi Aroosh,%0D%0A%0D%0AI reviewed your B2B AI product management profile and would like to discuss potential leadership opportunities.%0D%0A%0D%0ABest regards', '_blank')
                }}
              >
                <Mail className="mr-2 h-5 w-5" />
                Let's Connect
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-indigo-900 shadow-2xl transform hover:scale-105 transition-all duration-300"
                onClick={() => {
                  trackCTAClick('social', 'LinkedIn', 'about-bottom')
                  window.open('https://www.linkedin.com/in/aroosh-dayal-a015b59a/', '_blank')
                }}
              >
                <Linkedin className="mr-2 h-5 w-5" />
                View LinkedIn
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Analytics page="presentation" />
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
                <div className="flex flex-col">
                  <span>Try Free Analysis</span>
                  <span className="text-xs text-purple-700 font-normal">(Beta Version)</span>
                </div>
                <ArrowRight className="ml-3 h-6 w-6" />
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

      {/* Feedback Form */}
      <FeedbackForm context="presentation" />

      {/* Ready to Discuss Section - Only show on Overview tab */}
      {activeTab === 'overview' && (
        <div className="py-12 md:py-16 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-6xl mx-auto px-4 md:px-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                🚀 Ready to Discuss Product Opportunities?
              </h2>
              <p className="text-lg md:text-xl text-blue-100 mb-6 max-w-3xl mx-auto">
                Open to discussing <span className="font-semibold text-white">Product Leadership opportunities</span> or <span className="font-semibold text-white">collaborative projects</span>. Let's connect if you're building products that need experienced leadership.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 justify-center items-center">
                <Button 
                  size="lg" 
                  className="text-lg px-6 py-4 bg-white text-blue-900 hover:bg-blue-50 shadow-2xl transform hover:scale-105 transition-all duration-300"
                  onClick={() => {
                    trackCTAClick('contact', 'Email Aroosh', 'bottom-cta')
                    window.open('mailto:dayalaroosh@gmail.com?subject=Interested in Your Product Management Profile&body=Hi Aroosh,%0D%0A%0D%0AI came across your Product Strategy presentation and was impressed by your experience in product management at Eightfold and your multi-agent system work.%0D%0A%0D%0AI%27d love to discuss potential opportunities in [Company/Role].%0D%0A%0D%0ABest regards', '_blank')
                  }}
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Email Me
                </Button>
                
                <Button 
                  size="lg" 
                  className="text-lg px-6 py-4 bg-green-600 hover:bg-green-700 text-white shadow-2xl transform hover:scale-105 transition-all duration-300"
                  onClick={() => {
                    trackCTAClick('contact', 'WhatsApp', 'bottom-cta')
                    window.open('https://wa.me/919550132970?text=Hi%20Aroosh%2C%20I%20saw%20your%20Product%20Strategy%20presentation%20and%20was%20impressed%20by%20your%20experience%20at%20Eightfold%20and%20multi-agent%20systems%20work.%20I%27d%20love%20to%20discuss%20potential%20product%20management%20opportunities.%20Are%20you%20available%20for%20a%20quick%20chat%3F', '_blank')
                  }}
                >
                  <Phone className="mr-2 h-5 w-5" />
                  WhatsApp
                </Button>
                
                <Button 
                  size="lg" 
                  className="text-lg px-6 py-4 bg-blue-800 hover:bg-blue-900 text-white shadow-2xl transform hover:scale-105 transition-all duration-300"
                  onClick={() => {
                    trackCTAClick('navigation', 'About Creator', 'bottom-cta')
                    handleTabClick('about')
                  }}
                >
                  <User className="mr-2 h-5 w-5" />
                  About Creator
                </Button>
                
                <Button 
                  size="lg" 
                  variant="outline"
                  className="text-lg px-6 py-4 border-white text-white hover:bg-white hover:text-blue-900 shadow-2xl transform hover:scale-105 transition-all duration-300"
                  onClick={() => {
                    trackCTAClick('social', 'LinkedIn', 'bottom-cta')
                    window.open('https://www.linkedin.com/in/aroosh-dayal-a015b59a/', '_blank')
                  }}
                >
                  <Linkedin className="mr-2 h-5 w-5" />
                  LinkedIn
                </Button>
                
                <Button 
                  size="lg" 
                  variant="outline"
                  className="text-lg px-6 py-4 border-white text-white hover:bg-white hover:text-blue-900 shadow-2xl transform hover:scale-105 transition-all duration-300"
                  onClick={() => {
                    trackCTAClick('download', 'Resume', 'bottom-cta')
                    window.open('/api/download-resume', '_blank')
                  }}
                >
                  <Download className="mr-2 h-5 w-5" />
                  Resume
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 