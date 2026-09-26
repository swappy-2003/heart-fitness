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

        {/* Soft directional gradient: shields text on left, leaves the illuminated sign & gym floor 100% visible on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(250,249,246,0.95)] via-[rgba(250,249,246,0.75)] via-30% md:via-[rgba(250,249,246,0.25)] md:via-55% to-transparent to-80%" />

        {/* Delicate bottom blend into next section */}
        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[var(--bg-primary)] via-[rgba(250,249,246,0.5)] to-transparent" />
      </div>

      {/* Main Content Area */}
      <div className="container-wide relative z-10 flex-1 flex flex-col justify-center py-12 sm:py-16">
        <div className="max-w-2xl">
          {/* Minimal Location Marker */}
          <div className="inline-flex items-center gap-2.5 mb-6 sm:mb-8 text-xs font-mono tracking-[0.2em] text-[var(--text-muted)] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-yellow)]" />
            <span>VIRAR EAST • OPP. MANVELPADA TALAV</span>
          </div>

          {/* Giant Editorial Headline */}
          <h1
            ref={headlineRef}
            className="heading-hero text-[var(--text-primary)] mb-6 sm:mb-8 tracking-tighter"
          >
            TRAIN<br />
            <span className="text-[var(--accent-yellow)]">STRONGER.</span>
          </h1>

          {/* De-bloated Human Subtitle */}
          <p
            ref={subtitleRef}
            className="body-large text-[var(--text-secondary)] max-w-lg mb-8 sm:mb-10 font-light leading-relaxed"
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
