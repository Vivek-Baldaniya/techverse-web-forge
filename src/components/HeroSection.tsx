
import React from 'react';

interface HeroSectionProps {
  title: string;
  highlightText: string;
  description: string;
  children?: React.ReactNode;
}

export const HeroSection = ({ title, highlightText, description, children }: HeroSectionProps) => {
  return (
    <section className="relative h-[500px] flex items-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-400/5 rounded-full blur-2xl"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-4 h-4 bg-blue-400 rounded-full opacity-60 animate-bounce"></div>
      <div className="absolute bottom-32 left-16 w-3 h-3 bg-purple-400 rounded-full opacity-60 animate-bounce delay-500"></div>
      <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-indigo-400 rounded-full opacity-60 animate-bounce delay-1000"></div>
      <div className="absolute top-40 left-1/4 w-5 h-5 bg-pink-400 rounded-full opacity-40 animate-pulse"></div>
      <div className="absolute bottom-20 right-1/4 w-6 h-6 bg-yellow-400 rounded-full opacity-50 animate-bounce delay-700"></div>

      {/* Geometric Shapes */}
      <div className="absolute top-24 left-1/3 w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 opacity-30 rotate-45 animate-pulse delay-300"></div>
      <div className="absolute bottom-28 right-1/3 w-6 h-6 bg-gradient-to-r from-green-400 to-blue-400 opacity-40 rotate-12 animate-bounce delay-1200"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            {title}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}{highlightText}
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            {description}
          </p>
          {children}
        </div>
      </div>
    </section>
  );
};
