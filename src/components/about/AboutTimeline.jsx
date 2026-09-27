import Link from 'next/link'

const milestones = [
  {
    year: '2022',
    phase: 'PHASE 01: THE GENESIS IN DHAKA',
    title: 'Breaking the Agency Mold',
    narrative:
      'Frame Cipher was founded in Dhaka by Rakin Al Shahriar, Mahedi Hasan, and Nahid Bin Zaman. Disillusioned by fragmented digital agencies that treated branding, media, and development as disconnected silos, the founders united to build an integrated growth powerhouse that engineers both the narrative and the software.',
    achievements: [
      'Built in-house cinematic production & design studio',
      'Pioneered 360 integrated campaign frameworks in Bangladesh',
      'Onboarded first 15 domestic market leaders and DTC brands',
    ],
  },
  {
    year: '2023',
    phase: 'PHASE 02: FULL-STACK EXPANSION',
    title: 'Software Engineering Meets Performance Marketing',
    narrative:
      'Expanded from media and creative into full-stack custom web engineering, enterprise application architecture, and algorithmic paid advertising. Developed high-converting headless storefronts and automated CRM lead pipelines.',
    achievements: [
      'Launched dedicated web & mobile app engineering division',
      'Scaled media buying operations across Google, Meta, and TikTok',
      'Achieved average client ROAS improvements of 2.8x across eCommerce portfolios',
    ],
  },
  {
    year: '2024',
    phase: 'PHASE 03: CROSS-BORDER GLOBALIZATION',
    title: 'Serving North America, Europe & the Middle East',
    narrative:
      'Proved that engineering and creative talent from Bangladesh can compete and win on the global stage. Scaled international operations to serve high-growth startups, B2B enterprises, and retail brands across the United States, United Kingdom, Canada, and the United Arab Emirates.',
    achievements: [
      'Surpassed 20+ countries served with zero geographic churn',
      'Established asynchronous follow-the-sun sprint protocols',
      'Signed enterprise contracts with US SaaS and UK DTC brands',
    ],
  },
  {
    year: '2025',
    phase: 'PHASE 04: PROPRIETARY INNOVATION & AI LABS',
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
    year: '2026+',
    phase: 'PHASE 05: THE MULTINATIONAL HORIZON',
    title: 'A Global Tech Institution Anchored in Bangladesh',
    narrative:
      'Our ongoing mission: to establish physical representation nodes in global financial hubs including Dubai and London, while keeping our primary research, development, and engineering campus rooted in Dhaka—showcasing the pinnacle of Bangladeshi technical excellence to the world.',
    achievements: [
      'International corporate structuring & regional client hubs',
      'Deepening partnerships with global venture-backed startups',
      'Fostering next-generation Bangladeshi software and creative talent',
    ],
  },
]

export default function AboutTimeline() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-card px-4 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-[95vw]">
        {/* Section Header */}
        <div className="mb-16">
          <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-frame-accent md:text-sm">
            Roadmap / Evolution of a Global Vision
          </p>
          <h2 className="font-heading text-[clamp(2.4rem,7vw,6.5rem)] font-bold uppercase leading-[0.85] tracking-tighter text-frame-fg">
            The Journey from Dhaka to Global Impact.
          </h2>
          <p className="mt-6 max-w-4xl text-base font-medium leading-relaxed text-frame-muted-fg md:text-xl">
            We did not build Frame Cipher to be an ordinary local agency. From day one, every milestone was designed to build a durable, scalable, multinational institution that elevates our clients and our country.
          </p>
        </div>

        {/* Vertical Timeline Structure */}
        <div className="space-y-12">
          {milestones.map((item, idx) => (
            <div
              key={item.year}
              className="border-2 border-frame-border bg-frame-bg p-8 transition-all duration-300 hover:border-frame-accent md:p-12"
            >
              <div className="grid gap-8 lg:grid-cols-[0.25fr_0.45fr_0.3fr]">
                {/* Year & Phase */}
                <div>
                  <span className="font-heading text-6xl font-bold uppercase leading-none tracking-tighter text-frame-accent md:text-7xl">
                    {item.year}
                  </span>
                  <p className="mt-3 font-mono text-[11px] font-bold uppercase tracking-widest text-frame-muted-fg">
                    {item.phase}
                  </p>
                </div>

                {/* Title & Narrative */}
                <div>
                  <h3 className="font-heading text-2xl font-bold uppercase tracking-tight text-frame-fg sm:text-3xl">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
                    {item.narrative}
                  </p>
                </div>

                {/* Key Achievements */}
                <div className="rounded border border-frame-border/80 bg-frame-card p-6">
                  <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-frame-accent">
                    Key Milestones:
                  </h4>
                  <ul className="mt-4 space-y-2.5 text-xs font-medium text-frame-fg">
                    {item.achievements.map((ach) => (
                      <li key={ach} className="flex items-start gap-2">
                        <span className="text-frame-accent font-bold">✓</span>
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
