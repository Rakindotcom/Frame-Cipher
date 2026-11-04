
import { AutoLinks } from '../../../seo/AutoLinks'
import { SectionIntro, PosterButton } from '../../../Kinetic'

const formats = [
  {
    number: '01',
    title: 'Full-Length Case Study',
    text: 'The complete version provides enough detail for prospects who want to understand the customer journey.',
  },
  {
    number: '02',
    title: 'Sales One-Pager',
    text: 'A condensed version can give sales representatives a quick proof asset for meetings and follow-ups.',
  },
  {
    number: '03',
    title: 'Website Proof Sections',
    text: 'Relevant results and customer quotes can support service pages, landing pages, and conversion-focused sections.',
  },
  {
    number: '04',
    title: 'Social Media Content',
    text: 'Specific results, customer insights, process lessons, and approved quotes can become short-form social content.',
  },
  {
    number: '05',
    title: 'Email & Newsletter Content',
    text: 'Customer stories can provide practical examples for nurture campaigns, newsletters, and sales follow-ups.',
  },
  {
    number: '06',
    title: 'Presentation and Proposal Content',
    text: 'Short case study summaries can strengthen proposals, pitch decks, and client presentations.',
  },
]

export default function MultiFormat() {
  return (
    <section className="border-y border-white/[0.08] bg-[#09090B] px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          eyebrow="Content repurposing"
          title="Turn One Customer Story Into Multiple Marketing Assets"
        >
          Your research does not need to end when the case study is published. One well-researched customer story
          can become a content source for multiple channels.
        </SectionIntro>

        <div className="grid gap-px border border-white/[0.08] bg-frame-border md:grid-cols-2 lg:grid-cols-3">
          {formats.map((format) => (
            <article key={format.number} className="flex flex-col bg-[#09090B] p-7 md:p-8 transition-colors duration-200 hover:bg-[#121214]/40">
              <span className="font-heading text-4xl font-bold leading-none tracking-tighter text-[#A855F7]">
                {format.number}
              </span>
              <h3 className="mt-5 font-heading text-base font-bold leading-tight tracking-tight text-[#FAFAFA] md:text-lg">
                {format.title}
              </h3>
              <p className="mt-4 text-sm wide:text-lg font-medium leading-relaxed text-[#A1A1AA]"><AutoLinks currentPath="/services/content-writing/case-study-writing" allowed={["/services/website-design-development/landing-pages"]}>{format.text}</AutoLinks></p>
            </article>
          ))}
        </div>

        <p className="mt-8 max-w-4xl border-l-2 border-[#A855F7]/40 bg-[#121214] p-4 text-sm font-medium leading-relaxed text-[#FAFAFA]">
          The exact formats depend on the original story, available evidence, and your marketing needs.
        </p>

        <div className="mt-10 flex flex-col gap-6 border-t border-white/[0.08] pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-3xl text-sm wide:text-lg font-medium leading-relaxed text-[#A1A1AA] md:text-base">
            One interview can support the page, the deck, and the follow-up email.
          </p>
          <div className="flex shrink-0 flex-col gap-4 sm:flex-row">
            <PosterButton href="/services/content-writing/sales-copywriting" variant="outline">
              Explore Sales Copywriting &rarr;
            </PosterButton>
            <PosterButton href="/services/content-writing/email-copywriting" variant="outline">
              Explore Email Copywriting &rarr;
            </PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
