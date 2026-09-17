import { cleanServiceText as cleanText } from '../../data/serviceContent'

const surface = 'border border-white/10 bg-white/[0.035]'

function SectionHeading({ eyebrow, title, children }) {
  return (
    <div className="mb-10 max-w-3xl md:mb-14">
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-violet-300">{eyebrow}</p>
      <h2 className="font-heading text-3xl font-semibold leading-tight tracking-[-0.035em] text-white sm:text-4xl md:text-5xl">{title}</h2>
      {children && <p className="mt-5 text-base leading-7 text-zinc-400 md:text-lg">{children}</p>}
    </div>
  )
}

export default function ServiceExperienceFAQ({ faqs }) {
  if (!faqs?.length) return null

  return (
    <section className="border-t border-white/10 px-5 py-20 sm:px-8 md:py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="FAQ" title="Common questions, answered" />
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <details
              key={`${faq.question}-${index}`}
              className={`${surface} group rounded-2xl open:border-violet-400/30 open:bg-violet-400/[0.04]`}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-6 py-5 font-heading text-base font-semibold text-white marker:content-none md:px-7 md:py-6 md:text-lg">
                <span>{cleanText(faq.question)}</span>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 text-violet-300 transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="border-t border-white/10 px-6 py-5 text-[15px] leading-7 text-zinc-400 md:px-7">
                {cleanText(faq.answer)}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
