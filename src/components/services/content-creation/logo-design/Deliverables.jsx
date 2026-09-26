import { SectionIntro } from '../../../Kinetic'

function CheckIcon({ className = "h-4 w-4 shrink-0 text-frame-accent mt-0.5" }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className={className}>
      <path d="m4.5 10 3.5 3.5 7.5-7.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const deliverablesData = [
  {
    category: 'Primary & Secondary Variations',
    badge: 'Responsive Lockups',
    desc: 'Structured configurations that adapt seamlessly across wide website headers, square packaging, and mobile viewports.',
    items: [
      'Primary horizontal logo lockup',
      'Stacked vertical centered version',
      'Compact secondary lockup for tight spaces',
      'Standalone icon-only symbol mark',
      'Sub-brand or tagline lockup configuration'
    ]
  },
  {
    category: 'Color, Monochrome & Reversed',
    badge: 'Substrate Versatility',
    desc: 'Prepared to ensure uncompromised contrast whether stamped on kraft paper, displayed on dark OLED screens, or printed in single-color ink.',
    items: [
      'Full-color primary brand logo',
      'Solid pure black (100% K) monochrome version',
      'Reversed pure white asset for dark backgrounds',
      'Single-tone grayscale version for newsprint/fax',
      'Calibrated high-contrast dark/light mode assets'
    ]
  },
  {
    category: 'Vector & Digital File Formats',
    badge: 'Infinite Scalability',
    desc: 'Delivered in commercial vector formats that scale infinitely without pixelation, alongside web-ready compressed raster formats.',
    items: [
      'Adobe Illustrator master vector file (.AI)',
      'Clean web vector format (.SVG) for responsive DOM use',
      'Encapsulated PostScript (.EPS) for commercial presses',
      'Print-ready high-resolution vector PDF (.PDF)',
      'Transparent high-res PNGs & web-optimized JPGs'
    ]
  },
  {
    category: 'Favicon & App Icon Suite',
    badge: 'Digital Ecosystem',
    desc: 'Specially simplified and pixel-aligned graphics that maintain crisp legibility in ultra-small digital spaces.',
    items: [
      'Multi-resolution browser favicons (16x16, 32x32, 48x48)',
      'iOS & Android mobile application icons',
      'Social media profile avatars (circular & square)',
      'Email signature and digital watermark badges',
      'PWA and touch icon webmanifest assets'
    ]
  },
  {
    category: 'Logo Usage Reference Guide',
    badge: 'Brand Governance',
    desc: 'Practical operational guidance that empowers your team, developers, and print vendors to apply the mark consistently.',
    items: [
      'Clear space and exclusion zone parameters',
      'Minimum reproduction size limits (print & screen)',
      'Exact color codes (HEX, RGB, CMYK, Pantone PMS)',
      'Approved background contrast combinations',
      'Visual breakdown of unacceptable misuses & distortions'
    ]
  },
  {
    category: 'Ownership & Legal Protections',
    badge: 'Full Transfer',
    desc: 'Clear legal transfer of files with practical counsel on brand name protection and intellectual property.',
    items: [
      'Full commercial ownership and usage rights handover',
      'Editable source artwork included in agreed scope',
      'Competitive originality audit conducted during discovery',
      'No proprietary font embedding locks on logo vectors',
      'Guidance for formal trademark registration filing'
    ]
  }
]

export default function Deliverables() {
  return (
    <section className="border-b-2 border-frame-border bg-frame-muted/30 px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Complete Handover"
          title="Logo Variations & Deliverables"
        >
          A logo is only as useful as the files handed over to your team. We provide a complete, organized asset package ready for immediate digital deployment and commercial press production.
        </SectionIntro>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {deliverablesData.map((deliv, idx) => (
            <div
              key={idx}
              className="border-2 border-frame-border bg-frame-bg p-6 md:p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between border-b border-frame-border/60 pb-3">
                  <span className="font-mono text-xs font-black text-frame-accent">
                    PACKAGE 0{idx + 1}
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

        {/* TRADEMARK DISCLAIMER CALLOUT */}
        <div className="mt-8 border-2 border-frame-border bg-frame-bg p-6 md:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-frame-border/60 pb-3">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              Intellectual Property Clarity
            </span>
            <span className="text-xs font-mono font-bold text-frame-muted-fg">
              Trademark Considerations
            </span>
          </div>
          <p className="mt-3 text-xs sm:text-sm font-medium leading-relaxed text-frame-muted-fg max-w-4xl">
            We design 100% original logo concepts based on rigorous competitive audits and agreed creative briefs. However, creative design services do not constitute formal legal trademark clearance or statutory registration. If you plan to register your logo with government IP authorities, we recommend conducting formal trademark searches and legal review before final filing.
          </p>
        </div>
      </div>
    </section>
  )
}
