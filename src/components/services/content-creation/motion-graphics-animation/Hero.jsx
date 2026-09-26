import Link from 'next/link'
import { PageHero, PosterButton } from '../../../Kinetic'

const coreCapabilities = [
  {
    num: '01',
    title: 'Product & SaaS Explainers',
    desc: 'Translating complex software workflows and abstract business logic into clear, retention-engineered motion stories.'
  },
  {
    num: '02',
    title: 'Kinetic Typography & Stings',
    desc: 'Audio-synced text animation, signature logo reveals, and brand motion systems that elevate brand perception.'
  },
  {
    num: '03',
    title: 'Data & Infographic Animation',
    desc: 'Transforming dense metrics, financial charts, and research reports into sequential, intuitive visual narratives.'
  },
  {
    num: '04',
    title: 'Photorealistic 3D Visualization',
    desc: '360° product rotations, exploded hardware schematics, and realistic render walkthroughs beyond camera limits.'
  }
]

export default function Hero({ service }) {
  const title = service?.h1 || "Motion Graphics & Animation Service in Bangladesh"
  const subtitle = service?.shortDesc || "Some ideas cannot be filmed. A software workflow, data trend, product interface, abstract concept, or internal process may have no physical scene for a camera to capture. That is where motion graphics and animation become useful."

  return (
    <div className="bg-frame-bg text-frame-fg">
      {/* BREADCRUMB */}
      <nav aria-label="Breadcrumb" className="border-b border-frame-border/60 bg-frame-bg/80 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-frame-muted-fg md:px-8">
        <div className="mx-auto flex max-w-[95vw] items-center gap-2 overflow-x-auto">
          <Link href="/" className="transition hover:text-frame-fg">Home</Link>
          <span>/</span>
          <Link href="/services" className="transition hover:text-frame-fg">Services</Link>
          <span>/</span>
          <Link href="/services/content-creation" className="transition hover:text-frame-fg">Content Creation</Link>
          <span>/</span>
          <span className="text-frame-accent">Motion Graphics & Animation</span>
        </div>
      </nav>

      {/* HERO */}
      <PageHero
        eyebrow="Motion Design & Animation Architecture"
        meta="2D/3D Animation / Explainers & UI / Storyboard to Render"
        number="04"
        title={title}
        actions={
          <>
            <PosterButton href="/contact">
              Get a Free Consultation &rarr;
            </PosterButton>
            <PosterButton href="/projects#animation-work" variant="outline">
              View Motion Graphics Portfolio &rarr;
            </PosterButton>
          </>
        }
      >
        {subtitle}
        <span className="mt-4 block text-xs md:text-sm font-normal text-frame-muted-fg leading-relaxed">
          Framecipher creates motion graphics and animation that turn complex ideas into clear visual stories. We produce explainers, kinetic typography, animated brand assets, data visualizations, product and UI animation, social content, and 2D/3D animation for businesses in Bangladesh and international markets.
        </span>
      </PageHero>

      {/* VALUE PROPOSITION SECTION */}
      <section className="border-b-2 border-frame-border bg-frame-muted/30 px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-[95vw]">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent mb-4">
              Motion With Purpose
            </p>
            <h2 className="font-heading text-[clamp(2.2rem,5.5vw,4.5rem)] font-bold uppercase leading-[0.9] tracking-tighter text-frame-fg">
              Motion Graphics Built to Explain, Demonstrate & Move Ideas
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              Motion graphics combines graphic design, typography, illustration, visual elements, timing, movement, and sound to communicate something through motion. The goal is not simply to make a graphic move. The goal is to help the audience understand, remember, or act on a message.
            </p>
          </div>

          {/* 4 PILLARS GRID */}
          <div className="mt-12 grid gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-2 lg:grid-cols-4">
            {coreCapabilities.map((item) => (
              <div key={item.num} className="bg-frame-bg p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-black text-frame-accent">
                      {item.num}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-frame-muted-fg">
                      Core Domain
                    </span>
                  </div>
                  <h3 className="mt-4 font-heading text-base md:text-lg font-bold uppercase tracking-tight text-frame-fg">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm font-medium leading-relaxed text-frame-muted-fg">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-10 flex max-w-4xl flex-col items-center justify-between gap-4 border-2 border-frame-accent/40 bg-frame-bg p-6 sm:flex-row text-center sm:text-left">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                Visual Problem Solving
              </span>
              <p className="mt-1 text-xs sm:text-sm font-medium text-frame-fg">
                We start with what your audience needs to understand, then choose the visual style, pacing, and format around that objective.
              </p>
            </div>
            <PosterButton href="/contact" className="shrink-0 text-xs sm:text-sm">
              Discuss Your Motion Goals &rarr;
            </PosterButton>
          </div>
        </div>
      </section>
    </div>
  )
}
