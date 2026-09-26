import Link from 'next/link'
import { SectionIntro } from '../../../Kinetic'

const rows = [
  {
    type: 'Website Content',
    purpose: 'Explain the business, services, products, positioning, and next steps',
  },
  {
    type: 'SEO Blog Content',
    purpose: 'Answer search-driven questions and build useful topical coverage',
  },
  {
    type: 'Landing Page Copy',
    purpose: 'Focus visitors on one specific campaign, offer, or action',
  },
  {
    type: 'Product Content',
    purpose: 'Explain a specific product and support purchase decisions',
  },
  {
    type: 'Sales Copy',
    purpose: 'Persuade an audience toward a defined commercial action',
  },
]

export default function VsBlogLanding() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Page boundaries"
          title="Website Content vs. Blog Content vs. Landing Page Copy"
        >
          Different pages serve different purposes, and mixing them up is one of the most common reasons a
          website feels unclear.
        </SectionIntro>

        <div className="overflow-x-auto border-2 border-frame-border">
          <table className="w-full min-w-[640px] border-collapse text-left">
            <thead>
              <tr>
                <th
                  scope="col"
                  className="w-1/3 border-b-2 border-frame-border bg-frame-muted/30 p-4 font-heading text-xs font-bold uppercase tracking-[0.2em] text-frame-muted-fg md:p-5 md:text-sm"
                >
                  Content Type
                </th>
                <th
                  scope="col"
                  className="w-2/3 border-b-2 border-l-2 border-frame-border bg-frame-muted/30 p-4 font-heading text-xs font-bold uppercase tracking-[0.2em] text-frame-muted-fg md:p-5 md:text-sm"
                >
                  Primary Purpose
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr key={row.type} className="align-top">
                  <th
                    scope="row"
                    className={`border-b-2 border-frame-border p-4 font-heading text-sm font-bold uppercase leading-snug tracking-tight md:p-5 ${
                      index === 0 ? 'bg-frame-accent/10 text-frame-accent' : 'bg-frame-bg text-frame-fg'
                    }`}
                  >
                    {row.type}
                  </th>
                  <td className="border-b-2 border-l-2 border-frame-border bg-frame-bg p-4 text-sm font-medium leading-relaxed text-frame-muted-fg md:p-5">
                    {row.purpose}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-8 border-l-2 border-frame-accent bg-frame-muted/10 p-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
          Website content is generally more evergreen than blog content and is closely connected to the core
          structure of the business website.
        </p>

        <div className="mt-4 grid gap-px border-2 border-frame-border bg-frame-border md:grid-cols-2">
          <p className="bg-frame-bg p-6 text-sm font-medium leading-relaxed text-frame-fg md:text-base">
            For search-focused blog content, Framecipher also provides a dedicated{' '}
            <Link
              href="/services/content-writing/seo-blog-writing"
              className="text-frame-accent underline underline-offset-4 transition hover:text-frame-fg"
            >
              SEO &amp; Blog Writing
            </Link>{' '}
            service.
          </p>
          <p className="bg-frame-bg p-6 text-sm font-medium leading-relaxed text-frame-fg md:text-base">
            For campaign-specific pages, our{' '}
            <Link
              href="/services/content-writing/landing-page-copy"
              className="text-frame-accent underline underline-offset-4 transition hover:text-frame-fg"
            >
              Landing Page Copywriting
            </Link>{' '}
            service focuses on a narrower conversion objective.
          </p>
        </div>
      </div>
    </section>
  )
}
