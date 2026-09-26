'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const verifiedFeedback = [
  {
    quote:
      'Very spacious gym with well-maintained Jerai machines. The steam facility after a heavy leg workout is definitely the best feature in Virar East.',
    author: 'Verified Member',
    source: 'Google Review',
    rating: '5.0',
  },
  {
    quote:
      'Certified trainers who actually correct your form rather than just standing around. Good ventilation, supportive atmosphere, and proper free-weight section.',
    author: 'Verified Member',
    source: 'Google Review',
    rating: '5.0',
  },
  {
    quote:
      'Opposite Manvelpada Talav makes it easy to locate. Dedicated areas for cardio and CrossFit conditioning. Consistent cleanliness maintained throughout.',
    author: 'Verified Member',
    source: 'Google Review',
    rating: '4.8',
  },
];

export default function Reviews() {
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

  return (
    <section
      ref={containerRef}
      id="reviews"
      className="relative section-padding border-t border-[var(--border-subtle)] bg-[var(--bg-secondary)] overflow-hidden"
      aria-label="Member Reviews"
    >
      <div className="container-wide">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8 mb-16 sm:mb-20">
          <div>
            <span className="text-xs font-mono tracking-[0.25em] text-[var(--text-muted)] uppercase block mb-3">
              MEMBER TRANSCRIPTS
            </span>
            <h2
              ref={titleRef}
              className="heading-section text-[var(--text-primary)]"
            >
              PROVEN<br />
              <span className="text-[var(--accent-yellow)]">RESULTS.</span>
            </h2>
          </div>

          {/* Clean Typographic Rating */}
          <div className="flex items-baseline gap-4 sm:gap-6 self-start sm:self-end">
            <span className="text-5xl sm:text-6xl font-extrabold tracking-tighter text-[var(--text-primary)] font-mono">
              4.6
            </span>
            <div className="border-l border-[var(--border-medium)] pl-4">
              <div className="text-[var(--accent-yellow)] text-sm tracking-widest mb-1">
                ★★★★★
              </div>
              <span className="text-xs font-mono text-[var(--text-muted)] block tracking-wider">
                120+ VERIFIED LOCAL REVIEWS
              </span>
            </div>
          </div>
        </div>

        {/* Clean Editorial Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {verifiedFeedback.map((item, index) => (
            <div
              key={index}
              className="group flex flex-col justify-between pt-6 border-t border-[var(--border-medium)] hover:border-[var(--accent-yellow)] transition-all duration-300"
            >
              <div>
                <div className="text-xs font-mono text-[var(--accent-yellow)] font-bold mb-4">
                  {item.rating} ★
                </div>

                {/* Editorial Quote */}
                <p className="text-base sm:text-lg text-[var(--text-secondary)] font-light leading-relaxed mb-8">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Attribution */}
              <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs font-mono text-[var(--text-muted)]">
                <span className="font-semibold text-[var(--text-primary)]">
                  {item.author}
                </span>
                <span>{item.source}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
