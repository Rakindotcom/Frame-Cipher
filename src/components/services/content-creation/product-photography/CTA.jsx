import { PosterButton } from '../../../Kinetic'

const trustPillars = [
  {
    num: "01",
    title: "100% Platform Compliance",
    desc: "Amazon, Daraz, and Shopify image specifications guaranteed before delivery."
  },
  {
    num: "02",
    title: "Calibrated Color Fidelity",
    desc: "Calibrated daylight illumination ensuring displayed colors match physical products."
  },
  {
    num: "03",
    title: "Transparent Scoping",
    desc: "Clearly defined shot lists, SKU quantities, and revision terms with zero surprise fees."
  }
]

export default function CTA() {
  return (
    <section className="bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <div className="border-2 border-frame-border bg-frame-muted/20 p-8 md:p-14 lg:p-20">
          <div className="max-w-4xl">
            <span className="text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">
              Studio Bookings Open
            </span>
            <h2 className="mt-4 font-heading text-[clamp(2.4rem,5.5vw,5rem)] font-bold uppercase leading-[0.9] tracking-tighter text-frame-fg">
              Start Your Product Photography Project
            </h2>
            <p className="mt-6 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg max-w-3xl">
              Have a product catalog, new launch, marketplace listing, or campaign that needs professional photography?
            </p>
            <p className="mt-3 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg max-w-3xl border-l-2 border-frame-accent pl-3">
              Send us your product details, quantity, preferred photography style, target platform, and timeline. We will review the requirements and recommend the appropriate shoot structure before production begins.
            </p>

            {/* ACTION BUTTONS */}
            <div className="mt-8 flex flex-wrap gap-4">
              <PosterButton href="/contact">
                Get Free Consultation &rarr;
              </PosterButton>
              <PosterButton href="/contact" variant="outline">
                Request a Product Photography Quote &rarr;
              </PosterButton>
            </div>
          </div>

          {/* TRUST PILLARS */}
          <div className="mt-14 grid gap-6 border-t-2 border-frame-border/60 pt-10 sm:grid-cols-3">
            {trustPillars.map((item, idx) => (
              <div key={idx}>
                <span className="font-mono text-xs font-black text-frame-accent">
                  FEATURE 0{idx + 1}
                </span>
                <h4 className="mt-2 font-heading text-base font-bold uppercase tracking-tight text-frame-fg">
                  {item.title}
                </h4>
                <p className="mt-1 text-xs font-medium leading-relaxed text-frame-muted-fg">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
