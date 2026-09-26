import { SectionIntro } from '../../../Kinetic'

function CheckIcon({ className = "h-4 w-4 shrink-0 text-frame-accent mt-0.5" }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className={className}>
      <path d="m4.5 10 3.5 3.5 7.5-7.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const defaultOfferings = [
  {
    num: '01',
    title: 'Logo Discovery & Creative Direction',
    description: 'Before developing concepts, we establish what the logo needs to communicate and where it will be used. We review brand positioning, target audience, industry visual conventions, competitor marks, typography styles, and color directions.',
    bullets: [
      'Business discovery & commercial positioning analysis',
      'Target audience & demographic alignment',
      'Industry landscape & category conventions audit',
      'Competitor visual benchmark & differentiation strategy',
      'Core application scoping (screen, print, signage, packaging)'
    ]
  },
  {
    num: '02',
    title: 'Logo Concept Development',
    description: 'We develop distinct, thoughtful creative directions based on the approved brief. Each proposed direction is presented with a clear visual rationale rather than overwhelming you with dozens of trivial tweaks.',
    bullets: [
      'Multiple genuinely distinct creative directions',
      'Symbol-based marks, wordmarks, and combination marks',
      'Initial monochrome and color contrast exploration',
      'Application mockups across real-world business collateral',
      'Transparent rationale for typography and geometry'
    ]
  },
  {
    num: '03',
    title: 'Wordmarks, Symbols & Combination Marks',
    description: 'Different businesses benefit from different logo structures. We build marks tailored to your name length, category, and communication priorities.',
    bullets: [
      'Custom typographic wordmarks & letterforms',
      'Distinctive standalone symbols & icon marks',
      'Harmonious combination marks (symbol + wordmark lockups)',
      'Monograms, lettermarks & emblem-style seals',
      'Responsive logo systems for varied display contexts'
    ]
  },
  {
    num: '04',
    title: 'Logo Refinement & Responsive Variations',
    description: 'Once a direction is selected, we refine geometry, proportions, kerning, and color balances into a practical, modular logo system.',
    bullets: [
      'Primary horizontal & stacked vertical lockups',
      'Icon-only mark & simplified small-size versions',
      'Full-color, solid black, and reversed white assets',
      'Monochrome versions calibrated for single-color printing',
      'High-contrast versions for dark and light backgrounds'
    ]
  },
  {
    num: '05',
    title: 'Logo Redesign & Refresh',
    description: 'An existing logo does not always need to be thrown away. We assess your current mark to preserve recognized equity while modernizing geometry and technical usability.',
    bullets: [
      'Brand equity assessment to identify what elements to keep',
      'Proportion, kerning, and geometric balance refinement',
      'Color palette modernization & contrast calibration',
      'Small-size & digital screen performance improvements',
      'Substantial redesign for strategic business repositioning'
    ]
  },
  {
    num: '06',
    title: 'File Preparation & Usage Guidelines',
    description: 'A logo is only useful if your team can apply it consistently. We prepare production-ready vector and raster exports alongside clear usage rules.',
    bullets: [
      'Vector master files (AI, SVG, EPS, PDF) for infinite scaling',
      'Lossless transparent PNGs & web-optimized JPG exports',
      'Favicon (16x16, 32x32) and high-res app icon packages',
      'Clear space, minimum size, and placement parameters',
      'Approved color codes (HEX, RGB, CMYK, Pantone) & misuse rules'
    ]
  }
]

export default function Offerings({ service }) {
  const offerings = service?.offerings?.length ? service.offerings : defaultOfferings

  return (
    <section className="border-b-2 border-frame-border bg-frame-bg px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Specialized Capabilities"
          title="Logo Design Services"
        >
          From strategic discovery to production-ready vector master packages, we engineer distinctive marks that scale across every modern brand touchpoint.
        </SectionIntro>

        <div className="mt-12 grid gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-2 lg:grid-cols-3">
          {offerings.map((item, index) => (
            <div key={index} className="bg-frame-bg p-7 md:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-frame-border/60 pb-3">
                  <span className="font-mono text-xs font-black text-frame-accent">
                    SCOPE 0{index + 1}
                  </span>
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-frame-muted-fg">
                    Core Capability
                  </span>
                </div>
                <h3 className="mt-4 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                  {item.title}
                </h3>
                {item.description && (
                  <p className="mt-3 text-xs sm:text-sm font-medium leading-relaxed text-frame-muted-fg">
                    {item.description}
                  </p>
                )}
              </div>

              {item.bullets?.length > 0 && (
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
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
