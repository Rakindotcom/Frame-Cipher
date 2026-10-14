'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'Can I book a podcast studio in Dhaka with recording and editing support?',
    a: 'Yes. You can reserve a podcast session that combines acoustic studio access, multi-microphone recording support, 4K multi-camera video capture, and complete post-production editing. The final package depends on your desired recording format, episode duration, number of speakers, and required cutdown clips. We discuss all equipment and deliverable specifications before your booking is confirmed.',
  },
  {
    q: 'Can I rent the studio if I have my own camera and production team?',
    a: 'Yes. You can book the studio on an hourly or daily space-only basis if you already have your own cameras, audio gear, and crew. You will have full access to our sound-isolated studio room, ceiling lighting grid, colored backdrops, green screen, and high-speed fiber internet. Be sure to confirm your setup footprint and technical requirements in advance.',
  },
  {
    q: 'Do you provide complete video production for businesses?',
    a: 'FrameCipher Studio is specifically structured to execute end-to-end commercial productions. Depending on your project scope, this includes pre-production concept planning, script alignment, studio shooting, lighting direction, audio recording, color grading, sound design, and platform-specific exports. Simply share your goals, target audience, and expected deliverables with our team.',
  },
  {
    q: 'Can I record a podcast and create short social media clips from the same session?',
    a: 'Yes. Planning both a full-length podcast master (16:9 for YouTube) and vertical short clips (9:16 for Reels, TikTok, and Shorts) from one recording session is one of our most popular production formats. Inform our team before filming so we set camera framing safe zones and capture reaction cutaways designed specifically for short-form hooks.',
  },
  {
    q: 'How much does a video production or studio session in Dhaka cost?',
    a: 'Studio pricing depends on session duration (hours or days), crew requirements (camera operators, sound engineer, director), equipment setup, and the number and complexity of post-production deliverables (color grading, subtitles, short-form clips). Because every project has unique deliverables, we provide upfront, transparent quotes tailored to your exact brief—with no hidden costs or artificial starting prices.',
  },
  {
    q: 'How do I book a session at FrameCipher Studio?',
    a: 'Contact the studio via our website booking form, direct phone (+880 1768-146650), or WhatsApp with your preferred dates, service type, and project details. Our studio director will discuss your requirements, check slot availability, and provide a confirmed quote and preparation guide before finalizing your session.',
  },
]

export default function StudioFaq() {
  const [openIndex, setOpenIndex] = useState(0)

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx)
  }

  return (
    <section id="faq" className="border-b-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        {/* Header */}
        <div className="mb-14 max-w-3xl">
          <p className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
            Got Questions?
          </p>
          <h2 className="mt-3 font-heading text-[clamp(2rem,4.5vw,4.5rem)] font-bold uppercase leading-[0.95] tracking-tighter text-frame-fg">
            Frequently Asked Questions.
          </h2>
          <p className="mt-4 text-base font-medium leading-relaxed text-frame-muted-fg">
            Everything you need to know about booking studio sessions, production gear, deliverable timelines, and revision terms at FrameCipher Studio in Dhaka.
          </p>
        </div>

        {/* Accordion List */}
        <div className="border-2 border-frame-border divide-y-2 divide-frame-border bg-frame-bg">
          {faqs.map((item, idx) => {
            const isOpen = openIndex === idx
            return (
              <div key={idx} className="transition-colors hover:bg-frame-muted/10">
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="flex w-full items-center justify-between p-6 md:p-8 text-left transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg pr-4">
                    {item.q}
                  </span>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center border border-frame-border text-frame-accent transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-frame-accent text-frame-accent-fg border-frame-accent' : 'bg-frame-muted/40'
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 md:px-8 md:pb-8 pt-0 text-sm leading-relaxed text-frame-muted-fg animate-fadeIn">
                    <p className="border-t border-frame-border/60 pt-4">{item.a}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
