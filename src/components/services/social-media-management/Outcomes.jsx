import Link from 'next/link'
import { SectionIntro } from '../../Kinetic'

const outcomes = [
  {
    title: 'Brand Awareness',
    body: 'Consistent, recognizable content helps your business stay visible to relevant audiences over time.',
  },
  {
    title: 'Engagement',
    body: 'Useful and platform-appropriate content can encourage conversations, reactions, shares, saves, replies, and other meaningful interactions.',
  },
  {
    title: 'Customer Trust',
    body: 'Active profiles, useful information, visible customer interactions, and consistent communication help potential customers understand and evaluate your business.',
  },
  {
    title: 'Website Traffic',
    body: 'Relevant social content can direct interested audiences to your website, product pages, landing pages, blog content, or other useful resources.',
  },
  {
    title: 'Leads & Inquiries',
    body: 'Social profiles can support customer inquiries through comments, direct messages, profile links, calls to action, and other conversion paths.',
    note: 'Social media alone does not guarantee leads. Results depend on the offer, audience, content, platform, and wider conversion system.',
  },
  {
    title: 'Community & Retention',
    body: 'Ongoing interaction helps businesses maintain relationships with existing audiences and gives customers more opportunities to stay connected with the brand.',
  },
]

export default function Outcomes() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Business outcomes"
          title="What Social Media Management Can Help Your Business Achieve"
        >
          Social media management is not only about follower counts. A well-managed presence can
          support several parts of your broader marketing strategy.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-2 lg:grid-cols-3">
          {outcomes.map((outcome, index) => (
            <article key={outcome.title} className="flex flex-col justify-between bg-frame-bg p-7 md:p-8">
              <div>
                <span className="font-heading text-4xl font-bold leading-none tracking-tighter text-frame-muted">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-5 font-heading text-xl font-bold uppercase leading-tight tracking-tight text-frame-fg md:text-2xl">
                  {outcome.title}
                </h3>
                <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {outcome.body}
                </p>
              </div>

              {outcome.note && (
                <p className="mt-6 border-l-2 border-frame-accent bg-frame-muted/10 p-3 text-xs font-medium leading-relaxed text-frame-muted-fg md:text-sm">
                  {outcome.note}
                </p>
              )}
            </article>
          ))}
        </div>

        <div className="mt-10 border-2 border-frame-border bg-frame-muted/10 p-6 md:p-8">
          <p className="text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
            We measure the metrics that support these outcomes rather than reporting follower
            counts in isolation.
          </p>
          <Link
            href="/services/social-media-management/reporting"
            className="group mt-5 inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.18em] text-frame-accent transition hover:text-frame-fg"
          >
            See how social media reporting works
            <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
