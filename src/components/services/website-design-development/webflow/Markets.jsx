import { SectionIntro } from '../../../Kinetic'

const bangladeshWebflowPoints = [
  'Mobile-first browsing experience',
  'Local content and SEO requirements',
  'Performance on varied connections',
  'Practical publishing workflows for local teams',
]

const internationalWebflowPoints = [
  'Market- and language-specific structure',
  'Localized content and domains',
  'Multi-market SEO requirements',
  'Global reach across the US, UK, Australia, Canada & UAE',
]

export default function Markets() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Regional &amp; International Delivery" title="Webflow Development for Bangladesh &amp; Global Businesses">
          Framecipher is based in Dhaka, Bangladesh, and builds Webflow websites for businesses across Bangladesh as well as international markets.
        </SectionIntro>

        <div className="grid gap-6 md:grid-cols-2 border-2 border-frame-border bg-frame-border">
          <div className="bg-frame-bg p-8 md:p-10 hover:bg-frame-muted/10 transition-colors">
            <div className="flex items-center gap-3">
              <span className="border-2 border-frame-border px-2 py-0.5 text-[11px] font-black tracking-widest text-frame-accent">01</span>
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                Domestic Focus
              </span>
            </div>
            <h3 className="mt-3 font-heading text-2xl font-bold uppercase text-frame-fg">
              For Bangladesh-Based Businesses
            </h3>
            <p className="mt-4 text-sm sm:text-base font-medium text-frame-muted-fg">
              We can account for:
            </p>
            <ul className="mt-4 space-y-2.5 text-sm sm:text-base font-medium text-frame-fg/90">
              {bangladeshWebflowPoints.map((pt) => (
                <li key={pt} className="flex items-start gap-2">
                  <span className="text-frame-accent font-bold">✓</span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-frame-bg p-8 md:p-10 hover:bg-frame-muted/10 transition-colors">
            <div className="flex items-center gap-3">
              <span className="border-2 border-frame-border px-2 py-0.5 text-[11px] font-black tracking-widest text-frame-accent">02</span>
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                Worldwide Reach
              </span>
            </div>
            <h3 className="mt-3 font-heading text-2xl font-bold uppercase text-frame-fg">
              For International Businesses
            </h3>
            <p className="mt-4 text-sm sm:text-base font-medium text-frame-muted-fg">
              We can structure websites around:
            </p>
            <ul className="mt-4 space-y-2.5 text-sm sm:text-base font-medium text-frame-fg/90">
              {internationalWebflowPoints.map((pt) => (
                <li key={pt} className="flex items-start gap-2">
                  <span className="text-frame-accent font-bold">✓</span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-6 text-xs sm:text-sm text-frame-muted-fg">
          The implementation depends on the markets, languages, and localization requirements included in the project.
        </p>
      </div>
    </section>
  )
}