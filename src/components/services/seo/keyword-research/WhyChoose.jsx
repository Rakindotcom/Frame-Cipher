import { SectionIntro } from '../../../Kinetic'

const reasons = [
  {
    title: 'Realistic Ranking Potential',
    body: 'We do not build strategies around thousands of high-volume terms simply because a tool says they have demand. We evaluate the competitive environment, your website\u2019s position, business relevance, and the likely effort required to compete. The result is a more practical keyword strategy for both established and growing websites.',
  },
  {
    title: 'Search Intent Before Search Volume',
    body: 'Search volume tells you how often a term may be searched. It does not tell you what the searcher wants. We evaluate the SERP and search intent before deciding what page should target a keyword. This helps prevent situations where strong content is created for the wrong query or page type.',
  },
  {
    title: 'SEO + Content + Development in One Team',
    body: 'Keyword decisions often affect more than content. They can influence page architecture, URL structure, internal linking, content production, technical implementation, landing-page creation, and conversion paths. Framecipher brings SEO, content, and development into one in-house workflow so keyword research can be connected to implementation.',
  },
  {
    title: 'Bangladesh & International Research Experience',
    body: 'Framecipher is based in Dhaka and supports businesses in Bangladesh and international markets. We can adapt keyword research to local, national, multilingual, and international search environments instead of applying one market\u2019s terminology and search behavior to every project.',
  },
]

export default function WhyChoose() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="The Framecipher difference" title="Why Choose Framecipher for Keyword Research">
          Keyword research is only useful when it is honest about opportunity and organized for
          execution.
        </SectionIntro>

        <div className="grid gap-6 sm:grid-cols-2">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="flex flex-col border-2 border-frame-border bg-frame-muted/30 p-7 transition-colors hover:border-frame-accent md:p-8"
            >
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                Reason 0{index + 1}
              </span>
              <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                {reason.title}
              </h3>
              <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
                {reason.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}