import { PosterButton } from '../../../Kinetic'

const steps = [
  {
    number: '01',
    title: 'Initial Consultation',
    description: 'We review your current store (if any), analyze your catalog size, understand your target market, and identify where shoppers are currently dropping off.',
  },
  {
    number: '02',
    title: 'Strategy & Architecture Planning',
    description: 'We map your store structure around your actual buyer journey, select the best platform (Shopify, WooCommerce, Magento), and define the complete technical scope.',
  },
  {
    number: '03',
    title: 'Design & Development',
    description: 'Product and conversion-focused UI/UX design come first with review checkpoints, followed by clean frontend development and payment gateway integrations.',
  },
  {
    number: '04',
    title: 'Quality Check & Testing',
    description: 'We rigorously audit page speed, mobile touch responsiveness, checkout flows, payment processing, tax/shipping logic, and browser compatibility across devices.',
  },
  {
    number: '05',
    title: 'Launch & Handoff',
    description: 'We deploy to production, verify live payment transactions and courier notifications, and provide administrator training so your team can process orders with confidence.',
  },
]

const timelines = [
  { package: 'Starter Store', timeline: '2–3 weeks', desc: 'Single platform setup, focused catalog (up to 50 items), bKash/Nagad integration, and essential checkout.' },
  { package: 'Growth Store', timeline: '4–6 weeks', desc: 'Full custom UI/UX, extended catalog (up to 300 items), multi-payment gateways, courier APIs, and marketing automation.' },
  { package: 'Enterprise Store', timeline: '6–10+ weeks', desc: 'Complex integrations, 300+ products, multi-warehouse stock management, ERP sync, and custom checkout logic.' },
]

export default function Process() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-32">
      <div className="mx-auto max-w-[95vw]">
        {/* SECTION HEADER */}
        <div className="mb-14 md:mb-20 max-w-4xl">
          <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
            Workflow & Milestones / Step-by-Step
          </p>
          <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
            Our E-commerce Development Process
          </h2>
          <p className="mt-6 text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
            We test product browsing, cart behavior, checkout, payment status, shipping calculations, and mobile responsiveness before launch.
          </p>
        </div>

        {/* STEP CARDS WITH WATERMARK */}
        <div className="grid bg-frame-border gap-px border-2 border-frame-border sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="relative overflow-hidden bg-frame-bg p-7 md:p-10 flex flex-col justify-between">
              <span 
                className="pointer-events-none absolute -right-2 -bottom-6 font-heading text-[7rem] md:text-[8rem] font-bold leading-none tracking-tighter text-frame-muted/30 select-none"
                aria-hidden="true"
              >
                {step.number}
              </span>
              <div className="relative z-10">
                <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
                  Phase {step.number}
                </span>
                <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                  {step.title}
                </h3>
                <p className="mt-4 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* TIMELINE TABLE */}
        <div className="mt-20">
          <div className="mb-8 max-w-3xl">
            <span className="text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Delivery Expectations
            </span>
            <h3 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
              Typical Store Delivery Schedules
            </h3>
            <p className="mt-3 text-sm md:text-base font-medium text-frame-muted-fg">
              Ecommerce projects typically take 2–10+ weeks depending on catalog size, platform, integrations, content readiness, and custom functionality.
            </p>
          </div>

          <div className="overflow-x-auto border-2 border-frame-border bg-frame-bg shadow-sm">
            <table className="w-full min-w-[640px] text-left">
              <thead className="border-b-2 border-frame-border bg-frame-muted/30">
                <tr>
                  <th className="p-4 md:p-6 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Package Tier</th>
                  <th className="p-4 md:p-6 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Typical Timeline</th>
                  <th className="p-4 md:p-6 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Scope Summary</th>
                </tr>
              </thead>
              <tbody className="divide-y-2 divide-frame-border text-sm md:text-base font-medium">
                {timelines.map((row, idx) => (
                  <tr key={idx} className="hover:bg-frame-muted/20">
                    <td className="p-4 md:p-6 font-bold text-frame-fg">{row.package}</td>
                    <td className="p-4 md:p-6 text-frame-accent font-bold">{row.timeline}</td>
                    <td className="p-4 md:p-6 text-frame-muted-fg">{row.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
