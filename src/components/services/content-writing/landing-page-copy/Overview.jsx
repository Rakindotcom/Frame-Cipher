import { SectionIntro } from '../../../Kinetic'

const criteria = [
  'A clear offer and value proposition',
  'Audience-specific messaging',
  'One primary conversion goal',
  'A strong headline and hero copy',
  'Benefit-led sections',
  'Relevant proof and trust signals',
  'Objection handling',
  'Clear calls to action',
  'Message match with the traffic source',
  'Mobile-friendly content structure',
  'SEO-aware recommendations where relevant',
  'Test-ready copy variations when required',
]

export default function Overview() {
  return (
    <section className="border-b border-white/[0.08] bg-[#121214] px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          eyebrow="Conversion focus"
          title="Landing Page Copy Built Around One Primary Conversion Goal"
        >
          A landing page is not a general marketing page. It is written for a specific audience, a specific offer,
          and one main action.
        </SectionIntro>

        <div className="grid gap-10 border-t border-white/[0.08] pt-12 lg:grid-cols-[1.3fr_0.7fr] lg:items-start">
          <div className="space-y-5 text-base font-medium leading-relaxed text-[#A1A1AA] md:text-lg">
            <p>
              A landing page has a more focused job than a typical website page. Visitors usually arrive from a
              specific campaign, advertisement, search, email, or promotion, and they came with a particular
              question in mind.
            </p>
            <p>
              Effective landing page copy answers that question quickly, communicates the value of the offer in
              language the audience understands, reduces uncertainty, and makes the next step obvious.
            </p>
            <p>
              The goal is not to make the page sound persuasive for its own sake. The goal is to help the right
              visitor understand the offer, trust it, and know what to do next.
            </p>
          </div>

          <div className="border border-white/[0.08] bg-[#09090B] p-7 md:p-8">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-[#A855F7]">
              Strong landing page copy
            </span>
            <ul className="mt-5 space-y-2.5">
              {criteria.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm font-medium leading-relaxed text-[#FAFAFA]"
                >
                  <span aria-hidden="true" className="mt-1.5 h-2 w-2 shrink-0 bg-frame-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
