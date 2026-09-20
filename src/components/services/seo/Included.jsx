import { SectionIntro } from '../../Kinetic'

const scopeRows = [
  ['SEO Audit', 'Technical, on-page, content, backlink, competitor, and visibility analysis'],
  ['Keyword Strategy', 'Keyword research, search-intent analysis, keyword mapping'],
  ['Technical SEO', 'Crawl, indexation, redirects, canonicalization, architecture, performance, schema'],
  ['On-Page SEO', 'Titles, headings, content, URLs, internal links, page optimization'],
  ['Content SEO', 'Content briefs, new pages, optimization, refreshes, topic planning'],
  ['Local SEO', 'Google Business Profile, local pages, citations, reviews, local keyword strategy'],
  ['Ecommerce SEO', 'Product and category optimization, filters, structured data, internal linking'],
  ['International SEO', 'Country targeting, localization, architecture, hreflang where applicable'],
  ['Off-Page SEO', 'Outreach, relevant link acquisition, citations, authority-building activities'],
  ['AI Search SEO', 'AEO/GEO-focused content, entity clarity, structured information'],
  ['Reporting', 'Performance tracking, completed work, findings, priorities, recommendations'],
]

export default function Included() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Scope & Deliverables"
          title="What's Included in Our SEO Services"
        >
          Every SEO campaign is different. The actual scope depends on your website, market,
          competition, business goals, technical environment, and available resources.
        </SectionIntro>

        <div className="overflow-x-auto border-2 border-frame-border">
          <table className="w-full text-left text-sm">
            <thead className="border-b-2 border-frame-border bg-frame-muted/50 font-heading text-xs uppercase tracking-wider text-frame-fg">
              <tr>
                <th className="p-4 border-r-2 border-frame-border w-1/3">SEO Area</th>
                <th className="p-4">Typical Deliverables</th>
              </tr>
            </thead>
            <tbody className="divide-y-2 divide-frame-border text-frame-muted-fg">
              {scopeRows.map((row, rIdx) => (
                <tr key={rIdx} className="align-top transition-colors hover:bg-frame-muted/20">
                  <td className="p-4 border-r-2 border-frame-border font-bold text-frame-fg">
                    {row[0]}
                  </td>
                  <td className="p-4 font-medium">{row[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 border-l-2 border-frame-accent bg-frame-muted/10 p-5 md:p-6">
          <p className="text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
            We define the final scope after reviewing the website so you pay for work that aligns
            with your actual SEO needs.
          </p>
        </div>
      </div>
    </section>
  )
}