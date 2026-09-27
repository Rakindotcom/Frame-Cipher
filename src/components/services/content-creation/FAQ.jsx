import { SectionIntro } from '../../Kinetic'
import { resolveFaqs } from '../../../lib/seo/faq'

const fallbackFaqs = [
  {
    question: "What is included in content creation services?",
    answer: "Content creation can include video production, short-form video, photography, graphic design, motion graphics, branding, social media graphics, and other agreed creative production. The exact deliverables depend on your project scope."
  },
  {
    question: "Do you create both video and photography?",
    answer: "Yes. Framecipher can coordinate video and photography production under the same creative team when both are required for a project."
  },
  {
    question: "Do you create Reels, Shorts, and TikTok videos?",
    answer: "Yes. We produce short-form vertical video for platforms such as Instagram Reels, YouTube Shorts, and TikTok, with the exact format and deliverables defined during project planning."
  },
  {
    question: "Can you create content for paid advertising?",
    answer: "Yes. Video, photography, motion graphics, and graphic assets can be produced for paid advertising when that is part of the agreed project scope."
  },
  {
    question: "Do you provide product photography?",
    answer: "Yes. Product photography can be produced for ecommerce, websites, advertising, social media, catalogs, and other commercial uses."
  },
  {
    question: "Can you create content from footage we already have?",
    answer: "Yes. Editing-only projects can be considered when you already have suitable footage, photographs, or other source materials."
  },
  {
    question: "Can you create content for our existing brand identity?",
    answer: "Yes. We review your existing brand guidelines and visual references before production so new content follows the established visual direction."
  },
  {
    question: "Can you create a brand identity and logo as part of content creation?",
    answer: "Yes. Logo design and branding are available as related creative services. Larger branding projects can be scoped separately when a complete identity system is required."
  },
  {
    question: "Do you provide source files and raw footage?",
    answer: "That depends on the project and agreement. Final deliverables are defined in the proposal, while source files, editable files, raw footage, and other production materials can be included when agreed."
  },
  {
    question: "Can I use the content for advertising?",
    answer: "Yes, where the agreed scope and relevant licensing allow it. Usage rights for third-party music, stock assets, talent, locations, or other licensed materials should be confirmed as part of the project."
  },
  {
    question: "Do you provide content creation outside Bangladesh?",
    answer: "Yes. Framecipher works with businesses in Bangladesh and international clients across the US, UK, Australia, Canada, and UAE. The production arrangement depends on the project location and requirements."
  },
  {
    question: "How long does content creation take?",
    answer: "It depends on the production. Simple creative assets may take a few business days, while larger video, photography, branding, or campaign projects can take several weeks. Your proposal confirms the actual timeline."
  },
  {
    question: "Do you offer ongoing monthly content creation?",
    answer: "Yes. Ongoing production can be structured around a monthly content requirement, with the exact formats, volume, production schedule, and deliverables agreed in advance."
  }
]

export default function FAQ({ service }) {
  const faqs = resolveFaqs(service, fallbackFaqs)
  return (
    <section id="faq" className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28 scroll-mt-24">
      <div className="mx-auto max-w-4xl">
        <SectionIntro
          eyebrow="Direct Answers"
          title="Frequently Asked Questions"
          index="07"
        >
          Common questions about our content creation services, production capabilities, delivery timelines, and international arrangements.
        </SectionIntro>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group border-2 border-frame-border bg-frame-bg open:border-frame-accent transition-colors"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between p-6 font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg marker:content-none select-none hover:text-frame-accent transition-colors">
                <span className="pr-4">{faq.question}</span>
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
