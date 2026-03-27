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
    <section className="py-16 bg-white overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-10">
        Our Recruiters
      </h2>

      <div className="w-full overflow-hidden">
        <div className="flex animate-marquee">
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={i}
              className="flex items-center justify-center min-w-[160px] px-6"
            >
              <img
                src={logo}
                alt="logo"
                className="h-14 object-contain hover:scale-110 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      {/* CSS */}
      <style jsx>{`
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 20s linear infinite;
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