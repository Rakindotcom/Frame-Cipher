import { PosterButton } from '../../../Kinetic'

const coreCapabilities = [
  {
    tag: 'Capability 01',
    title: 'User Research & Flow Mapping',
    description: 'Every interface starts with understanding who is using the product and what they need to accomplish before drafting layouts.',
    bullets: [
      'User Journey Mapping: Charting real paths from landing to completed goal.',
      'Persona & Audience Definition: Designing for multi-role workflows.',
      'Task Flow Analysis: Optimizing checkout, signups, and booking steps.',
      'Competitor Pattern Review: Benchmarking usability standards across your industry.',
    ],
  },
  {
    tag: 'Capability 02',
    title: 'Wireframing & Information Architecture',
    description: 'Structuring layout and content hierarchy before visual decisions are made. A structural fix at wireframe stage saves rebuilding code.',
    bullets: [
      'Low-Fidelity Wireframes: Rapid layout iteration focused on content hierarchy.',
      'Information Architecture: Organizing intuitive navigation and sitemaps.',
      'Interactive Prototypes: Clickable Figma prototypes to test usability early.',
      'Content Prioritization: Structuring screens so key conversion actions lead.',
    ],
  },
  {
    tag: 'Capability 03',
    title: 'UI Design & Visual Systems',
    description: 'Visual design that elevates your brand prestige while staying functional, responsive, and accessible across every viewport.',
    bullets: [
      'High-Fidelity UI Design: Contemporary typography, bespoke layouts, and brand styling.',
      'Design System Development: Reusable component libraries, tokens, and states.',
      'Responsive Breakpoint Adaptation: Custom mobile, tablet, and desktop viewports.',
      'Accessibility Standards: WCAG AA contrast, touch target sizing, and readability.',
    ],
  },
  {
    tag: 'Capability 04',
    title: 'Usability Testing & Validation',
    description: 'Confirming designs work with real users before development begins, eliminating costly post-launch redesign iterations.',
    bullets: [
      'Prototype Usability Testing: Observing users complete key conversion tasks.',
      'Heuristic Evaluation: Reviewing against Nielsen Norman Group principles.',
      'Post-Launch UX Review: Analyzing heatmaps, session recordings, and drop-offs.',
      'Iterative Refinement: Polishing user flows based on verified behavior data.',
    ],
  },
  {
    tag: 'Capability 05',
    title: 'Design Systems & Ongoing Support',
    description: 'Keeping interfaces consistent, modern, and easy to scale as new products, features, and marketing campaigns rollout.',
    bullets: [
      'Design Updates for New Features: Extending existing UI component tokens.',
      'Friction Resolution: Addressing usability bottlenecks found in analytics.',
      'Design System Maintenance: Preventing design drift across distributed teams.',
      'Periodic UX Audits: Keeping interaction patterns fresh and high-converting.',
    ],
  },
]

const strategicReasons = [
  {
    number: '01',
    title: 'Confusing Design Costs Conversions Silently',
    desc: 'Users who struggle with navigation or forms rarely complain—they quietly exit to your competitor. Poor UX surfaces as an invisible conversion leak.',
  },
  {
    number: '02',
    title: 'Fixing Structure Late Is 10x More Expensive',
    desc: 'A wireframe revision takes hours. The same structural flaw discovered after development requires rebuilding functional frontend code and backend APIs.',
  },
  {
    number: '03',
    title: 'Different Products Need Different UX Thinking',
    desc: 'A high-velocity ecommerce checkout, a SaaS dashboard, and a multi-step booking engine require fundamentally different interaction patterns.',
  },
  {
    number: '04',
    title: 'Good Interface Systems Compound Over Time',
    desc: 'A well-architected design system builds brand trust, makes onboarding effortless, and allows your developers to build new screens twice as fast.',
  },
]

const differentiators = [
  {
    title: 'One In-House Team',
    desc: 'UX researchers, visual designers, and front-end developers work side-by-side. No handoff disconnects or designs that cannot be coded.',
  },
  {
    title: 'Structure Before Visuals, Always',
    desc: 'We never begin with mood boards. We validate user flows and information architecture first so visual styling solves real functional objectives.',
  },
  {
    title: 'Production-Ready Developer Handoff',
    desc: 'Every Figma file is built with Auto Layout, responsive constraints, tokenized styles, interactive component variants, and dev-ready specs.',
  },
  {
    title: 'Local & Global Design Experience',
    desc: 'Designing digital products for brands in Bangladesh as well as high-growth companies across the US, UK, Australia, Canada, and UAE.',
  },
  {
    title: 'Interactive Clickable Prototypes',
    desc: 'You test live, interactive prototypes before signing off. Experience the exact user flow on your own mobile phone or laptop prior to build.',
  },
  {
    title: 'Obsessed With Business Outcomes',
    desc: 'We design for conversion rates, user retention, and customer lifetime value—not just awards or Dribbble aesthetics that fail in production.',
  },
]

export default function Offerings() {
  return (
    <div className="bg-frame-bg text-frame-fg">
      {/* CORE CAPABILITIES */}
      <section className="px-4 py-20 md:px-8 md:py-32">
        <div className="mx-auto max-w-[95vw]">
          <div className="mb-14 md:mb-20 max-w-4xl">
            <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Scope of Work
            </p>
            <h2 className="font-heading text-[clamp(2.2rem,5.8vw,4.8rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Our UI/UX Design Capabilities
            </h2>
            <p className="mt-6 max-w-3xl text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              End-to-end interface and user experience design built around human psychology, conversion optimization, and scalable brand design systems.
            </p>
          </div>

          <div className="grid bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-3 border-2 border-frame-border">
            {coreCapabilities.map((cap, index) => (
              <div key={index} className="bg-frame-bg p-7 sm:p-8 md:p-10 flex flex-col justify-between hover:bg-frame-muted/10 transition-colors">
                <div>
                  <span className="text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">
                    {cap.tag}
                  </span>
                  <h3 className="mt-4 font-heading text-xl sm:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                    {cap.title}
                  </h3>
                  <p className="mt-4 text-sm sm:text-base font-medium leading-relaxed text-frame-muted-fg">
                    {cap.description}
                  </p>
                </div>
                <ul className="mt-8 space-y-3 border-t-2 border-frame-border pt-6 text-xs sm:text-sm font-medium text-frame-fg">
                  {cap.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-3">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center border border-frame-accent font-black text-xs text-frame-accent">✓</span>
                      <span className="leading-snug">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STRATEGIC VALUE */}
      <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-32">
        <div className="mx-auto max-w-[95vw]">
          <div className="mb-14 md:mb-20 max-w-4xl">
            <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Commercial Impact
            </p>
            <h2 className="font-heading text-[clamp(2.2rem,5.8vw,4.8rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Why Strategic UI/UX Matters For Business Growth
            </h2>
            <p className="mt-6 max-w-3xl text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              Interface design isn&apos;t decoration—it is the direct bridge between your product offering and customer conversion.
            </p>
          </div>

          <div className="grid bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-4 border-2 border-frame-border">
            {strategicReasons.map((item, index) => (
              <div key={index} className="bg-frame-bg p-7 sm:p-8 md:p-10 hover:bg-frame-muted/10 transition-colors flex flex-col justify-between">
                <div>
                  <span className="font-heading text-4xl sm:text-5xl font-bold text-frame-muted leading-none">
                    {item.number}
                  </span>
                  <h3 className="mt-4 font-heading text-lg sm:text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                    {item.title}
                  </h3>
                </div>
                <p className="mt-4 text-sm sm:text-base font-medium leading-relaxed text-frame-muted-fg">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE FRAMECIPHER */}
      <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-32">
        <div className="mx-auto max-w-[95vw]">
          <div className="mb-14 md:mb-20 max-w-4xl">
            <p className="mb-3 text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              The Framecipher Standard
            </p>
            <h2 className="font-heading text-[clamp(2.2rem,5.8vw,4.8rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Why Choose Us For UI/UX Design
            </h2>
            <p className="mt-6 max-w-3xl text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              We combine deep user empathy, rigorous information architecture, and pixel-precise visual craft to deliver interfaces that perform.
            </p>
          </div>

          <div className="grid bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-3 border-2 border-frame-border">
            {differentiators.map((diff, idx) => (
              <div key={idx} className="bg-frame-bg p-7 sm:p-8 md:p-10 hover:bg-frame-muted/10 transition-colors">
                <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                  Differentiator 0{idx + 1}
                </span>
                <h3 className="mt-4 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                  {diff.title}
                </h3>
                <p className="mt-4 text-sm sm:text-base font-medium leading-relaxed text-frame-muted-fg">
                  {diff.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
