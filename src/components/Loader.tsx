'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const loaderRef = useRef<HTMLDivElement>(null);
  const brandRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const ecgRef = useRef<SVGPathElement>(null);
  const [show, setShow] = useState(true);

  useEffect(() => {
    // If first-time mobile visitor, skip this loader so they see only the video intro
    if (typeof window !== 'undefined') {
      const isMobile = window.innerWidth < 768;
      const hasSeenIntro = localStorage.getItem('hf_mobile_intro_seen');
      const forceIntro = new URLSearchParams(window.location.search).get('intro') === '1';
      if (isMobile && (!hasSeenIntro || forceIntro)) {
        setShow(false);
        onComplete();
        return;
      }
    }

    // Only play once per session
    if (typeof window !== 'undefined' && sessionStorage.getItem('hf_loaded')) {
      const timer = setTimeout(() => {
        setShow(false);
        onComplete();
      }, 0);
      return () => clearTimeout(timer);
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          setShow(false);
          if (typeof window !== 'undefined') {
            sessionStorage.setItem('hf_loaded', 'true');
          }
          onComplete();
        },
      });

      if (brandRef.current) {
        tl.to(brandRef.current, {
          opacity: 1,
          duration: 0.5,
          ease: 'power3.out',
        });
      }

      if (ecgRef.current) {
        tl.to(
          ecgRef.current,
          {
            strokeDashoffset: 0,
            duration: 0.8,
            ease: 'power2.inOut',
          },
          '-=0.1'
        );
      }

      if (lineRef.current) {
        tl.to(
          lineRef.current,
          {
            width: '100%',
            duration: 0.5,
            ease: 'power3.inOut',
          },
          '-=0.3'
        );
      }

      if (loaderRef.current) {
        tl.to(
          loaderRef.current,
          {
            clipPath: 'inset(0 0 100% 0)',
            duration: 0.6,
            ease: 'power4.inOut',
          },
          '+=0.15'
        );
      }
    }, loaderRef);

    // Guaranteed fallback after 2.2 seconds so it never blocks content
    const timeout = setTimeout(() => {
      setShow(false);
      onComplete();
    }, 2200);

    return () => {
      ctx.revert();
      clearTimeout(timeout);
    };
  }, [onComplete]);

  if (!show) return null;

  return (
    <div
      ref={loaderRef}
      className="loader-screen"
      style={{ clipPath: 'inset(0 0 0% 0)', pointerEvents: 'none' }}
      role="progressbar"
      aria-label="Loading Heart Fitness"
    >
      <div ref={brandRef} className="loader-brand" style={{ opacity: 0 }}>
        <span style={{ color: 'var(--accent-red, #E32620)' }}>HEART</span>{' '}
        <span>FITNESS</span>
      </div>

      <div className="loader-ecg">
        <svg viewBox="0 0 200 40" preserveAspectRatio="none">
          <path
            ref={ecgRef}
            d="M0,20 L40,20 L50,20 L60,5 L70,35 L80,10 L90,30 L100,20 L110,20 L120,20 L130,15 L140,25 L150,20 L200,20"
            stroke="var(--accent-yellow)"
            strokeWidth="2"
            fill="none"
            style={{ strokeDasharray: 400, strokeDashoffset: 400 }}
          />
        </svg>
      </div>

      <div
        ref={lineRef}
        className="loader-line"
        style={{ width: 0 }}
      />
    </div>
  );
}
