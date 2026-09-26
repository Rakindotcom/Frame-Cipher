import { SectionIntro } from '../../../Kinetic'

const rows = [
  {
    title: 'Topic Selection',
    generic: 'Generic blog writing may start with a topic idea.',
    seo: 'SEO content starts with understanding whether the topic aligns with an actual search opportunity and business need.',
  },
  {
    title: 'Search Intent',
    generic: 'The topic is chosen mainly because it seems interesting or relevant to the business.',
    seo: 'SEO content considers what the searcher is trying to accomplish and what type of information can satisfy that intent.',
  },
  {
    title: 'Content Structure',
    generic: 'Structure is often a general format applied regardless of the query.',
    seo: 'SEO content uses research and logical structure to make the topic easier to understand and navigate.',
  },
  {
    title: 'Internal Linking',
    generic: 'Links may be added where they are convenient for the writer.',
    seo: 'Relevant SEO content can connect readers to related articles, services, products, categories, and other important pages.',
  },
  {
    title: 'Ongoing Optimization',
    generic: 'Once published, the article is often left unchanged for a long period.',
    seo: 'SEO content can be reviewed after publication to identify opportunities for updating, expanding, consolidating, or improving future content.',
  },
]

export default function VsGeneric() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Service boundaries" title="SEO Content vs. Generic Blog Writing">
          Not every blog article is an SEO content project.
        </SectionIntro>

        <div className="overflow-x-auto border-2 border-frame-border">
          <table className="w-full min-w-[640px] border-collapse text-left">
            <thead>
              <tr>
                <th
                  scope="col"
                  className="w-1/5 border-b-2 border-frame-border bg-frame-muted/30 p-4 font-heading text-xs font-bold uppercase tracking-[0.2em] text-frame-muted-fg md:p-5 md:text-sm"
                >
                  &nbsp;
                </th>
                <th
                  scope="col"
                  className="w-2/5 border-b-2 border-l-2 border-frame-border bg-frame-muted/30 p-4 font-heading text-xs font-bold uppercase tracking-[0.2em] text-frame-muted-fg md:p-5 md:text-sm"
                >
                  Generic Blog Writing
                </th>
                <th
                  scope="col"
                  className="w-2/5 border-b-2 border-l-2 border-frame-border bg-frame-accent/10 p-4 font-heading text-xs font-bold uppercase tracking-[0.2em] text-frame-accent md:p-5 md:text-sm"
                >
                  SEO Content
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.title} className="align-top">
                  <th
                    scope="row"
                    className="border-b-2 border-frame-border bg-frame-bg p-4 font-heading text-sm font-bold uppercase leading-snug tracking-tight text-frame-fg md:p-5"
                  >
                    {row.title}
                  </th>
                  <td className="border-b-2 border-l-2 border-frame-border bg-frame-bg p-4 text-sm font-medium leading-relaxed text-frame-muted-fg md:p-5">
                    {row.generic}
                  </td>
                  <td className="border-b-2 border-l-2 border-frame-border bg-frame-bg p-4 text-sm font-medium leading-relaxed text-frame-fg md:p-5">
                    {row.seo}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-8 border-l-2 border-frame-accent bg-frame-muted/10 p-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
          The difference is not simply the number of keywords in an article. It is the planning and
          optimization process behind the content.
        </p>
      </div>
    </section>
  )
}
