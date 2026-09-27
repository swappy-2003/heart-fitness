'use client';

import { useState } from 'react';
import Loader from '@/components/Loader';
import Navigation from '@/components/Navigation';
import Hero from '@/components/sections/Hero';
import Intro from '@/components/sections/Intro';
import Services from '@/components/sections/Services';
import Facilities from '@/components/sections/Facilities';
import Trainers from '@/components/sections/Trainers';
import Reviews from '@/components/sections/Reviews';
import VideoTestimonials from '@/components/sections/VideoTestimonials';
import Location from '@/components/sections/Location';
import Footer from '@/components/Footer';

export default function Home() {
  const [loaderComplete, setLoaderComplete] = useState(false);
  const [isMobileIntroActive, setIsMobileIntroActive] = useState(false);

  return (
    <>
      {/* Branded Editorial Loader (Automatically skipped on first-time mobile intro visit) */}
      {!isMobileIntroActive && (
        <Loader onComplete={() => setLoaderComplete(true)} />
      )}

      {/* Main Experience */}
      <div
        className={`transition-opacity duration-700 ${
          loaderComplete ? 'opacity-100' : isMobileIntroActive ? 'opacity-100' : 'opacity-95'
        }`}
      >
        {/* Navigation - Hidden during first-time mobile intro */}
        <div
          className={`transition-opacity duration-500 ${
            isMobileIntroActive ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
        >
          <Navigation />
        </div>

        <main id="main-content">
          <Hero onIntroActiveChange={setIsMobileIntroActive} />

          {/* Page Sections - Hidden during first-time mobile intro, revealed when completed */}
          <div
            className={`transition-opacity duration-700 ${
              isMobileIntroActive ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`}
          >
            <Intro />
            <Services />
            <Facilities />
            <Trainers />
            <Reviews />
            <VideoTestimonials />
            <Location />
          </div>
        </main>

        {/* Footer - Hidden during first-time mobile intro */}
        <div
          className={`transition-opacity duration-500 ${
            isMobileIntroActive ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
        >
          <Footer />
        </div>
      </div>
    </>
  );
}
