import { SectionIntro, PosterButton } from '../../Kinetic'

const packages = [
  {
    name: 'Per-Project',
    price: '৳15,000+',
    cadence: 'One-Time Project',
    description: 'A defined video, photography, design, or creative production project.',
    bestFor: 'One-time production needs',
    features: [
      'Single video, photoshoot, or design project',
      'Defined creative brief and scope',
      'High-definition editing and color work',
      'Platform-ready exports included',
      'Structured revision round included'
    ]
  },
  {
    name: 'Growth',
    price: '৳40,000/month',
    cadence: 'Monthly Retainer',
    description: 'Recurring short-form video, graphics, and related creative production.',
    bestFor: 'Businesses building a regular content pipeline',
    features: [
      'Batch short-form vertical videos (Reels/Shorts)',
      'Branded social media graphics & carousels',
      'Monthly production schedule & editorial cadence',
      'Consistent visual brand identity alignment',
      'Platform-ready dimensions & caption integration'
    ]
  },
  {
    name: 'Full Production',
    price: '৳75,000/month',
    cadence: 'Comprehensive Monthly',
    isPopular: true,
    description: 'Multi-format video, photography, design, and ongoing creative production.',
    bestFor: 'Businesses with broader monthly production needs',
    features: [
      'Multi-format video production (Short & Long form)',
      'Commercial photography & product shoots',
      'Motion graphics, kinetic typography & animations',
      'Graphic design for campaigns, ads & print',
      'Priority turnaround & dedicated creative director'
    ]
  },
  {
    name: 'Enterprise',
    price: 'Custom Quote',
    cadence: 'Tailored Retainer',
    description: 'Larger campaigns, launches, multi-location, or multi-market production.',
    bestFor: 'Larger organizations and complex campaigns',
    features: [
      'Comprehensive multi-market campaign production',
      'Multi-location studio & crew coordination',
      'Extensive talent, styling & prop management',
      'Complete reusable visual asset library',
      'Custom SLAs and expedited production workflows'
    ]
  }
]

const pricingTable = {
  headers: ['Plan', 'Starting Price', 'Typical Scope', 'Best For'],
  rows: [
    ['Per-Project', '৳15,000+', 'A defined video, photography, design, or creative production project', 'One-time production needs'],
    ['Growth', '৳40,000/month', 'Recurring short-form video, graphics, and related creative production', 'Businesses building a regular content pipeline'],
    ['Full Production', '৳75,000/month', 'Multi-format video, photography, design, and ongoing creative production', 'Businesses with broader monthly production needs'],
    ['Enterprise', 'Custom Quote', 'Larger campaigns, launches, multi-location, or multi-market production', 'Larger organizations and complex campaigns']
  ]
}

const pricingFactors = [
  'Number of assets & deliverables',
  'Shoot duration & studio hours',
  'Number of physical locations',
  'Production crew requirements',
  'Talent, actors & commercial models',
  'Equipment & optical grade',
  'Editing & compositing complexity',
  '2D/3D motion graphics volume',
  'Photography retouching depth',
  'Number of platform versions (9:16, 16:9, etc.)',
  'Delivery formats & resolution standards',
  'Included revision rounds',
  'Project turnaround timeline',
  'Ongoing production volume cadence',
  'Third-party music & commercial licensing'
]

const timelines = [
  {
    format: 'Simple Graphic or Short-Form Video',
    timeline: '3–7 business days',
    context: 'Reels, TikToks, ad statics, social carousels, and single-purpose banners.'
  },
  {
    format: 'Photography or Multi-Asset Production',
    timeline: '1–2 weeks',
    context: 'Product catalog shoots, brand lifestyle sessions, pitch decks, and ad sets.'
  },
  {
    format: 'Larger Video or Branding Projects',
    timeline: '2–4 weeks',
    context: 'Commercial videos, brand films, corporate documentaries, and full visual identities.'
  },
  {
    format: 'Larger Campaigns or Complex Productions',
    timeline: 'Custom timeline',
    context: 'Multi-location shoots, full campaign rollouts, and multi-market productions.'
  }
]

export default function Pricing() {
  return (
    <section id="pricing" className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28 scroll-mt-24">
      <div className="mx-auto max-w-[95vw]">
        {/* HEADER */}
        <SectionIntro
          eyebrow="Investment & Scope"
          title="Content Creation Pricing"
          index="06"
        >
          Content creation pricing varies because production requirements vary. A simple graphic and a multi-location video production do not require the same amount of creative, production, equipment, editing, or coordination. Our starting pricing provides a reference point. Your final proposal confirms the actual scope, deliverables, timeline, revisions, and production requirements.
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
                    {pkg.cadence}
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
                    Starting At
                  </span>
                  <div className="font-heading text-2xl md:text-3xl font-black text-frame-fg">
                    {pkg.price}
                  </div>
                </div>
                <p className="mt-3 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {pkg.description}
                </p>
                <div className="mt-3 text-[11px] font-bold uppercase tracking-wider text-frame-accent">
                  Best For: {pkg.bestFor}
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
                  Choose {pkg.name} &rarr;
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
                  <td className="p-4 md:p-6 text-frame-fg">{row[2]}</td>
                  <td className="p-4 md:p-6 text-frame-muted-fg">{row[3]}</td>
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
            Factors That Influence Final Pricing
          </h3>
          <p className="mt-2 text-xs md:text-sm font-medium text-frame-muted-fg">
            Final pricing adapts dynamically to the physical, technical, and creative demands of your shoot:
          </p>

          <div className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {pricingFactors.map((factor, idx) => (
              <div key={idx} className="flex items-center gap-2 border border-frame-border/80 bg-frame-muted/20 px-3.5 py-2.5">
                <span className="text-frame-accent font-bold text-xs">◆</span>
                <span className="text-xs md:text-sm font-medium text-frame-fg">{factor}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-t-2 border-frame-border pt-6">
            <p className="text-xs sm:text-sm font-medium text-frame-muted-fg">
              * Confirm all pricing and package inclusions before publishing. We provide custom quotations after detailed scoping.
            </p>
            <PosterButton href="/contact" className="shrink-0 text-xs sm:text-sm">
              Request a Custom Production Plan &rarr;
            </PosterButton>
          </div>
        </div>

        {/* TIMELINES & PRODUCTION SUPPORT */}
        <div className="mt-20">
          <div className="mb-8 max-w-3xl">
            <span className="text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Execution Cadence
            </span>
            <h3 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
              Timeline, Revisions & Production Support
            </h3>
            <p className="mt-3 text-sm md:text-base font-medium text-frame-muted-fg leading-relaxed">
              Production timelines depend on the format and scope. These are planning ranges, not fixed guarantees. Your proposal confirms the actual production schedule after the scope is defined.
            </p>
          </div>

          <div className="overflow-x-auto border-2 border-frame-border bg-frame-bg shadow-sm">
            <table className="w-full min-w-[640px] text-left">
              <thead className="border-b-2 border-frame-border bg-frame-muted/30">
                <tr>
                  <th className="p-4 md:p-6 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Format & Scope</th>
                  <th className="p-4 md:p-6 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Starting Reference</th>
                  <th className="p-4 md:p-6 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Production Details</th>
                </tr>
              </thead>
              <tbody className="divide-y-2 divide-frame-border text-sm md:text-base font-medium">
                {timelines.map((item, idx) => (
                  <tr key={idx} className="hover:bg-frame-muted/20">
                    <td className="p-4 md:p-6 font-bold text-frame-fg">{item.format}</td>
                    <td className="p-4 md:p-6 font-bold text-frame-accent">{item.timeline}</td>
                    <td className="p-4 md:p-6 text-frame-muted-fg">{item.context}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* REVISIONS & ONGOING SUPPORT DUAL CARDS */}
          <div className="mt-12 grid gap-px border-2 border-frame-border bg-frame-border md:grid-cols-2">
            <div className="bg-frame-bg p-7 md:p-10 flex flex-col justify-between">
              <div>
                <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                  Structured Review Process
                </span>
                <h4 className="mt-2 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                  Review & Revisions Policy
                </h4>
                <p className="mt-4 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                  Every project includes a defined review process. The number of revision rounds depends on the selected package or project scope and is confirmed before production begins.
                </p>
                <p className="mt-3 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                  We don&apos;t just send a final link and walk away. You inspect creative drafts at designated milestones so any necessary refinements are incorporated seamlessly before final delivery.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-frame-border/60">
                <span className="text-xs font-bold uppercase tracking-wider text-frame-accent">
                  Milestone Review · Agreed Revisions · Zero Surprises
                </span>
              </div>
            </div>

            <div className="bg-frame-bg p-7 md:p-10 flex flex-col justify-between">
              <div>
                <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                  Recurring Creative Partnership
                </span>
                <h4 className="mt-2 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                  Ongoing Production Support
                </h4>
                <p className="mt-4 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                  Businesses that need regular content can work with Framecipher on a recurring production cadence. Depending on the engagement, ongoing support can include scheduled production, recurring graphics, short-form video, photography, campaign assets, and content repurposing.
                </p>
                <p className="mt-3 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                  This eliminates the scramble to create new assets each week and gives your team a reliable, predictable content pipeline.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-frame-border/60">
                <span className="text-xs font-bold uppercase tracking-wider text-frame-fg">
                  Monthly Retainers · Editorial Cadence · Scalable Output
                </span>
              </div>
            </div>
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
                Content Creation Service Areas
              </h3>
              <p className="mt-3 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
                Framecipher provides content creation services for businesses in Bangladesh, including Dhaka and other locations where production requirements can be supported. We also work with international clients across the:
              </p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs md:text-sm font-bold uppercase tracking-wider text-frame-fg">
                <span className="border border-frame-border bg-frame-bg px-3 py-1.5">Bangladesh (Dhaka & Nationwide)</span>
                <span className="border border-frame-border bg-frame-bg px-3 py-1.5">United States</span>
                <span className="border border-frame-border bg-frame-bg px-3 py-1.5">United Kingdom</span>
                <span className="border border-frame-border bg-frame-bg px-3 py-1.5">Australia</span>
                <span className="border border-frame-border bg-frame-bg px-3 py-1.5">Canada</span>
                <span className="border border-frame-border bg-frame-bg px-3 py-1.5">United Arab Emirates</span>
              </div>
              <p className="mt-3 text-xs md:text-sm font-medium text-frame-muted-fg">
                For international projects, delivery and production arrangements depend on the required format, location, and scope.
              </p>
            </div>
            <div className="shrink-0">
              <PosterButton href="/contact">
                Discuss Your Location & Production Needs &rarr;
              </PosterButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
