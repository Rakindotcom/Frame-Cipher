import { SectionIntro, PosterButton } from '../../../Kinetic'

const whyChoosePillars = [
  {
    tag: 'Pillar 01',
    title: 'One In-House Team',
    description: 'Strategy, design, development, content structure, SEO setup, and launch support stay within one coordinated team.',
  },
  {
    tag: 'Pillar 02',
    title: 'Platform-Neutral Recommendations',
    description: 'We recommend Wix when it fits the project. When another platform is more suitable, we explain why instead of forcing the project into Wix.',
  },
  {
    tag: 'Pillar 03',
    title: 'Business-First Website Planning',
    description: 'We start with the website\'s purpose, target audience, customer journey, content structure, and conversion goals before choosing the implementation approach.',
  },
  {
    tag: 'Pillar 04',
    title: 'Wix Studio & Custom Development',
    description: 'We can go beyond standard drag-and-drop builds when the project needs advanced responsive design, CMS functionality, custom code, APIs, or other supported integrations.',
  },
  {
    tag: 'Pillar 05',
    title: 'SEO-Ready Foundations',
    description: 'We consider site structure, metadata, internal linking, indexation, mobile experience, performance, and analytics from the beginning.',
  },
  {
    tag: 'Pillar 06',
    title: 'Easy Client Handover',
    description: 'The finished website should remain manageable after launch. We provide the agreed access, setup, and basic guidance needed to manage the site confidently.',
  },
  {
    tag: 'Pillar 07',
    title: 'Transparent Review Process',
    description: 'We use review checkpoints throughout the project so you can approve structure, design, functionality, and content direction before launch.',
  },
]

export default function WhyChoose() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Engineering Advantage" title="Why Choose Framecipher for Wix Development" align="center">
          We build Wix websites around business requirements, not around a fixed template or one-size-fits-all package.
        </SectionIntro>

        <div className="grid bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-3 border-2 border-frame-border">
          {whyChoosePillars.map((diff, idx) => (
            <div key={idx} className="flex flex-col justify-between bg-frame-bg p-7 sm:p-9 min-h-[220px]">
              <div>
                <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                  {diff.tag}
                </span>
                <h3 className="mt-4 font-heading text-lg sm:text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                  {diff.title}
                </h3>
                <p className="mt-4 text-sm sm:text-base font-medium leading-relaxed text-frame-muted-fg">
                  {diff.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <PosterButton href="/contact">Start Your Wix Project &rarr;</PosterButton>
        </div>
      </div>
    </section>
  )
}