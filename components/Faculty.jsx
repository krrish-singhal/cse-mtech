import React, { useMemo, useState } from "react";
import { Mail } from "lucide-react";
import FilterButton from "./FilterButton";

const facultyImageModules = import.meta.glob(
  "../src/assets/images/*.{png,jpg,jpeg,webp,svg}",
  {
    eager: true,
    import: "default",
  },
);

const normalizeKey = (value) =>
  value
    .toLowerCase()
    .replace(/\b(dr|mr|ms)\.?\b/g, "")
    .replace(/[^a-z]/g, "");

const imageByKey = Object.entries(facultyImageModules).reduce(
  (acc, [path, src]) => {
    const fileName = path.split("/").pop() || "";
    const baseName = fileName
      .replace(/\.[^.]+$/, "")
      .replace(/_[0-9]+-removebg-preview$/i, "")
      .replace(/-removebg-preview$/i, "");
    acc[normalizeKey(baseName)] = src;
    return acc;
  },
  {},
);

// If a faculty image filename doesn't match the name cleanly, add a small alias here.
const imageKeyAliases = {
  anikesh: "anikeshkumar",
  rishabsinghrathore: "rishabhsinghrathore",
};

const facultyMembers = [
  {
    id: 1,
    name: "Dr. Vineet Kumar Sharma",
    designation: "Senior Professor & Dean",
  },
  { id: 2, name: "Dr. Dilkeshwar Pandey", designation: "Professor" },
  {
    id: 3,
    name: "Dr. Swati Sharma",
    designation: "Associate Professor & Program Head (2nd to 4th yr)",
  },
  { id: 4, name: "Dr. Parita Jain", designation: "Professor" },
  { id: 5, name: "Dr. Seema Maitrey", designation: "Associate Professor" },
  { id: 6, name: "Dr. Ankur Bhardwaj", designation: "Associate Professor" },
  { id: 7, name: "Dr. Neha Yadav", designation: "Associate Professor" },
  {
    id: 8,
    name: "Dr. Pranay Madhukar Meshram",
    designation: "Associate Professor",
  },
  { id: 9, name: "Dr. Madhu Gautam", designation: "Associate Professor" },
  {
    id: 10,
    name: "Dr. Preeti Garg",
    designation: "Associate Professor & Program Head (1st yr)",
  },
  { id: 11, name: "Dr. Upendra Mishra", designation: "Associate Professor" },
  { id: 12, name: "Mr. Saurav Chandra", designation: "Assistant Professor" },
  {
    id: 13,
    name: "Dr. Himanshi Chaudhary",
    designation: "Assistant Professor",
  },
  { id: 14, name: "Mr. Gaurav Parashar", designation: "Assistant Professor" },
  { id: 15, name: "Mr. Vipin Deval", designation: "Assistant Professor" },
  { id: 16, name: "Mr. Umang Rastogi", designation: "Assistant Professor" },
  { id: 17, name: "Dr. Bharti", designation: "Assistant Professor" },
  { id: 18, name: "Mr. Pushpendra Kumar", designation: "Assistant Professor" },
  {
    id: 19,
    name: "Mr. Rahul Kumar Sharma",
    designation: "Assistant Professor",
  },
  { id: 20, name: "Mr. Gagan Thakral", designation: "Assistant Professor" },
  { id: 21, name: "Ms. Mani Dwivedi", designation: "Assistant Professor" },
  { id: 22, name: "Ms. Nishu Gupta", designation: "Assistant Professor" },
  { id: 23, name: "Ms. Deepti Singh", designation: "Assistant Professor" },
  {
    id: 24,
    name: "Mr. Omprakash Kushwaha",
    designation: "Assistant Professor",
  },
  { id: 25, name: "Mr. Yogendra Pal", designation: "Assistant Professor" },
  { id: 26, name: "Mr. Anshuman Kalia", designation: "Assistant Professor" },
  { id: 27, name: "Mr. Harsh Modi", designation: "Assistant Professor" },
  { id: 28, name: "Mr. Pavan Sharma", designation: "Assistant Professor" },
  { id: 29, name: "Ms. Neeti Pahuja", designation: "Assistant Professor" },
  {
    id: 30,
    name: "Mr. Rajanish Kumar Jain",
    designation: "Assistant Professor",
  },
  { id: 31, name: "Ms. Surbhi Jain", designation: "Assistant Professor" },
  { id: 32, name: "Ms. Maitree", designation: "Assistant Professor" },
  { id: 33, name: "Mr. Aman Srivastav", designation: "Assistant Professor" },
  { id: 34, name: "Mr. Mohit Tanwar", designation: "Assistant Professor" },
  { id: 35, name: "Mr. Hrjeet Singh", designation: "Assistant Professor" },
  { id: 36, name: "Ms. Prabhjot Kaur", designation: "Assistant Professor" },
  { id: 37, name: "Dr. Nand Kishor Yadav", designation: "Assistant Professor" },
  { id: 38, name: "Mr. Navdesh Singh", designation: "Assistant Professor" },
  {
    id: 39,
    name: "Mr. Rishab Singh Rathore",
    designation: "Assistant Professor",
  },
  { id: 40, name: "Mr. Anikesh", designation: "Assistant Professor" },
  { id: 41, name: "Mr. Ravi Tomer", designation: "Assistant Manager" },
  { id: 42, name: "Mr. Sandeep Kumar", designation: "Officer-IT" },
  { id: 43, name: "Mr. Jaskirat Singh", designation: "Adjunct Faculty" },
];

const inferDegree = (name) => (name.startsWith("Dr.") ? "Ph.D." : "");

const generateEmail = (name) => {
  const localPart = name
    .replace(/\b(Dr|Mr|Ms)\.?\s*/gi, "")
    .replace(/[^a-zA-Z\s]/g, " ")
    .trim()
    .split(/\s+/)
    .join(".")
    .toLowerCase();
  return `${localPart}@kiet.edu`;
};

const candidateKeysForName = (name) => {
  const stripped = name
    .replace(/\b(Dr|Mr|Ms)\.?\s*/gi, "")
    .replace(/[^a-zA-Z\s]/g, " ");
  const parts = stripped.trim().split(/\s+/).filter(Boolean);
  const keys = [];
  keys.push(normalizeKey(name));
  keys.push(normalizeKey(stripped));
  if (parts.length >= 2) {
    keys.push(normalizeKey(`${parts[0]} ${parts[parts.length - 1]}`));
  }
  if (parts.length >= 3) {
    keys.push(
      normalizeKey(`${parts[0]} ${parts[1]} ${parts[parts.length - 1]}`),
    );
  }
  return Array.from(new Set(keys)).filter(Boolean);
};

const findImageForFaculty = (name) => {
  const keys = candidateKeysForName(name);
  for (const key of keys) {
    const alias = imageKeyAliases[key];
    const finalKey = alias || key;
    const src = imageByKey[finalKey];
    if (src) return src;
  }
  return null;
};

const tierForDesignation = (designation) => {
  if (
    designation.startsWith("Senior Professor") ||
    designation.startsWith("Professor")
  )
    return "professors";
  if (designation.startsWith("Associate Professor")) return "associates";
  if (designation.startsWith("Assistant Professor")) return "assistants";
  if (designation === "Adjunct Faculty") return "adjunct";
  return "others";
};

const tierMeta = {
  professors: { label: "Professors", color: "#164265" },
  associates: { label: "Associate Professors", color: "#164265" },
  assistants: { label: "Assistant Professors", color: "#164265" },
  adjunct: { label: "Adjunct Faculty", color: "#164265" },
  others: { label: "Other Roles", color: "#164265" },
};

export default function Faculty() {
  const [activeFilter, setActiveFilter] = useState("all");

  const facultyWithMeta = useMemo(
    () =>
      facultyMembers.map((member) => ({
        ...member,
        degree: inferDegree(member.name),
        email: generateEmail(member.name),
        imageSrc: findImageForFaculty(member.name),
      })),
    [],
  );

  const grouped = useMemo(() => {
    return facultyWithMeta.reduce(
      (acc, faculty) => {
        const tier = tierForDesignation(faculty.designation);
        acc[tier].push(faculty);
        return acc;
      },
      {
        professors: [],
        associates: [],
        assistants: [],
        adjunct: [],
        others: [],
      },
    );
  }, [facultyWithMeta]);

  // Get filtered faculty based on active filter
  const filteredFaculty = useMemo(() => {
    if (activeFilter === "all") {
      return facultyWithMeta;
    }
    return grouped[activeFilter] || [];
  }, [activeFilter, facultyWithMeta, grouped]);

  // Handle filter button click
  const handleFilterClick = (filterId) => {
    setActiveFilter(filterId);
  };

  const FacultyCard = ({ faculty }) => (
    <div className="group flex-none w-65 sm:w-75 rounded-2xl border border-gray-200 bg-white p-5 transition-all duration-300 hover:border-gray-300 hover:shadow-lg">
      {/* Big square photo (top) */}
      <div className="w-full aspect-square overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 flex items-end justify-center">
        {faculty.imageSrc ? (
          <img
            src={faculty.imageSrc}
            alt={faculty.name}
            className="h-full w-full object-contain object-bottom"
            loading="lazy"
          />
        ) : (
          <div className="h-full w-full" />
        )}
      </div>

      {/* Details (below) */}
      <div className="mt-5 min-w-0">
        <h4 className="text-xl font-semibold text-gray-900 truncate">
          {faculty.name}
        </h4>
        <p className="mt-2 text-sm font-semibold" style={{ color: "#164265" }}>
          {faculty.designation}
        </p>
        {faculty.degree ? (
          <p className="mt-2 text-xs italic text-gray-600">{faculty.degree}</p>
        ) : null}
        <a
          href={`mailto:${faculty.email}`}
          className="mt-4 inline-flex items-center gap-3 text-sm text-gray-800"
          aria-label={`Email ${faculty.name}`}
          title={faculty.email}
        >
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 bg-white transition-colors duration-300 group-hover:bg-gray-50">
            <Mail size={18} />
          </span>
          <span className="max-w-0 overflow-hidden whitespace-nowrap opacity-0 transition-all duration-300 group-hover:max-w-55 group-hover:opacity-100">
            {faculty.email}
          </span>
        </a>
      </div>
    </div>
  );

  return (
    <section
      id="faculty"
      className="py-16 bg-linear-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-14 relative w-full">
          <h2 className="text-[32px] md:text-[40px] font-bold text-[#0f172a] mb-6 tracking-tight text-center">
            <span className="pb-1" style={{ borderBottom: '3px solid #F26520' }}>
              Faculty
            </span>
          </h2>
        </div>

        {/* Filter Buttons */}
        <div className="mb-8 overflow-x-auto no-scrollbar">
          <div className="flex gap-3 pb-2">
            <FilterButton
              filterId="all"
              label="All Faculty"
              count={facultyWithMeta.length}
              isActive={activeFilter === "all"}
              color="#F26520"
              onClick={handleFilterClick}
            />
            <FilterButton
              filterId="professors"
              label="Professors"
              count={grouped.professors.length}
              isActive={activeFilter === "professors"}
              color={tierMeta.professors.color}
              onClick={handleFilterClick}
            />
            <FilterButton
              filterId="associates"
              label="Associate Professors"
              count={grouped.associates.length}
              isActive={activeFilter === "associates"}
              color={tierMeta.associates.color}
              onClick={handleFilterClick}
            />
            <FilterButton
              filterId="assistants"
              label="Assistant Professors"
              count={grouped.assistants.length}
              isActive={activeFilter === "assistants"}
              color={tierMeta.assistants.color}
              onClick={handleFilterClick}
            />
            <FilterButton
              filterId="adjunct"
              label="Adjunct Faculty"
              count={grouped.adjunct.length}
              isActive={activeFilter === "adjunct"}
              color={tierMeta.adjunct.color}
              onClick={handleFilterClick}
            />
            <FilterButton
              filterId="others"
              label="Others"
              count={grouped.others.length}
              isActive={activeFilter === "others"}
              color={tierMeta.others.color}
              onClick={handleFilterClick}
            />
          </div>
        </div>

        {/* Faculty Grid - using native browser scrolling */}
        <div className="overflow-x-auto no-scrollbar pb-4">
          <div
            className="flex gap-5 pr-2 pl-1"
            style={{ minWidth: "min-content" }}
          >
            {filteredFaculty.map((faculty) => (
              <FacultyCard key={faculty.id} faculty={faculty} />
            ))}
          </div>
        </div>

        {/* Empty State */}
        {filteredFaculty.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">
              No faculty members found in this category.
            </p>
          </div>
        )}
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
