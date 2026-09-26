import { SectionIntro, PosterButton } from '../../../Kinetic'

const videoTypes = [
  {
    tag: 'Thought Leadership',
    title: 'Talking-Head & Presenter Videos',
    desc: 'Professional presenter videos for businesses, educators, consultants, founders, and personal brands. Production includes controlled framing, lighting, audio, presenter teleprompter or talking points, B-roll, graphics, and long-form editing.'
  },
  {
    tag: 'Discussions & Podcasts',
    title: 'Interview & Podcast-Style Videos',
    desc: 'Interview and podcast formats benefit from proper multi-camera coverage and broadcast-grade audio engineering. We produce multi-angle interviews, expert conversations, founder discussions, and episodic podcast content.'
  },
  {
    tag: 'Education & Masterclasses',
    title: 'Educational & Tutorial Videos',
    desc: 'Educational content needs clear structure and supporting visuals. We combine presenter footage with direct screen recordings, live software demos, graphics, b-roll, and on-screen text to make long explanations effortless to follow.'
  },
  {
    tag: 'Product Walkthroughs',
    title: 'Product & Demonstration Videos',
    desc: 'Product videos show customers how something works rather than simply describing it. We produce high-resolution product walkthroughs, feature deep-dives, hardware unboxings, service explainers, and practical use-case videos.'
  },
  {
    tag: 'Personal Brand & Authority',
    title: 'Founder & Expert Videos',
    desc: 'Founder and expert content builds lasting trust, personal branding, thought leadership, and business credibility. We produce founder interviews, expert industry commentary, executive insights, and recurring thought-leadership series.'
  },
  {
    tag: 'Cinematic Storytelling',
    title: 'Documentary & Story-Driven Videos',
    desc: 'Documentary-style content combines in-depth interviews, location cinematography, rich b-roll, archival assets, narration, and structured narrative editing to tell powerful brand and impact stories.'
  },
  {
    tag: 'Corporate & Culture',
    title: 'Corporate & Brand Videos',
    desc: 'Long-form corporate storytelling designed for modern viewers. We produce company profiles, executive roundtables, behind-the-scenes culture films, customer case studies, employer-brand showcases, and investor communication videos.'
  }
]

export default function VideoTypes() {
  return (
    <section className="border-b-2 border-frame-border bg-frame-bg px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Specialized Production Formats"
          title="Types of YouTube Videos We Produce"
        >
          Different YouTube formats require different production workflows. We match the filming technique, camera setup, lighting, and editing pacing to your content objective.
        </SectionIntro>

        <div className="mt-12 grid gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-2 lg:grid-cols-3">
          {videoTypes.map((item, index) => (
            <div
              key={index}
              className={`bg-frame-bg p-6 md:p-8 flex flex-col justify-between transition-colors hover:bg-frame-accent/5 ${
                index === 6 ? 'sm:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div>
                <span className="text-[11px] font-black uppercase tracking-[0.2em] text-frame-accent">
                  {item.tag}
                </span>
                <h3 className="mt-3 font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg">
                  {item.title}
                </h3>
                <p className="mt-3 text-xs sm:text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-2 border-frame-border bg-frame-muted/20 p-6 sm:flex-row text-center sm:text-left">
          <div>
            <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
              Custom Production Design
            </span>
            <p className="mt-1 text-xs sm:text-sm font-medium text-frame-fg">
              Need a hybrid format combining talking-head, screen capture, and field documentary? We design custom production plans.
            </p>
          </div>
          <PosterButton href="/contact" className="shrink-0 text-xs sm:text-sm">
            Discuss Your Video Format &rarr;
          </PosterButton>
        </div>
      </div>
    </section>
  )
}
