import React, { useState } from "react";
import { ChevronRight, X } from 'lucide-react';
import gdgImg from "../src/assets/clubs/gdg.webp";
import dsdlImg from "../src/assets/clubs/dsdl.webp";
import mlsaImg from "../src/assets/clubs/mlsa.webp";
import fosscuImg from "../src/assets/clubs/fosscu.webp";

export default function Clubs() {
  const [selectedClub, setSelectedClub] = useState(null);

  const clubs = [
    {
      id: 1,
      name: "Google Developer Groups (GDG)",
      description:
        "The Google Developer Groups (GDG) at KIET, Ghaziabad is a dynamic, student-driven technical community dedicated to empowering learners through hands-on skills, innovation, and real-world problem-solving. Supported by Google Developers, the club provides a platform for students to explore emerging technologies such as web development, Android, cloud computing, machine learning, and AI. It conducts workshops, hackathons, coding sessions, and project-based learning activities to bridge the gap between academic knowledge and industry requirements. GDG KIET encourages collaboration, creativity, and leadership, helping students build strong technical portfolios while contributing to impactful community solutions and preparing them for future technological careers.",
      tags: ["Web", "Android", "Cloud"],
      image: gdgImg,
    },
    {
      id: 2,
      name: "Data Science and Deep Learning (DSDL)",
      description:
        "The Data Science and Deep Learning (DSDL) Club, guided by Dr. Vineet Sharma, is a vibrant student community committed to fostering excellence in AI, machine learning, and data-driven innovation. The club provides a platform for students to explore data science concepts, build intelligent systems, and apply deep learning techniques to real-world problems. Through hands-on workshops, industrial collaborations, research initiatives, and peer learning, DSDL enhances analytical thinking and technical expertise. The club nurtures curiosity, creativity, and teamwork, empowering students to become future-ready professionals capable of contributing impactful solutions in academia, industry, and society.",
      tags: ["Machine Learning", "AI", "Deep Learning"],
      image: dsdlImg,
    },
    {
      id: 3,
      name: "Microsoft Student Ambassadors",
      description:
        "Microsoft Learn Student Ambassadors (MLSA), KIET Ghaziabad is a student-led, innovation-focused community dedicated to building strong technical and leadership skills. Guided by experienced faculty and leadership, it offers hands-on learning through workshops, hackathons, mentorship programs, and expert sessions across domains like Cloud Computing, AI/ML, Web Development, Cybersecurity, and DevOps.Fostering collaboration, peer learning, and real-world exposure, MLSA KIET serves as a vibrant platform for innovation and prepares students to excel in the evolving tech industry.",
      tags: ["Azure", "Leadership", "Hackathons"],
      image: mlsaImg,
    },
    {
      id: 4,
      name: "FOSSCU (Open Source)",
      description: "FOSSCU (Free and Open Source Software Community), KIET Ghaziabad is a student-led initiative dedicated to promoting open-source culture, collaboration, and innovation. The community encourages students to contribute to real-world projects, enhance their coding skills, and understand the power of open technologies. Through workshops, contribution drives, and peer learning, FOSSCU empowers students to build, share, and grow while making meaningful contributions to the global open-source ecosystem",
      tags: ["Open Source", "Git", "Collaboration"],
      image: fosscuImg,
    },
  ];

  return (
    <section id="clubs" className="py-10 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14 relative w-full">
          <h2 className="text-[32px] md:text-[40px] font-bold text-[#0f172a] mb-6 tracking-tight text-center">
            <span className="pb-1" style={{ borderBottom: '3px solid #F26520' }}>
              Clubs
            </span>
          </h2>
        </div>
        
        {/* Timeline Grid */}
        <div className="relative">
          {/* Continuous Line (Desktop Only) */}
          <div className="hidden lg:flex absolute top-1/2 -translate-y-1/2 left-0 right-0 h-[2px] z-0">
            <div className="w-1/2 h-full bg-linear-to-r from-transparent via-[#164265] to-gray-300" />
            <div className="w-1/2 h-full bg-linear-to-r from-gray-300 via-[#F26520] to-transparent" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 lg:gap-4 relative z-10">
            {clubs.map((club, index) => {
              const isTop = index % 2 === 0;

              return (
                <div
                  key={club.id}
                  className={`flex flex-col relative w-full group ${
                    isTop ? "lg:mb-24" : "lg:mt-24"
                  }`}
                >
                  <div 
                    onClick={() => setSelectedClub(club)}
                    className="cursor-pointer bg-white rounded-2xl border border-gray-100 shadow-[0_2px_18px_-8px_rgba(0,0,0,0.1)] overflow-hidden flex flex-col h-full hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-shadow duration-300 transform group-hover:-translate-y-1 max-w-[260px] mx-auto w-full"
                  >
                    {/* Image Box */}
                    <div className="relative h-32 w-full shrink-0 flex items-center justify-center p-4 bg-gray-50/50">
                      <div className="absolute inset-0 bg-blue-900/5 z-10 mix-blend-multiply"></div>
                      <img
                        src={club.image}
                        alt={club.name}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>

                    {/* Content Box */}
                    <div className="p-5 flex flex-col flex-1 text-center">
                      <div className="mb-3">
                        <h3 className="text-[16px] leading-snug font-bold text-gray-900 mt-1 mb-1">
                          {club.name}
                        </h3>
                      </div>                

                      {/* Explore Button */}
                      <button 
                        onClick={() => setSelectedClub(club)}
                        className="w-full py-2 rounded-xl border border-gray-200 text-sm font-semibold text-gray-700 mt-auto hover:bg-[#164265] hover:text-white transition-colors flex items-center justify-center group/btn"
                      >
                        Explore
                        <ChevronRight size={16} className="ml-1 text-gray-400 group-hover/btn:text-white transition-colors" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Modal Overlay */}
      {selectedClub && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-[#0f172a]/70 backdrop-blur-sm transition-opacity" 
            onClick={() => setSelectedClub(null)}
          ></div>
          
          <div className="bg-white rounded-2xl shadow-2xl z-10 w-full max-w-3xl overflow-hidden relative transform transition-transform animate-in fade-in zoom-in-95 duration-200">
            <button 
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-white/50 backdrop-blur-md hover:bg-gray-100 text-gray-900 z-20 shadow-sm transition-colors" 
              onClick={() => setSelectedClub(null)}
            >
              <X size={20} strokeWidth={2.5} />
            </button>
            
            <div className="p-8 md:p-12 h-full flex flex-col justify-center items-center text-center max-w-2xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-[#164265] mb-4 leading-tight">
                {selectedClub.name}
              </h2>
              
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {selectedClub.tags.map(tag => (
                 <span 
                   key={tag} 
                   className="px-3 py-1.5 bg-[#f8fafc] border border-gray-200 text-[#164265] text-xs font-bold rounded-lg uppercase tracking-wider"
                 >
                   {tag}
                 </span>
                ))}
              </div>
              
              <p className="text-gray-600 leading-relaxed text-[16px] md:text-lg mb-8 max-w-xl">
                {selectedClub.description}
              </p>
              
              <button 
                className="px-10 py-3 bg-[#164265] hover:bg-[#d95a2c] text-white font-bold rounded-xl transition-all shadow-md hover:shadow-lg w-full md:w-auto" 
                onClick={() => setSelectedClub(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
