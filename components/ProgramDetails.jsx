import React from 'react';
import { Target, Compass, Zap, BookOpen, Brain, Settings, FileSearch, Monitor, Shield, Users, Briefcase, GraduationCap } from 'lucide-react';

export default function ProgramDetails() {
  const gains = [
    {
      id: 'PO1',
      title: 'Advanced Knowledge',
      desc: 'Apply in-depth knowledge of computer science, including AI, data science, algorithms, and software systems, to solve complex problems.',
      icon: Brain,
    },
    {
      id: 'PO2',
      title: 'Problem Analysis',
      desc: 'Identify, analyze, and formulate solutions for complex computing problems using logical reasoning and modern techniques.',
      icon: FileSearch,
    },
    {
      id: 'PO3',
      title: 'Design & Development',
      desc: 'Design innovative and efficient computing systems, applications, or processes that meet specified needs with real-world constraints.',
      icon: Settings,
    },
    {
      id: 'PO4',
      title: 'Research Capability',
      desc: 'Conduct research involving literature review, experimentation, and data analysis to generate meaningful insights and publishable outcomes.',
      icon: BookOpen,
    },
    {
      id: 'PO5',
      title: 'Modern Tool Usage',
      desc: 'Use advanced tools, platforms, and technologies such as AI frameworks, cloud computing, DevOps, and HPC systems effectively.',
      icon: Monitor,
    },
    {
      id: 'PO6',
      title: 'Professional Ethics',
      desc: 'Understand and apply ethical principles, intellectual property rights, and professional responsibilities in computing practices.',
      icon: Shield,
    },
    {
      id: 'PO7',
      title: 'Communication Skills',
      desc: 'Communicate technical ideas effectively through reports, presentations, and collaboration in multidisciplinary teams.',
      icon: Users,
    },
    {
      id: 'PO8',
      title: 'Project Management',
      desc: 'Apply management principles to plan, execute, and deliver projects efficiently in individual and team settings.',
      icon: Briefcase,
    },
    {
      id: 'PO9',
      title: 'Industry Readiness',
      desc: 'Demonstrate practical skills through internships, projects, and industry exposure to perform effectively in professional environments.',
      icon: Zap,
    },
    {
      id: 'PO10',
      title: 'Lifelong Learning',
      desc: 'Engage in continuous learning to adapt to rapidly evolving technologies and maintain professional competence.',
      icon: GraduationCap,
    },
  ];

  return (
    <section id="details" className="pb-10 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-14 relative w-full">
          <h2 className="text-[32px] md:text-[40px] font-bold text-[#0f172a] mb-6 tracking-tight text-center">
            <span className="pb-1" style={{ borderBottom: '3px solid #F26520' }}>
              Program Details
            </span>
          </h2>
        </div>

        {/* Vision & Mission Split Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-24">

          {/* Where We Aim (Vision) */}
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col h-full relative overflow-hidden group hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] transition-shadow duration-500">
            <div className="flex items-center space-x-4 mb-8">
              <h3 className="text-3xl font-bold text-[#164265]">Vision</h3>
            </div>
            <ul className="space-y-4 text-gray-700 relative z-10">
              {[
                'To achieve pre-eminence in providing skill-enabled technical education in the domain of Computer Science Engineering, the focus is on creating a strong academic environment that blends theoretical knowledge with practical expertise.',
                'This involves designing a curriculum that is industry-relevant, continuously updated, and aligned with emerging technologies such as artificial intelligence, data science, cybersecurity, and cloud computing.',
                'By incorporating hands-on projects, internships, and real-world problem-solving approaches, students are equipped not only with technical proficiency but also with critical thinking and innovation skills.'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-[#F26520] mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-base leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* How We Work (Mission) */}
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col h-full relative overflow-hidden group hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] transition-shadow duration-500">
            <div className="flex items-center space-x-4 mb-8">
              <h3 className="text-3xl font-bold text-[#164265]">Mission</h3>
            </div>
            <ul className="space-y-4 text-gray-700 relative z-10">
              {[
                'To provide students with necessary skills and knowledge to meet current and future requirements using innovative teaching and learning approaches.',
                'To impart skill-based computer science and engineering education by adopting contemporary tools and technologies.',
                'To develop industry-academia alliance for practicing industry-oriented projects and internships to open new opportunities in industry, research, and entrepreneurship.',
                'To keep the intellectual capital of the department motivated for learning about technological changes by providing them with a conductive environment.'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-[#F26520] mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-base leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* What You Gain (Program Outcomes) */}
        <div>
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-extrabold text-[#164265] mb-4">
              Program Outcomes
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              10 crucial program outcomes designed to transform you into a global technology leader.
            </p>
          </div>

          {/* Using grid-cols-5 on large screens to fit 10 items elegantly (5x2) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {gains.map((gain) => {
              const Icon = gain.icon;
              return (
                <div
                  key={gain.id}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 hover:border-[#F26520]/30 transition-all duration-300 group flex flex-col h-full"
                >
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-[#164265] group-hover:bg-[#164265] group-hover:text-white transition-colors duration-300">
                      <Icon size={24} strokeWidth={2} />
                    </div>
                    <span className="text-xs font-black text-gray-200 group-hover:text-[#F26520] transition-colors duration-300">
                      {gain.id}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-[#164265] mb-3 leading-tight">{gain.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed flex-grow">{gain.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
