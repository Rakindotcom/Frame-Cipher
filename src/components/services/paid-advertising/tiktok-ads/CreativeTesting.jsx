import { SectionIntro } from '../../../Kinetic'

const testing = [
  {
    title: 'Hook Testing',
    body: 'The opening seconds need to give viewers a reason to continue watching. We test different approaches including:',
    bullets: [
      'Problem-led hooks',
      'Product-first hooks',
      'Curiosity hooks',
      'Demonstrations',
      'Questions',
      'Social proof',
      'Offers',
      'Before-and-after concepts where appropriate',
    ],
  },
  {
    title: 'UGC & Native Creative',
    body: 'We develop creative that fits the TikTok viewing environment without forcing every brand into the same visual style. The objective is to make the message feel relevant to the platform while maintaining brand clarity.',
  },
  {
    title: 'Creative Variations',
    body: 'One concept can produce several testable variations. We may vary:',
    bullets: [
      'Hook',
      'Script',
      'Creator',
      'Opening frame',
      'Product angle',
      'Offer',
      'CTA',
      'Editing pace',
      'Caption',
      'Voiceover',
      'Visual sequence',
    ],
    tail: 'This creates a structured testing system instead of random creative changes.',
  },
  {
    title: 'Trend and Format Testing',
    body: 'Trends can create useful creative opportunities, but not every trend fits every brand. We assess trends based on:',
    bullets: [
      'Audience relevance',
      'Brand fit',
      'Product suitability',
      'Production feasibility',
      'Commercial intent',
      'Creative longevity',
    ],
    tail: 'We use trends as inputs for creative development rather than building the entire advertising strategy around temporary formats.',
  },
  {
    title: 'Creative Fatigue & Refresh',
    body: 'Creative performance can change as audiences see the same assets repeatedly. We monitor performance and refresh creative when the data indicates that existing assets are losing efficiency. The goal is not to replace ads simply because they are old. It is to replace or adapt creative when the evidence shows that the campaign needs a new angle.',
  },
]

export default function CreativeTesting() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="The testing system"
          title="Creative Testing Is the Core of TikTok Advertising"
        >
          TikTok advertising requires a testing system, not one &ldquo;perfect&rdquo; video.
          Creative performance can vary based on the hook, message, product presentation, creator,
          editing style, offer, audience, and campaign objective. That is why we build creative
          testing into the campaign plan from the beginning.
        </SectionIntro>

        <div className="grid gap-6 md:grid-cols-2">
          {testing.map((item, index) => (
            <div
              key={index}
              className={
                !item.bullets
                  ? 'flex flex-col justify-between border-2 border-frame-border bg-frame-bg p-7 md:p-8'
                  : 'flex flex-col justify-between border-2 border-frame-border bg-frame-bg p-7 md:p-8 transition-colors hover:border-frame-accent'
              }
            >
              <div>
                <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                  Testing 0{index + 1}
                </span>
                <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {item.body}
                </p>
                {item.bullets?.length > 0 && (
                  <ul className="mt-4 grid gap-2 text-xs font-semibold text-frame-fg/90 sm:grid-cols-2">
                    {item.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2">
                        <span className="text-frame-accent font-bold">✓</span>
                        <span className="leading-snug">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {item.tail && (
                  <p className="mt-4 border-t border-frame-border/60 pt-4 text-sm font-medium leading-relaxed text-frame-fg/90">
                    {item.tail}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}