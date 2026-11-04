import Link from 'next/link'
import PosterButton from '../../../home/PosterButton'
import { Ambient3DCanvas } from '../../../ui/ambient-3d-canvas'
import { AnimatedProgress } from '../../../ui/animated-progress'

export default function Hero() {
  return (
    <div className="relative isolate bg-[#09090B] text-white">
      {/* Background Ambient Glow & Blueprint Grid */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-purple-600/[0.08] blur-[140px]" />
        <div className="fc-grid-pattern absolute inset-0 opacity-15" />
      </div>

      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-28 pb-16 md:pt-32 md:pb-24 border-b border-white/[0.08]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          {/* Editorial Breadcrumb Navigation (Single-line, non-breaking with smooth horizontal scroll on narrow mobile) */}
          <nav
            aria-label="Breadcrumb"
            className="mb-8 flex items-center gap-2 overflow-x-auto whitespace-nowrap scrollbar-none py-1 font-mono text-[11px] sm:text-xs text-zinc-400"
          >
            <Link href="/" className="shrink-0 hover:text-white transition-colors duration-200">
              Home
            </Link>
            <span className="shrink-0 text-zinc-600">/</span>
            <Link href="/services" className="shrink-0 hover:text-white transition-colors duration-200">
              Services
            </Link>
            <span className="shrink-0 text-zinc-600">/</span>
            <Link href="/services/website-design-development" className="shrink-0 hover:text-white transition-colors duration-200">
              <span className="sm:hidden">Web Design &amp; Dev</span>
              <span className="hidden sm:inline">Website Design &amp; Development</span>
            </Link>
            <span className="shrink-0 text-zinc-600">/</span>
            <span className="shrink-0 text-zinc-200">Ecommerce Website</span>
          </nav>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left Column: Heading & Content (7 cols on desktop) */}
            <div className="lg:col-span-6 xl:col-span-6 space-y-6">
              {/* Eyebrow Badge */}
              {/* Display Heading H1 */}
              <h1 className="font-heading text-4xl sm:text-6xl lg:text-6xl xl:text-7xl font-medium leading-[0.94] tracking-tight text-white break-normal hyphens-none">
                Best E-commerce Website Development Service in{' '}
                <span className="italic text-frame-accent">Bangladesh</span>
              </h1>

              {/* Lead Paragraph */}
              <p className="max-w-3xl text-base sm:text-lg md:text-xl leading-relaxed text-zinc-300">
                Build an online store designed to turn product browsing into completed purchases. Frame Cipher combines ecommerce strategy, conversion-focused UX, development, payment integration, and performance through one in-house team. Whether you&apos;re launching a new store or scaling an existing one, we build around your products, customers, checkout flow, and business goals.
              </p>

              {/* Symmetrical 52px Button Pair */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <PosterButton href="/contact" variant="accent">
                  Request a Free Consultation
                </PosterButton>
                <PosterButton href="#pricing" variant="outline">
                  View Store Packages
                </PosterButton>
              </div>

              {/* Meta Proof Note */}
              <div className="pt-2 flex flex-wrap items-center gap-3 font-mono text-xs text-zinc-500">
                <span className="h-1 w-1 rounded-full bg-frame-accent" />
                <span>Shopify / WooCommerce / Magento</span>
                <span className="text-zinc-700">|</span>
                <span>bKash &amp; Nagad Checkout</span>
                <span className="text-zinc-700">|</span>
                <span>Zero vendor lock-in</span>
              </div>
            </div>

            {/* Right Column: 3D Ambient Visual (Strict 5 cols: Always on the Side on Desktop) */}
            <div className="flex justify-center lg:col-span-6 xl:col-span-6 w-full mt-6 lg:mt-0">
              <div className="w-full max-w-full sm:max-w-[540px]">
                <Ambient3DCanvas mode="commerce-loop" className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HERO VISUAL MOCKUP: E-COMMERCE STORE & CHECKOUT LEDGER */}
      <section className="border-b border-white/[0.08] bg-[#09090B] py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          <div className="relative overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214] p-6 md:p-8">
            {/* Top Mockup Header Bar */}
            {/* Dashboard Mockup Grid - Modality 2 Divided Columns */}
            <div className="grid grid-cols-1 divide-y divide-white/[0.08] sm:grid-cols-2 sm:divide-y-0 sm:divide-x lg:grid-cols-4 border border-white/[0.08] rounded-lg bg-[#09090B] overflow-hidden">
              <div className="p-5 md:p-6 space-y-3">
                <span className="font-mono text-[10px] font-medium uppercase tracking-wider text-zinc-500">
                  01
                </span>
                <div className="font-mono text-3xl font-medium text-white sm:text-4xl">+310%</div>
                <p className="text-xs font-medium text-zinc-300">Cart-to-Payment Completion</p>
                <div className="pt-2 h-1 w-full overflow-hidden rounded-full bg-white/10">
                  <AnimatedProgress width="91.7%" delay={0} className="h-full rounded-full bg-frame-accent" />
                </div>
              </div>

              <div className="p-5 md:p-6 space-y-3">
                <span className="font-mono text-[10px] font-medium uppercase tracking-wider text-zinc-500">
                  02
                </span>
                <div className="font-mono text-3xl font-medium text-white sm:text-4xl">&lt; 1.1s</div>
                <p className="text-xs font-medium text-zinc-300">Catalog Query &amp; Filter Speed</p>
                <div className="pt-2 h-1 w-full overflow-hidden rounded-full bg-white/10">
                  <AnimatedProgress width="80%" delay={150} className="h-full rounded-full bg-emerald-500" />
                </div>
              </div>

              <div className="p-5 md:p-6 space-y-3">
                <span className="font-mono text-[10px] font-medium uppercase tracking-wider text-zinc-500">
                  03
                </span>
                <div className="font-mono text-3xl font-medium text-white sm:text-4xl">Instant</div>
                <p className="text-xs font-medium text-zinc-300">Courier &amp; Delivery Status Sync</p>
                <div className="pt-2 h-1 w-full overflow-hidden rounded-full bg-white/10">
                  <AnimatedProgress width="100%" delay={300} className="h-full rounded-full bg-frame-accent" />
                </div>
              </div>

              <div className="p-5 md:p-6 space-y-3">
                <span className="font-mono text-[10px] font-medium uppercase tracking-wider text-zinc-500">
                  04
                </span>
                <div className="font-mono text-3xl font-medium text-white sm:text-4xl">Rich Schema</div>
                <p className="text-xs font-medium text-zinc-300">Google Merchant Center Ready</p>
                <div className="pt-2 h-1 w-full overflow-hidden rounded-full bg-white/10">
                  <AnimatedProgress width="100%" delay={450} className="h-full rounded-full bg-white" />
                </div>
              </div>
            </div>

            {/* Bottom visual indicator */}
            <div className="mt-6 flex flex-col items-start justify-between gap-2 border-t border-white/[0.08] pt-4 font-mono text-xs text-zinc-400 md:flex-row md:items-center">
              <span>Platforms: Shopify / WooCommerce / Magento / Custom Next.js Commerce</span>
              <span className="text-frame-accent">Tested on 3G/4G/5G Networks, iOS, Android &amp; Desktop</span>
            </div>
          </div>
        </div>
      </section>

      {/* E-COMMERCE WEBSITE DEVELOPMENT BUILT AROUND HOW YOUR CUSTOMERS BUY */}
      <section className="relative border-b border-white/[0.08] bg-[#09090B] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          {/* Centered Section Header */}
          <div className="mb-14 max-w-3xl space-y-4">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
              E-commerce Website Development Built Around{' '}
              <span className="italic text-frame-accent">How Your Customers Buy.</span>
            </h2>
            <div className="space-y-4 text-base md:text-lg leading-relaxed text-zinc-300 pt-2">
              <p>
                An ecommerce website should do more than display products. It should make it easy for shoppers to discover products, compare options, trust your business, and complete a purchase.
              </p>
              <p>
                We start by understanding how your customers browse, what influences their buying decisions, and where they are most likely to leave without purchasing.
              </p>
              <p>
                From product discovery and category navigation to cart, checkout, payment, and post-purchase workflows, we structure the store around the complete buying journey.
              </p>
            </div>
          </div>

          {/* Modality 2: Architectural Divided Column Band (Who / What / How) */}
          <div className="overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214]">
            <div className="grid grid-cols-1 divide-y divide-white/[0.08] md:grid-cols-3 md:divide-y-0 md:divide-x">
              <div className="p-6 md:p-8 space-y-3">
                <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">
                  01 · Who We Build For
                </span>
                <p className="text-sm md:text-base leading-relaxed text-zinc-300">
                  Merchants launching a new store or scaling an existing one&mdash;from Bangladeshi brands to global ecommerce across the US, UK, Australia, Canada &amp; UAE.
                </p>
              </div>

              <div className="p-6 md:p-8 space-y-3">
                <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">
                  02 · What We Build
                </span>
                <p className="text-sm md:text-base leading-relaxed text-zinc-300">
                  Online stores on Shopify, WooCommerce, Magento, or custom Next.js with payment integration and a conversion-focused checkout flow.
                </p>
              </div>

              <div className="p-6 md:p-8 space-y-3">
                <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">
                  03 · How We Deliver
                </span>
                <p className="text-sm md:text-base leading-relaxed text-zinc-300">
                  Ecommerce strategy, conversion-focused UX, development, and performance through one in-house team built around how your customers buy.
                </p>
              </div>
            </div>
          </div>

          {/* Assessment Callout Banner */}
          <div className="mt-10 flex flex-col items-center justify-between gap-6 rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 md:flex-row">
            <p className="text-sm font-medium leading-relaxed text-zinc-200 sm:text-base max-w-2xl">
              Not sure which platform fits your store or how much your project costs? We&apos;ll tell you honestly what makes sense.
            </p>
            <PosterButton href="/contact" variant="accent" className="shrink-0">
              Get an Honest Assessment
            </PosterButton>
          </div>

          {/* APPROACH FLOW PIPELINE */}
          <div className="mt-12 rounded-xl border border-white/[0.08] bg-[#121214] p-6 md:p-8">
            <div className="mb-6 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-frame-accent" />
              <span className="font-mono text-xs uppercase tracking-wider text-zinc-400">
                Our Approach Connects
              </span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-medium uppercase tracking-wider text-white md:gap-3 md:text-sm">
              <span className="rounded-lg border border-white/[0.08] bg-[#09090B] px-4 py-2.5">
                Product Discovery
              </span>
              <span className="text-base text-frame-accent">&rarr;</span>
              <span className="rounded-lg border border-white/[0.08] bg-[#09090B] px-4 py-2.5">
                Product Page
              </span>
              <span className="text-base text-frame-accent">&rarr;</span>
              <span className="rounded-lg border border-white/[0.08] bg-[#09090B] px-4 py-2.5">
                Cart
              </span>
              <span className="text-base text-frame-accent">&rarr;</span>
              <span className="rounded-lg border border-white/[0.08] bg-[#09090B] px-4 py-2.5">
                Checkout
              </span>
              <span className="text-base text-frame-accent">&rarr;</span>
              <span className="rounded-lg border border-white/[0.08] bg-[#09090B] px-4 py-2.5">
                Payment
              </span>
              <span className="text-base text-frame-accent">&rarr;</span>
              <span className="rounded-lg border border-white/[0.08] bg-[#09090B] px-4 py-2.5">
                Order
              </span>
              <span className="text-base text-frame-accent">&rarr;</span>
              <span className="rounded-lg border border-white/[0.08] bg-[#09090B] px-4 py-2.5">
                Delivery
              </span>
              <span className="text-base text-frame-accent">&rarr;</span>
              <span className="rounded-lg border border-frame-accent/40 bg-frame-accent/10 px-4 py-2.5 text-frame-accent">
                Customer
              </span>
            </div>

            <p className="mx-auto mt-6 max-w-2xl text-center text-sm font-medium text-zinc-300 md:text-base">
              The result is an ecommerce store designed to reduce friction at each stage of the purchase journey while giving your business the tools needed to manage and grow online sales.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
