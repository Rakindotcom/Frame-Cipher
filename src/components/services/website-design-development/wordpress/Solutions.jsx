import Link from 'next/link'

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
    <section className="relative border-t border-white/[0.08] bg-[#09090B] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Left-Aligned Header Block */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            WordPress Solutions for{' '}
            <span className="italic text-frame-accent">Different Business Needs.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            WordPress isn&apos;t one type of website; it&apos;s a platform flexible enough to power almost any kind of site, and each type needs its own approach.
          </p>
        </div>

        {/* 3-Column Grid of Solutions */}
        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-3">
          {businessSolutions.map((solution, index) => (
            <div
              key={index}
              className="group relative flex flex-col justify-between bg-[#0f1011] p-7 sm:p-8 transition-colors duration-200 hover:bg-[#141516]"
            >
              <div>
                <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
                  {solution.number}
                </span>
                <h3 className="mt-3 font-heading text-lg md:text-xl font-medium tracking-tight text-white">
                  {solution.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-300">
                  {solution.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout Banner */}
        <div className="mt-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 rounded-xl border border-white/[0.08] bg-[#121214] p-6 md:p-8">
          <p className="text-sm sm:text-base leading-relaxed text-zinc-300 max-w-3xl">
            We recommend theme structure, plugin stack, and functionality based on which of these your site actually is, not a one-size-fits-all business template applied regardless of purpose.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center font-mono text-xs uppercase tracking-wider text-frame-accent hover:text-white transition-colors shrink-0"
          >
            Learn More &rarr;
          </Link>
        </div>
      </div>
    </section>
  )
}
