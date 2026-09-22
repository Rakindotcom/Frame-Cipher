import { PosterButton } from '../Kinetic'

const bundles = [
  {
    number: '01',
    title: 'Launch',
    bestFor: 'New businesses ready to start',
    includes: 'Brand basics, website, social setup, and launch content.',
    href: '/contact',
    cta: 'Start a Launch Project',
  },
  {
    number: '02',
    title: 'Growth',
    bestFor: 'SMEs and growing brands',
    includes: 'Branding, website, SEO, social media, paid ads, and reporting.',
    href: '/contact',
    cta: 'Start a Growth Project',
  },
  {
    number: '03',
    title: 'E-commerce Growth',
    bestFor: 'Online shops and product brands',
    includes: 'Store, product pages, content, ads, email, and conversion optimization.',
    href: '/contact',
    cta: 'Start an E-commerce Project',
  },
  {
    number: '04',
    title: 'Digital Transformation',
    bestFor: 'Businesses going digital',
    includes: 'Custom software, CRM/ERP, dashboards, automation, and integrations.',
    href: '/contact',
    cta: 'Start a Transformation Project',
  },
  {
    number: '05',
    title: '360° Partnership',
    bestFor: 'Brands ready for serious growth',
    includes: 'Strategy, media, marketing, software, analytics, and ongoing execution.',
    href: '/contact',
    cta: 'Start a 360 Project',
  },
]

export default function ServicesBundles() {
  return (
    <section className="border-b-2 border-frame-border bg-frame-muted px-4 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-[95vw]">
        <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-frame-accent md:text-sm">
          Service bundles / mix your own
        </p>
        <h2 className="max-w-4xl font-heading text-[clamp(2.4rem,7vw,6.5rem)] font-bold uppercase leading-[0.85] tracking-tighter text-frame-fg">
          Combine the right services for your goal.
        </h2>
        <p className="mt-6 max-w-3xl text-base font-medium leading-relaxed text-frame-muted-fg md:text-xl">
          Every business is different. Pick a bundle that matches your stage, or build a custom mix
          with a quick call.
        </p>

        <div className="grid gap-5 pt-14 md:grid-cols-2 lg:grid-cols-3">
          {bundles.map((bundle) => (
            <article
              key={bundle.number}
              className="group flex min-h-80 flex-col justify-between border-2 border-frame-border bg-frame-bg p-7 transition-colors duration-300 hover:border-frame-accent md:p-9"
            >
              <div>
                <div className="flex items-start justify-between gap-5">
                  <span className="font-heading text-4xl font-bold leading-none tracking-tighter text-frame-muted-fg transition-colors duration-300 group-hover:text-frame-accent md:text-5xl">
                    {bundle.number}
                  </span>
                  <span className="mt-1.5 h-2 w-10 bg-frame-accent" aria-hidden="true" />
                </div>
                <h3 className="mt-7 font-heading text-2xl font-bold uppercase leading-tight tracking-tighter text-frame-fg md:text-3xl">
                  {bundle.title}
                </h3>
                <p className="mt-4 text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                  Best for
                </p>
                <p className="mt-2 text-base font-medium leading-tight text-frame-muted-fg">
                  {bundle.bestFor}
                </p>
                <p className="mt-6 text-base font-medium leading-tight text-frame-muted-fg">
                  {bundle.includes}
                </p>
              </div>

              <div className="mt-8">
                <PosterButton href={bundle.href} variant="outline" className="whitespace-nowrap">
                  {bundle.cta}
                </PosterButton>
              </div>
            </article>
          ))}

          <article className="flex min-h-80 flex-col justify-between border-2 border-frame-accent bg-frame-accent p-7 transition-colors duration-300 hover:bg-frame-fg md:p-9">
            <div>
              <span className="font-heading text-4xl font-bold leading-none tracking-tighter text-frame-accent-fg/70 md:text-5xl">
                CUSTOM
              </span>
              <h3 className="mt-7 font-heading text-2xl font-bold uppercase leading-tight tracking-tighter text-frame-accent-fg md:text-3xl">
                Build your own
              </h3>
            </div>
            <div>
              <p className="text-base font-medium leading-tight text-frame-accent-fg/85">
                Not sure what you need? Tell us your budget and goals, and we&apos;ll put the right
                mix together.
              </p>
              <div className="mt-8">
                <PosterButton href="/contact" variant="accent" className="whitespace-nowrap">
                  Talk to Us
                </PosterButton>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}