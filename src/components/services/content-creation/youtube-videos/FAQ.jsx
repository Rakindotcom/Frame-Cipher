'use client'

import { useState } from 'react'
import { SectionIntro, PosterButton } from '../../../Kinetic'

const defaultFaqs = [
  {
    question: "What is YouTube Video Production?",
    answer: "YouTube Video Production is the end-to-end process of planning, filming, editing, and delivering videos specifically engineered for the YouTube platform. It includes concept development, scripting, on-set direction, cinema lighting, clean audio recording, dynamic B-roll capture, retention-focused editing, motion graphics, custom high-CTR thumbnails, and final platform-ready exports."
  },
  {
    question: "Do you provide scripting?",
    answer: "Yes. Depending on the format and presenter, we develop complete scripts, structured outlines, punchy talking points, interview questionnaires, or voiceover copy. We can also review and polish scripts you already wrote to optimize them for audience retention."
  },
  {
    question: "Can you film on location?",
    answer: "Yes. Filming can take place at your company offices, retail locations, commercial spaces, approved outdoor venues, or dedicated partner production studios across Dhaka and Bangladesh."
  },
  {
    question: "Can you produce talking-head and interview videos?",
    answer: "Yes. We produce single-presenter talking-head videos, founder insights, expert commentary, multi-camera interviews, panel discussions, and episodic podcast-style YouTube content."
  },
  {
    question: "Can you edit footage we already recorded?",
    answer: "Yes. If you already have raw footage recorded, we can scope the engagement as dedicated YouTube video editing and post-production, transforming your raw takes into a polished, high-retention final video."
  },
  {
    question: "Do you create YouTube thumbnails?",
    answer: "Yes. Thumbnail production is a core part of our production workflow. We capture high-resolution still photography during filming and design bold, high-contrast, click-worthy thumbnails that drive click-through rate (CTR)."
  },
  {
    question: "Can one shoot produce multiple videos?",
    answer: "Yes. Batch production allows us to plan multiple long-form videos and supporting short-form assets (Shorts, Reels, TikTok clips, paid teasers) from a single coordinated production day."
  },
  {
    question: "Do you provide YouTube SEO?",
    answer: "Standalone YouTube Video Production focuses strictly on creating the video and thumbnail assets. Comprehensive channel strategy, YouTube SEO keyword research, video publishing, metadata optimization, and ongoing performance management are covered separately under our YouTube Management service."
  },
  {
    question: "How much does YouTube Video Production cost in Bangladesh?",
    answer: "Pricing depends on video format, runtime, filming schedule, locations, crew size, camera equipment, scripting depth, and editing complexity. Indicative packages start from ৳15,000 for standard presenter videos, ৳25,000 for advanced interview/documentary productions, and ৳55,000/month for monthly batch production."
  },
  {
    question: "How long does production take?",
    answer: "Standard single-video productions typically take between one to three weeks from initial pre-production planning and scripting through filming, editing, and final revisions. Rush timelines can be accommodated with prior coordination."
  },
  {
    question: "Do you work with international clients?",
    answer: "Yes. Framecipher produces content for clients in Bangladesh as well as international brands and founders across the USA, UK, Australia, Canada, and UAE. Remote workflows cover content planning, scripting, editing, motion graphics, and thumbnail creation."
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
          Common questions about our YouTube production workflow, filming equipment, turnaround times, and pricing models.
        </SectionIntro>

        {/* SEARCH BAR */}
        <div className="mt-8 mb-8">
          <input
            type="text"
            placeholder="Search YouTube production questions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full border-2 border-frame-border bg-frame-muted/20 px-4 py-3 text-sm font-medium text-frame-fg placeholder:text-frame-muted-fg focus:border-frame-accent focus:outline-none"
          />
        </div>

        {/* ACCORDION LIST */}
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
              No matching questions found. Contact our team directly.
            </p>
          )}
        </div>

        {/* FAQ FOOTER CTA */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-2 border-frame-accent/40 bg-frame-accent/5 p-6 sm:flex-row text-center sm:text-left">
          <div>
            <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
              Have a Specific Production Question?
            </span>
            <p className="mt-1 text-xs sm:text-sm font-medium text-frame-fg">
              Our creative directors are ready to discuss your channel goals, formats, and budget.
            </p>
          </div>
          <PosterButton href="/contact" className="shrink-0 text-xs sm:text-sm">
            Talk to Our Creative Team &rarr;
          </PosterButton>
        </div>
      </div>
    </section>
  )
}
