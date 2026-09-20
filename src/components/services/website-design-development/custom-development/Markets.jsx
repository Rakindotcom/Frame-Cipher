import { SectionIntro } from '../../../Kinetic'

export default function Markets() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Regional &amp; International Delivery" title="Custom / Next.js Development for Bangladesh &amp; International Businesses">
          Framecipher is based in Dhaka and works with businesses in Bangladesh as well as clients serving international markets.
        </SectionIntro>

        <div className="grid gap-6 md:grid-cols-2 border-2 border-frame-border bg-frame-border">
          <div className="bg-frame-bg p-8 md:p-10 hover:bg-frame-muted/10 transition-colors">
            <div className="flex items-center gap-3">
              <span className="border-2 border-frame-border px-2 py-0.5 text-[11px] font-black tracking-widest text-frame-accent">01</span>
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                Domestic Ecosystem
              </span>
            </div>
            <h3 className="mt-3 font-heading text-2xl font-bold uppercase text-frame-fg">
              For Bangladesh-Based Projects
            </h3>
            <p className="mt-4 text-sm sm:text-base font-medium leading-relaxed text-frame-muted-fg">
              We consider local payment systems, mobile-first usage patterns, local business workflows, and integrations relevant to the market.
            </p>
          </div>

          <div className="bg-frame-bg p-8 md:p-10 hover:bg-frame-muted/10 transition-colors">
            <div className="flex items-center gap-3">
              <span className="border-2 border-frame-border px-2 py-0.5 text-[11px] font-black tracking-widest text-frame-accent">02</span>
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                Global Applications
              </span>
            </div>
            <h3 className="mt-3 font-heading text-2xl font-bold uppercase text-frame-fg">
              For International Projects
            </h3>
            <p className="mt-4 text-sm sm:text-base font-medium leading-relaxed text-frame-muted-fg">
              We adapt the application&apos;s content, user experience, integrations, operational requirements, and technical considerations around the target market across the US, UK, Australia, Canada, and UAE.
            </p>
          </div>
        </div>

        <p className="mt-6 text-xs sm:text-sm text-frame-muted-fg">
          The technical approach remains project-specific rather than using one fixed architecture for every client.
        </p>
      </div>
    </section>
  )
}