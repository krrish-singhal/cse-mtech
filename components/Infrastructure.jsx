import React from 'react';
import classesImg from '../src/assets/Infrastructure/classes.webp';
import labsImg from '../src/assets/Infrastructure/labs.webp';

export default function Infrastructure() {
  return (
    <section id="infrastructure" className="pt-5 pb-10 bg-[#fafbfc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 relative w-full">
          <h2 className="text-[32px] md:text-[36px] font-bold text-[#0f172a] mb-6 tracking-tight text-center">
            <span className="pb-1" style={{ borderBottom: '3px solid #F26520' }}>
              Infrastructure & Facilities
            </span>
          </h2>
        </div>

        {/* Showcase Sections */}
        <div className="flex flex-col gap-8 lg:gap-12">
          
          {/* Classes */}
          <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10 group">
            <div className="w-full lg:w-1/2 overflow-hidden rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-gray-100 relative">
               <div className="absolute inset-0 bg-linear-to-t from-[#164265]/30 to-transparent z-10 opacity-70 group-hover:opacity-40 transition-opacity duration-700" />
               <img src={classesImg} alt="Modern Classrooms" className="w-full h-[250px] lg:h-[320px] object-cover transition-transform duration-1000 group-hover:scale-105" />
            </div>
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
               <h3 className="text-2xl lg:text-3xl font-extrabold text-[#164265] mb-4 leading-tight">
                 State-of-the-Art <br/><span className="text-[#F26520]">Learning Spaces</span>
               </h3>
               <p className="text-[#475569] text-[15px] leading-relaxed mb-6 text-justify">
                 Experience learning in highly advanced, air-conditioned smart classrooms designed to foster a deeply collaborative and interactive learning environment. They feature premium audio-visual systems, high-speed connectivity, and ergonomic layouts carefully tailored for group discussions and modern teaching methodologies.
               </p>
               <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                 {['Smart interactive boards', 'Acoustically designed spaces', 'High-end projection systems', 'Flexible collaborative seating'].map((item, i) => (
                    <li key={i} className="flex items-center text-[#0f172a] font-semibold text-[14px]">
                      <div className="w-2 h-2 rounded-full bg-[#164265] mr-2.5 shadow-sm" />
                      {item}
                    </li>
                 ))}
               </ul>
            </div>
          </div>

          {/* Labs */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-6 lg:gap-10 group">
            <div className="w-full lg:w-1/2 overflow-hidden rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-gray-100 relative">
               <div className="absolute inset-0 bg-linear-to-t from-[#164265]/30 to-transparent z-10 opacity-70 group-hover:opacity-40 transition-opacity duration-700" />
               <img src={labsImg} alt="High-Tech Laboratories" className="w-full h-[250px] lg:h-[320px] object-cover transition-transform duration-1000 group-hover:scale-105" />
            </div>
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
               <h3 className="text-2xl lg:text-3xl font-extrabold text-[#164265] mb-4 leading-tight">
                 Advanced <br/><span className="text-[#F26520]">Laboratories & HPC</span>
               </h3>
               <p className="text-[#475569] text-[15px] leading-relaxed mb-6 text-justify">
                 Immerse yourself in world-class research facilities powered by enterprise-grade hardware. Our computing laboratories contain extensive toolsets for AI, data science, and deep learning, fully supported by robust networking architecture to seamlessly handle data-intensive computational challenges.
               </p>
               <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                 {['NVIDIA DGX Supercomputing', 'Gigabit campus ethernet', '24/7 cloud resource access', 'Dedicated AI & ML hardware'].map((item, i) => (
                    <li key={i} className="flex items-center text-[#0f172a] font-semibold text-[14px]">
                      <div className="w-2 h-2 rounded-full bg-[#F26520] mr-2.5 shadow-sm" />
                      {item}
                    </li>
                 ))}
               </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
