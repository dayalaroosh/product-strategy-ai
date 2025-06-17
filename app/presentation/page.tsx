'use client';

import * as React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Brain, Users, Zap, Shield } from 'lucide-react';

export default function PresentationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Product Strategy Council
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            AI-powered product strategy platform that brings together expert personas to analyze, debate, and score product ideas in real-time.
          </p>
          <Button size="lg" className="text-lg px-8">
            Try Demo <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Problem Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">The Problem</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Traditional Challenges</h3>
            <ul className="space-y-3 text-gray-600">
              <li>• Time-consuming manual research and analysis</li>
              <li>• Limited perspectives in decision-making</li>
              <li>• Inconsistent evaluation criteria</li>
              <li>• Delayed feedback loops</li>
            </ul>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Market Impact</h3>
            <ul className="space-y-3 text-gray-600">
              <li>• 60% of product launches fail to meet expectations</li>
              <li>• 40% of product development time spent on research</li>
              <li>• 70% of product teams lack structured evaluation</li>
              <li>• 50% of decisions made without proper validation</li>
            </ul>
          </Card>
        </div>
      </div>

      {/* Vision Section */}
      <div className="container mx-auto px-4 py-16 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12">Our Vision</h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-xl text-gray-600 text-center mb-8">
            To revolutionize product strategy by creating an AI-powered council of expert personas that provides instant, comprehensive, and unbiased analysis of product ideas.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <Brain className="h-12 w-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2">AI-Powered Analysis</h3>
              <p className="text-gray-600">Instant expert-level insights powered by advanced AI models</p>
            </Card>
            <Card className="p-6 text-center">
              <Users className="h-12 w-12 mx-auto mb-4 text-purple-600" />
              <h3 className="text-xl font-semibold mb-2">Multi-Perspective</h3>
              <p className="text-gray-600">Diverse expert personas for comprehensive evaluation</p>
            </Card>
            <Card className="p-6 text-center">
              <Zap className="h-12 w-12 mx-auto mb-4 text-yellow-600" />
              <h3 className="text-xl font-semibold mb-2">Real-Time Results</h3>
              <p className="text-gray-600">Immediate feedback and scoring for faster decisions</p>
            </Card>
          </div>
        </div>
      </div>

      {/* Technology Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Technology Stack</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Frontend</h3>
            <ul className="space-y-3 text-gray-600">
              <li>• Next.js 14 with React 18</li>
              <li>• TypeScript for type safety</li>
              <li>• Tailwind CSS for styling</li>
              <li>• Real-time WebSocket updates</li>
            </ul>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Backend</h3>
            <ul className="space-y-3 text-gray-600">
              <li>• Python FastAPI</li>
              <li>• OpenAI GPT-4 Integration</li>
              <li>• PostgreSQL Database</li>
              <li>• Redis for caching</li>
            </ul>
          </Card>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="p-6">
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Brain className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Expert Council</h3>
                <p className="text-gray-600">AI-powered personas with deep domain expertise analyze your product ideas</p>
              </div>
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex items-start gap-4">
              <div className="bg-purple-100 p-3 rounded-lg">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Real-time Debates</h3>
                <p className="text-gray-600">Watch as expert personas debate and discuss your product strategy</p>
              </div>
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex items-start gap-4">
              <div className="bg-yellow-100 p-3 rounded-lg">
                <Zap className="h-6 w-6 text-yellow-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Instant Scoring</h3>
                <p className="text-gray-600">Get immediate RICE scoring and prioritization recommendations</p>
              </div>
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex items-start gap-4">
              <div className="bg-green-100 p-3 rounded-lg">
                <Shield className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Enterprise Ready</h3>
                <p className="text-gray-600">Secure, scalable, and compliant with enterprise standards</p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Product Strategy?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join leading product teams who are using Product Strategy Council to make better decisions, faster.
          </p>
          <Button size="lg" className="text-lg px-8">
            Get Started <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
} 