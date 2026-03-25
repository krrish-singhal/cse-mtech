import React, { useState } from 'react';
import { BookOpen, Users, Award, TrendingUp } from 'lucide-react';

export default function Overview() {
  const [hoveredButton, setHoveredButton] = useState(null);

  const buttons = [
    {
      id: 'curriculum',
      label: 'View Curriculum',
      icon: BookOpen,
      description: 'Semester-wise subjects, labs & electives',
    },
    {
      id: 'eligibility',
      label: 'Eligibility',
      icon: Users,
      description: 'Qualification criteria & age limit',
    },
    {
      id: 'scholarship',
      label: 'Fee & Scholarship',
      icon: Award,
      description: 'Tuition, hostel & merit scholarships',
    },
    {
      id: 'apply',
      label: 'Apply Now',
      icon: TrendingUp,
      description: 'Applications open for 2026-27',
    },
  ];

  return (
    <section id="overview" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-2">
          M.Tech (CSE - AI&ML) Overview
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
                It gives me great pleasure to introduce our M.Tech in CSE
                (Artificial Intelligence & Machine Learning), a postgraduate
                programme designed to align with the rapidly evolving landscape
                of Artificial Intelligence, innovation, and advanced computing.
              </p>
            </div>

            <p className="text-gray-700 leading-relaxed">
              Artificial Intelligence today has become a fundamental force driving
              transformation across industries and research domains. This programme
              has been carefully structured to provide a strong academic foundation
              combined with exposure to emerging AI technologies, enabling students
              to develop the knowledge and skills required to address complex
              real-world challenges.
            </p>

            <p className="text-gray-700 leading-relaxed">
              A key strength of this programme lies in its advanced computational
              infrastructure, including access to NVIDIA DGX Supercomputing
              facilities, enabling students to work on compute-intensive AI problems
              and advanced model development. This research-grade environment provides
              valuable exposure to modern AI systems and real-world applications.
            </p>

            <p className="text-gray-700 leading-relaxed">
              This programme is intended for a diverse group of learners, including
              working professionals aiming to enhance their technical expertise,
              academicians seeking to deepen their research capabilities, and
              motivated graduates with an interest in Artificial Intelligence and
              data-driven technologies.
            </p>

            <p className="text-gray-700 leading-relaxed">
              We are committed to providing a strong academic and research ecosystem
              through dedicated faculty mentorship, opportunities for innovation, and
              close engagement with emerging developments in Artificial Intelligence.
              Our goal is to nurture professionals and researchers who can contribute
              meaningfully to the future of intelligent technologies.
            </p>

            <p className="text-gray-700 leading-relaxed">
              This programme is not only about acquiring technical knowledge but also
              about developing analytical thinking, innovation-driven problem solving,
              and responsible AI practices – qualities essential for leadership in an
              AI-driven world. I warmly invite you to be part of this exciting academic
              journey and contribute to the advancement of intelligent technologies
              that create meaningful impact.
            </p>
          </div>

          {/* Image placeholder with gradient */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop"
                alt="Program Coordinator"
                className="w-full h-96 object-cover"
              />
            </div>
            <div
              className="absolute -bottom-6 -right-6 rounded-lg p-4 text-white shadow-lg max-w-xs"
              style={{ backgroundColor: '#164265' }}
            >
              <p className="font-bold text-lg">Dr. Rekha Kashyap</p>
              <p className="text-sm">Dean, CSE (AI and AI&ML)</p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {buttons.map((button) => {
            const Icon = button.icon;
            const isHovered = hoveredButton === button.id;
            const isApplyButton = button.id === 'apply';

            return (
              <div
                key={button.id}
                onMouseEnter={() => setHoveredButton(button.id)}
                onMouseLeave={() => setHoveredButton(null)}
                className={`rounded-xl p-6 transition-all duration-300 cursor-pointer transform ${
                  isHovered ? 'scale-105 shadow-lg' : 'shadow-md'
                } ${isApplyButton ? 'text-white' : 'bg-white border border-gray-200'}`}
                style={{
                  backgroundColor: isApplyButton
                    ? isHovered
                      ? '#D64612'
                      : '#F26520'
                    : 'white',
                }}
              >
                <div
                  className={`rounded-lg p-3 w-fit mb-4 transition-all duration-300 ${
                    isHovered ? 'scale-110' : ''
                  }`}
                  style={{
                    backgroundColor: isApplyButton
                      ? 'rgba(255,255,255,0.2)'
                      : '#F26520',
                  }}
                >
                  <Icon
                    size={24}
                    className={isApplyButton ? 'text-white' : 'text-white'}
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
                    isApplyButton ? 'text-blue-50' : 'text-gray-600'
                  }`}
                >
                  {button.description}
                </p>
                <div
                  className="mt-4 flex items-center space-x-2 font-semibold text-sm"
                  style={{ color: isApplyButton ? 'white' : '#F26520' }}
                >
                  <span>Learn more</span>
                  <span className={`transition-transform duration-300 ${isHovered ? 'translate-x-2' : ''}`}>
                    →
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
