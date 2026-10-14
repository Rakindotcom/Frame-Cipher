'use client'

import { Check, ShieldAlert, ArrowUpRight } from 'lucide-react'

const packages = [
  {
    tier: 'Studio Session',
    badge: 'Space Only',
    tagline: 'Clients who already have their own creative crew & equipment',
    coverage: 'Hourly / Half-Day / Full-Day Studio Access',
    inclusions: [
      'Access to sound-isolated studio room',
      'Continuous ceiling lighting grid setup',
      'Backdrops (Black, White, Neutral Grey, Green Screen)',
      'High-speed fiber internet connection',
      'Client lounge, styling & makeup mirror',
      'Power backups (IPS / Generator support)',
    ],
    bestFor: 'Production houses, agencies & independent videographers with equipment',
    cta: 'Book Space Only',
  },
  {
    tier: 'Studio + Production Support',
    badge: 'Popular for Creators',
    tagline: 'Clients who need technical assistance with recording or shooting',
    coverage: 'Studio Access + Technical Crew On-Site',
    inclusions: [
      'Everything in Studio Session',
      'Sound engineer monitoring audio levels & room acoustics',
      'Camera operator managing 4K framing & focus',
      'Studio broadcast microphones (multi-mic podcast setup)',
      'High-CRI video lighting setup tailored to participants',
      'Direct handoff of raw 4K footage & mastered multi-track audio',
    ],
    bestFor: 'Podcasters, interviewers, and founders who want clean raw captures',
    cta: 'Book Production Session',
    featured: true,
  },
  {
    tier: 'Full Production Package',
    badge: 'End-to-End Hands-Off',
    tagline: 'Clients who want complete planning, shoot execution & final editing',
    coverage: 'Complete Turnkey Media Production',
    inclusions: [
      'Pre-production concept discussion & shot list',
      'Complete studio shoot with multi-camera director',
      'Full post-production video editing & pacing cuts',
      'Color grading & speech cleanup in DaVinci Resolve',
      'Subtitles, kinetic lower-thirds & branding graphics',
      'Platform-ready exports (16:9 Master + 9:16 Short Clips)',
    ],
    bestFor: 'Brands, enterprises and marketing teams wanting finished ready-to-publish assets',
    cta: 'Request Full Production',
  },
]

export default function StudioComparison() {
  return (
    <section id="packages" className="border-b-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        {/* Header */}
        <div className="mb-14 max-w-3xl">
          <p className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
            Which Package Suits You?
          </p>
          <h2 className="mt-3 font-heading text-[clamp(2rem,4.5vw,4.5rem)] font-bold uppercase leading-[0.95] tracking-tighter text-frame-fg">
            Transparent Production Scopes.
          </h2>
          <p className="mt-4 text-base font-medium leading-relaxed text-frame-muted-fg">
            Availability, included equipment, staffing and session duration are confirmed before booking. Studio access alone does not automatically include a camera operator, editing or a finished video.
          </p>
        </div>

        {/* 3 Tier Cards */}
        <div className="grid gap-px border-2 border-frame-border bg-frame-border md:grid-cols-3">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className={`flex flex-col justify-between p-6 md:p-8 ${
                pkg.featured
                  ? 'bg-frame-muted/30 relative border-2 border-frame-accent -m-0.5 z-10'
                  : 'bg-frame-bg'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-black uppercase tracking-wider text-frame-accent">
                    {pkg.tier}
                  </span>
                  <span className="rounded bg-frame-accent/15 px-2 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider text-frame-accent">
                    {pkg.badge}
                  </span>
                </div>

                <p className="mt-4 text-sm font-bold text-frame-fg">
                  {pkg.tagline}
                </p>

                <p className="mt-2 text-xs font-medium text-frame-muted-fg border-b border-frame-border pb-4">
                  Scope: <span className="text-frame-fg font-semibold">{pkg.coverage}</span>
                </p>

                <div className="mt-6">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-frame-muted-fg mb-3">
                    What Is Included:
                  </p>
                  <ul className="space-y-2.5">
                    {pkg.inclusions.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs font-medium text-frame-muted-fg">
                        <Check className="h-3.5 w-3.5 shrink-0 text-frame-accent mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-frame-border">
                <div className="mb-4">
                  <span className="text-[10px] font-black uppercase tracking-[0.16em] text-frame-muted-fg">Best Suited For:</span>
                  <p className="text-xs font-medium text-frame-fg mt-0.5">{pkg.bestFor}</p>
                </div>
                <a
                  href="#booking"
                  className={`flex w-full items-center justify-center gap-2 py-3 text-xs font-black uppercase tracking-wider transition-all duration-300 ${
                    pkg.featured
                      ? 'bg-frame-accent text-frame-accent-fg hover:bg-frame-accent/90 shadow-[0_0_20px_rgba(168,85,247,0.3)]'
                      : 'border-2 border-frame-border bg-frame-bg text-frame-fg hover:border-frame-fg hover:bg-frame-muted/40'
                  }`}
                >
                  <span>{pkg.cta}</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Clear Expectation Note */}
        <div className="mt-8 flex items-start gap-3 border border-frame-border bg-frame-muted/20 p-4 text-xs font-medium text-frame-muted-fg">
          <ShieldAlert className="h-5 w-5 shrink-0 text-frame-accent mt-0.5" />
          <p>
            <strong className="text-frame-fg font-bold">Important Distinction:</strong> A studio recording session captures the source footage. Post-production (editing, audio cleanup, subtitles, color grading, export files) is a separate discipline scoped according to your exact deliverable requirements.
          </p>
        </div>
      </div>
    </section>
  )
}
