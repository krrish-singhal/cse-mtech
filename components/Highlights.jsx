import React from 'react';
import { Award, Medal, Clock, GraduationCap, Wallet, Lightbulb, Rocket, Briefcase, Star } from 'lucide-react';

export default function Highlights() {
  const highlights = [
    {
      id: 1,
      title: 'Strong Industry Connect & Collaboration',
      description:
        'The department maintains a robust industry ecosystem, connecting students with leading tech companies, startups, and R&D organizations. Through internships, live projects, expert talks, and mentorship, students gain real-world exposure, making them industry-ready and highly employable from day one.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?fit=crop&w=400&h=400&q=80',
    },
    {
      id: 2,
      title: 'Curriculum Highlights',
      description:
        'The M.Tech (CSE) curriculum is designed to deliver a perfect blend of strong fundamentals, emerging technologies, and real-world application. Students build expertise in core areas like Data Structures, DBMS, and Software Engineering, while advancing into AI, Machine Learning, Blockchain, and Quantum Computing.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?fit=crop&w=400&h=400&q=80',
    },
  ];

  const programHighlights = [
    { text: '15+ Years of Academic Excellence in postgraduate computing education', icon: Award },
    { text: 'A Legacy of University Medalist.', icon: Medal },
    { text: 'Full-time programme with flexible schedule and extended laboratory access', icon: Clock },
    { text: 'GATE scholarships (GoI norms)', icon: GraduationCap },
    { text: 'Fee reimbursement for eligible SC/ST & EWS students', icon: Wallet },
    { text: 'Financial & mentorship support for Research publications', icon: Lightbulb },
    { text: 'Startup grants up to ₹10 Lakhs via KIET Technology Business Incubator', icon: Rocket },
    { text: '100% placement support', icon: Briefcase },
    { text: 'Merit-Based Scholarships', icon: Star },
  ];

  return (
    <section id="highlights" className="py-10 bg-[#fafbfc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Program Highlights Section */}
        <div className="mb-20">
          <h2 className="text-[32px] md:text-[40px] font-bold text-[#0f172a] mb-8 tracking-tight text-center">
            <span className="pb-1" style={{ borderBottom: '3px solid #F26520' }}>
              Program
            </span>
            {' '}Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {programHighlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="group relative overflow-hidden bg-white rounded-[20px] p-6 shadow-[0px_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 hover:shadow-xl hover:border-gray-200 transition-all duration-300 hover:-translate-y-1">
                  {/* Subtle accent line on hover */}
                  <div className="absolute top-0 left-0 w-full h-[3px] bg-[#F26520] transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 rounded-t-[20px]"></div>
                  
                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-2xl bg-[#164265]/5 flex items-center justify-center shrink-0 group-hover:bg-[#164265] transition-colors duration-500">
                      <Icon size={24} className="text-[#164265] group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
                    </div>
                    <div className="flex-1 mt-1">
                      <p className="text-[#0f172a] font-semibold text-[15px] leading-relaxed group-hover:text-[#F26520] transition-colors duration-300">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Header */}
        <div className="mb-14 relative w-full">
          <h2 className="text-[32px] md:text-[40px] font-bold text-[#0f172a] mb-6 tracking-tight text-center">
            <span className="pb-1" style={{ borderBottom: '3px solid #F26520' }}>
              Department's
            </span>
            {' '}Highlights
          </h2>
          
        
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {highlights.map((highlight) => (
            <div
              key={highlight.id}
              className="bg-white rounded-[20px] p-6 lg:p-8 flex flex-col sm:flex-row items-center sm:items-start gap-6 lg:gap-8 shadow-[0px_4px_24px_rgba(0,0,0,0.03)] border border-gray-100 hover:shadow-[0px_8px_32px_rgba(0,0,0,0.06)] transition-all duration-300"
            >
              {/* Image Container */}
              <div className="shrink-0 w-32 h-32 md:w-[130px] md:h-[130px] overflow-hidden rounded-[16px] shadow-sm">
                <img
                  src={highlight.image}
                  alt={highlight.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col justify-center h-full pt-1 sm:pt-2">
                <h3 className="text-xl md:text-[22px] font-bold text-[#0f172a] mb-3 leading-snug">
                  {highlight.title}
                </h3>
                <p className="text-[#475569] text-[15px] leading-relaxed whitespace-pre-line">
                  {highlight.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Advanced Labs Section Header */}
        

        {/* Additional Info */}
        <div className="mt-28 text-center space-y-6">
          <h3 className="text-[28px] font-bold text-[#0f172a]">
            Why Choose Our Program?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                number: '18+',
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
                className="p-8 rounded-[20px] bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <p
                  className="text-5xl font-extrabold mb-3"
                  style={{ color: '#F26520' }}
                >
                  {stat.number}
                </p>
                <p className="text-[#0f172a] text-lg font-bold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
