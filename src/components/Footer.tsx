'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'About', href: '/about' },
    { label: 'Facilities', href: '/facilities' },
    { label: 'Programs', href: '/programs' },
    { label: 'Trainers', href: '/trainers' },
    { label: 'Contact', href: '/contact' },
  ];

  const socialLinks = [
    { label: 'Instagram', href: 'https://www.instagram.com/heart_fitness_virar/' },
    { label: 'WhatsApp', href: 'https://wa.me/917841966244' },
    {
      label: 'Google Maps',
      href: 'https://www.google.com/maps/dir/?api=1&destination=Heart+Fitness+M+Baria+Estate+Opposite+Manvelpada+Talav+Virar+East+Maharashtra+401305',
    },
  ];

  return (
    <footer
      className="relative bg-[#080808] text-[#FAF9F6] border-t border-white/[0.08] pt-20 sm:pt-28 pb-12 sm:pb-16 overflow-hidden"
      role="contentinfo"
      aria-label="Footer"
    >
      <div className="container-wide relative z-10">
        
        {/* ========================================================
            TOP ROW: BRAND LOCKUP & EDITORIAL SLOGAN
        ======================================================== */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8 pb-12 sm:pb-16">
          {/* Brand */}
          <Link href="/" className="inline-flex items-center gap-3.5 group">
            <Image
              src="/images/logo.png"
              alt="Heart Fitness Emblem"
              width={42}
              height={42}
              className="rounded-full object-contain group-hover:scale-105 transition-transform duration-300 ring-1 ring-white/10"
            />
            <div>
              <span className="text-sm sm:text-base font-bold tracking-[0.2em] uppercase text-white block">
                HEART FITNESS
              </span>
              <span className="text-[11px] font-mono tracking-widest text-white/40 uppercase block mt-0.5">
                VIRAR EAST, MAHARASHTRA
              </span>
            </div>
          </Link>

          {/* Editorial Slogan */}
          <div className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white font-normal leading-snug sm:text-right">
            Train your body.<br />
            <span className="text-[var(--accent-yellow-bright)] italic font-light">
              Build your heart.
            </span>
          </div>
        </div>

        {/* Thin Divider Line */}
        <div className="w-full h-px bg-white/[0.08] mb-12 sm:mb-16" />

        {/* ========================================================
            4 CLEAN, SPACIOUS DIRECTORY COLUMNS
        ======================================================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-14">
          
          {/* Column 1: LOCATION */}
          <div>
            <span className="text-[11px] font-mono tracking-[0.22em] text-white/40 uppercase block mb-4">
              LOCATION
            </span>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-light mb-4">
              2nd Floor, M Baria Estate,<br />
              Opposite Manvelpada Talav,<br />
              Virar East, Maharashtra 401305
            </p>
            <div className="text-[11px] font-mono text-white/40 leading-relaxed">
              <span>Mon – Sat: 06:00 – 22:30</span><br />
              <span>Sun: 07:00 – 13:00</span>
            </div>
          </div>

          {/* Column 2: EXPLORE */}
          <div>
            <span className="text-[11px] font-mono tracking-[0.22em] text-white/40 uppercase block mb-4">
              EXPLORE
            </span>
            <ul className="space-y-2.5 text-xs sm:text-sm text-white/70">
              {navLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-[var(--accent-yellow-bright)] transition-colors inline-block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: CONNECT */}
          <div>
            <span className="text-[11px] font-mono tracking-[0.22em] text-white/40 uppercase block mb-4">
              CONNECT
            </span>
            <ul className="space-y-2.5 text-xs sm:text-sm text-white/70">
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[var(--accent-yellow-bright)] transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>{social.label}</span>
                    <span className="text-[10px] text-white/40">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: INQUIRIES & TOP */}
          <div className="flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-mono tracking-[0.22em] text-white/40 uppercase block mb-4">
                INQUIRIES
              </span>
              <div className="space-y-2 mb-6">
                <div>
                  <a
                    href="tel:+917841966244"
                    className="text-sm sm:text-base font-mono font-medium text-white hover:text-[var(--accent-yellow-bright)] transition-colors inline-block"
                  >
                    +91 78419 66244
                  </a>
                </div>
                <div>
                  <a
                    href="mailto:heartfitness322@gmail.com"
                    className="text-xs font-mono text-white/60 hover:text-[var(--accent-yellow-bright)] transition-colors break-all inline-block"
                  >
                    heartfitness322@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Back to Top */}
            <div className="pt-2 flex justify-start sm:justify-end">
              <button
                onClick={scrollToTop}
                aria-label="Scroll back to top"
                style={{ backgroundColor: '#FFD21A' }}
                className="bg-[#FFD21A] text-black hover:bg-white text-xs font-mono font-bold px-4 py-2 rounded-full flex items-center gap-2 transition-all duration-300 cursor-pointer shadow-[0_2px_14px_rgba(255,210,26,0.35)] hover:scale-105"
              >
                <span className="font-bold">↑</span>
                <span>TOP</span>
              </button>
            </div>
          </div>

        </div>

        {/* ========================================================
            SUB-FOOTER BAR
        ======================================================== */}
        <div className="border-t border-white/[0.08] pt-8 mt-16 sm:mt-20 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-white/40">
          <div>
            © {currentYear} Heart Fitness. All rights reserved.
          </div>

          {/* Built with 99Labs Badge */}
          <a
            href="https://99labs.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Built with love by 99Labs"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 bg-white/[0.04] hover:bg-white/[0.08] hover:border-white/30 text-white/90 hover:text-white transition-all duration-300 font-sans text-xs tracking-normal shadow-sm group hover:scale-[1.02]"
          >
            <span>Built with</span>
            <svg
              className="w-3.5 h-3.5 text-[#ff4b72] fill-[#ff4b72]/20 group-hover:scale-110 group-hover:fill-[#ff4b72] transition-all duration-300"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
            <span>by</span>
            <span className="font-semibold bg-gradient-to-r from-[#00b4d8] to-[#2dd4bf] bg-clip-text text-transparent">
              99Labs
            </span>
          </a>

          <div>
            Virar East, Maharashtra • 19.4678° N, 72.8258° E
          </div>
        </div>

      </div>
    </footer>
  );
}
