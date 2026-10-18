'use client'

import { SectionIntro } from '../../../Kinetic'

const faqs = [
  {
    "question": "How much does product photography cost in Dhaka?",
    "answer": "At FrameCipher Studio, catalogue stills are ৳1,500 per product with 3 retouched angles (5-product minimum, ৳7,500 set). A half-day bank of around 10 products is ৳14,000, and a lifestyle plus model campaign day is ৳34,000. Every quote is itemised in writing within 48 hours."
  },
  {
    "question": "Are your photos compliant with Daraz and Shopify requirements?",
    "answer": "Yes. We deliver pure-white RGB 255 backgrounds cropped to exact marketplace ratios, with square and vertical ad formats included on catalogue tiers."
  },
  {
    "question": "How many photos do we receive per product?",
    "answer": "Three retouched angles per product as standard — front, 45-degree and detail macro — with extra retouched angles at ৳300 each. Custom shot lists are confirmed in writing before the shoot."
  },
  {
    "question": "What pushes a quote from ৳7,500 toward ৳34,000?",
    "answer": "More products and angles, styled lifestyle scenes instead of white backgrounds, hand and face models, props and art direction, macro and jewellery labour, and product reel add-ons."
  },
  {
    "question": "Can we ship or drop off products at your studio?",
    "answer": "Yes. Drop off or courier inventory samples to our 6th-floor studio at Eurasia Building, Matikata ECB Chattar. We confirm the shot list against the physical samples on arrival."
  },
  {
    "question": "Can you shoot lifestyle photos with models alongside catalogue shots?",
    "answer": "Yes. The Lifestyle + Model Day combines white-background catalogue coverage with styled tabletop scenes and hand or face model demonstrations for cosmetics, jewellery and gadgets."
  },
  {
    "question": "Do you provide transparent PNG cutouts?",
    "answer": "Yes. Transparent-background PNG cuts are included in the Half-Day Bank and available on other tiers, alongside 360-degree multi-angle coverage sets."
  },
  {
    "question": "What is the product reel add-on?",
    "answer": "A short motion spotlight cut from the same styled setup at ৳2,500 per product — catalogue stills plus a reel formatted for Reels, Shorts and TikTok."
  },
  {
    "question": "How fast can you deliver?",
    "answer": "Raw captures hand over the same day and retouched sets deliver in 3 to 4 business days. Express 48-hour retouching adds 30%."
  },
  {
    "question": "How many revisions are included?",
    "answer": "Catalogue tiers include structured revision rounds against the agreed shot list through a cloud gallery, with 60-day archiving and free re-exports to new ratios."
  },
  {
    "question": "How do I book and pay?",
    "answer": "Send your product count, angles and deadline by WhatsApp to +880 1768-146650 or use the form below. You get an itemised quote within 48 hours. A 50% advance locks the dates, the balance is due on final sign-off, and every payment gets a VAT-compliant invoice."
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
          Costs, angles, retouching and booking — everything about product photography at FrameCipher Studio.
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
