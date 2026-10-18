'use client'

import { SectionIntro } from '../../../Kinetic'

const faqs = [
  {
    "question": "How much does green screen studio time cost in Dhaka?",
    "answer": "At FrameCipher Studio, an operated Chroma Session is ৳3,500 per hour with a 2-hour minimum. A Virtual Half-Day with compositing is ৳19,000, and a full VFX Production Day with 3D environments is ৳39,000. Every quote is itemised in writing within 48 hours."
  },
  {
    "question": "What should presenters avoid wearing on green screen?",
    "answer": "Avoid green clothing and accessories, reflective jewellery, shiny silk fabrics and thin green-tinted glasses. Bring wardrobe options — we check each outfit against spill risk on the live key monitors before recording."
  },
  {
    "question": "Do you provide virtual backgrounds and 3D sets?",
    "answer": "Yes. We design and composite newsrooms, classrooms, corporate stages and branded abstract environments in your style, plus slide and screen-capture compositing for training content."
  },
  {
    "question": "What pushes a quote from ৳19,000 toward ৳39,000?",
    "answer": "More stage hours and presenters, custom 3D set design, multi-subject and moving-camera keys, camera tracking, rotoscoping for difficult edges, and priority turnaround."
  },
  {
    "question": "How do you prevent green spill on hair and shoulders?",
    "answer": "The wall is lit by a balanced overhead grid while dedicated rim and backlights on the subject cancel green reflections. Correct wall distance is blocked before the first take, and spill suppression finishes the job in post."
  },
  {
    "question": "Can we see the keyed background while recording?",
    "answer": "Yes. The hardware keyer shows the live composite on floor monitors, so presenters point, frame and perform against the actual background rather than guessing."
  },
  {
    "question": "Do we get the raw footage or only the finished composite?",
    "answer": "Both. You receive flat-profile 4K raw footage for your own editors, transparent-background ProRes 4444 files, and finished composites with your sets and graphics."
  },
  {
    "question": "How fast can you deliver?",
    "answer": "Raw keyable footage hands over the same day. Finished composites deliver in 5–7 working days. Express 48–72 hour compositing adds 30%."
  },
  {
    "question": "How many revisions are included?",
    "answer": "Full scopes include 2 structured revision rounds through timestamped cloud review links. Masters are archived for 60 days with free re-exports to new aspect ratios."
  },
  {
    "question": "How do we book and pay?",
    "answer": "Send your script, background needs and date by WhatsApp to +880 1768-146650 or use the form below. You get an itemised quote within 48 hours. A 50% advance locks the stage, the balance is due on final sign-off, and every payment gets a VAT-compliant invoice."
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
          Costs, wardrobe, keying, delivery and booking — everything about the green screen stage at FrameCipher Studio.
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
