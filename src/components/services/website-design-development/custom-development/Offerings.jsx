import { SectionIntro } from '../../../Kinetic'

const coreServices = [
  {
    tag: 'Service 01',
    title: 'Technical Discovery & Architecture',
    subtitle: 'Every custom project starts with understanding what the system actually needs to do.',
    description: 'We review your business model, users, workflows, existing software, data, integrations, performance requirements, and future plans before defining the technical direction.',
    bullets: [
      'Platform-fit assessment',
      'System architecture planning',
      'Data model planning',
      'API and integration mapping',
      'Authentication requirements',
      'User roles and permissions',
      'Hosting and deployment planning',
      'Technical scope and milestones',
    ],
    note: 'Good architecture reduces unnecessary complexity and gives future development a stronger foundation.',
  },
  {
    tag: 'Service 02',
    title: 'UI/UX Design for Custom Applications',
    subtitle: 'Custom applications need interfaces built around tasks, not templates.',
    description: 'We design user experiences around real workflows, user roles, content, actions, and business requirements.',
    bullets: [
      'User flow mapping',
      'Wireframes',
      'Custom interface design',
      'Responsive layouts',
      'Reusable components',
      'Design systems',
      'Accessibility considerations',
      'Developer-ready design handoff',
    ],
    note: 'Every screen should support a specific user task or business goal.',
  },
  {
    tag: 'Service 03',
    title: 'Next.js App Router & Modern Architecture',
    subtitle: 'For new projects, we use modern Next.js architecture where it fits the application requirements.',
    description: 'We choose the architecture based on how your application handles content, data, users, and interactions.',
    bullets: [
      'App Router',
      'Server Components',
      'Client Components',
      'Server Actions',
      'Static rendering',
      'Dynamic rendering',
      'Caching and revalidation',
      'Structured route architecture',
      'Server-side data fetching',
      'Streaming where appropriate',
    ],
    note: 'The goal is not to use every feature simply because it exists. We choose the architecture based on how your application handles content, data, users, and interactions.',
  },
  {
    tag: 'Service 04',
    title: 'Full-Stack Next.js Development',
    subtitle: 'We develop the frontend and application logic as a connected system.',
    description: 'This approach keeps the application\'s frontend, backend, data, and business logic aligned.',
    bullets: [
      'Next.js and React frontend development',
      'Custom interfaces',
      'Backend business logic',
      'Database-connected functionality',
      'API development',
      'Forms and workflows',
      'Admin interfaces',
      'Customer dashboards',
      'Custom calculations',
      'Business rules',
      'Third-party integrations',
    ],
    note: 'This approach keeps the application\'s frontend, backend, data, and business logic aligned.',
  },
  {
    tag: 'Service 05',
    title: 'API & Backend Development',
    subtitle: 'Custom applications often need their own APIs and backend logic.',
    description: 'Where an external platform already provides the required API, we integrate with it instead of rebuilding functionality unnecessarily.',
    bullets: [
      'REST APIs',
      'API-driven application features',
      'Database-backed functionality',
      'Custom business logic',
      'Webhooks',
      'External system integrations',
      'Data validation',
      'Application workflows',
    ],
    note: 'Where an external platform already provides the required API, we integrate with it instead of rebuilding functionality unnecessarily.',
  },
  {
    tag: 'Service 06',
    title: 'Authentication & User Management',
    subtitle: 'Applications with multiple user types need clear access rules and secure account workflows.',
    description: 'Authentication and authorization are designed around the actual users and responsibilities within your application.',
    bullets: [
      'Registration and login',
      'Password recovery',
      'User profiles',
      'Role-based access',
      'Permission systems',
      'Protected application areas',
      'Customer accounts',
      'Admin access',
      'Team or organization-based access',
    ],
    note: 'Authentication and authorization are designed around the actual users and responsibilities within your application.',
  },
  {
    tag: 'Service 07',
    title: 'Performance, Security & Scalability',
    subtitle: 'Performance and security are considered during architecture rather than left until the end.',
    description: 'The right architecture depends on expected traffic, data volume, application complexity, and business requirements.',
    bullets: [
      'Appropriate rendering strategies',
      'Image and asset optimization',
      'JavaScript and bundle optimization',
      'Caching strategies',
      'API performance considerations',
      'Secure authentication',
      'Input validation',
      'Access control',
      'Database optimization',
      'Infrastructure planning',
    ],
    note: 'The right architecture depends on expected traffic, data volume, application complexity, and business requirements.',
  },
  {
    tag: 'Service 08',
    title: 'Testing & Quality Assurance',
    subtitle: 'Custom software needs structured testing before launch.',
    description: 'Testing is introduced throughout development instead of being treated only as a final launch task.',
    bullets: [
      'Functional testing',
      'Component testing',
      'Integration testing',
      'API testing',
      'End-to-end testing',
      'Cross-browser testing',
      'Responsive testing',
      'Performance testing',
      'Regression testing',
      'Accessibility checks',
    ],
    note: 'Testing is introduced throughout development instead of being treated only as a final launch task.',
  },
  {
    tag: 'Service 09',
    title: 'Ongoing Custom Development',
    subtitle: 'Your product may continue to change after launch.',
    description: 'Ongoing development is scoped around your product roadmap and changing business requirements.',
    bullets: [
      'New features',
      'New integrations',
      'Workflow improvements',
      'Performance optimization',
      'Dependency updates',
      'Security improvements',
      'Bug fixes',
      'UI refinements',
      'Application enhancements',
    ],
    note: 'Ongoing development is scoped around your product roadmap and changing business requirements.',
  },
]

export default function Offerings() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Core Capabilities" title="Our Custom / Next.js Development Services" index="10">
          We build custom Next.js websites and applications around your business requirements, technical needs, users, content, integrations, and long-term plans.
        </SectionIntro>

        <div className="grid bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-3 border-2 border-frame-border">
          {coreServices.map((service, index) => (
            <article
              key={index}
              className="group flex flex-col justify-between bg-frame-bg p-7 sm:p-9 transition-colors duration-300 hover:bg-frame-muted/30"
            >
              <div>
                <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
                  {service.tag}
                </span>
                <h3 className="mt-4 font-heading text-xl sm:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                  {service.title}
                </h3>
                <p className="mt-3 text-xs sm:text-sm font-semibold uppercase tracking-wider text-frame-accent">
                  {service.subtitle}
                </p>
                <p className="mt-3 text-sm sm:text-base font-medium leading-relaxed text-frame-muted-fg">
                  {service.description}
                </p>

                <div className="mt-6 border-t-2 border-frame-border/60 pt-6">
                  <p className="text-xs font-black uppercase tracking-wider text-frame-accent mb-3">
                    What We Do
                  </p>
                  <ul className="space-y-2.5 text-xs sm:text-sm font-medium text-frame-fg/90">
                    {service.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5">
                        <span className="text-frame-accent font-bold">✓</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 border-t-2 border-frame-border/60 pt-5 text-xs font-medium italic text-frame-muted-fg leading-relaxed">
                {service.note}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}