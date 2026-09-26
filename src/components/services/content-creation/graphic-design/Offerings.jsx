import Link from 'next/link'
import { SectionIntro } from '../../../Kinetic'

function CheckIcon({ className = "h-4 w-4 shrink-0 text-frame-accent mt-0.5" }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className={className}>
      <path d="m4.5 10 3.5 3.5 7.5-7.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const offerings = [
  {
    num: '01',
    title: 'Presentation & Pitch Deck Design',
    desc: 'Structured slides designed around the information they need to communicate: problem, solution, market size, business model, financial projections, case studies, and clear calls to action. We also build reusable master templates.',
    bullets: [
      'Investor & startup fundraising pitch decks',
      'High-stakes corporate & B2B sales presentations',
      'Proposal decks & enterprise partnership presentations',
      'Conference keynote & event presentation design',
      'Editable master templates (PowerPoint, Keynote, Canva)'
    ]
  },
  {
    num: '02',
    title: 'Company Profile Design',
    desc: 'An authoritative corporate publication engineered for sales conversations, government procurement, strategic partnerships, and investor evaluation. We structure multi-page documents to reflect real operational credibility.',
    bullets: [
      'Mission, vision & corporate capability overviews',
      'Product line & service catalogue layouts',
      'Executive leadership bios & team credentials',
      'Major project case studies, client track records & awards',
      'Print-ready booklets & interactive digital PDF distributions'
    ]
  },
  {
    num: '03',
    title: 'Brochure, Catalogue & Publication Design',
    desc: 'Structured multi-page editorial layouts for companies that need to present product lines, specifications, and reports cleanly across dozens or hundreds of pages.',
    bullets: [
      'Product brochures & service brochures (bi-fold, tri-fold)',
      'Multi-SKU product catalogues with spec tables & pricing',
      'Corporate annual reports, lookbooks & whitepapers',
      'Consistent product naming, specifications & grid systems',
      'Effortless navigation, page numbering & icon systems'
    ]
  },
  {
    num: '04',
    title: 'Print Collateral & Business Materials',
    desc: 'Tactile marketing and corporate identity collateral prepared for actual viewing environments. A business card, roll-up banner, and one-sheet receive distinct, environment-specific visual hierarchy.',
    bullets: [
      'Premium business cards, letterheads & stationery',
      'Marketing flyers, leaflets, one-pagers & handouts',
      'Event backdrops, roll-up banners & conference signage',
      'Product specification sheets & service one-sheets',
      'Corporate invitation suites & official certificates'
    ]
  },
  {
    num: '05',
    title: 'Packaging & Label Design',
    desc: 'Packaging engineered to command retail shelf attention while strictly complying with manufacturer dielines, bleed requirements, trim lines, barcode placements, and printing specifications.',
    bullets: [
      'Retail product boxes, cartons, sleeves & pouches',
      'Bottle, jar & container label systems',
      'Food, cosmetic, FMCG & hardware packaging',
      'Bleed, trim, safe zone & barcode placement compliance',
      'Multi-SKU variant systems with cohesive branding'
    ]
  },
  {
    num: '06',
    title: 'Digital Ad & Marketing Creative Design',
    desc: 'High-converting static advertising creatives adapted across standard display, web, and paid social media dimensions without losing visual consistency.',
    bullets: [
      'Display ad sets & Google Performance Max banners',
      'Campaign key visuals for Meta, LinkedIn & Twitter',
      'Website promotional banners & landing page assets',
      'Retargeting ad variations with high-contrast CTAs',
      'Coordinated multi-dimension campaign rollouts'
    ],
    link: { text: 'Explore Paid Advertising Services', href: '/services/paid-advertising' }
  },
  {
    num: '07',
    title: 'Sales & Business Communication Design',
    desc: 'Practical sales enablement collateral that helps prospective clients evaluate complex offers, compare features, and make confident commercial purchasing decisions.',
    bullets: [
      'Feature comparison sheets & product battlecards',
      'Commercial proposal & quotation document templates',
      'Capability statements & executive one-sheets',
      'Client onboarding guides & welcome kits',
      'Clear typographic hierarchy for quick scanning'
    ]
  },
  {
    num: '08',
    title: 'Internal Communication & Training Materials',
    desc: 'Branded internal documentation that keeps operational standards, employee onboarding, and executive announcements aligned with your external brand quality.',
    bullets: [
      'Employee handbooks & culture orientation guides',
      'Internal training presentations & workshop slides',
      'Standard operating procedure (SOP) visual guides',
      'Operational workflow charts & process roadmaps',
      'Executive company announcements & internal newsletters'
    ]
  },
  {
    num: '09',
    title: 'Infographic & Data Visualization Design',
    desc: 'Transforming dense datasets, statistical comparisons, and multi-step processes into intuitive, elegant visual graphics that readers understand in seconds.',
    bullets: [
      'Business infographics & process diagrams',
      'Timeline, milestone & corporate roadmap graphics',
      'Statistical data visualizations & metric charts',
      'Icon-based modular information systems',
      'Reusable assets for presentations, web, and reports'
    ]
  }
]

export default function Offerings() {
  return (
    <section className="border-b-2 border-frame-border bg-frame-bg px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Comprehensive Execution"
          title="What Our Graphic Design Services Include"
        >
          From standalone investor pitch decks and retail packaging to multi-page corporate catalogues and cross-channel digital marketing campaigns—we design production-ready assets built around functional business needs.
        </SectionIntro>

        <div className="mt-12 grid gap-px border-2 border-frame-border bg-frame-border md:grid-cols-2 lg:grid-cols-3">
          {offerings.map((item, idx) => (
            <div key={idx} className="bg-frame-bg p-6 md:p-8 flex flex-col justify-between transition-colors hover:bg-frame-accent/5">
              <div>
                <div className="flex items-center justify-between border-b border-frame-border/60 pb-3">
                  <span className="font-mono text-xs font-black text-frame-accent">
                    Scope {item.num}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-frame-muted-fg">
                    Collateral
                  </span>
                </div>
                <h3 className="mt-4 font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg">
                  {item.title}
                </h3>
                <p className="mt-3 text-xs sm:text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {item.desc}
                </p>

                <ul className="mt-6 space-y-2 border-t border-frame-border/60 pt-4 text-xs sm:text-sm font-medium text-frame-fg/90">
                  {item.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2">
                      <CheckIcon />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {item.link && (
                <div className="mt-8 pt-4 border-t border-frame-border/60">
                  <Link
                    href={item.link.href}
                    className="text-xs font-bold uppercase tracking-wider text-frame-accent hover:underline inline-flex items-center gap-1"
                  >
                    {item.link.text} &rarr;
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
