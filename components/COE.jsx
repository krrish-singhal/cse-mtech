import React, { useState } from 'react';
import { Play, BookOpen, Users } from 'lucide-react';

export default function COE() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section id="coe" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <p className="text-sm text-gray-600 mb-2">Your Journey Into Advanced Computing Begins Here</p>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Driving <span style={{ color: '#F26520' }}>Supercomputing with DGX</span>
            <br />
            Centre of Excellence
          </h2>
          <div
            className="w-24 h-1 rounded-full"
            style={{ backgroundColor: '#F26520' }}
          ></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Content */}
          <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed text-justify">
              Powered by the NVIDIA DGX A100 Supercomputer, KIET enables enterprise-grade
              AI computing for advanced research in the field of AI. Students build and
              deploy complex AI models on industry-level GPU infrastructure. A hub for
              innovation, industry collaboration, and next-generation AI excellence.
            </p>
            <button
              className="px-8 py-3 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              style={{ backgroundColor: '#F26520' }}
            >
              View More
            </button>
          </div>

          {/* Video Placeholder */}
          <div
            className="relative rounded-xl overflow-hidden shadow-2xl group cursor-pointer"
            onMouseEnter={() => setHoveredCard('video')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <img
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop"
              alt="DGX Supercomputing Centre"
              className={`w-full h-96 object-cover transition-all duration-500 ${
                hoveredCard === 'video' ? 'scale-110' : 'scale-100'
              }`}
            />
            <div
              className={`absolute inset-0 bg-black transition-opacity duration-300 flex items-center justify-center ${
                hoveredCard === 'video' ? 'opacity-40' : 'opacity-0'
              }`}
            >
              <Play
                size={64}
                className={`text-white transition-all duration-300 ${
                  hoveredCard === 'video' ? 'scale-100' : 'scale-80'
                }`}
                fill="white"
              />
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: BookOpen,
              title: 'Advanced Training',
              description:
                'Hands-on training with cutting-edge GPU-accelerated technologies and AI frameworks for deep learning and advanced computing.',
            },
            {
              icon: Users,
              title: 'Expert Mentorship',
              description:
                'Guidance from industry experts and faculty mentors with extensive experience in supercomputing and AI research.',
            },
            {
              icon: BookOpen,
              title: 'Research Opportunities',
              description:
                'Collaborate on groundbreaking AI research projects and contribute to innovations in machine learning and data science.',
            },
          ].map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="p-8 rounded-xl border border-gray-200 transition-all duration-300 hover:shadow-lg hover:border-gray-300 transform hover:-translate-y-2"
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: '#F26520' }}
                >
                  <Icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
