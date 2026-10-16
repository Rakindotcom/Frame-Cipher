'use client'

import { SectionIntro } from '../../../Kinetic'

const faqs = [
  {
    "question": "What did the portfolio pieces actually cost to produce?",
    "answer": "Starter productions sit at ৳25,000–80,000, signature work at ৳1,00,000–3,00,000, and flagship campaigns above ৳5,00,000. Ask for the band behind any reel and we attach the scope that produced it."
  },
  {
    "question": "Can we see raw versus colour-graded comparisons?",
    "answer": "Yes. We share DaVinci Resolve before-and-after reels demonstrating captured dynamic range and the applied grade, so you see both halves of image quality."
  },
  {
    "question": "Can you share full films in our industry, not just trailers?",
    "answer": "Yes. Message us on WhatsApp at +880 1768-146650 with your industry and we send a curated private showreel of complete pieces matched to your format."
  },
  {
    "question": "Do you share performance metrics like retention or ROAS?",
    "answer": "Where clients permit, we share retention, watch-time and ROAS context alongside the creative. Metrics belong to clients, so we only publish what each brand approves."
  },
  {
    "question": "How do we verify the studio behind the work?",
    "answer": "Book a free walkthrough at our 6th-floor ECB Chattar stage: clap-test the acoustics, inspect the lighting grid and power backup, and meet the director and engineers."
  },
  {
    "question": "How fast can you replicate a reference project?",
    "answer": "Starter replications deliver in 3 to 7 days. Signature and flagship timelines are set in the written quote. Express 48-hour delivery adds 30%."
  },
  {
    "question": "How many revisions come with a replication?",
    "answer": "Two structured revision rounds through a timestamped cloud review link, with 60-day archiving and free re-exports to new aspect ratios."
  },
  {
    "question": "Where is the studio located?",
    "answer": "6th Floor, Eurasia Building, Khan Polli Jame Masjid, Matikata ECB Chattar, Dhaka 1206 — reachable from Mirpur DOHS, Banani and Airport Road, with parking beside the building."
  },
  {
    "question": "How do I book and pay?",
    "answer": "Send your reference, date and deadline by WhatsApp to +880 1768-146650 or use the form below. You get an itemised quote within 48 hours. A 50% advance locks the dates, the balance is due on final sign-off, and every payment gets a VAT-compliant invoice."
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
          Bands, verification, replication and booking — everything about our portfolio at FrameCipher Studio.
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
