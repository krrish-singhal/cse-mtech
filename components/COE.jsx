import React, { useState } from 'react';
import { ArrowRight, Code2, Layers, Rocket, Database, Zap, Server, Network } from 'lucide-react';

export default function COE() {
  const [activeCard, setActiveCard] = useState(null);

  const centres = [
    {
      id: 'ios-lab',
      title: 'iOS Development Lab',
      image: '/images/ios-lab.png',
      description:
        'The iOS Development Lab is a state-of-the-art innovation space dedicated to building world-class applications for the Apple ecosystem. Equipped with modern Mac systems, the lab enables students to master Swift, UIKit/SwiftUI, and end-to-end app development.',
      detail:
        'Students work on real-world app projects, gaining hands-on experience in performance optimization, API integration, and App Store readiness.',
      accentColor: '#164265',
      gradientFrom: '#164265',
      gradientTo: '#1e6fa0',
      tags: [
        { label: 'Swift & SwiftUI', icon: Code2 },
        { label: 'UI/UX Design', icon: Layers },
        { label: 'App Store Ready', icon: Rocket },
      ],
      stats: [
        { value: '30+', label: 'Mac Systems' },
        { value: '50+', label: 'Apps Built' },
        { value: '100%', label: 'Hands-on' },
      ],
    },
    {
      id: 'dgx-centre',
      title: 'Supercomputing with DGX',
      image: '/images/dgx-supercomputer.png',
      description:
        'Powered by the NVIDIA DGX A100, this Centre of Excellence brings enterprise-level AI infrastructure directly to students. It enables training of large-scale deep learning models and real-time AI deployment.',
      detail:
        'The facility acts as a launchpad for cutting-edge research, innovation, and industry-driven AI solutions.',
      accentColor: '#164265',
      gradientFrom: '#164265',
      gradientTo: '#1e6fa0',
      tags: [
        { label: 'NVIDIA DGX A100', icon: Server },
        { label: 'Deep Learning', icon: Database },
        { label: 'Real-time AI', icon: Zap },
      ],
      stats: [
        { value: '5 PF', label: 'Computing' },
        { value: '320GB', label: 'GPU Memory' },
        { value: '8x', label: 'A100 GPUs' },
      ],
    },
    {
      id: 'param-shavak',
      title: 'PARAM Shavak HPC Lab',
      image: '/images/param-shavak.png',
      description:
        'The PARAM Shavak supercomputer, developed by C-DAC, empowers students with hands-on experience in high-performance computing and parallel processing.',
      detail:
        'It supports complex simulations, big data analysis, and scientific computing—bridging the gap between academic learning and real-world computational challenges.',
      accentColor: '#164265',
      gradientFrom: '#164265',
      gradientTo: '#1e6fa0',
      tags: [
        { label: 'High Performance', icon: Server },
        { label: 'Parallel Processing', icon: Network },
        { label: 'Big Data', icon: Database },
      ],
      stats: [
        { value: 'C-DAC', label: 'Developed By' },
        { value: 'Scientific', label: 'Computing' },
        { value: 'Complex', label: 'Simulations' },
      ],
    },
  ];

  return (
    <section id="coe" className="coe-section">
      <style>{`
        .coe-section {
          padding: 3rem 0;
          background: #fafbfc;
          position: relative;
          overflow: hidden;
        }
        .coe-container {
          max-width: 80rem;
          margin: 0 auto;
          padding: 0 1.5rem;
          position: relative;
          z-index: 1;
        }
        .coe-header {
          text-align: center;
          margin-bottom: 3rem;
        }
        .coe-header h2 {
          font-size: clamp(2rem, 5vw, 3rem);
          font-weight: 800;
          color: #164265;
          margin-bottom: 1rem;
          letter-spacing: -0.02em;
        }
        .coe-header-bar {
          width: 5rem;
          height: 0.25rem;
          border-radius: 9999px;
          background: #F26520;
          margin: 0 auto 1.25rem;
        }
        .coe-header p {
          color: #6b7280;
          font-size: 1.05rem;
          max-width: 38rem;
          margin: 0 auto;
          line-height: 1.65;
        }

        /* Grid layout */
        .coe-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
        }

        /* Center the 3rd card on large screens */
        @media (min-width: 901px) {
          .coe-card:last-child:nth-child(odd) {
            grid-column: 1 / -1;
            justify-self: center;
            width: calc(50% - 1rem);
          }
        }

        /* Card */
        .coe-card {
          background: #fff;
          border-radius: 1.25rem;
          overflow: hidden;
          box-shadow: 0 2px 20px rgba(0,0,0,0.05);
          border: 1px solid rgba(0,0,0,0.04);
          transition: all 0.45s cubic-bezier(0.23, 1, 0.32, 1);
          position: relative;
          display: flex;
          flex-direction: column;
        }
        .coe-card:hover {
          box-shadow: 0 16px 48px rgba(0,0,0,0.1);
          transform: translateY(-6px);
        }

        /* Image */
        .coe-card-image {
          position: relative;
          overflow: hidden;
          height: 280px;
        }
        .coe-card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.7s cubic-bezier(0.23, 1, 0.32, 1);
        }
        .coe-card:hover .coe-card-image img {
          transform: scale(1.08);
        }
        .coe-card-image-overlay {
          position: absolute;
          inset: 0;
          transition: opacity 0.4s ease;
        }


        /* Content */
        .coe-card-body {
          padding: 1.5rem 1.75rem 1.5rem;
          display: flex;
          flex-direction: column;
          flex: 1;
          position: relative;
        }

        .coe-card-title {
          font-size: 1.35rem;
          font-weight: 800;
          color: #164265;
          margin-bottom: 0.85rem;
          line-height: 1.25;
          letter-spacing: -0.01em;
        }
        .coe-card-desc {
          color: #4b5563;
          font-size: 0.855rem;
          line-height: 1.65;
          margin-bottom: 0.5rem;
          text-align: justify;
        }
        .coe-card-detail {
          color: #6b7280;
          font-size: 0.82rem;
          line-height: 1.6;
          margin-bottom: 1.15rem;
          text-align: justify;
        }

        /* Stats */
        .coe-stats {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 1.15rem;
          padding: 0.85rem 0;
          border-top: 1px solid #f3f4f6;
          border-bottom: 1px solid #f3f4f6;
        }
        .coe-stat {
          text-align: center;
          flex: 1;
        }
        .coe-stat-val {
          font-size: 1.2rem;
          font-weight: 800;
          display: block;
          margin-bottom: 0.15rem;
          transition: transform 0.3s ease;
        }
        .coe-card:hover .coe-stat-val {
          transform: scale(1.08);
        }
        .coe-stat-lbl {
          font-size: 0.6rem;
          color: #9ca3af;
          text-transform: uppercase;
          letter-spacing: 0.07em;
          font-weight: 600;
        }

        /* Tags */
        .coe-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          margin-bottom: 1.15rem;
        }
        .coe-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          padding: 0.3rem 0.7rem;
          border-radius: 0.4rem;
          font-size: 0.72rem;
          font-weight: 600;
          border: 1px solid;
          transition: all 0.3s ease;
          cursor: default;
        }
        .coe-tag:hover {
          transform: translateY(-2px);
          box-shadow: 0 3px 10px rgba(0,0,0,0.07);
        }

        /* CTA */
        .coe-cta {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.6rem 1.4rem;
          border-radius: 0.6rem;
          font-size: 0.82rem;
          font-weight: 700;
          color: #fff;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          width: fit-content;
          margin-top: auto;
        }
        .coe-cta:hover {
          transform: translateX(3px);
          box-shadow: 0 6px 20px rgba(0,0,0,0.15);
        }
        .coe-cta svg {
          transition: transform 0.3s ease;
        }
        .coe-cta:hover svg {
          transform: translateX(3px);
        }

        /* Decorative glow */
        .coe-glow {
          position: absolute;
          width: 160px;
          height: 160px;
          border-radius: 50%;
          filter: blur(70px);
          opacity: 0;
          transition: opacity 0.5s ease;
          pointer-events: none;
          right: -40px;
          bottom: -40px;
          z-index: 0;
        }
        .coe-card:hover .coe-glow {
          opacity: 0.12;
        }

        @media (max-width: 900px) {
          .coe-grid {
            grid-template-columns: 1fr;
            max-width: 550px;
            margin: 0 auto;
          }
          .coe-card:last-child:nth-child(odd) {
            width: 100%;
          }
        }
        @media (max-width: 640px) {
          .coe-section {
            padding: 2rem 0;
          }
          .coe-card-image {
            height: 180px;
          }
          .coe-card-body {
            padding: 1.25rem;
          }
        }
      `}</style>

      <div className="coe-container">
        <div className="coe-header">
          <h2>Centres of Excellence</h2>
          <div className="coe-header-bar"></div>
          <p>
            World-class facilities empowering students with cutting-edge technology
            and industry-grade infrastructure.
          </p>
        </div>

        <div className="coe-grid">
          {centres.map((centre) => (
            <div
              key={centre.id}
              className="coe-card"
              onMouseEnter={() => setActiveCard(centre.id)}
              onMouseLeave={() => setActiveCard(null)}
            >
              {/* Image */}
              <div className="coe-card-image">
                <img src={centre.image} alt={centre.title} />
                <div
                  className="coe-card-image-overlay"
                  style={{
                    background: `linear-gradient(180deg, transparent 30%, ${centre.gradientFrom}aa 100%)`,
                    opacity: activeCard === centre.id ? 0.7 : 0.4,
                  }}
                />

              </div>

              {/* Body */}
              <div className="coe-card-body">
                <div className="coe-glow" style={{ background: centre.accentColor }} />



                <h3 className="coe-card-title">{centre.title}</h3>
                <p className="coe-card-desc">{centre.description}</p>
                <p className="coe-card-detail">{centre.detail}</p>

                {/* Stats */}
                <div className="coe-stats">
                  {centre.stats.map((s) => (
                    <div className="coe-stat" key={s.label}>
                      <span className="coe-stat-val" style={{ color: centre.accentColor }}>
                        {s.value}
                      </span>
                      <span className="coe-stat-lbl">{s.label}</span>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
