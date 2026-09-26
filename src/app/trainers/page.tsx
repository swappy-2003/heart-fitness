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
    name: 'PRATHAMESH GAWARE',
    title: 'HEAD STRENGTH & BIOMECHANICS COACH',
    credential: 'Certified Strength & Conditioning Specialist',
    focus: 'Kinetic bar path, compound lift optimization, joint-safe progressive overload',
    image: '/images/prathamesh gaware trainer.png',
    philosophy:
      'Lifting heavy weights is an exact science. By matching the barbell path to individual limb lengths and bone structure, lifters can progressively build tremendous strength without chronic back or knee pain.',
    tags: ['Barbell Biomechanics', 'Spine & Joint Health', 'Hypertrophy Periodization', 'Jerai Lever Mastery'],
  },
  {
    name: 'MAHI',
    title: 'FUNCTIONAL MOVEMENT & CONDITIONING COACH',
    credential: 'Certified Functional Movement & Conditioning Coach',
    focus: 'Aerobic threshold training, functional interval circuits, kinetic agility complexes',
    image: '/images/mahi trainer.png',
    philosophy:
      'True fitness allows you to move freely in any plane of motion. Our metabolic and mobility sequences restore natural rotational power, stamina, and athletic durability.',
    tags: ['Functional Movement', 'Metabolic Conditioning', 'Thoracic Decompression', 'Athletic Durability'],
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
                key={coach.name}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start border-b border-[var(--border-subtle)] pb-20 last:border-b-0"
              >
                {/* Visual */}
                <div className="lg:col-span-5 relative w-full aspect-[2/3] max-w-md mx-auto lg:max-w-none border border-[var(--border-subtle)] overflow-hidden group bg-[#FAF9F6] shadow-xs">
                  <Image
                    src={coach.image}
                    alt={`${coach.name} - ${coach.title}`}
                    fill
                    className="object-contain object-center transition-transform duration-700 group-hover:scale-[1.02]"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="label-micro px-2.5 py-1 bg-white/95 text-[#121212] border border-black/10 font-mono shadow-xs">
                      CADRE 0{index + 1}
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="lg:col-span-7 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm font-mono font-bold text-[var(--accent-yellow)] tracking-widest uppercase">
                        {coach.name}
                      </span>
                      <span className="text-xs text-[var(--text-muted)]">•</span>
                      <span className="label-micro text-[var(--text-muted)] font-mono">
                        {coach.credential}
                      </span>
                    </div>
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
