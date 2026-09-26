import Link from 'next/link'
import { SectionIntro, PosterButton } from '../../../Kinetic'

function CheckIcon({ className = "h-4 w-4 shrink-0 text-frame-accent mt-0.5" }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className={className}>
      <path d="m4.5 10 3.5 3.5 7.5-7.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const disciplines = [
  {
    title: 'Logo Design',
    badge: 'Core Identifier',
    highlight: true,
    desc: 'Focuses specifically on the foundational visual mark that identifies your business across all media.',
    includes: [
      'Wordmarks, symbols & combination marks',
      'Monograms, lettermarks & emblems',
      'Responsive logo variations (horizontal, stacked, icon)',
      'Vector master artwork (AI, SVG, EPS, PDF)',
      'Monochrome, reversed & small-size versions'
    ],
    linkText: 'You Are Here',
    href: null
  },
  {
    title: 'Branding',
    badge: 'Complete Identity System',
    highlight: false,
    desc: 'Develops the broader visual identity system, brand strategy, and comprehensive design governance around the logo.',
    includes: [
      'Primary, secondary & supporting brand color palettes',
      'Primary headline & body typography pairings',
      'Art direction, imagery styling & visual motifs',
      'Extensive brand guideline manuals & usage rules',
      'Brand voice, tone & messaging frameworks'
    ],
    linkText: 'Explore Branding Services',
    href: '/services/content-creation/branding'
  },
  {
    title: 'Graphic Design',
    badge: 'Collateral Application',
    highlight: false,
    desc: 'Applies the logo and brand identity to practical business collateral, publications, packaging, and marketing assets.',
    includes: [
      'Fundraising pitch decks & sales presentations',
      'Multi-page corporate company profiles & catalogues',
      'Commercial packaging dielines & label systems',
      'Print collateral (stationery, flyers, banners, signs)',
      'Digital ad creatives & campaign key visuals'
    ],
    linkText: 'Explore Graphic Design Services',
    href: '/services/content-creation/graphic-design'
  }
]

export default function ServiceEcosystem() {
  return (
    <section className="border-b-2 border-frame-border bg-frame-bg px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Creative Scope Clarity"
          title="Logo Design vs. Branding vs. Graphic Design"
        >
          These creative services are closely connected, but they solve fundamentally different problems. Keeping them distinct defines an accurate scope while ensuring seamless cross-discipline collaboration.
        </SectionIntro>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {disciplines.map((item, idx) => (
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
                    DISCIPLINE 0{idx + 1}
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
                  {item.title}
                </h3>
                <p className="mt-3 text-xs sm:text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {item.desc}
                </p>

                <div className="mt-6 border-t border-frame-border/60 pt-4">
                  <span className="text-[11px] font-black uppercase tracking-wider text-frame-accent">
                    Core Focus:
                  </span>
                  <ul className="mt-3 space-y-2">
                    {item.includes.map((inc, iIdx) => (
                      <li key={iIdx} className="flex items-start gap-2 text-xs font-medium text-frame-fg/90">
                        <CheckIcon />
                        <span>{inc}</span>
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
