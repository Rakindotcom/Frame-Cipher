import { SectionIntro } from '../../../Kinetic'

function CheckIcon({ className = "h-4 w-4 shrink-0 text-[#A855F7] mt-0.5" }) {
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
    <section className="border-b border-white/[0.08] bg-[#09090B] px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          eyebrow="Scalable Architecture"
          title="Design Systems vs. One-Off Graphic Design"
        >
          A one-off design solves an immediate requirement. A design system becomes vastly more valuable when your business needs new materials repeatedly without reinventing visual direction from scratch each time.
        </SectionIntro>

        {/* SYSTEM RULES BANNER */}
        <div className="mt-12 border border-white/[0.08] bg-[#121214] p-6 md:p-8">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between border-b border-white/[0.06] pb-4">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-[#A855F7]">
              Standardized Design Rules
            </span>
            <span className="text-xs font-mono font-bold text-[#A1A1AA]">
              11 Core System Tokens
            </span>
          </div>
          <p className="mt-4 text-xs sm:text-sm wide:text-lg font-medium leading-relaxed text-[#A1A1AA] max-w-4xl">
            If your business regularly produces brochures, presentations, packaging, sales documents, or marketing assets, creating every piece independently leads to inconsistent typography, mismatched colors, and fractured layouts. We establish reusable design rules across:
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {systemRules.map((rule, idx) => (
              <div key={idx} className="flex items-center gap-2.5 border border-white/[0.08] bg-[#09090B] px-4 py-3">
                <CheckIcon />
                <span className="text-xs font-bold uppercase tracking-tight text-[#FAFAFA]">{rule}</span>
              </div>
            ))}
          </div>
        </div>

        {/* COMPARISON CARDS */}
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {/* ONE-OFF */}
          <div className="border border-white/[0.08] bg-[#09090B] p-6 md:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                <span className="text-xs font-black uppercase tracking-[0.24em] text-[#A855F7]">
                  Standalone Focus
                </span>
                <span className="rounded bg-[#121214] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#A1A1AA]">
                  Focused Scope
                </span>
              </div>
              <h3 className="mt-4 font-heading text-xl md:text-2xl font-bold tracking-tight text-[#FAFAFA]">
                When a One-Off Design Makes Sense
              </h3>
              <p className="mt-2 text-xs sm:text-sm wide:text-lg font-medium leading-relaxed text-[#A1A1AA]">
                A single project is the right choice when you have an isolated need and already possess a clear direction or only need one specific deliverable produced cleanly:
              </p>
              <ul className="mt-6 space-y-2.5">
                {oneOffScenarios.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm font-medium text-zinc-200">
                    <CheckIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-6 border-t border-white/[0.06] pt-4">
              <p className="text-xs font-medium text-[#A1A1AA]">
                Best for infrequent requirements, milestone launches, or standalone events.
              </p>
            </div>
          </div>

          {/* DESIGN SYSTEM */}
          <div className="border-2 border-[#A855F7]/40 bg-[#A855F7]/[0.05] p-6 md:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                <span className="text-xs font-black uppercase tracking-[0.24em] text-[#A855F7]">
                  Modular Consistency
                </span>
                <span className="border border-[#A855F7]/40 bg-frame-accent px-2 py-0.5 text-[10px] font-black uppercase tracking-wider text-[#FAFAFA]">
                  Maximum ROI
                </span>
              </div>
              <h3 className="mt-4 font-heading text-xl md:text-2xl font-bold tracking-tight text-[#FAFAFA]">
                When a Design System Makes More Sense
              </h3>
              <p className="mt-2 text-xs sm:text-sm wide:text-lg font-medium leading-relaxed text-[#A1A1AA]">
                A reusable system becomes vastly more valuable when your team regularly produces branded touchpoints across departments and channels:
              </p>
              <ul className="mt-6 space-y-2.5">
                {systemScenarios.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm font-medium text-zinc-200">
                    <CheckIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-6 border-t border-white/[0.06] pt-4">
              <p className="text-xs font-medium text-[#FAFAFA]">
                We recommend the approach based on your actual business requirements rather than automatically pushing every project toward a retainer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
