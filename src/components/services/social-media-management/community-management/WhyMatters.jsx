import { SectionIntro, PosterButton } from '../../../Kinetic'

const reasons = [
  {
    number: '01',
    title: 'Turn Questions Into Conversations',
    body: 'Most questions are an invitation to explain, help, and build a clearer relationship with the person asking.',
  },
  {
    number: '02',
    title: 'Reduce Missed Customer Inquiries',
    body: 'A missed comment or DM is a customer who had an intention and received silence instead of a response.',
  },
  {
    number: '03',
    title: 'Handle Public Feedback Professionally',
    body: 'How a brand responds to criticism in public often says more about the brand than the criticism itself.',
  },
  {
    number: '04',
    title: 'Protect Consistent Brand Voice',
    body: 'Every reply is visible. Consistent language across platforms helps the audience understand what the brand stands for.',
  },
  {
    number: '05',
    title: 'Identify Recurring Customer Issues',
    body: 'Repeated questions, complaints, or confusion often point to problems in your offer, page, onboarding, or customer expectations.',
  },
  {
    number: '06',
    title: 'Build Stronger Customer Relationships',
    body: 'Consistent, helpful interaction can turn buyers, followers, or past customers into a more durable customer base.',
  },
]

export default function WhyMatters() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Business impact"
          title="Why Community Management Matters for Your Business"
        >
          Community management affects how customers perceive your responsiveness, professionalism, and
          reliability long before a sale happens.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => (
            <article key={reason.number} className="bg-frame-bg p-7 md:p-8">
              <span className="font-heading text-4xl font-bold leading-none tracking-tighter text-frame-muted">
                {reason.number}
              </span>
              <h3 className="mt-5 font-heading text-base font-bold uppercase leading-tight tracking-tight text-frame-fg md:text-lg">
                {reason.title}
              </h3>
              <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
                {reason.body}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-6 border-t-2 border-frame-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-3xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
            A brand that responds quickly and professionally usually feels more reliable, more established,
            and more human than a brand that goes silent.
          </p>
          <div className="shrink-0">
            <PosterButton href="/contact">Get Your Community Audit &rarr;</PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
