'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Equipment() {
  const containerRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
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
      className="relative section-padding bg-[#111111] text-[#FAF9F6] overflow-hidden border-y border-[rgba(255,255,255,0.1)]"
    >
      <div className="container-wide">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 sm:mb-20">
          <div>
            <span className="label-micro flex items-center gap-2 text-[#A3A39E] mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-yellow)]" />
              03 / APPARATUS
            </span>
            <h2
              ref={titleRef}
              className="heading-section text-[#FAF9F6]"
            >
              BUILT<br />
              <span className="text-[var(--accent-yellow-bright)]">TO PERFORM.</span>
            </h2>
          </div>

          <div className="text-right">
            <span className="text-xl sm:text-2xl font-bold tracking-tight text-white block">
              JERAI FITNESS
            </span>
            <span className="text-xs font-mono text-[#A3A39E] tracking-widest uppercase">
              Official Commercial Setup
            </span>
          </div>
        </div>

        {/* Cinematic Equipment Full-width Visual */}
        <div
          ref={imageWrapperRef}
          className="relative w-full h-[60vh] min-h-[420px] max-h-[700px] overflow-hidden border border-[rgba(255,255,255,0.15)] group"
          data-cursor="JERAI"
        >
          <Image
            src="/images/strength.jpg"
            alt="Jerai strength equipment at Heart Fitness Virar East"
            fill
            className="object-cover grayscale contrast-125 transition-transform duration-1000 group-hover:scale-105"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent opacity-80" />

          {/* Minimal Bottom Overlay Bar */}
          <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 sm:right-10 flex items-end justify-between">
            <div>
              <span className="label-micro text-[var(--accent-yellow-bright)] block mb-1">
                HEAVY RESISTANCE
              </span>
              <p className="text-lg sm:text-2xl font-bold text-[#FAF9F6] uppercase">
                Olympic Racks & Free Weights
              </p>
            </div>
            <span className="text-xs font-mono text-[#A3A39E] hidden sm:block">
              VIRAR EAST • 2ND FLOOR
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
