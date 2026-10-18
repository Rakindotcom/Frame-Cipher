'use client'

import { SectionIntro } from '../../../Kinetic'

const faqs = [
  {
    "question": "How much does video production cost in Dhaka?",
    "answer": "At FrameCipher Studio, a single studio setup with a clean edit is ৳35,000. A multi-camera commercial with a grade and two vertical shorts is ৳78,000, and a multi-day brand film starts from ৳1,85,000. Every quote is itemised in writing within 48 hours."
  },
  {
    "question": "Is studio shooting or location shooting cheaper?",
    "answer": "A studio day removes venue hire, portable lighting, sound treatment and weather contingency. For a single interview or product spotlight, the studio is usually the simpler and more predictable option. Multi-location stories need field production, which we quote separately."
  },
  {
    "question": "What pushes a quote from ৳78,000 toward ৳1,85,000?",
    "answer": "More shoot days and locations, a larger crew, casting, scriptwriting, motion graphics, custom sound design, more aspect ratios and a priority delivery lane."
  },
  {
    "question": "What is included in the studio day package?",
    "answer": "Up to 4 hours of studio time, one cinema 4K camera, a wireless lapel audio kit, a teleprompter, a client monitoring screen, a basic edit, one export (16:9 or 9:16) and one revision round."
  },
  {
    "question": "Do you shoot on location as well as in the studio?",
    "answer": "Yes. We quote field production separately, itemising crew, equipment and travel days for corporate offices, factories and event venues across Bangladesh."
  },
  {
    "question": "What video formats do I receive?",
    "answer": "A 4K 16:9 master, vertical 9:16 cutdowns, clean dialogue audio and subtitle files. The Flagship tier adds 1:1 and 4:5 masters."
  },
  {
    "question": "Do you add Bangla subtitles?",
    "answer": "Yes. We produce English and Bangla subtitles and lower-third graphics. They are included in Signature Commercial and available on other tiers."
  },
  {
    "question": "How many revisions are included?",
    "answer": "Studio Day Essential includes 1 structured revision round. Signature Commercial includes 2. Flagship terms are set in the written quote."
  },
  {
    "question": "How fast can you deliver?",
    "answer": "Studio Day Essential delivers in 3 to 5 business days. Express 48-hour turnaround adds 30%. Raw files are available within 24 hours."
  },
  {
    "question": "Do I need a script before booking?",
    "answer": "For Studio Day Essential, a finished script or talking points works best. Signature Commercial includes concept and script polish, and Flagship includes full scriptwriting."
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
          Costs, formats, revisions and booking — everything about video production at FrameCipher Studio.
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
