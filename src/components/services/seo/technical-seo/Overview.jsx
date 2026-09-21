import { SectionIntro, PosterButton } from '../../../Kinetic'

export default function Overview() {
  return (
    <section className="bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Why it matters"
          title="Technical SEO That Fixes What Holds Rankings Back"
        >
          Strong content cannot perform to its full potential when technical problems prevent
          search engines from accessing, rendering, or indexing important pages.
        </SectionIntro>

        <div className="grid gap-10 border-t-2 border-frame-border pt-12 lg:grid-cols-[1.3fr_0.7fr] lg:items-start">
          <div className="space-y-5 text-base font-medium leading-relaxed text-frame-muted-fg md:text-lg">
            <p>
              We start by identifying the issues that matter most to your website instead of
              applying the same checklist to every project. Our technical SEO work connects
              website infrastructure with search visibility, user experience, and long-term SEO
              performance.
            </p>
            <p>
              From crawl and indexation problems to Core Web Vitals, structured data, JavaScript
              rendering, and technical migrations, we focus on practical fixes that can be
              implemented and verified.
            </p>
          </div>

          <div className="border-2 border-frame-border bg-frame-muted/10 p-7 md:p-8">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              Get Free Consultation
            </span>
            <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
              See what is actually blocking your rankings
            </h3>
            <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
              We review crawlability, indexation, performance, and architecture to identify the
              technical issues holding back your organic visibility before any work begins.
            </p>
            <div className="mt-7">
              <PosterButton href="/contact">Get Free Consultation &rarr;</PosterButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}