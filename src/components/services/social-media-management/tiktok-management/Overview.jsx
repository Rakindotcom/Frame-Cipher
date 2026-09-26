import { SectionIntro } from '../../../Kinetic'

const workflow = [
  'Business and audience research',
  'Competitor and content-gap analysis',
  'Brand positioning and voice',
  'Content pillars and creative direction',
  'Short-form video production',
  'Trend research and adaptation',
  'Search-aware content',
  'Consistent publishing',
  'Community management',
  'Performance measurement',
  'Content testing',
  'Ongoing optimization',
]

export default function Overview() {
  return (
    <section className="border-y-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Strategic approach"
          title="TikTok Management Built Around Your Business Goals"
        >
          TikTok management should start with your business, not with a posting schedule.
        </SectionIntro>

        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-start">
          <div>
            <p className="max-w-3xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
              Some businesses need more product discovery. Others need brand awareness, website visits,
              customer inquiries, community growth, or stronger visibility in a specific market.
            </p>
            <p className="mt-4 max-w-3xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
              We first understand your offer, audience, competitors, content opportunities, and commercial
              goals. Then we build a TikTok strategy around those priorities.
            </p>

            <div className="mt-8 border-2 border-frame-accent bg-frame-accent/10 p-6 md:p-7">
              <p className="text-sm font-semibold leading-relaxed text-frame-fg md:text-base">
                The goal is not to chase every trend or depend on one viral video.
              </p>
              <p className="mt-4 text-sm font-medium leading-relaxed text-frame-fg/90 md:text-base">
                We build a repeatable content system that gives your business more opportunities to reach
                the right audience, learn from performance, and improve over time.
              </p>
            </div>
          </div>

          <div className="border-2 border-frame-border bg-frame-muted/10 p-7 md:p-8">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              Our management approach connects:
            </span>
            <ul className="mt-5 grid gap-2 sm:grid-cols-2">
              {workflow.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm font-medium leading-snug text-frame-fg">
                  <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-frame-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
