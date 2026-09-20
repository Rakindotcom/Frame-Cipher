import { SectionIntro } from '../../../Kinetic'

const onboardingSteps = [
  {
    number: '01',
    title: 'Access & Technology Review',
    description: 'We confirm access to the website, hosting, domain, analytics, relevant third-party services, and other systems required for maintenance.',
  },
  {
    number: '02',
    title: 'Security & Update Review',
    description: 'We check the current update status, known vulnerabilities, outdated dependencies, security configuration, and existing technical issues.',
  },
  {
    number: '03',
    title: 'Backup Baseline',
    description: 'We review the current backup setup and establish a reliable backup and recovery process appropriate for the website.',
  },
  {
    number: '04',
    title: 'Performance & Uptime Baseline',
    description: 'We review website availability, performance, important pages, and critical user journeys so future changes can be compared against a known starting point.',
  },
  {
    number: '05',
    title: 'Critical Function Review',
    description: 'For ecommerce and lead-generation websites, we identify important functions such as forms, checkout, payments, bookings, CRM connections, and other business-critical integrations.',
  },
  {
    number: '06',
    title: 'Maintenance Plan',
    description: 'We turn the assessment into a practical maintenance scope covering update frequency, backup requirements, monitoring, support, content work, reporting, and response priorities.',
  },
]

export default function Onboarding() {
  return (
    <section className="bg-frame-muted/20 px-4 py-16 sm:py-20 md:px-8 md:py-28 border-b-2 border-frame-border">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Onboarding Protocol" title="Website Health Audit & Maintenance Onboarding">
          Before routine maintenance begins, we establish a clear picture of the website's current condition.
        </SectionIntro>

        <div className="mt-12 grid bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-3 border-2 border-frame-border">
          {onboardingSteps.map((step, idx) => (
            <div key={idx} className="bg-frame-bg p-7 sm:p-8 md:p-10 flex flex-col justify-between hover:bg-frame-muted/10 transition-colors">
              <div>
                <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                  Step {step.number}
                </span>
                <h3 className="mt-4 font-heading text-xl sm:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                  {step.title}
                </h3>
                <p className="mt-4 text-sm sm:text-base font-medium leading-relaxed text-frame-muted-fg">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 border-2 border-frame-border bg-frame-bg p-6 md:p-8">
          <p className="text-sm sm:text-base font-medium leading-relaxed text-frame-muted-fg">
            This onboarding process helps prevent inherited problems from being mistaken for newly introduced maintenance issues.
          </p>
        </div>
      </div>
    </section>
  )
}