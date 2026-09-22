import { SectionIntro, PosterButton } from '../../../Kinetic'

const problems = [
  {
    title: 'Poor ICP Definition',
    body: [
      'A LinkedIn campaign cannot target the right professional audience if the business has not clearly defined whom it wants to acquire. We translate the sales team\u2019s understanding of the ideal customer into practical targeting criteria.',
    ],
  },
  {
    title: 'Overly Broad Professional Targeting',
    body: [
      'Adding more job titles, industries, and company sizes does not automatically produce a better audience. We review whether targeting reflects the actual customer profile and buying committee without creating unnecessary audience fragmentation.',
    ],
  },
  {
    title: 'High Lead Volume but Low Lead Quality',
    body: [
      'A large number of submissions can hide a weak campaign. We evaluate leads against the business\u2019s actual qualification criteria so reporting can distinguish between form volume and commercially relevant prospects.',
    ],
  },
  {
    title: 'Weak B2B Creative & Messaging',
    body: [
      'Professional audiences still need a reason to engage. We identify whether the campaign clearly communicates the problem, value, proof, differentiation, and next step for the audience being targeted.',
    ],
  },
  {
    title: 'Campaigns Disconnected From Sales',
    body: [
      'Stopping measurement at the form submission makes it difficult to understand whether advertising is producing useful opportunities. Where CRM or qualified-lead data is available, we connect campaign measurement with the downstream sales process.',
    ],
  },
  {
    title: 'Fragmented Account Structure',
    body: [
      'Too many campaigns or narrow audience segments can divide budget and make performance harder to interpret. We consolidate or restructure campaigns where the available data and objectives support a simpler account structure.',
    ],
  },
  {
    title: 'Weak Conversion & Attribution Measurement',
    body: [
      'Incomplete tracking can lead to misleading reporting and weaker optimization signals. We review the Insight Tag, conversion definitions, CRM or CAPI connections, UTM structure, and data flow where applicable.',
    ],
  },
]

export default function ProblemsWeFix() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Account rescue"
          title="Common LinkedIn Ads Problems We Fix"
        >
          Underperforming LinkedIn accounts are usually not failing because the platform is weak.
          They are failing because of targeting, creative, structure, or measurement problems
          inside the account.
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