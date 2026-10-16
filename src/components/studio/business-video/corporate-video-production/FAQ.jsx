'use client'

import { SectionIntro } from '../../../Kinetic'

const faqs = [
  {
    "question": "How much does a corporate video cost in Dhaka?",
    "answer": "At FrameCipher Studio, an executive interview with teleprompter and a LinkedIn highlight reel is ৳48,000. A complete company profile film with studio interviews plus office and facility b-roll is ৳95,000, and multi-film enterprise AV suites start from ৳2,60,000. Every quote is itemised in writing within 48 hours."
  },
  {
    "question": "What pushes a quote from ৳95,000 toward ৳2,60,000?",
    "answer": "More shoot days and locations, multiple executives, casting, scriptwriting depth, motion graphics and data visualisation, bilingual voiceover and subtitle versioning, and a priority delivery lane."
  },
  {
    "question": "Can non-actors or first-time executives look natural on camera?",
    "answer": "Yes. Our professional teleprompter operator controls reading speed naturally, and our director uses conversational interview techniques to bring out relaxed, authoritative and authentic performances."
  },
  {
    "question": "Do you provide on-site b-roll shooting at our corporate office?",
    "answer": "Yes. We frequently combine a controlled, quiet studio interview at ECB Chattar with on-location office and facility b-roll to create a cohesive corporate brand story."
  },
  {
    "question": "Do you offer bilingual voiceovers and subtitle translations in Bangla and English?",
    "answer": "Yes. All corporate video packages can include English and Bangla voiceovers, as well as synchronised SRT subtitle files formatted for stakeholder presentations and LinkedIn."
  },
  {
    "question": "What is included in the company profile film?",
    "answer": "Script consultation and B2B message structuring, a studio interview day plus one location b-roll day, logo animation and kinetic data graphics, a 2 to 5 minute master plus 60-second and 30-second cuts, and ProRes and high-bitrate MP4 files with SRT subtitles."
  },
  {
    "question": "What is the standard turnaround time for corporate films?",
    "answer": "Standard delivery is 5 to 7 working days from the final filming date. We also provide express 48-hour turnarounds at a 30% priority fee for urgent board meetings, investor pitches or AGMs. Raw captures are available within 24 hours."
  },
  {
    "question": "How many revisions are included?",
    "answer": "The executive interview tier includes 2 structured revision rounds. Profile and enterprise revision terms are set in the written quote, and review runs through a timestamped cloud link."
  },
  {
    "question": "Do you shoot at our factory or branch offices outside Dhaka?",
    "answer": "Yes. We quote field production separately, itemising crew, equipment and travel days for factories, plants and offices across Bangladesh."
  },
  {
    "question": "How do I book and pay?",
    "answer": "Send your date, setup and goal by WhatsApp to +880 1768-146650 or use the form below. You get an itemised quote within 48 hours. A 50% advance locks the dates, the balance is due on final sign-off, and every payment gets a VAT-compliant invoice."
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
          Costs, formats, revisions and booking — everything about corporate video at FrameCipher Studio.
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
              <div className="border-t-2 border-frame-border p-6 md:p-8 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
