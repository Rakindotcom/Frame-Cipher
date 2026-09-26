import { SectionIntro, PosterButton } from '../../../Kinetic'

const libraryTopics = [
  'Customer questions',
  'Industry topics',
  'Product education',
  'Service explanations',
  'Comparisons',
  'Tutorials',
  'Common problems',
  'Expert insights',
]

const updateChecks = [
  'Topic relevance',
  'Title',
  'Thumbnail',
  'Introduction',
  'Retention',
  'Search intent',
  'Traffic sources',
  'Audience response',
]

const entryPoints = [
  'YouTube Search',
  'Recommended content',
  'Shorts',
  'Channel browsing',
  'Playlists',
  'Related videos',
  'External website traffic',
  'Social media distribution',
]

const authorityApproach = [
  'Customer problems',
  'Recurring questions',
  'Products',
  'Areas of expertise',
]

export default function LongTerm() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Compounding value"
          title="Why YouTube Content Can Create Long-Term Discovery Opportunities"
        >
          Unlike fast-moving social feeds, YouTube videos can continue generating discovery
          opportunities after publication when the topic remains relevant and viewers continue to find
          value in the content. That makes a well-managed video library a potential long-term business
          asset.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border md:grid-cols-2">
          {/* LIBRARY */}
          <article className="flex flex-col justify-between bg-frame-accent/10 p-7 md:p-8">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                01 / Build a Valuable Video Library
              </span>
              <h3 className="mt-3 font-heading text-xl font-bold uppercase leading-tight tracking-tight text-frame-fg md:text-2xl">
                Every useful video becomes another entry point into your brand
              </h3>
              <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
                Over time, a well-organized library can cover:
              </p>
            </div>

            <div className="mt-6 border-t-2 border-frame-accent/30 pt-4">
              <ul className="grid gap-2 sm:grid-cols-2">
                {libraryTopics.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm font-medium leading-snug text-frame-fg">
                    <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-frame-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 border-l-2 border-frame-accent bg-frame-bg p-3 text-xs font-medium leading-relaxed text-frame-muted-fg">
                A larger library can also give new viewers more relevant content to explore after
                discovering your channel. YouTube recommends building a substantial library of
                high-quality content to help viewers go deeper into a channel.
              </p>
            </div>
          </article>

          {/* UPDATE UNDERPERFORMING */}
          <article className="flex flex-col justify-between bg-frame-bg p-7 md:p-8">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                02 / Update Underperforming Content
              </span>
              <h3 className="mt-3 font-heading text-xl font-bold uppercase leading-tight tracking-tight text-frame-fg md:text-2xl">
                Not every video performs as expected
              </h3>
              <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
                Instead of immediately abandoning it, we can review:
              </p>
            </div>

            <div className="mt-6 border-t-2 border-frame-border/60 pt-4">
              <ul className="grid gap-2 sm:grid-cols-2">
                {updateChecks.map((item) => (
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
                Where appropriate, updating packaging can change how viewers respond to a video. YouTube
                notes that changing titles or thumbnails can affect performance because it changes how
                viewers interact with the video.
              </p>
            </div>
          </article>

          {/* ENTRY POINTS */}
          <article className="flex flex-col justify-between bg-frame-bg p-7 md:p-8">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                03 / Create Multiple Discovery Entry Points
              </span>
              <h3 className="mt-3 font-heading text-xl font-bold uppercase leading-tight tracking-tight text-frame-fg md:text-2xl">
                Your channel should not depend on one type of viewer discovery
              </h3>
              <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
                We can build content around:
              </p>
            </div>

            <div className="mt-6 border-t-2 border-frame-border/60 pt-4">
              <ul className="flex flex-wrap gap-2">
                {entryPoints.map((item) => (
                  <li
                    key={item}
                    className="border border-frame-accent/50 bg-frame-accent/5 px-2.5 py-1 text-[11px] font-semibold text-frame-fg"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm font-medium leading-relaxed text-frame-muted-fg">
                Different discovery paths allow different audiences to enter your content ecosystem.
              </p>
            </div>
          </article>

          {/* TOPIC AUTHORITY */}
          <article className="flex flex-col justify-between bg-frame-accent/10 p-7 md:p-8">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                04 / Build Topic Authority Over Time
              </span>
              <h3 className="mt-3 font-heading text-xl font-bold uppercase leading-tight tracking-tight text-frame-fg md:text-2xl">
                Consistently covering relevant topics can establish your brand as a useful source
              </h3>
              <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
                That does not mean publishing the same topic repeatedly. Instead, we build connected
                content around important areas of your business.
              </p>
            </div>

            <div className="mt-6 border-t-2 border-frame-accent/30 pt-4">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-frame-accent">
                We build connected content around
              </span>
              <ul className="mt-3 flex flex-wrap gap-2">
                {authorityApproach.map((item) => (
                  <li
                    key={item}
                    className="border border-frame-border bg-frame-bg px-2.5 py-1 text-[11px] font-semibold text-frame-fg"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <PosterButton href="/contact" variant="outline">
                  Get a Free Consultation &rarr;
                </PosterButton>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
