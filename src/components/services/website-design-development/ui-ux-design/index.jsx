import Hero from './Hero'
import Offerings from './Offerings'
import Process from './Process'
import Pricing from './Pricing'
import FAQ from './FAQ'
import CTA from './CTA'
import { TypeMarquee } from '../../../Kinetic'
import WebsitePortfolioPreview from '../../../projects/WebsitePortfolioPreview'

const uiUxKeywords = [
  'UI/UX Design',
  'User Research',
  'Information Architecture',
  'Interactive Wireframes',
  'Figma Design Systems',
  'Usability Testing',
  'Responsive UI',
  'Developer Handoff',
]

const caseStudyPillars = [
  {
    title: 'The Challenge',
    desc: 'What the business or product needed to improve, clarify, or build from scratch.',
  },
  {
    title: 'UX Approach',
    desc: 'How we approached research, user flows, information architecture, wireframing, and usability decisions.',
  },
  {
    title: 'Interface Design',
    desc: 'How the approved structure became the final visual system, responsive interface, and interaction patterns.',
  },
  {
    title: 'Prototype & Handoff',
    desc: 'How the experience was tested, refined, documented, and prepared for development.',
  },
  {
    title: 'Outcome',
    desc: 'Where verified project data is available, we can show measurable outcomes such as resolved usability issues, improved task completion, reduced friction, or other documented improvements.',
  },
]

export default function WebsiteDesignDevelopmentUiUxDesignService() {
  return (
    <main className="service-page bg-frame-bg text-frame-fg min-h-screen">
      <Hero />
      <TypeMarquee items={uiUxKeywords} slow />

      {/* PORTFOLIO PREVIEW */}
      <WebsitePortfolioPreview
        eyebrow="Portfolio & Case Studies"
        title="UI/UX Design Portfolio & Case Studies"
        description="A strong UI/UX portfolio should show more than attractive screens. It should show the problem, the design decisions, and how the final experience was structured."
        buttonText="Explore UI/UX Projects →"
        buttonHref="/projects#website-work"
      />

      {/* SHOWCASE STRUCTURE: CASE STUDY EVALUATION STANDARDS */}
      <section className="border-b-2 border-frame-border bg-frame-muted/10 px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-[95vw]">
          <div className="mb-10 max-w-4xl">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              Verification Standards
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
              What Each UI/UX Case Study Demonstrates
            </h2>
            <p className="mt-4 text-sm sm:text-base md:text-lg font-medium text-frame-muted-fg leading-relaxed">
              We document our design projects with rigorous UX rationale and verified outcomes, showing how user-centered thinking solves real product challenges.
            </p>
          </div>

          <div className="grid gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {caseStudyPillars.map((item, idx) => (
              <div key={idx} className="flex flex-col justify-between bg-frame-bg p-6">
                <div>
                  <span className="text-[11px] font-black uppercase tracking-wider text-frame-accent">
                    Stage 0{idx + 1}
                  </span>
                  <h3 className="mt-2 font-heading text-lg font-bold uppercase text-frame-fg">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-xs md:text-sm text-frame-muted-fg leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 border-2 border-frame-border bg-frame-bg p-7 md:p-10">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              Methodology &amp; Standards
            </span>
            <h3 className="mt-2 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
              Core Design Capabilities Demonstrated
            </h3>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-4">
              {[
                'User Journey & Persona Mapping',
                'Information Architecture Validation',
                'Interactive Clickable Prototypes',
                'WCAG AA Accessibility Standards',
                'Atomic Design System Tokens',
                'Multi-State Component Variants',
                'Responsive Breakpoint Adaptation',
                'Organized Developer Specifications',
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 border border-frame-border/80 bg-frame-muted/20 p-3.5">
                  <span className="text-frame-accent font-bold">✓</span>
                  <span className="text-xs md:text-sm font-medium text-frame-fg">{item}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-xs md:text-sm italic text-frame-muted-fg">
              Only publish project metrics, performance claims, or business results that are supported by actual project evidence.
            </p>
          </div>
        </div>
      </section>

      <Offerings />
      <Process />
      <Pricing />
      <FAQ />
      <CTA />
    </main>
  )
}

export { Hero, Offerings, Process, Pricing, FAQ, CTA }
