import { SectionIntro, PosterButton } from '../../../Kinetic'

const phases = [
  {
    phase: 'Phase 01',
    title: 'Pre-Production & Scripting',
    description: 'We help turn an idea into a production-ready plan before filming begins. Planning ensures the shoot captures what the final edit actually needs without wasted set time.',
    bullets: [
      'Content outline & narrative structural frameworks',
      'Full scriptwriting & conversational dialogue',
      'Talking points & teleprompter-friendly copy',
      'Structured interview questions & presenter preparation',
      'Shot lists, location planning & production schedules'
    ]
  },
  {
    phase: 'Phase 02',
    title: 'Filming & Direction',
    description: 'We handle filming according to the format and production requirements at your business location, an approved external venue, or a suitable studio setup.',
    bullets: [
      'Single & multi-camera 4K cinema camera coverage',
      'Professional broadcast studio lighting design',
      'Wireless lavalier & overhead boom audio recording',
      'On-set presenter coaching & interview direction',
      'Product footage, dynamic b-roll & workplace b-roll'
    ]
  },
  {
    phase: 'Phase 03',
    title: 'Editing & Post-Production',
    description: 'The edit turns raw footage into the finished YouTube experience, structured around viewer retention rather than simply following chronological recording order.',
    bullets: [
      'Long-form editing & narrative pacing refinement',
      'Dialogue editing, pause trimming & audio cleanup',
      'Contextual B-roll integration & screen recordings',
      'On-screen text, branded lower-thirds & motion elements',
      'Color correction, grading & broadcast audio mixing'
    ]
  },
  {
    phase: 'Phase 04',
    title: 'Thumbnail & Cover Asset Production',
    description: 'We produce high-CTR thumbnail assets alongside the video, integrating dedicated shoot photography and conversion-driven graphic design.',
    bullets: [
      'Thumbnail creative concepts & visual focal points',
      'Dedicated high-resolution thumbnail photography on set',
      'Curated image selection & background separation',
      'Bold graphic design, text treatments & contrast testing',
      'Multiple creative directions where required'
    ]
  },
  {
    phase: 'Phase 05',
    title: 'Multi-Format Production',
    description: 'A YouTube production can also create supporting assets where the project requires them, maximizing the output and reach of every shoot day.',
    bullets: [
      'Vertical YouTube Shorts cutdowns for channel reach',
      'Instagram Reels & TikTok social media excerpts',
      'High-impact promotional clips for paid ads & email',
      'Alternative duration cuts & teaser versions',
      'Supporting thumbnail & banner assets across platforms'
    ]
  }
]

function CheckIcon({ className = "h-4 w-4 shrink-0 text-frame-accent mt-0.5" }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className={className}>
      <path d="m4.5 10 3.5 3.5 7.5-7.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function Offerings() {
  return (
    <section className="border-b-2 border-frame-border bg-frame-bg px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="End-to-End Workflow"
          title="What Our YouTube Video Production Service Includes"
        >
          From initial concept and content structure through on-set filming, post-production, custom thumbnail design, and multi-format cutdowns—one in-house team handles the entire lifecycle.
        </SectionIntro>

        <div className="mt-12 grid gap-px border-2 border-frame-border bg-frame-border md:grid-cols-2 lg:grid-cols-3">
          {phases.map((item, index) => (
            <div
              key={index}
              className={`bg-frame-bg p-6 md:p-8 flex flex-col justify-between ${
                index === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between border-b border-frame-border/60 pb-3">
                  <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                    {item.phase}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-frame-muted-fg">
                    Deliverable
                  </span>
                </div>
                <h3 className="mt-4 font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg">
                  {item.title}
                </h3>
                <p className="mt-3 text-xs sm:text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {item.description}
                </p>

                <ul className="mt-6 space-y-2 border-t border-frame-border/60 pt-4 text-xs sm:text-sm font-medium text-frame-fg/90">
                  {item.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2">
                      <CheckIcon />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-10 flex max-w-4xl flex-col items-center justify-between gap-4 border-2 border-frame-accent/40 bg-frame-accent/5 p-6 sm:flex-row text-center sm:text-left">
          <div>
            <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
              Need a Custom Scope?
            </span>
            <p className="mt-1 text-xs sm:text-sm font-medium text-frame-fg">
              Whether you need a single masterclass video or recurring monthly production, we tailor every package to your deliverables.
            </p>
          </div>
          <PosterButton href="/contact" className="shrink-0 text-xs sm:text-sm">
            Request a YouTube Video Production Quote &rarr;
          </PosterButton>
        </div>
      </div>
    </section>
  )
}
