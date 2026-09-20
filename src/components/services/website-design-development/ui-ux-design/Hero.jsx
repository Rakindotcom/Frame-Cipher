import Link from 'next/link'
import { PageHero, PosterButton } from '../../../Kinetic'

const businessNeeds = [
  {
    title: 'Easier User Journeys',
    description: 'Clear navigation and structured user flows help people understand what to do next without unnecessary decisions.',
  },
  {
    title: 'Fewer Friction Points',
    description: 'Confusing forms, unclear actions, difficult navigation, and complicated checkout flows can cause users to leave without reporting the problem.',
  },
  {
    title: 'Better Mobile Usability',
    description: 'A desktop layout cannot simply be reduced in size and expected to work equally well on mobile. Content hierarchy, navigation, spacing, and interaction often need to change.',
  },
  {
    title: 'Lower Redesign Risk',
    description: 'Validating structure before development makes major usability issues easier to identify and resolve before they become expensive changes.',
  },
  {
    title: 'Stronger Product Scalability',
    description: 'Reusable components, consistent patterns, and a clear design system make future features easier to design and maintain.',
  },
  {
    title: 'Better Design-to-Development Alignment',
    description: 'A well-structured design gives developers clearer guidance about layouts, interactions, responsive behavior, and interface states.',
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
          <span className="text-frame-accent">UI/UX Design</span>
        </div>
      </nav>

      {/* HERO */}
      <PageHero
        eyebrow="Focused Service / UI/UX Design"
        meta="Figma Wireframes / User-Centered UX"
        number="13"
        title="Best UI/UX Design Service in Bangladesh"
        actions={
          <>
            <PosterButton href="/contact">Get Free Consultation &rarr;</PosterButton>
            <PosterButton href="#pricing" variant="outline">
              View Pricing &amp; Plans &rarr;
            </PosterButton>
          </>
        }
      >
        Framecipher designs user experiences and interfaces for business websites, ecommerce stores, mobile apps, SaaS products, web applications, and digital products. We start with user flows, structure, and usability before visual design, so problems can be identified before development begins.
      </PageHero>

      {/* KINETIC METRIC CARDS */}
      <div className="border-b-2 border-frame-border bg-frame-bg px-4 py-8 md:px-8">
        <div className="mx-auto max-w-5xl border-2 border-frame-border bg-frame-muted/20 p-5 md:p-8 font-mono text-xs">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-frame-border pb-4">
            <div className="flex items-center gap-2">
              <span className="inline-block h-3 w-3 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="font-bold uppercase tracking-wider text-frame-fg">UX_SYSTEMS // ATOMIC DESIGN & PROTOTYPING</span>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-frame-muted-fg font-semibold uppercase">
              <span>STATUS: PRODUCTION-GRADE</span>
              <span>TOOLING: FIGMA DESIGN SYSTEM</span>
              <span className="text-frame-accent font-black">HANDOFF: DEV-READY SPECS</span>
            </div>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            <div className="border border-frame-border bg-frame-bg p-4">
              <p className="text-[10px] uppercase tracking-widest text-frame-muted-fg">Strategy</p>
              <p className="mt-1 font-heading text-lg font-bold text-frame-fg">Flow First</p>
              <p className="mt-1 text-[11px] text-emerald-500 font-bold">User Journey Mapping</p>
            </div>
            <div className="border border-frame-border bg-frame-bg p-4">
              <p className="text-[10px] uppercase tracking-widest text-frame-muted-fg">Architecture</p>
              <p className="mt-1 font-heading text-lg font-bold text-frame-fg">Validated IA</p>
              <p className="mt-1 text-[11px] text-frame-accent font-bold">Interactive Prototypes</p>
            </div>
            <div className="border border-frame-border bg-frame-bg p-4">
              <p className="text-[10px] uppercase tracking-widest text-frame-muted-fg">Design Systems</p>
              <p className="mt-1 font-heading text-lg font-bold text-frame-fg">Atomic UI</p>
              <p className="mt-1 text-[11px] text-emerald-500 font-bold">Tokens & Component Lib</p>
            </div>
            <div className="border border-frame-border bg-frame-bg p-4">
              <p className="text-[10px] uppercase tracking-widest text-frame-muted-fg">Handoff</p>
              <p className="mt-1 font-heading text-lg font-bold text-frame-fg">Dev Ready</p>
              <p className="mt-1 text-[11px] text-frame-accent font-bold">Organized Figma Tokens</p>
            </div>
          </div>
        </div>
      </div>

      {/* STRATEGIC ASSESSMENT: WHY YOUR BUSINESS NEEDS REAL UI/UX DESIGN */}
      <section className="bg-frame-bg px-4 py-16 md:px-8 md:py-24 border-b-2 border-frame-border">
        <div className="mx-auto max-w-[95vw]">
          <div className="max-w-4xl">
            <span className="text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Commercial Impact
            </span>
            <h2 className="mt-3 font-heading text-[clamp(2.2rem,5.8vw,4.8rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Why Your Business Needs Real UI/UX Design
            </h2>

            <div className="mt-8 flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm font-black uppercase tracking-wider text-frame-fg">
              <span className="border border-frame-border/80 bg-frame-bg px-3.5 py-2">User Flows</span>
              <span className="text-frame-accent font-bold">&rarr;</span>
              <span className="border border-frame-border/80 bg-frame-bg px-3.5 py-2">Structure &amp; Usability</span>
              <span className="text-frame-accent font-bold">&rarr;</span>
              <span className="border border-frame-border/80 bg-frame-bg px-3.5 py-2">Visual Design</span>
              <span className="text-frame-accent font-bold">&rarr;</span>
              <span className="border border-frame-border/80 bg-frame-bg px-3.5 py-2">Design System</span>
              <span className="text-frame-accent font-bold">&rarr;</span>
              <span className="border border-frame-accent bg-frame-accent/10 px-3.5 py-2 text-frame-accent">Dev-Ready Handoff</span>
            </div>

            <div className="mt-8 grid gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-3 text-left">
              <div className="bg-frame-bg p-5">
                <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">Who We Design For</span>
                <p className="mt-2 text-xs sm:text-sm font-medium leading-relaxed text-frame-muted-fg">
                  Business websites, ecommerce stores, mobile apps, SaaS products, and web applications that depend on clear user journeys.
                </p>
              </div>
              <div className="bg-frame-bg p-5">
                <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">What We Design</span>
                <p className="mt-2 text-xs sm:text-sm font-medium leading-relaxed text-frame-muted-fg">
                  User flows, information architecture, wireframes, interactive prototypes, UI design, and reusable design systems in Figma.
                </p>
              </div>
              <div className="bg-frame-bg p-5">
                <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">How We Work</span>
                <p className="mt-2 text-xs sm:text-sm font-medium leading-relaxed text-frame-muted-fg">
                  We start with flows, structure, and usability before visual design&mdash;so problems surface before development, not after launch.
                </p>
              </div>
            </div>

            <div className="mt-8 flex max-w-3xl flex-col items-center gap-4 border-2 border-frame-accent/60 bg-frame-bg p-6 sm:flex-row sm:justify-between">
              <p className="text-sm sm:text-base font-medium leading-relaxed text-frame-fg">
                Not sure whether your project needs full UI/UX design or a lighter approach? We&apos;ll tell you honestly what will help.
              </p>
              <PosterButton href="/contact" className="shrink-0">
                Get an Honest Assessment
              </PosterButton>
            </div>
          </div>

          <div className="mt-12 grid bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-3 border-2 border-frame-border">
            {businessNeeds.map((item, idx) => (
              <div key={idx} className="bg-frame-bg p-7 sm:p-8 md:p-10 flex flex-col justify-between hover:bg-frame-muted/10 transition-colors">
                <div>
                  <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                    Benefit 0{idx + 1}
                  </span>
                  <h3 className="mt-4 font-heading text-xl sm:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm sm:text-base font-medium leading-relaxed text-frame-muted-fg">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
