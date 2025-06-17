'use client';

import * as React from 'react';
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Brain, Users, Zap, Shield, Play, CheckCircle, TrendingUp, Star, Award, Target } from 'lucide-react';

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
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="relative container mx-auto px-4 py-24">
          <div className="text-center max-w-5xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center bg-blue-100 text-blue-800 text-sm font-medium px-4 py-2 rounded-full mb-8 animate-fade-in">
              <Award className="w-4 h-4 mr-2" />
              Next-Generation Product Strategy Platform
            </div>
            
            {/* Main Heading */}
            <h1 className="text-6xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 leading-tight animate-slide-up">
              Product Strategy
              <span className="block text-white">Council</span>
            </h1>
            
            {/* Subheading */}
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed animate-slide-up-delay">
              Revolutionary AI-powered platform that assembles expert personas to analyze, debate, and score your product ideas with unprecedented speed and accuracy.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up-delay-2">
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
                Watch 2-min Demo
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 animate-fade-in-up">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">10x</div>
                <div className="text-gray-400">Faster Analysis</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">95%</div>
                <div className="text-gray-400">Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-400">5min</div>
                <div className="text-gray-400">To Strategic Insights</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Problem Statement - Enhanced */}
      <div className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              The Product Strategy Crisis
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Traditional product strategy processes are broken. Here's the reality facing product teams today.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="p-8 shadow-2xl border-0 bg-gradient-to-br from-red-50 to-orange-50 hover:shadow-3xl transition-all duration-300">
              <div className="text-red-600 mb-4">
                <TrendingUp className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Critical Challenges</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Weeks spent on manual research and competitive analysis</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Siloed decision-making with limited expert perspectives</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Inconsistent evaluation frameworks across teams</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Delayed feedback loops causing missed opportunities</span>
                </li>
              </ul>
            </Card>
            
            <Card className="p-8 shadow-2xl border-0 bg-gradient-to-br from-blue-50 to-indigo-50 hover:shadow-3xl transition-all duration-300">
              <div className="text-blue-600 mb-4">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Market Reality</h3>
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                  <span className="font-medium text-gray-700">Product Launch Failure Rate</span>
                  <span className="text-2xl font-bold text-red-600">67%</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                  <span className="font-medium text-gray-700">Time Lost on Research</span>
                  <span className="text-2xl font-bold text-orange-600">40%</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                  <span className="font-medium text-gray-700">Teams Without Framework</span>
                  <span className="text-2xl font-bold text-red-600">73%</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                  <span className="font-medium text-gray-700">Revenue Lost to Delays</span>
                  <span className="text-2xl font-bold text-red-600">$2.1M</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Solution/Vision - Reimagined */}
      <div className="py-24 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Revolutionary Solution
            </h2>
            <p className="text-xl text-blue-200 max-w-4xl mx-auto leading-relaxed">
              Introducing the world's first AI-powered Product Strategy Council—a breakthrough platform that transforms how product decisions are made.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-8 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 group">
              <div className="text-blue-400 mb-6 transform group-hover:scale-110 transition-transform duration-300">
                <Brain className="h-12 w-12" />
              </div>
              <h3 className="text-2xl font-bold mb-4">AI-Powered Expert Council</h3>
              <p className="text-blue-200 mb-6">
                Deploy specialized AI personas with deep domain expertise in market research, technology, UX, business strategy, and financial analysis.
              </p>
              <ul className="space-y-2 text-blue-100">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span>5 Expert Personas</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span>Real-time Analysis</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span>GPT-4 Powered</span>
                </li>
              </ul>
            </Card>
            
            <Card className="p-8 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 group">
              <div className="text-purple-400 mb-6 transform group-hover:scale-110 transition-transform duration-300">
                <Users className="h-12 w-12" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Dynamic Debate Engine</h3>
              <p className="text-blue-200 mb-6">
                Watch as expert personas engage in structured debates, challenging assumptions and uncovering blind spots in your product strategy.
              </p>
              <ul className="space-y-2 text-blue-100">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span>Multi-perspective Analysis</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span>Structured Argumentation</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span>Bias Detection</span>
                </li>
              </ul>
            </Card>
            
            <Card className="p-8 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 group">
              <div className="text-yellow-400 mb-6 transform group-hover:scale-110 transition-transform duration-300">
                <Zap className="h-12 w-12" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Instant RICE Scoring</h3>
              <p className="text-blue-200 mb-6">
                Get immediate, data-driven prioritization using the proven RICE framework with AI-enhanced accuracy and reasoning.
              </p>
              <ul className="space-y-2 text-blue-100">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span>Automated Scoring</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span>Detailed Reasoning</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span>Export to Tools</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>

      {/* Technology Excellence */}
      <div className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Built on Cutting-Edge Technology
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enterprise-grade architecture designed for scale, security, and performance.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="p-8 shadow-xl border-0 hover:shadow-2xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Zap className="h-5 w-5 text-blue-600" />
                </div>
                Frontend Excellence
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <span className="font-medium">Next.js 14</span>
                  <span className="text-blue-600 font-bold">Latest</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <span className="font-medium">TypeScript</span>
                  <span className="text-blue-600 font-bold">100% Coverage</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <span className="font-medium">Tailwind CSS</span>
                  <span className="text-blue-600 font-bold">Custom Design</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <span className="font-medium">Real-time Updates</span>
                  <span className="text-blue-600 font-bold">WebSockets</span>
                </div>
              </div>
            </Card>
            
            <Card className="p-8 shadow-xl border-0 hover:shadow-2xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Shield className="h-5 w-5 text-purple-600" />
                </div>
                Backend Power
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                  <span className="font-medium">Python FastAPI</span>
                  <span className="text-purple-600 font-bold">High Performance</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                  <span className="font-medium">OpenAI GPT-4</span>
                  <span className="text-purple-600 font-bold">Latest Model</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                  <span className="font-medium">PostgreSQL</span>
                  <span className="text-purple-600 font-bold">Enterprise DB</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                  <span className="font-medium">Redis Cache</span>
                  <span className="text-purple-600 font-bold">Sub-ms Response</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Key Features - Enhanced */}
      <div className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Game-Changing Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every feature designed to accelerate your product strategy process.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Brain,
                title: "Expert AI Council",
                description: "Five specialized AI personas with deep domain expertise analyze your product from multiple angles",
                color: "blue",
                features: ["Market Analyst", "Tech Architect", "Business Strategist", "UX Designer", "Financial Analyst"]
              },
              {
                icon: Users,
                title: "Real-time Debates",
                description: "Watch expert personas engage in structured debates, uncovering insights you'd never find alone",
                color: "purple",
                features: ["Live Discussions", "Perspective Conflicts", "Evidence-based Arguments", "Consensus Building"]
              },
              {
                icon: Zap,
                title: "Instant RICE Scoring",
                description: "Get immediate prioritization scores with detailed reasoning and export capabilities",
                color: "yellow",
                features: ["Automated Scoring", "Detailed Breakdown", "Comparison Matrix", "Export to Jira"]
              },
              {
                icon: Shield,
                title: "Enterprise Ready",
                description: "Built for scale with enterprise-grade security, compliance, and performance",
                color: "green",
                features: ["SOC 2 Compliant", "99.9% Uptime", "Advanced Analytics", "API Integration"]
              }
            ].map((feature, index) => (
              <Card key={index} className="p-8 shadow-xl border-0 hover:shadow-2xl transition-all duration-300 group">
                <div className="flex items-start gap-6">
                  <div className={`bg-${feature.color}-100 p-4 rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className={`h-8 w-8 text-${feature.color}-600`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.features.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section - Enhanced */}
      <div className="py-24 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              Ready to Transform Your Product Strategy?
            </h2>
            <p className="text-xl md:text-2xl text-purple-200 mb-12 leading-relaxed">
              Join innovative product teams who are using Product Strategy Council to make faster, better decisions and ship winning products.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                size="lg" 
                className="text-xl px-12 py-6 bg-white text-purple-900 hover:bg-purple-50 shadow-2xl transform hover:scale-105 transition-all duration-300 font-bold"
                onClick={handleGetStarted}
              >
                Start Free Analysis
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
                <span>No Credit Card Required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span>5-Minute Setup</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-blue-400" />
                <span>Enterprise Secure</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slide-up {
          from { 
            opacity: 0; 
            transform: translateY(30px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        @keyframes fade-in-up {
          from { 
            opacity: 0; 
            transform: translateY(20px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-slide-up {
          animation: slide-up 1s ease-out;
        }
        
        .animate-slide-up-delay {
          animation: slide-up 1s ease-out 0.2s both;
        }
        
        .animate-slide-up-delay-2 {
          animation: slide-up 1s ease-out 0.4s both;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out 0.6s both;
        }
      `}</style>
    </div>
  );
} 