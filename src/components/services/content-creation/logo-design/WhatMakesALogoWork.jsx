import { SectionIntro } from '../../../Kinetic'

const pillars = [
  {
    num: '01',
    title: 'Distinctiveness',
    summary: 'Category Separation',
    desc: 'A logo must have enough visual distinction to immediately separate your company from other brands in the same category. We audit direct competitors during discovery so your mark never looks like a generic clone.'
  },
  {
    num: '02',
    title: 'Simplicity & Memorability',
    summary: 'Instant Recognition',
    desc: 'A logo has only a fraction of a second to register in memory. Excessive decorative details make a mark harder to decipher and recall. We focus on a singular, powerful visual idea that sticks.'
  },
  {
    num: '03',
    title: 'Scalability',
    summary: 'Micro to Macro Clarity',
    desc: 'The mark must hold up across extreme size differentials—from a 16px browser favicon or smartwatch app icon to building signage, vehicle wraps, and conference backdrops without loss of legibility.'
  },
  {
    num: '04',
    title: 'Color & Monochrome Performance',
    summary: 'Substrate Flexibility',
    desc: 'A robust mark cannot rely solely on color gradients to be understood. We test and calibrate every logo in solid black, reversed white, and single-color foil stamping across dark and light substrates.'
  },
  {
    num: '05',
    title: 'Standalone Recognition',
    summary: 'Tagline Independence',
    desc: 'Marketing slogans and corporate taglines evolve over time. A professional logo functions as an authoritative, standalone identifier without leaning on explanatory text to make sense.'
  },
  {
    num: '06',
    title: 'Competitive Distinction',
    summary: 'Defensible Positioning',
    desc: 'Being different is not enough if the mark feels inappropriate for the industry. We strike the delicate balance between category relevance and defensible visual originality.'
  }
]

export default function WhatMakesALogoWork() {
  return (
    <section className="border-b-2 border-frame-border bg-frame-muted/30 px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Design Philosophy"
          title="What Makes a Logo Work"
        >
          A strong logo functions primarily as an identifier, not an elaborate illustration. We adhere to 6 foundational design criteria to ensure your visual mark delivers commercial value for years to come.
        </SectionIntro>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="border-2 border-frame-border bg-frame-bg p-6 md:p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between border-b border-frame-border/60 pb-3">
                  <span className="font-mono text-xs font-black text-frame-accent">
                    CRITERIA {pillar.num}
                  </span>
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-frame-muted-fg">
                    {pillar.summary}
                  </span>
                </div>
                <h3 className="mt-4 font-heading text-xl font-bold uppercase tracking-tight text-frame-fg">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-xs sm:text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {pillar.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
