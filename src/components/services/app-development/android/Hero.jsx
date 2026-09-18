import Link from 'next/link'
import { PageHero, PosterButton } from '../../../Kinetic'

const kineticMetrics = [
  {
    num: '01',
    label: 'Native Kotlin Core',
    detail: 'Modern Kotlin Coroutines, Jetpack Compose, and direct Android platform access',
  },
  {
    num: '02',
    label: 'Real Device Diversity',
    detail: 'Engineered for diverse screen resolutions, hardware tiers, and Android OS versions',
  },
  {
    num: '03',
    label: 'Google Play Release',
    detail: 'Play Console preparation, app signing, privacy policies, and release workflows',
  },
  {
    num: '04',
    label: 'Lifecycle Maintenance',
    detail: 'OS compatibility upgrades, dependency updates, and continuous performance tuning',
  },
]

export default function Hero({ service }) {
  const title = service?.h1 || "Best Android App Development Service in Bangladesh"
  const subtitle = "Native Android Apps Built for Real Devices, Real Users & Real Business Needs. Framecipher builds native Android applications in Kotlin for startups, businesses, ecommerce brands, SaaS products, and custom digital solutions. We plan the user experience, architecture, integrations, testing, and Google Play release around your actual requirements rather than treating Android as an afterthought."

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
          <span className="text-frame-accent">Android App Development</span>
        </div>
      </nav>

      {/* HERO */}
      <PageHero
        eyebrow="App Development / Focused Capability"
        meta="Native Kotlin / Google Play Ready"
        number="01"
        title={title}
        actions={
          <>
            <PosterButton href="/contact">Get Free Consultation &rarr;</PosterButton>
            <PosterButton href="#pricing" variant="outline">
              View Packages &amp; Pricing &rarr;
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
