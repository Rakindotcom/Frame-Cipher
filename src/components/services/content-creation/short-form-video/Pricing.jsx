import { SectionIntro, PosterButton } from '../../../Kinetic'

const packages = [
  {
    name: 'Starter Batch',
    price: '৳15,000',
    tag: 'Single Batch',
    description: 'Businesses testing short-form with a small batch of high-impact videos.',
    suitableFor: 'Businesses testing short-form with a small batch',
    features: [
      'Batch of 3–5 short-form videos',
      'Concept planning and hook development',
      'Single focused filming session',
      'Fast-paced mobile editing and sound design',
      'Dynamic branded captions and subtitles',
      'Platform exports for Reels, TikTok, or Shorts'
    ]
  },
  {
    name: 'Growth',
    price: '৳30,000/month',
    tag: 'Monthly Flow',
    isPopular: true,
    description: 'Businesses building a consistent monthly content flow.',
    suitableFor: 'Businesses building a consistent monthly content flow',
    features: [
      'Monthly batch of 8–12 short-form videos',
      'Comprehensive monthly content calendar',
      'Founder, product, or educational video mixes',
      'A/B hook variations for paid social campaigns',
      'Branded caption styles and animated graphics',
      'Priority turnaround and scheduled delivery'
    ]
  },
  {
    name: 'High-Volume',
    price: '৳55,000/month',
    tag: 'Scale Output',
    description: 'Brands requiring larger monthly content output.',
    suitableFor: 'Brands requiring larger monthly content output',
    features: [
      'Monthly batch of 15–20+ short-form videos',
      'Multiple filming sessions and location changes',
      'Advanced motion graphics, sound design & transitions',
      'Multiple ad creative variations per hook',
      'Dedicated editor & creative director',
      'Full asset archive and performance iteration'
    ]
  },
  {
    name: 'Enterprise',
    price: 'Custom Quote',
    tag: 'Multi-Brand',
    description: 'Large-scale or multi-brand content production.',
    suitableFor: 'Large-scale or multi-brand content production',
    features: [
      'Custom volume and multi-market production',
      'Studio and on-location crew coordination',
      'Professional talent casting and styling',
      'Cross-platform distribution packaging',
      'Expedited SLA and dedicated production team'
    ]
  }
]

const pricingTable = {
  headers: ['Plan', 'Starting From', 'Suitable For'],
  rows: [
    ['Starter Batch', '৳15,000', 'Businesses testing short-form with a small batch'],
    ['Growth', '৳30,000/month', 'Businesses building a consistent monthly content flow'],
    ['High-Volume', '৳55,000/month', 'Brands requiring larger monthly content output'],
    ['Enterprise', 'Custom', 'Large-scale or multi-brand content production']
  ]
}

const pricingFactors = [
  'Number of videos in the batch',
  'Target video durations (15s, 30s, 60s)',
  'Filming time & session duration',
  'Filming locations (office, retail, studio, outdoors)',
  'Number of distinct concept angles & hooks',
  'Talent, actors or presenter requirements',
  'Camera, lighting & audio equipment setup',
  'Editing complexity & cut frequency',
  'Motion graphics & on-screen text depth',
  'Branded caption styles & animation',
  'Commercial music licensing',
  'Revision rounds per video',
  'Final format variations (9:16, 4:5, 1:1)',
  'Turnaround urgency & delivery timeline'
]

export default function Pricing() {
  return (
    <section id="pricing" className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28 scroll-mt-24">
      <div className="mx-auto max-w-[95vw]">
        {/* HEADER */}
        <SectionIntro
          eyebrow="Investment & Scope"
          title="Short-Form Video Production Pricing in Bangladesh"
          index="06"
        >
          Short-form video pricing depends on the number of videos, filming requirements, creative development, production setup, editing complexity, and final deliverables. For recurring content, batch production is structured around a monthly content requirement rather than pricing every video separately.
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
            Factors That Influence Short-Form Video Quotations
          </h3>
          <p className="mt-2 text-xs md:text-sm font-medium text-frame-muted-fg">
            Package scope is defined clearly around your production volume and technical requirements:
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
              * Final pricing is confirmed after reviewing production requirements and monthly volume.
            </p>
            <PosterButton href="/contact" className="shrink-0 text-xs sm:text-sm">
              Request a Short-Form Video Quote &rarr;
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
                Short-Form Video for Bangladesh & International Markets
              </h3>
              <p className="mt-3 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
                Framecipher provides short-form video production in Dhaka and across Bangladesh. We also support clients targeting audiences in the USA, UK, Australia, Canada, and UAE with creative development, content planning, mobile-native editing, and Bangladesh-based filming or client-supplied footage editing.
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
