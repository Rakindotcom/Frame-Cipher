import { SectionIntro } from '../../../Kinetic'

const whyDedicatedPage = [
  {
    title: 'Paid Traffic Needs a Focused Destination',
    desc: 'Sending ad traffic to a general homepage gives visitors too many paths to explore. A dedicated landing page keeps the message and action aligned with the campaign.',
  },
  {
    title: 'Message Match Builds Continuity',
    desc: 'When the landing page reflects the promise, language, and offer from the ad or campaign, visitors can understand the connection faster.',
  },
  {
    title: 'One Primary CTA Reduces Distraction',
    desc: 'A focused CTA gives visitors a clear next step instead of asking them to decide where to go across a full website.',
  },
  {
    title: 'Faster Launch Supports Faster Testing',
    desc: 'Landing pages can be launched faster than full website projects, allowing campaigns to move from idea to live testing without waiting for a broader website rebuild.',
  },
  {
    title: 'Better Tracking Supports Better Decisions',
    desc: 'When the page, traffic source, and conversion events are properly tracked, campaign data can help identify what needs improvement.',
  },
]

export default function WhyDedicated() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Strategic Advantages / Ad Spend Efficiency" title="Why a Dedicated Landing Page Can Improve Campaign Performance">
          A landing page gives a campaign a focused destination built around one audience, one offer, and one primary action.
        </SectionIntro>

        <div className="grid bg-frame-border gap-px border-2 border-frame-border sm:grid-cols-2 lg:grid-cols-3">
          {whyDedicatedPage.map((item, index) => (
            <div key={index} className="bg-frame-bg p-7 md:p-8 flex flex-col justify-between">
              <div>
                <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">Factor 0{index + 1}</span>
                <h3 className="mt-3 font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg">
                  {item.title}
                </h3>
                <p className="mt-3 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 border-2 border-frame-border bg-frame-muted/20 p-6">
          <p className="text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
            <strong className="text-frame-fg uppercase tracking-wider">Please Note:</strong> A dedicated landing page does not guarantee campaign success. Traffic quality, offer strength, targeting, pricing, and market demand still play major roles.
          </p>
        </div>
      </div>
    </section>
  )
}