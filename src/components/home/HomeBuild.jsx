import Link from 'next/link'

const buildItems = [
  {
    title: 'Brand & marketing systems',
    description: 'Positioning, messaging, identity, and campaign direction built as one system.',
    href: '/services/brand-strategy',
    tag: 'Strategy',
  },
  {
    title: 'High-converting websites',
    description: 'Fast, modern websites and landing pages designed around clear next actions.',
    href: '/services/web-development',
    tag: 'Web',
  },
  {
    title: 'E-commerce platforms',
    description: 'Storefronts, product pages, checkout flows, and tracking built for sales.',
    href: '/services/ecommerce',
    tag: 'E-commerce',
  },
  {
    title: 'Custom software',
    description: 'Web applications, dashboards, and tools built around how your business operates.',
    href: '/services/software-solutions',
    tag: 'Software',
  },
  {
    title: 'CRM & business systems',
    description: 'Lead capture, pipelines, automations, and reporting that keep teams organized.',
    href: '/services/automation-crm',
    tag: 'Automation',
  },
  {
    title: 'Content & media systems',
    description: 'Social content, video, photography, and creative production on a repeatable rhythm.',
    href: '/services/social-media-marketing',
    tag: 'Content',
  },
  {
    title: 'SEO & search visibility',
    description: 'Technical foundations, keyword mapping, local SEO, and content built to be found.',
    href: '/services/seo',
    tag: 'SEO',
  },
  {
    title: 'Paid acquisition systems',
    description: 'Campaign strategy, creative, targeting, tracking, and continuous optimization.',
    href: '/services/paid-ads',
    tag: 'Ads',
  },
]

export default function HomeBuild() {
  return (
    <section className="px-4 py-20 md:px-8 md:py-32">
      <div className="mx-auto max-w-[95vw]">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-frame-accent md:text-sm">
              What we build / Capabilities
            </p>
            <h2 className="font-heading text-[clamp(2.4rem,7vw,6.5rem)] font-bold uppercase leading-[0.85] tracking-tighter text-frame-fg">
              What we build for growing businesses.
            </h2>
          </div>
          <p className="max-w-md text-base font-medium leading-relaxed text-frame-muted-fg md:text-lg">
            We combine strategy, creative, marketing, and technology to build complete digital
            systems around your business.
          </p>
        </div>

        <div className="grid bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-4">
          {buildItems.map((item, index) => (
            <Link
              key={item.title}
              href={item.href}
              className="group flex min-h-56 flex-col justify-between bg-frame-bg p-6 transition-colors duration-300 hover:bg-frame-accent sm:p-7"
            >
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.28em] text-frame-accent transition-colors duration-300 group-hover:text-frame-accent-fg/75 sm:text-xs">
                  {item.tag} / 0{index + 1}
                </p>
                <h3 className="mt-5 font-heading text-xl font-bold uppercase leading-tight tracking-tighter text-frame-fg transition-colors duration-300 group-hover:text-frame-accent-fg sm:text-2xl">
                  {item.title}
                </h3>
              </div>
              <div>
                <p className="mt-5 text-sm font-medium leading-relaxed text-frame-muted-fg transition-colors duration-300 group-hover:text-frame-accent-fg/85">
                  {item.description}
                </p>
                <span
                  className="mt-6 inline-flex items-center gap-2 border-b-2 border-frame-border pb-1 text-xs font-black uppercase tracking-wider text-frame-fg transition-colors duration-300 group-hover:border-frame-accent-fg group-hover:text-frame-accent-fg"
                  aria-hidden="true"
                >
                  <span>Explore</span>
                  <span className="transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/services"
            className="group inline-flex min-h-14 w-full sm:w-auto items-center justify-center gap-3 border-2 border-frame-border bg-transparent px-7 py-4 text-sm font-black uppercase tracking-tighter text-frame-fg transition-all duration-200 hover:border-frame-fg hover:bg-frame-fg hover:text-frame-bg active:scale-95 md:min-h-16 md:px-9 md:text-base"
          >
            <span>Explore all services</span>
            <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">
              &rarr;
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}