const steps = [
  {
    number: '01',
    title: 'Initial Site Assessment & Audit',
    description: 'We audit your current platform, plugin stack, existing security vulnerabilities, hosting configuration, and backup readiness before ongoing maintenance starts.',
  },
  {
    number: '02',
    title: 'Plan Scoping & Onboarding',
    description: 'We define the specific update frequency, backup intervals, and monitoring scope matched to your platform architecture and daily transaction volume.',
  },
  {
    number: '03',
    title: 'Continuous Monitoring & Patching',
    description: 'Automated 24/7 uptime monitoring and vulnerability scanning run in parallel with scheduled core, theme, and plugin updates in a safe staging workflow.',
  },
  {
    number: '04',
    title: 'Monthly Reporting & Optimization',
    description: 'We deliver transparent monthly maintenance logs detailing security scans, applied patches, Core Web Vitals progress, and proactive recommendations.',
  },
  {
    number: '05',
    title: 'Rapid Response & Priority SLA',
    description: 'Fast turnaround on urgent issues, backed by tested off-site backups and dedicated senior engineers who already understand your codebase.',
  },
]

export default function Process() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-32">
      <div className="mx-auto max-w-[95vw]">
        {/* SECTION HEADER */}
        <div className="mb-14 md:mb-20 max-w-4xl">
          <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
            Execution Framework / Continuous Reliability
          </p>
          <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
            Our Website Maintenance Process
          </h2>
          <p className="mt-6 text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
            How we protect your website through proactive health monitoring, scheduled patch deployment, and rapid incident response.
          </p>
        </div>

        {/* STEP CARDS WITH WATERMARK */}
        <div className="grid bg-frame-border gap-px border-2 border-frame-border sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="relative overflow-hidden bg-frame-bg p-7 md:p-10 flex flex-col justify-between">
              <span 
                className="pointer-events-none absolute -right-2 -bottom-6 font-heading text-[7rem] md:text-[8rem] font-bold leading-none tracking-tighter text-frame-muted/30 select-none"
                aria-hidden="true"
              >
                {step.number}
              </span>
              <div className="relative z-10">
                <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
                  Phase {step.number}
                </span>
                <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                  {step.title}
                </h3>
                <p className="mt-4 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* TIMELINE CALLOUT */}
        <div className="mt-16 border-2 border-frame-border bg-frame-muted/30 p-7 md:p-12">
          <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">Service Commitment</span>
          <h3 className="mt-3 font-heading text-2xl md:text-3xl font-bold uppercase tracking-tight text-frame-fg">
            Ongoing Retainer & Onboarding Timelines
          </h3>
          <p className="mt-4 text-base md:text-lg font-medium leading-relaxed text-frame-muted-fg max-w-4xl">
            Website maintenance is an ongoing operational service rather than a one-off project. Plans run month-to-month or on an annual retainer with continuous monitoring. Initial site assessment and onboarding takes 3 to 5 business days before regular scheduled cycles begin.
          </p>
        </div>
      </div>
    </section>
  )
}
