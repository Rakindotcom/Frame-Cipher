import { SectionIntro, PosterButton } from '../../../Kinetic'

const offerings = [
  {
    phase: 'Phase 01',
    title: 'Creative Direction & Concept Development',
    description: 'We turn your initial idea, campaign brief, or business objective into a practical video concept. If you already have a detailed brief, we work from it. If you only have an objective or rough idea, we help shape the production direction.',
    bullets: [
      'Creative direction and visual treatment',
      'Core message and narrative structure',
      'Audience definition, tone, and pacing',
      'Platform planning and creative references',
      'Exploratory video concept treatments'
    ]
  },
  {
    phase: 'Phase 02',
    title: 'Scriptwriting & Video Structure',
    description: 'A strong shoot starts with a clear idea of what the final video needs to say. A commercial may require precise scene-by-scene direction, while an interview-led production works better with structured questions and talking points.',
    bullets: [
      'Commercial video scripts & dialogue',
      'Professional voiceover scripts',
      'Structured interview questions & talking points',
      'Scene structures, story treatments & shot lists',
      'Storyboards, on-screen messaging & calls to action'
    ]
  },
  {
    phase: 'Phase 03',
    title: 'Pre-Production Planning',
    description: 'Pre-production turns the creative direction into a practical production plan: capture the right footage for the final edit instead of trying to solve production gaps later.',
    bullets: [
      'Location planning, scouting & site permits',
      'Talent or presenter casting coordination',
      'Production scheduling & crew planning',
      'Cinema camera, lighting & audio equipment setup',
      'Props, set dressing & production logistics'
    ]
  },
  {
    phase: 'Phase 04',
    title: 'Filming & Video Production',
    description: 'Once the plan is ready, we move into production. The production setup is selected according to the project: a simple interview does not require the same approach as a commercial, brand film, or multi-asset campaign.',
    bullets: [
      'Interviews & talking-head videos',
      'Product shots & live demonstrations',
      'Workplace footage & brand environments',
      'Directed scenes, action sequences & b-roll',
      'Detail shots, macro visuals & supporting footage'
    ]
  },
  {
    phase: 'Phase 05',
    title: 'Video Editing & Post-Production',
    description: 'Post-production turns the footage into a complete story. We refine the final video around the original objective, rather than treating editing as simply joining clips together.',
    bullets: [
      'Footage organization, rough-cut & fine-cut editing',
      'Story, emotion & pacing refinement',
      'Color correction & cinematic color grading',
      'Audio cleanup, sound balancing & licensed music',
      'Motion graphics, titles, lower thirds & subtitles'
    ]
  },
  {
    phase: 'Phase 06',
    title: 'Final Export & Multi-Platform Delivery',
    description: 'The final video may need more than one version. A business may need a horizontal master for its website, a shorter version for YouTube, vertical versions for social media, or cut-downs for advertising.',
    bullets: [
      'High-bitrate horizontal 4K/1080p website masters',
      'Paced YouTube cuts with thumbnail design',
      'Vertical 9:16 versions for Reels, Shorts & TikTok',
      'Square (1:1) and vertical (4:5) ad cut-downs',
      'Clean masters and burned-in subtitle variants'
    ]
  }
]

export default function Offerings() {
  return (
    <section id="offerings" className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28 scroll-mt-24">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Full-Cycle Scope"
          title="What Our Video Production Service Includes"
          index="01"
        >
          Video production is a connected process. Each stage directly affects the quality, pacing, and commercial effectiveness of the next.
        </SectionIntro>

        <div className="grid border-2 border-frame-border bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-3">
          {offerings.map((item, index) => (
            <div
              key={index}
              className="bg-frame-bg p-7 md:p-8 flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                  {item.phase}
                </span>
                <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {item.description}
                </p>

                {item.bullets?.length > 0 && (
                  <ul className="mt-6 space-y-2 border-t-2 border-frame-border/60 pt-4 text-xs md:text-sm font-medium text-frame-fg/90">
                    {item.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2">
                        <span className="text-frame-accent font-bold">✓</span>
                        <span className="leading-snug">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 border-2 border-frame-border bg-frame-muted/30 p-6 md:p-8">
          <div>
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              Single Team Accountability
            </span>
            <h4 className="mt-1 font-heading text-xl font-bold uppercase tracking-tight text-frame-fg">
              Need a complete video production from idea to final platform exports?
            </h4>
            <p className="mt-1 text-xs md:text-sm font-medium text-frame-muted-fg">
              We coordinate the writer, director, cinema crew, and editor under one accountable roof.
            </p>
          </div>
          <PosterButton href="/contact" className="shrink-0">
            Get a Production Consultation &rarr;
          </PosterButton>
        </div>
      </div>
    </section>
  )
}
