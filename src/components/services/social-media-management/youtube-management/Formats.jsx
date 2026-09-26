import { SectionIntro, PosterButton } from '../../../Kinetic'

const longForm = [
  'Tutorials',
  'Product education',
  'Expert commentary',
  'Case studies',
  'Reviews',
  'Demonstrations',
  'Interviews',
  'Educational series',
  'B2B content',
  'Detailed problem-solving content',
]

const shorts = [
  'Quick tips',
  'Short explanations',
  'Product highlights',
  'Expert insights',
  'Frequently asked questions',
  'Repurposed moments',
  'Short demonstrations',
  'Content experiments',
]

const pathway = ['Short', 'Long-Form Video', 'Related Playlist', 'Website or Business CTA']

export default function Formats() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Format strategy"
          title="Long-Form &amp; Shorts: One Channel, Two Content Formats"
        >
          Long-form videos and Shorts can play different roles within the same YouTube strategy. YouTube
          does not state that one format is universally preferred. Different formats serve different
          viewer behaviors, and individual viewers may respond differently to each.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border lg:grid-cols-2">
          <article className="flex flex-col justify-between bg-frame-accent/10 p-7 md:p-8">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                Long-Form Content
              </span>
              <h3 className="mt-3 font-heading text-2xl font-bold uppercase tracking-tight text-frame-fg">
                Useful when your audience needs more depth
              </h3>
              <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
                It can support:
              </p>
            </div>

            <div className="mt-6 border-t-2 border-frame-accent/30 pt-4">
              <ul className="grid gap-2 sm:grid-cols-2">
                {longForm.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm font-medium leading-snug text-frame-fg">
                    <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-frame-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 border-l-2 border-frame-accent bg-frame-bg p-3 text-xs font-medium leading-relaxed text-frame-muted-fg">
                The focus is on delivering the right amount of information without adding unnecessary
                length.
              </p>
            </div>
          </article>

          <article className="flex flex-col justify-between bg-frame-bg p-7 md:p-8">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                YouTube Shorts
              </span>
              <h3 className="mt-3 font-heading text-2xl font-bold uppercase tracking-tight text-frame-fg">
                A faster format for reaching viewers with concise ideas
              </h3>
              <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
                They can be used for:
              </p>
            </div>

            <div className="mt-6 border-t-2 border-frame-border/60 pt-4">
              <ul className="grid gap-2 sm:grid-cols-2">
                {shorts.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm font-medium leading-snug text-frame-fg">
                    <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-frame-muted-fg" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 border-l-2 border-frame-accent bg-frame-muted/10 p-3 text-xs font-medium leading-relaxed text-frame-muted-fg">
                Shorts should have their own creative approach rather than simply becoming shortened
                versions of every long-form video.
              </p>
            </div>
          </article>
        </div>

        <div className="mt-8 border-2 border-frame-border bg-frame-bg p-7 md:p-8">
          <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
            Connecting Shorts and Long-Form
          </span>
          <h3 className="mt-3 font-heading text-lg font-bold uppercase tracking-tight text-frame-fg md:text-2xl">
            They can work together when there is a clear content relationship
          </h3>

          <ul className="mt-6 flex flex-wrap items-center gap-2">
            {pathway.map((step, index) => (
              <li key={step} className="flex items-center gap-2">
                <span
                  className={`px-3 py-1.5 text-xs font-bold ${
                    index === pathway.length - 1
                      ? 'border border-frame-accent bg-frame-accent/10 text-frame-accent'
                      : 'border border-frame-border/80 bg-frame-muted/10 text-frame-fg'
                  }`}
                >
                  {step}
                </span>
                {index < pathway.length - 1 && (
                  <span aria-hidden="true" className="font-bold text-frame-accent">
                    &rarr;
                  </span>
                )}
              </li>
            ))}
          </ul>

          <p className="mt-6 max-w-4xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
            This creates multiple opportunities for viewers to discover your content while allowing
            interested viewers to explore deeper topics. YouTube also notes that viewer interests can
            connect across Shorts and long-form, although viewers do not automatically engage with every
            format.
          </p>

          <div className="mt-6">
            <PosterButton href="/contact">Get a Free Consultation &rarr;</PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
