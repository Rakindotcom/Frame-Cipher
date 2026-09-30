import Link from 'next/link'
import { SectionIntro, PosterButton } from '../../../Kinetic'

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
    title: 'Brand Strategy & Positioning',
    bestFor: 'New brands, repositioning projects, and businesses needing strategic clarity before design begins.',
    desc: 'The strategic layer establishes what the brand should represent and how it should compete in its category. We ensure visual choices are anchored in commercial reality rather than decorative taste.',
    bullets: [
      'Target audience definition & demographic mapping',
      'Market positioning & competitor category review',
      'Brand differentiation mapping & unique value formulation',
      'Brand personality attributes & corporate core values',
      'Strategic brand narrative & positioning direction'
    ],
    action: { text: 'Discuss Brand Strategy', href: '/contact' }
  },
  {
    num: '02',
    title: 'Visual Identity System',
    bestFor: 'Businesses that need a consistent, distinctive visual language across digital and physical touchpoints.',
    desc: 'We translate the approved strategic direction into a cohesive design system, engineering color harmonies, typography pairings, imagery art direction, iconography, and graphic motifs that work in harmony.',
    bullets: [
      'Comprehensive primary, secondary & accent color palettes',
      'Typographic hierarchy (heading, body, display & web pairings)',
      'Imagery & photography art direction (lighting, subject, cropping)',
      'Custom iconography styles & proprietary graphic elements',
      'Digital UI layout principles & mechanical print standards'
    ],
    action: null
  },
  {
    num: '03',
    title: 'Brand Voice & Messaging Framework',
    bestFor: 'Businesses whose visual identity is set, but whose written communication lacks personality or consistency.',
    desc: 'Brand identity is equally verbal. We define how your business communicates across channels, establishing tone of voice, terminology standards, audience-specific messaging, and context-specific formality levels.',
    bullets: [
      'Tone of voice principles & personality in copywriting',
      'Core brand messaging pillars & value proposition statements',
      'Standardized corporate terminology & words to avoid',
      'Formality calibration (website vs. sales pitch vs. social media)',
      'Real-world copywriting examples for customer touchpoints'
    ],
    action: { text: 'Explore Content Writing Services', href: '/services/content-writing' }
  },
  {
    num: '04',
    title: 'Brand Guidelines Documentation',
    bestFor: 'Businesses managing internal teams, collaborating with external agencies, or scaling marketing output.',
    desc: 'A brand guidebook is a practical working tool, not an ornamental PDF. We turn the brand system into an actionable manual that removes repeated daily decisions and protects consistency across contributors.',
    bullets: [
      'Logo usage parameters, clear space & minimum sizing rules',
      'Digital HEX/RGB and print CMYK/Pantone color specifications',
      'Typography specifications, web font pairings & fallbacks',
      'Imagery guidance, composition rules & graphic element use',
      'Extensive visual correct usage examples & misuse cases'
    ],
    action: null
  },
  {
    num: '05',
    title: 'Rebranding & Brand Refresh',
    bestFor: 'Established companies whose current identity no longer reflects their market, scale, or ambition.',
    desc: 'We help established businesses modernize without automatically throwing away hard-earned market recognition. We audit existing brand equity and formulate a transition roadmap.',
    bullets: [
      'Comprehensive existing brand equity & recognition audit',
      'Competitive category review & repositioning strategy',
      'Visual identity modernization & typography refinement',
      'Updated voice, tone & messaging guidelines',
      'Legacy asset migration & transition rollout planning'
    ],
    action: { text: 'Discuss Rebranding Scope', href: '/contact' }
  }
]

export default function Offerings({ service }) {
  return (
    <section className="border-b-2 border-frame-border bg-frame-bg px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Comprehensive Architecture"
          title="What Our Branding Services Include"
        >
          A complete brand system integrates strategic positioning, visual identity, verbal voice, and documented governance into one practical framework built for commercial scale.
        </SectionIntro>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {offerings.map((item, idx) => (
            <div
              key={idx}
              className={`border-2 border-frame-border bg-frame-bg p-6 md:p-8 flex flex-col justify-between ${
                idx === 4 ? 'lg:col-span-2' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between border-b border-frame-border/60 pb-3">
                  <span className="font-mono text-xs font-black text-frame-accent">
                    PILLAR 0{item.num}
                  </span>
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-frame-muted-fg">
                    Core Discipline
                  </span>
                </div>

                <h3 className="mt-4 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                  {item.title}
                </h3>
                <p className="mt-3 text-xs sm:text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {item.desc}
                </p>

                <div className="mt-4 border-l-2 border-frame-accent/40 pl-3">
                  <span className="text-[10px] font-black uppercase tracking-wider text-frame-muted-fg">
                    Best For:
                  </span>
                  <p className="text-xs font-semibold text-frame-fg mt-0.5">
                    {item.bestFor}
                  </p>
                </div>

                <div className="mt-6 border-t border-frame-border/60 pt-4">
                  <ul className="space-y-2">
                    {item.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2 text-xs font-medium text-frame-fg/90">
                        <CheckIcon />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {item.action && (
                <div className="mt-6 border-t border-frame-border/60 pt-4">
                  <Link
                    href={item.action.href}
                    className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-frame-accent hover:underline"
                  >
                    <span>{item.action.text}</span>
                    <span>&rarr;</span>
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
