import { SectionIntro, PosterButton } from '../../../Kinetic'

const reasons = [
  {
    title: 'One In-House Team',
    body: 'You work with one coordinated team for strategy, content, SEO, design, editing, and reporting rather than managing disconnected providers.',
  },
  {
    title: 'YouTube-Specific Strategy',
    body: 'We treat YouTube differently from Facebook, Instagram, TikTok, or LinkedIn. The content, packaging, search strategy, and measurement framework are built around YouTube\u2019s viewing environment.',
  },
  {
    title: 'Production & Optimization in One Workflow',
    body: 'Your content does not stop at video production. We connect production with titles, thumbnails, SEO, publishing, analytics, and ongoing optimization.',
  },
  {
    title: 'Long-Form + Shorts Strategy',
    body: 'We can structure both long-form and Shorts content within one broader channel strategy when both formats fit your audience and goals.',
  },
  {
    title: 'Human Review & Approval',
    body: 'Content goes through human review before publication to maintain accuracy, quality, brand alignment, and consistency.',
  },
  {
    title: 'Bangladesh & International Experience',
    body: 'Framecipher serves businesses in Bangladesh while also working with international-market requirements. We can adapt content strategies around different audiences, markets, customer journeys, and business objectives.',
  },
  {
    title: 'Client-Owned Accounts & Secure Access',
    body: 'Your YouTube channel and business assets remain under your ownership. We use the access required to perform the agreed work without taking ownership of your core business account.',
  },
  {
    title: 'Clear Reporting & Communication',
    body: 'You receive clear reporting around agreed performance metrics, completed work, content output, and recommended next steps.',
  },
]

export default function WhyChoose() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-accent/10 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Why Framecipher"
          title="Why Choose Framecipher for YouTube Management"
        >
          YouTube management works best when strategy, production, SEO, and business objectives are
          connected instead of being handed to separate providers.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, index) => (
            <article key={reason.title} className="flex flex-col justify-between bg-frame-bg p-7 md:p-8">
              <div>
                <span className="font-heading text-4xl font-bold leading-none tracking-tighter text-frame-muted">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-5 font-heading text-base font-bold uppercase leading-tight tracking-tight text-frame-fg md:text-lg">
                  {reason.title}
                </h3>
                <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {reason.body}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-6 border-t-2 border-frame-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-3xl text-sm font-semibold leading-relaxed text-frame-fg md:text-base">
            Our goal is to create better content systems, improve discoverability, learn from audience
            response, and continuously optimize the channel based on available data.
          </p>
          <div className="shrink-0">
            <PosterButton href="/contact">Get a Free Consultation &rarr;</PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
