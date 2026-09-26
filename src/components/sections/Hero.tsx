'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);
  const bottomBarRef = useRef<HTMLDivElement>(null);
  const bgImageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Smooth entrance on mount
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        headlineRef.current,
        { opacity: 0, y: 35 },
        { opacity: 1, y: 0, duration: 0.9, delay: 0.1 }
      )
        .fromTo(
          subtitleRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7 },
          '-=0.5'
        )
        .fromTo(
          actionsRef.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.6 },
          '-=0.4'
        )
        .fromTo(
          bottomBarRef.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.6 },
          '-=0.3'
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-[var(--bg-primary)] pt-[var(--nav-height)]"
      aria-label="Hero section"
    >
      {/* High-Fidelity Gym Background Image */}
      <div
        ref={bgImageRef}
        className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
      >
        <Image
          src="/images/herosection.png"
          alt="Heart Fitness gym interior with Jerai equipment and illuminated brand sign in Virar East"
          fill
          priority
          quality={95}
          className="object-cover object-[75%_center] lg:object-right opacity-100 brightness-[1.02] contrast-[1.08]"
          sizes="100vw"
        />

        {/* Directional gradient shield: solid high-contrast ground on the text zone (left), smoothly revealing the illuminated sign & gym floor on the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF9F6] via-[#FAF9F6]/95 via-35% md:via-[#FAF9F6]/85 md:via-50% lg:via-[#FAF9F6]/40 lg:via-68% to-transparent" />

        {/* Soft radial backdrop directly behind text column for flawless legibility */}
        <div className="absolute -left-10 top-1/4 w-[600px] h-[500px] bg-[#FAF9F6]/75 rounded-full blur-3xl pointer-events-none" />

        {/* Delicate bottom blend into next section */}
        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[var(--bg-primary)] via-[rgba(250,249,246,0.5)] to-transparent" />
      </div>

      {/* Main Content Area */}
      <div className="container-wide relative z-10 flex-1 flex flex-col justify-center py-12 sm:py-16">
        <div className="max-w-2xl">
          {/* Location Marker Badge with crisp contrast */}
          <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-white/90 border border-black/10 backdrop-blur-md mb-6 sm:mb-8 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#E5B800]" />
            <span className="text-[11px] font-mono tracking-[0.2em] text-[#121212] font-semibold uppercase">
              Virar East • Opp. Manvelpada Talav
            </span>
          </div>

          {/* Giant Editorial Headline */}
          <h1
            ref={headlineRef}
            className="heading-hero text-[#121212] mb-6 sm:mb-8 tracking-tighter"
          >
            TRAIN<br />
            <span className="text-[#D4A000]">STRONGER.</span>
          </h1>

          {/* Human Subtitle with bold, crystal-clear readability */}
          <p
            ref={subtitleRef}
            className="body-large text-[#1E1E1E] max-w-lg mb-8 sm:mb-10 font-normal leading-relaxed"
          >
            Virar East&apos;s dedicated strength and conditioning facility. Commercial Jerai apparatus, certified coaching, and lakefront recovery.
          </p>

          {/* Clean Primary Actions */}
          <div
            ref={actionsRef}
            className="flex flex-wrap items-center gap-4 sm:gap-6"
          >
            <a
              href="#facilities"
              className="btn-primary text-xs"
              data-cursor="EXPLORE"
            >
              Explore Facility
              <span className="btn-arrow" aria-hidden="true">→</span>
            </a>

            <Link
              href="/contact"
              className="btn-outline text-xs"
              data-cursor="VISIT"
            >
              Book 1-Day Pass
              <span className="btn-arrow" aria-hidden="true">→</span>
            </Link>

            <a
              href="tel:+917841966244"
              className="hidden sm:inline-flex items-center gap-2 text-xs font-mono text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors pl-2"
            >
              <span>+91 78419 66244</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Proof Strip (Floating Frosted HUD Glass) */}
      <div
        ref={bottomBarRef}
        className="container-wide relative z-10 pb-8 sm:pb-12"
      >
        <div className="bg-[rgba(250,249,246,0.82)] backdrop-blur-md border border-[var(--border-subtle)] p-6 sm:p-8 shadow-sm">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-10">
            <div>
              <span className="label-micro text-[var(--text-muted)] block mb-1.5">
                APPARATUS
              </span>
              <span className="text-xs sm:text-sm font-bold tracking-wider text-[var(--text-primary)] uppercase">
                Jerai Equipped
              </span>
            </div>

            <div>
              <span className="label-micro text-[var(--text-muted)] block mb-1.5">
                COACHING
              </span>
              <span className="text-xs sm:text-sm font-bold tracking-wider text-[var(--text-primary)] uppercase">
                Certified Trainers
              </span>
            </div>

            <div>
              <span className="label-micro text-[var(--text-muted)] block mb-1.5">
                FACILITY
              </span>
              <span className="text-xs sm:text-sm font-bold tracking-wider text-[var(--text-primary)] uppercase">
                Steam & CrossFit
              </span>
            </div>

            <div>
              <span className="label-micro text-[var(--text-muted)] block mb-1.5">
                COMMUNITY
              </span>
              <span className="text-xs sm:text-sm font-bold tracking-wider text-[var(--text-primary)] uppercase">
                4.6 ★ Rating
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
