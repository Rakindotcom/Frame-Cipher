import Link from 'next/link'
import { SectionIntro, SectionLabel } from '../../../Kinetic'

const businessSolutions = [
  {
    number: '01',
    title: 'Business & Corporate Websites',
    description: 'Structured around lead generation and credibility, with editorial control for teams that update service pages and content regularly.',
  },
  {
    number: '02',
    title: 'Ecommerce Stores (WooCommerce)',
    description: "Product catalogs, payment integration, and inventory management built on WordPress's most widely used ecommerce plugin are a strong fit for merchants who want content and commerce managed in one place.",
  },
  {
    number: '03',
    title: 'Blogs & Content Publications',
    description: 'Fast, clean publishing workflows for teams producing regular content: category structure, author management, and SEO-friendly architecture built to scale with volume.',
  },
  {
    number: '04',
    title: 'Portfolios & Personal Brands',
    description: 'Visually driven builds for creatives, consultants, or personal brands where presentation matters as much as content structure.',
  },
  {
    number: '05',
    title: 'Membership & Community Sites',
    description: 'Gated content, user accounts, and subscription functionality for businesses building a paid or member-only audience.',
  },
  {
    number: '06',
    title: 'Directories & Listings',
    description: 'Structured, filterable content for businesses running job boards, classifieds, or resource directories.',
  },
]

export default function Solutions() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Platform Versatility / Specific Niches" title="WordPress Solutions for Different Business Needs">
          WordPress isn&apos;t one type of website; it&apos;s a platform flexible enough to power almost any kind of site, and each type needs its own approach.
        </SectionIntro>

        <div className="grid border-2 border-frame-border bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-3">
          {businessSolutions.map((solution, index) => (
            <div key={index} className="bg-frame-bg p-7 md:p-8 flex flex-col justify-between min-h-[220px]">
              <div>
                <SectionLabel className="mb-2">Solution {solution.number}</SectionLabel>
                <h3 className="font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg">
                  {solution.title}
                </h3>
                <p className="mt-3 text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {solution.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 border-2 border-frame-border bg-frame-muted/20 p-6 md:p-8">
          <p className="text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg max-w-3xl">
            We recommend theme structure, plugin stack, and functionality based on which of these your site actually is, not a one-size-fits-all business template applied regardless of purpose.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center border-2 border-frame-border bg-frame-bg px-6 py-3 text-xs font-black uppercase tracking-wider text-frame-fg transition hover:border-frame-accent hover:bg-frame-accent hover:text-frame-accent-fg shrink-0"
          >
            Learn More &rarr;
          </Link>
        </div>
      </div>
    </section>
  )
}