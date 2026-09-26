'use client';

interface Discipline {
  number: string;
  name: string;
  spec: string;
}

const disciplines: Discipline[] = [
  {
    number: '01',
    name: 'STRENGTH & HYPERTROPHY',
    spec: 'Jerai Commercial Racks • Dumbbells to 50kg • Competition Benches',
  },
  {
    number: '02',
    name: 'LAKEVIEW CARDIO DECK',
    spec: 'Commercial Treadmills • Spin Bikes • Aerobic Conditioning',
  },
  {
    number: '03',
    name: 'FUNCTIONAL & CROSS TRAINING',
    spec: 'Battle Ropes • Kettlebells • Plyometric Conditioning Turf',
  },
  {
    number: '04',
    name: 'THERMAL RECOVERY STEAM',
    spec: 'Dedicated Steam Suites • Muscular Decompression',
  },
  {
    number: '05',
    name: 'CERTIFIED PERSONAL COACHING',
    spec: 'Movement Screening • Individualized Strength Programming',
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative section-padding border-t border-[var(--border-subtle)] bg-[var(--bg-secondary)] overflow-hidden"
      aria-label="Training Disciplines"
    >
      <div className="container-wide relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 sm:mb-20">
          <div>
            <span className="text-xs font-mono tracking-[0.25em] text-[var(--text-muted)] uppercase block mb-3">
              TRAINING DISCIPLINES
            </span>
            <h2 className="heading-section text-[var(--text-primary)]">
              BUILT FOR<br />
              <span className="text-[var(--accent-yellow)]">PERFORMANCE.</span>
            </h2>
          </div>
          <span className="text-xs font-mono text-[var(--text-muted)] tracking-wider">
            ALL DISCIPLINES UNDER ONE ROOF
          </span>
        </div>

        {/* Minimal Swiss Typographic Rows */}
        <div className="border-t border-[var(--border-subtle)]">
          {disciplines.map((item) => (
            <div
              key={item.number}
              className="group border-b border-[var(--border-subtle)] py-8 sm:py-10 flex flex-col md:flex-row md:items-center justify-between gap-4 transition-all duration-300 hover:pl-4 hover:bg-white/50"
            >
              <div className="flex items-baseline gap-6 sm:gap-12">
                <span className="text-xs font-mono text-[var(--text-muted)] group-hover:text-[var(--accent-yellow)] transition-colors">
                  {item.number}
                </span>
                <h3 className="heading-sub font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-yellow)] transition-colors">
                  {item.name}
                </h3>
              </div>

              <div className="flex items-center justify-between md:justify-end gap-6 sm:gap-12 pl-12 md:pl-0">
                <span className="text-xs sm:text-sm font-mono text-[var(--text-muted)] group-hover:text-[var(--text-primary)] transition-colors">
                  {item.spec}
                </span>
                <span className="text-sm font-mono text-[var(--text-muted)] group-hover:text-[var(--accent-yellow)] group-hover:translate-x-1.5 transition-all">
                  →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
