import { SectionIntro } from '../../../Kinetic'

export default function ServiceAreas() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Global & Local Focus" title="Service Areas">
          Framecipher is based in Dhaka, Bangladesh, and provides UI/UX design services for businesses across Bangladesh and international markets.
        </SectionIntro>

        <div className="grid gap-6 sm:grid-cols-2">
          <div className="border-2 border-frame-border bg-frame-bg p-7 md:p-10 hover:bg-frame-muted/10 transition-colors">
            <div className="flex items-center gap-3">
              <span className="border-2 border-frame-border px-2 py-0.5 text-[11px] font-black tracking-widest text-frame-accent">01</span>
              <span className="text-xs font-bold uppercase tracking-wider text-frame-accent">International Markets</span>
            </div>
            <h3 className="mt-2 font-heading text-xl md:text-2xl font-bold text-frame-fg uppercase">Global Projects</h3>
            <p className="mt-4 text-sm sm:text-base font-medium leading-relaxed text-frame-muted-fg">
              We work with businesses targeting markets including the UAE, US, UK, Australia, and Canada, adapting the process around the product, audience, technical requirements, and business goals.
            </p>
          </div>

          <div className="border-2 border-frame-border bg-frame-bg p-7 md:p-10 hover:bg-frame-muted/10 transition-colors">
            <div className="flex items-center gap-3">
              <span className="border-2 border-frame-border px-2 py-0.5 text-[11px] font-black tracking-widest text-frame-accent">02</span>
              <span className="text-xs font-bold uppercase tracking-wider text-frame-accent">Domestic Engineering</span>
            </div>
            <h3 className="mt-2 font-heading text-xl md:text-2xl font-bold text-frame-fg uppercase">Bangladesh Businesses</h3>
            <p className="mt-4 text-sm sm:text-base font-medium leading-relaxed text-frame-muted-fg">
              For Bangladesh-based businesses, we also consider responsive and mobile-first requirements from the beginning rather than treating mobile as a final adjustment.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}