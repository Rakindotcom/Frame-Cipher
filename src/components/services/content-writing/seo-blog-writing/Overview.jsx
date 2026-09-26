import { SectionIntro, PosterButton } from '../../../Kinetic'

export default function Overview() {
  return (
    <section className="border-y-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Content approach"
          title="SEO Content Built to Be Found, Understood, and Useful"
        >
          Ranking is only part of the job.
        </SectionIntro>

        <div className="grid gap-10 border-t-2 border-frame-border pt-12 lg:grid-cols-[1.3fr_0.7fr] lg:items-start">
          <div className="space-y-5 text-base font-medium leading-relaxed text-frame-muted-fg md:text-lg">
            <p>
              A page needs to match the searcher&rsquo;s intent, provide useful information, communicate
              clearly, and fit into the wider structure of your website.
            </p>
            <p>
              Google&rsquo;s current guidance emphasizes helpful, reliable, people-first content rather than
              content created primarily to manipulate search rankings. SEO works best when it supports that
              goal instead of replacing it.
            </p>
            <p>That is the approach behind our SEO and blog writing service.</p>
          </div>

          <div className="border-2 border-frame-border bg-frame-muted/10 p-7 md:p-8">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              What good SEO content does
            </span>
            <ul className="mt-5 space-y-4">
              {[
                'Match the intent behind the search',
                'Answer the question that was actually asked',
                'Communicate clearly and simply',
                'Build trust through useful detail',
                'Guide the reader toward a next step',
                'Support relevant search visibility',
              ].map((item) => (
                <li
                  key={item}
                  className="border-t-2 border-frame-border/60 pt-4 first:border-t-0 first:pt-0"
                >
                  <span className="font-heading text-sm font-bold uppercase leading-snug tracking-tight text-frame-fg">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-6 border-t-2 border-frame-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-3xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
            Tell us what you want to rank for, who you want to reach, and what your business needs the content
            to accomplish.
          </p>
          <div className="shrink-0">
            <PosterButton href="/contact">Discuss Your SEO Content Needs &rarr;</PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
