import { SectionIntro, PosterButton } from '../../../Kinetic'

const steps = [
  {
    number: '01',
    title: 'Account Audit & Business Discovery',
    body: 'We start by understanding your business and reviewing your existing Instagram account. We then identify the priorities for your management program.',
    bullets: [
      'Profile structure',
      'Profile SEO',
      'Content performance',
      'Reels',
      'Feed',
      'Stories',
      'Visual identity',
      'Engagement patterns',
      'Audience',
      'Competitors',
      'Content gaps',
      'Business objectives',
      'Existing content assets',
    ],
  },
  {
    number: '02',
    title: 'Audience & Competitor Research',
    body: 'We research the audience you want to reach and the businesses competing for that audience’s attention. This helps us identify opportunities worth acting on.',
    bullets: [
      'Common customer questions',
      'Content opportunities',
      'Competitor patterns',
      'Market trends',
      'Content gaps',
      'Relevant topics',
      'Potential differentiators',
      'Audience objections',
      'Content formats worth testing',
    ],
  },
  {
    number: '03',
    title: 'Strategy & Content Planning',
    body: 'We develop the Instagram strategy and monthly content calendar based on the research. Before production begins, we also establish your preferred brand voice, messaging style, visual direction, terminology, and approval requirements.',
    bullets: [
      'Content pillars',
      'Content objectives',
      'Formats',
      'Reels topics',
      'Feed content',
      'Stories',
      'Campaigns',
      'CTAs',
      'Publishing cadence',
      'Production requirements',
      'Approval workflow',
    ],
  },
  {
    number: '04',
    title: 'Content Creation & Approval',
    body: 'Our team creates the agreed content and prepares it for your review. Content is reviewed and approved according to the agreed workflow before publishing.',
    bullets: ['Reels', 'Feed posts', 'Carousels', 'Stories', 'Captions', 'Hooks', 'Scripts', 'Graphics', 'Short-form video editing'],
  },
  {
    number: '05',
    title: 'Publishing & Community Management',
    body: 'Approved content is scheduled or published according to the content calendar. At the same time, our team manages the agreed community activities.',
    bullets: [
      'Comments',
      'DMs',
      'Story interactions',
      'Basic customer questions',
      'Inquiry escalation',
      'Community moderation',
    ],
  },
  {
    number: '06',
    title: 'Reporting & Ongoing Optimization',
    body: 'We review account and content performance regularly. The findings help us decide what to repeat, what to improve, and what should change in the next content cycle.',
    bullets: [
      'Which formats deserve more attention',
      'Which topics perform well',
      'Which hooks should be tested',
      'Which content needs improvement',
      'Which audience responses matter',
      'Which content should be repeated',
      'What should change next',
    ],
    note: 'This creates an ongoing management system instead of a fixed content plan that never changes.',
  },
]

export default function Process() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Execution framework"
          title="How Our Instagram Management Process Works"
        >
          Our Instagram management process connects research, strategy, content production, publishing,
          community management, and optimization.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <article
              key={step.number}
              className="group flex flex-col justify-between bg-frame-bg p-7 transition-colors hover:bg-frame-accent md:p-8"
            >
              <div>
                <span className="font-heading text-4xl font-bold leading-none tracking-tighter text-frame-muted transition-colors duration-200 group-hover:text-frame-accent-fg">
                  {step.number}
                </span>
                <h3 className="mt-5 font-heading text-xl font-bold uppercase leading-tight tracking-tight text-frame-fg transition-colors duration-200 group-hover:text-frame-accent-fg">
                  {step.title}
                </h3>
                <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg transition-colors duration-200 group-hover:text-frame-accent-fg/90">
                  {step.body}
                </p>
              </div>

              <ul className="mt-6 space-y-2 border-t-2 border-frame-border/60 pt-4 text-xs font-medium text-frame-fg/90 transition-colors duration-200 group-hover:border-frame-accent-fg/30 group-hover:text-frame-accent-fg/90 md:text-sm">
                {step.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 bg-frame-accent transition-colors duration-200 group-hover:bg-frame-accent-fg" />
                    <span className="leading-snug">{bullet}</span>
                  </li>
                ))}
              </ul>

              {step.note && (
                <p className="mt-4 text-xs font-semibold leading-relaxed text-frame-muted-fg transition-colors duration-200 group-hover:text-frame-accent-fg/80">
                  {step.note}
                </p>
              )}
            </article>
          ))}

          <div className="flex flex-col justify-center bg-frame-accent/10 p-7 md:p-8">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              Continuous, not one-off
            </span>
            <p className="mt-4 text-sm font-medium leading-relaxed text-frame-fg/90 md:text-base">
              The audit comes first, so recommendations are based on your actual account rather than a
              generic checklist.
            </p>
            <div className="mt-6">
              <PosterButton href="/contact">Get Your Free Instagram Account Audit &rarr;</PosterButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
