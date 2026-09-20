import { SectionIntro, PosterButton } from '../../Kinetic'

export default function Overview() {
  return (
    <section className="border-y-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Strategic Approach"
          title="SEO That Turns Search Visibility Into Business Growth"
        >
          Search Engine Optimization is not simply about getting more visitors. It is about
          helping the right people find the right page when they are actively searching for a
          product, service, solution, or business.
        </SectionIntro>

        <div className="grid gap-10 border-t-2 border-frame-border pt-12 lg:grid-cols-[1.3fr_0.7fr] lg:items-start">
          <div className="space-y-5 text-base font-medium leading-relaxed text-frame-muted-fg md:text-lg">
            <p>
              Framecipher connects technical SEO, search intent, content, website structure,
              authority, and conversion paths into one SEO strategy. Instead of optimizing
              isolated pages or chasing rankings without context, we look at how your entire
              website can attract and convert relevant search demand.
            </p>
            <p>
              We work with startups, SMEs, ecommerce businesses, B2B companies, SaaS businesses,
              and established brands in Bangladesh and international markets. We begin by
              identifying the opportunities and limitations that matter most, then prioritize the
              work based on search potential, business value, and implementation requirements.
            </p>
          </div>

          <div className="border-2 border-frame-border bg-frame-muted/10 p-7 md:p-8">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              Free SEO Audit
            </span>
            <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
              See where your website actually stands
            </h3>
            <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
              We review the factors limiting your organic visibility and identify the search
              opportunities that matter to your business before any work begins.
            </p>
            <div className="mt-7">
              <PosterButton href="/contact">Get a Free SEO Audit &rarr;</PosterButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}