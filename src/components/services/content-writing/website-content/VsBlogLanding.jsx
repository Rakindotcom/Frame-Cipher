
import { AutoLinks } from '../../../seo/AutoLinks'
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
    <section className="border-t border-white/[0.08] bg-[#121214] px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          eyebrow="Page boundaries"
          title="Website Content vs. Blog Content vs. Landing Page Copy"
        >
          Different pages serve different purposes, and mixing them up is one of the most common reasons a
          website feels unclear.
        </SectionIntro>

        <div className="overflow-x-auto border border-white/[0.08]">
          <table className="w-full min-w-[640px] border-collapse text-left">
            <thead>
              <tr>
                <th
                  scope="col"
                  className="w-1/3 border-b border-white/[0.08] bg-[#121214] p-4 font-heading text-xs font-bold uppercase tracking-[0.2em] text-[#A1A1AA] md:p-5 md:text-sm"
                >
                  Content Type
                </th>
                <th
                  scope="col"
                  className="w-2/3 border-b-2 border-l-2 border-white/[0.08] bg-[#121214] p-4 font-heading text-xs font-bold uppercase tracking-[0.2em] text-[#A1A1AA] md:p-5 md:text-sm"
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
                    className={`border-b border-white/[0.08] p-4 font-heading text-sm font-bold uppercase leading-snug tracking-tight md:p-5 ${
                      index === 0 ? 'bg-[#A855F7]/10 text-[#A855F7]' : 'bg-[#09090B] text-[#FAFAFA]'
                    }`}
                  >
                    {row.type}
                  </th>
                  <td className="border-b-2 border-l-2 border-white/[0.08] bg-[#09090B] p-4 text-sm wide:text-lg font-medium leading-relaxed text-[#A1A1AA] md:p-5">
                    {row.purpose}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-8 border-l-2 border-[#A855F7]/40 bg-[#121214] p-4 text-sm wide:text-lg font-medium leading-relaxed text-[#A1A1AA]"><AutoLinks currentPath="/services/content-writing/website-content" allowed={["/services/website-design-development/business-website"]}>
          Website content is generally more evergreen than blog content and is closely connected to the core
          structure of the business website.
        </AutoLinks></p>

        <div className="mt-4 grid gap-px border border-white/[0.08] bg-frame-border md:grid-cols-2">
          <p className="bg-[#09090B] p-6 text-sm font-medium leading-relaxed text-[#FAFAFA] md:text-base">
            For search-focused blog content, Framecipher also provides a dedicated{' '}
            <Link
              href="/services/content-writing/seo-blog-writing"
              className="text-[#A855F7] underline underline-offset-4 transition hover:text-[#FAFAFA]"
            >
              SEO &amp; Blog Writing
            </Link>{' '}
            service.
          </p>
          <p className="bg-[#09090B] p-6 text-sm font-medium leading-relaxed text-[#FAFAFA] md:text-base">
            For campaign-specific pages, our{' '}
            <Link
              href="/services/content-writing/landing-page-copy"
              className="text-[#A855F7] underline underline-offset-4 transition hover:text-[#FAFAFA]"
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
