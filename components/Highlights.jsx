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
    {
      id: 3,
      title: 'Outstanding Placements',
      description:
        'Our graduates secure highly competitive roles at top multinational companies and promising startups. With dedicated placement cell support, rigorous interview preparation, and skill enhancement programs, we ensure a smooth transition from academics to successful professional careers.',
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?fit=crop&w=400&h=400&q=80',
    },
    {
      id: 4,
      title: 'Cutting-Edge Research',
      description:
        'Engage in groundbreaking research across specialized domains like AI, Data Science, and Cyber Security. We provide extensive support for publishing in reputed journals, participating in international conferences, and collaborating on government-funded and industry-sponsored projects.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?fit=crop&w=400&h=400&q=80',
    },
    {
      id: 5,
      title: 'State-of-the-art Infrastructure',
      description:
        'Experience learning in world-class facilities equipped with high-end computing laboratories, smart classrooms, and collaborative workspaces. Our advanced labs are powered by the latest software and hardware to support intensive computing tasks and complex project developments.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?fit=crop&w=400&h=400&q=80',
    },
    {
      id: 6,
      title: 'Best Results & Academic Excellence',
      description:
        'Our students consistently top university examinations and secure prestigious awards. This legacy of academic brilliance is driven by experienced faculty, continuous evaluations, and a learning environment that encourages analytical thinking and problem-solving.',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?fit=crop&w=400&h=400&q=80',
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
          {highlights.map((highlight) => (
            <div
              key={highlight.id}
              className="bg-white rounded-[16px] p-5 lg:p-6 flex flex-col sm:flex-row items-center sm:items-start gap-5 md:gap-6 shadow-[0px_4px_24px_rgba(0,0,0,0.03)] border border-gray-100 hover:shadow-[0px_8px_32px_rgba(0,0,0,0.06)] transition-all duration-300"
            >
              {/* Image Container */}
              <div className="shrink-0 w-24 h-24 md:w-[110px] md:h-[110px] overflow-hidden rounded-[14px] shadow-sm">
                <img
                  src={highlight.image}
                  alt={highlight.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col justify-start h-full pt-1">
                <h3 className="text-lg md:text-xl font-bold text-[#0f172a] mb-2 leading-snug">
                  {highlight.title}
                </h3>
                <p className="text-[#475569] text-[14px] md:text-[15px] leading-relaxed whitespace-pre-line text-justify">
                  {highlight.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Advanced Labs Section Header */}
        

        {/* Additional Info */}
        <div className="mt-16 text-center space-y-6">
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
