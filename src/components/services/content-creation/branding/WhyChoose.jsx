import Link from 'next/link'
import { SectionIntro, PosterButton } from '../../../Kinetic'

const pillars = [
  {
    num: '01',
    title: 'Strategy & Creative Under One In-House Team',
    desc: 'Brand strategy, graphic design, copywriting, and technical production are executed by one coordinated in-house team. This eliminates the expensive friction that occurs when strategy is developed by one consultancy and handed to disconnected designers.'
  },
  {
    num: '02',
    title: 'Visual & Verbal Identity Developed Together',
    desc: 'A brand should never look sophisticated while reading like generic boilerplate. We develop your visual design language and tone of voice simultaneously, ensuring words and visuals reinforce the exact same premium identity.'
  },
  {
    num: '03',
    title: 'Engineered for Real-World Business Use',
    desc: 'We stress-test how the brand system performs across real touchpoints—commercial websites, pitch decks, retail packaging, social feeds, and corporate documents—rather than designing for an isolated, sterile presentation mockup.'
  },
  {
    num: '04',
    title: 'Existing Brand Equity Is Respected',
    desc: 'A rebrand rarely requires throwing away everything you have built. We audit existing customer recognition, brand awareness, and recognizable visual equities, formulating an evolution that respects past commercial investment.'
  },
  {
    num: '05',
    title: 'Connected Creative Capabilities Post-Launch',
    desc: 'Branding establishes the rulebook; our related in-house teams (Graphic Design, Content Writing, Video Production, and Motion Graphics) help you immediately execute against it, keeping future marketing flawlessly aligned.'
  }
]

const portfolioAttributes = [
  'Client & Industry Category',
  'Commercial Positioning Challenge',
  'Existing Brand Equity Audit',
  'Core Strategic Direction & Pillars',
  'Visual Identity System & Typography',
  'Brand Voice & Messaging Guidelines',
  'Real-World Collateral Applications',
  'Documented Business Outcomes'
]

export default function WhyChoose() {
  return (
    <section className="border-b-2 border-frame-border bg-frame-muted/30 px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Proven Methodology"
          title="Why Businesses Choose Framecipher for Branding"
        >
          We bridge corporate business strategy, sophisticated aesthetic design, and operational brand governance to deliver brand systems that command immediate authority and scale gracefully.
        </SectionIntro>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className={`border-2 border-frame-border bg-frame-bg p-6 md:p-8 flex flex-col justify-between ${
                idx === 4 ? 'sm:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div>
                <span className="font-mono text-xs font-black text-frame-accent">
                  PILLAR 0{pillar.num}
                </span>
                <h3 className="mt-3 font-heading text-xl font-bold uppercase tracking-tight text-frame-fg">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-xs sm:text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {pillar.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* SELECTED BRANDING WORK SHOWCASE */}
        <div className="mt-16 border-2 border-frame-accent bg-frame-bg p-6 md:p-10">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 border-b border-frame-border/60 pb-6">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                Work In The Real World
              </span>
              <h3 className="mt-1 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
                Selected Branding Work
              </h3>
              <p className="mt-2 text-xs sm:text-sm font-medium text-frame-muted-fg max-w-2xl">
                See how Framecipher approaches brand strategy, visual identity, voice guidelines, and practical brand applications across diverse corporate and consumer categories.
              </p>
            </div>
            <div className="shrink-0">
              <PosterButton href="/projects#branding">
                View Branding Portfolio &rarr;
              </PosterButton>
            </div>
          </div>

          <div className="mt-6">
            <span className="text-[11px] font-black uppercase tracking-wider text-frame-muted-fg">
              Every Published Case Study Documents:
            </span>
            <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {portfolioAttributes.map((attr, idx) => (
                <div key={idx} className="flex items-center gap-2 border border-frame-border/60 bg-frame-muted/30 px-3 py-2 text-[11px] font-bold uppercase tracking-tight text-frame-fg">
                  <span className="h-1.5 w-1.5 rounded-full bg-frame-accent shrink-0" />
                  <span className="truncate">{attr}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border border-frame-border/80 bg-frame-muted/20 p-4">
            <div>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-frame-accent">
                Featured Brand Case Study
              </span>
              <h4 className="font-heading text-sm font-bold uppercase text-frame-fg">
                Dr. Ferdoush Saleheen — Personal Brand &amp; Authority Architecture
              </h4>
            </div>
            <Link
              href="/case-studies/dr-ferdoush-saleheen"
              className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-frame-accent hover:text-frame-fg transition-colors shrink-0"
            >
              <span>Read Case Study</span>
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
