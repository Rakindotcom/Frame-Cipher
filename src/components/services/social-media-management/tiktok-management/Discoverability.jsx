import { SectionIntro, PosterButton } from '../../../Kinetic'

const searchAngles = [
  'Questions',
  'Problems',
  'Comparisons',
  'Use cases',
  'Tutorials',
  'Product decisions',
  'Service-related topics',
]

const captions = [
  'Clarify the topic',
  'Reinforce the message',
  'Support accessibility',
  'Improve content comprehension',
  'Naturally incorporate relevant terminology',
]

const profileAnswers = [
  'Who you are',
  'What you offer',
  'Who you serve',
  'Why someone should follow you',
  'What action someone can take next',
]

const profileElements = [
  'Bio messaging',
  'Brand positioning',
  'Profile information',
  'Visual consistency',
  'Available calls to action',
  'Link strategy where available',
  'Pinned-video planning',
]

const pinnedQuestions = ['Who are we?', 'What do we offer?', 'Why should you trust us?', 'What should you watch first?']

const research = [
  'Customer questions',
  'Product-related searches',
  'Service topics',
  'Industry terminology',
  'Problem-based searches',
  'Comparison topics',
  'Educational opportunities',
  'Competitor content gaps',
]

const feedInto = ['Video ideas', 'Scripts', 'Hooks', 'Captions', 'On-screen text', 'Publishing plans']

const relationship = ['What people want', 'What they search or explore', 'What your content answers']

function FlowStrip({ items = [], className = '' }) {
  return (
    <ul className={`flex flex-wrap items-center gap-2 ${className}`}>
      {items.map((entry, index) => (
        <li key={entry} className="flex items-center gap-2">
          <span className="border border-frame-border/80 bg-frame-bg px-3 py-1.5 text-xs font-bold text-frame-fg">
            {entry}
          </span>
          {index < items.length - 1 && (
            <span aria-hidden="true" className="font-bold text-frame-accent">
              &rarr;
            </span>
          )}
        </li>
      ))}
    </ul>
  )
}

export default function Discoverability() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Search &amp; discovery"
          title="TikTok Search &amp; Content Discoverability"
        >
          TikTok is not only a scrolling environment. People can also use the platform to discover
          information, products, businesses, creators, and ideas. That makes discoverability an important
          part of professional TikTok management.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border lg:grid-cols-2">
          {/* SEARCH-AWARE CONTENT */}
          <article className="flex flex-col justify-between bg-frame-accent/10 p-7 md:p-8">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                Search-Aware Content
              </span>
              <h3 className="mt-3 font-heading text-xl font-bold uppercase leading-tight tracking-tight text-frame-fg md:text-2xl">
                Content built around what people want to discover
              </h3>
              <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
                We create content around topics people may actually want to discover.
              </p>
              <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
                Instead of producing a generic video about a product, we can build content around the
                questions, problems, comparisons, use cases, tutorials, product decisions, and
                service-related topics your audience is exploring.
              </p>
            </div>

            <div className="mt-6 border-t-2 border-frame-accent/30 pt-4">
              <ul className="flex flex-wrap gap-2">
                {searchAngles.map((entry) => (
                  <li
                    key={entry}
                    className="border border-frame-accent/50 bg-frame-accent/5 px-2.5 py-1 text-[11px] font-semibold text-frame-fg"
                  >
                    {entry}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm font-semibold leading-relaxed text-frame-fg md:text-base">
                This creates a clearer relationship between:
              </p>
              <FlowStrip items={relationship} className="mt-3" />
            </div>
          </article>

          {/* CAPTIONS & ON-SCREEN TEXT */}
          <article className="flex flex-col justify-between bg-frame-bg p-7 md:p-8">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                Captions &amp; On-Screen Text
              </span>
              <h3 className="mt-3 font-heading text-xl font-bold uppercase leading-tight tracking-tight text-frame-fg md:text-2xl">
                Context around the video
              </h3>
              <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
                Captions and on-screen text help provide context around a video. We use them to:
              </p>
            </div>

            <div className="mt-6 border-t-2 border-frame-border/60 pt-4">
              <ul className="grid gap-2 sm:grid-cols-2">
                {captions.map((entry) => (
                  <li key={entry} className="flex items-start gap-2.5 text-sm font-medium leading-snug text-frame-fg">
                    <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-frame-accent" />
                    <span>{entry}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 border-l-2 border-frame-accent bg-frame-muted/10 p-3 text-xs font-medium leading-relaxed text-frame-muted-fg">
                We avoid forcing keywords into captions or on-screen text. The goal is useful, readable
                content first.
              </p>
            </div>
          </article>

          {/* PROFILE & BIO */}
          <article className="flex flex-col justify-between bg-frame-bg p-7 md:p-8">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                Profile &amp; Bio Optimization
              </span>
              <h3 className="mt-3 font-heading text-xl font-bold uppercase leading-tight tracking-tight text-frame-fg md:text-2xl">
                What your profile should communicate quickly
              </h3>
              <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
                Your profile should quickly communicate:
              </p>
            </div>

            <div className="mt-6 border-t-2 border-frame-border/60 pt-4">
              <ul className="grid gap-2 sm:grid-cols-2">
                {profileAnswers.map((entry) => (
                  <li
                    key={entry}
                    className="flex items-center gap-2.5 border-2 border-frame-border bg-frame-muted/10 px-3 py-2 text-xs font-semibold text-frame-fg md:text-sm"
                  >
                    <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 bg-frame-accent" />
                    {entry}
                  </li>
                ))}
              </ul>

              <span className="mt-6 block text-[10px] font-black uppercase tracking-[0.2em] text-frame-accent">
                Profile optimization can include
              </span>
              <ul className="mt-3 flex flex-wrap gap-2">
                {profileElements.map((entry) => (
                  <li
                    key={entry}
                    className="border border-frame-accent/50 bg-frame-accent/5 px-2.5 py-1 text-[11px] font-semibold text-frame-fg"
                  >
                    {entry}
                  </li>
                ))}
              </ul>

              <p className="mt-6 text-sm font-semibold leading-relaxed text-frame-fg md:text-base">
                Where appropriate, we can organize pinned videos around important first-visit questions
                such as:
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {pinnedQuestions.map((entry) => (
                  <li
                    key={entry}
                    className="border border-frame-border bg-frame-bg px-2.5 py-1 text-[11px] font-semibold text-frame-fg"
                  >
                    {entry}
                  </li>
                ))}
              </ul>
            </div>
          </article>

          {/* TOPIC & KEYWORD RESEARCH */}
          <article className="flex flex-col justify-between bg-frame-accent/10 p-7 md:p-8">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                Topic &amp; Keyword Research
              </span>
              <h3 className="mt-3 font-heading text-xl font-bold uppercase leading-tight tracking-tight text-frame-fg md:text-2xl">
                TikTok keyword research is not simply about collecting high-volume terms
              </h3>
              <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
                We look for topics that connect audience interest with your business. Research may include:
              </p>
            </div>

            <div className="mt-6 border-t-2 border-frame-accent/30 pt-4">
              <ul className="grid gap-2 sm:grid-cols-2">
                {research.map((entry) => (
                  <li key={entry} className="flex items-start gap-2.5 text-sm font-medium leading-snug text-frame-fg">
                    <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-frame-accent" />
                    <span>{entry}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-5 text-sm font-semibold leading-relaxed text-frame-fg md:text-base">
                These insights can then feed into:
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {feedInto.map((entry) => (
                  <li
                    key={entry}
                    className="border border-frame-accent/50 bg-frame-accent/5 px-2.5 py-1 text-[11px] font-semibold text-frame-fg"
                  >
                    {entry}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </div>

        <div className="mt-10 flex flex-col gap-6 border-t-2 border-frame-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-3xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
            Discoverability is treated as part of professional management, not as an optional extra added
            after production.
          </p>
          <div className="shrink-0">
            <PosterButton href="/contact" variant="outline">
              Get Your Free TikTok Audit &rarr;
            </PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
