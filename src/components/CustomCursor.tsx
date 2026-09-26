'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorTextRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const cursor = cursorRef.current;
    const cursorText = cursorTextRef.current;
    if (!cursor || !cursorText) return;

    const xTo = gsap.quickTo(cursor, 'x', { duration: 0.2, ease: 'power2.out' });
    const yTo = gsap.quickTo(cursor, 'y', { duration: 0.2, ease: 'power2.out' });

    const moveCursor = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    const handleMouseEnter = (e: Event) => {
      const target = e.target as HTMLElement;
      const cursorLabel = target.getAttribute('data-cursor');

      if (cursorLabel) {
        cursor.classList.add('expanded');
        cursorText.textContent = cursorLabel;
        cursorText.style.opacity = '1';
        gsap.to(cursor, {
          width: 100,
          height: 100,
          duration: 0.3,
          ease: 'power3.out',
        });
      } else if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button')) {
        gsap.to(cursor, {
          width: 40,
          height: 40,
          duration: 0.3,
          ease: 'power3.out',
        });
      }
    };

    const handleMouseLeave = () => {
      cursor.classList.remove('expanded');
      cursorText.style.opacity = '0';
      cursorText.textContent = '';
      gsap.to(cursor, {
        width: 16,
        height: 16,
        duration: 0.3,
        ease: 'power3.out',
      });
    };

    document.addEventListener('mousemove', moveCursor);

    const interactiveElements = document.querySelectorAll('a, button, [data-cursor]');
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="custom-cursor"
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <span
        ref={cursorTextRef}
        style={{
          fontSize: '0.625rem',
          fontWeight: 600,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          opacity: 0,
          transition: 'opacity 0.3s',
          color: 'var(--accent-yellow)',
          whiteSpace: 'nowrap',
        }}
      />
    </div>
  );
}
