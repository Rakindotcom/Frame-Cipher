import { SectionIntro } from '../../../Kinetic'

const columns = [
  {
    title: 'What We Control',
    items: [
      'The agreed response workflow',
      'Monitoring process',
      'Brand voice implementation',
      'Moderation process',
      'Escalation system',
      'Reporting',
      'Ongoing workflow improvements',
    ],
  },
  {
    title: 'What We Don’t Guarantee',
    items: [
      'A specific follower increase',
      'A specific engagement rate',
      'Positive responses from every customer',
      'Removal of legitimate negative reviews',
      'A specific number of leads or sales',
      'Viral content',
      'Platform algorithmic outcomes',
      'Resolution of issues controlled by your internal team',
    ],
  },
]

export default function Guarantee() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Service standards"
          title="Service Standards &amp; Response Commitments"
        >
          Good community management requires clear boundaries, so the service is defined by what we actually
          control rather than by outcomes we cannot influence.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border md:grid-cols-2">
          {columns.map((column) => (
            <article
              key={column.title}
              className={`p-7 md:p-8 ${column.title === 'What We Control' ? 'bg-frame-accent/10' : 'bg-frame-bg'}`}
            >
              <h3 className="font-heading text-base font-bold uppercase leading-tight tracking-tight text-frame-fg md:text-lg">
                {column.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {column.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 border-b border-frame-border/50 pb-3 text-sm font-medium leading-relaxed text-frame-muted-fg last:border-b-0 md:text-base"
                  >
                    <span
                      aria-hidden="true"
                      className={`mt-1.5 h-2 w-2 shrink-0 ${
                        column.title === 'What We Control' ? 'bg-frame-accent' : 'bg-frame-muted'
                      }`}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <p className="mt-8 border-l-2 border-frame-accent bg-frame-muted/10 p-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
          Customer response depends on the underlying issue, offer, service quality, audience, platform
          environment, and many factors outside a community manager’s control. Our responsibility is to provide
          the agreed response and escalation process consistently and professionally.
        </p>
      </div>
    </section>
  )
}
