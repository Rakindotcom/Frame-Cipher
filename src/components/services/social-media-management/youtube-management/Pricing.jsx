import { SectionIntro, PosterButton } from '../../../Kinetic'

const packages = [
  {
    name: 'Standard',
    price: '৳30,000',
    priceNote: 'Per month',
    bestFor: 'Consistent channel management',
    features: [
      'Channel strategy & positioning',
      'Content planning',
      '2 long-form videos per month',
      'Shorts repurposed from long-form',
      'YouTube SEO & metadata',
      'Title & description optimization',
      '2 thumbnail designs per month',
      'Channel optimization',
      'Playlists & end screens',
      'Basic community management',
      'Monthly analytics & reporting',
      'Content repurposing',
      'Basic conversion/CTA strategy',
    ],
    popular: false,
  },
  {
    name: 'Growth',
    price: '৳50,000',
    priceNote: 'Per month',
    bestFor: 'Higher publishing volume',
    features: [
      'Channel strategy & positioning',
      'Content planning',
      '4 long-form videos per month',
      'Dedicated + repurposed Shorts',
      'YouTube SEO & metadata',
      'Title & description optimization',
      '4 thumbnail designs per month',
      'Channel optimization',
      'Playlists & end screens',
      'Active community management',
      'Monthly analytics & reporting',
      'Thumbnail & title testing',
      'Content repurposing',
      'Conversion/CTA strategy',
    ],
    popular: true,
  },
  {
    name: 'Custom / Full-Service',
    price: 'Custom Quote',
    priceNote: 'Scoped per engagement',
    bestFor: 'Complex or multi-format channels',
    features: [
      'Channel strategy & positioning',
      'Custom content planning',
      'Custom long-form volume',
      'Custom Shorts strategy',
      'YouTube SEO & metadata',
      'Title & description optimization',
      'Custom thumbnail design',
      'Channel optimization',
      'Playlists & end screens',
      'Custom community management',
      'Advanced analytics & reporting',
      'Thumbnail & title testing',
      'Content repurposing',
      'Conversion/CTA strategy',
    ],
    popular: false,
  },
]

const columns = ['Standard', 'Growth', 'Custom / Full-Service']

const rows = [
  { label: 'Channel Strategy', values: ['check', 'check', 'check'] },
  { label: 'Content Planning', values: ['check', 'check', 'check'] },
  { label: 'Long-Form Videos', values: ['2 / month', '4 / month', 'Custom'] },
  { label: 'Shorts', values: ['Repurposed from long-form', 'Dedicated + repurposed', 'Custom'] },
  { label: 'YouTube SEO', values: ['check', 'check', 'check'] },
  { label: 'Title & Description Optimization', values: ['check', 'check', 'check'] },
  { label: 'Thumbnail Design', values: ['2 / month', '4 / month', 'Custom'] },
  { label: 'Channel Optimization', values: ['check', 'check', 'check'] },
  { label: 'Playlists & End Screens', values: ['check', 'check', 'check'] },
  { label: 'Community Management', values: ['Basic', 'Active', 'Custom'] },
  { label: 'Analytics & Reporting', values: ['Monthly', 'Monthly', 'Advanced'] },
  { label: 'Thumbnail/Title Testing', values: ['dash', 'check', 'check'] },
  { label: 'Content Repurposing', values: ['check', 'check', 'check'] },
  { label: 'Conversion/CTA Strategy', values: ['Basic', 'check', 'check'] },
  { label: 'Best For', values: ['Consistent channel management', 'Higher publishing volume', 'Complex or multi-format channels'] },
]

const audit = {
  title: 'One-Time YouTube Video SEO & Metadata Audit',
  price: '৳15,000',
  body: 'A one-time review of existing videos, metadata, packaging, and channel structure, with prioritized recommendations you can act on with or without a management plan.',
}

const pricingScope =
  'Video volume refers to the agreed monthly production scope. Filming, travel, studio rental, talent, advanced animation, professional voice-over, creators, third-party production expenses, or other specialized requirements may require separate budgeting unless specifically included in your proposal.'

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="scroll-mt-20 border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28"
    >
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Investment &amp; plans" title="YouTube Management Pricing">
          Our YouTube management packages are structured around content volume, production
          requirements, optimization, and reporting.
        </SectionIntro>

        {/* PACKAGE CARDS */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {packages.map((pkg, index) => (
            <div
              key={pkg.name}
              className={`flex flex-col justify-between border-2 p-6 transition-colors md:p-7 ${
                pkg.popular
                  ? 'border-frame-accent bg-frame-accent/10'
                  : 'border-frame-border bg-frame-bg hover:border-frame-border/80'
              }`}
            >
              <div>
                <div className="flex min-h-[22px] items-center justify-between gap-2">
                  <span className="text-xs font-black uppercase tracking-[0.22em] text-frame-accent">
                    Package 0{index + 1}
                  </span>
                  {pkg.popular && (
                    <span className="border-2 border-frame-accent bg-frame-accent px-2.5 py-0.5 text-[10px] font-black uppercase tracking-[0.2em] text-frame-accent-fg">
                      Most Popular
                    </span>
                  )}
                </div>

                <h3 className="mt-2 font-heading text-xl font-bold uppercase tracking-tight text-frame-fg md:text-2xl">
                  {pkg.name}
                </h3>

                <div className="mt-5 border-y-2 border-frame-border/60 py-4">
                  <div className="font-heading text-2xl font-black tracking-tight text-frame-fg md:text-3xl">
                    {pkg.price}
                  </div>
                  <span className="mt-1 block text-[11px] font-black uppercase tracking-[0.2em] text-frame-accent">
                    {pkg.priceNote}
                  </span>
                </div>

                <div className="mt-4 border border-frame-accent/50 bg-frame-accent/5 p-3">
                  <span className="text-[10px] font-black uppercase tracking-[0.18em] text-frame-accent">
                    Best For
                  </span>
                  <p className="mt-1 text-xs font-semibold leading-snug text-frame-fg">{pkg.bestFor}</p>
                </div>

                <div className="mt-5 border-t-2 border-frame-border/60 pt-4">
                  <span className="text-[10px] font-black uppercase tracking-[0.18em] text-frame-accent">
                    What&rsquo;s Covered
                  </span>
                  <ul className="mt-3 space-y-2.5 text-xs font-medium text-frame-fg/90 md:text-sm">
                    {pkg.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2">
                        <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center border border-frame-accent bg-frame-accent/10 text-frame-accent">
                          <svg className="h-2.5 w-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <span className="leading-snug">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 border-t-2 border-frame-border/60 pt-4">
                <PosterButton
                  href="/contact"
                  variant={pkg.popular ? 'accent' : 'outline'}
                  className="w-full text-xs"
                >
                  {pkg.popular ? 'Choose Growth' : `Request ${pkg.name}`}
                </PosterButton>
              </div>
            </div>
          ))}
        </div>

        {/* FEATURE COMPARISON */}
        <div className="mt-16 border-2 border-frame-border">
          <div className="flex flex-col gap-1 border-b-2 border-frame-border bg-frame-muted/20 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
            <h3 className="font-heading text-lg font-bold uppercase tracking-tight text-frame-fg md:text-xl">
              Plan Comparison
            </h3>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-frame-accent">
              Standard &nbsp;&rarr;&nbsp; Growth &nbsp;&rarr;&nbsp; Custom / Full-Service
            </span>
          </div>

          <div className="hidden grid-cols-4 gap-px bg-frame-border sm:grid">
            <div className="bg-frame-muted/30 px-5 py-3 text-[10px] font-black uppercase tracking-[0.2em] text-frame-muted-fg">
              Feature
            </div>
            {columns.map((col) => (
              <div
                key={col}
                className="bg-frame-muted/30 px-5 py-3 text-center text-[10px] font-black uppercase tracking-[0.2em] text-frame-fg"
              >
                {col}
              </div>
            ))}
          </div>

          <div className="flex flex-col">
            {rows.map((row) => (
              <div
                key={row.label}
                className="grid grid-cols-1 gap-px border-t border-frame-border bg-frame-border sm:grid-cols-4"
              >
                <div className="bg-frame-bg px-5 py-3.5 text-xs font-bold text-frame-fg md:text-sm">
                  {row.label}
                </div>
                {row.values.map((value, vIdx) => (
                  <div
                    key={`${row.label}-${columns[vIdx]}`}
                    className="flex items-center justify-center gap-2 bg-frame-bg px-5 py-3.5 text-center text-xs font-medium text-frame-muted-fg md:text-sm"
                  >
                    <span className="font-black uppercase tracking-[0.18em] text-frame-accent sm:hidden">
                      {columns[vIdx]}:
                    </span>
                    {value === 'check' ? (
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center border border-frame-accent bg-frame-accent/10 text-frame-accent">
                        <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                    ) : value === 'dash' ? (
                      <span aria-hidden="true" className="font-black text-frame-muted-fg">
                        &mdash;
                      </span>
                    ) : (
                      <span className="leading-snug">{value}</span>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* ONE-TIME AUDIT */}
        <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="border-2 border-frame-accent bg-frame-accent/10 p-7 md:p-8">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              One-time service
            </span>
            <h3 className="mt-3 font-heading text-xl font-bold uppercase leading-tight tracking-tight text-frame-fg md:text-2xl">
              {audit.title}
            </h3>
            <div className="mt-5 border-y-2 border-frame-accent/30 py-4">
              <div className="font-heading text-2xl font-black tracking-tight text-frame-fg md:text-3xl">
                {audit.price}
              </div>
              <span className="mt-1 block text-[11px] font-black uppercase tracking-[0.2em] text-frame-accent">
                One-time
              </span>
            </div>
            <p className="mt-5 text-sm font-medium leading-relaxed text-frame-fg/90 md:text-base">
              {audit.body}
            </p>
            <div className="mt-6">
              <PosterButton href="/contact" variant="outline" className="w-full text-xs">
                Request the Audit
              </PosterButton>
            </div>
          </div>

          <div className="border-2 border-frame-border bg-frame-muted/10 p-7 md:p-8">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              Pricing scope
            </span>
            <p className="mt-4 text-sm font-medium leading-relaxed text-frame-fg md:text-base">
              {pricingScope}
            </p>
            <p className="mt-5 text-sm font-semibold leading-relaxed text-frame-fg md:text-base">
              Plans start at ৳30,000 per month for the Standard package. Growth management is ৳50,000
              per month, while larger or more specialized channels can receive a custom proposal.
            </p>
            <div className="mt-6 space-y-3">
              <PosterButton href="/contact">Request a YouTube Management Proposal &rarr;</PosterButton>
              <PosterButton href="/contact" variant="outline" className="w-full">
                Get a Free Consultation
              </PosterButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
