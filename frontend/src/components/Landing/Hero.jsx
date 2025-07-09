import React, { useState, useEffect } from 'react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Play, ArrowRight, Sparkles, Zap, Code, Rocket } from 'lucide-react';

export const Hero = ({ onGetStarted, onWatchDemo }) => {
  const [currentFeature, setCurrentFeature] = useState(0);
  const features = [
    'AI-Powered Code Generation',
    'One-Click Deployment',
    'Real-time Collaboration',
    'Smart Template Library'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Hero Background Image */}
      <div className="absolute inset-0 opacity-10">
        <img 
          src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwzfHxBSSUyMHRlY2hub2xvZ3l8ZW58MHx8fGJsdWV8MTc1MjA0Mzk3OXww&ixlib=rb-4.1.0&q=85"
          alt="AI Technology Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-20 h-20 bg-blue-500 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-32 w-16 h-16 bg-purple-500 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute bottom-32 left-40 w-24 h-24 bg-indigo-500 rounded-full opacity-20 animate-pulse"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <Badge className="mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 text-sm font-medium animate-pulse">
            <Sparkles className="h-4 w-4 mr-2" />
            Powered by Advanced AI
          </Badge>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent leading-tight">
            Build Apps with
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              AI Superpowers
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your ideas into production-ready applications in minutes, not months. 
            Our AI-powered platform handles the complexity so you can focus on what matters.
          </p>

          {/* Dynamic Feature Display */}
          <div className="mb-10 h-12 flex items-center justify-center">
            <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-gray-700 font-medium transition-all duration-500">
                {features[currentFeature]}
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              onClick={onGetStarted}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <Rocket className="h-5 w-5 mr-2" />
              Start Building Free
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
            
            <Button 
              onClick={onWatchDemo}
              variant="outline"
              className="border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-300 hover:scale-105 bg-white/80 backdrop-blur-sm"
            >
              <Play className="h-5 w-5 mr-2" />
              Watch Demo
            </Button>
          </div>

          {/* Feature Icons */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center group cursor-pointer">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-3 group-hover:bg-blue-200 transition-colors duration-300">
                <Code className="h-8 w-8 text-blue-600" />
              </div>
              <p className="text-sm font-medium text-gray-700">AI Code Generation</p>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-3 group-hover:bg-purple-200 transition-colors duration-300">
                <Zap className="h-8 w-8 text-purple-600" />
              </div>
              <p className="text-sm font-medium text-gray-700">Lightning Fast</p>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-3 group-hover:bg-indigo-200 transition-colors duration-300">
                <Rocket className="h-8 w-8 text-indigo-600" />
              </div>
              <p className="text-sm font-medium text-gray-700">One-Click Deploy</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};