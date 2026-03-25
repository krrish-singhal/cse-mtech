import React, { useState } from 'react';
import { ChevronDown, Clock, BookOpen, Users } from 'lucide-react';

export default function ProgramDetails() {
  const [expandedSemester, setExpandedSemester] = useState(1);

  const semesters = [
    {
      id: 1,
      name: 'Semester 1',
      duration: '6 months',
      courses: [
        'Advanced Algorithms & Data Structures',
        'Mathematics for AI',
        'Fundamentals of Machine Learning',
        'Database Management Systems',
      ],
    },
    {
      id: 2,
      name: 'Semester 2',
      duration: '6 months',
      courses: [
        'Deep Learning & Neural Networks',
        'Natural Language Processing',
        'Computer Vision',
        'Reinforcement Learning',
      ],
    },
    {
      id: 3,
      name: 'Semester 3',
      duration: '6 months',
      courses: [
        'Advanced ML Techniques',
        'Generative AI & LLMs',
        'AI Ethics & Responsible AI',
        'Cloud Computing & Distributed Systems',
      ],
    },
    {
      id: 4,
      name: 'Semester 4',
      duration: '6 months',
      courses: [
        'Thesis/Research Project',
        'Industry Internship',
        'Capstone Project',
        'Elective Courses',
      ],
    },
  ];

  const programInfo = [
    { icon: Clock, label: 'Duration', value: '2 Years' },
    { icon: BookOpen, label: 'Credits', value: '80' },
    { icon: Users, label: 'Batch Size', value: '60 Students' },
    { icon: Clock, label: 'Classes', value: 'Evening (5:30 PM - 8:30 PM)' },
  ];

  return (
    <section id="details" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">
            Program Details
          </h2>
          <div
            className="w-24 h-1 rounded-full"
            style={{ backgroundColor: '#F26520' }}
          ></div>
        </div>

        {/* Program Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {programInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-xl border border-gray-200 transition-all duration-300 hover:shadow-lg hover:border-gray-300 transform hover:-translate-y-2"
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: '#F26520' }}
                >
                  <Icon size={24} className="text-white" />
                </div>
                <p className="text-sm text-gray-600 mb-1">{info.label}</p>
                <p className="text-2xl font-bold text-gray-900">
                  {info.value}
                </p>
              </div>
            );
          })}
        </div>

        {/* Curriculum */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Curriculum Overview
          </h3>

          <div className="space-y-4">
            {semesters.map((semester) => (
              <div
                key={semester.id}
                className="border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg"
              >
                <button
                  onClick={() =>
                    setExpandedSemester(
                      expandedSemester === semester.id ? null : semester.id
                    )
                  }
                  className="w-full p-6 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors duration-300"
                >
                  <div className="flex items-center space-x-4">
                    <div
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: '#F26520' }}
                    ></div>
                    <div className="text-left">
                      <h4 className="font-bold text-gray-900">
                        {semester.name}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {semester.courses.length} courses
                      </p>
                    </div>
                  </div>
                  <div
                    className={`transition-transform duration-300 ${
                      expandedSemester === semester.id ? 'rotate-180' : ''
                    }`}
                  >
                    <ChevronDown size={20} style={{ color: '#F26520' }} />
                  </div>
                </button>

                {expandedSemester === semester.id && (
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                    <div className="space-y-3">
                      {semester.courses.map((course, idx) => (
                        <div
                          key={idx}
                          className="flex items-start space-x-3 p-3 rounded-lg hover:bg-white transition-colors duration-300 cursor-pointer"
                        >
                          <div
                            className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                            style={{ backgroundColor: '#F26520' }}
                          ></div>
                          <p className="text-gray-700 font-medium">{course}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Eligibility & Admission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="p-8 rounded-xl border border-gray-200 bg-gradient-to-br from-blue-50 to-transparent">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Eligibility Criteria
            </h3>
            <ul className="space-y-4">
              {[
                'Bachelor\'s degree in CS/IT/Electronics/Related Field',
                'Minimum 50% marks in Bachelor\'s degree',
                'GATE Qualified (CS/IT category)',
                'Work experience (preferred but not mandatory)',
              ].map((criteria, idx) => (
                <li key={idx} className="flex items-start space-x-3">
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ backgroundColor: '#F26520' }}
                  >
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <span className="text-gray-700">{criteria}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-8 rounded-xl border border-gray-200 bg-gradient-to-br from-orange-50 to-transparent">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Admission Process
            </h3>
            <ol className="space-y-4">
              {[
                'Submit Online Application',
                'GATE Score Verification',
                'Written Test (if required)',
                'Personal Interview',
                'Merit List Announcement',
                'Document Verification & Admission',
              ].map((step, idx) => (
                <li key={idx} className="flex items-start space-x-3">
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-white"
                    style={{ backgroundColor: '#164265' }}
                  >
                    {idx + 1}
                  </div>
                  <span className="text-gray-700">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center space-y-4">
          <p className="text-gray-700 text-lg">Ready to start your journey?</p>
          <button
            className="px-8 py-3 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg inline-block"
            style={{ backgroundColor: '#F26520' }}
          >
            Apply Now
          </button>
        </div>
      </div>
    </section>
  );
}
  