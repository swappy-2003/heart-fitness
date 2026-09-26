import { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Training Programs | Heart Fitness Virar East',
  description:
    'Structured training disciplines at Heart Fitness: Strength, Cardiovascular Conditioning, CrossFit, Functional Fitness, and One-on-One Certified Coaching.',
};

const programs = [
  {
    number: '01',
    name: 'STRENGTH & POWERLIFTING',
    cadence: '4–5 Sessions / Week',
    level: 'Beginner to Advanced',
    overview:
      'A structured regimen focused on compound lifts (squat, bench press, deadlift, overhead press) utilizing Jerai racks and calibrated Olympic plates.',
    curriculum: [
      'Kinetic Bar Path Calibration',
      'Progressive Overload Tracking',
      'Posterior Chain & Core Bracing',
      'Assistance Hypertrophy Circuits',
    ],
  },
  {
    number: '02',
    name: 'CARDIOVASCULAR CONDITIONING',
    cadence: '3–6 Sessions / Week',
    level: 'All Levels',
    overview:
      'Engineered for aerobic heart health, resting heart rate reduction, and metabolic endurance through monitored tempo runs, steady-state cardio, and incline work.',
    curriculum: [
      'Heart Rate Zone Pacing',
      'Incline Interval Strides',
      'Low-Impact Joint Protection',
      'Vascular Capillarization',
    ],
  },
  {
    number: '03',
    name: 'CROSSFIT & METABOLIC CIRCUITS',
    cadence: '3–4 Sessions / Week',
    level: 'Intermediate to Athletic',
    overview:
      'High-work-capacity training combining kettlebells, battle ropes, plyometrics, and calisthenics to build explosive athleticism and mental grit.',
    curriculum: [
      'Kettlebell Clean, Press & Snatch',
      'Battle Rope Power Waves',
      'Plyometric Box Power Jumps',
      'Timed Work-to-Rest Intervals',
    ],
  },
  {
    number: '04',
    name: '1-ON-1 CERTIFIED PERSONAL TRAINING',
    cadence: 'Tailored Schedule',
    level: 'Individualized',
    overview:
      'Direct, uninterrupted supervision from certified coaches. Includes movement screening, postural corrections, habit building, and personalized periodization.',
    curriculum: [
      'Initial Biomechanical Assessment',
      'Form & Range of Motion Audits',
      'Structured Weekly Progression',
      'Direct Habit & Form Accountability',
    ],
  },
  {
    number: '05',
    name: 'FUNCTIONAL MOBILITY & PRE-HAB',
    cadence: '2–3 Sessions / Week',
    level: 'All Fitness Levels',
    overview:
      'Focusing on hips, spine, and shoulder joint integrity to undo sedentary desk posture and build resilient, pain-free athletic movement patterns.',
    curriculum: [
      'Thoracic Spine Decompression',
      'Hip Mobility & Deep Squat Openers',
      'Rotator Cuff & Scapular Control',
      'Core Anti-Extension Protocols',
    ],
  },
  {
    number: '06',
    name: 'THERMAL STEAM RECOVERY',
    cadence: 'Post-Workout Regimen',
    level: 'All Members',
    overview:
      'Hydrothermal decompression to accelerate lactic acid clearing, stimulate blood flow to fatigued muscle tissue, and relieve mental stress.',
    curriculum: [
      'Optimal Temperature Flushing',
      'Post-Training Muscle Relaxation',
      'Circulatory Stimulation',
      'Hygienic Private Enclave',
    ],
  },
];

export default function ProgramsPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-[var(--nav-height)] bg-[var(--bg-primary)]">
        {/* Header */}
        <section className="section-padding pb-12 border-b border-[var(--border-subtle)]">
          <div className="container-wide">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-yellow)]" />
              <span className="label-micro text-[var(--accent-yellow)]">TRAINING DISCIPLINES</span>
              <span className="text-[var(--text-muted)] text-xs">•</span>
              <span className="label-micro text-[var(--text-muted)]">VIRAR EAST</span>
            </div>

            <h1 className="heading-hero text-[var(--text-primary)] mb-8">
              STRUCTURED<br />
              <span className="text-[var(--accent-yellow)]">DISCIPLINES.</span>
            </h1>

            <p className="body-large max-w-3xl text-[var(--text-secondary)]">
              We do not believe in random workouts. Every program is anchored in progressive physical adaptation, biomechanical safety, and athletic purpose.
            </p>
          </div>
        </section>

        {/* Programs Grid */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {programs.map((prog) => (
                <div
                  key={prog.number}
                  className="border border-[var(--border-medium)] bg-white p-8 flex flex-col justify-between group hover:border-[var(--accent-yellow)] transition-all duration-400 shadow-sm"
                >
                  <div>
                    <div className="flex items-center justify-between pb-4 border-b border-[var(--border-subtle)] mb-6">
                      <span className="label-micro font-mono text-[var(--accent-yellow)] font-bold">
                        PROGRAM {prog.number}
                      </span>
                      <span className="label-micro text-[var(--text-muted)]">
                        {prog.level}
                      </span>
                    </div>

                    <h2 className="heading-sub text-lg sm:text-xl font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-yellow)] transition-colors mb-3">
                      {prog.name}
                    </h2>

                    <p className="label-micro text-[var(--text-muted)] mb-4">
                      FREQUENCY: {prog.cadence}
                    </p>

                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                      {prog.overview}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-[var(--border-subtle)] space-y-2">
                    <span className="label-micro text-[var(--text-muted)] block mb-2">CURRICULUM</span>
                    {prog.curriculum.map((item) => (
                      <div key={item} className="flex items-center gap-2 text-xs font-mono text-[var(--text-secondary)]">
                        <span className="w-1 h-1 bg-[var(--accent-yellow)]" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Note */}
            <div className="mt-16 p-8 border border-[var(--border-medium)] bg-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
              <div>
                <p className="label-small text-[var(--text-primary)] mb-1">
                  Need Help Choosing Your Discipline?
                </p>
                <p className="text-xs text-[var(--text-muted)]">
                  Walk in for a complimentary movement screening and program alignment with certified trainers.
                </p>
              </div>
              <Link href="/contact" className="btn-primary text-xs shrink-0">
                Enquire at the Desk
                <span className="btn-arrow" aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
