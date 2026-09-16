import { SectionIntro } from '../Kinetic'

function FAQItem({ question, answer }) {
  return (
    <article className="grid gap-4 bg-frame-bg p-7 md:grid-cols-[0.45fr_1fr] md:p-10">
      <h3 className="font-heading text-2xl font-bold uppercase leading-none tracking-tighter text-frame-fg">
        {question}
      </h3>
      <p className="text-base font-medium leading-tight text-frame-muted-fg md:text-lg">{answer}</p>
    </article>
  )
}

export default function ServiceDetailFAQSection({ serviceTitle, faqs }) {
  if (!faqs?.length) return null

  return (
    <section className="px-4 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="FAQs" title={`Common questions about ${serviceTitle}.`} />
        <div className="grid gap-px bg-frame-border">
          {faqs.map((faq) => (
            <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  )
}
