import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (event, href) => {
    if (!href?.startsWith("#")) return;
    event.preventDefault();

    const id = href.slice(1);
    const element = document.getElementById(id);

    if (element) {
      const headerOffsetPx = 80;
      const y =
        element.getBoundingClientRect().top + window.scrollY - headerOffsetPx;
      window.scrollTo({ top: y, behavior: "smooth" });
    }

    setIsMenuOpen(false);
  };

  const navItems = [
    { label: "Overview", href: "#overview" },
    { label: "Highlights", href: "#highlights" },
    { label: "COE", href: "#coe" },
    { label: "Clubs", href: "#clubs" },
    { label: "Faculty", href: "#faculty" },
    { label: "Publications & Research", href: "#publications" },
    { label: "Program Details", href: "#details" },
    { label: "Placement", href: "#placement" },
    { label: "Testimonials", href: "#testimonials" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/95 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">          

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center  mx-auto space-x-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-gray-700 rounded-lg transition-all duration-300 hover:bg-gray-100"
                style={{
                  borderBottom: `2px solid transparent`,
                  transition: "all 0.3s ease",
                }}
                onClick={(e) => handleNavClick(e, item.href)}
                onMouseEnter={(e) => {
                  e.target.style.borderBottomColor = "#F26520";
                  e.target.style.color = "#F26520";
                }}
                onMouseLeave={(e) => {
                  e.target.style.borderBottomColor = "transparent";
                  e.target.style.color = "#374151";
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg transition-all duration-300 hover:bg-gray-100"
              style={{ color: "#164265" }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 space-y-2 animate-in fade-in duration-300">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-3 py-2 text-sm font-medium text-gray-700 rounded-lg transition-all duration-300"
                style={{
                  backgroundColor: "#f3f4f6",
                }}
                onClick={(e) => handleNavClick(e, item.href)}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#FFF3E0";
                  e.target.style.color = "#F26520";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "#f3f4f6";
                  e.target.style.color = "#374151";
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
