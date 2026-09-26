import { SectionIntro } from '../../../Kinetic'

function CheckIcon({ className = "h-4 w-4 shrink-0 text-frame-accent mt-0.5" }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className={className}>
      <path d="m4.5 10 3.5 3.5 7.5-7.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const deliverables = [
  {
    category: 'Brand Strategy Deliverables',
    badge: 'Strategic Foundation',
    desc: 'The documented commercial roadmap defining how your brand competes and connects.',
    items: [
      'Documented brand positioning statement',
      'Target audience segments & persona profiles',
      'Category differentiation framework & USP mapping',
      'Brand personality attributes & corporate values',
      'Core messaging pillars & strategic growth recommendations'
    ]
  },
  {
    category: 'Visual Identity Deliverables',
    badge: 'Design System',
    desc: 'The complete visual toolkit engineered for cohesive physical and digital execution.',
    items: [
      'Primary logo development or existing logo integration',
      'Secondary horizontal, stacked & icon-only lockups',
      'Color palette values (HEX, RGB, CMYK, Pantone PMS)',
      'Primary & secondary web/print typography pairings',
      'Art direction, iconography library & graphic patterns'
    ]
  },
  {
    category: 'Voice & Messaging Deliverables',
    badge: 'Verbal Identity',
    desc: 'The rules of engagement for how your business communicates across written touchpoints.',
    items: [
      'Documented brand tone of voice framework',
      'Formality spectrum & context-specific tone guidance',
      'Core elevator pitches & value proposition messaging',
      'Corporate vocabulary, approved phrases & terms to avoid',
      'Practical copywriting examples (web, email, social, sales)'
    ]
  },
  {
    category: 'Brand Guidelines Manual',
    badge: 'Master Reference',
    desc: 'The authoritative reference manual governing internal teams, agencies, and vendors.',
    items: [
      'Logo clear space, minimum sizing & placement rules',
      'Color distribution, contrast ratios & accessibility specs',
      'Typography hierarchy, webfont embedding & line heights',
      'Photographic composition, lighting & cropping standards',
      'Extensive visual correct vs incorrect usage case studies'
    ]
  },
  {
    category: 'Final Files & Asset Library',
    badge: 'Production-Ready',
    desc: 'Neatly structured, cloud-accessible folders organized for immediate production use.',
    items: [
      'Master vector artwork files (.AI, .EPS, .SVG, .PDF)',
      'Web-optimized transparent PNGs & high-res JPGs',
      'Complete digital Brand Guidebook (.PDF & interactive)',
      'Editable source files for branded design templates',
      'Comprehensive favicon & app icon package'
    ]
  },
  {
    category: 'Ownership & Legal Protections',
    badge: 'Full Transfer',
    desc: 'Clear legal transfer of files with practical counsel on intellectual property protection.',
    items: [
      'Full commercial ownership & usage rights transfer',
      'No proprietary font embedding locks on logo vectors',
      'Originality audit conducted during competitive review',
      'Guidance for formal trademark search and legal review',
      'Vendor onboarding checklist for outside suppliers'
    ]
  }
]

export default function Deliverables() {
  return (
    <section className="border-b-2 border-frame-border bg-frame-bg px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Asset Handover"
          title="What You Receive With Our Branding Service"
        >
          Deliverables depend on your selected project scope, but a complete engagement yields an end-to-end strategic, visual, and verbal asset library ready for immediate operational deployment.
        </SectionIntro>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {deliverables.map((deliv, idx) => (
            <div
              key={idx}
              className="border-2 border-frame-border bg-frame-bg p-6 md:p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between border-b border-frame-border/60 pb-3">
                  <span className="font-mono text-xs font-black text-frame-accent">
                    DELIV 0{idx + 1}
                  </span>
                  <span className="rounded bg-frame-muted px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-frame-muted-fg">
                    {deliv.badge}
                  </span>
                </div>
                <h3 className="mt-4 font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg">
                  {deliv.category}
                </h3>
                <p className="mt-2 text-xs font-medium leading-relaxed text-frame-muted-fg">
                  {deliv.desc}
                </p>
                <ul className="mt-6 space-y-2 border-t border-frame-border/60 pt-4">
                  {deliv.items.map((item, iIdx) => (
                    <li key={iIdx} className="flex items-start gap-2 text-xs font-medium text-frame-fg/90">
                      <CheckIcon />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* TRADEMARK DISCLAIMER */}
        <div className="mt-8 border-2 border-frame-border bg-frame-muted/20 p-6 md:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-frame-border/60 pb-3">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              Intellectual Property Governance
            </span>
            <span className="text-xs font-mono font-bold text-frame-muted-fg">
              Trademark Guidance
            </span>
          </div>
          <p className="mt-3 text-xs sm:text-sm font-medium leading-relaxed text-frame-muted-fg max-w-4xl">
            We develop original brand concepts grounded in thorough competitive category audits. However, branding services do not constitute formal legal trademark clearance or statutory registration. If you plan to register trademarks with national IP authorities, we recommend conducting formal trademark searches and legal review before final filing.
          </p>
        </div>
      </div>
    </section>
  )
}
