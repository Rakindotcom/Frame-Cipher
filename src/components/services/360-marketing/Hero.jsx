import Link from 'next/link'
import { PageHero, PosterButton } from '../../Kinetic'

export default function Hero() {
  return (
    <div className="bg-frame-bg text-frame-fg">
      {/* Breadcrumb Navigation */}
      <nav
        aria-label="Breadcrumb"
        className="border-b border-frame-border/60 bg-frame-bg/80 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-frame-muted-fg md:px-8"
      >
        <div className="mx-auto flex max-w-[95vw] items-center gap-2 overflow-x-auto">
          <Link href="/" className="transition hover:text-frame-fg">Home</Link>
          <span>/</span>
          <Link href="/services" className="transition hover:text-frame-fg">Services</Link>
          <span>/</span>
          <span className="text-frame-accent">360 Marketing</span>
        </div>
      </nav>

      {/* Main Kinetic Page Hero */}
      <PageHero
        eyebrow="Flagship Growth Operating System"
        meta="Full-Funnel Strategy / Creative Media / Paid Ads / SEO / Web & CRO / Unified Analytics"
        number="360"
        title="360 Marketing Agency in Bangladesh"
        actions={
          <>
            <PosterButton href="/contact">Request a 360 Growth Audit</PosterButton>
            <PosterButton href="#pillars" variant="outline">
              Explore the 6 Growth Pillars
            </PosterButton>
          </>
        }
      >
        Growth breaks down when marketing is split between multiple disconnected vendors. Frame Cipher
        unifies brand positioning, commercial video production, paid performance advertising, technical
        and local SEO, high-converting web architecture, and lifecycle CRM into one accountable marketing
        operating system. We build, manage, and optimize every stage of the customer journey for ambitious
        brands in Bangladesh and global markets including the UK, UAE, USA, and Canada.
      </PageHero>

      {/* Quick Value Proof Strip */}
      <section className="border-b-2 border-frame-border bg-frame-bg py-8 px-4 md:px-8">
        <div className="mx-auto grid max-w-[95vw] grid-cols-2 gap-6 lg:grid-cols-4">
          <div className="border-l-2 border-frame-accent pl-4">
            <p className="font-heading text-3xl font-bold uppercase tracking-tighter text-frame-fg sm:text-4xl">
              6 In 1
            </p>
            <p className="mt-1 text-xs font-medium uppercase tracking-wider text-frame-muted-fg">
              Integrated Growth Disciplines Under One Roof
            </p>
          </div>
          <div className="border-l-2 border-frame-accent pl-4">
            <p className="font-heading text-3xl font-bold uppercase tracking-tighter text-frame-fg sm:text-4xl">
              4.8x
            </p>
            <p className="mt-1 text-xs font-medium uppercase tracking-wider text-frame-muted-fg">
              Average ROAS Across Performance Campaigns
            </p>
          </div>
          <div className="border-l-2 border-frame-accent pl-4">
            <p className="font-heading text-3xl font-bold uppercase tracking-tighter text-frame-fg sm:text-4xl">
              1M+
            </p>
            <p className="mt-1 text-xs font-medium uppercase tracking-wider text-frame-muted-fg">
              Organic Video Views Generated per Campaign
            </p>
          </div>
          <div className="border-l-2 border-frame-accent pl-4">
            <p className="font-heading text-3xl font-bold uppercase tracking-tighter text-frame-fg sm:text-4xl">
              0%
            </p>
            <p className="mt-1 text-xs font-medium uppercase tracking-wider text-frame-muted-fg">
              Vendor Finger-Pointing &amp; Data Silos
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
