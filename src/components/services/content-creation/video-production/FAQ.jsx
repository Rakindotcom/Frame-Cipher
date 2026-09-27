import { SectionIntro } from '../../../Kinetic'
import { resolveFaqs } from '../../../../lib/seo/faq'

const fallbackFaqs = [
  {
    question: "What is a Video Production Service?",
    answer: "A Video Production Service covers the process of planning and creating a video, from creative development and pre-production through filming, editing, post-production, and final delivery."
  },
  {
    question: "What types of videos does Framecipher produce?",
    answer: "We produce corporate videos, company profile videos, brand films, commercial and promotional videos, product videos, social media videos, YouTube content, interviews, testimonials, documentary-style videos, and training or internal communication videos."
  },
  {
    question: "Do you handle the video concept?",
    answer: "Yes. We can support concept development, creative direction, video structure, scripting, storyboarding, and production planning depending on the project's requirements."
  },
  {
    question: "Do you write video scripts?",
    answer: "Yes. Scriptwriting can be included when the project requires a structured narrative, voiceover, dialogue, promotional messaging, or other scripted content."
  },
  {
    question: "Do you provide filming?",
    answer: "Yes. Filming can be included as part of the complete video production scope."
  },
  {
    question: "Can you film at our office or business location?",
    answer: "Yes. Location-based filming can be planned around your office, facility, retail location, commercial environment, or another approved location."
  },
  {
    question: "Can you produce videos for social media?",
    answer: "Yes. We can produce social-first videos and create shorter or vertical versions from larger productions when included in the project scope."
  },
  {
    question: "Can one production create multiple videos?",
    answer: "Yes. When the production is planned for multiple deliverables, one shoot can support a main video along with shorter clips, vertical versions, promotional cuts, or other agreed assets."
  },
  {
    question: "Do you provide motion graphics?",
    answer: "Motion graphics can be included when the project requires titles, animated text, branded graphics, visual explanations, or other motion elements."
  },
  {
    question: "Do you provide subtitles and captions?",
    answer: "Yes. Captions and subtitles can be included according to the project's requirements and final delivery specifications."
  },
  {
    question: "Can you create videos for paid advertising?",
    answer: "Yes. Video productions can be planned around advertising requirements, including shorter versions, platform-specific formats, and campaign deliverables."
  },
  {
    question: "How much does video production cost in Bangladesh?",
    answer: "The cost depends on the production scope. Filming days, locations, crew, equipment, creative requirements, post-production, and final deliverables all affect the final quotation. Our packages start from ৳25,000 for simple video up to ৳100,000+ for larger brand films."
  },
  {
    question: "How long does a video production project take?",
    answer: "Timelines vary by project. Simple productions can move faster (3–7 business days), while larger corporate, commercial, and brand productions require 2 to 4 weeks for planning, filming, editing, and approvals."
  },
  {
    question: "How are revisions handled?",
    answer: "Revision rounds are defined in the project proposal based on the production scope. Feedback should be consolidated during the agreed review stage so revisions can be handled efficiently."
  },
  {
    question: "Can you work with our existing footage?",
    answer: "Yes. If you already have footage and need editing or post-production, we can review the material and determine whether an editing or post-production scope is appropriate."
  },
  {
    question: "Do you provide raw footage?",
    answer: "Raw footage can be provided when agreed as part of the project scope. Source files and project files should also be discussed before production begins."
  },
  {
    question: "Do you work with international clients?",
    answer: "Yes. We support international clients with Bangladesh-based production, creative development, editing, post-production, and other agreed video requirements across the US, UK, Australia, Canada, and UAE."
  },
  {
    question: "How do I start a video production project?",
    answer: "Share your video idea, business objective, preferred format, location, timeline, and any references you have. We will review the requirements and recommend an appropriate production scope."
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
          index="08"
        >
          Common questions about our video production process, filming logistics, equipment, post-production, pricing, and international collaboration.
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
