import { SectionLabel, SectionIntro } from '../Kinetic'

const center = {
  title: 'Frame Cipher',
  subtitle: 'One full-stack partner, five connected capabilities.',
}

const categories = [
  {
    number: '01',
    title: 'Strategy',
    description: 'Content strategy, positioning, and campaign planning.',
    href: '/services/content-writing/content-strategy',
  },
  {
    number: '02',
    title: 'Marketing',
    description: 'SEO, paid ads, social media, and performance reporting.',
    href: '/services/seo',
  },
  {
    number: '03',
    title: 'Creative',
    description: 'Brand identity, design systems, and campaign visuals.',
    href: '/services/content-creation/branding',
  },
  {
    number: '04',
    title: 'Media',
    description: 'Photo, video, reels, editing, and campaign-ready assets.',
    href: '/services/content-creation/video-production',
  },
  {
    number: '05',
    title: 'Technology',
    description: 'Websites, e-commerce, apps, and custom software.',
    href: '/services/website-design-development',
  },
]

export default function ServicesConnectedSystem() {
  return (
    <section className="overflow-hidden border-b-2 border-frame-border bg-frame-bg px-4 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Connected system / how everything connects"
          title="Different services. One connected system."
          index="04"
        >
          Every service can be hired alone, but the results compound when strategy, marketing,
          creative, media, and technology move on the same plan.
        </SectionIntro>

        <div className="relative mt-16">
          <div
            className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(168,85,247,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.06)_1px,transparent_1px)] bg-[size:44px_44px]"
            aria-hidden="true"
          />

          <div className="mx-auto flex max-w-xl flex-col items-center justify-center border-2 border-frame-accent bg-frame-bg p-8 text-center shadow-2xl shadow-frame-accent/10 md:p-12">
            <span className="mb-4 h-2 w-16 bg-frame-accent" aria-hidden="true" />
            <h3 className="font-heading text-[clamp(2rem,5vw,4rem)] font-bold uppercase leading-none tracking-tighter text-frame-fg">
              {center.title}
            </h3>
            <p className="mt-4 text-base font-bold uppercase tracking-[0.18em] text-frame-accent">
              {center.subtitle}
            </p>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {categories.map((category) => (
              <a
                key={category.number}
                href={category.href}
                className="group border-2 border-frame-border bg-frame-muted p-6 transition-colors duration-300 hover:border-frame-accent hover:bg-frame-accent"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="font-heading text-3xl font-bold leading-none tracking-tighter text-frame-muted-fg transition-colors duration-300 group-hover:text-frame-accent-fg/60">
                    {category.number}
                  </span>
                  <span className="mt-1.5 h-2 w-8 bg-frame-accent transition-colors duration-300 group-hover:bg-frame-accent-fg" aria-hidden="true" />
                </div>
                <h3 className="mt-8 font-heading text-2xl font-bold uppercase leading-none tracking-tighter text-frame-fg transition-colors duration-300 group-hover:text-frame-accent-fg">
                  {category.title}
                </h3>
                <p className="mt-3 text-sm font-medium leading-tight text-frame-muted-fg transition-colors duration-300 group-hover:text-frame-accent-fg/80">
                  {category.description}
                </p>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
          <SectionLabel>One brief, one team, one system—from strategy to execution.</SectionLabel>
        </div>
      </div>
    </section>
  )
}