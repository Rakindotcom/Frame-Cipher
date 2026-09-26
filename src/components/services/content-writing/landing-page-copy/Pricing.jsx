import { SectionIntro, PosterButton } from '../../../Kinetic'

const packages = [
  {
    number: '01',
    name: 'Single Landing Page',
    price: '৳10,000/page',
    bestFor: 'Single campaigns and focused offers',
    timeline: '3–5 business days',
    includes: [
      'Offer and audience research',
      'Traffic-source review',
      'Message strategy',
      'Landing page structure',
      'Full landing page copy',
      'Headline, subheadline & CTA development',
      'Objection handling',
      'Proof placement recommendations',
      'SEO-aware recommendations',
      'One agreed revision round',
    ],
  },
  {
    number: '02',
    name: 'Landing Page + Variants',
    price: '৳15,000/page',
    bestFor: 'Campaigns requiring testing',
    timeline: '3–5 days, plus 2–3 days per variant set',
    includes: [
      'Offer and audience research',
      'Traffic-source review',
      'Message strategy',
      'Landing page structure',
      'Full landing page copy',
      'Headline, subheadline & CTA development',
      'Objection handling',
      'Proof placement recommendations',
      'SEO-aware recommendations',
      'Agreed copy variants (headline, CTA or section-level)',
      'Testing notes and hypotheses',
      'One agreed revision round',
    ],
  },
  {
    number: '03',
    name: 'Multi-Page Campaign',
    price: 'Custom',
    bestFor: 'Larger campaigns and multiple audiences',
    timeline: 'Custom, based on page count and review',
    includes: [
      'Offer and audience research per campaign',
      'Traffic-source review per campaign',
      'Message strategy and messaging map',
      'Page structure for each campaign page',
      'Full copy for each campaign-specific page',
      'Headline and CTA development across pages',
      'Objection handling per audience segment',
      'Proof placement recommendations',
      'SEO-aware recommendations',
      'Cross-page message consistency review',
      'One agreed revision round',
    ],
  },
  {
    number: '04',
    name: 'Ongoing Copy Optimization',
    price: 'Custom',
    bestFor: 'Active campaigns with sufficient traffic',
    timeline: 'Ongoing, agreed per cycle',
    includes: [
      'Ongoing copy support after launch',
      'Test hypothesis development',
      'Copy variants and refinements',
      'Headline, CTA and section-level iteration',
      'Objection handling updates',
      'Proof placement recommendations as new evidence arrives',
      'SEO-aware recommendations',
      'Message consistency review across live pages',
      'Copy performance review and next-step recommendations',
      'Agreed revision rounds per cycle',
    ],
  },
]

const notIncluded = [
  'Landing page design and development',
  'Analytics implementation',
  'Ad management and campaign management',
  'Testing platform setup and statistical analysis',
]

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="scroll-mt-20 border-y-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28"
    >
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Pricing &amp; packages" title="Landing Page Copywriting Pricing">
          Pricing depends on the offer, research requirements, page length, complexity, traffic source, number of
          stakeholders, and testing requirements.
        </SectionIntro>

        {/* PACKAGE CARDS */}
        <div className="grid gap-px border-2 border-frame-border bg-frame-border md:grid-cols-2 xl:grid-cols-4">
          {packages.map((pkg) => (
            <article key={pkg.number} className="flex flex-col bg-frame-bg p-7 md:p-8 transition-colors duration-200 hover:bg-frame-muted/40">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-frame-muted">
                Package {pkg.number}
              </span>

              <h3 className="mt-4 font-heading text-lg font-bold uppercase leading-tight tracking-tight text-frame-fg md:text-xl">
                {pkg.name}
              </h3>
              <p className="mt-2 text-xs font-medium leading-relaxed text-frame-muted-fg">{pkg.bestFor}</p>

              <div className="mt-6 border-y-2 border-frame-border/60 py-5">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-frame-accent">
                  Starting Price
                </span>
                <p className="mt-1 font-heading text-2xl font-bold leading-tight tracking-tight text-frame-fg md:text-3xl">
                  {pkg.price}
                </p>
                <p className="mt-3 border-t border-frame-border/40 pt-2 text-[11px] font-semibold text-frame-muted-fg">
                  Typical timeline: {pkg.timeline}
                </p>
              </div>

              <span className="mt-6 text-[10px] font-black uppercase tracking-[0.2em] text-frame-accent">
                What&rsquo;s Included
              </span>
              <ul className="mt-3 flex-1 space-y-2">
                {pkg.includes.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-xs font-medium leading-relaxed text-frame-fg md:text-sm"
                  >
                    <span aria-hidden="true" className="mt-0.5 shrink-0 font-bold text-frame-accent">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-7">
                <PosterButton href="/contact" variant="outline" className="w-full">
                  Choose {pkg.name}
                </PosterButton>
              </div>
            </article>
          ))}
        </div>

        {/* NOT INCLUDED */}
        <div className="mt-12 grid gap-px border-2 border-frame-border bg-frame-border md:grid-cols-[0.8fr_1.2fr]">
          <div className="bg-frame-muted/40 p-7 md:p-8">
            <h3 className="font-heading text-base font-bold uppercase leading-tight tracking-tight text-frame-fg md:text-lg">
              Quoted Separately
            </h3>
            <p className="mt-3 text-sm font-medium leading-relaxed text-frame-muted-fg">
              These are not part of the copywriting packages unless they are explicitly included in the agreed
              scope.
            </p>
          </div>
          <ul className="grid gap-px bg-frame-border md:grid-cols-2">
            {notIncluded.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 bg-frame-bg p-4 text-sm font-medium leading-relaxed text-frame-muted-fg"
              >
                <span aria-hidden="true" className="mt-0.5 shrink-0 font-bold text-frame-accent">
                  &times;
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 flex flex-col gap-6 border-t-2 border-frame-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-3xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
            Every package is scoped around one agreed brief, and final pricing is confirmed after we review your
            offer, audience, traffic source, and requirements.
          </p>
          <div className="shrink-0">
            <PosterButton href="/contact">Request a Custom Quote &rarr;</PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
