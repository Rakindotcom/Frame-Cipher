import { SectionIntro, PosterButton } from '../../../Kinetic'

const problems = [
  {
    title: 'Irrelevant Search Traffic',
    body: [
      'Not every click is a useful click. We identify search terms that attract traffic without meaningful commercial intent and use negative keywords, match-type strategy, campaign restructuring, and targeting adjustments to reduce avoidable waste.',
    ],
  },
  {
    title: 'Inaccurate Conversion Tracking',
    body: [
      'A campaign can appear successful or unsuccessful for the wrong reason when conversion data is incomplete, duplicated, misconfigured, or disconnected from the actual customer journey. We audit tracking before making major optimization decisions so the account is working with better signals.',
    ],
  },
  {
    title: 'Poor Campaign Structure',
    body: [
      'Overly broad structures can make it difficult to control budgets and understand performance. Overly fragmented structures can create unnecessary complexity and divide data across too many campaigns. We restructure accounts around meaningful business objectives, search themes, products, services, and markets.',
    ],
  },
  {
    title: 'Weak Ad-to-Landing-Page Relevance',
    body: [
      'A relevant ad followed by an unrelated or difficult landing page creates friction. We review the path from search query to ad to landing page to conversion and identify mismatches that can weaken both user experience and campaign efficiency.',
    ],
  },
  {
    title: 'Shopping Feed & Product Data Issues',
    body: [
      'Incorrect or incomplete product information can affect how products are understood, matched, and advertised. We review Merchant Center data and product-level issues alongside campaign performance so ecommerce optimization is not limited to bid changes.',
    ],
  },
]

export default function ProblemsWeFix() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Account rescue"
          title="Common Google Ads Problems We Fix"
        >
          Many underperforming accounts are not failing because the offer is weak. They are
          failing because of structural, targeting, or tracking problems inside the account.
        </SectionIntro>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="flex flex-col justify-between border-2 border-frame-border bg-frame-bg p-7 md:p-8 transition-colors hover:border-frame-accent"
            >
              <div>
                <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                  Problem 0{index + 1}
                </span>
                <h3 className="mt-3 font-heading text-xl font-bold uppercase tracking-tight text-frame-fg">
                  {problem.title}
                </h3>
                <div className="mt-4 space-y-3 text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {problem.body.map((paragraph, pIdx) => (
                    <p key={pIdx}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}

          <div className="flex flex-col justify-between border-2 border-frame-accent bg-frame-accent/5 p-7 md:p-8">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                Your account
              </span>
              <h3 className="mt-3 font-heading text-xl font-bold uppercase tracking-tight text-frame-fg">
                Not sure which problem your account has?
              </h3>
              <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
                Every engagement starts with an account review that identifies what is actually
                happening before any changes are made.
              </p>
            </div>
            <div className="mt-6">
              <PosterButton href="/contact" className="w-full text-xs">
                Get Your Account Reviewed
              </PosterButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}