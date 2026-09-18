import Hero from './Hero'
import Offerings from './Offerings'
import Process from './Process'
import Pricing from './Pricing'
import FAQ from './FAQ'
import CTA from './CTA'
import { TypeMarquee } from '../../../Kinetic'
import WebsitePortfolioPreview from '../../../projects/WebsitePortfolioPreview'

const magentoKeywords = [
  'Magento 2 & Adobe Commerce',
  'Hyvä Theme Performance',
  'B2B Wholesale Portals',
  '100k+ SKU Architecture',
  'ERP & PIM Integrations',
  'Multi-Store & Regional Views',
  'Elasticsearch Catalogs',
  'Upgrade-Safe Modules',
]

const portfolioShowcase = [
  {
    title: 'Complex Catalog Stores',
    desc: 'Stores with large product structures, advanced attributes, filtering, search, and structured catalog management.',
  },
  {
    title: 'B2B Ecommerce',
    desc: 'Projects involving company accounts, customer-specific pricing, wholesale workflows, quote processes, or other B2B requirements.',
  },
  {
    title: 'Multi-Store Magento Builds',
    desc: 'Stores serving multiple brands, regions, markets, or customer groups through a coordinated Magento architecture.',
  },
  {
    title: 'Magento Integrations',
    desc: 'Projects connecting Magento with ERP, CRM, PIM, inventory, payment, shipping, analytics, or other business systems.',
  },
  {
    title: 'Magento Migration & Redesign',
    desc: 'Existing ecommerce stores upgraded, migrated, redesigned, or restructured while protecting important content, functionality, and SEO requirements.',
  },
]

const caseStudyIncludes = [
  'Business or industry',
  'Magento edition and version where relevant',
  'Project scope',
  'Catalog complexity',
  'Key functionality',
  'Integrations',
  'Storefront approach',
  'What Framecipher delivered',
  'Verified performance or business outcomes where available',
]

export default function WebsiteDesignDevelopmentMagentoService() {
  return (
    <main className="service-page bg-frame-bg text-frame-fg min-h-screen">
      <Hero />
      <TypeMarquee items={magentoKeywords} slow />

      {/* PORTFOLIO PREVIEW */}
      <WebsitePortfolioPreview
        eyebrow="Case Studies & Real Work"
        title="Our Magento Development Portfolio"
        description="Real implementations provide a better picture of Magento expertise than a technology list alone. Our portfolio should show the ecommerce problem, architecture, functionality, and work completed for each project."
        buttonText="View More Projects →"
        buttonHref="/projects#website-work"
      />

      {/* SHOWCASE CATEGORIES & CASE STUDY STANDARDS */}
      <section className="border-b-2 border-frame-border bg-frame-muted/10 px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-[95vw]">
          <div className="mb-10 max-w-4xl">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              Portfolio Scope
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
              What We Showcase in Our Magento Portfolio
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
              Verification Standards
            </span>
            <h3 className="mt-2 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
              What Each Case Study Includes
            </h3>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
              {caseStudyIncludes.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 border border-frame-border/80 bg-frame-muted/20 p-3.5">
                  <span className="text-frame-accent font-bold">✓</span>
                  <span className="text-xs md:text-sm font-medium text-frame-fg">{item}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-xs md:text-sm italic text-frame-muted-fg">
              We only publish measurable outcomes that can be supported by project data.
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
