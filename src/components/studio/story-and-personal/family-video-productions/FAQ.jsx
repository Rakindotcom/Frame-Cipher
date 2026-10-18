'use client'

import { SectionIntro } from '../../../Kinetic'

const faqs = [
  {
    "question": "How much does a family legacy film cost in Dhaka?",
    "answer": "At FrameCipher Studio, a milestone film is ৳35,000, a multi-session legacy documentary is ৳75,000, and a full heritage archive is ৳1,40,000. Extra restoration batches are ৳8,000 per 50 photographs. Every quote is itemised in writing within 48 hours."
  },
  {
    "question": "Can interviews happen at our family home?",
    "answer": "Yes. We bring portable softbox lighting, acoustic blankets and quiet audio gear to your residence anywhere in Dhaka, so elders stay relaxed in familiar surroundings. Studio sessions at ECB Chattar are available for controlled quiet."
  },
  {
    "question": "Which milestones do family films usually cover?",
    "answer": "Golden anniversaries, 70th and 80th birthdays, generational business biographies, wedding story chapters and memorial tribute archives celebrating elders’ lives."
  },
  {
    "question": "How do you handle camera-shy elders and children?",
    "answer": "With conversational interviews, not interrogation. Our director chats casually at the elder’s pace with breaks whenever needed, so stories unfold naturally and with dignity."
  },
  {
    "question": "Can you restore old photos, VHS tapes and documents?",
    "answer": "Yes. High-resolution scanning with dust cleanup and colour restoration for vintage photographs, plus VHS and document digitisation — woven into the film alongside the interviews."
  },
  {
    "question": "Do you offer Bangla and English versions?",
    "answer": "Yes. Bilingual narration options are standard on heritage tiers, so grandchildren abroad and elders at home each hear the story in their language."
  },
  {
    "question": "How long does a family film take?",
    "answer": "Delivery runs 5 to 10 working days after the final session. Legacy and heritage tiers with heavy restoration follow the schedule in your written quote."
  },
  {
    "question": "Can each sibling get a copy?",
    "answer": "Yes. Heirloom box sets include copies for the family, and additional engraved USB sets are ৳3,500 each — planned at the brief stage so every household receives one."
  },
  {
    "question": "How do we book and pay?",
    "answer": "Send your milestone, elders and timeline by WhatsApp to +880 1768-146650 or use the form below. You get an itemised quote within 48 hours. A 50% advance confirms sessions, the balance is due on final sign-off, and every payment gets a VAT-compliant invoice."
  }
]

export default function FAQ() {
  return (
    <section id="faq" className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28 scroll-mt-24">
      <div className="mx-auto max-w-4xl">
        <SectionIntro
          eyebrow="Direct Answers"
          title="Frequently Asked Questions"
          index="07"
        >
          Costs, sessions, restoration and booking — everything about family films at FrameCipher Studio.
        </SectionIntro>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group border-2 border-frame-border bg-frame-bg open:border-frame-accent transition-colors"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between p-6 md:p-8 font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg marker:content-none select-none hover:text-frame-accent transition-colors">
                <span className="pr-4">{faq.question}</span>
                <span className="ml-4 flex h-8 w-8 shrink-0 items-center justify-center border-2 border-frame-border text-frame-accent transition-transform duration-200 group-open:rotate-45 font-bold">
                  +
                </span>
              </summary>
              <div className="border-t-2 border-frame-border p-6 md:p-8 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg wide:text-lg">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
