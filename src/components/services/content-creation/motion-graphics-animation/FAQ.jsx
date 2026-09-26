'use client'

import { useState } from 'react'
import { SectionIntro, PosterButton } from '../../../Kinetic'

const defaultFaqs = [
  {
    question: "What is motion graphics and animation?",
    answer: "Motion graphics and animation use designed visual elements such as typography, shapes, illustrations, interfaces, characters, or 3D objects with movement, timing, and sound to communicate a message clearly."
  },
  {
    question: "When should I choose animation instead of live-action video?",
    answer: "Animation is useful when the subject is abstract, digital, data-driven, process-based, or difficult to capture physically. Live-action is often better for real people, physical locations, unboxings, and real-world environments. If you are unsure, we help determine the ideal medium during discovery before production begins."
  },
  {
    question: "Do you provide both 2D and 3D animation?",
    answer: "Yes. The appropriate approach depends on the project. 2D is commonly used for explainers, kinetic typography, infographics, and character work. 3D is useful for product visualization, realistic environments, and projects that require volumetric depth or complex camera movement."
  },
  {
    question: "Can you animate our existing logo?",
    answer: "Yes. An existing logo can usually be animated without redesigning it. If the supplied artwork is not in a clean vector format (AI, EPS, SVG), we identify what needs adjustment before production begins."
  },
  {
    question: "Can you create animation for SaaS, apps, and software products?",
    answer: "Yes. We specialize in UI animation, mobile app walkthroughs, feature demonstrations, SaaS onboarding sequences, and product-focused motion graphics."
  },
  {
    question: "Can you create Bangla and English animation content?",
    answer: "Yes. Bangla, English, or bilingual scripting, voice-over, and on-screen typography can be incorporated based on your target audience."
  },
  {
    question: "Can you create different versions for social media?",
    answer: "Yes. Additional versions can be prepared for formats such as 16:9, 1:1 square, and 9:16 vertical (Reels, TikTok, Shorts). Cutdowns and platform-specific adaptations can also be scoped from the master animation."
  },
  {
    question: "Do you provide voice-over and sound design?",
    answer: "Yes. Professional voice-over coordination, licensed music tracks, custom sound effects (SFX), and final audio sweetening are included according to project scope."
  },
  {
    question: "Do you provide source files?",
    answer: "Source files (After Effects, Blender, Illustrator) can be included when agreed as part of the project scope. Third-party plugins, proprietary fonts, or licensed music tracks may have separate usage conditions."
  },
  {
    question: "How many revisions are included?",
    answer: "Revision rounds are structured around specific approval milestones (script, storyboard, style frames, animatic, and animation draft) to ensure both sides stay aligned without unexpected delays or costs."
  },
  {
    question: "How long does a 30–60 second explainer take?",
    answer: "A standard explainer can take around two to four weeks, depending on visual complexity, script readiness, approval speed, voice-over requirements, and the number of delivery versions."
  },
  {
    question: "Do you work with clients outside Bangladesh?",
    answer: "Yes. Framecipher works with businesses across Bangladesh as well as international brands in the USA, UK, Australia, Canada, and UAE."
  }
]

export default function FAQ({ service }) {
  const faqs = service?.faqs?.length ? service.faqs : defaultFaqs
  const [searchQuery, setSearchQuery] = useState('')

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <section className="border-b-2 border-frame-border bg-frame-bg px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-4xl">
        <SectionIntro
          eyebrow="Direct Clarity"
          title="Frequently Asked Questions"
        >
          Common questions about our motion graphics pipeline, 2D/3D styles, voice-over handling, and delivery formats.
        </SectionIntro>

        {/* SEARCH BAR */}
        <div className="mt-8 mb-8">
          <input
            type="text"
            placeholder="Search motion graphics questions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full border-2 border-frame-border bg-frame-muted/20 px-4 py-3 text-sm font-medium text-frame-fg placeholder:text-frame-muted-fg focus:border-frame-accent focus:outline-none"
          />
        </div>

        {/* ACCORDION */}
        <div className="space-y-3">
          {filteredFaqs.map((faq, index) => (
            <details
              key={index}
              className="group border-2 border-frame-border bg-frame-bg transition-colors open:border-frame-accent"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between p-5 md:p-6 font-heading text-base md:text-lg font-bold uppercase tracking-tight text-frame-fg hover:text-frame-accent marker:content-none">
                <span>{faq.question}</span>
                <span className="ml-4 flex h-7 w-7 shrink-0 items-center justify-center border border-frame-border text-frame-accent transition-transform duration-200 group-open:rotate-45">
                  +
                </span>
              </summary>
              <div className="border-t border-frame-border/60 p-5 md:p-6 text-xs sm:text-sm font-medium leading-relaxed text-frame-muted-fg">
                {faq.answer}
              </div>
            </details>
          ))}

          {filteredFaqs.length === 0 && (
            <p className="py-8 text-center text-sm font-medium text-frame-muted-fg">
              No matching questions found. Contact our creative team directly.
            </p>
          )}
        </div>

        {/* CTA BANNER */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-2 border-frame-accent/40 bg-frame-accent/5 p-6 sm:flex-row text-center sm:text-left">
          <div>
            <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
              Have a Specific Concept in Mind?
            </span>
            <p className="mt-1 text-xs sm:text-sm font-medium text-frame-fg">
              Send us a script, reference link, or rough bullet list and our directors will guide you.
            </p>
          </div>
          <PosterButton href="/contact" className="shrink-0 text-xs sm:text-sm">
            Talk to Our Animation Directors &rarr;
          </PosterButton>
        </div>
      </div>
    </section>
  )
}
