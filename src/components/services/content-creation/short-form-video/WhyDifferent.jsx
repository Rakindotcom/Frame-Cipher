import { SectionIntro, PosterButton } from '../../../Kinetic'

const differences = [
  {
    num: '01',
    title: 'Hook Before Context',
    description: 'Short-form content has less time to establish context than longer video. The opening must communicate an immediate reason to continue—via a compelling question, provocative statement, striking visual, product result, or pain point.'
  },
  {
    num: '02',
    title: 'Vertical-First Composition (9:16)',
    description: 'Vertical video changes how subjects, products, typography, and backgrounds are composed. We frame specifically for mobile viewports from set, ensuring critical visual information never gets covered by platform UI overlays.'
  },
  {
    num: '03',
    title: 'Pacing Built for Mobile Viewing',
    description: 'Mobile feeds demand deliberate pacing without awkward pauses. We utilize pattern interrupts, audio cues, jump cuts, and b-roll inserts that hold viewer retention while keeping your message effortless to absorb.'
  },
  {
    num: '04',
    title: 'Content Designed for Iteration',
    description: 'Rather than relying on one single gamble, short-form production thrives on testing multiple concepts, openings, and hooks from the same shoot. This reveals what creative execution genuinely drives the highest conversion.'
  },
  {
    num: '05',
    title: 'Platform-Aware Creative',
    description: 'While Reels, TikTok, and YouTube Shorts all use vertical frames, their audience expectations and creative conventions differ. We adapt sound, caption styling, and narrative pacing to feel native to each intended feed.'
  }
]

export default function WhyDifferent() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Format Principles"
          title="Why Short-Form Video Production Is Different"
          index="03"
        >
          Short-form video is not simply a horizontal video cropped down. It requires a dedicated creative discipline tailored to mobile viewing behavior and platform distribution.
        </SectionIntro>

        <div className="grid border-2 border-frame-border bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-3">
          {differences.map((item) => (
            <div key={item.num} className="bg-frame-bg p-7 md:p-8 flex flex-col justify-between">
              <div>
                <span className="font-heading text-3xl font-black text-frame-accent">
                  {item.num}
                </span>
                <h3 className="mt-3 font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg">
                  {item.title}
                </h3>
                <p className="mt-3 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {item.description}
                </p>
              </div>
            </div>
          ))}

          {/* HOOK WORKSHOP BANNER */}
          <div className="bg-frame-accent/10 border-2 border-frame-accent p-7 md:p-8 flex flex-col justify-between">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                Conversion Engineering
              </span>
              <h3 className="mt-2 font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg">
                Need Hooks That Stop the Scroll?
              </h3>
              <p className="mt-2 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                We develop multiple hook variations for every concept so your team can test and scale the highest-converting angles.
              </p>
            </div>
            <div className="mt-6">
              <PosterButton href="/contact" className="w-full text-xs">
                Plan a Hook Workshop &rarr;
              </PosterButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
