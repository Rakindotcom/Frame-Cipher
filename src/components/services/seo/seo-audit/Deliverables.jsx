import { SectionIntro } from '../../../Kinetic'

const deliverables = [
  {
    title: 'Prioritized Findings',
    body: "We don't present every issue as equally important. Each significant finding is prioritized according to factors such as:",
    points: [
      'Likely SEO impact',
      'Affected pages or templates',
      'Business importance',
      'Search visibility',
      'Implementation complexity',
      'Urgency',
    ],
    note: 'This helps your team focus on the work that matters first.',
  },
  {
    title: 'Evidence & Impact Analysis',
    body: 'Every important recommendation should have a reason behind it. Where appropriate, findings include:',
    points: [
      'What we found',
      'Where we found it',
      'Supporting evidence',
      'Why it matters',
      'Which pages are affected',
      'Potential SEO or business impact',
    ],
    note: 'This makes the audit easier for marketers, developers, writers, and business owners to understand.',
  },
  {
    title: 'Effort & Implementation Guidance',
    body: 'Not every important SEO fix requires the same resources. We help separate:',
    points: [
      'Quick wins',
      'Medium-effort improvements',
      'Technical projects',
      'Content projects',
      'Development-heavy changes',
      'Ongoing opportunities',
    ],
    note: 'Recommendations are written clearly enough for your internal team or implementation partner to understand the required next step.',
  },
  {
    title: '30/60/90-Day Action Roadmap',
    body: 'A long audit can become difficult to execute without a sequence. Where the project scope supports it, we organize recommendations into:',
    phases: [
      {
        title: 'First 30 Days',
        detail: 'Critical technical and high-impact issues.',
      },
      {
        title: 'Next 60 Days',
        detail: 'Content, internal linking, optimization, and structural improvements.',
      },
      {
        title: 'Next 90 Days',
        detail: 'Growth opportunities, authority building, content expansion, and further optimization.',
      },
    ],
    note: "The roadmap is adjusted to the site's actual condition rather than using a fixed template.",
  },
  {
    title: 'Findings Walkthrough',
    body: 'We review the main findings with you after the audit. The walkthrough can cover:',
    points: [
      'What matters most',
      'What can wait',
      'Which fixes require development',
      'Which tasks can be handled by content teams',
      'Which opportunities have the highest potential',
      'What to do next',
    ],
    note: 'You can then implement the recommendations internally or discuss ongoing execution with Framecipher.',
  },
]

export default function Deliverables() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="What you receive" title="What We Deliver in an SEO Audit">
          An SEO audit is only valuable when the output can guide real decisions.
        </SectionIntro>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {deliverables.map((item, index) => (
            <div
              key={item.title}
              className="flex flex-col justify-between border-2 border-frame-border bg-frame-muted/30 p-7 transition-colors hover:border-frame-accent md:p-8"
            >
              <div>
                <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                  Deliverable 0{index + 1}
                </span>
                <h3 className="mt-3 font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {item.body}
                </p>
                {item.points && (
                  <ul className="mt-5 space-y-2 border-t-2 border-frame-border/60 pt-4 text-xs md:text-sm font-medium text-frame-fg/90">
                    {item.points.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2">
                        <span className="mt-0.5 text-frame-accent font-bold">✓</span>
                        <span className="leading-snug">{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {item.phases && (
                  <ol className="mt-5 space-y-2.5 border-t-2 border-frame-border/60 pt-4">
                    {item.phases.map((phase, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-3">
                        <span className="font-mono text-xs font-black text-frame-accent">
                          {String(pIdx + 1).padStart(2, '0')}
                        </span>
                        <span className="text-xs md:text-sm font-medium leading-snug text-frame-fg">
                          <span className="font-bold">{phase.title}</span>{' '}
                          <span className="text-frame-muted-fg">{phase.detail}</span>
                        </span>
                      </li>
                    ))}
                  </ol>
                )}
                {item.note && (
                  <p className="mt-5 border-l-2 border-frame-accent bg-frame-bg p-4 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                    {item.note}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}