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
    name: 'Prathamesh Gaware',
    role: 'Head Strength & Biomechanics Coach',
    focus: 'Barbell Hypertrophy • Jerai Lever Systems • Compound Lifts',
    image: '/images/prathamesh gaware trainer.png',
  },
  {
    number: '02',
    name: 'Mahi',
    role: 'Functional & Conditioning Specialist',
    focus: 'Metabolic Conditioning • Joint Health • Athletic Longevity',
    image: '/images/mahi trainer.png',
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
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16">
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

        {/* Clean Editorial 2-Column Compact Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12 max-w-3xl mx-auto items-start">
          {trainersList.map((item) => (
            <div
              key={item.number}
              className="group cursor-pointer flex flex-col items-center"
            >
              <div className="w-full max-w-[240px] sm:max-w-[270px] lg:max-w-[285px]">
                {/* Photo Frame - Exact 2:3 aspect ratio */}
                <div className="relative w-full aspect-[2/3] overflow-hidden bg-[#FAF9F6] border border-[var(--border-subtle)] mb-3.5 shadow-xs">
                  <Image
                    src={item.image}
                    alt={`${item.name} - ${item.role}`}
                    fill
                    className="object-contain object-center transition-transform duration-700 group-hover:scale-[1.02]"
                    sizes="(max-width: 640px) 240px, (max-width: 1024px) 270px, 285px"
                  />
                  <div className="absolute top-2.5 left-2.5">
                    <span className="text-[11px] font-mono font-bold px-2 py-0.5 bg-white/95 text-[#121212] border border-black/10 shadow-xs">
                      {item.number}
                    </span>
                  </div>
                </div>

                {/* Meta: Name & Captions */}
                <div className="flex flex-col gap-1 text-left">
                  <span className="text-xs font-mono text-[var(--accent-yellow)] font-bold tracking-widest uppercase">
                    {item.name}
                  </span>
                  <h3 className="text-sm sm:text-base font-bold uppercase tracking-tight text-[var(--text-primary)] group-hover:text-[var(--accent-yellow)] transition-colors leading-snug">
                    {item.role}
                  </h3>
                  <p className="text-[11px] font-mono text-[var(--text-muted)] tracking-wider leading-relaxed">
                    {item.focus}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
