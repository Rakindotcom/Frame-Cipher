import { SectionIntro } from '../../../Kinetic'

function CheckIcon({ className = "h-4 w-4 shrink-0 text-frame-accent mt-0.5" }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className={className}>
      <path d="m4.5 10 3.5 3.5 7.5-7.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const systemRules = [
  'Typography & Heading Hierarchy',
  'Color Usage & Palette Distribution',
  'Image Treatment & Art Direction',
  'Icon Styles & Line Weights',
  'Layout Structures & Page Grids',
  'Information Blocks & Callout Styles',
  'Charts & Data Visualization Rules',
  'Cover & Section Layout Systems',
  'Product & Service Presentation Grids'
]

const oneOffScenarios = [
  'One standalone brochure or flyer',
  'One investor or client presentation',
  'One business card and stationery set',
  'One product label or packaging SKU',
  'One promotional campaign banner',
  'One formal company profile document',
  'One event backdrop or roll-up banner',
  'One sales comparison sheet or one-pager'
]

const systemScenarios = [
  'Multiple product variants and SKUs',
  'Monthly recurring marketing materials',
  'Frequent sales and investor presentations',
  'Expanding library of sales enablement documents',
  'Large multi-page product or service catalogues',
  'Multiple packaging lines sharing brand DNA',
  'Multi-channel campaign creative adaptation sets',
  'Internal corporate and employee documentation'
]

export default function SystemVsOneOff() {
  return (
    <section className="border-b-2 border-frame-border bg-frame-bg px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Scalable Architecture"
          title="Design Systems vs. One-Off Graphic Design"
        >
          A one-off design solves an immediate requirement. A design system becomes vastly more valuable when your business needs new materials repeatedly without reinventing visual direction from scratch each time.
        </SectionIntro>

        {/* SYSTEM RULES BANNER */}
        <div className="mt-12 border-2 border-frame-border bg-frame-muted/20 p-6 md:p-8">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between border-b border-frame-border/60 pb-4">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              Standardized Design Rules
            </span>
            <span className="text-xs font-mono font-bold text-frame-muted-fg">
              11 Core System Tokens
            </span>
          </div>
          <p className="mt-4 text-xs sm:text-sm font-medium leading-relaxed text-frame-muted-fg max-w-4xl">
            If your business regularly produces brochures, presentations, packaging, sales documents, or marketing assets, creating every piece independently leads to inconsistent typography, mismatched colors, and fractured layouts. We establish reusable design rules across:
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {systemRules.map((rule, idx) => (
              <div key={idx} className="flex items-center gap-2.5 border border-frame-border/80 bg-frame-bg px-4 py-3">
                <CheckIcon />
                <span className="text-xs font-bold uppercase tracking-tight text-frame-fg">{rule}</span>
              </div>
            ))}
          </div>
        </div>

        {/* COMPARISON CARDS */}
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {/* ONE-OFF */}
          <div className="border-2 border-frame-border bg-frame-bg p-6 md:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-frame-border/60 pb-3">
                <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                  Standalone Focus
                </span>
                <span className="rounded bg-frame-muted px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-frame-muted-fg">
                  Focused Scope
                </span>
              </div>
              <h3 className="mt-4 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                When a One-Off Design Makes Sense
              </h3>
              <p className="mt-2 text-xs sm:text-sm font-medium leading-relaxed text-frame-muted-fg">
                A single project is the right choice when you have an isolated need and already possess a clear direction or only need one specific deliverable produced cleanly:
              </p>
              <ul className="mt-6 space-y-2.5">
                {oneOffScenarios.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm font-medium text-frame-fg/90">
                    <CheckIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-6 border-t border-frame-border/60 pt-4">
              <p className="text-xs font-medium text-frame-muted-fg">
                Best for infrequent requirements, milestone launches, or standalone events.
              </p>
            </div>
          </div>

          {/* DESIGN SYSTEM */}
          <div className="border-2 border-frame-accent bg-frame-accent/5 p-6 md:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-frame-border/60 pb-3">
                <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                  Modular Consistency
                </span>
                <span className="border border-frame-accent bg-frame-accent px-2 py-0.5 text-[10px] font-black uppercase tracking-wider text-frame-accent-fg">
                  Maximum ROI
                </span>
              </div>
              <h3 className="mt-4 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                When a Design System Makes More Sense
              </h3>
              <p className="mt-2 text-xs sm:text-sm font-medium leading-relaxed text-frame-muted-fg">
                A reusable system becomes vastly more valuable when your team regularly produces branded touchpoints across departments and channels:
              </p>
              <ul className="mt-6 space-y-2.5">
                {systemScenarios.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm font-medium text-frame-fg/90">
                    <CheckIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-6 border-t border-frame-border/60 pt-4">
              <p className="text-xs font-medium text-frame-fg">
                We recommend the approach based on your actual business requirements rather than automatically pushing every project toward a retainer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
