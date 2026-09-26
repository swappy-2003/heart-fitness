'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
  const containerRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

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

  const directionsUrl =
    "https://www.google.com/maps/dir/?api=1&destination=Heart+Fitness+M+Baria+Estate+Opposite+Manvelpada+Talav+Virar+East+Maharashtra+401305";

  const channels = [
    {
      num: '01',
      label: 'PHONE',
      value: '078419 66244',
      action: 'Call Front Desk',
      href: 'tel:+917841966244',
      external: false,
    },
    {
      num: '02',
      label: 'EMAIL',
      value: 'heartfitness322@gmail.com',
      action: 'Send Message',
      href: 'mailto:heartfitness322@gmail.com',
      external: false,
    },
    {
      num: '03',
      label: 'INSTAGRAM',
      value: '@heart_fitness_virar',
      action: 'Join Community',
      href: 'https://www.instagram.com/heart_fitness_virar/',
      external: true,
    },
    {
      num: '04',
      label: 'LOCATION',
      value: 'Opp. Manvelpada Talav, Virar East',
      action: 'Get Directions',
      href: directionsUrl,
      external: true,
    },
  ];

  return (
    <section
      ref={containerRef}
      id="contact"
      className="relative section-padding border-t border-[var(--border-subtle)] bg-[var(--bg-primary)] overflow-hidden"
    >
      <div className="container-wide">
        {/* Category Header */}
        <div className="flex items-center justify-between mb-16 sm:mb-20">
          <span className="label-micro flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-yellow)]" />
            09 / ENQUIRIES & ADMISSIONS
          </span>
          <span className="label-micro font-mono text-[var(--accent-yellow)]">
            READY TO BEGIN
          </span>
        </div>

        {/* Editorial Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left Column: Bold Typography Statement */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <h2
                ref={titleRef}
                className="heading-section text-[var(--text-primary)] leading-[0.92] mb-8"
              >
                LET&apos;S<br />
                <span className="text-[var(--accent-yellow)]">TRAIN.</span>
              </h2>

              <p className="body-large text-[var(--text-secondary)] mb-10 max-w-md font-light leading-relaxed">
                Step onto the floor for an architectural tour, consult with certified coaches,
                or secure your training slot facing Manvelpada Lake.
              </p>
            </div>

            <div className="flex items-center gap-3 pt-6 border-t border-[var(--border-subtle)]">
              <span className="w-2 h-2 rounded-full bg-[var(--accent-green)] animate-pulse" />
              <span className="label-micro font-mono text-[var(--text-primary)]">
                MON – SAT: 6:00 AM – 10:30 PM • VIRAR EAST
              </span>
            </div>
          </div>

          {/* Right Column: Clean Architectural Channel List (No Clunky Boxes) */}
          <div className="lg:col-span-7 border-t border-[var(--border-subtle)]">
            {channels.map((channel) => (
              <a
                key={channel.num}
                href={channel.href}
                target={channel.external ? '_blank' : undefined}
                rel={channel.external ? 'noopener noreferrer' : undefined}
                className="group py-8 sm:py-10 border-b border-[var(--border-subtle)] flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all duration-300 hover:pl-3"
              >
                <div className="flex items-baseline gap-6 sm:gap-10">
                  <span className="text-xs font-mono text-[var(--text-muted)] group-hover:text-[var(--accent-yellow)] transition-colors">
                    {channel.num} / {channel.label}
                  </span>
                  <span className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-[var(--text-primary)] group-hover:text-[var(--accent-yellow)] transition-colors">
                    {channel.value}
                  </span>
                </div>

                <div className="flex items-center gap-3 sm:self-center pl-16 sm:pl-0 text-xs font-mono font-medium text-[var(--text-muted)] group-hover:text-[var(--text-primary)] transition-colors">
                  <span>{channel.action}</span>
                  <span className="text-base text-[var(--accent-yellow)] group-hover:translate-x-1.5 transition-transform duration-300">
                    ↗
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
