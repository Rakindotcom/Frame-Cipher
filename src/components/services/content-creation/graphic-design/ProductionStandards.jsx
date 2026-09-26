import { SectionIntro } from '../../../Kinetic'

function CheckIcon({ className = "h-4 w-4 shrink-0 text-frame-accent mt-0.5" }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className={className}>
      <path d="m4.5 10 3.5 3.5 7.5-7.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const printStandards = [
  'CMYK color profile calibration & ink coverage limits',
  '300+ DPI high-resolution imagery and vector elements',
  'Precise 3mm–5mm bleed margins & crop/trim mark alignment',
  'Safe margins to safeguard typography from cutting variations',
  'Custom packaging dieline compliance (crease, fold & cut lines)',
  'Complete font embedding and text outlining for commercial presses',
  'Print-ready PDF/X standard exports tailored to vendor specs'
]

const digitalStandards = [
  'Vibrant sRGB color spaces optimized for modern screen displays',
  'Pixel-perfect alignment and screen-appropriate typographic scale',
  'Tailored aspect ratios (16:9, 1:1, 4:5, 9:16) for specific platforms',
  'Optimized file compression for swift web and presentation loading',
  'Lossless SVG exports for scalable vector icons and graphics',
  'Clean interactive hyperlinks and metadata embedded in digital PDFs',
  'Specific dimensions matched to advertising networks and CMS requirements'
]

export default function ProductionStandards() {
  return (
    <section className="border-b-2 border-frame-border bg-frame-muted/30 px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Technical Engineering"
          title="Print & Digital Graphic Design Require Different Production Standards"
        >
          Print and digital assets share the same brand identity, but their technical production parameters are fundamentally different. We engineer every file for its specific physical or digital destination instead of simply stretching or resizing one graphic into every format.
        </SectionIntro>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {/* PRINT */}
          <div className="border-2 border-frame-border bg-frame-bg p-6 md:p-8">
            <div className="flex items-center justify-between border-b border-frame-border/60 pb-3">
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                Physical Substrates
              </span>
              <span className="font-mono text-xs font-bold text-frame-fg">
                CMYK / 300 DPI
              </span>
            </div>
            <h3 className="mt-4 font-heading text-2xl font-bold uppercase tracking-tight text-frame-fg">
              Commercial Print Design
            </h3>
            <p className="mt-2 text-xs sm:text-sm font-medium leading-relaxed text-frame-muted-fg">
              Print artwork must adhere to unyielding mechanical constraints. Minor oversights in bleed or ink distribution cause expensive printing errors. We prepare final artwork according to exact press requirements:
            </p>
            <ul className="mt-6 space-y-2.5">
              {printStandards.map((std, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm font-medium text-frame-fg/90">
                  <CheckIcon />
                  <span>{std}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* DIGITAL */}
          <div className="border-2 border-frame-border bg-frame-bg p-6 md:p-8">
            <div className="flex items-center justify-between border-b border-frame-border/60 pb-3">
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                Interactive Screens
              </span>
              <span className="font-mono text-xs font-bold text-frame-fg">
                sRGB / Web Optimized
              </span>
            </div>
            <h3 className="mt-4 font-heading text-2xl font-bold uppercase tracking-tight text-frame-fg">
              Digital & Screen Design
            </h3>
            <p className="mt-2 text-xs sm:text-sm font-medium leading-relaxed text-frame-muted-fg">
              Digital assets demand rapid scanning speed, responsive clarity, and strict file weight controls for quick network loading and sharp rendering across high-density Retina and OLED screens:
            </p>
            <ul className="mt-6 space-y-2.5">
              {digitalStandards.map((std, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm font-medium text-frame-fg/90">
                  <CheckIcon />
                  <span>{std}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* BOTTOM CALLOUT */}
        <div className="mt-8 border-2 border-frame-border bg-frame-bg p-6 text-center md:p-8">
          <p className="text-xs sm:text-sm font-medium text-frame-fg leading-relaxed max-w-4xl mx-auto">
            A website banner, pitch deck slide, display advertisement, and corporate brochure each serve different viewing contexts. We build every version dedicated to its environment so your brand looks pristine in print and razor-sharp on screen.
          </p>
        </div>
      </div>
    </section>
  )
}
