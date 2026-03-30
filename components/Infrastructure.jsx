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
    <section id="infrastructure" className="py-10 bg-linear-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14 relative w-full">
          <h2 className="text-[32px] md:text-[40px] font-bold text-[#0f172a] mb-6 tracking-tight text-center">
            <span className="pb-1" style={{ borderBottom: '3px solid #F26520' }}>
              Infrastructure & Facilities
            </span>
            
          </h2>
          
        
        </div>

        {/* Infrastructure Grid */}
        
      </div>
    </section>
  );
}
