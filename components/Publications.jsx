import React, { useState } from 'react';
import { BookOpen, Award, Zap } from 'lucide-react';

export default function Publications() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const publicationCategories = [
    {
      id: 1,
      title: 'Research Papers',
      icon: BookOpen,
      count: '50+',
      description: 'Published research in top-tier conferences and journals',
      color: 'bg-blue-50',
    },
    {
      id: 2,
      title: 'Patents & IP',
      icon: Award,
      count: '12+',
      description: 'Patents and intellectual property filed and granted',
      color: 'bg-orange-50',
    },
    {
      id: 3,
      title: 'Collaborations',
      icon: Zap,
      count: '25+',
      description: 'Industry and international research collaborations',
      color: 'bg-green-50',
    },
  ];

  return (
    <section id="publications" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14 relative w-full">
          <h2 className="text-[32px] md:text-[40px] font-bold text-[#0f172a] mb-6 tracking-tight text-center">
            <span className="pb-1" style={{ borderBottom: '3px solid #F26520' }}>
              Publications & Research
            </span>
          </h2>
        </div>

        {/* Publication Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {publicationCategories.map((category) => {
            const Icon = category.icon;

            return (
              <div
                key={category.id}
                className="p-8 rounded-xl transition-all duration-300 cursor-pointer shadow-md bg-white border border-gray-200 hover:border-[#F26520] hover:shadow-lg"
              >
                <div className="text-4xl font-bold mb-2 text-[#F26520]">
                  {category.count}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {category.title}
                </h3>
                <p className="text-gray-700">
                  {category.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Featured Research */}
        <div className="bg-white border border-gray-200 rounded-xl p-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Recent Research Highlights
          </h3>
          <div className="space-y-6">
            {[
              'Advanced Deep Learning Architectures for Medical Imaging',
              'Federated Learning in Privacy-Preserving IoT Systems',
              'Sustainable AI: Reducing Carbon Footprint of Large Language Models',
              'Quantum Machine Learning: Theory and Applications',
            ].map((research, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-4 rounded-lg transition-all duration-300 hover:bg-gray-50 cursor-pointer transform hover:translate-x-2"
              >
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                  style={{ backgroundColor: '#F26520' }}
                >
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <div>
                  <p className="text-gray-900 font-semibold">{research}</p>
                  <p className="text-sm text-gray-600 mt-1">
                    Published in peer-reviewed international journals
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <p className="text-gray-700 mb-6 text-lg">
            Interested in contributing to our research? Join our team!
          </p>
          <button
            className="px-8 py-3 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            style={{ backgroundColor: '#F26520' }}
          >
            Explore Research Opportunities
          </button>
        </div>
      </div>
    </section>
  );
}
