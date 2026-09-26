'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Intro() {
  const containerRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 85%',
          },
        }
      );

      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          delay: 0.15,
          scrollTrigger: {
            trigger: contentRef.current,
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
      className="relative section-padding border-t border-[var(--border-subtle)] bg-[var(--bg-primary)] overflow-hidden"
      aria-label="Heart Fitness Manifesto"
    >
      <div className="container-wide">
        {/* Whisper-quiet micro tag */}
        <div className="flex items-center justify-between mb-12 sm:mb-16">
          <span className="text-xs font-mono tracking-[0.25em] text-[var(--text-muted)] uppercase">
            PURPOSE &amp; ETHOS
          </span>
          <span className="text-xs font-mono text-[var(--text-muted)] tracking-wider">
            VIRAR EAST • MH
          </span>
        </div>

        {/* Minimalist Editorial Headline */}
        <div className="mb-16 sm:mb-20">
          <h2
            ref={headingRef}
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--text-primary)] leading-[1.08] max-w-4xl"
          >
            Built for discipline, not distractions.{' '}
            <span className="font-serif italic font-normal text-[var(--text-secondary)] block mt-2 sm:inline sm:mt-0">
              A focused training ground.
            </span>
          </h2>
        </div>

        {/* Spacious Split Layout: Statement & Inset Visual */}
        <div
          ref={contentRef}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pt-8 border-t border-[var(--border-subtle)]"
        >
          <div className="lg:col-span-6 space-y-6">
            <p className="text-lg sm:text-xl text-[var(--text-secondary)] font-light leading-relaxed">
              We replaced crowded layouts and unnecessary gadgets with heavy-gauge Jerai commercial apparatus, certified movement screening, and lakefront cardio decks.
            </p>
            <div className="flex items-center gap-6 pt-4 text-xs font-mono text-[var(--text-muted)] tracking-wider">
              <span>2ND FLOOR M BARIA ESTATE</span>
              <span>•</span>
              <span>LAKE VIEW</span>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative w-full h-[320px] sm:h-[380px] overflow-hidden border border-[var(--border-subtle)] bg-[var(--bg-secondary)] group">
              <Image
                src="/images/facilities/facility_main_floor.png"
                alt="Main gym training floor at Heart Fitness Virar East"
                fill
                className="object-cover grayscale contrast-125 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-xs font-mono text-white/90">
                <span className="tracking-widest uppercase">MAIN TRAINING FLOOR</span>
                <span className="text-[var(--accent-yellow-bright)]">VIRAR EAST</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
