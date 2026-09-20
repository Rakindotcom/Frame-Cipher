import { SectionIntro } from '../../../Kinetic'

export default function ServiceAreas() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Global & Local Reach" title="Service Areas">
          Framecipher is based in Dhaka, Bangladesh, and provides website redesign services for businesses across Bangladesh and international clients.
        </SectionIntro>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="border-2 border-frame-border bg-frame-bg p-6">
            <span className="text-xs font-bold uppercase tracking-wider text-frame-accent">Target Markets</span>
            <h3 className="mt-2 font-heading text-xl font-bold text-frame-fg uppercase">Markets We Serve</h3>
            <ul className="mt-4 space-y-2 text-sm font-medium text-frame-muted-fg">
              {['Bangladesh', 'United States', 'United Kingdom', 'Australia', 'Canada', 'United Arab Emirates'].map((m, mIdx) => (
                <li key={mIdx} className="flex items-center gap-2">
                  <span className="text-frame-accent font-bold">✓</span>
                  <span className="text-frame-fg">{m}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-2 border-frame-border bg-frame-bg p-6">
            <span className="text-xs font-bold uppercase tracking-wider text-frame-accent">Domestic Focus</span>
            <h3 className="mt-2 font-heading text-xl font-bold text-frame-fg uppercase">Bangladesh Businesses</h3>
            <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
              For Bangladesh-based businesses, our redesign process can account for mobile-first browsing behavior, local network conditions, bilingual content requirements, local conversion paths, and other market-specific considerations where relevant.
            </p>
          </div>

          <div className="border-2 border-frame-border bg-frame-bg p-6">
            <span className="text-xs font-bold uppercase tracking-wider text-frame-accent">International Standards</span>
            <h3 className="mt-2 font-heading text-xl font-bold text-frame-fg uppercase">Global Projects</h3>
            <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
              For international projects, we adapt the redesign around the target market, audience, technical requirements, and business objectives rather than applying a single-market template.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}