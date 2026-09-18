import Link from 'next/link'
import { PageHero, PosterButton } from '../../../Kinetic'

const kineticMetrics = [
  {
    num: '01',
    label: 'Swift & SwiftUI Native',
    detail: 'Modern Swift 6, SwiftUI declarative UI, Combine, and direct Apple SDK integration',
  },
  {
    num: '02',
    label: 'Apple HIG Design',
    detail: 'Human Interface Guidelines, fluid gestures, dynamic typography, and native haptics',
  },
  {
    num: '03',
    label: 'App Store Connect',
    detail: 'TestFlight beta distribution, provisioning profiles, and strict App Store review compliance',
  },
  {
    num: '04',
    label: 'Ecosystem Expansion',
    detail: 'Unified architectures supporting iPhone, iPad, Apple Watch, and Mac Catalyst',
  },
]

export default function Hero({ service }) {
  const title = service?.h1 || "Best iOS App Development Service in Bangladesh"
  const subtitle = "Native iOS Apps Built for Real Users, Real Devices & Real Business Goals. From MVPs to complex digital products, Framecipher builds native iOS applications with Swift and SwiftUI, backed by thoughtful UX, scalable architecture, secure integrations, and release support. We handle strategy, design, development, testing, and App Store deployment through one in-house team for businesses in Bangladesh and worldwide."

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
          <span className="text-frame-accent">iOS App Development</span>
        </div>
      </nav>

      {/* HERO */}
      <PageHero
        eyebrow="App Development / Focused Capability"
        meta="Native Swift & SwiftUI / App Store Certified"
        number="02"
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
