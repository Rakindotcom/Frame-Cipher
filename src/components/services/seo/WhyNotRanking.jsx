import { SectionIntro } from '../../Kinetic'

const reasons = [
  {
    title: 'Technical & Indexing Problems',
    body: 'Search engines need to access, render, understand, and index your important pages. Crawl issues, incorrect canonical tags, broken redirects, blocked resources, duplicate URLs, rendering problems, or poor site architecture can limit visibility.',
  },
  {
    title: 'Search Intent Mismatch',
    body: 'A page can target the right keyword but still fail to satisfy the reason behind the search. For example, an informational query may require an educational resource while a commercial query may require a detailed service or product page.',
  },
  {
    title: 'Weak or Thin Content',
    body: 'Pages with limited useful information may struggle when competing against resources that address the topic more completely. The solution is not simply adding more words. The content needs to answer the query clearly, cover relevant subtopics, and provide a useful experience.',
  },
  {
    title: 'Poor Internal Linking',
    body: 'Important pages need to be discoverable and connected within the website. A weak internal-link structure can make it harder for search engines and users to understand which pages are important and how different topics relate to one another.',
  },
  {
    title: 'Weak Authority & Relevant Links',
    body: 'Competitive searches often require stronger authority signals. Relevant, trustworthy references from other websites can help establish the credibility and importance of a page. Quality matters more than simply increasing backlink volume.',
  },
  {
    title: 'Stronger Competition in the SERPs',
    body: 'Your competitors may have stronger content, better site architecture, greater authority, stronger brand signals, or years of accumulated search visibility. A useful SEO strategy identifies those differences instead of assuming that changing a few keywords will solve the problem.',
  },
]

export default function WhyNotRanking() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Common limitations"
          title="Why Is Your Website Not Ranking?"
        >
          A website can have good products or services and still struggle to gain organic
          visibility. The cause is rarely just one missing keyword.
        </SectionIntro>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <div key={index} className="flex flex-col justify-between border-2 border-frame-border bg-frame-bg p-7 md:p-8 transition-colors hover:border-frame-accent">
              <div>
                <span className="font-heading text-4xl font-bold leading-none tracking-tighter text-frame-muted">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-5 font-heading text-xl font-bold uppercase tracking-tight text-frame-fg">
                  {reason.title}
                </h3>
                <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {reason.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}