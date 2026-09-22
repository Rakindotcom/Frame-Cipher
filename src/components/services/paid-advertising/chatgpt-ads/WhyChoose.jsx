import { SectionIntro } from '../../../Kinetic'

const reasons = [
  {
    title: 'One In-House Paid Media & SEO Team',
    body: [
      'ChatGPT Ads are connected to search behavior, and our SEO and AEO/GEO work is connected to how AI surfaces represent brands. We manage paid media and AI visibility in one place, so advertising, organic representation, and landing-page experience are planned together.',
      'That alignment reduces guesswork and keeps the same team accountable for both sides of AI visibility.',
    ],
  },
  {
    title: 'Conversion-Focused Campaign Management',
    body: [
      'We structure campaigns for outcomes, not just clicks. From context hints to conversion events, every part points toward a defined business action.',
      'We set up conversion tracking where the platform supports it, test what we can measure, and keep testing. Campaigns build evidence instead of assumptions.',
    ],
  },
  {
    title: 'AI Search & Paid Advertising Expertise',
    body: [
      'ChatGPT Ads is a new channel, but advertising fundamentals still apply. We combine paid media discipline with practical AI search experience.',
      'That combination lets us set up campaigns correctly, plan measurement honestly, and avoid treating an immature channel as though it were a mature one.',
    ],
  },
  {
    title: 'Transparent Testing & Reporting',
    body: [
      'We report what the data actually supports. No inflated expectations, no hand-picked metrics, and no pretending that early results prove what only a longer learning period can.',
      'If a campaign is not ready to scale, we say so, and we tell you what would need to change. That honesty protects your budget and your decision-making.',
    ],
  },
]

export default function WhyChoose() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Why Framecipher"
          title="Why Choose Framecipher for ChatGPT Ads"
        >
          Choosing the right management partner matters more on a new channel where the platform,
          the formats, and the available data are still evolving.
        </SectionIntro>

        <div className="grid gap-6 md:grid-cols-2">
          {reasons.map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-between border-2 border-frame-border bg-frame-bg p-7 md:p-8 transition-colors hover:border-frame-accent"
            >
              <div>
                <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                  Reason 0{index + 1}
                </span>
                <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                  {item.title}
                </h3>
                <div className="mt-4 space-y-3 text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {item.body.map((paragraph, pIdx) => (
                    <p key={pIdx}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}