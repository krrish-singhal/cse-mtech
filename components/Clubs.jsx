import React, { useState } from "react";
import { ExternalLink, Zap } from "lucide-react";

export default function Clubs() {
  const [hoveredClub, setHoveredClub] = useState(null);

  const clubs = [
    {
      id: 1,
      name: "NextGen Supercomputing Club",
      logo: "🖥️",
      description:
        "NextGen Club is a community of passionate learners aspiring to become production-ready ML and AI engineers. The club focuses on bridging the gap between theory and real-world implementation through hands-on projects, technical sessions, collaborative learning, and internship opportunities.",
      members: "150+",
      website: "#website",
    },
    {
      id: 2,
      name: "DevUp Club",
      logo: "⚡",
      description:
        "DevUp Club is a vibrant technical community committed to empowering students across domains like CP/DSA, Web Development, Android Development, UI/UX, and Data Science through workshops and real-world projects.",
      members: "120+",
      website: "#website",
    },
  ];

  return (
    <section id="clubs" className="py-20 bg-linear-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">Our Clubs</h2>
          <div
            className="w-24 h-1 rounded-full"
            style={{ backgroundColor: "#F26520" }}
          ></div>
        </div>

        {/* Clubs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {clubs.map((club) => (
            <div
              key={club.id}
              onMouseEnter={() => setHoveredClub(club.id)}
              onMouseLeave={() => setHoveredClub(null)}
              className="relative group rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl"
            >
              {/* Background gradient overlay */}
              <div
                className="absolute inset-0 transition-opacity duration-300"
                style={{
                  backgroundColor:
                    hoveredClub === club.id ? "#F26520" : "#F9FAFB",
                }}
              ></div>

              <div className="relative p-8 z-10">
                {/* Logo and Title */}
                <div className="flex items-start space-x-4 mb-6">
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center text-3xl transition-all duration-300 transform ${
                      hoveredClub === club.id ? "scale-110 rotate-12" : ""
                    }`}
                    style={{
                      backgroundColor:
                        hoveredClub === club.id
                          ? "rgba(255,255,255,0.2)"
                          : "#F0F0F0",
                    }}
                  >
                    {club.logo}
                  </div>
                  <div>
                    <h3
                      className={`text-2xl font-bold transition-colors duration-300 ${
                        hoveredClub === club.id ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {club.name}
                    </h3>
                    <p
                      className={`text-sm font-semibold transition-colors duration-300 ${
                        hoveredClub === club.id
                          ? "text-blue-100"
                          : "text-gray-500"
                      }`}
                    >
                      {club.members} Active Members
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p
                  className={`leading-relaxed mb-6 transition-colors duration-300 text-justify ${
                    hoveredClub === club.id ? "text-blue-50" : "text-gray-700"
                  }`}
                >
                  {club.description}
                </p>

                {/* Features */}
                <div className="space-y-3 mb-6">
                  {[
                    "Hands-on workshops & training",
                    "Industry expert mentorship",
                    "Collaborative projects",
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <Zap
                        size={16}
                        className={`transition-colors duration-300 ${
                          hoveredClub === club.id
                            ? "text-white"
                            : "text-orange-500"
                        }`}
                      />
                      <span
                        className={`text-sm transition-colors duration-300 ${
                          hoveredClub === club.id
                            ? "text-white"
                            : "text-gray-700"
                        }`}
                      >
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Visit Website Button */}
                <button
                  className={`inline-flex items-center space-x-2 px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                    hoveredClub === club.id
                      ? "bg-white text-orange-600 hover:bg-gray-100"
                      : "bg-orange-600 text-white hover:bg-orange-700"
                  }`}
                  style={{
                    backgroundColor:
                      hoveredClub === club.id ? "white" : "#F26520",
                    color: hoveredClub === club.id ? "#F26520" : "white",
                  }}
                >
                  <span>Website</span>
                  <ExternalLink
                    size={16}
                    className={`transition-transform duration-300 ${
                      hoveredClub === club.id ? "translate-x-1" : ""
                    }`}
                  />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-20 p-8 rounded-xl border border-gray-200 bg-blue-50">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Why Join Our Clubs?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              "Network with like-minded peers",
              "Enhance technical skills in real projects",
              "Build industry connections & placement opportunities",
            ].map((reason, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-1"
                  style={{ backgroundColor: "#F26520" }}
                >
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <p className="text-gray-700">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
