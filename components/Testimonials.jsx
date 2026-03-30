import React, { useState, useEffect } from "react";
import { Star } from "lucide-react";
import nehaImg from "../src/assets/Testimonials/Neha.jpeg";
import sakshiImg from "../src/assets/Testimonials/Sakshi.jpeg";
import manikImg from "../src/assets/Testimonials/Manik.png";

const TESTIMONIALS = [
  {
    id: 1,
    name: "Neha",
    company: "Google",
    role: "ML Engineer",
    initials: "AK",
    image: nehaImg,
    avatarBg: "#164265",
    message:
      "The M.Tech program at KIET provided me with comprehensive knowledge in AI and ML. The hands-on projects and industry mentorship were invaluable in my career growth.",
    rating: 5,
  },
  {
    id: 2,
    name: "Sakshi",
    company: "Microsoft",
    role: "Data Scientist",
    initials: "PS",
    image: sakshiImg,
    avatarBg: "#1a5c8a",
    message:
      "KIET's DGX supercomputing center gave me access to cutting-edge technology. The faculty guidance and peer learning environment accelerated my professional development significantly.",
    rating: 5,
  },
  {
    id: 3,
    name: "Manik Sharma",
    company: "Amazon",
    role: "AI Research Scientist",
    initials: "RP",
    image: manikImg,
    avatarBg: "#0f3d5c",
    message:
      "The curriculum is perfectly aligned with industry needs. I appreciated the balance of theoretical knowledge and hands-on applications. The placement support was exceptional.",
    rating: 5,
  },
  {
    id: 4,
    name: "Neha Verma",
    company: "IBM",
    role: "Senior Developer",
    initials: "NV",
    image: "https://randomuser.me/api/portraits/women/26.jpg",
    avatarBg: "#164265",
    message:
      "Outstanding program with experienced faculty and world-class infrastructure. The industry connect sessions helped me understand real-world AI challenges and build practical solutions.",
    rating: 5,
  },
  {
    id: 5,
    name: "Arjun Mehta",
    company: "Flipkart",
    role: "Software Engineer",
    initials: "AM",
    image: "https://randomuser.me/api/portraits/men/15.jpg",
    avatarBg: "#1a5c8a",
    message:
      "The research opportunities and collaboration with industry experts during the M.Tech program gave me a significant advantage. The faculty are genuinely committed educators.",
    rating: 5,
  },
  {
    id: 6,
    name: "Divya Sharma",
    company: "TCS Research",
    role: "AI Researcher",
    initials: "DS",
    image: "https://randomuser.me/api/portraits/women/63.jpg",
    avatarBg: "#0f3d5c",
    message:
      "From state-of-the-art labs to experienced mentors, KIET's M.Tech CSE program exceeded my expectations. The exposure to emerging technologies prepared me comprehensively for the AI industry.",
    rating: 5,
  },
];

const VISIBLE = 3;
// Extend the array so the carousel can loop seamlessly
const EXTENDED = [...TESTIMONIALS, ...TESTIMONIALS.slice(0, VISIBLE)];

function TestimonialCard({ testimonial }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        borderRadius: "10px",
        overflow: "hidden",
        border: "1px solid #E5E7EB",
        height: "248px",
        backgroundColor: "#ffffff",
        boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
      }}
    >
      {/* Left — photo panel */}
      <div
        style={{
          width: "36%",
          flexShrink: 0,
          position: "relative",
          overflow: "hidden",
          backgroundColor: testimonial.avatarBg,
        }}
      >
        <img
          src={testimonial.image}
          alt={testimonial.name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center top",
            display: "block",
          }}
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
        {/* Subtle gradient overlay at the bottom edge */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "40%",
            background: `linear-gradient(to top, ${testimonial.avatarBg}99, transparent)`,
          }}
        />
      </div>

      {/* Right — content panel */}
      <div
        style={{
          flex: 1,
          padding: "18px 20px",
          display: "flex",
          flexDirection: "column",
          minWidth: 0,
        }}
      >
        {/* Star rating */}
        <div style={{ display: "flex", gap: "3px", marginBottom: "10px" }}>
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star
              key={i}
              size={13}
              className="fill-current"
              style={{ color: "#F26520" }}
            />
          ))}
        </div>

        {/* Quote */}
        <p
          style={{
            color: "#4B5563",
            fontSize: "12.5px",
            lineHeight: "1.7",
            fontStyle: "italic",
            flex: 1,
            overflow: "hidden",
            display: "-webkit-box",
            WebkitLineClamp: 5,
            WebkitBoxOrient: "vertical",
            margin: 0,
          }}
        >
          &ldquo;{testimonial.message}&rdquo;
        </p>

        {/* Divider */}
        <div
          style={{
            height: "1px",
            backgroundColor: "#F3F4F6",
            margin: "12px 0 10px",
          }}
        />

        {/* Name & designation */}
        <div>
          <p
            style={{
              fontWeight: "700",
              color: "#111827",
              fontSize: "13.5px",
              margin: "0 0 2px",
            }}
          >
            {testimonial.name}
          </p>
          <p
            style={{
              color: "#6B7280",
              fontSize: "12px",
              margin: 0,
            }}
          >
            {testimonial.role}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [animated, setAnimated] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => prev + 1);
    }, 3800);
    return () => clearInterval(interval);
  }, []);

  // When we reach the cloned segment, snap silently back to the real start
  useEffect(() => {
    if (current === TESTIMONIALS.length) {
      const snap = setTimeout(() => {
        setAnimated(false);
        setCurrent(0);
      }, 620);
      return () => clearTimeout(snap);
    }
  }, [current]);

  useEffect(() => {
    if (!animated) {
      const restore = setTimeout(() => setAnimated(true), 50);
      return () => clearTimeout(restore);
    }
  }, [animated]);

  const translateX = -(current * (100 / VISIBLE));
  const activeDot = current % TESTIMONIALS.length;

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-14">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">
            Student Testimonials
          </h2>
          <div
            className="w-24 h-1 rounded-full"
            style={{ backgroundColor: "#F26520" }}
          />
        </div>

        {/* Carousel track */}
        <div style={{ overflow: "hidden" }}>
          <div
            style={{
              display: "flex",
              transform: `translateX(${translateX}%)`,
              transition: animated
                ? "transform 0.62s cubic-bezier(0.4, 0, 0.2, 1)"
                : "none",
            }}
          >
            {EXTENDED.map((testimonial, i) => (
              <div
                key={i}
                style={{
                  width: `calc(100% / ${VISIBLE})`,
                  flexShrink: 0,
                  padding: "0 10px",
                  boxSizing: "border-box",
                }}
              >
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>
        </div>

        {/* Progress indicators */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "8px",
            marginTop: "36px",
          }}
        >
          {TESTIMONIALS.map((_, i) => (
            <div
              key={i}
              style={{
                width: i === activeDot ? "28px" : "8px",
                height: "8px",
                borderRadius: "4px",
                backgroundColor: i === activeDot ? "#F26520" : "#D1D5DB",
                transition: "all 0.35s ease",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
