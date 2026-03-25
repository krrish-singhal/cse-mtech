import React, { useState } from "react";
import { ChevronRight, Mail, Linkedin } from "lucide-react";

export default function Faculty() {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const facultyData = {
    professors: [
      {
        id: 1,
        name: "Dr. Laxman Singh",
        title: "Professor",
        qualification: "Ph.D. Jamia Millia Islamia",
        initials: "LS",
        color: "#ADD8E6",
      },
      {
        id: 2,
        name: "Dr. Anil Kumar",
        title: "Professor",
        qualification: "Ph.D. IIT Bombay",
        initials: "AK",
        color: "#ADD8E6",
      },
    ],
    associates: [
      {
        id: 3,
        name: "Dr. Pratibha Singh",
        title: "Associate Professor & Program Head",
        qualification: "Ph.D. Program Head",
        initials: "PS",
        color: "#5DCEAE",
      },
      {
        id: 4,
        name: "Dr. Shelly Gupta",
        title: "Associate Professor",
        qualification: "Ph.D. Amity",
        initials: "SG",
        color: "#5DCEAE",
      },
      {
        id: 5,
        name: "Dr. Mukesh K.",
        title: "Associate Professor",
        qualification: "Ph.D. VTU",
        initials: "MK",
        color: "#5DCEAE",
      },
      {
        id: 6,
        name: "Dr. Puneet Garg",
        title: "Associate Professor",
        qualification: "Ph.D. JC Bose University",
        initials: "PG",
        color: "#5DCEAE",
      },
    ],
    assistants: [
      {
        id: 7,
        name: "Dr. Rahul V.",
        title: "Assistant Professor",
        qualification: "Ph.D.",
        initials: "RV",
        color: "#D3D3D3",
      },
      {
        id: 8,
        name: "Dr. Neha M.",
        title: "Assistant Professor",
        qualification: "Ph.D.",
        initials: "NM",
        color: "#D3D3D3",
      },
      {
        id: 9,
        name: "Dr. Sunil K.",
        title: "Assistant Professor",
        qualification: "Ph.D.",
        initials: "SK",
        color: "#D3D3D3",
      },
      {
        id: 10,
        name: "Dr. Priya T.",
        title: "Assistant Professor",
        qualification: "Ph.D.",
        initials: "PT",
        color: "#D3D3D3",
      },
      {
        id: 11,
        name: "Dr. Amit J.",
        title: "Assistant Professor",
        qualification: "Ph.D.",
        initials: "AJ",
        color: "#D3D3D3",
      },
    ],
  };

  const filters = [
    { id: "all", label: "All Faculty" },
    { id: "professor", label: "Professor" },
    { id: "associate", label: "Associate Professor" },
    { id: "assistant", label: "Assistant Professor" },
  ];

  const getFacultyByFilter = () => {
    if (selectedFilter === "all") {
      return [
        ...facultyData.professors,
        ...facultyData.associates,
        ...facultyData.assistants,
      ];
    }
    if (selectedFilter === "professor") return facultyData.professors;
    if (selectedFilter === "associate") return facultyData.associates;
    if (selectedFilter === "assistant") return facultyData.assistants;
    return [];
  };

  const FacultyCard = ({ faculty }) => (
    <div
      className="group relative overflow-hidden rounded-xl border border-gray-200 p-6 transition-all duration-300 hover:shadow-lg hover:border-gray-300 bg-white"
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = "0 12px 24px rgba(0, 0, 0, 0.1)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 1px 3px rgba(0, 0, 0, 0.1)";
      }}
    >
      <div className="flex items-start space-x-4">
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center font-bold text-white text-lg transition-transform duration-300 group-hover:scale-110"
          style={{ backgroundColor: faculty.color }}
        >
          {faculty.initials}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-bold text-gray-900 truncate">
            {faculty.name}
          </h3>
          <p className="text-sm font-medium" style={{ color: "#164265" }}>
            {faculty.title}
          </p>
          <p className="text-xs text-gray-600 mt-1 line-clamp-2">
            {faculty.qualification}
          </p>
          <div className="flex items-center space-x-2 mt-3">
            <button
              className="p-2 rounded-lg transition-all duration-300 hover:opacity-100 opacity-60"
              style={{ backgroundColor: "#F26520" }}
            >
              <Mail size={14} className="text-white" />
            </button>
            <button
              className="p-2 rounded-lg transition-all duration-300 hover:opacity-100 opacity-60"
              style={{ backgroundColor: "#164265" }}
            >
              <Linkedin size={14} className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section
      id="faculty"
      className="py-16 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-2">Faculty</h2>
              <div
                className="w-16 h-1 rounded-full"
                style={{ backgroundColor: "#F26520" }}
              ></div>
            </div>
            <a
              href="#view-all"
              className="text-sm font-semibold"
              style={{ color: "#F26520" }}
            >
              View All <ChevronRight className="inline ml-1" size={16} />
            </a>
          </div>

          <p className="text-gray-600 max-w-2xl">
            Faculty arranged in tiers: Professors at top, then Associate, then
            Assistant. Shows seniority. Photo-forward. No search needed.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-8">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setSelectedFilter(filter.id)}
              className={`px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300 transform hover:scale-105 ${
                selectedFilter === filter.id
                  ? "text-white shadow-lg"
                  : "text-gray-700 border border-gray-300 hover:border-gray-400"
              }`}
              style={{
                backgroundColor:
                  selectedFilter === filter.id ? "#F26520" : "transparent",
              }}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Faculty Grid by Category */}
        <div className="space-y-12">
          {selectedFilter === "all" && (
            <>
              {/* Professors */}
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: "#164265" }}
                  ></div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Professors{" "}
                    <span className="text-gray-500 text-lg">
                      · {facultyData.professors.length} faculty
                    </span>
                  </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {facultyData.professors.map((faculty) => (
                    <FacultyCard key={faculty.id} faculty={faculty} />
                  ))}
                </div>
              </div>

              {/* Associate Professors */}
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: "#5DCEAE" }}
                  ></div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Associate professors{" "}
                    <span className="text-gray-500 text-lg">
                      · {facultyData.associates.length} faculty
                    </span>
                  </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {facultyData.associates.map((faculty) => (
                    <FacultyCard key={faculty.id} faculty={faculty} />
                  ))}
                </div>
              </div>

              {/* Assistant Professors */}
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: "#D3D3D3" }}
                  ></div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Assistant professors{" "}
                    <span className="text-gray-500 text-lg">
                      · {facultyData.assistants.length} faculty
                    </span>
                  </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {facultyData.assistants.map((faculty) => (
                    <FacultyCard key={faculty.id} faculty={faculty} />
                  ))}
                </div>
              </div>
            </>
          )}

          {selectedFilter !== "all" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {getFacultyByFilter().map((faculty) => (
                <FacultyCard key={faculty.id} faculty={faculty} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
