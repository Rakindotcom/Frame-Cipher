'use client'

import { Check, ShieldAlert, ArrowUpRight } from 'lucide-react'
import { SectionIntro } from '../Kinetic'

const packages = [
  {
    tier: 'Studio Session',
    price: 'from ৳2,000 per hour',
    tagline: 'For crews that bring their own cameras and equipment.',
    inclusions: [
      'Sound-isolated studio room',
      'Continuous ceiling softbox lighting grid',
      'Black, white, grey and green screen backdrops',
      'Fibre internet and IPS power backup',
      'Client lounge, styling mirror and changing area',
      'Hourly, half-day and full-day slots',
    ],
    bestFor: 'Production houses, agencies and independent videographers',
    cta: 'Book Space Only',
  },
  {
    tier: 'Studio + Crew',
    price: 'from ৳8,000 per session',
    badge: 'Most Popular',
    tagline: 'For podcasters, interviewers and founders who want clean raw captures.',
    inclusions: [
      'Everything in Studio Session',
      'Sound engineer and camera operator on site',
      'Multi-mic broadcast audio, podcast ready',
      '4K multi-camera framing with live monitoring',
      'Teleprompter and director guidance',
      'Raw 4K footage and mastered audio within 24 hours',
    ],
    bestFor: 'Podcasters, interviewers and founders',
    cta: 'Book Production Session',
    featured: true,
  },
  {
    tier: 'Full Production',
    price: 'from ৳35,000 per project',
    tagline: 'For brands that want finished, ready-to-publish assets.',
    inclusions: [
      'Concept, script and shot list',
      'Multi-camera directed studio shoot',
      'Colour grade and dialogue cleanup in DaVinci Resolve',
      'EN/BN subtitles, titles and motion graphics',
      '16:9 master plus 9:16 shorts pack',
      '2 revision rounds and a 60-day archive',
    ],
    bestFor: 'Brands and marketing teams',
    cta: 'Request Full Production',
  },
]

function PackageCard({ pkg }) {
  return (
    <div className={`flex flex-col justify-between p-6 md:p-8 ${pkg.featured ? 'relative z-10 -m-0.5 border-2 border-frame-accent bg-frame-muted/30' : 'bg-frame-bg'}`}>
      <div>
        <div className="flex items-center justify-between gap-2">
          <span className="text-xs font-black uppercase tracking-wider text-frame-accent">{pkg.tier}</span>
          {pkg.badge && (
            <span className="bg-frame-accent px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-frame-accent-fg">{pkg.badge}</span>
          )}
        </div>
        <p className="mt-3 font-heading text-xl font-bold text-frame-accent md:text-2xl">{pkg.price}</p>
        <p className="mt-3 text-sm font-bold text-frame-fg">{pkg.tagline}</p>
        <div className="mt-6">
          <ul className="space-y-2.5">
            {pkg.inclusions.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-xs font-medium text-frame-muted-fg">
                <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-frame-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-8 border-t border-frame-border pt-6">
        <div className="mb-4">
          <span className="text-[10px] font-black uppercase tracking-[0.16em] text-frame-muted-fg">Best for:</span>
          <p className="mt-0.5 text-xs font-medium text-frame-fg">{pkg.bestFor}</p>
        </div>
        <a
          href="#booking"
          className={`flex w-full items-center justify-center gap-2 py-3 text-xs font-black uppercase tracking-wider transition-all duration-300 ${
            pkg.featured
              ? 'bg-frame-accent text-frame-accent-fg hover:bg-frame-accent/90'
              : 'border-2 border-frame-border bg-frame-bg text-frame-fg hover:border-frame-fg hover:bg-frame-muted/40'
          }`}
        >
          <span>{pkg.cta}</span>
          <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </div>
  )
}

export default function StudioComparison() {
  return (
    <section id="packages" className="border-b-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Packages & prices" title="Studio packages and prices in Dhaka (BDT)." index="04">
          Fixed-scope packages. Availability, equipment, staffing and duration are confirmed before booking. Studio
          access alone does not include a camera operator, editing or a finished video.
        </SectionIntro>
        <div className="grid gap-px border-2 border-frame-border bg-frame-border md:grid-cols-3">
          {packages.map((pkg, idx) => (
            <PackageCard key={idx} pkg={pkg} />
          ))}
        </div>
        <div className="mt-8 flex items-start gap-3 border border-frame-border bg-frame-muted/20 p-4 text-xs font-medium text-frame-muted-fg">
          <ShieldAlert className="mt-0.5 h-5 w-5 shrink-0 text-frame-accent" />
          <p>
            A recording session captures source footage. Editing, cleanup, subtitles, grading and exports are scoped
            separately for each deliverable unless you choose Full Production.
          </p>
        </div>
      </div>
    </section>
  )
}
