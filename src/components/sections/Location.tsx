'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Location() {
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

  const googleMapsEmbedUrl =
    'https://maps.google.com/maps?q=Heart+Fitness+M+Baria+Estate+Manvelpada+Talav+Virar+East&t=&z=16&ie=UTF8&iwloc=&output=embed';

  const directionsUrl =
    'https://www.google.com/maps/dir/?api=1&destination=Heart+Fitness+M+Baria+Estate+Opposite+Manvelpada+Talav+Virar+East+Maharashtra+401305';

  return (
    <section
      ref={containerRef}
      id="location"
      className="relative section-padding border-t border-[var(--border-subtle)] bg-[var(--bg-primary)] overflow-hidden"
      aria-label="Location and Front Desk"
    >
      <div className="container-wide">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 sm:mb-20">
          <div>
            <span className="text-xs font-mono tracking-[0.25em] text-[var(--text-muted)] uppercase block mb-3">
              LOCATION &amp; VISITS
            </span>
            <h2
              ref={titleRef}
              className="heading-section text-[var(--text-primary)]"
            >
              FIND YOUR<br />
              <span className="text-[var(--accent-yellow)]">TRAINING GROUND.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm sm:text-base text-[var(--text-secondary)] font-light leading-relaxed">
            Elevated on the 2nd Floor of M Baria Estate, directly facing Manvelpada Lake in Virar East.
          </p>
        </div>

        {/* Clean Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Pure Architectural Information */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="border-t border-[var(--border-medium)] divide-y divide-[var(--border-medium)]">
              {/* Address */}
              <div className="py-7 sm:py-8 flex flex-col gap-3">
                <span className="text-xs font-mono text-[var(--text-muted)] tracking-widest block uppercase">
                  01 / ADDRESS &amp; LANDMARK
                </span>
                <p className="text-base sm:text-lg font-bold text-[var(--text-primary)] leading-relaxed">
                  2nd Floor, M Baria Estate,<br />
                  Opposite Manvelpada Talav,<br />
                  Virar East, Maharashtra 401305
                </p>
                <span className="text-xs text-[var(--text-muted)] block pt-1">
                  Overlooking Manvelpada Lake • 5 mins from Virar Station
                </span>
              </div>

              {/* Hours */}
              <div className="py-7 sm:py-8 flex flex-col gap-3">
                <span className="text-xs font-mono text-[var(--text-muted)] tracking-widest block uppercase">
                  02 / TRAINING HOURS
                </span>
                <div className="flex flex-col gap-2 text-sm font-mono text-[var(--text-primary)]">
                  <p className="font-medium">Monday – Saturday: 06:00 AM – 10:30 PM</p>
                  <p className="text-[var(--text-muted)]">Sunday: 07:00 AM – 01:00 PM</p>
                </div>
              </div>

              {/* Front Desk & Direct Communications */}
              <div className="py-7 sm:py-8 flex flex-col gap-3">
                <span className="text-xs font-mono text-[var(--text-muted)] tracking-widest block uppercase">
                  03 / DIRECT RECEPTION
                </span>
                <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-1">
                  <a
                    href="tel:+917841966244"
                    className="text-lg sm:text-xl font-mono font-bold text-[var(--text-primary)] hover:text-[var(--accent-yellow)] transition-colors"
                  >
                    +91 78419 66244
                  </a>
                  <a
                    href="https://wa.me/917841966244"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono px-3.5 py-1.5 bg-[var(--accent-yellow-bright)] text-black rounded-full font-bold hover:bg-black hover:text-white transition-all shadow-sm"
                  >
                    WhatsApp ↗
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8 sm:pt-10">
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <span>Open Google Maps</span>
                <span className="btn-arrow" aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          {/* Right Column: Architectural Map Viewport */}
          <div className="lg:col-span-7">
            <div className="relative w-full h-[420px] sm:h-[480px] border border-[var(--border-subtle)] bg-[var(--bg-secondary)] overflow-hidden shadow-sm">
              <iframe
                title="Heart Fitness Location Map"
                src={googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  filter: 'contrast(102%) grayscale(15%)',
                }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Satellite Coordinates Badge */}
              <div className="absolute top-4 left-4 bg-white/95 border border-[var(--border-subtle)] px-3.5 py-1.5 backdrop-blur-sm pointer-events-none">
                <span className="text-[11px] text-[var(--text-primary)] font-mono tracking-wider">
                  19.4678° N, 72.8258° E • LEVEL 2
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
