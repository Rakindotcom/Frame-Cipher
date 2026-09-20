import { SectionIntro } from '../../../Kinetic'

const techStack = [
  {
    category: 'Frontend',
    desc: 'Next.js, React, TypeScript, and the frontend technologies selected for the project\'s requirements.',
  },
  {
    category: 'UI & Design Systems',
    desc: 'Reusable interface components, responsive systems, and the styling approach appropriate for the application.',
  },
  {
    category: 'Backend & APIs',
    desc: 'Application logic, APIs, databases, authentication, and integrations based on the system architecture.',
  },
  {
    category: 'Data & CMS',
    desc: 'The database and content management approach selected around the application\'s data model and editorial workflow.',
  },
  {
    category: 'Payments & Integrations',
    desc: 'Payment services, CRM systems, ERP platforms, external APIs, and other business tools where required.',
  },
  {
    category: 'Deployment & Infrastructure',
    desc: 'Hosting, deployment, monitoring, and infrastructure configured according to the application\'s operational requirements.',
  },
]

export default function TechStack() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Architecture &amp; Platform Stack" title="Our Next.js Technology Stack">
          We choose the technology stack around the project rather than forcing every application into the same setup. The final stack is confirmed during technical discovery and architecture planning.
        </SectionIntro>

        <div className="grid bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-3 border-2 border-frame-border">
          {techStack.map((tech, idx) => (
            <div key={idx} className="flex flex-col justify-between bg-frame-bg p-6 sm:p-8">
              <div>
                <span className="text-[11px] font-black uppercase tracking-wider text-frame-accent">
                  Layer 0{idx + 1}
                </span>
                <h3 className="mt-3 font-heading text-lg sm:text-xl font-bold uppercase tracking-tight text-frame-fg">
                  {tech.category}
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-frame-muted-fg leading-relaxed">
                  {tech.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}