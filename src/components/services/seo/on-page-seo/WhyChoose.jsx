import { SectionIntro } from '../../../Kinetic'

const reasons = [
  {
    title: 'One In-House Team',
    body: 'Framecipher combines SEO, content, design, and development under one roof. Content recommendations, structural changes, and implementation all connect inside a single team instead of being handed off between separate vendors.',
  },
  {
    title: 'Intent First, Keywords Second',
    body: 'We do not start from a keyword sheet and force terms into a page. We start from the searcher\u2019s intent and the pages currently winning the query, then choose and place keywords naturally within content that serves that intent.',
  },
  {
    title: 'Transparent Recommendations',
    body: 'You can see what should change and why. Content and structural edits are reviewed and approved before publishing, so important pages are never changed without your visibility.',
  },
  {
    title: 'Bangladesh & International Experience',
    body: 'We optimize pages for businesses in Bangladesh and international markets, including the US, UK, Australia, Canada, and UAE, accounting for the search behavior and intent of the audience each market targets.',
  },
]

export default function WhyChoose() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="The Framecipher standard"
          title="Why Choose Framecipher for On-Page SEO"
        >
          On-page SEO works best when it is driven by evidence about the searcher, not by a
          template of what a page should contain.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, index) => (
            <div key={index} className="flex flex-col justify-between bg-frame-bg p-7 md:p-8">
              <div>
                <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                  Standard 0{index + 1}
                </span>
                <h3 className="mt-3 font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg">
                  {reason.title}
                </h3>
                <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {reason.body}
                </p>
              </div>
              <span aria-hidden="true" className="mt-6 block h-1 w-8 bg-frame-accent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}