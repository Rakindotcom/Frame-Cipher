import { SectionIntro } from '../../../Kinetic'

const issues = [
  {
    title: 'Insufficient or Low-Value Content',
    body: 'Google may reject a site when it contains too little substantive content, is still under construction, or does not provide enough useful information for visitors. We identify pages that need deeper explanations, stronger coverage, better organization, or more original value.',
  },
  {
    title: 'Content Quality or Originality Problems',
    body: 'A site can have many pages and still offer too little original value. We look for thin, repetitive, copied, auto-generated, or weakly differentiated content and identify where meaningful improvements are needed. Google states that publishers should provide unique and relevant content that gives users a reason to visit the site.',
  },
  {
    title: 'Policy or Restricted-Content Issues',
    body: 'Some content can create direct AdSense policy problems, while other categories may fall under publisher restrictions. We review relevant content and implementation risks before you submit rather than assuming that every page is automatically monetization-ready. Google notes that policy compliance is the publisher\u2019s responsibility and that policies may change over time.',
  },
  {
    title: 'Navigation & Site Usability Problems',
    body: 'A confusing website can make it difficult for users to find important information. Google specifically lists site navigation issues as a common reason an application may not be approved. We address broken links, poor organization, inaccessible pages, unfinished sections, and other usability problems that make the site harder to understand.',
  },
  {
    title: 'Traffic Source & Invalid-Traffic Risks',
    body: 'AdSense is not simply a content-quality review. Traffic quality also matters. Google warns against artificially generated clicks or impressions, traffic exchanges, paid-to-click schemes, automated traffic, and other practices that can create invalid traffic. We review obvious traffic-source risks and explain what should be changed before or after monetization.',
  },
  {
    title: 'Unsupported Language or Regional Issues',
    body: 'Google maintains a list of languages supported by its publisher products. Bengali is currently among the supported primary languages. We check whether your site\u2019s primary content and language configuration create an eligibility or monetization issue before submission.',
  },
]

export default function CommonIssues() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Disapproval causes" title="Common Google AdSense Disapproval Issues We Fix">
          The rejection notice may be generic, but the underlying causes are usually specific and
          fixable once the right issue is identified.
        </SectionIntro>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {issues.map((item, index) => (
            <div key={item.title} className="flex flex-col border-2 border-frame-border bg-frame-bg p-7 md:p-8">
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                Issue 0{index + 1}
              </span>
              <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                {item.title}
              </h3>
              <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
                {item.body}
              </p>
              <span aria-hidden="true" className="mt-6 block h-1 w-8 bg-frame-accent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}