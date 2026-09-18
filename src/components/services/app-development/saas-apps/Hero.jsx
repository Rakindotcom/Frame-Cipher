import Link from 'next/link'
import { PageHero, PosterButton } from '../../../Kinetic'

const kineticMetrics = [
  {
    num: '01',
    label: 'Multi-Tenant Architecture',
    detail: 'Complete tenant isolation with shared or separate database schemas engineered for scale',
  },
  {
    num: '02',
    label: 'Subscription & Metered Billing',
    detail: 'Tiered, seat-based, and usage-based monetization via Stripe, Paddle, and local gateways',
  },
  {
    num: '03',
    label: 'Role-Based Access Control',
    detail: 'Granular permissions, team workspaces, audit logs, and enterprise SSO integrations',
  },
  {
    num: '04',
    label: 'Cloud Infrastructure & CI/CD',
    detail: 'Auto-scaling containers, high-availability caching, background job queues, and uptime SLA',
  },
]

export default function Hero({ service }) {
  const title = service?.h1 || "Best SaaS App Development Service in Bangladesh"
  const subtitle = "Build a SaaS Product That Is Ready for Customers, Billing & Growth. A SaaS product is more than a web application with a login screen. It needs customer isolation, subscriptions, permissions, onboarding, analytics, integrations, and infrastructure that can evolve as usage grows. Framecipher builds custom SaaS products for startups, growing businesses, and established companies in Bangladesh and international markets. We handle product strategy, UI/UX, architecture, development, billing, testing, deployment, and ongoing support through one in-house team."

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
          <span className="text-frame-accent">SaaS App Development</span>
        </div>
      </nav>

      {/* HERO */}
      <PageHero
        eyebrow="App Development / Focused Capability"
        meta="Multi-Tenant Architecture / Recurring Revenue Engines"
        number="04"
        title={title}
        actions={
          <>
            <PosterButton href="/contact">Get Free Consultation &rarr;</PosterButton>
            <PosterButton href="/contact" variant="outline">
              Discuss Your SaaS Idea &rarr;
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
