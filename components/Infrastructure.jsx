import React, { useState } from 'react';
import { Building2, Wifi, BookOpen, Cpu } from 'lucide-react';

export default function Infrastructure() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const infrastructureItems = [
    {
      id: 1,
      icon: Building2,
      title: 'State-of-the-Art Classrooms',
      description: 'Air-conditioned, equipped with modern teaching aids, projectors, and collaborative learning spaces',
      details: ['Smart boards', 'Audio-visual systems', 'Flexible layouts'],
    },
    {
      id: 2,
      icon: Cpu,
      title: 'NVIDIA DGX Supercomputing Lab',
      description: 'High-performance computing infrastructure with NVIDIA A100 GPUs for AI and deep learning research',
      details: ['NVIDIA DGX A100', '5000 CUDA cores', 'Real-time processing'],
    },
    {
      id: 3,
      icon: Wifi,
      title: 'High-Speed Connectivity',
      description: '100 Mbps internet connectivity throughout campus with 24/7 Wi-Fi access',
      details: ['Gigabit networks', 'Redundant connections', 'Cloud access'],
    },
    {
      id: 4,
      icon: BookOpen,
      title: 'Central Library',
      description: 'Extensive collection of AI/ML textbooks, journals, research papers, and online databases',
      details: ['50,000+ books', 'Digital library', 'IEEE access'],
    },
  ];

  return (
    <section id="infrastructure" className="py-20 bg-linear-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">
            Infrastructure & Facilities
          </h2>
          <div
            className="w-24 h-1 rounded-full"
            style={{ backgroundColor: '#F26520' }}
          ></div>
        </div>

        {/* Infrastructure Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {infrastructureItems.map((item) => {
            const Icon = item.icon;
            const isHovered = hoveredCard === item.id;

            return (
              <div
                key={item.id}
                onMouseEnter={() => setHoveredCard(item.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`p-8 rounded-xl transition-all duration-300 cursor-pointer ${
                  isHovered
                    ? 'shadow-2xl transform -translate-y-2'
                    : 'shadow-md border border-gray-200'
                }`}
                style={{
                  backgroundColor: isHovered ? '#F26520' : '#F9FAFB',
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
                <h3
                  className={`text-xl font-bold mb-3 transition-colors duration-300 ${
                    isHovered ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {item.title}
                </h3>
                <p
                  className={`mb-4 transition-colors duration-300 ${
                    isHovered ? 'text-blue-50' : 'text-gray-700'
                  }`}
                >
                  {item.description}
                </p>
                <div className="space-y-2">
                  {item.details.map((detail, idx) => (
                    <div
                      key={idx}
                      className={`flex items-center space-x-2 text-sm ${
                        isHovered ? 'text-white' : 'text-gray-600'
                      }`}
                    >
                      <span
                        className={`w-2 h-2 rounded-full ${
                          isHovered
                            ? 'bg-white'
                            : 'bg-orange-500'
                        }`}
                      ></span>
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Campus Overview */}
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Campus Amenities
              </h3>
              <ul className="space-y-4">
                {[
                  'Student Hostel Facilities (On-Campus)',
                  'Cafeteria & Food Court',
                  'Medical Clinic & First Aid',
                  'Sports Complex & Gym',
                  'Transportation Facilities',
                  'Student Support Services',
                  'Placement Cell',
                  'Counselling Services',
                ].map((amenity, idx) => (
                  <div
                    key={idx}
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                  >
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                      style={{ backgroundColor: '#F26520' }}
                    >
                      <span className="text-white text-xs font-bold">✓</span>
                    </div>
                    <p className="text-gray-700 font-medium">{amenity}</p>
                  </div>
                ))}
              </ul>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop"
                alt="Campus"
                className="w-full h-96 object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>

        {/* Virtual Tour CTA */}
        <div className="mt-16 text-center p-8 rounded-xl border-2 border-dashed" style={{ borderColor: '#F26520' }}>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Explore Our Campus
          </h3>
          <p className="text-gray-700 mb-6">
            Take a virtual tour of our state-of-the-art facilities and research centers
          </p>
          <button
            className="px-8 py-3 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            style={{ backgroundColor: '#F26520' }}
          >
            Virtual Campus Tour
          </button>
        </div>
      </div>
    </section>
  );
}
