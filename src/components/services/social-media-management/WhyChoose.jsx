import { SectionIntro, PosterButton } from '../../Kinetic'

const standards = [
  {
    title: 'One In-House Team',
    body: 'Your social media strategy, content, publishing, and community management are coordinated through one in-house team. This reduces the disconnect that can happen when different parts of your social presence are handled by unrelated freelancers or vendors.',
  },
  {
    title: 'Platform-Specific Strategy',
    body: 'We do not treat every platform as the same. Content is planned around each platform’s audience, format, communication style, and role within your marketing strategy.',
  },
  {
    title: 'Client Approval Before Publishing',
    body: 'You remain in control of your brand communication. Content is prepared for your review and approval before it is published, so you know what is going live under your brand name.',
  },
  {
    title: 'Bangladesh & International Experience',
    body: 'We work with businesses in Bangladesh and international markets, including the US, UK, Australia, Canada, and UAE. That means audience behavior, language, culture, market positioning, and platform usage are accounted for. For Bangladeshi businesses, we can also develop Bangla-English content where it fits the audience and brand.',
  },
  {
    title: 'Transparent Reporting',
    body: 'You receive clear performance reporting with context around what the numbers mean. Instead of focusing only on follower counts, we look at the metrics that matter to your selected platforms and business objectives.',
  },
  {
    title: 'No Vanity-Metric Promises',
    body: 'We do not promise a specific follower count, engagement rate, or viral result. Platform algorithms, audience behavior, competition, content quality, offers, and market conditions all influence social performance. Our focus is consistent execution, useful content, active community management, measurement, and continuous improvement.',
  },
]

export default function WhyChoose() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="The Framecipher standard"
          title="Why Choose Framecipher for Social Media Management"
        >
          Content, publishing, community care, and reporting coordinated by one team rather than
          passed between separate vendors.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-2 lg:grid-cols-3">
          {standards.map((standard, index) => (
            <article key={standard.title} className="flex flex-col justify-between bg-frame-bg p-7 md:p-8">
              <div>
                <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                  Standard {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-3 font-heading text-xl font-bold uppercase leading-tight tracking-tight text-frame-fg">
                  {standard.title}
                </h3>
                <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {standard.body}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-6 border-t-2 border-frame-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-3xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
            Our goal is to keep your social presence active, useful, consistent, and aligned with
            your business, rather than chasing vanity metrics or promising viral results.
          </p>
          <div className="shrink-0">
            <PosterButton href="/contact">Talk to Our Social Media Team &rarr;</PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
