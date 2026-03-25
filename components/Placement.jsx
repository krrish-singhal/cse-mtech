import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Placement() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const companies = [
    { name: 'American Express', logo: '💳' },
    { name: 'Axtria', logo: '📊' },
    { name: 'Ericsson', logo: '📡' },
    { name: 'Lutron', logo: '💡' },
    { name: 'Mama Earth', logo: '🌿' },
    { name: 'Newgen', logo: '🆕' },
    { name: 'Airtel', logo: '📱' },
    { name: 'ProcDNA', logo: '🧬' },
    { name: 'JSW Steel', logo: '⚙️' },
    { name: 'Nokia', logo: '📞' },
    { name: 'Samsung', logo: '📱' },
  ];

  const companiesPerSlide = 5;
  const slides = Math.ceil(companies.length / companiesPerSlide);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides) % slides);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides);
  };

  const displayedCompanies = companies.slice(
    currentSlide * companiesPerSlide,
    (currentSlide + 1) * companiesPerSlide
  );

  return (
    <section id="placement" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-4">
          Our Recruiters
        </h2>
        <div className="flex justify-center mb-12">
          <div
            className="w-24 h-1 rounded-full"
            style={{ backgroundColor: '#F26520' }}
          ></div>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
            {displayedCompanies.map((company, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-6 rounded-xl border border-gray-200 transition-all duration-300 hover:shadow-lg hover:border-gray-300 transform hover:scale-105 cursor-pointer"
              >
                <div className="text-4xl mb-3">{company.logo}</div>
                <p className="text-sm font-semibold text-gray-700 text-center">
                  {company.name}
                </p>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          {slides > 1 && (
            <>
              <button
                onClick={handlePrev}
                className="absolute -left-6 top-1/2 transform -translate-y-1/2 p-3 rounded-full border-2 transition-all duration-300 hover:shadow-lg"
                style={{
                  borderColor: '#F26520',
                  color: '#F26520',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#F26520';
                  e.currentTarget.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#F26520';
                }}
              >
                <ChevronLeft size={20} />
              </button>

              <button
                onClick={handleNext}
                className="absolute -right-6 top-1/2 transform -translate-y-1/2 p-3 rounded-full border-2 transition-all duration-300 hover:shadow-lg"
                style={{
                  borderColor: '#F26520',
                  color: '#F26520',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#F26520';
                  e.currentTarget.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#F26520';
                }}
              >
                <ChevronRight size={20} />
              </button>
            </>
          )}
        </div>

        {/* Slide Indicators */}
        {slides > 1 && (
          <div className="flex justify-center items-center space-x-2 mt-8">
            {Array.from({ length: slides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index ? 'w-8' : ''
                }`}
                style={{
                  backgroundColor:
                    currentSlide === index ? '#F26520' : '#D1D5DB',
                }}
              ></button>
            ))}
          </div>
        )}

        {/* Stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { number: '100%', label: 'Placement Rate' },
            { number: '50+', label: 'Recruiting Companies' },
            { number: '8+ LPA', label: 'Average CTC' },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-xl bg-gradient-to-br border border-gray-200 transition-all duration-300 hover:shadow-lg transform hover:scale-105"
              style={{
                backgroundImage: `linear-gradient(135deg, rgba(242, 101, 32, 0.05), rgba(22, 66, 101, 0.05))`,
              }}
            >
              <p
                className="text-4xl font-bold mb-2"
                style={{ color: '#F26520' }}
              >
                {stat.number}
              </p>
              <p className="text-gray-700 font-semibold">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
