import { SectionIntro } from '../../../Kinetic'

const pillars = [
  {
    num: '01',
    title: 'Strong Openings & Clear Structure',
    description: 'The opening should establish what the video is about and why the viewer should continue. We structure introductions around the subject immediately instead of adding lengthy, unnecessary animated intros before the value starts.',
    takeaways: [
      'Value proposition established within the first 15 seconds',
      'No bloated logos or extended generic title sequences',
      'Logical topic segments that match viewer intent'
    ]
  },
  {
    num: '02',
    title: 'Purposeful Pacing & Visual Variation',
    description: 'Long-form videos need room for deep information, but dead pauses and repetitive framing make them tedious to watch. We balance natural delivery with disciplined editing, introducing visual changes where they genuinely support comprehension.',
    takeaways: [
      'Removal of conversational filler without artificial cadence',
      'Strategic camera angle switches to reset attention',
      'Pacing matched to cognitive complexity of the topic'
    ]
  },
  {
    num: '03',
    title: 'Clean Audio, Lighting & Framing',
    description: 'Viewers spend ten to forty minutes with long-form content, so production flaws quickly fatigue the audience. We engineer consistent broadcast audio, three-point lighting, and flattering framing from the first shot.',
    takeaways: [
      'Professional broadcast microphones & wireless systems',
      'Consistent dialogue normalization & noise suppression',
      'Controlled color temperature & balanced key/fill lighting'
    ]
  },
  {
    num: '04',
    title: 'B-Roll, Graphics & Supporting Visuals',
    description: 'Supporting visuals transform abstract talking points into clear, memorable ideas while breaking up longer monologue sections. Every visual asset is purposefully chosen to elevate comprehension.',
    takeaways: [
      'Direct screen recordings & software walkthroughs',
      'Branded typography, lower-thirds & data charts',
      'On-location b-roll, product close-ups & tactile cutaways'
    ]
  }
]

export default function RetentionStrategy() {
  return (
    <section className="border-b border-white/[0.08] bg-[#121214] px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          eyebrow="Retention Engineering"
          title="YouTube Videos Built for Long-Form Retention"
        >
          Long-form retention is not about making every edit frantic. It is about keeping content clear, relevant, beautifully produced, and visually dynamic from start to finish.
        </SectionIntro>

        <div className="mt-12 grid gap-px border border-white/[0.08] bg-frame-border md:grid-cols-2">
          {pillars.map((item) => (
            <div key={item.num} className="bg-[#09090B] p-6 md:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                  <span className="font-mono text-xs font-black text-[#A855F7]">
                    Pillar {item.num}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#A1A1AA]">
                    Watch-Time Driver
                  </span>
                </div>
                <h3 className="mt-4 font-heading text-lg md:text-xl font-bold tracking-tight text-[#FAFAFA]">
                  {item.title}
                </h3>
                <p className="mt-3 text-xs sm:text-sm wide:text-lg font-medium leading-relaxed text-[#A1A1AA]">
                  {item.description}
                </p>

                <ul className="mt-6 space-y-2 border-t border-white/[0.06] pt-4 text-xs sm:text-sm font-medium text-zinc-200">
                  {item.takeaways.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#A855F7] font-bold">&rarr;</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
