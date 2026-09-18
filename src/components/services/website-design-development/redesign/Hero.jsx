import Link from 'next/link'
import { PosterButton } from '../../../Kinetic'

const readinessFactors = [
  'The design feels outdated and no longer represents your brand or market position.',
  'Mobile visitors struggle with navigation, layouts, forms, or important actions.',
  'Pages load slowly, especially on mobile devices or content-heavy sections.',
  'Visitors don\'t know what to do next, even when your website receives traffic.',
  'Important pages no longer perform as well as they once did in search.',
  'Your content structure has become difficult to navigate as the website has grown.',
  'Your CMS or platform limits what you need to build, manage, or integrate.',
  'Your website has accumulated technical problems from years of updates, plugins, themes, or custom code.',
  'Your business has changed, but the website still reflects an older offer, audience, or positioning.',
  'Analytics show friction in important user journeys, forms, product pages, or checkout flows.',
]

const keepingAssets = [
  {
    title: 'SEO Equity',
    description: 'We identify pages that already receive organic traffic, rank for valuable searches, or attract backlinks so they can be protected during the redesign.',
  },
  {
    title: 'Existing URLs',
    description: 'We review which URLs should remain unchanged and which genuinely need to be replaced, consolidated, or redirected.',
  },
  {
    title: 'Valuable Content',
    description: 'Not every old page is outdated just because the design is outdated. We identify content that still supports rankings, conversions, customer journeys, or topical authority.',
  },
  {
    title: 'Analytics & Conversion Data',
    description: 'Existing analytics can reveal which pages, forms, products, and user journeys are already contributing to leads, sales, or engagement.',
  },
  {
    title: 'Information Architecture',
    description: 'We review the current navigation, categories, page hierarchy, and relationships between important pages before deciding what needs to change.',
  },
  {
    title: 'Existing Integrations',
    description: 'CRM systems, analytics platforms, payment gateways, booking tools, marketing systems, forms, APIs, and other integrations may need to remain functional after the redesign.',
  },
]

export default function Hero() {
  return (
    <div className="bg-frame-bg text-frame-fg">
      {/* BREADCRUMB */}
      <nav aria-label="Breadcrumb" className="border-b-2 border-frame-border bg-frame-bg/90 px-4 py-3.5 text-xs font-semibold uppercase tracking-wider text-frame-muted-fg md:px-8">
        <div className="mx-auto flex max-w-[95vw] items-center gap-2 overflow-x-auto">
          <Link href="/" className="transition hover:text-frame-fg">Home</Link>
          <span>/</span>
          <Link href="/services" className="transition hover:text-frame-fg">Services</Link>
          <span>/</span>
          <Link href="/services/website-design-development" className="transition hover:text-frame-fg">Website Design & Development</Link>
          <span>/</span>
          <span className="text-frame-accent">Website Redesign</span>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="px-4 py-16 sm:py-20 md:px-8 md:py-28 lg:py-32 border-b-2 border-frame-border">
        <div className="mx-auto max-w-[95vw]">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <span className="text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Focused Service / Website Redesign
            </span>
            <span className="font-heading text-3xl md:text-4xl font-bold tracking-tighter text-frame-muted">
              11
            </span>
          </div>

          <h1 className="font-heading text-[clamp(2.4rem,6.5vw,5.8rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg max-w-5xl">
            Best Website Redesign Service in Bangladesh
          </h1>

          <p className="mt-8 max-w-3xl text-base sm:text-lg md:text-xl font-medium leading-relaxed text-frame-muted-fg">
            Framecipher redesigns websites for businesses, ecommerce stores, blogs, portfolios, and any other kind of site that&apos;s outdated, slow, or no longer performing, without losing the SEO rankings, content, or traffic already built up. Whether you&apos;re redesigning a business site, an online store, a content platform, or something else entirely in Dhaka or across the US, UK, Australia, Canada, or UAE, our redesign services fix what&apos;s actually broken instead of just applying a new coat of paint.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <PosterButton href="/contact">Get Free Consultation</PosterButton>
            <PosterButton href="#pricing" variant="outline">
              View Pricing &amp; Plans &rarr;
            </PosterButton>
          </div>

          {/* KINETIC METRIC CARDS */}
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-px bg-frame-border border-2 border-frame-border">
            <div className="bg-frame-bg p-6">
              <span className="text-xs font-black uppercase tracking-widest text-frame-accent">Strategy</span>
              <p className="mt-2 font-heading text-2xl sm:text-3xl font-bold text-frame-fg uppercase">Audit First</p>
              <p className="mt-1 text-xs sm:text-sm font-medium text-frame-muted-fg">Diagnose before redesigning</p>
            </div>
            <div className="bg-frame-bg p-6">
              <span className="text-xs font-black uppercase tracking-widest text-frame-accent">SEO Protection</span>
              <p className="mt-2 font-heading text-2xl sm:text-3xl font-bold text-frame-fg uppercase">Zero Loss</p>
              <p className="mt-1 text-xs sm:text-sm font-medium text-frame-muted-fg">301 redirects &amp; equity safety</p>
            </div>
            <div className="bg-frame-bg p-6">
              <span className="text-xs font-black uppercase tracking-widest text-frame-accent">Performance</span>
              <p className="mt-2 font-heading text-2xl sm:text-3xl font-bold text-frame-fg uppercase">&lt; 1.0s Speed</p>
              <p className="mt-1 text-xs sm:text-sm font-medium text-frame-muted-fg">Core Web Vitals optimized</p>
            </div>
            <div className="bg-frame-bg p-6">
              <span className="text-xs font-black uppercase tracking-widest text-frame-accent">Cutover</span>
              <p className="mt-2 font-heading text-2xl sm:text-3xl font-bold text-frame-fg uppercase">100% Uptime</p>
              <p className="mt-1 text-xs sm:text-sm font-medium text-frame-muted-fg">Zero-downtime launch QA</p>
            </div>
          </div>
        </div>
      </section>

      {/* STRATEGIC ASSESSMENT: DOES YOUR WEBSITE ACTUALLY NEED A REDESIGN? */}
      <section className="bg-frame-bg px-4 py-16 md:px-8 md:py-24 border-b-2 border-frame-border">
        <div className="mx-auto max-w-[95vw]">
          <div className="max-w-4xl">
            <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Strategic Evaluation
            </p>
            <h2 className="font-heading text-[clamp(2.2rem,5.8vw,4.8rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Does Your Website Actually Need a Redesign?
            </h2>
            <div className="mt-6 space-y-4 text-base sm:text-lg md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              <p>
                A website doesn&apos;t need a redesign simply because it looks old. Sometimes the design is the problem. Sometimes the real issue is the structure, performance, content, platform, or conversion path underneath it.
              </p>
              <p>
                A redesign makes sense when your current website is creating problems that small visual updates cannot solve.
              </p>
            </div>
          </div>

          {/* READINESS CHECKLIST */}
          <div className="mt-12 border-2 border-frame-border bg-frame-muted/10 p-6 md:p-10">
            <h3 className="font-heading text-xl sm:text-2xl font-bold uppercase tracking-tight text-frame-fg mb-6">
              Your Website May Be Ready for a Redesign If:
            </h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {readinessFactors.map((factor, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-frame-bg p-4 border border-frame-border">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center border border-frame-accent font-black text-xs text-frame-accent">
                    ✓
                  </span>
                  <span className="text-sm sm:text-base font-medium text-frame-fg leading-snug">
                    {factor}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* NOT EVERY WEBSITE NEEDS A FULL REBUILD */}
          <div className="mt-12 border-2 border-frame-border bg-frame-bg p-6 md:p-10">
            <span className="text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">
              Practical Determination
            </span>
            <h3 className="mt-3 font-heading text-2xl sm:text-3xl font-bold uppercase tracking-tight text-frame-fg">
              Not Every Website Needs a Full Rebuild
            </h3>
            <div className="mt-4 space-y-4 text-sm sm:text-base md:text-lg font-medium leading-relaxed text-frame-muted-fg max-w-4xl">
              <p>
                If your existing platform and structure are sound, a focused visual or UX refresh may solve the problem.
              </p>
              <p>
                If the underlying platform, codebase, architecture, or content structure is causing the problem, a deeper rebuild or migration may be the better option.
              </p>
              <p className="font-bold text-frame-fg">
                We determine that from the audit instead of assuming every client needs the largest possible redesign.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ASSET AUDIT: WHAT IS WORTH KEEPING BEFORE WE REDESIGN? */}
      <section className="bg-frame-muted/20 px-4 py-16 md:px-8 md:py-24 border-b-2 border-frame-border">
        <div className="mx-auto max-w-[95vw]">
          <div className="max-w-4xl">
            <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Asset Preservation
            </p>
            <h2 className="font-heading text-[clamp(2.2rem,5.8vw,4.8rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              What Is Worth Keeping Before We Redesign?
            </h2>
            <div className="mt-6 space-y-4 text-base sm:text-lg md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              <p>
                A redesign should not mean throwing away everything your current website has built over the years.
              </p>
              <p>
                Before changing the structure, we identify the pages, content, URLs, rankings, backlinks, conversions, and integrations that already have value. The goal is to improve the website without unnecessarily destroying assets that are already working.
              </p>
            </div>
          </div>

          <div className="mt-12 grid bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-3 border-2 border-frame-border">
            {keepingAssets.map((asset, idx) => (
              <div key={idx} className="bg-frame-bg p-7 sm:p-8 md:p-10 flex flex-col justify-between hover:bg-frame-muted/10 transition-colors">
                <div>
                  <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                    Asset 0{idx + 1}
                  </span>
                  <h3 className="mt-4 font-heading text-xl sm:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                    {asset.title}
                  </h3>
                  <p className="mt-4 text-sm sm:text-base font-medium leading-relaxed text-frame-muted-fg">
                    {asset.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* KEEP WHAT WORKS. FIX WHAT DOESN'T */}
          <div className="mt-10 border-2 border-frame-border bg-frame-bg p-6 md:p-8">
            <h3 className="font-heading text-xl sm:text-2xl font-bold uppercase tracking-tight text-frame-fg">
              Keep What Works. Fix What Doesn&apos;t.
            </h3>
            <p className="mt-3 text-sm sm:text-base md:text-lg font-medium leading-relaxed text-frame-muted-fg">
              A redesign should improve the existing website, not automatically replace everything. We use the current website as evidence, identify what should stay, and focus the redesign effort where it can create meaningful improvement.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
