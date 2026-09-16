import { PageHero, PosterButton } from '../Kinetic'

export default function CaseStudyDetailHero({ study, studyNumber }) {
  return (
    <>
      <PageHero
        eyebrow={study.category}
        meta={`${study.client} · ${study.industry}`}
        number={studyNumber}
        title={study.title}
        actions={
          <>
            <PosterButton href="/contact">Book a strategy call</PosterButton>
            <PosterButton href="/case-studies" variant="outline">
              All case studies
            </PosterButton>
          </>
        }
      >
        {study.summary}
      </PageHero>

      {study.metrics?.length > 0 && (
        <section aria-label="Key performance metrics" className="border-b-2 border-frame-border">
          <div className="mx-auto grid max-w-[95vw] gap-px border-x-2 border-frame-border bg-frame-border sm:grid-cols-2 lg:grid-cols-4">
            {study.metrics.map(([value, label]) => (
              <div key={label} className="bg-frame-muted p-6 md:p-8">
                <p className="font-heading text-4xl font-bold uppercase leading-none tracking-tighter text-frame-accent md:text-5xl">
                  {value}
                </p>
                <p className="mt-3 text-xs font-black uppercase tracking-[0.2em] text-frame-fg">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  )
}
