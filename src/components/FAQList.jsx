'use client'

import { useId, useState } from 'react'

export default function FAQList({ faqs }) {
  return (
    <div className="grid gap-px bg-frame-border">
      {faqs.map((faq) => (
        <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  )
}

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false)
  const answerId = useId()

  return (
    <article className="bg-frame-bg p-6 transition-colors md:p-8">
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        className="flex w-full items-start justify-between gap-4 text-left"
        aria-expanded={isOpen}
        aria-controls={answerId}
      >
        <h3 className="font-heading text-xl font-bold uppercase tracking-tight text-frame-fg md:text-2xl">
          {question}
        </h3>
        <span className="select-none font-heading text-2xl font-bold leading-none text-frame-accent" aria-hidden="true">
          {isOpen ? '−' : '+'}
        </span>
      </button>
      <div id={answerId} hidden={!isOpen} className="mt-5 border-t border-frame-border/50 pt-5">
        <RichParagraphs text={answer} />
      </div>
    </article>
  )
}

function RichParagraphs({ text }) {
  return String(text)
    .split(/\n{2,}/)
    .filter(Boolean)
    .map((paragraph) => (
      <p key={paragraph} className="mb-4 text-base font-medium leading-relaxed text-frame-muted-fg last:mb-0">
        {paragraph}
      </p>
    ))
}
