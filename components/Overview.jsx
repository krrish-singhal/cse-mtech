import React, { useState } from 'react';
import { BookOpen, Users, Award, TrendingUp } from 'lucide-react';

export default function Overview() {
  const [cardsExpanded, setCardsExpanded] = useState(false);
  const [imageHovered, setImageHovered] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  const buttons = [
    {
      id: 'curriculum',
      label: 'View Curriculum',
      icon: BookOpen,
      description: 'Semester-wise subjects, labs & electives',
      zIndex: 40,
    },
    {
      id: 'eligibility',
      label: 'Eligibility',
      icon: Users,
      description: 'Qualification criteria & age limit',
      zIndex: 30,
    },
    {
      id: 'scholarship',
      label: 'Fee & Scholarship',
      icon: Award,
      description: 'Tuition, hostel & merit scholarships',
      zIndex: 20,
    },
    {
      id: 'apply',
      label: 'Apply Now',
      icon: TrendingUp,
      description: 'Applications open for 2026-27',
      zIndex: 10,
    },
  ];

  return (
    <section id="overview" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-2">
          M.Tech (CSE) Overview
        </h2>
        <div className="flex justify-center mb-12">
          <div
            className="w-24 h-1 rounded-full"
            style={{ backgroundColor: '#F26520' }}
          ></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#F26520' }}>
                Dear Aspirants,
              </h3>
              <p className="text-gray-700 leading-relaxed">
                It is my privilege to welcome you to the Department of Computer Science & 
                Engineering, accredited by NBA until June 2027. The department offers 
                well-structured 4-year B.Tech and 2-year M.Tech programmes designed to build 
                strong computational foundations and prepare students for the evolving global 
                technology landscape.
              </p>
            </div>

            <p className="text-gray-700 leading-relaxed">
              Our academic framework integrates core computer science with emerging domains 
              such as Artificial Intelligence, Data Science, Cloud Computing, and Cyber Security, 
              enabling students to develop strong technical depth and advanced problem-solving 
              abilities required in modern industries.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Students benefit from a premium learning ecosystem supported by modern laboratories, 
              research-driven initiatives, and continuous industry exposure. Opportunities such as 
              internships, live projects, technical competitions, and collaborative activities help 
              transform academic learning into real-world competence.
            </p>

            <p className="text-gray-700 leading-relaxed">
              With focused placement orientation, dedicated faculty mentorship, and structured skill 
              development support, we aim to nurture confident engineers, innovative thinkers, and 
              responsible technology professionals ready to build impactful and successful careers.
            </p>
          </div>

          {/* Dean's Image */}
          <div className="relative">
            <div 
              className="rounded-xl overflow-hidden shadow-2xl transition-all duration-300 relative"
              onMouseEnter={() => setImageHovered(true)}
              onMouseLeave={() => setImageHovered(false)}
            >
              {/* Border overlay on hover */}
              <div 
                className={`absolute inset-0 rounded-xl pointer-events-none transition-opacity duration-300 ${
                  imageHovered ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                  border: '3px solid rgba(242, 101, 32, 0.3)',
                  boxShadow: imageHovered ? '0 0 20px rgba(242, 101, 32, 0.2)' : 'none'
                }}
              ></div>
              
              {/* Image with zoom effect on hover */}
              <div className="overflow-hidden rounded-xl">
                <img
                  src="../src/assets/images/Dr._Vineet_Sharma_4478-removebg-preview.png"
                  alt="Dr. Vineet Kumar Sharma - Dean, CSE"
                  className={`w-full h-140 object-cover transition-transform duration-500 ${
                    imageHovered ? 'scale-105' : 'scale-100'
                  }`}
                  onError={(e) => {
                    // Fallback if image not found
                    e.target.src = 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=400&fit=crop';
                  }}
                />
              </div>
            </div>

            {/* Name Card with subtle animation */}
            <div
              className={`absolute -bottom-6 -right-6 rounded-lg p-4 text-white shadow-lg max-w-xs transition-all duration-300 ${
                imageHovered ? 'transform translate-y-1' : ''
              }`}
              style={{ 
                backgroundColor: '#164265',
                boxShadow: imageHovered 
                  ? '0 10px 25px rgba(22, 66, 101, 0.3)' 
                  : '0 4px 15px rgba(0, 0, 0, 0.2)'
              }}
            >
              <p className="font-bold text-lg">Dr. Vineet Kumar Sharma</p>
              <p className="text-sm opacity-90">Professor & Dean, CSE</p>
            </div>
          </div>
        </div>

        {/* Stacked Action Cards */}
        <div 
          className="mt-16 relative"
          onMouseEnter={() => setCardsExpanded(true)}
          onMouseLeave={() => {
            setCardsExpanded(false);
            setHoveredCard(null);
          }}
          style={{ height: '280px' }}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            {buttons.map((button, index) => {
              const Icon = button.icon;
              const isApplyButton = button.id === 'apply';
              const isHovered = hoveredCard === button.id;
              
              // Calculate card positions
              const getCardStyle = () => {
                if (cardsExpanded) {
                  // Expanded state - cards slide out horizontally
                  const spacing = 310; // Width of card + gap
                  const totalWidth = (buttons.length - 1) * spacing;
                  const startOffset = -totalWidth / 2;
                  
                  return {
                    transform: `translateX(${startOffset + index * spacing}px) translateY(0px)`,
                    opacity: 1,
                  };
                } else {
                  // Stacked state - all cards stack behind the first one
                  const offset = index * 8; // Small offset for depth perception
                  return {
                    transform: `translateX(0px) translateY(${offset}px)`,
                    opacity: index === 0 ? 1 : 0.7,
                  };
                }
              };

              return (
                <div
                  key={button.id}
                  onMouseEnter={() => setHoveredCard(button.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className="absolute rounded-xl p-6 cursor-pointer transition-all duration-500 ease-out"
                  style={{
                    width: '280px',
                    backgroundColor: isApplyButton ? '#F26520' : 'white',
                    border: isApplyButton ? 'none' : '1px solid #E5E7EB',
                    zIndex: cardsExpanded ? (isHovered ? 50 : button.zIndex) : button.zIndex,
                    boxShadow: isHovered 
                      ? '0 20px 40px rgba(0, 0, 0, 0.15)' 
                      : cardsExpanded 
                        ? '0 10px 25px rgba(0, 0, 0, 0.1)' 
                        : index === 0 
                          ? '0 8px 20px rgba(0, 0, 0, 0.12)' 
                          : '0 4px 10px rgba(0, 0, 0, 0.08)',
                    ...getCardStyle(),
                  }}
                >
                  {/* Icon with subtle pulse on hover */}
                  <div
                    className={`rounded-lg p-3 w-fit mb-4 transition-all duration-300 ${
                      isHovered ? 'scale-110' : ''
                    }`}
                    style={{
                      backgroundColor: isApplyButton
                        ? 'rgba(255,255,255,0.2)'
                        : '#F26520',
                      boxShadow: isHovered && !isApplyButton 
                        ? '0 4px 12px rgba(242, 101, 32, 0.3)' 
                        : 'none'
                    }}
                  >
                    <Icon
                      size={24}
                      className="text-white"
                    />
                  </div>

                  <h4
                    className={`font-bold text-lg mb-2 ${
                      isApplyButton ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    {button.label}
                  </h4>
                  
                  <p
                    className={`text-sm ${
                      isApplyButton ? 'text-orange-50' : 'text-gray-600'
                    }`}
                  >
                    {button.description}
                  </p>

                  {/* Arrow with smooth animation */}
                  <div
                    className="mt-4 flex items-center space-x-2 font-semibold text-sm"
                    style={{ color: isApplyButton ? 'white' : '#F26520' }}
                  >
                    <span>Learn more</span>
                    <span 
                      className={`transition-all duration-300 inline-block ${
                        isHovered ? 'translate-x-2 opacity-100' : 'opacity-70'
                      }`}
                    >
                      →
                    </span>
                  </div>

                  {/* Subtle top border accent on hover for non-Apply cards */}
                  {!isApplyButton && (
                    <div 
                      className={`absolute top-0 left-0 right-0 h-1 rounded-t-xl transition-all duration-300 ${
                        isHovered ? 'opacity-100' : 'opacity-0'
                      }`}
                      style={{ backgroundColor: '#F26520' }}
                    ></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Hint text */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-500 italic">
            Hover over the cards to explore all options
          </p>
        </div>
      </div>
    </section>
  );
}