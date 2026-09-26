import { SectionIntro, PosterButton } from '../../../Kinetic'

const copyFocus = [
  'Subject lines',
  'Preview text',
  'Body copy',
  'Offers',
  'CTAs',
  'Sequence messaging',
  'Brand voice',
  'Audience-specific communication',
]

const operations = [
  'Platform setup',
  'Automation implementation',
  'Segmentation setup',
  'Scheduling',
  'Campaign deployment',
  'List management',
  'Deliverability management',
  'Reporting',
  'Ongoing campaign management',
]

const outsideFactors = [
  'List quality',
  'Sender reputation',
  'Authentication',
  'Sending practices',
  'Audience engagement',
]

export default function VsEmailMarketing() {
  return (
    <section className="border-y-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Comparison" title="Email Copywriting vs Email Marketing">
          Email copywriting and email marketing work together, but they are not the same service.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border md:grid-cols-2">
          <article className="bg-frame-bg p-7 md:p-8 transition-colors duration-200 hover:bg-frame-muted/40">
            <h3 className="font-heading text-base font-bold uppercase leading-tight tracking-tight text-frame-fg md:text-lg">
              Email Copywriting Focuses on the Message
            </h3>
            <ul className="mt-5 space-y-2.5">
              {copyFocus.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm font-medium leading-relaxed text-frame-fg"
                >
                  <span aria-hidden="true" className="mt-0.5 shrink-0 font-bold text-frame-accent">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="bg-frame-bg p-7 md:p-8 transition-colors duration-200 hover:bg-frame-muted/40">
            <h3 className="font-heading text-base font-bold uppercase leading-tight tracking-tight text-frame-fg md:text-lg">
              Email Marketing Management Includes the Operational Side
            </h3>
            <ul className="mt-5 space-y-2.5">
              {operations.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm font-medium leading-relaxed text-frame-muted-fg"
                >
                  <span aria-hidden="true" className="mt-1.5 h-2 w-2 shrink-0 bg-frame-muted" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>

        <div className="mt-8 space-y-5 text-base font-medium leading-relaxed text-frame-muted-fg md:text-lg">
          <p>
            <span className="font-semibold text-frame-fg">
              Framecipher&rsquo;s email copywriting service focuses primarily on the strategy and writing of the
              email communication.
            </span>{' '}
            If you already have an email platform and marketing workflow, we can provide copy prepared for your
            existing process.
          </p>
          <p>
            Email performance also depends on factors outside the copy itself, including:
          </p>
        </div>

        <ul className="mt-4 flex flex-wrap gap-2">
          {outsideFactors.map((item) => (
            <li
              key={item}
              className="border border-frame-border bg-frame-muted/10 px-2.5 py-1 text-[11px] font-semibold text-frame-fg"
            >
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-col gap-6 border-t-2 border-frame-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-3xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
            Already have a platform in place? We can write copy that fits the way you already send.
          </p>
          <div className="shrink-0">
            <PosterButton href="/contact">Talk to Our Content Team &rarr;</PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
