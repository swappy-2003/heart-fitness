import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Facilities | Heart Fitness Virar East • Jerai Equipped',
  description:
    'Explore the dedicated zones of Heart Fitness Virar East: Jerai free weights, high-performance cardio deck, functional CrossFit arena, and private recovery steam chamber.',
};

const zones = [
  {
    number: '01',
    name: 'JERAI STRENGTH DECK',
    tagline: 'Hypertrophy & Power Station',
    description:
      'Engineered with heavy commercial Jerai racks, flat, incline, and decline Olympic benches, multi-angle cable crossovers, and calibrated free-weights.',
    image: '/images/strength.jpg',
    features: [
      'Jerai Power Cages & Squat Racks',
      'Heavy Dumbbell Suites up to 40kg',
      'Multi-Grip Pull-Up Bars',
      'Plate Loaded Lat & Chest Press',
      'Reinforced Rubber Drop Floors',
    ],
  },
  {
    number: '02',
    name: 'CARDIO DECK',
    tagline: 'Endurance & Aerobic Conditioning',
    description:
      'A dedicated zone equipped with commercial treadmills, cross-trainers, and spin cycles facing the lake, offering controlled aerobic environments.',
    image: '/images/hero.jpg',
    features: [
      'Commercial Shock-Absorbent Treadmills',
      'Dual-Action Elliptical Machines',
      'Precision Spin Bikes',
      'Aerobic Pacing Monitors',
      'Optimized Cross-Ventilation',
    ],
  },
  {
    number: '03',
    name: 'CROSSFIT & FUNCTIONAL RIG',
    tagline: 'High Intensity Conditioning',
    description:
      'Unobstructed open functional floor dedicated to multi-planar movement, high-intensity intervals, sled conditioning, and metabolic complexes.',
    image: '/images/strength.jpg',
    features: [
      'Battle Ropes & Anchors',
      'Full Kettlebell Bell Suites',
      'Plyometric Box Systems',
      'Suspension Resistance Trainers',
      'Agility Cones & Core Sliders',
    ],
  },
  {
    number: '04',
    name: 'STEAM & RECOVERY SUITE',
    tagline: 'Hydrothermal Recovery',
    description:
      'A hygienic thermal steam suite dedicated to flushing muscular metabolites, decompressing joints, and improving post-training cellular repair.',
    image: '/images/hero.jpg',
    features: [
      'Temperature Regulated Steam Chamber',
      'Hygienic Anti-Microbial Tiles',
      'Locker & Changing Spaces',
      'Deep Tissue Decompression',
      'Enhanced Vascular Flush',
    ],
  },
];

export default function FacilitiesPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-[var(--nav-height)] bg-[var(--bg-primary)]">
        {/* Header */}
        <section className="section-padding pb-12 border-b border-[var(--border-subtle)]">
          <div className="container-wide">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-yellow)]" />
              <span className="label-micro text-[var(--accent-yellow)]">FACILITIES & ZONES</span>
              <span className="text-[var(--text-muted)] text-xs">•</span>
              <span className="label-micro text-[var(--text-muted)]">JERAI EQUIPPED</span>
            </div>

            <h1 className="heading-hero text-[var(--text-primary)] mb-8">
              ZONED FOR<br />
              <span className="text-[var(--accent-yellow)]">PERFORMANCE.</span>
            </h1>

            <p className="body-large max-w-3xl text-[var(--text-secondary)]">
              Every section of Heart Fitness is purposefully demarcated to eliminate overcrowding and maintain seamless workout transitions.
            </p>
          </div>
        </section>

        {/* Zones List */}
        <section className="section-padding">
          <div className="container-wide space-y-24">
            {zones.map((zone, index) => (
              <div
                key={zone.number}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center border-b border-[var(--border-subtle)] pb-20 last:border-b-0"
              >
                {/* Visual Frame */}
                <div
                  className={`lg:col-span-6 relative w-full h-[360px] sm:h-[440px] border border-[var(--border-subtle)] overflow-hidden group ${
                    index % 2 === 1 ? 'lg:order-2' : ''
                  }`}
                >
                  <Image
                    src={zone.image}
                    alt={zone.name}
                    fill
                    className="object-cover grayscale contrast-125 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-transparent to-black/30" />
                  <div className="absolute top-4 left-4">
                    <span className="label-micro px-3 py-1 bg-[var(--bg-primary)] text-[var(--accent-yellow)] border border-[var(--border-subtle)] font-mono">
                      ZONE {zone.number}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className={`lg:col-span-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <span className="label-micro text-[var(--accent-yellow)] block mb-2 font-mono">
                    {zone.tagline}
                  </span>
                  <h2 className="heading-sub font-bold text-[var(--text-primary)] mb-4">
                    {zone.name}
                  </h2>
                  <p className="text-base text-[var(--text-secondary)] leading-relaxed mb-8">
                    {zone.description}
                  </p>

                  <div className="space-y-3 pt-6 border-t border-[var(--border-subtle)]">
                    <span className="label-micro text-[var(--text-muted)] block mb-3">KEY APPARATUS</span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {zone.features.map((feat) => (
                        <div key={feat} className="flex items-center gap-2 text-xs font-mono text-[var(--text-secondary)]">
                          <span className="w-1 h-1 bg-[var(--accent-yellow)]" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding pt-0 border-t border-[var(--border-subtle)]">
          <div className="container-wide pt-16 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="heading-sub text-xl font-bold text-[var(--text-primary)] mb-2">
                Inspect The Equipment in Person
              </h3>
              <p className="text-sm text-[var(--text-muted)]">
                Our front desk is open for facility walkthroughs opposite Manvelpada Talav.
              </p>
            </div>
            <Link href="/contact" className="btn-primary text-xs shrink-0">
              Get Directions & Visit
              <span className="btn-arrow" aria-hidden="true">→</span>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
