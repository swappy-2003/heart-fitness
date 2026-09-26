import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'About Heart Fitness | Luxury Training Club in Virar East',
  description:
    'Discover the philosophy of Heart Fitness, Virar East. Built on authentic strength training, Jerai commercial equipment, certified coaching, and dedicated recovery spaces.',
};

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-[var(--nav-height)] bg-[var(--bg-primary)]">
        {/* Editorial Page Header */}
        <section className="section-padding pb-12 border-b border-[var(--border-subtle)]">
          <div className="container-wide">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-yellow)]" />
              <span className="label-micro text-[var(--accent-yellow)]">ABOUT THE BRAND</span>
              <span className="text-[var(--text-muted)] text-xs">•</span>
              <span className="label-micro text-[var(--text-muted)]">VIRAR EAST, MAHARASHTRA</span>
            </div>

            <h1 className="heading-hero text-[var(--text-primary)] mb-8">
              LOCAL ROOTS.<br />
              <span className="text-[var(--accent-yellow)]">ELITE STANDARDS.</span>
            </h1>

            <p className="body-large max-w-3xl text-[var(--text-secondary)]">
              Heart Fitness was established on the 2nd floor of M Baria Estate with an uncompromising premise: to provide Virar East with an authentic athletic training ground free from gimmicks, overcrowded clutter, and generic gym templates.
            </p>
          </div>
        </section>

        {/* Narrative & Visual Split */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* Left narrative */}
              <div className="lg:col-span-7 space-y-8">
                <div>
                  <span className="label-micro text-[var(--accent-yellow)] block mb-2">01 / THE ENVIRONMENT</span>
                  <h2 className="heading-sub font-bold text-[var(--text-primary)] mb-4">
                    Facing Manvelpada Talav
                  </h2>
                  <p className="text-base text-[var(--text-secondary)] leading-relaxed mb-4">
                    Positioned directly opposite Manvelpada Lake, the facility benefits from natural light, cross ventilation, and open sightlines. Climbing up to the second floor of M Baria Estate, the transition is instantaneous — shifting from the bustling city rhythm into an intense, quiet sanctuary of focused physical training.
                  </p>
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                    Every rack, platform, and station is calibrated with sufficient perimeter clearance so lifters never feel cramped or rushed between sets.
                  </p>
                </div>

                <div className="pt-8 border-t border-[var(--border-subtle)]">
                  <span className="label-micro text-[var(--accent-yellow)] block mb-2">02 / THE EQUIPMENT</span>
                  <h2 className="heading-sub font-bold text-[var(--text-primary)] mb-4">
                    Jerai Fitness Commercial Rig
                  </h2>
                  <p className="text-base text-[var(--text-secondary)] leading-relaxed mb-4">
                    Rather than filling floor space with light consumer-grade gadgets, Heart Fitness invested in heavy-gauge Jerai apparatus. Jerai&apos;s biomechanically accurate lever arms, competition benches, and smooth cable pull stations provide the progressive resistance needed for serious athletic development.
                  </p>
                </div>

                <div className="pt-8 border-t border-[var(--border-subtle)]">
                  <span className="label-micro text-[var(--accent-yellow)] block mb-2">03 / COACHING PHILOSOPHY</span>
                  <h2 className="heading-sub font-bold text-[var(--text-primary)] mb-4">
                    Form Before Load
                  </h2>
                  <p className="text-base text-[var(--text-secondary)] leading-relaxed">
                    Our certified trainers prioritize joint integrity, postural stability, and sustainable movement patterns. We do not promote unsustainable crash diets or artificial promises. Consistency, form mastery, and progressive overload form the core of every training session.
                  </p>
                </div>
              </div>

              {/* Right Visual Details */}
              <div className="lg:col-span-5 space-y-8">
                <div className="relative w-full h-[400px] border border-[var(--border-subtle)] overflow-hidden">
                  <Image
                    src="/images/hero.jpg"
                    alt="Heart Fitness interior"
                    fill
                    className="object-cover grayscale contrast-125"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90" />
                  <div className="absolute bottom-6 left-6">
                    <span className="label-micro text-[var(--accent-yellow-bright)] block mb-1">FACILITY FLOOR</span>
                    <span className="text-lg font-bold text-white uppercase">
                      2nd Floor, M Baria Estate
                    </span>
                  </div>
                </div>

                {/* Key Facts Summary */}
                <div className="border border-[var(--border-medium)] bg-white p-8 space-y-6 shadow-sm">
                  <span className="label-micro text-[var(--accent-yellow)] block pb-3 border-b border-[var(--border-subtle)]">
                    FACILITY BLUEPRINT
                  </span>
                  <div>
                    <span className="label-micro text-[var(--text-muted)] block mb-1">PRIMARY LOCATION</span>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">
                      Virar East, Vasai-Virar, Maharashtra
                    </p>
                  </div>
                  <div>
                    <span className="label-micro text-[var(--text-muted)] block mb-1">KEY AMENITIES</span>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">
                      Jerai Weight Floor, Cardio Arena, CrossFit Rig, Steam Suite
                    </p>
                  </div>
                  <div>
                    <span className="label-micro text-[var(--text-muted)] block mb-1">COACHING</span>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">
                      Certified Personal & Functional Trainers
                    </p>
                  </div>
                  <div className="pt-4 border-t border-[var(--border-subtle)]">
                    <Link href="/contact" className="btn-primary w-full justify-center text-xs">
                      Schedule a Facility Visit
                      <span className="btn-arrow" aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
