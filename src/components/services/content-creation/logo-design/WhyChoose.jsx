import Link from 'next/link'
import { SectionIntro, PosterButton } from '../../../Kinetic'

const pillars = [
  {
    num: '01',
    title: 'Designed for Actual Use',
    desc: 'We design for the real physical and digital environments where your logo will live (favicons, mobile headers, single-color packaging stamps, and signage) instead of treating a presentation mockup as the end destination.'
  },
  {
    num: '02',
    title: 'Distinct Creative Directions',
    desc: 'We present three thoroughly developed, conceptually distinct visual directions backed by clear commercial reasoning, rather than confusing you with dozens of trivial, superficial tweaks.'
  },
  {
    num: '03',
    title: 'Practical Logo Systems',
    desc: 'We engineer complete responsive systems (horizontal, stacked, icon-only, full-color, solid black, and reversed white) so your brand has the right lockup for every conceivable space.'
  },
  {
    num: '04',
    title: 'Production-Ready Master Vectors',
    desc: 'Artwork is prepared to unyielding mechanical print and digital display standards, delivered in pristine vector AI, SVG, EPS, and high-res raster formats without font or resolution bottlenecks.'
  },
  {
    num: '05',
    title: 'Connected Creative Capabilities',
    desc: 'When your new mark is ready to scale into complete brand guidelines, corporate pitch decks, packaging dielines, or digital ad campaigns, our in-house team handles the progression without friction.'
  }
]

const portfolioAttributes = [
  'Client & Industry Category',
  'Commercial Design Challenge',
  'Logo Requirement & Mark Type',
  'Strategic Creative Direction',
  'Final Responsive Logo System',
  'Color & Monochrome Variations',
  'Real-World Production Mockups',
  'Approved Brand Outcomes'
]

export default function WhyChoose() {
  return (
    <section className="border-b-2 border-frame-border bg-frame-muted/30 px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Commercial Advantage"
          title="Why Businesses Choose Our Logo Design Service"
        >
          We build marks that command instant authority, endure beyond passing design trends, and scale without technical failure across every physical and digital medium.
        </SectionIntro>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className={`border-2 border-frame-border bg-frame-bg p-6 md:p-8 flex flex-col justify-between ${
                idx === 4 ? 'sm:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div>
                <span className="font-mono text-xs font-black text-frame-accent">
                  PILLAR 0{pillar.num}
                </span>
                <h3 className="mt-3 font-heading text-xl font-bold uppercase tracking-tight text-frame-fg">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-xs sm:text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {pillar.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* SELECTED LOGO DESIGN WORK / PORTFOLIO TRIGGER */}
        <div className="mt-16 border-2 border-frame-accent bg-frame-bg p-6 md:p-10">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 border-b border-frame-border/60 pb-6">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                Proven Track Record
              </span>
              <h3 className="mt-1 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
                Selected Logo Design Work
              </h3>
              <p className="mt-2 text-xs sm:text-sm font-medium text-frame-muted-fg max-w-2xl">
                Explore selected logo design projects covering new venture identities, corporate logo redesigns, product brand emblems, and multi-format visual marks.
              </p>
            </div>
            <div className="shrink-0">
              <PosterButton href="/projects#logo-design">
                View Logo Design Portfolio &rarr;
              </PosterButton>
            </div>
          </div>

          <div className="mt-6">
            <span className="text-[11px] font-black uppercase tracking-wider text-frame-muted-fg">
              Every Featured Case Study Highlights:
            </span>
            <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {portfolioAttributes.map((attr, idx) => (
                <div key={idx} className="flex items-center gap-2 border border-frame-border/60 bg-frame-muted/30 px-3 py-2 text-[11px] font-bold uppercase tracking-tight text-frame-fg">
                  <span className="h-1.5 w-1.5 rounded-full bg-frame-accent shrink-0" />
                  <span className="truncate">{attr}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
