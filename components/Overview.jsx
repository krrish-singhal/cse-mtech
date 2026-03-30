import React, { useState } from 'react';
import { BookOpen, Users, Award, TrendingUp, Briefcase, GraduationCap, Rocket, X } from 'lucide-react';
import PathwaysModal from './PathwaysModal';
import { pathwaysData } from '../src/pathwaysData';

export default function Overview() {
  const [imageHovered, setImageHovered] = useState(false);
  const [selectedPathway, setSelectedPathway] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedActionCard, setSelectedActionCard] = useState(null);

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

  const pathwayIcons = {
    1: Briefcase,
    2: GraduationCap,
    3: Rocket
  };

  const handlePathwayClick = (pathway) => {
    setSelectedPathway(pathway);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedPathway(null), 300);
  };

  const handleActionCardClick = (id) => {
    if (id === 'apply') return;
    if (id === 'curriculum') {
      const pathwaysSection = document.getElementById('pathways-section');
      if (pathwaysSection) {
        pathwaysSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      setSelectedActionCard(id);
    }
  };

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
                <div className="absolute inset-0 bg-gradient-to-t from-gray-200/60 via-transparent to-transparent pointer-events-none"></div>

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

              <div className="absolute -inset-4 bg-[#164265] rounded-[2rem] -z-10 opacity-[0.03] transform transition-transform duration-500 group-hover:scale-105"></div>

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
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {buttons.map((button) => {
            const Icon = button.icon;
            const isApplyButton = button.id === 'apply';

            const Wrapper = isApplyButton ? 'a' : 'div';
            const wrapperProps = isApplyButton 
              ? { href: 'https://admission.kiet.edu/', target: '_blank', rel: 'noopener noreferrer' } 
              : { onClick: () => handleActionCardClick(button.id) };

            return (
              <Wrapper
                key={button.id}
                {...wrapperProps}
                className={`group relative overflow-hidden rounded-xl p-5 transition-all duration-300 border cursor-pointer flex flex-col h-full bg-white border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 no-underline ${
                  isApplyButton ? 'hover:border-[#F26520]/50' : 'hover:border-[#164265]/30'
                }`}
              >
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

        {/* THREE DISTINCT PATHWAYS SECTION */}
        <div id="pathways-section" className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-3 text-gray-900">
              Three Distinct Pathways. One Unified Excellence.
            </h3>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Choose the pathway that aligns with your career aspirations and professional goals
            </p>
            <div className="flex justify-center mt-4">
              <div
                className="w-20 h-1 rounded-full"
                style={{ backgroundColor: '#F26520' }}
              ></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pathwaysData.map((pathway) => {
              const IconComponent = pathwayIcons[pathway.id];
              return (
                <div
                  key={pathway.id}
                  onClick={() => handlePathwayClick(pathway)}
                  className="group relative bg-white rounded-2xl p-6 border-2 border-gray-100 cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                  style={{
                    borderTopColor: pathway.color,
                    borderTopWidth: '4px'
                  }}
                >
                  {/* Icon Circle */}
                  <div className="mb-5 flex justify-center">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                      style={{
                        backgroundColor: `${pathway.color}15`,
                        color: pathway.color
                      }}
                    >
                      <IconComponent size={28} strokeWidth={2.2} />
                    </div>
                  </div>

                  {/* Title */}
                  <h4
                    className="text-xl font-bold mb-3 text-center leading-snug text-gray-900"
                  >
                    {pathway.title}
                  </h4>

                  {/* Subtitle */}
                  <p className="text-sm font-semibold text-gray-700 text-center mb-4 min-h-[40px]">
                    {pathway.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-gray-600 text-center leading-relaxed mb-6 min-h-[80px]">
                    {pathway.shortDesc}
                  </p>

                  {/* View Details Button */}
                  <div className="flex justify-center">
                    <button
                      className="px-5 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 group-hover:shadow-md"
                      style={{
                        backgroundColor: `${pathway.color}10`,
                        color: pathway.color,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = pathway.color;
                        e.currentTarget.style.color = 'white';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = `${pathway.color}10`;
                        e.currentTarget.style.color = pathway.color;
                      }}
                    >
                      View Complete Curriculum →
                    </button>
                  </div>

                  {/* Hover Accent Line */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center rounded-b-2xl"
                    style={{ backgroundColor: pathway.color }}
                  ></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Pathways Modal */}
      <PathwaysModal
        open={isModalOpen}
        onClose={closeModal}
        pathway={selectedPathway}
      />

      {/* Action Card Modal */}
      {selectedActionCard && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <div 
            className="absolute inset-0 bg-[#0f172a]/70 backdrop-blur-sm transition-opacity" 
            onClick={() => setSelectedActionCard(null)}
          ></div>
          
          <div className="bg-white rounded-2xl shadow-2xl z-20 w-full max-w-4xl overflow-hidden relative flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="px-6 py-5 border-b border-gray-100 flex justify-between items-center sticky top-0 bg-white z-30">
              <h3 className="text-2xl font-bold text-[#164265]">
                <span className="pb-1" style={{ borderBottom: '3px solid #F26520' }}>
                  {buttons.find(b => b.id === selectedActionCard)?.label}
                </span>
              </h3>
              <button 
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-500 hover:text-gray-900 transition-colors" 
                onClick={() => setSelectedActionCard(null)}
              >
                <X size={20} strokeWidth={2.5} />
              </button>
            </div>
            
            {/* Modal Body */}
            <div className="p-6 md:p-8 overflow-y-auto">
              {selectedActionCard === 'eligibility' && (
                <div className="space-y-6">
                  <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-[#f8fafc] border-b border-gray-200">
                          <th className="py-4 px-6 font-semibold text-[#164265] w-1/3">Criteria</th>
                          <th className="py-4 px-6 font-semibold text-[#164265]">Requirement</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        <tr className="hover:bg-gray-50/50 transition-colors">
                          <td className="py-4 px-6 font-medium text-gray-900">Qualification</td>
                          <td className="py-4 px-6 text-gray-600">B.E./B.Tech (CSE / IT / Allied) or MCA</td>
                        </tr>
                        <tr className="hover:bg-gray-50/50 transition-colors">
                          <td className="py-4 px-6 font-medium text-gray-900">Minimum Academic Requirement</td>
                          <td className="py-4 px-6 text-gray-600">6.5 CGPA</td>
                        </tr>
                        <tr className="hover:bg-gray-50/50 transition-colors">
                          <td className="py-4 px-6 font-medium text-gray-900">Preference</td>
                          <td className="py-4 px-6 text-gray-600">GATE qualified candidates preferred</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {selectedActionCard === 'scholarship' && (
                <div className="space-y-6 md:space-y-8">
                  {/* Top Info Box */}
                  <div className="bg-[#FFF8F5] border border-[#F26520]/20 rounded-xl p-5 md:p-6 shadow-sm">
                    <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-3 flex flex-wrap items-center">
                      <span className="mr-2">Total Annual Tuition Fee:</span> 
                      <span className="text-[#F26520]">₹1,70,000 / Year</span>
                    </h4>
                    <ul className="space-y-2 text-gray-700 font-medium ml-1">
                      <li className="flex items-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#164265] mr-3"></span>
                        Exam Fee: ₹10,000 / Year
                      </li>
                      <li className="flex items-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#164265] mr-3"></span>
                        <span>Caution Money: ₹5,000 <span className="text-gray-500 italic font-normal">(Refundable)</span></span>
                      </li>
                    </ul>
                  </div>

                  {/* Scholarship Table */}
                  <div>
                    <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                      <table className="w-full text-left border-collapse text-sm md:text-base whitespace-nowrap md:whitespace-normal">
                        <thead>
                          <tr className="bg-[#f8fafc] border-b border-gray-200">
                            <th className="py-4 px-4 md:px-6 font-semibold text-[#164265]">Scholarship %</th>
                            <th className="py-4 px-4 md:px-6 font-semibold text-[#164265]">Eligibility (CGPA)</th>
                            <th className="py-4 px-4 md:px-6 font-semibold text-[#164265]">Tuition Fee Relaxation</th>
                            <th className="py-4 px-4 md:px-6 font-semibold text-[#164265]">Remarks</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                          <tr className="hover:bg-gray-50/50 transition-colors">
                            <td className="py-4 px-4 md:px-6 font-bold text-[#164265]">40%</td>
                            <td className="py-4 px-4 md:px-6 font-medium text-gray-900">8.0 & above</td>
                            <td className="py-4 px-4 md:px-6 text-gray-600 font-medium">₹68,000</td>
                            <td className="py-4 px-4 md:px-6 text-gray-600">Highest merit scholarship</td>
                          </tr>
                          <tr className="hover:bg-gray-50/50 transition-colors">
                            <td className="py-4 px-4 md:px-6 font-bold text-[#164265]">30%</td>
                            <td className="py-4 px-4 md:px-6 font-medium text-gray-900">7.5 – &lt; 8.0</td>
                            <td className="py-4 px-4 md:px-6 text-gray-600 font-medium">₹51,000</td>
                            <td className="py-4 px-4 md:px-6 text-gray-600">Merit-based</td>
                          </tr>
                          <tr className="hover:bg-gray-50/50 transition-colors">
                            <td className="py-4 px-4 md:px-6 font-bold text-[#164265]">20%</td>
                            <td className="py-4 px-4 md:px-6 font-medium text-gray-900">7.0 – &lt; 7.5</td>
                            <td className="py-4 px-4 md:px-6 text-gray-600 font-medium">₹34,000</td>
                            <td className="py-4 px-4 md:px-6 text-gray-600">Merit-based</td>
                          </tr>
                          <tr className="bg-[#FFF8F5] border-t-2 border-[#F26520]/20 hover:bg-[#fff2ec] transition-colors">
                            <td className="py-4 px-4 md:px-6 font-extrabold text-[#F26520]">+5%</td>
                            <td className="py-4 px-4 md:px-6 font-medium text-gray-900">KIET Alumni</td>
                            <td className="py-4 px-4 md:px-6 text-gray-600 font-medium">Additional Relaxation</td>
                            <td className="py-4 px-4 md:px-6 text-gray-600">Extra benefit for alumni</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}