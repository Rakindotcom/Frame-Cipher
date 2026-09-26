import Link from 'next/link'
import { SectionIntro } from '../../../Kinetic'

function CheckIcon({ className = "h-4 w-4 shrink-0 text-frame-accent mt-0.5" }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className={className}>
      <path d="m4.5 10 3.5 3.5 7.5-7.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const services = [
  {
    role: 'Logo Design',
    formula: 'The Mark',
    badge: 'Visual Identifier',
    highlight: false,
    desc: 'Creates the foundational visual mark that identifies the business. Can exist independently or serve as the visual center of a broader brand system.',
    points: [
      'Wordmarks, symbols & combination marks',
      'Refined geometry & kerning calibration',
      'Horizontal, stacked & icon variations',
      'Monochrome, reversed & vector files',
      'Small-size & favicon performance'
    ],
    linkText: 'Explore Logo Design Services',
    href: '/services/content-creation/logo-design'
  },
  {
    role: 'Branding',
    formula: 'The System',
    badge: 'Core Focus (This Service)',
    highlight: true,
    desc: 'Answers the foundational question: "How should this business consistently look, sound, and present itself?" Creates the strategic, visual, and verbal rules.',
    points: [
      'Strategic market positioning & audience mapping',
      'Visual identity system (colors, typography, imagery)',
      'Brand voice, tone & key messaging pillars',
      'Comprehensive brand guidebook & rules of use',
      'Cross-channel design governance'
    ],
    linkText: 'Core Architecture',
    href: null
  },
  {
    role: 'Graphic Design',
    formula: 'The Application',
    badge: 'Collateral Production',
    highlight: false,
    desc: 'Applies the approved brand system to individual marketing and corporate communication materials across print and digital media.',
    points: [
      'Fundraising pitch decks & corporate profiles',
      'Product brochures, catalogues & lookbooks',
      'Retail packaging dielines & label systems',
      'Print collateral (cards, letterhead, banners)',
      'Digital campaign key visuals & ad sets'
    ],
    linkText: 'Explore Graphic Design Services',
    href: '/services/content-creation/graphic-design'
  }
]

export default function ServiceEcosystem() {
  return (
    <section className="border-b-2 border-frame-border bg-frame-muted/30 px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Creative Scope Boundaries"
          title="Where Branding Fits With Logo Design and Graphic Design"
        >
          Branding, logo design, and graphic design are closely related, but they solve fundamentally different problems. Keeping these boundaries clear ensures you commission the exact scope your business needs without paying for overlapping work.
        </SectionIntro>

        {/* 3-PART FORMULA SUMMARY */}
        <div className="mt-8 border-2 border-frame-border bg-frame-bg p-6 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 font-heading text-lg md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
            <span className="text-frame-muted-fg">Logo Design = <span className="text-frame-fg">The Mark</span></span>
            <span className="text-frame-accent font-mono">&bull;</span>
            <span className="text-frame-accent">Branding = <span className="text-frame-fg">The System</span></span>
            <span className="text-frame-accent font-mono">&bull;</span>
            <span className="text-frame-muted-fg">Graphic Design = <span className="text-frame-fg">The Application</span></span>
          </div>
        </div>

        {/* 3 COMPARISON CARDS */}
        <div className="mt-8 grid gap-8 lg:grid-cols-3">
          {services.map((item, idx) => (
            <div
              key={idx}
              className={`border-2 p-6 md:p-8 flex flex-col justify-between ${
                item.highlight
                  ? 'border-frame-accent bg-frame-accent/5'
                  : 'border-frame-border bg-frame-bg'
              }`}
            >
              <div>
                <div className="flex items-center justify-between border-b border-frame-border/60 pb-3">
                  <span className="font-mono text-xs font-black text-frame-accent">
                    0{idx + 1} // {item.formula}
                  </span>
                  <span
                    className={`rounded px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
                      item.highlight
                        ? 'border border-frame-accent bg-frame-accent text-frame-accent-fg'
                        : 'bg-frame-muted text-frame-muted-fg'
                    }`}
                  >
                    {item.badge}
                  </span>
                </div>

                <h3 className="mt-4 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                  {item.role}
                </h3>
                <p className="mt-3 text-xs sm:text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {item.desc}
                </p>

                <div className="mt-6 border-t border-frame-border/60 pt-4">
                  <span className="text-[11px] font-black uppercase tracking-wider text-frame-accent">
                    Core Focus:
                  </span>
                  <ul className="mt-3 space-y-2">
                    {item.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2 text-xs font-medium text-frame-fg/90">
                        <CheckIcon />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 border-t border-frame-border/60 pt-6">
                {item.href ? (
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-frame-accent hover:underline"
                  >
                    <span>{item.linkText}</span>
                    <span>&rarr;</span>
                  </Link>
                ) : (
                  <span className="text-xs font-black uppercase tracking-wider text-frame-accent">
                    {item.linkText}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
