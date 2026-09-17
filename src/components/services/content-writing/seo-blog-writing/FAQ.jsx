import { SectionIntro } from '../../../Kinetic'

export default function FAQ({ service }) {
  const faqs = service?.faqs || [
  {
    "question": "How long should a blog post be to rank well?",
    "answer": "It depends on the topic and what's currently ranking. We research what genuinely competitive content covers for each specific keyword, rather than applying a fixed word count target regardless of topic."
  },
  {
    "question": "Will you write about topics I don't have deep expertise in myself?",
    "answer": "We research thoroughly for every piece, and can incorporate input or interviews from your team where genuine expertise adds real value, the goal is content that reflects real knowledge, not confident-sounding guesswork."
  },
  {
    "question": "How is this different from a general content writing service?",
    "answer": "SEO and blog writing specifically integrate keyword research and search intent from the start, general content writing without that research might read well but has less realistic chance of ranking competitively."
  },
  {
    "question": "Do you update old blog content, or just write new pieces?",
    "answer": "Both, content refresh for aging or underperforming pieces is part of the service, since published content needs occasional attention to keep ranking as competitors update theirs."
  },
  {
    "question": "Do you write SEO content for businesses outside Bangladesh?",
    "answer": "Yes, alongside Bangladeshi businesses, we write SEO and blog content for clients in the US, UK, Australia, Canada, and UAE.\n\n[Talk to Our Content Team]"
  }
]
  if (!faqs?.length) return null

  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-4xl">
        <SectionIntro
          eyebrow="Direct Answers"
          title="Frequently Asked Questions"
        >
          Common questions about our delivery process, technical standards, and engagement models.
        </SectionIntro>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group border-2 border-frame-border bg-frame-bg open:border-frame-accent transition-colors"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between p-6 font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg marker:content-none">
                <span>{faq.question}</span>
                <span className="ml-4 flex h-8 w-8 shrink-0 items-center justify-center border-2 border-frame-border text-frame-accent transition-transform duration-200 group-open:rotate-45">
                  +
                </span>
              </summary>
              <div className="border-t-2 border-frame-border p-6 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
