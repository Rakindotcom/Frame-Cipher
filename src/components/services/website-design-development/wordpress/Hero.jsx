import Link from 'next/link'
import { PageHero, PosterButton } from '../../../Kinetic'

export default function Hero() {
  return (
    <div className="bg-frame-bg text-frame-fg">
      {/* BREADCRUMB */}
      <nav aria-label="Breadcrumb" className="border-b border-frame-border/60 bg-frame-bg/80 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-frame-muted-fg md:px-8">
        <div className="mx-auto flex max-w-[95vw] items-center gap-2 overflow-x-auto">
          <Link href="/" className="transition hover:text-frame-fg">Home</Link>
          <span>/</span>
          <Link href="/services" className="transition hover:text-frame-fg">Services</Link>
          <span>/</span>
          <Link href="/services/website-design-development" className="transition hover:text-frame-fg">Website Design & Development</Link>
          <span>/</span>
          <span className="text-frame-accent">WordPress</span>
        </div>
      </nav>

      {/* HERO */}
      <PageHero
        eyebrow="Website Design & Development / Focused Service"
        meta="Custom Themes & Security Hardening / In-House Team"
        number="05"
        title="Professional WordPress Development Service in Bangladesh"
        actions={
          <>
            <PosterButton href="/contact">Start Your WordPress Project</PosterButton>
            <PosterButton href="#pricing" variant="outline">
              View Pricing & Plans
            </PosterButton>
          </>
        }
      >
        Build a WordPress website that gives your business control without sacrificing speed, security, or flexibility. From business websites and WooCommerce stores to custom WordPress functionality, we build around what your website needs to do—not around a pre-built theme.
      </PageHero>

      {/* ARCHITECTURE / CONTROL CALLOUT BANNER */}
      <section className="border-b-2 border-frame-border bg-frame-muted/30 px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent mb-4">
            WordPress Architecture
          </p>
          <h2 className="font-heading text-[clamp(2.2rem,5.8vw,4.8rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
            WordPress Development Built Around Business Needs
          </h2>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 md:gap-3 text-xs md:text-sm font-black uppercase tracking-wider text-frame-fg">
            <span className="border border-frame-border/80 bg-frame-bg px-3 py-1.5">Business Goals</span>
            <span className="text-frame-accent font-bold">&rarr;</span>
            <span className="border border-frame-border/80 bg-frame-bg px-3 py-1.5">Content Structure</span>
            <span className="text-frame-accent font-bold">&rarr;</span>
            <span className="border border-frame-border/80 bg-frame-bg px-3 py-1.5">WP Architecture</span>
            <span className="text-frame-accent font-bold">&rarr;</span>
            <span className="border border-frame-border/80 bg-frame-bg px-3 py-1.5">Functionality</span>
            <span className="text-frame-accent font-bold">&rarr;</span>
            <span className="border border-frame-border/80 bg-frame-bg px-3 py-1.5">SEO & Speed</span>
            <span className="text-frame-accent font-bold">&rarr;</span>
            <span className="border border-frame-accent bg-frame-accent/10 px-3 py-1.5 text-frame-accent">Editorial Control</span>
          </div>
          <p className="mt-8 text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg max-w-3xl mx-auto">
            WordPress is flexible enough to power a simple business website, a large content platform, a WooCommerce store, or a custom system. From theme architecture and plugin selection to performance, security, and editorial control, each part of the build is planned around the actual purpose of your website.
          </p>
        </div>
      </section>
    </div>
  )
}
