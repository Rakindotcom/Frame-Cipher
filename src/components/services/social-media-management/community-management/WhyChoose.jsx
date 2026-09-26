import { SectionIntro } from '../../../Kinetic'

const reasons = [
  {
    number: '01',
    title: 'One In-House Team',
    body: 'Your community management works within the same broader marketing environment as your content and social strategy. That makes it easier to maintain context and consistent brand communication.',
  },
  {
    number: '02',
    title: 'Response With Context, Not Templates',
    body: 'Templates can help with repetitive questions, but not every customer interaction deserves the same answer. We use approved guidance while adapting responses to the actual conversation.',
  },
  {
    number: '03',
    title: 'Clear Escalation Process',
    body: 'When an issue requires your team’s authority or information, it should reach the right person instead of receiving an inaccurate answer.',
  },
  {
    number: '04',
    title: 'Platform-Specific Community Management',
    body: 'Facebook, Instagram, LinkedIn, TikTok, and YouTube each create different types of audience interactions. Our workflow adapts to the platform instead of treating every channel as one inbox.',
  },
  {
    number: '05',
    title: 'Bangladesh & International Experience',
    body: 'Framecipher is based in Dhaka and works with businesses across Bangladesh and international markets, including the US, UK, Australia, Canada, and UAE.',
  },
  {
    number: '06',
    title: 'Transparent Reporting',
    body: 'You should be able to see what is happening inside your community management workflow. We report on agreed metrics and surface important feedback, issues, and recommendations.',
  },
]

export default function WhyChoose() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Why Framecipher"
          title="Why Businesses Choose Framecipher For Community Management"
        >
          Because community management requires more than fast replies. It requires judgment, escalation, brand
          consistency, and a workflow that continues after the launch post.
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
      </div>
    </section>
  )
}
