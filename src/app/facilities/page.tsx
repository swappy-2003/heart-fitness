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
    name: 'JERAI POWER RACKS & FREE WEIGHTS',
    tagline: 'Hypertrophy & Heavy Resistance',
    description:
      'Engineered with heavy commercial Jerai power cages, Olympic lifting platform with wooden deadlift insert, multi-height barbell safeties, and calibrated Olympic bumper plates.',
    image: '/images/facilities/facility_power_rack.png',
    features: [
      'Jerai Heavy Power Cages & J-Hooks',
      'Olympic Wooden Deadlift Platform',
      'Calibrated Bumper Plates & Barbells',
      'Multi-Grip Integrated Pull-Up Bars',
      'Heavy Rubber Impact Flooring',
    ],
  },
  {
    number: '02',
    name: 'LAKEVIEW CARDIO DECK',
    tagline: 'Endurance & Aerobic Conditioning',
    description:
      'A dedicated panoramic aerobic deck lined with commercial Jerai treadmills facing expansive floor-to-ceiling windows overlooking the lake, providing natural daylight training.',
    image: '/images/facilities/facility_cardio_treadmills.png',
    features: [
      'Commercial Shock-Absorbent Treadmills',
      'Natural Sunlight Lakeview Windows',
      'Real-Time Heart Rate & Pace Tracking',
      'Cross-Ventilated Air Flow',
      'Low-Impact Joint Friendly Running Decks',
    ],
  },
  {
    number: '03',
    name: 'SELECTORIZED & BIOMECHANICS ARENA',
    tagline: 'Isolated Hypertrophy & Muscle Focus',
    description:
      'Anatomically optimized pin-loaded machinery including leg extension and seated leg curl stations, engineered with precise cam arcs and illuminated by warm ambient halo lighting.',
    image: '/images/facilities/facility_selectorized_legs.png',
    features: [
      'Selectorized Leg Extension & Curl',
      'Anatomical Cam Biomechanics',
      'Full Lumbar & Spinal Support',
      'Warm Halo Ambient Focus Lighting',
      'Quick-Pin Magnetic Weight Stacks',
    ],
  },
  {
    number: '04',
    name: 'FUNCTIONAL & BELT SQUAT STATION',
    tagline: 'Spinal-Decompressed Leg Drive & Agility',
    description:
      'Heavy-duty Jerai Belt Squat station allowing deep quad and glute overload with zero compressive axial spinal fatigue, paired with high-density plyo boxes and functional mobility tools.',
    image: '/images/facilities/facility_belt_squat.png',
    features: [
      'Jerai Commercial Belt Squat Machine',
      'High-Density Foam Plyo Soft Boxes',
      'Resistance Bands & Anchor Straps',
      'Spinal-Decompressed Quad Hypertrophy',
      'Core & Posterior Chain Stations',
    ],
  },
  {
    number: '05',
    name: 'SPIN BAY & CABLE CROSSOVER TOWERS',
    tagline: 'High-Cadence Cardio & Multi-Angle Cables',
    description:
      'Twin multi-stack cable crossover towers with universal swivel pulleys, set alongside a dedicated studio row of magnetic spin cycles under contemporary architectural cross LED lighting.',
    image: '/images/facilities/facility_spin_cardio.png',
    features: [
      'Dual Adjustable Cable Crossover Towers',
      'Precision Magnetic Spin Cycles',
      'Multi-Angle Swivel Pulley Tracking',
      'Architectural Geometric LED Lighting',
      'Full Upper-Body Isolation Stations',
    ],
  },
  {
    number: '06',
    name: 'LOCKER ROOMS & CHANGING SUITES',
    tagline: 'Hygienic Storage & Member Changing',
    description:
      'Private, clean, and secure locker facilities with individual numbered lockers, wide changing benches, illuminated vanity mirrors, and thermal steam chamber access.',
    image: '/images/facilities/facility_lockers.png',
    features: [
      'Numbered Individual Member Lockers',
      'Illuminated Vanity & Grooming Mirror',
      'Private Changing Stalls',
      'Thermal Steam Suite Access',
      'Sanitized & Well-Ventilated Amenities',
    ],
  },
];

const facilityGallery = [
  {
    title: 'Main Training Floor Panorama',
    category: 'TRAINING FLOOR',
    image: '/images/facilities/facility_main_floor.png',
    caption: 'Expansive open floor with heavy barbells, cable stations, and custom geometric LED fixtures.',
  },
  {
    title: 'Welcome Lounge & Reception',
    category: 'MEMBER INTAKE',
    image: '/images/facilities/facility_reception.png',
    caption: 'Backlit reception desk and intake lounge for fitness consultations and check-ins.',
  },
  {
    title: 'Olympic Deadlift & Leg Press',
    category: 'FREE WEIGHTS',
    image: '/images/facilities/facility_olympic_deadlift.png',
    caption: 'Wooden deadlift platform with calibrated plates alongside 45-degree heavy leg press.',
  },
  {
    title: 'Jerai Heavy Power Rack',
    category: 'STRENGTH SUITE',
    image: '/images/facilities/facility_power_rack.png',
    caption: 'Commercial power rack with Olympic pull-up bar, bumper plates, and rigid safeties.',
  },
  {
    title: 'Lakeview Treadmill Arena',
    category: 'CARDIO DECK',
    image: '/images/facilities/facility_cardio_treadmills.png',
    caption: 'Commercial treadmills set against daylight windows with panoramic lake views.',
  },
  {
    title: 'Spin Studio & Dual Cables',
    category: 'CONDITIONING',
    image: '/images/facilities/facility_spin_cardio.png',
    caption: 'Dedicated indoor cycling bay paired with multi-station cable towers.',
  },
  {
    title: 'Selectorized Biomechanics',
    category: 'ISOLATION',
    image: '/images/facilities/facility_selectorized_legs.png',
    caption: 'Targeted quad and hamstring selectorized machines with warm halo lighting.',
  },
  {
    title: 'Jerai Belt Squat & Plyo Box',
    category: 'FUNCTIONAL',
    image: '/images/facilities/facility_belt_squat.png',
    caption: 'Zero-axial-load belt squat machine with high-density plyometric landing boxes.',
  },
  {
    title: 'Executive Lockers & Vanity',
    category: 'AMENITIES',
    image: '/images/facilities/facility_lockers.png',
    caption: 'Private numbered lockers, illuminated vanity grooming mirror, and changing areas.',
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
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute top-4 left-4 z-10">
                    <span className="label-micro px-3 py-1 bg-black/80 text-[var(--accent-yellow-bright)] border border-white/20 font-mono backdrop-blur-sm shadow-md">
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

        {/* ========================================================
            AUTHENTIC FACILITY TOUR: 9-IMAGE VISUAL SHOWCASE
        ======================================================== */}
        <section className="section-padding border-t border-[var(--border-subtle)] bg-[var(--bg-secondary)]">
          <div className="container-wide">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-yellow)]" />
                  <span className="label-micro text-[var(--accent-yellow)]">AUTHENTIC PHOTO TOUR</span>
                  <span className="text-[var(--text-muted)] text-xs">•</span>
                  <span className="label-micro text-[var(--text-muted)]">VIRAR EAST</span>
                </div>
                <h2 className="heading-sub font-bold text-2xl sm:text-4xl text-[var(--text-primary)]">
                  THE FACILITY IN DETAIL.
                </h2>
              </div>
              <p className="text-sm font-mono text-[var(--text-muted)] max-w-md">
                Captured inside Heart Fitness at 2nd Floor, M Baria Estate, opposite Manvelpada Talav.
              </p>
            </div>

            {/* 9-Image Editorial Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {facilityGallery.map((item, idx) => (
                <div
                  key={idx}
                  className="group relative h-[300px] sm:h-[340px] overflow-hidden border border-[var(--border-subtle)] bg-black"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />

                  {/* Subtle Gradient for Bottom Caption Legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent transition-opacity duration-300" />

                  {/* Top Category Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-2.5 py-1 text-[10px] font-mono tracking-widest uppercase bg-black/75 border border-white/20 text-white/90 backdrop-blur-sm">
                      {item.category}
                    </span>
                  </div>

                  {/* Bottom Captions */}
                  <div className="absolute bottom-4 left-4 right-4 z-10">
                    <h3 className="text-sm sm:text-base font-mono font-bold uppercase tracking-wider text-white group-hover:text-[var(--accent-yellow-bright)] transition-colors mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-white/70 line-clamp-2 leading-relaxed">
                      {item.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>
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
