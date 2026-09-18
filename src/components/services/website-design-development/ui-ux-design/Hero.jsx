import Link from 'next/link'
import { PosterButton } from '../../../Kinetic'

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

      {/* HERO SECTION */}
      <section className="px-4 py-16 sm:py-20 md:px-8 md:py-28 lg:py-32 border-b-2 border-frame-border">
        <div className="mx-auto max-w-[95vw]">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <span className="text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Focused Service / UI/UX Design
            </span>
            <span className="font-heading text-3xl md:text-4xl font-bold tracking-tighter text-frame-muted">
              13
            </span>
          </div>

          <h1 className="font-heading text-[clamp(2.4rem,6.5vw,5.8rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg max-w-5xl">
            Best UI/UX Design Service in Bangladesh
          </h1>

          <p className="mt-4 text-xl sm:text-2xl md:text-3xl font-heading font-bold uppercase tracking-tight text-frame-accent">
            Design Around Real Users, Not Assumptions
          </p>

          <div className="mt-6 max-w-3xl space-y-4 text-base sm:text-lg md:text-xl font-medium leading-relaxed text-frame-muted-fg">
            <p>
              Framecipher designs user experiences and interfaces for business websites, ecommerce stores, mobile apps, SaaS products, web applications, and digital products.
            </p>
            <p>
              We start with user flows, structure, and usability before visual design, so problems can be identified before development begins.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <PosterButton href="/contact">Get Free Consultation &rarr;</PosterButton>
            <PosterButton href="#pricing" variant="outline">
              View Pricing &amp; Plans &rarr;
            </PosterButton>
          </div>

          {/* KINETIC METRIC CARDS */}
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-px bg-frame-border border-2 border-frame-border">
            <div className="bg-frame-bg p-6">
              <span className="text-xs font-black uppercase tracking-widest text-frame-accent">Strategy</span>
              <p className="mt-2 font-heading text-2xl sm:text-3xl font-bold text-frame-fg uppercase">Flow First</p>
              <p className="mt-1 text-xs sm:text-sm font-medium text-frame-muted-fg">User journey mapping</p>
            </div>
            <div className="bg-frame-bg p-6">
              <span className="text-xs font-black uppercase tracking-widest text-frame-accent">Architecture</span>
              <p className="mt-2 font-heading text-2xl sm:text-3xl font-bold text-frame-fg uppercase">Validated IA</p>
              <p className="mt-1 text-xs sm:text-sm font-medium text-frame-muted-fg">Interactive prototypes</p>
            </div>
            <div className="bg-frame-bg p-6">
              <span className="text-xs font-black uppercase tracking-widest text-frame-accent">Design Systems</span>
              <p className="mt-2 font-heading text-2xl sm:text-3xl font-bold text-frame-fg uppercase">Atomic UI</p>
              <p className="mt-1 text-xs sm:text-sm font-medium text-frame-muted-fg">Tokens, components &amp; states</p>
            </div>
            <div className="bg-frame-bg p-6">
              <span className="text-xs font-black uppercase tracking-widest text-frame-accent">Handoff</span>
              <p className="mt-2 font-heading text-2xl sm:text-3xl font-bold text-frame-fg uppercase">Dev Ready</p>
              <p className="mt-1 text-xs sm:text-sm font-medium text-frame-muted-fg">Organized Figma specs</p>
            </div>
          </div>
        </div>
      </section>

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
            <p className="mt-6 text-base sm:text-lg md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              UI/UX design is more than making a website or application look modern. It affects how easily users understand the product, complete tasks, and move through important journeys.
            </p>
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
