'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import gsap from 'gsap';

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/facilities', label: 'Facilities' },
  { href: '/programs', label: 'Programs' },
  { href: '/trainers', label: 'Trainers' },
  { href: '/contact', label: 'Contact' },
];

export default function Navigation() {
  const navRef = useRef<HTMLElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuLinksRef = useRef<HTMLAnchorElement[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      gsap.fromTo(
        menuRef.current,
        { clipPath: 'inset(0 0 100% 0)' },
        { clipPath: 'inset(0 0 0% 0)', duration: 0.6, ease: 'power4.inOut' }
      );
      gsap.fromTo(
        menuLinksRef.current,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out', stagger: 0.08, delay: 0.3 }
      );
    } else {
      document.body.style.overflow = '';
    }
  }, [isMenuOpen]);

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 ${
          isScrolled ? 'nav-blur' : ''
        }`}
        style={{ height: 'var(--nav-height)' }}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container-wide h-full flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 relative z-[1001]"
            aria-label="Heart Fitness - Home"
          >
            <Image
              src="/images/logo.png"
              alt="Heart Fitness Logo"
              width={44}
              height={44}
              className="rounded-full object-contain"
              priority
            />
            <span className="text-sm font-bold tracking-[0.15em] uppercase text-[var(--text-primary)] hidden sm:block">
              Heart Fitness
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="label-small text-[var(--text-primary)] hover:text-[var(--accent-yellow)] relative group transition-colors"
              >
                {link.label}
                <span
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--accent-yellow)] transition-all duration-300 group-hover:w-full"
                  aria-hidden="true"
                />
              </Link>
            ))}
            <Link
              href="/contact"
              className="btn-primary text-xs py-2.5 px-5"
            >
              Enquire
              <span className="btn-arrow" aria-hidden="true">→</span>
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden relative z-[1001] w-10 h-10 flex flex-col items-center justify-center gap-1.5 text-[var(--text-primary)]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            <span
              className={`block w-6 h-px bg-current transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-[3.5px]' : ''
              }`}
            />
            <span
              className={`block w-6 h-px bg-current transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-[3.5px]' : ''
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="fixed inset-0 z-[999] bg-[var(--bg-primary)] flex flex-col items-center justify-center"
          style={{ clipPath: 'inset(0 0 100% 0)' }}
        >
          <div className="flex flex-col items-center gap-6">
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                ref={(el) => { if (el) menuLinksRef.current[i] = el; }}
                className="heading-sub text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              ref={(el) => { if (el) menuLinksRef.current[navLinks.length] = el; }}
              className="btn-primary mt-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Enquire Now
              <span className="btn-arrow" aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="absolute bottom-10 text-center">
            <p className="label-micro mb-2">Virar East, Maharashtra</p>
            <a href="tel:+917841966244" className="label-small block">
              078419 66244
            </a>
          </div>
        </div>
      )}
    </>
  );
}
