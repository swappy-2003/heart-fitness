'use client';

import { useState, useEffect } from 'react';

export default function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 350);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl =
    'https://wa.me/917841966244?text=Hi%20Heart%20Fitness!%20I%20would%20like%20to%20inquire%20about%20membership%20and%20rates.';

  return (
    <div
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-[900] flex flex-col items-end gap-3 pointer-events-none select-none"
      aria-label="Floating Quick Actions"
    >
      {/* ========================================================
          1. BACK TO TOP BUTTON (Appears on scroll)
      ======================================================== */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll back to top"
        style={{ backgroundColor: '#FFD21A' }}
        className={`group relative pointer-events-auto flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full !bg-[#FFD21A] text-black border border-black/15 shadow-[0_4px_22px_rgba(255,210,26,0.45)] hover:!bg-[#121212] hover:text-[#FFD21A] hover:border-black hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer ${
          showTop
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-3 pointer-events-none'
        }`}
      >
        <svg
          className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-0.5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M12 19V5M5 12l7-7 7 7" />
        </svg>

        {/* Hover Tooltip */}
        <span className="absolute right-full mr-3 px-2.5 py-1 rounded bg-black/95 text-white text-[11px] font-mono tracking-wider uppercase whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg border border-white/10 hidden sm:block">
          Top
        </span>
      </button>

      {/* ========================================================
          2. FLOATING WHATSAPP BUTTON (Always accessible)
      ======================================================== */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Heart Fitness Front Desk on WhatsApp"
        className="group relative pointer-events-auto flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-white shadow-[0_4px_22px_rgba(37,211,102,0.45)] hover:scale-105 hover:shadow-[0_6px_28px_rgba(37,211,102,0.6)] transition-all duration-300 cursor-pointer"
      >
        {/* WhatsApp Icon */}
        <svg
          className="w-7 h-7 sm:w-8 sm:h-8"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* White Speech Bubble */}
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2.05 21.95l4.908-1.287A9.956 9.956 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"
            fill="#FFFFFF"
          />
          {/* WhatsApp Green Phone Receiver */}
          <path
            d="M17.5 14.38c-.28-.14-1.65-.81-1.9-.9-.26-.1-.44-.14-.63.14-.19.28-.72.9-.88 1.09-.16.19-.33.21-.61.07-.28-.14-1.18-.43-2.25-1.38-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.33.42-.49.14-.16.19-.28.28-.47.09-.19.05-.35-.02-.49-.07-.14-.63-1.52-.86-2.08-.23-.55-.46-.47-.63-.48-.16-.01-.35-.01-.54-.01-.19 0-.49.07-.75.35-.26.28-.98.96-.98 2.34s1 2.71 1.14 2.9c.14.19 1.97 3.01 4.77 4.22.67.29 1.19.46 1.59.59.67.21 1.28.18 1.76.11.54-.08 1.65-.67 1.88-1.32.23-.65.23-1.21.16-1.33-.07-.12-.26-.19-.54-.33z"
            fill="#25D366"
          />
        </svg>

        {/* Pulsing Emerald Dot */}
        <span className="absolute top-0 right-0 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-60"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-white border-2 border-[#25D366]"></span>
        </span>

        {/* Hover Tooltip */}
        <span className="absolute right-full mr-3 px-3 py-1.5 rounded-full bg-black/90 text-white text-xs font-mono tracking-wider whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-xl border border-white/10 hidden sm:flex items-center gap-1.5">
          <span>Chat with Front Desk</span>
          <span className="text-[#25D366]">●</span>
        </span>
      </a>
    </div>
  );
}
