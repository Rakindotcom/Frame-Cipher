import Link from 'next/link'
import { getServiceBySlug } from '../data/agency'
import { CTASection, PageHero, PosterButton, SectionIntro, TypeMarquee } from '../components/Kinetic'

export default function IndustryLandingPage({ page }) {
  const relatedServices = page.relatedServiceSlugs.map((slug) => getServiceBySlug(slug)).filter(Boolean)

  return (
    <main className="bg-frame-bg text-frame-fg">
      <PageHero
        eyebrow={page.keyword}
        meta="Industry landing page / Dhaka and Bangladesh"
        number="IND"
        title={page.title}
        actions={
          <>
            <PosterButton href="/contact">Get a 360 Growth Audit</PosterButton>
            {page.caseStudyPath && <PosterButton href={page.caseStudyPath} variant="outline">See case study</PosterButton>}
          </>
        }
      >
        {page.intro}
      </PageHero>

      <TypeMarquee items={[page.keyword, ...page.deliverables.slice(0, 4)]} accent slow />

      <section className="px-4 py-24 md:px-8 md:py-32">
        <div className="mx-auto grid max-w-[95vw] gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionIntro eyebrow="Problem" title="What this fixes.">
            A strong industry page should speak to the buying situation, not just list services.
          </SectionIntro>
          <div className="grid gap-px bg-frame-border">
            {page.problems.map(([title, text], index) => (
              <article key={title} className="bg-frame-bg p-7 md:p-10">
                <p className="font-heading text-5xl font-bold leading-none tracking-tighter text-frame-muted">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <h2 className="mt-7 font-heading text-2xl font-bold uppercase leading-none tracking-tighter text-frame-fg md:text-3xl">
                  {title}
                </h2>
                <p className="mt-5 text-base font-medium leading-tight text-frame-muted-fg md:text-lg">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y-2 border-frame-border bg-frame-muted px-4 py-24 md:px-8 md:py-32">
        <div className="mx-auto grid max-w-[95vw] gap-px bg-frame-border lg:grid-cols-2">
          <ListBlock title="Who it is for" items={page.who} />
          <ListBlock title="What Frame Cipher delivers" items={page.deliverables} />
        </div>
      </section>

      <section className="px-4 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-[95vw]">
          <SectionIntro eyebrow="Process" title="How we move from brief to campaign." />
          <div className="grid gap-px bg-frame-border md:grid-cols-5">
            {page.process.map((step, index) => (
              <article key={step} className="min-h-56 bg-frame-bg p-6">
                <p className="font-heading text-5xl font-bold leading-none tracking-tighter text-frame-muted">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <h2 className="mt-8 font-heading text-xl font-bold uppercase leading-none tracking-tighter text-frame-fg">
                  {step}
                </h2>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y-2 border-frame-border bg-frame-accent px-4 py-24 text-frame-accent-fg md:px-8 md:py-32">
        <div className="mx-auto grid max-w-[95vw] gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] opacity-80">Sample outputs</p>
            <h2 className="mt-5 font-heading text-[clamp(2.3rem,7vw,5rem)] font-bold uppercase leading-[0.82] tracking-tighter">
              Useful assets, not just activity.
            </h2>
          </div>
          <div className="grid gap-3">
            {page.sampleOutputs.map((item) => (
              <p key={item} className="border-2 border-frame-accent-fg px-5 py-4 text-base font-black uppercase leading-tight tracking-tighter">
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-[95vw]">
          <SectionIntro eyebrow="Internal links" title="Related services." />
          <div className="grid gap-px bg-frame-border md:grid-cols-2 lg:grid-cols-3">
            {relatedServices.map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`} className="group bg-frame-bg p-7 transition-colors hover:bg-frame-accent">
                <p className="text-xs font-black uppercase tracking-[0.26em] text-frame-accent transition-colors group-hover:text-frame-accent-fg/70">
                  {service.navTitle}
                </p>
                <h2 className="mt-5 font-heading text-2xl font-bold uppercase leading-none tracking-tighter text-frame-fg transition-colors group-hover:text-frame-accent-fg">
                  {service.title}
                </h2>
                <p className="mt-5 text-base font-medium leading-tight text-frame-muted-fg transition-colors group-hover:text-frame-accent-fg/80">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection title={`Need ${page.keyword}?`} primaryText="Get a 360 Growth Audit">
        Share the industry, offer, target customer, and launch goal. Frame Cipher will map the campaign, content, page, and tracking system around it.
      </CTASection>
    </main>
  )
}

function ListBlock({ title, items }) {
  return (
    <article className="bg-frame-bg p-7 md:p-10">
      <h2 className="font-heading text-[clamp(1.8rem,4vw,3rem)] font-bold uppercase leading-[0.85] tracking-tighter text-frame-fg">
        {title}
      </h2>
      <ul className="mt-10 grid gap-px bg-frame-border">
        {items.map((item) => (
          <li key={item} className="bg-frame-bg p-5 text-lg font-medium leading-tight text-frame-muted-fg md:text-xl">
            {item}
          </li>
        ))}
      </ul>
    </article>
  )
}
