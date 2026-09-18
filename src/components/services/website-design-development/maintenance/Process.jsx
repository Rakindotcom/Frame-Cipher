export default function Process() {
  const steps = [
    {
      number: '01',
      title: 'Website Health Audit',
      description: 'We review the platform, access, security, backups, performance, integrations, and important website functions.',
    },
    {
      number: '02',
      title: 'Maintenance Plan Scoping',
      description: 'We define the update frequency, backup requirements, monitoring scope, content support, technical support, and response priorities.',
    },
    {
      number: '03',
      title: 'Backup & Monitoring Setup',
      description: 'We establish the required backup process and configure the appropriate monitoring for uptime, performance, errors, and important functionality.',
    },
    {
      number: '04',
      title: 'Safe Updates & Maintenance',
      description: 'Where the platform and environment allow, updates are reviewed and tested before they are applied to the live website.',
    },
    {
      number: '05',
      title: 'Ongoing Monitoring & Support',
      description: 'We monitor the website and handle scheduled maintenance, minor changes, troubleshooting, and identified issues according to the selected plan.',
    },
    {
      number: '06',
      title: 'Incident Response',
      description: 'When a critical issue occurs, we investigate the cause, protect the available data, restore functionality where possible, and document the issue.',
    },
    {
      number: '07',
      title: 'Reporting & Recommendations',
      description: 'Regular reports show completed maintenance, important issues found, and recommendations for keeping the website healthy.',
    },
  ]

  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-16 sm:py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <div className="max-w-4xl mb-12 md:mb-16">
          <span className="text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
            Workflow &amp; Lifecycle
          </span>
          <h2 className="mt-3 font-heading text-[clamp(2.2rem,5.8vw,4.8rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
            How We Approach Website Maintenance
          </h2>
          <p className="mt-6 text-base sm:text-lg md:text-xl font-medium leading-relaxed text-frame-muted-fg">
            Our maintenance process focuses on preventing avoidable problems and keeping the website&apos;s condition visible over time.
          </p>
        </div>

        {/* 7 STEPS UNIFORM WATERMARK GRID */}
        <div className="grid bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 border-2 border-frame-border">
          {steps.map((step) => (
            <article
              key={step.number}
              className="group relative flex min-h-[300px] flex-col justify-between overflow-hidden bg-frame-bg p-7 sm:p-8 transition-all duration-300 hover:bg-frame-accent"
            >
              <p
                className="absolute -right-2 -top-4 select-none font-heading text-[7.5rem] sm:text-[9rem] font-bold leading-none tracking-tighter text-frame-muted/30 transition-colors duration-300 group-hover:text-frame-accent-fg/20"
                aria-hidden="true"
              >
                {step.number}
              </p>
              <div className="relative z-10">
                <span className="text-[11px] font-black uppercase tracking-[0.24em] text-frame-accent transition-colors duration-300 group-hover:text-frame-accent-fg">
                  Phase {step.number}
                </span>
                <h3 className="mt-4 font-heading text-xl sm:text-2xl font-bold uppercase leading-tight tracking-tighter text-frame-fg transition-colors duration-300 group-hover:text-frame-accent-fg">
                  {step.title}
                </h3>
              </div>
              <p className="relative z-10 mt-6 text-sm sm:text-base font-medium leading-relaxed text-frame-muted-fg transition-colors duration-300 group-hover:text-frame-accent-fg/90">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
