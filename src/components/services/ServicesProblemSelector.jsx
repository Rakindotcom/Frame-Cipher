import { PosterButton, SectionLabel } from '../Kinetic'

const problems = [
  {
    number: '01',
    title: 'Get More Customers',
    description: 'For businesses that need more leads, sales, or customers.',
    services: ['SEO', 'Local SEO', 'Google Ads', 'Meta Ads', 'Social Media Marketing', 'Landing Pages'],
    cta: 'Explore Growth Solutions',
    href: '/services/paid-advertising',
  },
  {
    number: '02',
    title: 'Build Your Brand',
    description: 'For businesses that need a stronger and more consistent brand presence.',
    services: ['Brand Strategy', 'Creative Design', 'Content', 'Photography', 'Videography', 'Personal Branding'],
    cta: 'Explore Brand Solutions',
    href: '/services/content-creation',
  },
  {
    number: '03',
    title: 'Build Your Digital Presence',
    description: 'For businesses that need a professional online presence.',
    services: ['Website Development', 'WordPress', 'Shopify', 'Next.js', 'E-commerce', 'UI/UX'],
    cta: 'Explore Web Solutions',
    href: '/services/website-design-development',
  },
  {
    number: '04',
    title: 'Improve Your Business Operations',
    description: 'For businesses that need custom systems and automation.',
    services: ['Custom Software', 'CRM', 'ERP', 'Inventory Management', 'POS', 'Business Automation'],
    cta: 'Explore Software Solutions',
    href: '/services/app-development',
  },
]

export default function ServicesProblemSelector() {
  return (
    <section className="px-4 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-[95vw]">
        <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-frame-accent md:text-sm">
          Problem selector / Start here
        </p>
        <h2 className="font-heading text-[clamp(2.4rem,7vw,6.5rem)] font-bold uppercase leading-[0.85] tracking-tighter text-frame-fg">
          What are you trying to solve?
        </h2>
        <p className="mt-6 max-w-3xl text-base font-medium leading-relaxed text-frame-muted-fg md:text-xl">
          You may not need every service. Start with the problem you&apos;re trying to solve, and find the
          right solution.
        </p>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {problems.map((problem) => (
            <article
              key={problem.number}
              className="group flex flex-col justify-between border-2 border-frame-border bg-frame-bg p-7 transition-all duration-300 hover:border-frame-accent md:p-9"
            >
              <div>
                <div className="flex items-center justify-between gap-5">
                  <span className="font-heading text-4xl font-bold leading-none tracking-tighter text-frame-muted transition-colors duration-300 group-hover:text-frame-accent md:text-5xl">
                    {problem.number}
                  </span>
                  <span className="h-2 w-10 bg-frame-accent" aria-hidden="true" />
                </div>

                <h3 className="mt-7 font-heading text-2xl font-bold uppercase leading-tight tracking-tighter text-frame-fg sm:text-3xl md:text-4xl">
                  {problem.title}
                </h3>
                <p className="mt-4 text-base font-medium leading-snug text-frame-muted-fg md:text-lg">
                  {problem.description}
                </p>
              </div>

              <div className="mt-8">
                <p className="text-[10px] font-black uppercase tracking-[0.22em] text-frame-muted-fg">
                  Relevant services
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {problem.services.map((service) => (
                    <span
                      key={service}
                      className="border border-frame-border bg-frame-muted/20 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-frame-fg"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <PosterButton href={problem.href} variant="outline" className="whitespace-nowrap">
                  {problem.cta}
                </PosterButton>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8 text-center">
          <SectionLabel>Not sure which problem fits? Book a call and we&apos;ll map it together.</SectionLabel>
        </div>
      </div>
    </section>
  )
}