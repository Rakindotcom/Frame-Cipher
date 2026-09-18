import Hero from './Hero'
import Offerings from './Offerings'
import Process from './Process'
import Pricing from './Pricing'
import FAQ from './FAQ'
import CTA from './CTA'
import { TypeMarquee } from '../../../Kinetic'
import WebsitePortfolioPreview from '../../../projects/WebsitePortfolioPreview'

const wixKeywords = [
  'Wix Development',
  'Wix Studio Builds',
  'Velo Custom Code',
  'Wix CMS Architecture',
  'Speed Optimization',
  'Wix Ecommerce',
  'Easy Self-Editing',
  'Managed Hosting',
]

const portfolioShowcase = [
  {
    title: 'Business Websites',
    desc: 'Brand-focused websites designed around services, credibility, lead generation, and easy content management.',
  },
  {
    title: 'Wix Studio Builds',
    desc: 'More customized Wix websites with advanced responsive layouts, structured content, and deeper design control.',
  },
  {
    title: 'CMS & Dynamic Websites',
    desc: 'Content-driven projects that use structured collections and dynamic page templates.',
  },
  {
    title: 'Wix Ecommerce Stores',
    desc: 'Product-focused websites with catalog setup, checkout, payments, and store management.',
  },
  {
    title: 'Redesign Projects',
    desc: 'Existing Wix websites improved through new design, structure, mobile optimization, SEO setup, and better conversion paths.',
  },
]

const caseStudyIncludes = [
  'Business or industry',
  'Website type',
  'Wix Editor or Wix Studio',
  'Project scope',
  'Main functionality',
  'Integrations used',
  'Screenshots',
  'Verified outcomes where available',
]

export default function WebsiteDesignDevelopmentWixService() {
  return (
    <main className="service-page bg-frame-bg text-frame-fg min-h-screen">
      <Hero />
      <TypeMarquee items={wixKeywords} slow />
      
      {/* PORTFOLIO PREVIEW */}
      <WebsitePortfolioPreview
        eyebrow="Case Studies & Real Work"
        title="Our Wix Development Portfolio"
        description="See how we apply Wix development to real business requirements. Each project should show more than a homepage screenshot. We highlight the business type, project scope, Wix technology used, key functionality, and the work completed by our team."
        buttonText="View More Projects →"
        buttonHref="/projects#website-work"
      />

      {/* PORTFOLIO STANDARDS & SHOWCASE BREAKDOWN */}
      <section className="border-b-2 border-frame-border bg-frame-muted/10 px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-[95vw]">
          <div className="mb-10 max-w-4xl">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              Showcase Scope
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
              What We Showcase in Our Wix Portfolio
            </h2>
          </div>

          <div className="grid gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {portfolioShowcase.map((item, idx) => (
              <div key={idx} className="flex flex-col justify-between bg-frame-bg p-6">
                <div>
                  <span className="text-[11px] font-black uppercase tracking-wider text-frame-accent">
                    Category 0{idx + 1}
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
              Case Study Transparency
            </span>
            <h3 className="mt-2 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
              What Each Case Study Includes
            </h3>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-4">
              {caseStudyIncludes.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 border border-frame-border/80 bg-frame-muted/20 p-3.5">
                  <span className="text-frame-accent font-bold">✓</span>
                  <span className="text-xs md:text-sm font-medium text-frame-fg">{item}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-xs md:text-sm italic text-frame-muted-fg">
              We only publish measurable results that can be supported by project data.
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
