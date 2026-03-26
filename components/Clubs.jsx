import React from "react";

export default function Clubs() {
  const clubs = [
    {
      id: 1,
      name: "Data Science & Deep Learning (DSDL)",
      description:
        "A technical community focused on practical data science, deep learning fundamentals, model experimentation, and deployment workflows through guided projects and mentorship.",
      tags: ["Machine Learning", "AI", "Deep Learning"],
      image:
        "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=400&fit=crop",
    },
    {
      id: 2,
      name: "Google Developer Groups (GDG)",
      description:
        "A peer-driven developer group for Google technologies with coding sessions, study jams, speaker events, and product-focused hands-on learning.",
      tags: ["Web", "Android", "Cloud"],
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=400&fit=crop",
    },
    {
      id: 3,
      name: "Microsoft Learn Student Ambassadors (MLSA)",
      description:
        "A student ambassador community that builds technical leadership through Microsoft learn paths, workshops, hackathons, and collaborative innovation initiatives.",
      tags: ["Azure", "Leadership", "Hackathons"],
      image:
        "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=400&fit=crop",
    },
    {
      id: 4,
      name: "FOSSCU (Open Source Community)",
      description:
        "An open-source focused community encouraging collaborative development, contribution practices, version control workflows, and project maintenance discipline.",
      tags: ["Open Source", "Git", "Collaboration"],
      image:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=400&fit=crop",
    },
  ];

  return (
    <section id="clubs" className="py-20 bg-linear-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">
            Technical Clubs
          </h2>
          <div
            className="w-24 h-1 rounded-full"
            style={{ backgroundColor: "#F26520" }}
          ></div>
        </div>

        {/* Numbered rows */}
        <div className="space-y-6">
          {clubs.map((club) => (
            <div
              key={club.id}
              className="rounded-2xl border border-gray-200 bg-white overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-[120px_1fr_220px]">
                {/* Number band */}
                <div className="md:border-r border-gray-200 p-8 md:p-10 flex items-center justify-center">
                  <span className="text-5xl md:text-6xl font-bold text-gray-200 select-none">
                    {String(club.id).padStart(2, "0")}
                  </span>
                </div>

                {/* Content */}
                <div className="p-8 md:p-10 md:border-r border-gray-200">
                  <h3 className="text-3xl font-bold text-gray-900 leading-tight">
                    {club.name}
                  </h3>
                  <p className="mt-4 text-gray-600 leading-relaxed text-justify">
                    {club.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    {club.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-2 rounded-full text-sm font-semibold border"
                        style={{
                          borderColor: "rgba(22, 66, 101, 0.18)",
                          backgroundColor: "rgba(22, 66, 101, 0.06)",
                          color: "#164265",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Image */}
                <div className="p-8 md:p-10 flex items-center justify-center">
                  <div className="w-28 h-28 rounded-2xl overflow-hidden border border-gray-200 bg-gray-50">
                    <img
                      src={club.image}
                      alt={club.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
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
