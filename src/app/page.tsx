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

  return (
    <>
      {/* Branded Editorial Loader */}
      <Loader onComplete={() => setLoaderComplete(true)} />

      {/* Main Experience */}
      <div className={`transition-opacity duration-700 ${loaderComplete ? 'opacity-100' : 'opacity-95'}`}>
        <Navigation />
        <main id="main-content">
          <Hero />
          <Intro />
          <Services />
          <Facilities />
          <Trainers />
          <Reviews />
          <VideoTestimonials />
          <Location />
        </main>
        <Footer />
      </div>
    </>
  );
}
