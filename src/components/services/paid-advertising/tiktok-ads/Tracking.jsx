import { SectionIntro } from '../../../Kinetic'

const channels = [
  {
    title: 'TikTok Pixel',
    body: 'TikTok Pixel helps send website event data to TikTok for measurement and advertising optimization. We configure relevant events and verify that they fire correctly.',
  },
  {
    title: 'Events API',
    body: 'Events API can provide a server-side connection between business data and TikTok. It can support web, app, offline, and CRM-related data connections depending on the implementation.',
  },
  {
    title: 'GA4 & UTM Tracking',
    body: 'We use consistent UTM structures where appropriate so TikTok traffic can be analyzed alongside other acquisition channels. This helps identify differences between platform-reported performance and broader analytics data.',
  },
  {
    title: 'CRM & Lead Quality Tracking',
    body: 'For lead-generation campaigns, generating more forms is not always the same as generating better leads. Where the client\u2019s CRM setup allows it, we help connect campaign data with downstream lead stages so the business can evaluate:',
    bullets: [
      'Leads',
      'Qualified leads',
      'Sales opportunities',
      'Customers',
      'Revenue',
    ],
  },
  {
    title: 'Revenue and ROAS Measurement',
    body: 'For ecommerce and other measurable sales campaigns, we track revenue and acquisition costs where sufficient data is available. We avoid judging campaigns on ROAS alone when the sales cycle, attribution window, or conversion volume makes another measurement approach more appropriate.',
  },
]

export default function Tracking() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Click to conversion"
          title="Tracking TikTok Ads From Click to Conversion"
        >
          Good TikTok Ads management needs more than Ads Manager reporting. We build measurement
          around the business&apos;s actual conversion path.
        </SectionIntro>

        <div className="grid gap-6 md:grid-cols-2">
          {channels.map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-between border-2 border-frame-border bg-frame-muted/10 p-7 md:p-8 transition-colors hover:border-frame-accent"
            >
              <div>
                <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                  Tracking 0{index + 1}
                </span>
                <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {item.body}
                </p>
                {item.bullets?.length > 0 && (
                  <ul className="mt-4 border-t border-frame-border/60 pt-4 grid gap-2 text-xs font-semibold text-frame-fg/90 sm:grid-cols-2">
                    {item.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2">
                        <span className="text-frame-accent font-bold">✓</span>
                        <span className="leading-snug">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}