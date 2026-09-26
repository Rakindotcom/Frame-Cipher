import { SectionIntro, PosterButton } from '../../../Kinetic'

const packages = [
  {
    name: 'Simple Video',
    price: '৳25,000',
    tag: 'Entry Level',
    description: 'Interviews, simple promotional videos, and basic social content.',
    suitableFor: 'Interviews, simple promotional videos & basic social content',
    features: [
      'Single-location filming setup',
      'Professional cinema camera & wireless audio kit',
      'Basic lighting package for talking heads',
      'Video editing, pacing & audio leveling',
      'Platform export in 16:9 or 9:16',
      '1 structured revision round'
    ]
  },
  {
    name: 'Standard Production',
    price: '৳50,000',
    tag: 'Most Popular',
    isPopular: true,
    description: 'Structured business, product, or promotional videos.',
    suitableFor: 'Business overviews, product videos & campaign promos',
    features: [
      'Concept development & script treatment outline',
      'Multi-camera setup with 3-point studio lighting',
      'Product macro shots & workplace b-roll capture',
      'Cinematic color grading & audio sweetening',
      'Licensed background music & lower thirds',
      'Horizontal 16:9 master + vertical 9:16 social cut'
    ]
  },
  {
    name: 'Brand Film / Campaign',
    price: '৳100,000',
    tag: 'Flagship Cinematic',
    description: 'Larger creative productions and campaign-focused content.',
    suitableFor: 'Brand films, TVC/OVC & multi-location campaign videos',
    features: [
      'Full creative direction, storyboard & narrative script',
      'Multi-location or studio crew with cinema optics',
      'Talent direction, styling & specialized lighting',
      'Motion graphics, title animations & custom sound design',
      'Comprehensive multi-platform asset library',
      'Dedicated creative director & priority turnaround'
    ]
  },
  {
    name: 'Ongoing Production',
    price: 'Custom Quote',
    tag: 'Monthly Retainer',
    description: 'Recurring content and campaign requirements.',
    suitableFor: 'Businesses building a regular, predictable video pipeline',
    features: [
      'Scheduled recurring monthly shoot days',
      'Batch production of short-form and long-form video',
      'Dedicated editing cadence and fast turnaround',
      'Reusable brand asset library maintenance',
      'Consistent visual style and brand voice alignment'
    ]
  }
]

const pricingTable = {
  headers: ['Package', 'Starting From', 'Suitable For'],
  rows: [
    ['Simple Video', '৳25,000', 'Interviews, simple promotional videos, and basic social content'],
    ['Standard Production', '৳50,000', 'Structured business, product, or promotional videos'],
    ['Brand Film / Campaign', '৳100,000', 'Larger creative productions and campaign-focused content'],
    ['Ongoing Production', 'Custom', 'Recurring content and campaign requirements']
  ]
}

const pricingFactors = [
  'Creative complexity & narrative scope',
  'Total video duration & number of cuts',
  'Number of dedicated filming days',
  'Number of physical shooting locations',
  'Crew requirements (director, DP, gaffer, audio)',
  'Talent, actors, models or casting fees',
  'Equipment (cinema cameras, primes, drones, gimbals)',
  'Travel, permits & site logistics',
  'Scriptwriting & storyboard depth',
  'Production design, sets & styling',
  'Motion graphics, 2D/3D & visual effects',
  'Professional voiceover artist recording',
  'Commercial music licensing fees',
  'Number of final delivery aspect ratios',
  'Number of included revision rounds',
  'Turnaround urgency & delivery timelines'
]

export default function Pricing() {
  return (
    <section id="pricing" className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28 scroll-mt-24">
      <div className="mx-auto max-w-[95vw]">
        {/* HEADER */}
        <SectionIntro
          eyebrow="Investment & Packages"
          title="Video Production Pricing in Bangladesh"
          index="07"
        >
          Video production pricing depends on the scope. A simple interview video and a multi-location brand film both fall under video production, but require very different levels of planning, filming, crew, equipment, and post-production. Final pricing is confirmed after we review the production scope.
        </SectionIntro>

        {/* PACKAGE CARDS */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {packages.map((pkg, i) => (
            <div
              key={i}
              className={`flex flex-col justify-between border-2 p-6 md:p-8 transition-colors ${
                pkg.isPopular
                  ? 'border-frame-accent bg-frame-accent/10'
                  : 'border-frame-border bg-frame-bg'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3 min-h-[22px]">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-frame-accent">
                    {pkg.tag}
                  </span>
                  {pkg.isPopular && (
                    <span className="border-2 border-frame-accent bg-frame-accent px-2 py-0.5 text-[10px] font-black uppercase tracking-[0.2em] text-frame-accent-fg">
                      Most Popular
                    </span>
                  )}
                </div>
                <h3 className="font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                  {pkg.name}
                </h3>
                <div className="mt-4 border-y-2 border-frame-border/60 py-3">
                  <span className="text-[11px] font-black uppercase tracking-[0.2em] text-frame-accent">
                    Starting From
                  </span>
                  <div className="font-heading text-2xl md:text-3xl font-black text-frame-fg">
                    {pkg.price}
                  </div>
                </div>
                <p className="mt-3 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {pkg.description}
                </p>
                <div className="mt-3 text-[11px] font-bold uppercase tracking-wider text-frame-accent">
                  Suitable For: {pkg.suitableFor}
                </div>
                {pkg.features && (
                  <ul className="mt-4 space-y-2 text-xs font-medium text-frame-fg/90 border-t border-frame-border/60 pt-4">
                    {pkg.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <span className="text-frame-accent font-bold">✓</span>
                        <span className="leading-snug">{feat}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="mt-8 pt-4 border-t border-frame-border/60">
                <PosterButton
                  href="/contact"
                  variant={pkg.isPopular ? 'accent' : 'outline'}
                  className="w-full text-xs"
                >
                  Request {pkg.name} Quote &rarr;
                </PosterButton>
              </div>
            </div>
          ))}
        </div>

        {/* COMPARISON TABLE */}
        <div className="mt-16 overflow-x-auto border-2 border-frame-border bg-frame-bg">
          <table className="w-full min-w-[640px] text-left">
            <thead className="border-b-2 border-frame-border bg-frame-muted/30">
              <tr>
                {pricingTable.headers.map((h, i) => (
                  <th key={i} className="p-4 md:p-6 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y-2 divide-frame-border text-sm md:text-base font-medium">
              {pricingTable.rows.map((row, rIdx) => (
                <tr key={rIdx} className="hover:bg-frame-muted/20">
                  <td className="p-4 md:p-6 font-bold text-frame-fg">{row[0]}</td>
                  <td className="p-4 md:p-6 font-bold text-frame-accent">{row[1]}</td>
                  <td className="p-4 md:p-6 text-frame-muted-fg">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* PRICING FACTORS */}
        <div className="mt-16 border-2 border-frame-border bg-frame-bg p-7 md:p-10">
          <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
            Scoping Variables
          </span>
          <h3 className="mt-2 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
            Factors That Influence Final Video Quotations
          </h3>
          <p className="mt-2 text-xs md:text-sm font-medium text-frame-muted-fg">
            Every video production is scoped transparently around your physical and technical requirements:
          </p>

          <div className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
            {pricingFactors.map((factor, idx) => (
              <div key={idx} className="flex items-center gap-2 border border-frame-border/80 bg-frame-muted/20 px-3.5 py-2.5">
                <span className="text-frame-accent font-bold text-xs">◆</span>
                <span className="text-xs font-medium text-frame-fg">{factor}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-t-2 border-frame-border pt-6">
            <p className="text-xs sm:text-sm font-medium text-frame-muted-fg">
              * Final pricing is confirmed after we review the production scope, script, and technical deliverables.
            </p>
            <PosterButton href="/contact" className="shrink-0 text-xs sm:text-sm">
              Request a Video Production Quote &rarr;
            </PosterButton>
          </div>
        </div>

        {/* SERVICE AREAS BANNER */}
        <div className="mt-20 border-2 border-frame-border bg-frame-muted/30 p-7 md:p-10">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-3xl">
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                Regional & Global Footprint
              </span>
              <h3 className="mt-2 font-heading text-2xl md:text-3xl font-bold uppercase tracking-tight text-frame-fg">
                Video Production for Bangladesh & International Markets
              </h3>
              <p className="mt-3 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
                Framecipher provides video production services in Dhaka and across Bangladesh. We also support businesses and brands in the USA, UK, Australia, Canada, and UAE with Bangladesh-based filming, remote creative development, editing, and platform-ready delivery around an international brief.
              </p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs md:text-sm font-bold uppercase tracking-wider text-frame-fg">
                <span className="border border-frame-border bg-frame-bg px-3 py-1.5">Bangladesh (Dhaka & Nationwide)</span>
                <span className="border border-frame-border bg-frame-bg px-3 py-1.5">United States</span>
                <span className="border border-frame-border bg-frame-bg px-3 py-1.5">United Kingdom</span>
                <span className="border border-frame-border bg-frame-bg px-3 py-1.5">Australia</span>
                <span className="border border-frame-border bg-frame-bg px-3 py-1.5">Canada</span>
                <span className="border border-frame-border bg-frame-bg px-3 py-1.5">United Arab Emirates</span>
              </div>
            </div>
            <div className="shrink-0">
              <PosterButton href="/contact">
                Discuss Your International Video Project &rarr;
              </PosterButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
