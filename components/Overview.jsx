import React, { useState } from 'react';
import { BookOpen, Users, Award, TrendingUp } from 'lucide-react';

export default function Overview() {
  const [imageHovered, setImageHovered] = useState(false);

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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="relative bg-white rounded-2xl p-8 shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-gray-50 border-l-4" style={{ borderLeftColor: '#F26520' }}>
              <div className="absolute top-8 right-8 opacity-10">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor" style={{ color: '#164265' }}>
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              
              <h3 className="text-2xl font-bold mb-6" style={{ color: '#164265' }}>
                Dear Aspirants,
              </h3>
              
              <div className="space-y-4 text-gray-700 leading-relaxed text-left relative z-10">
                <p className="text-lg font-medium italic mb-6" style={{ color: '#374151' }}>
                  "It is my privilege to welcome you to the Department of Computer Science & 
                  Engineering, accredited by NBA until June 2027. The department offers 
                  well-structured 4-year B.Tech and 2-year M.Tech programmes designed to build 
                  strong computational foundations and prepare students for the evolving global 
                  technology landscape."
                </p>

                <p>
                  Our academic framework integrates core computer science with emerging domains 
                  such as Artificial Intelligence, Data Science, Cloud Computing, and Cyber Security, 
                  enabling students to develop strong technical depth and advanced problem-solving 
                  abilities required in modern industries.
                </p>

                <p>
                  Students benefit from a premium learning ecosystem supported by modern laboratories, 
                  research-driven initiatives, and continuous industry exposure. Opportunities such as 
                  internships, live projects, technical competitions, and collaborative activities help 
                  transform academic learning into real-world competence.
                </p>

                <p>
                  With focused placement orientation, dedicated faculty mentorship, and structured skill 
                  development support, we aim to nurture confident engineers, innovative thinkers, and 
                  responsible technology professionals ready to build impactful and successful careers.
                </p>
              </div>
            </div>
          </div>

          {/* Dean's Image */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end mt-12 lg:mt-0 xl:pr-4">
            <div className="relative w-full max-w-[400px] group">
              <div 
                className="rounded-2xl overflow-hidden shadow-xl transition-all duration-500 relative border border-gray-100 z-10 bg-[#F8FAFC]"
                onMouseEnter={() => setImageHovered(true)}
                onMouseLeave={() => setImageHovered(false)}
              >
                {/* Subtle gradient behind person to ground the image */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-200/60 via-transparent to-transparent pointer-events-none"></div>

                {/* Image Wrapper: Increased size */}
                <div className="relative pt-10 flex justify-center items-end" style={{ height: '480px' }}> 
                  <img
                    src="../src/assets/images/Dr._Vineet_Sharma_4478-removebg-preview.png"
                    alt="Dr. Vineet Kumar Sharma - Dean, CSE"
                    className={`w-[95%] h-auto max-h-full object-contain object-bottom transition-transform duration-700 origin-bottom ${
                      imageHovered ? 'scale-[1.03]' : 'scale-100'
                    }`}
                    style={{ filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.08))' }}
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=400&fit=crop';
                      e.target.className = 'w-full h-full object-cover object-top transition-transform duration-700';
                    }}
                  />
                </div>
              </div>

              {/* Offset Accent Background for subtle depth */}
              <div className="absolute -inset-4 bg-[#164265] rounded-[2rem] -z-10 opacity-[0.03] transform transition-transform duration-500 group-hover:scale-105"></div>

              {/* Classic Name Plate */}
              <div
                className={`absolute -bottom-6 left-1/2 -translate-x-1/2 w-[85%] rounded-xl p-5 shadow-2xl transition-all duration-500 z-20 ${
                  imageHovered ? 'transform -translate-y-1' : ''
                }`}
                style={{ 
                  backgroundColor: '#164265',
                  borderBottom: '4px solid #F26520',
                }}
              >
                <div className="flex flex-col items-center text-center">
                  <h4 className="font-bold text-xl leading-snug mb-1 text-white">Dr. Vineet Kumar Sharma</h4>
                  <p className="text-sm text-gray-200 uppercase tracking-widest font-medium">Professor & Dean, CSE</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {buttons.map((button) => {
            const Icon = button.icon;
            const isApplyButton = button.id === 'apply';

            const Wrapper = isApplyButton ? 'a' : 'div';
            const wrapperProps = isApplyButton 
              ? { href: 'https://admission.kiet.edu/', target: '_blank', rel: 'noopener noreferrer' } 
              : {};

            return (
              <Wrapper
                key={button.id}
                {...wrapperProps}
                className={`group relative overflow-hidden rounded-xl p-5 transition-all duration-300 border cursor-pointer flex flex-col h-full bg-white border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 no-underline ${
                  isApplyButton ? 'hover:border-[#F26520]/50' : 'hover:border-[#164265]/30'
                }`}
              >
                {/* Subtle top border accent on hover */}
                <div className={`absolute top-0 left-0 right-0 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${
                  isApplyButton ? 'bg-[#F26520]' : 'bg-[#164265]'
                }`}></div>

                <div className="relative z-10 flex flex-col h-full">
                  <div className="mb-4">
                    <div
                      className={`rounded-lg p-2.5 w-fit transition-colors duration-300 ${
                        isApplyButton 
                          ? 'bg-[#F26520]/10 text-[#F26520] group-hover:bg-[#F26520] group-hover:text-white' 
                          : 'bg-[#164265]/10 text-[#164265] group-hover:bg-[#164265] group-hover:text-white'
                      }`}
                    >
                      <Icon size={22} strokeWidth={2.5} />
                    </div>
                  </div>

                  <h4 className="font-bold text-base mb-1.5 text-[#164265]">
                    {button.label}
                  </h4>
                  
                  <p className="text-sm flex-grow mb-5 leading-relaxed text-gray-600">
                    {button.description}
                  </p>

                  <div
                    className={`mt-auto flex items-center space-x-1.5 font-semibold text-xs uppercase tracking-wide ${
                      isApplyButton ? 'text-[#F26520]' : 'text-[#164265]'
                    }`}
                  >
                    <span>{isApplyButton ? 'Apply Now' : 'Learn more'}</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </div>
              </Wrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}