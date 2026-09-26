'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const trainersList = [
  {
    number: '01',
    role: 'Strength & Biomechanics',
    focus: 'Barbell Hypertrophy • Jerai Lever Systems',
    image: '/images/strength.jpg',
  },
  {
    number: '02',
    role: 'Conditioning & High-Intensity',
    focus: 'CrossFit Rig • Metabolic Intervals',
    image: '/images/hero.jpg',
  },
  {
    number: '03',
    role: 'Functional & Mobility',
    focus: 'Joint Health • Athletic Longevity',
    image: '/images/strength.jpg',
  },
];

export default function Trainers() {
  const containerRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 85%',
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="trainers"
      className="relative section-padding border-t border-[var(--border-subtle)] bg-[var(--bg-primary)] overflow-hidden"
      aria-label="Coaching Staff"
    >
      <div className="container-wide">
        {/* Minimal Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 sm:mb-20">
          <div>
            <span className="text-xs font-mono tracking-[0.25em] text-[var(--text-muted)] uppercase block mb-3">
              COACHING CADRE
            </span>
            <h2
              ref={titleRef}
              className="heading-section text-[var(--text-primary)]"
            >
              CERTIFIED<br />
              <span className="text-[var(--accent-yellow)]">COACHING.</span>
            </h2>
          </div>
          <Link
            href="/trainers"
            className="text-xs font-mono text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors uppercase tracking-widest inline-flex items-center gap-1.5"
          >
            <span>View Coach Profiles</span>
            <span>↗</span>
          </Link>
        </div>

        {/* Clean Editorial 3-Column Visual Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {trainersList.map((item) => (
            <div
              key={item.number}
              className="group cursor-pointer"
            >
              {/* Photo Frame */}
              <div className="relative w-full h-[380px] sm:h-[440px] overflow-hidden bg-[var(--bg-secondary)] border border-[var(--border-subtle)] mb-5">
                <Image
                  src={item.image}
                  alt={item.role}
                  fill
                  className="object-cover grayscale contrast-125 transition-transform duration-700 group-hover:scale-105 group-hover:grayscale-0"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute top-4 left-4">
                  <span className="text-xs font-mono font-bold px-2.5 py-1 bg-white text-[#121212] shadow-sm">
                    {item.number}
                  </span>
                </div>
              </div>

              {/* Minimal Meta */}
              <div className="flex flex-col gap-1">
                <h3 className="text-base sm:text-lg font-bold uppercase tracking-tight text-[var(--text-primary)] group-hover:text-[var(--accent-yellow)] transition-colors">
                  {item.role}
                </h3>
                <p className="text-xs font-mono text-[var(--text-muted)] tracking-wider">
                  {item.focus}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
