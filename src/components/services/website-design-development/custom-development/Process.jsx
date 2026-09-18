const steps = [
  {
    number: '01',
    title: 'Discovery & Requirements',
    description: 'We analyze your business model, target users, operational workflows, existing databases, and core application objectives.',
  },
  {
    number: '02',
    title: 'Technical Assessment',
    description: 'We confirm whether Next.js and custom development are appropriate and define the backend architecture and tech stack.',
  },
  {
    number: '03',
    title: 'Architecture & UX Planning',
    description: 'We map user journeys, system architecture, database entities, third-party integrations, and critical technical dependencies.',
  },
  {
    number: '04',
    title: 'UI/UX Design System',
    description: 'We design responsive interfaces, wireframes, and reusable component libraries around actual application workflows and tasks.',
  },
  {
    number: '05',
    title: 'Full-Stack Development',
    description: 'We engineer the Next.js frontend, server actions, database queries, API endpoints, authentication, and custom business logic.',
  },
  {
    number: '06',
    title: 'Testing & Hardening',
    description: 'We conduct comprehensive automated testing, E2E validation, responsiveness QA, security scans, and Core Web Vitals profiling.',
  },
  {
    number: '07',
    title: 'Deployment & Monitoring',
    description: 'We configure production CI/CD pipelines, provision cloud infrastructure, configure DNS/SSL, and establish error logging.',
  },
  {
    number: '08',
    title: 'Handover & Roadmap',
    description: 'We transfer full source repository ownership, API documentation, and credentials, providing ongoing feature iteration.',
  },
]

const timelines = [
  { type: 'Custom Marketing Site', time: '4–6 weeks', scope: 'Custom design, headless CMS binding, sub-second speed, on-page SEO' },
  { type: 'Standard Web Application', time: '8–12 weeks', scope: 'User authentication, custom database schema, dashboard UI, API integrations' },
  { type: 'Complex Web Application', time: '12–20 weeks', scope: 'Multiple user roles, complex business logic, billing pipelines, external APIs' },
  { type: 'Enterprise / Large-Scale Platform', time: '20+ weeks', scope: 'High-availability cloud infrastructure, multi-system synchronization, microservices' },
]

export default function Process() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-32">
      <div className="mx-auto max-w-[95vw]">
        {/* SECTION HEADER */}
        <div className="mb-14 md:mb-20 max-w-4xl">
          <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
            Engineering Lifecycle / Process
          </p>
          <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
            Our Structured Development Process
          </h2>
          <p className="mt-6 max-w-3xl text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
            Our development process is designed to reduce uncertainty and validate architecture before expensive development decisions are made.
          </p>
        </div>

        {/* HOME-STYLE WATERMARK CARDS */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <article
              key={step.number}
              className="group relative flex min-h-80 flex-col justify-between overflow-hidden border-2 border-frame-border bg-frame-bg p-7 sm:p-8 transition-all duration-300 hover:border-frame-accent hover:bg-frame-accent"
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
                <h3 className="mt-4 font-heading text-2xl font-bold uppercase leading-none tracking-tighter text-frame-fg transition-colors duration-300 group-hover:text-frame-accent-fg sm:text-3xl">
                  {step.title}
                </h3>
              </div>
              <p className="relative z-10 mt-6 text-sm sm:text-base font-medium leading-relaxed text-frame-muted-fg transition-colors duration-300 group-hover:text-frame-accent-fg/90">
                {step.description}
              </p>
            </article>
          ))}
        </div>

        {/* TIMELINE TABLE */}
        <div className="mt-20 overflow-x-auto border-2 border-frame-border bg-frame-bg shadow-sm">
          <table className="w-full text-left min-w-[600px]">
            <thead className="border-b-2 border-frame-border bg-frame-muted/40">
              <tr>
                <th className="p-5 md:p-7 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Project Scope</th>
                <th className="p-5 md:p-7 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Typical Delivery</th>
                <th className="p-5 md:p-7 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Key Inclusions</th>
              </tr>
            </thead>
            <tbody className="divide-y-2 divide-frame-border text-sm md:text-base font-medium">
              {timelines.map((item, idx) => (
                <tr key={idx} className="hover:bg-frame-muted/20 transition-colors">
                  <td className="p-5 md:p-7 font-bold text-frame-fg">{item.type}</td>
                  <td className="p-5 md:p-7 font-bold text-frame-accent">{item.time}</td>
                  <td className="p-5 md:p-7 text-xs sm:text-sm text-frame-muted-fg">{item.scope}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
