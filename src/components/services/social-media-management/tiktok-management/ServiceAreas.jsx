import { SectionIntro, PosterButton } from '../../../Kinetic'

const bangladeshAdaptation = [
  'Bangla',
  'English',
  'Natural Banglish where appropriate',
  'Local audience behavior',
  'Local cultural context',
  'Seasonal campaigns',
  'Local offers',
  'Location-specific content',
  'Bangladesh-specific customer questions',
]

const internationalMarkets = [
  'United States',
  'United Kingdom',
  'Australia',
  'Canada',
  'United Arab Emirates',
  'Other agreed markets',
]

const internationalAdaptation = [
  'Local language',
  'Terminology',
  'Cultural references',
  'Audience expectations',
  'Local trends',
  'Publishing windows',
  'Product positioning',
  'Calls to action',
  'Business objectives',
]

export default function ServiceAreas() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Coverage" title="TikTok Management Service Areas" />

        <div className="grid gap-px border-2 border-frame-border bg-frame-border lg:grid-cols-2">
          <div className="flex flex-col justify-between bg-frame-bg p-7 md:p-8">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                TikTok Management in Bangladesh
              </span>
              <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
                Framecipher provides TikTok management for businesses in Bangladesh, including businesses
                targeting Dhaka and other markets across the country.
              </p>
              <p className="mt-4 text-sm font-semibold leading-relaxed text-frame-fg/90 md:text-base">
                For Bangladesh campaigns, content can be adapted to:
              </p>
            </div>

            <ul className="mt-6 flex flex-wrap gap-2">
              {bangladeshAdaptation.map((item) => (
                <li
                  key={item}
                  className="border border-frame-border bg-frame-muted/10 px-2.5 py-1 text-[11px] font-semibold text-frame-fg"
                >
                  {item}
                </li>
              ))}
            </ul>

            <p className="mt-5 text-sm font-medium leading-relaxed text-frame-muted-fg">
              The objective is to create content that feels natural to the intended Bangladeshi audience.
            </p>
          </div>

          <div className="flex flex-col justify-between bg-frame-accent/10 p-7 md:p-8">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                International TikTok Management
              </span>
              <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
                We also support businesses targeting international audiences.
              </p>
              <p className="mt-4 text-sm font-semibold leading-relaxed text-frame-fg/90 md:text-base">
                Our international TikTok management can support markets including:
              </p>
            </div>

            <ul className="mt-6 flex flex-wrap gap-2">
              {internationalMarkets.map((item) => (
                <li
                  key={item}
                  className="border border-frame-accent/50 bg-frame-bg px-2.5 py-1 text-[11px] font-semibold text-frame-fg"
                >
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-6 border-t-2 border-frame-accent/30 pt-5">
              <p className="text-sm font-semibold leading-relaxed text-frame-fg/90 md:text-base">
                International content can be adapted around:
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {internationalAdaptation.map((item) => (
                  <li
                    key={item}
                    className="border border-frame-accent/50 bg-frame-accent/5 px-2.5 py-1 text-[11px] font-semibold text-frame-fg"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-6 border-t-2 border-frame-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-3xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
            The strategy is adapted market by market rather than simply publishing the same
            Bangladesh-focused content everywhere.
          </p>
          <div className="shrink-0">
            <PosterButton href="/contact" variant="outline">
              Get Your Free TikTok Audit &rarr;
            </PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
