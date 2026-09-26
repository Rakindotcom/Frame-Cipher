import { SectionIntro, PosterButton } from '../../../Kinetic'

const searchSignals = [
  'Search intent',
  'Topic relevance',
  'Video titles',
  'Descriptions',
  'Video content',
  'Audience needs',
  'Competitive results',
  'Content quality',
]

const packaging = [
  'Clear',
  'Relevant',
  'Compelling',
  'Consistent with the actual video',
  'Appropriate for the target audience',
]

const retention = [
  'Intro performance',
  'Early drop-offs',
  'Audience retention',
  'Average view duration',
  'Content pacing',
  'Repeated drop-off points',
  'Strong moments',
  'Viewer response',
]

const external = [
  'Topic interest',
  'Competition',
  'Seasonality',
]

export default function Discoverability() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Discovery &amp; viewer behavior"
          title="YouTube Search, Recommendations &amp; Viewer Behavior"
        >
          YouTube discovery does not depend on one universal ranking factor. Search and recommendation
          systems use different signals and surfaces to connect viewers with content they are likely to
          watch and enjoy. YouTube describes search around relevance, engagement, and quality, while
          recommendations consider viewer behavior, content performance, personalization, and
          satisfaction.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border lg:grid-cols-2">
          {/* SEARCH DISCOVERY */}
          <article className="flex flex-col justify-between bg-frame-accent/10 p-7 md:p-8">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                YouTube Search Discovery
              </span>
              <h3 className="mt-3 font-heading text-xl font-bold uppercase leading-tight tracking-tight text-frame-fg md:text-2xl">
                YouTube Search helps viewers find videos related to their queries
              </h3>
              <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
                We consider the signals that shape how a video matches a search.
              </p>
            </div>

            <div className="mt-6 border-t-2 border-frame-accent/30 pt-4">
              <ul className="grid gap-2 sm:grid-cols-2">
                {searchSignals.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm font-medium leading-snug text-frame-fg">
                    <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-frame-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 border-l-2 border-frame-accent bg-frame-bg p-3 text-xs font-medium leading-relaxed text-frame-muted-fg">
                Search optimization is not about inserting keywords everywhere. It is about creating a
                useful video that clearly addresses the topic a viewer is looking for.
              </p>
            </div>
          </article>

          {/* PACKAGING */}
          <article className="flex flex-col justify-between bg-frame-bg p-7 md:p-8">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                Video Packaging: Titles &amp; Thumbnails
              </span>
              <h3 className="mt-3 font-heading text-xl font-bold uppercase leading-tight tracking-tight text-frame-fg md:text-2xl">
                Your title and thumbnail form the first impression of a video
              </h3>
              <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
                We work to make the packaging meet five standards.
              </p>
            </div>

            <div className="mt-6 border-t-2 border-frame-border/60 pt-4">
              <ul className="flex flex-wrap gap-2">
                {packaging.map((item) => (
                  <li
                    key={item}
                    className="border border-frame-accent/50 bg-frame-accent/5 px-2.5 py-1 text-[11px] font-semibold text-frame-fg"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-5 border-l-2 border-frame-accent bg-frame-muted/10 p-3 text-xs font-medium leading-relaxed text-frame-muted-fg">
                We avoid misleading clickbait because a strong click means little if the video fails to
                deliver what the viewer expected. YouTube identifies titles and thumbnails as important
                parts of content packaging and recommends evaluating them in the context of audience
                response and performance.
              </p>
            </div>
          </article>

          {/* RETENTION */}
          <article className="flex flex-col justify-between bg-frame-bg p-7 md:p-8">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                Viewer Retention &amp; Engagement
              </span>
              <h3 className="mt-3 font-heading text-xl font-bold uppercase leading-tight tracking-tight text-frame-fg md:text-2xl">
                Getting someone to click is only the beginning
              </h3>
              <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
                The video must then deliver enough value to keep viewers engaged. We analyze:
              </p>
            </div>

            <div className="mt-6 border-t-2 border-frame-border/60 pt-4">
              <ul className="grid gap-2 sm:grid-cols-2">
                {retention.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm font-medium leading-snug text-frame-fg">
                    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center border border-frame-accent bg-frame-accent/10 text-frame-accent">
                      <svg className="h-2.5 w-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 border-l-2 border-frame-accent bg-frame-muted/10 p-3 text-xs font-medium leading-relaxed text-frame-muted-fg">
                YouTube provides retention data to help creators understand where viewers stay, leave,
                rewatch, or lose interest. These insights can influence future scripts, editing, hooks,
                structure, and content topics.
              </p>
            </div>
          </article>

          {/* SATISFACTION */}
          <article className="flex flex-col justify-between bg-frame-accent/10 p-7 md:p-8">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                Viewer Satisfaction &amp; Content Value
              </span>
              <h3 className="mt-3 font-heading text-xl font-bold uppercase leading-tight tracking-tight text-frame-fg md:text-2xl">
                Views alone do not tell the whole story
              </h3>
              <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
                A successful content strategy should consider whether viewers found the video useful,
                enjoyable, relevant, or worth returning to. YouTube&rsquo;s recommendation guidance
                describes content performance through three broad areas: appeal, engagement, and
                satisfaction.
              </p>
            </div>

            <div className="mt-6 border-t-2 border-frame-accent/30 pt-4">
              <div className="grid gap-2 sm:grid-cols-3">
                {['Appeal', 'Engagement', 'Satisfaction'].map((area) => (
                  <div key={area} className="border-2 border-frame-border bg-frame-bg p-4 text-center">
                    <span className="block text-[10px] font-black uppercase tracking-[0.2em] text-frame-accent">
                      Content performance
                    </span>
                    <span className="mt-1 block font-heading text-sm font-bold uppercase tracking-tight text-frame-fg">
                      {area}
                    </span>
                  </div>
                ))}
              </div>
              <p className="mt-5 border-l-2 border-frame-accent bg-frame-bg p-3 text-xs font-semibold leading-relaxed text-frame-fg">
                Our focus stays on creating content that earns attention and delivers on the promise made
                by the title and thumbnail.
              </p>
            </div>
          </article>
        </div>

        <div className="mt-10 grid gap-6 border-t-2 border-frame-border pt-8 lg:grid-cols-2">
          <div className="border-2 border-frame-border bg-frame-bg p-6 md:p-7">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              External factors we plan around
            </span>
            <ul className="mt-4 flex flex-wrap gap-2">
              {external.map((item) => (
                <li
                  key={item}
                  className="border border-frame-border bg-frame-muted/10 px-2.5 py-1 text-[11px] font-semibold text-frame-fg"
                >
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
              YouTube specifically identifies topic interest, competition, and seasonality as external
              factors that can affect content reach. We use these factors when planning content rather
              than treating every performance change as an SEO issue.
            </p>
          </div>

          <div className="flex flex-col justify-center border-2 border-frame-accent bg-frame-accent/10 p-6 md:p-7">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              The complete viewer experience
            </span>
            <p className="mt-4 text-sm font-semibold leading-relaxed text-frame-fg md:text-base">
              Our strategy therefore focuses on the whole experience: something worth searching for,
              something worth clicking, and something worth watching to the end.
            </p>
            <div className="mt-6">
              <PosterButton href="/contact">Get a Free Consultation &rarr;</PosterButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
