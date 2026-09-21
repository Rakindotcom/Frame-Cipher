import { growthCaseStudies } from '../../../../data/growthWork'
import { SectionIntro, PosterButton } from '../../../Kinetic'
import CaseStudyPortfolioCard from '../../../case-studies/CaseStudyPortfolioCard'

const localSeoCaseStudies = growthCaseStudies.filter(
  (study) => study.tags?.includes('Local SEO') || study.slug.endsWith('-local-seo')
)

const documentation = [
  ['Business Challenge', 'What local search problem existed before the campaign?'],
  ['Strategy', 'Which local SEO areas were addressed?'],
  ['Implementation', 'What changes were made across the website, Google Business Profile, content, citations, reviews, or authority?'],
  ['Results', 'Verified changes in local visibility, organic traffic, calls, website actions, leads, and relevant ranking improvements.'],
  ['Business Impact', 'How the search improvements affected customer acquisition or other measurable business outcomes.'],
]

export default function CaseStudies() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Verified local SEO work"
          title="Local SEO Results & Case Studies"
        >
          Real results provide stronger evidence than generic claims. This section features
          verified Framecipher projects with measurable data whenever suitable case studies are
          available.
        </SectionIntro>

        {localSeoCaseStudies.length > 0 && (
          <div className="grid gap-8 sm:grid-cols-2">
            {localSeoCaseStudies.map((study, index) => (
              <CaseStudyPortfolioCard key={study.slug} study={study} index={index} />
            ))}
          </div>
        )}

        <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              How each case study is documented
            </span>
            <div className="mt-5 space-y-3">
              {documentation.map(([label, body], index) => (
                <div key={label} className="border-l-2 border-frame-accent bg-frame-muted/10 p-4 md:p-5">
                  <h3 className="font-heading text-base font-bold uppercase tracking-tight text-frame-fg">
                    {label}
                  </h3>
                  <p className="mt-1 text-sm font-medium leading-relaxed text-frame-muted-fg">
                    {body}
                  </p>
                  <span className="mt-2 block text-[0.65rem] font-mono font-bold uppercase tracking-wider text-frame-muted-fg">
                    Section 0{index + 1}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-5">
            <div className="border-2 border-frame-border bg-frame-muted/10 p-6 md:p-7">
              <h3 className="font-heading text-lg font-bold uppercase tracking-tight text-frame-fg">
                Measurable data only
              </h3>
              <p className="mt-3 text-sm font-medium leading-relaxed text-frame-muted-fg">
                We publish only results that can be supported by actual project data, tracked
                through verified reporting such as Google Business Profile insights, search
                consoles, and analytics platforms.
              </p>
            </div>
            <div className="border-l-2 border-frame-border bg-frame-muted/10 p-6 md:p-7">
              <p className="text-sm font-medium leading-relaxed text-frame-muted-fg">
                Verified Framecipher local SEO projects are featured above wherever suitable
                case studies with measurable data are available.
              </p>
            </div>
            <PosterButton href="/case-studies">View All Case Studies</PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}