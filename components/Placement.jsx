import React from "react";
import adobeLogo from "../src/assets/recruiters/adobe.png";
import americanExpressLogo from "../src/assets/recruiters/american_express.png";
import atlassianLogo from "../src/assets/recruiters/atlassian.png";
import googleLogo from "../src/assets/recruiters/google.png";
import infosysLogo from "../src/assets/recruiters/infosys.png";
import jpmorganLogo from "../src/assets/recruiters/jpmorgan.png";
import mamaearthLogo from "../src/assets/recruiters/mamaearth.png";
import microsoftLogo from "../src/assets/recruiters/microsoft.png";
import nokiaLogo from "../src/assets/recruiters/nokia.png";
import rapipayLogo from "../src/assets/recruiters/rapipay.png";
import sopraSteriaLogo from "../src/assets/recruiters/sopra_steria.png";
import ukgLogo from "../src/assets/recruiters/ukg.png";
import unileverLogo from "../src/assets/recruiters/unilever.png";

export default function Placement() {
  const logos = [
    adobeLogo,
    americanExpressLogo,
    atlassianLogo,
    googleLogo,
    infosysLogo,
    jpmorganLogo,
    mamaearthLogo,
    microsoftLogo,
    nokiaLogo,
    rapipayLogo,
    sopraSteriaLogo,
    ukgLogo,
    unileverLogo,
  ];

  return (
    <section id="placement" className="py-20 bg-gray-50 overflow-hidden relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#164265] mb-4 font-secondary tracking-tight">
            Placement Statistics
          </h2>
          <div className="w-24 h-1 bg-[#F26520] mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            The postgraduates of the CSE Department consistently secure top-tier placements across industry-leading organizations, reflecting our commitment to academic excellence and industry relevance.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-center border-collapse">
              <thead>
                <tr className="bg-[#164265] text-white">
                  <th className="py-4 px-4 font-semibold border-b border-[#11324c] border-r border-[#1e5886]/50 last:border-r-0 whitespace-nowrap">S.No</th>
                  <th className="py-4 px-4 font-semibold border-b border-[#11324c] border-r border-[#1e5886]/50 last:border-r-0 whitespace-nowrap">Batch</th>
                  <th className="py-4 px-4 font-semibold border-b border-[#11324c] border-r border-[#1e5886]/50 last:border-r-0 whitespace-nowrap">Average Package</th>
                  <th className="py-4 px-4 font-semibold border-b border-[#11324c] border-r border-[#1e5886]/50 last:border-r-0 whitespace-nowrap">Highest Package</th>
                  <th className="py-4 px-4 font-semibold border-b border-[#11324c] whitespace-nowrap">Percentage of Placement</th>
                </tr>
              </thead>
              <tbody className="text-gray-800">
                <tr className="hover:bg-blue-50/50 transition-colors border-b border-gray-200 group">
                  <td className="py-4 px-4 border-r border-gray-200 font-medium text-gray-600">
                     1
                  </td>
                  <td className="py-4 px-4 border-r border-gray-200 font-bold text-[#164265]">2024-2025</td>
                  <td className="py-4 px-4 border-r border-gray-200 font-semibold">5.95 LPA</td>
                  <td className="py-4 px-4 border-r border-gray-200 font-semibold">24.23 LPA</td>
                  <td className="py-4 px-4 font-semibold">
                    <div className="flex items-center justify-center gap-2">
                      90%
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-blue-50/50 transition-colors bg-gray-50/50">
                  <td className="py-4 px-4 border-r border-gray-200 font-medium text-gray-600">
                     2
                  </td>
                  <td className="py-4 px-4 border-r border-gray-200 font-bold text-[#164265]">2023-2024</td>
                  <td className="py-4 px-4 border-r border-gray-200 font-semibold">6.15 LPA</td>
                  <td className="py-4 px-4 border-r border-gray-200 font-semibold">60 LPA</td>
                  <td className="py-4 px-4 font-semibold">
                    <div className="flex items-center justify-center gap-2">
                      79.24%
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="relative z-10 w-full mb-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#164265] mb-2 font-secondary">
            Our Top Recruiters
          </h2>
          <div className="w-16 h-1 bg-[#F26520] mx-auto rounded-full"></div>
        </div>
        <div className="w-full overflow-hidden bg-white py-8 border-y border-gray-200 shadow-sm">
          <div className="flex animate-marquee hover:[animation-play-state:paused] cursor-pointer">
            {[...logos, ...logos].map((logo, i) => (
              <div
                key={i}
                className="flex items-center justify-center min-w-[160px] md:min-w-[200px] px-6"
              >
                <img
                  src={logo}
                  alt="logo"
                  className="h-12 md:h-16 object-contain hover:scale-110 transition duration-300 filter grayscale hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 35s linear infinite;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}