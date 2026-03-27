import React from 'react';

export default function Highlights() {
  const highlights = [
    {
      id: 1,
      title: 'Driving Supercomputing with DGX – Centre of Excellence',
      description:
        'Powered by the NVIDIA DGX A100, this Centre of Excellence brings enterprise-level AI infrastructure directly to students. It enables training of large-scale deep learning models, high-speed data processing, and real-time AI deployment. The facility acts as a launchpad for cutting-edge research, innovation, and industry-driven AI solutions.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?fit=crop&w=400&h=400&q=80',
    },
    {
      id: 2,
      title: 'PARAM Shavak – High Performance Computing Lab',
      description:
        'The PARAM Shavak supercomputer, developed by C-DAC, empowers students with hands-on experience in high-performance computing and parallel processing. It supports complex simulations, big data analysis, and scientific computing—bridging the gap between academic learning and real-world computational challenges.',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?fit=crop&w=400&h=400&q=80',
    },
    {
      id: 3,
      title: 'Strong Industry Connect & Collaboration',
      description:
        'The department maintains a robust industry ecosystem, connecting students with leading tech companies, startups, and R&D organizations. Through internships, live projects, expert talks, and mentorship, students gain real-world exposure, making them industry-ready and highly employable from day one.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?fit=crop&w=400&h=400&q=80',
    },
    {
      id: 4,
      title: 'Curriculum Highlights',
      description:
        'The M.Tech (CSE) curriculum is designed to deliver a perfect blend of strong fundamentals, emerging technologies, and real-world application. Students build expertise in core areas like Data Structures, DBMS, and Software Engineering, while advancing into AI, Machine Learning, Blockchain, and Quantum Computing.\n\nThe program emphasizes flexibility and experiential learning, offering industry projects, research opportunities, and full-semester internships. With integrated courses in Research Methodology, Scientific Writing, Ethics, and IPR, students develop both technical depth and professional excellence.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?fit=crop&w=400&h=400&q=80',
    },
  ];

  const advancedLabs = [
    {
      id: 1,
      title: 'AI & Robotics Lab',
      description: 'State-of-the-art facility equipped with advanced robotic arms, autonomous navigation systems, and edge AI compute devices for physical world AI applications.',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?fit=crop&w=400&h=400&q=80',
    },
    {
      id: 2,
      title: 'Quantum Computing Research Lab',
      description: 'Focused on quantum algorithms, cryptography, and quantum machine learning. Students access cloud-based quantum processors and simulators for next-gen research.',
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?fit=crop&w=400&h=400&q=80',
    },
    {
      id: 3,
      title: 'Cognitive Science & HCI Lab',
      description: 'Dedicated to exploring seamless human-computer interaction, brain-computer interfaces (BCI), and developing empathetic, user-centric AI systems.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?fit=crop&w=400&h=400&q=80',
    },
    {
      id: 4,
      title: 'Cyber Security & Forensics Lab',
      description: 'A fully isolated environment for studying malware analysis, network defense, ethical hacking, and securing AI models against adversarial attacks.',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?fit=crop&w=400&h=400&q=80',
    },
  ];

  return (
    <section id="highlights" className="py-20 bg-[#fafbfc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14 relative w-full">
          <h2 className="text-[32px] md:text-[40px] font-bold text-[#0f172a] mb-6 tracking-tight">
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
        <div className="mt-28 mb-14 relative w-full">
          <h2 className="text-[32px] md:text-[40px] font-bold text-[#0f172a] mb-6 tracking-tight">
            <span className="pb-1" style={{ borderBottom: '3px solid #F26520' }}>
              Advanced
            </span>
            {' '}Labs
          </h2>
          
          
        </div>

        {/* Advanced Labs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {advancedLabs.map((lab) => (
            <div
              key={lab.id}
              className="bg-white rounded-[20px] p-6 lg:p-8 flex flex-col sm:flex-row items-center sm:items-start gap-6 lg:gap-8 shadow-[0px_4px_24px_rgba(0,0,0,0.03)] border border-gray-100 hover:shadow-[0px_8px_32px_rgba(0,0,0,0.06)] transition-all duration-300"
            >
              {/* Image Container */}
              <div className="shrink-0 w-32 h-32 md:w-[130px] md:h-[130px] overflow-hidden rounded-[16px] shadow-sm">
                <img
                  src={lab.image}
                  alt={lab.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col justify-center h-full pt-1 sm:pt-2">
                <h3 className="text-xl md:text-[22px] font-bold text-[#0f172a] mb-3 leading-snug">
                  {lab.title}
                </h3>
                <p className="text-[#475569] text-[15px] leading-relaxed whitespace-pre-line">
                  {lab.description}
                </p>
              </div>
            </div>
          ))}
        </div>

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
