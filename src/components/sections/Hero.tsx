'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface HeroProps {
  onIntroActiveChange?: (isActive: boolean) => void;
}

export default function Hero({ onIntroActiveChange }: HeroProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);
  const bottomBarRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const [isMobileIntro, setIsMobileIntro] = useState(false);
  const [isIntroExiting, setIsIntroExiting] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);

  const runEntranceAnimation = useCallback(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
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

  const finishIntro = useCallback(() => {
    if (isIntroExiting) return;
    setIsIntroExiting(true);

    if (typeof window !== 'undefined') {
      localStorage.setItem('hf_mobile_intro_seen', 'true');
    }

    // Set video to muted loop for hero background
    if (videoRef.current) {
      videoRef.current.muted = true;
      setIsMuted(true);
      videoRef.current.loop = true;
      if (videoRef.current.paused || videoRef.current.ended) {
        videoRef.current.play().catch(() => {});
      }
    }

    document.body.style.overflow = '';

    setTimeout(() => {
      setIsMobileIntro(false);
      setIsIntroExiting(false);
      onIntroActiveChange?.(false);
      runEntranceAnimation();
    }, 450);
  }, [isIntroExiting, onIntroActiveChange, runEntranceAnimation]);

  const toggleMute = (e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation();
    }
    if (!videoRef.current) return;

    const nextMuted = !videoRef.current.muted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);

    if (!nextMuted) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current && videoRef.current.duration) {
      const cur = videoRef.current.currentTime;
      const dur = videoRef.current.duration;
      setProgress((cur / dur) * 100);
    }
  };

  const handleVideoEnded = () => {
    if (isMobileIntro) {
      finishIntro();
    }
  };

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const hasSeenIntro = localStorage.getItem('hf_mobile_intro_seen');
    const forceIntro = new URLSearchParams(window.location.search).get('intro') === '1';

    // Helper for testing via browser console: window.resetHeartIntro()
    if (typeof window !== 'undefined') {
      (window as unknown as { resetHeartIntro?: () => void }).resetHeartIntro = () => {
        localStorage.removeItem('hf_mobile_intro_seen');
        sessionStorage.removeItem('hf_loaded');
        window.location.reload();
      };
    }

    if (isMobile && (!hasSeenIntro || forceIntro)) {
      setIsMobileIntro(true);
      onIntroActiveChange?.(true);
      document.body.style.overflow = 'hidden';

      // Ensure video plays
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.muted = true;
        videoRef.current.play().catch(() => {});
      }
    } else {
      setIsMobileIntro(false);
      onIntroActiveChange?.(false);
      runEntranceAnimation();
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [onIntroActiveChange, runEntranceAnimation]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-[var(--bg-primary)] pt-[var(--nav-height)]"
      aria-label="Hero section"
    >
      {/* ========================================================
          MOBILE VIDEO (FIRST-TIME INTRO & AMBIENT HERO BACKGROUND)
          Uses exact same video element so transitions never reload/flicker
          ======================================================== */}
      <div
        className={`md:hidden ${
          isMobileIntro
            ? 'fixed inset-0 z-[9999] bg-black flex flex-col justify-between overflow-hidden'
            : 'absolute inset-0 z-0 overflow-hidden pointer-events-none'
        } ${isIntroExiting ? 'opacity-0 transition-opacity duration-500 ease-out' : 'opacity-100'}`}
      >
        <video
          ref={videoRef}
          src="/images/herovideo.mp4"
          autoPlay
          playsInline
          muted={isMobileIntro ? isMuted : true}
          loop={!isMobileIntro}
          onTimeUpdate={handleTimeUpdate}
          onEnded={handleVideoEnded}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* --- FULL-SCREEN FIRST VISIT INTRO OVERLAY CONTROLS --- */}
        {isMobileIntro && (
          <div className="relative z-10 w-full h-full flex flex-col justify-between p-5 pt-12 pb-8 pointer-events-auto select-none">
            {/* Top Bar: Live Tag & The 2 Requested Action Buttons */}
            <div className="flex items-center justify-between w-full">
              {/* Brand Tag */}
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/15 shadow-md">
                <span className="w-2 h-2 rounded-full bg-[#D9221C] animate-pulse" />
                <span className="text-[10px] font-mono tracking-[0.2em] text-white font-bold uppercase">
                  Heart Fitness
                </span>
              </div>

              {/* Action Buttons: Unmute & Skip */}
              <div className="flex items-center gap-2">
                {/* 1. UNMUTE / MUTE BUTTON */}
                <button
                  type="button"
                  onClick={toggleMute}
                  className="flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-black/70 backdrop-blur-md border border-white/25 text-white text-xs font-semibold tracking-wider uppercase shadow-xl active:scale-95 transition-all hover:bg-black/90 cursor-pointer"
                  aria-label={isMuted ? 'Unmute video audio' : 'Mute video audio'}
                >
                  {isMuted ? (
                    <>
                      <svg className="w-4 h-4 text-[#FFD21A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                      </svg>
                      <span>Unmute</span>
                    </>
                  ) : (
                    <>
                      <svg className="w-4 h-4 text-[#FFD21A] animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                      </svg>
                      <span>Mute</span>
                    </>
                  )}
                </button>

                {/* 2. SKIP BUTTON */}
                <button
                  type="button"
                  onClick={finishIntro}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/35 text-white text-xs font-semibold tracking-wider uppercase shadow-xl active:scale-95 transition-all hover:bg-white/30 cursor-pointer"
                  aria-label="Skip video intro"
                >
                  <span>Skip</span>
                  <span aria-hidden="true" className="text-sm font-mono">→</span>
                </button>
              </div>
            </div>

            {/* Bottom Progress Bar & Information */}
            <div className="space-y-2 max-w-sm w-full mx-auto">
              <div className="flex items-center justify-between text-[11px] font-mono tracking-wider text-white/80">
                <span>Facility First Look</span>
                <span>{Math.round(progress)}%</span>
              </div>
              <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm">
                <div
                  className="h-full bg-gradient-to-r from-[#E5B800] to-[#FFD21A] transition-all duration-150 rounded-full"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>
        )}


      </div>

      {/* ========================================================
          DESKTOP BACKGROUND IMAGE
          High-Fidelity gym interior tailored for wide landscape viewports
          ======================================================== */}
      <div
        className="hidden md:block absolute inset-0 z-0 pointer-events-none overflow-hidden"
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

        {/* Directional gradient shield */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF9F6] via-[#FAF9F6]/95 via-35% md:via-[#FAF9F6]/85 md:via-50% lg:via-[#FAF9F6]/40 lg:via-68% to-transparent" />

        {/* Soft radial backdrop directly behind text column */}
        <div className="absolute -left-10 top-1/4 w-[600px] h-[500px] bg-[#FAF9F6]/75 rounded-full blur-3xl pointer-events-none" />

        {/* Delicate bottom blend */}
        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[var(--bg-primary)] via-[rgba(250,249,246,0.5)] to-transparent" />
      </div>

      {/* ========================================================
          MAIN HERO CONTENT AREA
          ======================================================== */}
      <div
        className={`container-wide relative z-10 flex-1 flex flex-col justify-center py-12 sm:py-16 transition-opacity duration-700 ${
          isMobileIntro ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
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

          {/* Human Subtitle */}
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

      {/* ========================================================
          BOTTOM PROOF STRIP (Floating Frosted HUD Glass)
          ======================================================== */}
      <div
        ref={bottomBarRef}
        className={`container-wide relative z-10 pb-8 sm:pb-12 transition-opacity duration-700 ${
          isMobileIntro ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
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
