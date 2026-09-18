import Link from 'next/link'
import { PageHero, PosterButton } from '../../../Kinetic'

const kineticMetrics = [
  {
    num: '01',
    label: 'Custom Enterprise Workflows',
    detail: 'Applications architected around your organization’s real business processes and governance rules',
  },
  {
    num: '02',
    label: 'ERP & Legacy System Integration',
    detail: 'Bi-directional connectors for SAP, Oracle, NetSuite, HRMS, and proprietary legacy databases',
  },
  {
    num: '03',
    label: 'Enterprise Security & SSO',
    detail: 'Role-based access control (RBAC), multi-factor authentication, audit logging, and single sign-on',
  },
  {
    num: '04',
    label: 'High Availability & SLA Support',
    detail: 'Fault-tolerant architecture, disaster recovery runbooks, and enterprise maintenance agreements',
  },
]

export default function Hero({ service }) {
  const title = service?.h1 || "Best Enterprise App Development Service in Bangladesh"
  const subtitle = "Enterprise Software Built Around Your Workflows, Systems & People. Enterprise applications need to fit into an existing organization. That means more than building screens and features. Framecipher develops custom enterprise applications around your business processes, user roles, existing systems, security requirements, and long-term operational needs. We handle discovery, architecture, UI/UX, development, integration, testing, deployment, and ongoing support through one in-house team for organizations in Bangladesh and international markets."

  return (
    <div className="bg-frame-bg text-frame-fg">
      {/* BREADCRUMB */}
      <nav aria-label="Breadcrumb" className="border-b border-frame-border/60 bg-frame-bg/80 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-frame-muted-fg md:px-8">
        <div className="mx-auto flex max-w-[95vw] items-center gap-2 overflow-x-auto">
          <Link href="/" className="transition hover:text-frame-fg">Home</Link>
          <span>/</span>
          <Link href="/services" className="transition hover:text-frame-fg">Services</Link>
          <span>/</span>
          <Link href="/services/app-development" className="transition hover:text-frame-fg">App Development</Link>
          <span>/</span>
          <span className="text-frame-accent">Enterprise App Development</span>
        </div>
      </nav>

      {/* HERO */}
      <PageHero
        eyebrow="App Development / Focused Capability"
        meta="Custom Workflows / Legacy Integration & SSO"
        number="05"
        title={title}
        actions={
          <>
            <PosterButton href="/contact">Get Free Consultation &rarr;</PosterButton>
            <PosterButton href="/contact" variant="outline">
              Discuss Your Enterprise Project &rarr;
            </PosterButton>
          </>
        }
      >
        {subtitle}
      </PageHero>

      {/* KINETIC BRUTALIST METRICS */}
      <div className="border-b-2 border-frame-border bg-frame-muted/30">
        <div className="mx-auto grid max-w-[95vw] grid-cols-1 divide-y-2 divide-frame-border sm:grid-cols-2 sm:divide-y-0 sm:divide-x-2 lg:grid-cols-4">
          {kineticMetrics.map((item, idx) => (
            <div key={idx} className="p-6 md:p-8">
              <span className="font-heading text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                {item.num}
              </span>
              <h3 className="mt-2 font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg">
                {item.label}
              </h3>
              <p className="mt-2 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
