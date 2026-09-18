import Link from 'next/link'
import { PageHero, PosterButton } from '../../../Kinetic'

const kineticMetrics = [
  {
    num: '01',
    label: 'Flutter & React Native',
    detail: 'Single-codebase cross-platform mobile engineering with zero performance compromises',
  },
  {
    num: '02',
    label: 'Shared Logic & Native Modules',
    detail: 'Shared business workflows coupled with native Kotlin and Swift bridges where needed',
  },
  {
    num: '03',
    label: 'Dual Store Deployment',
    detail: 'Synchronized publishing to both Apple App Store and Google Play Store ecosystems',
  },
  {
    num: '04',
    label: 'Lifecycle SLA Maintenance',
    detail: 'Continuous framework updates, OS compatibility patching, and real-device QA',
  },
]

export default function Hero({ service }) {
  const title = service?.h1 || "Best Cross-Platform App Development Service in Bangladesh"
  const subtitle = "Reach Android & iOS With One Smart Development Approach. Framecipher builds cross-platform apps with Flutter and React Native for startups, growing businesses, and established companies that need reliable Android and iOS applications without managing two completely separate development efforts. We share code where it makes sense, use native modules where the platform requires them, and handle strategy, UI/UX, development, testing, and dual-store deployment through one in-house team."

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
          <span className="text-frame-accent">Cross-Platform App Development</span>
        </div>
      </nav>

      {/* HERO */}
      <PageHero
        eyebrow="App Development / Focused Capability"
        meta="Flutter & React Native / One Codebase Dual Platform"
        number="03"
        title={title}
        actions={
          <>
            <PosterButton href="/contact">Get Free Consultation &rarr;</PosterButton>
            <PosterButton href="/contact" variant="outline">
              Discuss Your App &rarr;
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
