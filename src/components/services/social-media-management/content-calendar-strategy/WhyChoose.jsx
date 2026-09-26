import { SectionIntro, PosterButton } from '../../../Kinetic'

const reasons = [
  {
    number: '01',
    title: 'One Coordinated Content System',
    body: 'Your social platforms can work from one strategic calendar instead of disconnected schedules. This gives your team a clearer view of campaigns, content priorities, production requirements, and publishing activity.',
  },
  {
    number: '02',
    title: 'Platform-Native Planning',
    body: 'We maintain consistency in the core message while adapting content for the platform where it will appear. The goal is not to make every platform identical.',
  },
  {
    number: '03',
    title: 'Strategy Before Scheduling',
    body: 'We do not begin with a list of dates. We begin with business goals, audience needs, content pillars, campaigns, platform roles, and content priorities.',
  },
  {
    number: '04',
    title: 'Repurposing Built Into the Workflow',
    body: 'Repurposing opportunities are identified during planning rather than after content has already been produced. This helps your team understand how one valuable asset can support multiple relevant content formats.',
  },
  {
    number: '05',
    title: 'One In-House Team',
    body: 'Framecipher can coordinate content strategy, social media management, paid advertising, SEO, website services, content creation, and related digital marketing work through one in-house team where the selected scope requires it.',
  },
  {
    number: '06',
    title: 'Bangladesh & International Experience',
    body: 'Framecipher is based in Dhaka and works with businesses across Bangladesh and international markets, including the US, UK, Australia, Canada, and UAE. Our planning can account for market-specific audiences, campaigns, communication preferences, and publishing requirements.',
  },
]

export default function WhyChoose() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Why Framecipher" title="Why Choose Framecipher">
          Content strategy, planning, production coordination, and performance review stay in one workflow
          instead of being split across disconnected providers.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => (
            <article key={reason.number} className="flex flex-col justify-between bg-frame-bg p-7 md:p-8">
              <div>
                <span className="font-heading text-4xl font-bold leading-none tracking-tighter text-frame-muted">
                  {reason.number}
                </span>
                <h3 className="mt-5 font-heading text-base font-bold uppercase leading-tight tracking-tight text-frame-fg md:text-lg">
                  {reason.title}
                </h3>
                <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
                  {reason.body}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-6 border-t-2 border-frame-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-3xl text-sm font-semibold leading-relaxed text-frame-fg md:text-base">
            We do not begin with a list of dates. We begin with business goals, audience needs, content
            pillars, campaigns, platform roles, and content priorities.
          </p>
          <div className="shrink-0">
            <PosterButton href="/contact">Talk to the Framecipher Team &rarr;</PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
