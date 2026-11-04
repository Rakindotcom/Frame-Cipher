export default function FAQList({ faqs }) {
  if (!faqs || faqs.length === 0) return null

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <FAQItem key={faq.question} question={faq.question} answer={faq.answer} index={index} />
      ))}
    </div>
  )
}

function FAQItem({ question, answer, index }) {
  return (
    <details className="group rounded-xl border border-white/[0.08] bg-[#121214] transition-all duration-200 hover:border-white/[0.18] open:border-white/[0.14] open:bg-[#151518] overflow-hidden">
      <summary className="flex cursor-pointer list-none items-center justify-between p-6 sm:p-7 text-left transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-frame-accent focus-visible:ring-offset-2 focus-visible:ring-offset-[#09090B] touch-manipulation select-none [&::-webkit-details-marker]:hidden">
        <div className="flex items-center gap-4 pr-4">
          <span className="font-mono text-xs sm:text-sm font-semibold text-frame-accent tabular-nums">
            {String(index + 1).padStart(2, '0')}
          </span>
          <h3 className="font-heading text-lg sm:text-xl font-bold leading-tight tracking-tight text-white group-open:text-purple-300 transition-colors">
            {question}
          </h3>
        </div>
        <span
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.02] text-frame-accent font-mono text-base font-semibold transition-transform duration-300 group-open:rotate-45"
          aria-hidden="true"
        >
          +
        </span>
      </summary>
      <div className="border-t border-white/[0.08] px-6 pb-6 pt-4 sm:px-7 sm:pb-7 text-zinc-300 bg-transparent">
        <RichParagraphs text={answer} />
      </div>
    </details>
  )
}

function RichParagraphs({ text }) {
  return String(text)
    .split(/\n{2,}/)
    .filter(Boolean)
    .map((paragraph) => (
      <p key={paragraph} className="mb-3 text-sm font-normal leading-relaxed text-zinc-300 last:mb-0 md:text-base">
        {paragraph}
      </p>
    ))
}
