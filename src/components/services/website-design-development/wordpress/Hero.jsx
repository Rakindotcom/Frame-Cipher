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
        eyebrow="Website Design & Development / Sub-Service"
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
      <section className="border-b-2 border-frame-border bg-frame-muted/30 px-4 py-12 md:px-8 md:py-16">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent mb-4">
            WordPress Development Built Around Your Business Needs
          </p>
          <h2 className="font-heading text-xl md:text-3xl font-bold uppercase tracking-tight text-frame-fg">
            Business Goals &rarr; Content Structure &rarr; WordPress Architecture &rarr; Functionality &rarr; SEO & Performance &rarr; Editorial Control
          </h2>
          <p className="mt-5 text-base md:text-lg font-medium leading-relaxed text-frame-muted-fg max-w-3xl mx-auto">
            WordPress is flexible enough to power a simple business website, a large content platform, a WooCommerce store, or a custom system. From theme architecture and plugin selection to performance, security, and editorial control, each part of the build is planned around the actual purpose of your website.
          </p>
        </div>
      </section>
    </div>
  )
}
