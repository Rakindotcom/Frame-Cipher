import { caseStudyPlaceholders } from '../data/agency'
import { CTASection, PageHero, PosterButton, SectionIntro, TypeMarquee } from '../components/Kinetic'

export default function CaseStudiesPage() {
  return (
    <main className="bg-frame-bg text-frame-fg">
      <PageHero
        eyebrow="Case Studies"
        meta="No fake metrics / real proof slots only"
        number="02"
        title="Proof structures ready for real client stories"
        actions={
          <>
            <PosterButton href="/contact">Book a strategy call</PosterButton>
            <PosterButton href="/projects" variant="outline">View portfolio</PosterButton>
          </>
        }
      >
        This page is prepared for deeper proof across client, industry, problem, objective, services,
        strategy, execution, result, visual assets, and testimonial fields.
      </PageHero>

      <TypeMarquee items={['Problem', 'Objective', 'Strategy', 'Execution', 'Result', 'Proof']} accent />

      <section className="px-4 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-[95vw]">
          <SectionIntro eyebrow="Case architecture" title="Built to hold receipts.">
            The structure is dramatic, but the content stays honest: no invented quotes, no inflated numbers,
            no fake client outcomes.
          </SectionIntro>

          <div className="grid gap-6 lg:grid-cols-2">
            {caseStudyPlaceholders.map((study, index) => (
              <article key={study.client} className="border-2 border-frame-border bg-frame-bg">
                <div className="border-b-2 border-frame-border p-7">
                  <p className="text-xs font-black uppercase tracking-[0.26em] text-frame-accent">
                    0{index + 1} / {study.industry}
                  </p>
                  <h2 className="mt-5 font-heading text-[clamp(1.8rem,4vw,3rem)] font-bold uppercase leading-[0.85] tracking-tighter text-frame-fg">
                    {study.client}
                  </h2>
                </div>
                <dl className="grid bg-frame-border gap-px">
                  <StudyField label="Problem" value={study.problem} />
                  <StudyField label="Objective" value={study.objective} />
                  <StudyField label="Services used" value={study.servicesUsed.join(', ')} />
                  <StudyField label="Strategy" value={study.strategy} />
                  <StudyField label="Execution" value={study.execution} />
                  <StudyField label="Result" value={study.result} />
                  <StudyField label="Visual assets" value="Prepared for project images, video embeds, campaign visuals, and website screenshots." />
                  <StudyField label="Testimonial" value="Reserved for a real client quote when approved." />
                </dl>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Want your project built as a full growth system?">
        Bring us the problem, the goal, and the proof you already have. We will help shape the system around it.
      </CTASection>
    </main>
  )
}

function StudyField({ label, value }) {
  return (
    <div className="bg-frame-bg p-6">
      <dt className="text-xs font-black uppercase tracking-[0.22em] text-frame-accent">{label}</dt>
      <dd className="mt-3 text-base font-medium leading-tight text-frame-muted-fg md:text-lg">{value}</dd>
    </div>
  )
}
