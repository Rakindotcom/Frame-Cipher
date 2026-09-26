import { SectionIntro, PosterButton } from '../../../Kinetic'

const outcomes = [
  {
    title: 'Increase Brand Discovery',
    body: 'Reach people who are actively searching for information, exploring topics, or discovering new creators and brands.',
  },
  {
    title: 'Build Audience Trust',
    body: 'Useful educational content gives potential customers an opportunity to understand your expertise before they contact or buy from you.',
  },
  {
    title: 'Generate Website Traffic',
    body: 'Relevant videos can direct interested viewers toward your website, landing pages, product pages, resources, or other destinations.',
  },
  {
    title: 'Support Lead Generation',
    body: 'Educational and problem-solving videos can help potential customers understand your service before submitting an inquiry.',
  },
  {
    title: 'Showcase Products & Services',
    body: 'Demonstrations, tutorials, product explanations, comparisons, and customer-focused videos can make complex offerings easier to understand.',
  },
  {
    title: 'Strengthen Expertise & Authority',
    body: 'Consistent, useful content can help your business communicate expertise in a more detailed format than a short social post allows.',
  },
  {
    title: 'Support Ecommerce Discovery',
    body: 'Product-focused YouTube content can help shoppers discover products, understand their benefits, compare options, and move toward purchase.',
  },
]

export default function Outcomes() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Realistic outcomes"
          title="What YouTube Management Can Help Your Business Achieve"
        >
          YouTube can support different business objectives depending on your market, audience, content,
          and conversion system.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-2 lg:grid-cols-3">
          {outcomes.map((item, index) => (
            <article key={item.title} className="flex flex-col justify-between bg-frame-bg p-7 md:p-8">
              <div>
                <span className="font-heading text-4xl font-bold leading-none tracking-tighter text-frame-muted">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-5 font-heading text-lg font-bold uppercase leading-tight tracking-tight text-frame-fg md:text-xl">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
                  {item.body}
                </p>
              </div>
            </article>
          ))}

          <div className="flex flex-col justify-center bg-frame-accent/10 p-7 md:p-8">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              The honest framing
            </span>
            <p className="mt-4 text-sm font-medium leading-relaxed text-frame-fg/90 md:text-base">
              We build a content system, publish consistently, and use performance data to improve it.
              We do not promise viral videos, view counts, subscriber numbers, rankings, leads, or
              revenue.
            </p>
            <div className="mt-6">
              <PosterButton href="/contact" variant="outline">
                Get a Free Consultation &rarr;
              </PosterButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
