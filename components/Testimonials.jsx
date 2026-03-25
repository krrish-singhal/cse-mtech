import React, { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Aman Kumar",
      company: "Google",
      role: "ML Engineer",
      image: "AK",
      message:
        "The M.Tech program at KIET provided me with comprehensive knowledge in AI and ML. The hands-on projects and industry mentorship were invaluable in my career growth. Highly recommended!",
      rating: 5,
    },
    {
      id: 2,
      name: "Priya Singh",
      company: "Microsoft",
      role: "Data Scientist",
      image: "PS",
      message:
        "KIET's DGX supercomputing center gave me access to cutting-edge technology. The faculty guidance and peer learning environment accelerated my professional development significantly.",
      rating: 5,
    },
    {
      id: 3,
      name: "Rohit Patel",
      company: "Amazon",
      role: "AI Research Scientist",
      image: "RP",
      message:
        "The curriculum is perfectly aligned with industry needs. I appreciated the mix of theoretical knowledge and practical applications. The placement support was excellent.",
      rating: 5,
    },
    {
      id: 4,
      name: "Neha Verma",
      company: "IBM",
      role: "Senior Developer",
      image: "NV",
      message:
        "Outstanding program with experienced faculty and world-class infrastructure. The industry connect sessions helped me understand real-world AI challenges and solutions.",
      rating: 5,
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1,
    );
  };

  const itemsToShow = window.innerWidth >= 1024 ? 2 : 1;

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">
            Student Testimonials
          </h2>
          <div
            className="w-24 h-1 rounded-full"
            style={{ backgroundColor: "#F26520" }}
          ></div>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => {
              const isVisible =
                index >= currentIndex && index < currentIndex + itemsToShow;

              return (
                <div
                  key={testimonial.id}
                  className={`transition-all duration-500 ${
                    isVisible ? "opacity-100 visible" : "opacity-0 invisible"
                  }`}
                >
                  <div className="h-full p-8 rounded-xl border border-gray-200 bg-linear-to-br from-gray-50 to-white hover:shadow-lg transition-all duration-300">
                    {/* Rating */}
                    <div className="flex items-center space-x-1 mb-4">
                      {Array.from({ length: testimonial.rating }).map(
                        (_, i) => (
                          <Star
                            key={i}
                            size={18}
                            className="fill-current"
                            style={{ color: "#F26520" }}
                          />
                        ),
                      )}
                    </div>

                    {/* Message */}
                    <p className="text-gray-700 mb-6 leading-relaxed italic">
                      "{testimonial.message}"
                    </p>

                    {/* Author */}
                    <div className="flex items-center space-x-4 pt-6 border-t border-gray-200">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm"
                        style={{ backgroundColor: "#164265" }}
                      >
                        {testimonial.image}
                      </div>
                      <div>
                        <p className="font-bold text-gray-900">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-gray-600">
                          {testimonial.role} at{" "}
                          <span style={{ color: "#F26520" }}>
                            {testimonial.company}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center space-x-4 mt-12">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full border-2 transition-all duration-300 hover:shadow-lg"
              style={{
                borderColor: "#F26520",
                color: "#F26520",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#F26520";
                e.currentTarget.style.color = "white";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "#F26520";
              }}
            >
              <ChevronLeft size={20} />
            </button>

            {/* Indicators */}
            <div className="flex items-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentIndex === index ? "w-8" : ""
                  }`}
                  style={{
                    backgroundColor:
                      currentIndex === index ? "#F26520" : "#D1D5DB",
                  }}
                ></button>
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-3 rounded-full border-2 transition-all duration-300 hover:shadow-lg"
              style={{
                borderColor: "#F26520",
                color: "#F26520",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#F26520";
                e.currentTarget.style.color = "white";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "#F26520";
              }}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
