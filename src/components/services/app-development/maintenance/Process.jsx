import { SectionIntro } from '../../../Kinetic'

const processSteps = [
  {
    step: "01",
    title: "Initial App Assessment",
    desc: "We begin by reviewing the current application and its technical environment. This can include the codebase, dependencies, application health, crash history, performance, security, backend, APIs, integrations, deployment process, and known issues.",
    footer: "We then identify the areas that need immediate attention and those that can be planned later."
  },
  {
    step: "02",
    title: "Maintenance Plan & SLA Scoping",
    desc: "We define the maintenance scope around the application's actual requirements.",
    bullets: [
      "Supported platforms",
      "Maintenance coverage",
      "Issue priorities",
      "Monitoring requirements",
      "Bug-fix scope",
      "Security responsibilities",
      "Feature support",
      "Communication process",
      "Response expectations"
    ],
    footer: "Where an SLA is required, response and support terms should be defined before the engagement begins."
  },
  {
    step: "03",
    title: "Monitoring & Maintenance Setup",
    desc: "We establish the relevant monitoring and maintenance workflow for the application.",
    footer: "Depending on the system, this may include application health monitoring, crash and error tracking, performance checks, integration monitoring, security reviews, and issue tracking."
  },
  {
    step: "04",
    title: "Ongoing Updates & Issue Resolution",
    desc: "Once maintenance begins, we handle planned updates and reported issues according to their priority and scope.",
    footer: "This can include bug fixes, dependency updates, OS compatibility work, security patches, performance improvements, and integration fixes."
  },
  {
    step: "05",
    title: "Release & Deployment Support",
    desc: "Before production releases, we review the relevant changes and perform appropriate testing.",
    footer: "After deployment, we verify the updated application and monitor for issues that require attention."
  },
  {
    step: "06",
    title: "Regular Reporting & Review",
    desc: "We provide regular updates on completed work, current issues, maintenance activities, and recommended next steps.",
    footer: "This keeps your team informed about the application's technical condition without requiring them to manage every engineering detail."
  }
]

export default function Process() {
  return (
    <section id="process" className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-32 scroll-mt-20">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Lifecycle Methodology"
          title="How We Approach App Maintenance & Support"
        >
          Our maintenance process starts with understanding the application before making changes. The exact workflow depends on the platform, codebase, infrastructure, and support requirements.
        </SectionIntro>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col justify-between border-2 border-frame-border bg-frame-muted/10 p-6 md:p-8 transition-colors hover:border-frame-accent"
            >
              <div>
                <span className="font-heading text-4xl font-bold leading-none tracking-tighter text-frame-accent">
                  {step.step}
                </span>
                <h3 className="mt-4 font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg">
                  {step.title}
                </h3>
                <p className="mt-3 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {step.desc}
                </p>

                {step.bullets && (
                  <ul className="mt-4 space-y-1.5 border-t border-frame-border/60 pt-3 text-xs text-frame-muted-fg">
                    {step.bullets.map((b, bIdx) => (
                      <li key={bIdx} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 shrink-0 bg-frame-accent" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {step.footer && (
                <div className="mt-6 border-t border-frame-border/60 pt-4">
                  <p className="text-xs font-semibold text-frame-fg">
                    {step.footer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
