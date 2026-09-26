import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Certified Trainers | Heart Fitness Virar East',
  description:
    'Meet the certified fitness coaching cadre at Heart Fitness Virar East. Professional coaching specializing in strength biomechanics, metabolic conditioning, and mobility.',
};

const trainerRoles = [
  {
    title: 'HEAD STRENGTH & BIOMECHANICS COACH',
    credential: 'Certified Strength & Conditioning Specialist',
    focus: 'Kinetic bar path, compound lift optimization, joint-safe progressive overload',
    image: '/images/strength.jpg',
    philosophy:
      'Lifting heavy weights is an exact science. By matching the barbell path to individual limb lengths and bone structure, lifters can progressively build tremendous strength without chronic back or knee pain.',
    tags: ['Barbell Biomechanics', 'Spine & Joint Health', 'Hypertrophy Periodization'],
  },
  {
    title: 'CARDIOVASCULAR & CONDITIONING SPECIALIST',
    credential: 'Certified Metabolic Conditioning Coach',
    focus: 'Aerobic threshold training, functional interval circuits, body recomposition',
    image: '/images/hero.jpg',
    philosophy:
      'Conditioning is about vascular durability and recovery rate. We measure pacing and heart rate recovery to build an athletic engine capable of sustained output.',
    tags: ['Heart Rate Pacing', 'Metabolic Efficiency', 'Fat Loss Recomposition'],
  },
  {
    title: 'FUNCTIONAL MOVEMENT & MOBILITY INSTRUCTOR',
    credential: 'Certified Functional Movement Specialist',
    focus: 'Hip/shoulder decompression, active flexibility, kinetic agility complexes',
    image: '/images/strength.jpg',
    philosophy:
      'True fitness allows you to move freely in any plane of motion. Our mobility sequences restore natural rotational power and eliminate the tightness caused by daily sitting.',
    tags: ['Thoracic Decompression', 'Rotational Agility', 'Athletic Longevity'],
  },
];

export default function TrainersPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-[var(--nav-height)] bg-[var(--bg-primary)]">
        {/* Header */}
        <section className="section-padding pb-12 border-b border-[var(--border-subtle)]">
          <div className="container-wide">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-yellow)]" />
              <span className="label-micro text-[var(--accent-yellow)]">COACHING ROSTER</span>
              <span className="text-[var(--text-muted)] text-xs">•</span>
              <span className="label-micro text-[var(--text-muted)]">CERTIFIED TRAINERS ONLY</span>
            </div>

            <h1 className="heading-hero text-[var(--text-primary)] mb-8">
              CERTIFIED<br />
              <span className="text-[var(--accent-yellow)]">TRAINERS.</span>
            </h1>

            <p className="body-large max-w-3xl text-[var(--text-secondary)]">
              No amateur bro-science or unsupervised beginners. Every coach on the Heart Fitness floor holds certified training credentials and adheres to evidence-based training principles.
            </p>
          </div>
        </section>

        {/* Coaches Showcase */}
        <section className="section-padding">
          <div className="container-wide space-y-24">
            {trainerRoles.map((coach, index) => (
              <div
                key={coach.title}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start border-b border-[var(--border-subtle)] pb-20 last:border-b-0"
              >
                {/* Visual */}
                <div className="lg:col-span-5 relative w-full h-[400px] border border-[var(--border-subtle)] overflow-hidden group">
                  <Image
                    src={coach.image}
                    alt={coach.title}
                    fill
                    className="object-cover grayscale contrast-125 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-transparent to-black/30" />
                  <div className="absolute top-4 left-4">
                    <span className="label-micro px-2.5 py-1 bg-[var(--bg-primary)] text-[var(--accent-yellow)] border border-[var(--border-subtle)] font-mono">
                      CADRE 0{index + 1}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <span className="label-micro text-[var(--text-primary)] bg-black/80 px-2 py-1">
                      VIRAR EAST
                    </span>
                    <span className="label-micro text-[var(--accent-yellow)]">
                      VERIFIED
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="lg:col-span-7 flex flex-col justify-between">
                  <div>
                    <span className="label-micro text-[var(--accent-yellow)] block mb-2 font-mono">
                      {coach.credential}
                    </span>
                    <h2 className="heading-sub font-bold text-[var(--text-primary)] mb-4">
                      {coach.title}
                    </h2>
                    <p className="text-sm font-semibold text-[var(--text-muted)] tracking-wider uppercase mb-6">
                      SPECIALITY: {coach.focus}
                    </p>

                    <blockquote className="border-l-2 border-[var(--accent-yellow)] pl-6 py-2 mb-8 italic text-base text-[var(--text-secondary)] leading-relaxed">
                      &ldquo;{coach.philosophy}&rdquo;
                    </blockquote>
                  </div>

                  <div className="pt-6 border-t border-[var(--border-subtle)]">
                    <span className="label-micro text-[var(--text-muted)] block mb-3">CORE COMPETENCIES</span>
                    <div className="flex flex-wrap gap-2">
                      {coach.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-3 py-1.5 bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-[var(--text-secondary)] font-mono"
                        >
                          {tag}
                        </span>
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
                Book a 1-on-1 Movement Assessment
              </h3>
              <p className="text-sm text-[var(--text-muted)]">
                Discuss your athletic objectives directly with our certified coaching staff in Virar East.
              </p>
            </div>
            <Link href="/contact" className="btn-primary text-xs shrink-0">
              Schedule with Trainers
              <span className="btn-arrow" aria-hidden="true">→</span>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
