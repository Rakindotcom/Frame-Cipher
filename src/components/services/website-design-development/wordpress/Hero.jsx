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
            <PosterButton href="/contact">Start Your WordPress Project &rarr;</PosterButton>
            <PosterButton href="#pricing" variant="outline">
              View Pricing & Plans
            </PosterButton>
          </>
        }
      >
        Build a WordPress website that gives your business control without sacrificing speed, security, or flexibility. Frame Cipher combines custom WordPress development, SEO-ready architecture, performance optimization, and content management through one in-house team.
        <br /><br />
        From business websites and WooCommerce stores to custom WordPress functionality, we build around what your website needs to do—not around a pre-built theme.
      </PageHero>

      {/* VISUAL DASHBOARD PANEL */}
      <div className="border-b-2 border-frame-border bg-frame-bg px-4 py-8 md:px-8">
        <div className="mx-auto max-w-5xl border-2 border-frame-border bg-frame-muted/20 p-5 md:p-8 font-mono text-xs">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-frame-border pb-4">
            <div className="flex items-center gap-2">
              <span className="inline-block h-3 w-3 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="font-bold uppercase tracking-wider text-frame-fg">WP_CORE_ARCHITECTURE // V6.7+ ENGINE</span>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-frame-muted-fg font-semibold uppercase">
              <span>STATUS: PRODUCTION-GRADE</span>
              <span>CACHE: REDIS OBJECT CACHE</span>
              <span className="text-frame-accent font-black">CORE WEB VITALS: 99/100</span>
            </div>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            <div className="border border-frame-border bg-frame-bg p-4">
              <p className="text-[10px] uppercase tracking-widest text-frame-muted-fg">Theme Architecture</p>
              <p className="mt-1 font-heading text-lg font-bold text-frame-fg">Clean Gutenberg</p>
              <p className="mt-1 text-[11px] text-emerald-500 font-bold">Zero Theme Bloat</p>
            </div>
            <div className="border border-frame-border bg-frame-bg p-4">
              <p className="text-[10px] uppercase tracking-widest text-frame-muted-fg">Time to First Byte</p>
              <p className="mt-1 font-heading text-lg font-bold text-frame-fg">&lt; 180ms TTFB</p>
              <p className="mt-1 text-[11px] text-emerald-500 font-bold">Server-Level Page Cache</p>
            </div>
            <div className="border border-frame-border bg-frame-bg p-4">
              <p className="text-[10px] uppercase tracking-widest text-frame-muted-fg">Data Model</p>
              <p className="mt-1 font-heading text-lg font-bold text-frame-fg">ACF Pro & CPT</p>
              <p className="mt-1 text-[11px] text-emerald-500 font-bold">Structured Schemas</p>
            </div>
            <div className="border border-frame-border bg-frame-bg p-4">
              <p className="text-[10px] uppercase tracking-widest text-frame-muted-fg">Security Baseline</p>
              <p className="mt-1 font-heading text-lg font-bold text-frame-fg">Hardened & Isolated</p>
              <p className="mt-1 text-[11px] text-emerald-500 font-bold">WAF + 2FA + SSL</p>
            </div>
          </div>
        </div>
      </div>

      {/* ARCHITECTURE / CONTROL PIPELINE SECTION */}
      <section className="border-b-2 border-frame-border bg-frame-muted/30 px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent mb-4">
            Purpose-Driven Architecture
          </p>
          <h2 className="font-heading text-[clamp(2.2rem,5.8vw,4.8rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
            WordPress Development Built Around Your Business Needs
          </h2>
          <p className="mt-8 text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg max-w-3xl mx-auto">
            WordPress is flexible enough to power a simple business website, a large content platform, a WooCommerce store, or a custom business system. The right development approach depends on what your website needs to do, not simply on the fact that it runs on WordPress.
          </p>
          <p className="mt-4 text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg max-w-3xl mx-auto">
            We start by understanding your content, audience, workflows, functionality, and long-term goals. From theme architecture and plugin selection to performance, security, SEO, and editorial control, each part of the build is planned around the actual purpose of your website.
          </p>

          <div className="mt-10 mb-4 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">
            Our approach connects:
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 text-xs md:text-sm font-black uppercase tracking-wider text-frame-fg">
            <span className="border border-frame-border/80 bg-frame-bg px-3.5 py-2 shadow-sm">Business Goals</span>
            <span className="text-frame-accent font-bold">&rarr;</span>
            <span className="border border-frame-border/80 bg-frame-bg px-3.5 py-2 shadow-sm">Content Structure</span>
            <span className="text-frame-accent font-bold">&rarr;</span>
            <span className="border border-frame-border/80 bg-frame-bg px-3.5 py-2 shadow-sm">WordPress Architecture</span>
            <span className="text-frame-accent font-bold">&rarr;</span>
            <span className="border border-frame-border/80 bg-frame-bg px-3.5 py-2 shadow-sm">Functionality</span>
            <span className="text-frame-accent font-bold">&rarr;</span>
            <span className="border border-frame-border/80 bg-frame-bg px-3.5 py-2 shadow-sm">SEO &amp; Performance</span>
            <span className="text-frame-accent font-bold">&rarr;</span>
            <span className="border border-frame-accent bg-frame-accent/10 px-3.5 py-2 text-frame-accent shadow-sm">Editorial Control</span>
          </div>

          <p className="mt-8 text-base md:text-lg font-semibold text-frame-fg max-w-3xl mx-auto">
            The result is a WordPress website that your team can manage today and continue developing as your business grows.
          </p>
        </div>
      </section>
    </div>
  )
}
