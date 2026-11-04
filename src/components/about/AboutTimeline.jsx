import Link from 'next/link'
import { Check } from 'lucide-react'

const milestones = [
  {
    year: 'JAN 2026',
    phase: 'PHASE 01: THE BEGINNING IN DHAKA',
    title: 'Starting with a Global Ambition',
    narrative:
      'Frame Cipher began its journey in January 2026 from Dhaka, Bangladesh. The founding vision was clear: bring strategy, creative production, websites, software, SEO, and performance growth into one connected system for ambitious brands.',
    achievements: [
      'Established the Frame Cipher brand and operating vision',
      'Started with an integrated brand, content, technology, and growth model',
      'Built the initial foundation from Dhaka for local and global delivery',
    ],
  },
  {
    year: '2026',
    phase: 'PHASE 02: BUILDING THE CORE SYSTEM',
    title: 'Strategy, Creative, Tech, and Growth Together',
    narrative:
      'During 2026, the company is building its core delivery system across website design and development, SEO, content and media production, paid advertising, analytics, and custom digital solutions.',
    achievements: [
      'Organized focused service systems for brand, web, SEO, media, and growth work',
      'Created practical portfolio and case-study documentation',
      'Connected delivery, measurement, and conversion thinking across projects',
    ],
  },
  {
    year: '2026+',
    phase: 'PHASE 03: GLOBAL DELIVERY',
    title: 'Growing Beyond Dhaka',
    narrative:
      'The next stage is to serve more ambitious startups, businesses, and organizations beyond Bangladesh while keeping the company’s creative and technical foundation rooted in Dhaka.',
    achievements: [
      'Deliver projects for clients across markets and time zones',
      'Build reliable remote collaboration and reporting workflows',
      'Use Dhaka-based creative and technical talent for global work',
    ],
  },
  {
    year: 'NEXT',
    phase: 'PHASE 04: THE LONG-TERM VISION',
    title: 'Frame Growth OS™ & Algorithmic Tooling',
    narrative:
      'Transitioned from agency service delivery to proprietary technology creation. Developed and released the Frame Growth OS™ ecosystem, including 10 auction-calibrated ad calculators, programmatic SEO engines, and LLM-assisted workflow automation.',
    achievements: [
      'Released free suite of 10 specialized advertising calculators',
      'Engineered proprietary Growth OS multi-touch attribution suite',
      'Expanded Dhaka headquarters engineering and creative teams',
    ],
  },
  {
    year: 'BEYOND',
    phase: 'PHASE 05: THE LONG-TERM HORIZON',
    title: 'A Global Tech Institution Anchored in Bangladesh',
    narrative:
      'Our ongoing mission: to establish physical representation nodes in global financial hubs including Dubai and London, while keeping our primary research, development, and engineering campus rooted in Dhaka, showcasing the pinnacle of Bangladeshi technical excellence to the world.',
    achievements: [
      'Grow a dependable global delivery network',
      'Create opportunities for Bangladeshi creative and technical talent',
      'Keep improving the systems that help clients grow',
    ],
  },
]

export default function AboutTimeline() {
  return (
    <section className="relative isolate border-t border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 space-y-4 max-w-4xl">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-[0.96] tracking-tight text-white">
            The Journey from Dhaka to{' '}
            <span className="italic text-frame-accent">
              Global Impact.
            </span>
          </h2>
          <p className="text-base font-normal leading-relaxed text-zinc-300 md:text-lg">
            Frame Cipher began in Dhaka in January 2026 with a global ambition. Every milestone from here is focused on building a durable technology, media, and growth company that creates better outcomes for clients and meaningful opportunities from Bangladesh.
          </p>
        </div>

        {/* Vertical Timeline Structure */}
        <div className="space-y-6">
          {milestones.map((item, idx) => (
            <div
              key={item.year}
              className="group rounded-xl border border-white/[0.08] bg-[#121214] p-7 transition-colors duration-200 hover:border-white/[0.14] md:p-9"
            >
              <div className="grid gap-8 lg:grid-cols-[0.22fr_0.48fr_0.3fr] lg:items-start">
                {/* Year & Phase */}
                <div className="space-y-2">
                  <span className="font-heading text-4xl sm:text-5xl md:text-6xl font-medium leading-none tracking-tight text-white group-hover:text-frame-accent transition-colors tabular-nums">
                    {item.year}
                  </span>
                  <p className="font-mono text-xs text-frame-accent tabular-nums">
                    0{idx + 1}
                  </p>
                </div>

                {/* Title & Narrative */}
                <div className="space-y-3">
                  <h3 className="font-heading text-xl sm:text-2xl font-medium tracking-tight text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm font-normal leading-relaxed text-zinc-300">
                    {item.narrative}
                  </p>
                </div>

                {/* Key Achievements */}
                <div className="rounded-lg border border-white/[0.08] bg-[#18181B] p-5 space-y-3">
                  <h4 className="font-mono text-[10px] tracking-[1.1px] text-frame-accent">
                    Key Milestones:
                  </h4>
                  <ul className="space-y-2 text-xs text-zinc-300 font-normal">
                    {item.achievements.map((ach) => (
                      <li key={ach} className="flex items-start gap-2">
                        <Check className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
