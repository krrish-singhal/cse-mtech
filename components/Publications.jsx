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
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">
            Publications & Research
          </h2>
          <div
            className="w-24 h-1 rounded-full"
            style={{ backgroundColor: '#F26520' }}
          ></div>
        </div>

        {/* Publication Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {publicationCategories.map((category) => {
            const Icon = category.icon;
            const isHovered = hoveredCard === category.id;

            return (
              <div
                key={category.id}
                onMouseEnter={() => setHoveredCard(category.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`p-8 rounded-xl transition-all duration-300 cursor-pointer transform ${
                  isHovered
                    ? 'shadow-2xl -translate-y-2'
                    : 'shadow-md border border-gray-200'
                }`}
                style={{
                  backgroundColor: isHovered ? '#F26520' : category.color,
                }}
              >
                <div
                  className={`w-16 h-16 rounded-lg flex items-center justify-center mb-6 transition-all duration-300 transform ${
                    isHovered ? 'scale-110 rotate-12' : ''
                  }`}
                  style={{
                    backgroundColor: isHovered
                      ? 'rgba(255, 255, 255, 0.2)'
                      : '#F26520',
                  }}
                >
                  <Icon
                    size={32}
                    className={`transition-colors duration-300 ${
                      isHovered ? 'text-white' : 'text-white'
                    }`}
                  />
                </div>
                <div
                  className={`text-4xl font-bold mb-2 transition-colors duration-300 ${
                    isHovered ? 'text-white' : 'text-orange-600'
                  }`}
                >
                  {category.count}
                </div>
                <h3
                  className={`text-xl font-bold mb-3 transition-colors duration-300 ${
                    isHovered ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {category.title}
                </h3>
                <p
                  className={`transition-colors duration-300 ${
                    isHovered ? 'text-blue-50' : 'text-gray-700'
                  }`}
                >
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
