import { SectionIntro, PosterButton } from '../../../Kinetic'

const packages = [
  {
    name: 'Starter Local',
    price: '৳15,000/month',
    bestFor: 'Small local businesses',
    locations: '1 location',
    flagship: 'Google Business Profile optimization',
    features: [
      'Google Business Profile Optimization',
      'Local Keyword Research',
      'Basic Competitor Analysis',
      'Core Local Website SEO',
      '1–2 Service / Location Pages per month',
      'Citation Cleanup',
      'Basic Citation Building',
      'Review Strategy',
      'Local Schema',
      'Google Maps Optimization',
      'Local Search Monitoring',
      'Monthly Reporting',
    ],
    popular: false,
  },
  {
    name: 'Growth Local',
    price: '৳30,000/month',
    bestFor: 'Growing businesses',
    locations: '1–3 locations',
    flagship: 'Competitive local markets',
    features: [
      'Google Business Profile Optimization',
      'Local Keyword Research',
      'Advanced Competitor Analysis',
      'Full Local Optimization',
      '2–4 Service / Location Pages per month',
      'Citation Cleanup',
      'Citation Building',
      'Review Strategy',
      'Local Schema',
      'Google Maps Optimization',
      'Geo-Grid Tracking',
      'Local Authority / Link Building',
      'Local Search Monitoring',
      'Biweekly Strategy & Consultation',
      'Monthly Reporting',
    ],
    popular: true,
  },
  {
    name: 'Multi-Location',
    price: '৳50,000+/month',
    bestFor: 'Multi-branch & larger businesses',
    locations: '4+ locations',
    flagship: 'Brands with multiple branches',
    features: [
      'Google Business Profile Optimization',
      'Local Keyword Research',
      'Advanced Competitor Analysis',
      'Multi-Location Optimization',
      'Custom Service / Location Pages',
      'Citation Cleanup',
      'Citation Building',
      'Review Strategy',
      'Local Schema',
      'Google Maps Optimization',
      'Geo-Grid Tracking',
      'Advanced Local Authority / Link Building',
      'Local Search Monitoring',
      'Ongoing Strategy & Consultation',
      'Monthly Reporting',
    ],
    popular: false,
  },
]

const comparisonRows = [
  ['Google Business Profile Optimization', '✓', '✓', '✓'],
  ['Local Keyword Research', '✓', '✓', '✓'],
  ['Competitor Analysis', 'Basic', 'Advanced', 'Advanced'],
  ['Local Website SEO', 'Core pages', 'Full local optimization', 'Multi-location optimization'],
  ['Service / Location Pages', '1–2/month', '2–4/month', 'Custom'],
  ['Citation Cleanup', '✓', '✓', '✓'],
  ['Citation Building', 'Basic', '✓', '✓'],
  ['Review Strategy', '✓', '✓', '✓'],
  ['Local Schema', '✓', '✓', '✓'],
  ['Google Maps Optimization', '✓', '✓', '✓'],
  ['Geo-Grid Tracking', '—', '✓', '✓'],
  ['Local Authority / Link Building', 'Basic', '✓', 'Advanced'],
  ['Local Search Monitoring', '✓', '✓', '✓'],
  ['Monthly Reporting', '✓', '✓', '✓'],
  ['Strategy & Consultation', 'Monthly', 'Biweekly', 'Ongoing'],
  ['Recommended For', 'Single-location businesses', 'Competitive local markets', 'Brands with multiple branches'],
]

export default function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-20 border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Investment & Plans"
          title="Local SEO Pricing in Bangladesh"
        >
          Local SEO pricing depends on the business model, number of locations, competition,
          website condition, and amount of ongoing work required. A small local business with one
          location needs a different campaign from a national brand with dozens of branches.
        </SectionIntro>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {packages.map((pkg, index) => (
            <div
              key={pkg.name}
              className={`flex flex-col justify-between border-2 p-7 md:p-8 transition-colors ${
                pkg.popular
                  ? 'border-frame-accent bg-frame-accent/10'
                  : 'border-frame-border bg-frame-bg hover:border-frame-border/80'
              }`}
            >
              <div>
                <div className="flex min-h-[22px] items-center justify-between gap-2">
                  <span className="text-xs font-black uppercase tracking-[0.22em] text-frame-accent">
                    Plan 0{index + 1}
                  </span>
                  {pkg.popular && (
                    <span className="border-2 border-frame-accent bg-frame-accent px-2.5 py-0.5 text-[10px] font-black uppercase tracking-[0.2em] text-frame-accent-fg">
                      Most Popular
                    </span>
                  )}
                </div>
                <h3 className="mt-2 font-heading text-2xl md:text-3xl font-bold uppercase tracking-tight text-frame-fg">
                  {pkg.name}
                </h3>
                <div className="mt-5 border-y-2 border-frame-border/60 py-4">
                  <div className="font-heading text-2xl md:text-3xl font-black tracking-tight text-frame-fg">
                    {pkg.price}
                  </div>
                  <span className="mt-1 block text-[11px] font-black uppercase tracking-[0.2em] text-frame-accent">
                    {pkg.locations}
                  </span>
                </div>
                <div className="mt-4 border border-frame-accent/50 bg-frame-accent/5 p-3">
                  <span className="text-[10px] font-black uppercase tracking-[0.18em] text-frame-accent">
                    Best For
                  </span>
                  <p className="mt-1 text-xs font-semibold leading-snug text-frame-fg">
                    {pkg.bestFor}
                  </p>
                </div>
                <p className="mt-4 text-xs font-medium leading-relaxed text-frame-muted-fg">
                  Flagship focus: <span className="font-semibold text-frame-fg/90">{pkg.flagship}</span>
                </p>

                <ul className="mt-5 max-h-56 space-y-2.5 overflow-hidden border-t-2 border-frame-border/60 pt-4 text-xs font-medium text-frame-fg/90">
                  {pkg.features.slice(0, 8).map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2">
                      <span className="mt-0.5 text-frame-accent font-bold">✓</span>
                      <span className="leading-snug">{feat}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-[0.65rem] font-black uppercase tracking-[0.2em] text-frame-muted-fg">
                  + {pkg.features.length - 8} more included modules
                </p>
              </div>

              <div className="mt-6 border-t-2 border-frame-border/60 pt-4">
                <PosterButton
                  href="/contact"
                  variant={pkg.popular ? 'accent' : 'outline'}
                  className="w-full text-xs"
                >
                  Choose {pkg.name}
                </PosterButton>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 overflow-hidden border-2 border-frame-border bg-frame-bg">
          <table className="w-full text-left text-sm">
            <thead className="border-b-2 border-frame-border bg-frame-muted/50">
              <tr>
                <th className="p-4 md:p-5 font-heading text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">
                  What&apos;s Included
                </th>
                {packages.map((pkg) => (
                  <th
                    key={pkg.name}
                    className={`p-4 md:p-5 text-center font-heading text-xs md:text-sm font-black uppercase tracking-[0.24em] ${
                      pkg.popular ? 'text-frame-accent' : 'text-frame-fg'
                    }`}
                  >
                    {pkg.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y-2 divide-frame-border text-xs md:text-sm font-medium">
              {comparisonRows.map((row, rIdx) => (
                <tr key={rIdx} className="align-top transition-colors hover:bg-frame-muted/20">
                  <td className="p-4 md:p-5 font-bold text-frame-fg">{row[0]}</td>
                  {[1, 2, 3].map((col) => (
                    <td
                      key={col}
                      className={`p-4 md:p-5 text-center font-medium ${
                        col === 2 ? 'font-semibold text-frame-accent' : 'text-frame-muted-fg'
                      }`}
                    >
                      {row[col]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-10 flex flex-col gap-6 border-t-2 border-frame-border pt-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-3xl space-y-2">
            <p className="text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              For this reason, we do not force every business into the same package.
            </p>
            <p className="text-sm md:text-base font-semibold leading-relaxed text-frame-fg">
              Request a consultation and we can assess your locations, competition, website, and
              current local visibility before recommending a suitable scope.
            </p>
          </div>
          <div className="shrink-0">
            <PosterButton href="/contact">Get a Custom Quote &rarr;</PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}