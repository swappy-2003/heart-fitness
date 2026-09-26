'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Community() {
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
      id="community"
      className="relative section-padding border-t border-[var(--border-subtle)] bg-[var(--bg-primary)]"
    >
      <div className="container-wide">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 sm:mb-20">
          <div>
            <span className="label-micro flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-yellow)]" />
              06 / COMMUNITY
            </span>
            <h2
              ref={titleRef}
              className="heading-section text-[var(--text-primary)]"
            >
              TRAIN.<br />
              <span className="text-[var(--accent-yellow)]">COMPETE.</span> CONNECT.
            </h2>
          </div>

          <div className="flex items-center gap-8 text-xs font-mono text-[var(--text-muted)]">
            <div>
              <span className="text-xl font-bold text-[var(--text-primary)] block">560+</span>
              <span>POSTS</span>
            </div>
            <div>
              <span className="text-xl font-bold text-[var(--text-primary)] block">1.1K</span>
              <span>FOLLOWERS</span>
            </div>
            <a
              href="https://www.instagram.com/heart_fitness_virar/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline text-xs py-2.5 px-4"
              data-cursor="FOLLOW"
            >
              @heart_fitness_virar ↗
            </a>
          </div>
        </div>

        {/* Clean Photographic Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          <div className="relative h-[280px] sm:h-[340px] overflow-hidden group border border-[var(--border-subtle)] bg-white shadow-sm">
            <Image
              src="/images/facilities/facility_olympic_deadlift.png"
              alt="Olympic deadlift and leg press station at Heart Fitness"
              fill
              className="object-cover grayscale group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
            <span className="absolute bottom-3 left-3 text-xs font-mono font-semibold text-white">
              #DEADLIFT_ZONE
            </span>
          </div>

          <div className="relative h-[280px] sm:h-[340px] overflow-hidden group border border-[var(--border-subtle)] bg-white shadow-sm">
            <Image
              src="/images/facilities/facility_selectorized_legs.png"
              alt="Selectorized biomechanics machines at Heart Fitness"
              fill
              className="object-cover grayscale group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
            <span className="absolute bottom-3 left-3 text-xs font-mono font-semibold text-white">
              #BIOMECHANICS
            </span>
          </div>

          <div className="relative h-[280px] sm:h-[340px] overflow-hidden group border border-[var(--border-subtle)] bg-white shadow-sm flex items-center justify-center p-8">
            <Image
              src="/images/logo.png"
              alt="Heart Fitness emblem"
              fill
              className="object-contain p-8 group-hover:scale-105 transition-all duration-700"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
            <span className="absolute bottom-3 left-3 text-xs font-mono font-semibold text-[var(--text-muted)]">
              #IDENTITY
            </span>
          </div>

          <div className="relative h-[280px] sm:h-[340px] overflow-hidden group border border-[var(--border-subtle)] bg-white shadow-sm">
            <Image
              src="/images/facilities/facility_belt_squat.png"
              alt="Jerai Belt squat and functional setup at Heart Fitness"
              fill
              className="object-cover grayscale group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
            <span className="absolute bottom-3 left-3 text-xs font-mono font-semibold text-white">
              #BELT_SQUAT
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
