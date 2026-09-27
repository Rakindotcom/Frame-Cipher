import { SectionIntro } from '../../../Kinetic'
import { resolveFaqs } from '../../../../lib/seo/faq'

const fallbackFaqs = [
  {
    question: "What is a Short-Form Video Production Service?",
    answer: "A Short-Form Video Production Service covers the planning, creation, filming, editing, and delivery of short videos designed for platforms such as Instagram Reels, TikTok, and YouTube Shorts."
  },
  {
    question: "What platforms do you produce short-form videos for?",
    answer: "We produce content for Instagram Reels, TikTok, YouTube Shorts, Facebook Reels, and paid social placements based on the project's requirements."
  },
  {
    question: "Do you film short-form videos?",
    answer: "Yes. Filming can be included as part of the complete production scope, including vertical filming, interviews, product demonstrations, talking-head videos, B-roll, and directed scenes."
  },
  {
    question: "Do you shoot videos vertically?",
    answer: "Yes. Short-form productions are planned around the vertical 9:16 format from the beginning when vertical delivery is part of the project."
  },
  {
    question: "Can you create multiple Reels or Shorts from one shoot?",
    answer: "Yes. When planned as a batch production, one filming session can produce multiple short-form videos, clips, variations, and platform-specific deliverables."
  },
  {
    question: "Do you write short-form video scripts?",
    answer: "Yes. Depending on the project, we can develop scripts, hooks, talking points, voiceover copy, interview questions, and scene structures."
  },
  {
    question: "Can you create TikTok videos?",
    answer: "Yes. We can produce TikTok videos for product promotion, educational content, founder-led content, brand campaigns, testimonials, and other agreed formats."
  },
  {
    question: "Can you create Instagram Reels and YouTube Shorts?",
    answer: "Yes. We can produce platform-ready vertical videos for Instagram Reels and YouTube Shorts, either as standalone content or as part of a larger batch."
  },
  {
    question: "Can you turn existing footage into short-form videos?",
    answer: "Yes. If you already have suitable footage, we can review the material and determine whether a short-form editing and post-production scope is appropriate."
  },
  {
    question: "Can you create short-form videos for paid advertising?",
    answer: "Yes. Short-form content can be produced for paid social campaigns, including different hooks, messages, offers, or creative variations when included in the production scope."
  },
  {
    question: "Do you provide captions and subtitles?",
    answer: "Yes. Captions, subtitles, on-screen text, and branded graphics can be included according to the agreed deliverables."
  },
  {
    question: "How many short-form videos can you produce in one shoot?",
    answer: "The number depends on the filming time, number of concepts, scripts, locations, presenters, products, and required footage. A properly planned batch can produce multiple short-form assets from one session."
  },
  {
    question: "How much does short-form video production cost in Bangladesh?",
    answer: "Pricing depends on production volume, creative requirements, filming, locations, editing, motion graphics, talent, and final deliverables. Our packages start from ৳15,000 for a starter batch up to ৳55,000/month for high-volume retainers."
  },
  {
    question: "How long does short-form video production take?",
    answer: "Simple batches can move quickly (3–7 business days), while larger productions require more time for concept development, filming, editing, review, and revisions. The timeline is confirmed with the production scope."
  },
  {
    question: "Do you offer monthly short-form video production?",
    answer: "Yes. Recurring production can be structured around a monthly content requirement, batch filming sessions, and an agreed delivery schedule."
  },
  {
    question: "Do you work with international clients?",
    answer: "Yes. We support clients in the USA, UK, Australia, Canada, and UAE, including creative development, editing, post-production, and Bangladesh-based filming where required."
  },
  {
    question: "Do you guarantee views or viral results?",
    answer: "No production company can reliably guarantee a specific view count or viral outcome because audience response and platform distribution are outside the production team's direct control. Our focus is on creating content with a clear creative objective, appropriate format, strong production fundamentals, and an agreed testing or iteration process."
  },
  {
    question: "How do I start a short-form video project?",
    answer: "Share your business, target audience, preferred platforms, content requirements, location, timeline, and any examples you like. We will review the requirements and recommend an appropriate production scope."
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
          Common questions about our short-form video production process, vertical filming, batch scheduling, captions, and platform delivery.
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
