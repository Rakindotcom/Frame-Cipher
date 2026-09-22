import { SectionIntro } from '../../../Kinetic'

const markets = [
  {
    eyebrow: 'Market reality',
    title: 'Pinterest Ads Management From Bangladesh',
    body: 'Framecipher is based in Dhaka and manages Pinterest Ads from Bangladesh for eligible advertiser accounts targeting supported markets. Pinterest advertising availability depends on the advertiser account, market, and current platform requirements. We verify eligibility before campaign launch rather than assuming every business can access the same advertising features.',
    tail: 'For Bangladesh-based businesses, this distinction matters. The campaign can be managed remotely from Dhaka, but the advertiser account and target market must meet Pinterest\u2019s current requirements.',
  },
  {
    eyebrow: 'Global delivery',
    title: 'International Pinterest Advertising',
    body: 'Framecipher supports businesses targeting international Pinterest markets, including major markets where Pinterest has an established advertising presence.',
    label: 'International campaigns can include',
    bullets: [
      'Country-specific targeting',
      'Market-specific messaging',
      'Localized creative',
      'Local landing pages',
      'Regional product or service positioning',
      'Market-level conversion tracking',
      'Country-level reporting',
    ],
    tail: 'We do not simply duplicate one campaign across every country. Different markets can have different demand patterns, competition, language, offers, and customer behavior.',
  },
]

export default function Markets() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Where we work"
          title="Pinterest Ads for Bangladesh & Global Markets"
        >
          Pinterest campaigns are managed from Dhaka and structured around the advertiser setup,
          the target market, and Pinterest&apos;s current platform requirements.
        </SectionIntro>

        <div className="grid gap-6 lg:grid-cols-2">
          {markets.map((area, index) => (
            <div key={index} className="flex flex-col border-2 border-frame-border bg-frame-bg p-7 md:p-10">
              <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
                {area.eyebrow}
              </span>
              <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                {area.title}
              </h3>
              <p className="mt-4 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
                {area.body}
              </p>
              {area.bullets?.length > 0 && (
                <div className="mt-5">
                  <span className="text-[11px] font-black uppercase tracking-[0.2em] text-frame-accent">
                    {area.label}:
                  </span>
                  <ul className="mt-3 grid gap-2 text-xs font-semibold text-frame-fg/90 sm:grid-cols-2">
                    {area.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2">
                        <span className="text-frame-accent font-bold">✓</span>
                        <span className="leading-snug">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {area.tail && (
                <p className="mt-5 border-t border-frame-border/60 pt-4 text-sm md:text-base font-medium leading-relaxed text-frame-fg/90">
                  {area.tail}
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 border-l-2 border-frame-accent bg-frame-muted/10 p-6 md:p-7">
          <p className="text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
            Before launching, we confirm that the advertiser account and target market qualify
            under Pinterest&apos;s current advertising requirements. Everything else, strategy,
            creative, catalog, tracking, and optimization, is planned around that confirmed setup.
          </p>
        </div>
      </div>
    </section>
  )
}