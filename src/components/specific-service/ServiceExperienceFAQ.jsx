import { cleanServiceText as cleanText } from '../../data/serviceContent'

const surface = 'rounded-xl border border-white/[0.08] bg-[#121214]'

function SectionHeading({ eyebrow, title, children }) {
  return (
    <div className="mb-10 max-w-3xl md:mb-14">
      <h2 className="font-heading text-3xl font-medium leading-[1.05] tracking-tight text-white sm:text-4xl md:text-5xl">{title}</h2>
      {children && <p className="mt-5 text-base leading-7 text-zinc-400 md:text-lg">{children}</p>}
    </div>
  )
}

export default function ServiceExperienceFAQ({ faqs }) {
  if (!faqs?.length) return null

  return (
    <section className="border-y border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="FAQ" title="Common questions, answered" />
        <div className="mx-auto max-w-4xl space-y-3">
          {faqs.map((faq, index) => (
            <details
              key={`${faq.question}-${index}`}
              className={`${surface} group rounded-xl overflow-hidden open:border-white/[0.14] open:bg-[#18181B]`}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-6 py-5 font-heading text-base font-semibold text-white marker:content-none md:px-7 md:py-6 md:text-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A855F7] focus-visible:ring-offset-2 focus-visible:ring-offset-[#09090B] touch-manipulation select-none">
                <h3 className="font-heading text-base font-semibold text-white md:text-lg">{cleanText(faq.question)}</h3>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/[0.08] text-[#A855F7] transition-transform duration-200 group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="border-t border-white/[0.08] px-6 py-5 text-sm leading-relaxed text-zinc-300 md:px-7">
                {cleanText(faq.answer)}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
