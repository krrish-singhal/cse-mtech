import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Highlights() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const highlights = [
    {
      id: 1,
      title: 'Cutting-Edge Curriculum',
      description:
        'Gain in-depth knowledge and hands-on expertise in advanced Artificial Intelligence technologies, including Generative AI, Agentic Systems, Artificial Intelligence & Machine Learning, Deep Learning, and Autonomous Intelligent Systems. The curriculum is designed to equip students with strong theoretical foundations and practical skills aligned with emerging industry demands and next-generation AI innovations.',
      image:
        'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop',
    },
    {
      id: 2,
      title: 'Supercomputing NVIDIA Centre of Excellence',
      description:
        'Access high-performance computing infrastructure through the NVIDIA Centre of Excellence, enabling students to work on large-scale AI models, intelligent automation systems, and real-world research problems. NVIDIA DGX A100 supercomputing platforms provide hands-on exposure to advanced AI development, deep learning experimentation, and high-performance computing environments.',
      image:
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
    },
    {
      id: 3,
      title: 'Industry Connect',
      description:
        'Benefit from continuous guidance, mentorship, and technical supervision from AI innovation labs and experienced industry experts. The program integrates industry-driven case studies, live projects, and collaborative learning opportunities to bridge the gap between academic knowledge and real-world applications.',
      image:
        'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
    },
    {
      id: 4,
      title: 'Global & Industry Exposure',
      description:
        'Experience a seamless transition from classroom learning to corporate environments through global industry exposure, expert interactions, internships, and collaborative research studies. The program also provides 100% placement assistance, helping students connect with leading technology companies and build successful careers in Artificial Intelligence and emerging technologies.',
      image:
        'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
    },
  ];

  return (
    <section id="highlights" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">
            Department's Highlights
          </h2>
          <div
            className="w-24 h-1 rounded-full"
            style={{ backgroundColor: '#F26520' }}
          ></div>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {highlights.map((highlight, index) => (
            <div
              key={highlight.id}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group flex flex-col space-y-6 cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden rounded-xl shadow-lg">
                <img
                  src={highlight.image}
                  alt={highlight.title}
                  className={`w-full h-64 object-cover transition-transform duration-500 ${
                    hoveredIndex === index ? 'scale-110' : 'scale-100'
                  }`}
                />
                <div
                  className={`absolute inset-0 bg-black transition-opacity duration-500 ${
                    hoveredIndex === index ? 'opacity-10' : 'opacity-0'
                  }`}
                ></div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3
                  className={`text-2xl font-bold transition-colors duration-300 ${
                    hoveredIndex === index
                      ? 'text-blue-900'
                      : 'text-gray-900'
                  }`}
                  style={{
                    color: hoveredIndex === index ? '#164265' : '#111827',
                  }}
                >
                  {highlight.title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-justify">
                  {highlight.description}
                </p>
                <div
                  className={`inline-flex items-center space-x-2 font-semibold transition-all duration-300 ${
                    hoveredIndex === index ? 'translate-x-2' : ''
                  }`}
                  style={{ color: '#F26520' }}
                >
                  <span>Learn more</span>
                  <ArrowRight size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-20 text-center space-y-6">
          <h3 className="text-2xl font-bold text-gray-900">
            Why Choose Our Program?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            {[
              {
                number: '4+',
                label: 'Years of Excellence',
              },
              {
                number: '100+',
                label: 'Industry Partners',
              },
              {
                number: '95%',
                label: 'Placement Rate',
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <p
                  className="text-4xl font-bold mb-2"
                  style={{ color: '#F26520' }}
                >
                  {stat.number}
                </p>
                <p className="text-gray-700 font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
