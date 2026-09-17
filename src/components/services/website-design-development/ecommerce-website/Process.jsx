import { SectionIntro } from '../../../Kinetic'

const timelines = [
  { package: 'Starter Store', timeline: '2–3 weeks', desc: 'Single platform setup, focused product catalog, local payment gateway, and essential checkout.' },
  { package: 'Growth Store', timeline: '4–6 weeks', desc: 'Full custom UI/UX, extended catalog, multi-payment gateways, courier APIs, and marketing tools.' },
  { package: 'Enterprise Store', timeline: '6–10+ weeks', desc: 'Complex integrations, multi-warehouse stock management, ERP sync, and custom checkout logic.' },
]

export default function Process() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Timeline & Delivery"
          title="E-commerce Website Development Timeline"
        >
          Ecommerce projects typically take 2–10+ weeks depending on catalog size, platform, integrations, content readiness, and custom functionality.
        </SectionIntro>

        <div className="grid bg-frame-border gap-px sm:grid-cols-3">
          {timelines.map((item, idx) => (
            <div key={idx} className="bg-frame-bg p-7 md:p-8 flex flex-col justify-between">
              <div>
                <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">Tier 0{idx + 1}</span>
                <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                  {item.package}
                </h3>
                <div className="mt-4 font-heading text-2xl font-bold text-frame-accent">
                  {item.timeline}
                </div>
              </div>
              <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
