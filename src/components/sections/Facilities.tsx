'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface FacilityThumbnail {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  image: string;
}

const facilityThumbnails: FacilityThumbnail[] = [
  {
    id: 'reception',
    number: '01',
    title: 'WELCOME LOUNGE & DESK',
    subtitle: 'Front Desk • Intake Lounge • Member Check-In',
    image: '/images/facilities/facility_reception.png',
  },
  {
    id: 'strength',
    number: '02',
    title: 'JERAI POWER RACKS',
    subtitle: 'Olympic Racks • Wooden Platforms • Bumper Plates',
    image: '/images/facilities/facility_power_rack.png',
  },
  {
    id: 'cardio',
    number: '03',
    title: 'LAKEVIEW CARDIO DECK',
    subtitle: 'Commercial Treadmills • Natural Light • Lake View',
    image: '/images/facilities/facility_cardio_treadmills.png',
  },
  {
    id: 'spin-cables',
    number: '04',
    title: 'SPIN & CABLE ARENA',
    subtitle: 'Spin Studio • Cable Crossover Towers • Cross LEDs',
    image: '/images/facilities/facility_spin_cardio.png',
  },
];

export default function Facilities() {
  const [activeImage, setActiveImage] = useState<string>('/images/facilities/facility_main_floor.png');
  const [activeNumber, setActiveNumber] = useState<string>('00');

  const handleSelectThumbnail = (img: string, num: string) => {
    setActiveImage(img);
    setActiveNumber(num);
  };

  return (
    <section
      id="facilities"
      className="relative py-16 sm:py-24 lg:py-28 bg-[#080808] text-white overflow-hidden border-t border-white/[0.08]"
      aria-label="Heart Fitness Facility Overview"
    >
      <div className="container-wide">
        
        {/* ========================================================
            TOP: HERO FEATURE SHOWCASE BANNER
        ======================================================== */}
        <div className="relative w-full min-h-[460px] sm:min-h-[520px] lg:min-h-[580px] overflow-hidden border border-white/10 group flex items-center">
          {/* Background Image with smooth transition */}
          <div className="absolute inset-0">
            <Image
              src={activeImage}
              alt="Heart Fitness Facility Arena"
              fill
              priority
              className="object-cover object-center transition-all duration-700 ease-out group-hover:scale-[1.02]"
              sizes="100vw"
            />
            {/* Cinematic Gradient Overlays to match reference */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/25 sm:to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
          </div>

          {/* Active Zone Pill (Top Right) */}
          {activeNumber !== '00' && (
            <div className="absolute top-6 right-6 z-20 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 border border-white/20 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[var(--accent-yellow-bright)] animate-pulse" />
              <span className="text-[11px] font-mono tracking-widest uppercase text-white/80">
                VIEWING ZONE {activeNumber}
              </span>
            </div>
          )}

          {/* Content Lockup (Left-aligned, vertical center) */}
          <div className="relative z-10 p-6 sm:p-12 lg:p-16 max-w-2xl">
            {/* Category Micro-Tag */}
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <span className="w-6 h-[2px] bg-[var(--accent-yellow-bright)]" />
              <span className="text-xs sm:text-sm font-mono font-bold tracking-[0.28em] uppercase text-white/90">
                THE FACILITY
              </span>
            </div>

            {/* Monumental Editorial Headline */}
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl xl:text-7xl text-white font-normal leading-[1.05] tracking-tight mb-8 sm:mb-10">
              The space<br />
              where work<br />
              becomes <span className="text-[var(--accent-yellow-bright)] font-semibold">progress.</span>
            </h2>

            {/* View Full Facility Button */}
            <div>
              <Link
                href="/facilities"
                className="inline-flex items-center gap-3 px-6 py-3.5 border border-white/40 hover:border-white bg-black/40 hover:bg-white text-white hover:text-black font-mono text-xs font-bold tracking-[0.16em] uppercase transition-all duration-300 backdrop-blur-sm shadow-xl group/btn"
              >
                <span>VIEW FULL FACILITY</span>
                <span className="text-sm transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5">
                  ↗
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* ========================================================
            BOTTOM: 4-CARD INTERACTIVE GRID
        ======================================================== */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-3 sm:mt-4">
          {facilityThumbnails.map((item) => {
            const isSelected = activeImage === item.image;
            return (
              <div
                key={item.id}
                onClick={() => handleSelectThumbnail(item.image, item.number)}
                className={`relative h-[180px] sm:h-[220px] lg:h-[250px] overflow-hidden group cursor-pointer border transition-all duration-300 ${
                  isSelected
                    ? 'border-white/80 ring-1 ring-white/60 shadow-[0_0_20px_rgba(255,255,255,0.15)]'
                    : 'border-white/10 hover:border-white/40'
                }`}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handleSelectThumbnail(item.image, item.number);
                  }
                }}
                aria-label={`Select ${item.title}`}
              >
                {/* Thumbnail Image */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />

                {/* Ambient Dark Gradient for Legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent transition-opacity duration-300 group-hover:from-black/75" />

                {/* Bottom Left: Title & Subtitle */}
                <div className="absolute bottom-3.5 left-4 z-10 pr-12">
                  <span className="text-xs sm:text-[13px] font-mono font-bold uppercase tracking-wider text-white block group-hover:text-[var(--accent-yellow-bright)] transition-colors">
                    {item.title}
                  </span>
                  <span className="text-[10px] font-mono text-white/60 block mt-0.5 hidden sm:block">
                    {item.subtitle}
                  </span>
                </div>

                {/* Bottom Right: Number Badge (exact match to reference) */}
                <div className="absolute bottom-3 right-4 z-10">
                  <span className="font-mono text-sm sm:text-base font-bold text-white tracking-widest drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] select-none">
                    {item.number}
                  </span>
                </div>

                {/* Top Subtle Click Hint */}
                <div className="absolute top-3 left-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <span className="text-[9px] font-mono tracking-widest uppercase px-2 py-0.5 bg-black/70 border border-white/20 text-white/90">
                    CLICK TO PREVIEW
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
