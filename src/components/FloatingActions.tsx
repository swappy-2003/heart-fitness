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
        className={`group relative pointer-events-auto flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#121212]/90 backdrop-blur-md border border-white/20 text-white shadow-xl hover:bg-white hover:text-black hover:border-white transition-all duration-300 cursor-pointer ${
          showTop
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-3 pointer-events-none'
        }`}
      >
        <span className="text-base sm:text-lg transition-transform duration-300 group-hover:-translate-y-0.5">
          ↑
        </span>

        {/* Hover Tooltip */}
        <span className="absolute right-full mr-3 px-2.5 py-1 rounded bg-black/90 text-white text-[11px] font-mono tracking-wider uppercase whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg border border-white/10 hidden sm:block">
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
          className="w-6 h-6 sm:w-7 sm:h-7 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12.031 2C6.516 2 2.03 6.484 2.03 12c0 1.954.563 3.781 1.531 5.344L2.03 22l4.813-1.484A9.914 9.914 0 0 0 12.03 22c5.516 0 10-4.484 10-10 0-5.516-4.484-10-10-10zm0 1.844c4.516 0 8.156 3.64 8.156 8.156 0 4.516-3.64 8.156-8.156 8.156a8.082 8.082 0 0 1-4.281-1.219l-.313-.187-2.844.89.906-2.765-.2-.328A8.077 8.077 0 0 1 3.875 12c0-4.516 3.64-8.156 8.156-8.156zm-3.563 4.25c-.218 0-.468.031-.671.265-.204.235-.8 0.782-.8 1.907s.812 2.218.937 2.375c.125.156 1.563 2.453 3.828 3.344 1.89.75 2.281.609 2.688.562.406-.046 1.312-.531 1.5-.1.047.187-.516.187-.953 0-.156-.094-.313-.313-.531-.219-.219-1.297-.64-1.516-.75-.219-.109-.375-.156-.531.156-.156.313-.609.75-.75.907-.14.156-.281.171-.5.062-.219-.109-.922-.344-1.75-1.078-.64-.578-1.078-1.297-1.203-1.516-.125-.218-.016-.343.094-.453.11-.11.234-.281.344-.422.11-.14.156-.234.234-.39.078-.157.031-.297-.015-.407-.047-.11-.5-.1.219-1.375-1.688-.125-.156-.25-.156-.469-.156z" />
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
