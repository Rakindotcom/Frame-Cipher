import { SectionIntro } from '../../../Kinetic'

function CheckIcon({ className = "h-4 w-4 shrink-0 text-frame-accent mt-0.5" }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className={className}>
      <path d="m4.5 10 3.5 3.5 7.5-7.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const deliverablesList = [
  {
    category: 'Final Design Files',
    badge: 'Production-Ready',
    desc: 'Prepared to exact technical specifications for immediate printing or digital deployment.',
    items: [
      'Print-ready high-resolution PDFs (with bleeds & crop marks)',
      'Interactive digital PDFs (compact, linked, and searchable)',
      'Lossless web PNGs and optimized JPG exports',
      'Clean vector SVGs for scalable logos and iconography',
      'Vendor-ready packaging artwork files'
    ]
  },
  {
    category: 'Editable Source Files',
    badge: 'Full Ownership',
    desc: 'Working files provided when agreed in project scope, enabling internal updates and long-term asset control.',
    items: [
      'Adobe InDesign (.indd / .idml) editorial source files',
      'Adobe Illustrator (.ai / .eps) vector art files',
      'Adobe Photoshop (.psd) layered key visual files',
      'Editable Figma design files & component libraries',
      'Master PowerPoint / Keynote presentation files'
    ]
  },
  {
    category: 'Reusable Templates',
    badge: 'Team Efficiency',
    desc: 'Custom master templates engineered to help your internal team produce on-brand materials rapidly.',
    items: [
      'Master slide layouts and branded presentation decks',
      'One-pager and sales proposal document templates',
      'Corporate stationery and executive letterhead templates',
      'Recurring promotional campaign asset templates',
      'Social and digital banner layout frameworks'
    ]
  },
  {
    category: 'Multiple Variations',
    badge: 'Cross-Channel',
    desc: 'Approved design systems adapted cleanly across dimensions, product lines, and languages.',
    items: [
      'Multi-dimensional campaign adaptation sets',
      'Multi-SKU packaging variant colorways',
      'Bilingual adaptations (Bangla & English typography)',
      'Combined print-ready and web-optimized twin packages',
      'Dark mode and light mode collateral adaptations'
    ]
  }
]

export default function Deliverables() {
  return (
    <section className="border-b-2 border-frame-border bg-frame-bg px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Asset Handover"
          title="What You Receive With Our Graphic Design Service"
        >
          Deliverables depend on project scope, design type, and intended use. We confirm exact specifications and file formats before production begins so there are never surprises at handover.
        </SectionIntro>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {deliverablesList.map((deliv, idx) => (
            <div
              key={idx}
              className="border-2 border-frame-border bg-frame-bg p-6 flex flex-col justify-between"
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
                <h3 className="mt-4 font-heading text-lg font-bold uppercase tracking-tight text-frame-fg">
                  {deliv.category}
                </h3>
                <p className="mt-2 text-xs font-medium leading-relaxed text-frame-muted-fg">
                  {deliv.desc}
                </p>
                <ul className="mt-6 space-y-2.5">
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
      </div>
    </section>
  )
}
