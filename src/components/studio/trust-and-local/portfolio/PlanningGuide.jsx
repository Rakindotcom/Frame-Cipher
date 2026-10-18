'use client'

import { SectionIntro } from '../../../Kinetic'

const guideBlocks = [
  {
    title: 'How to Read a Studio Portfolio',
    body: [
      'A portfolio answers one question: can this team repeat the result for you. Trailers and montages hide weak full films, so ask for complete pieces in your industry with the crew sheet attached. At FrameCipher Studio every case carries its budget band, which tells you whether the reference cost starter, signature or flagship money.',
      'Grading before-and-afters matter because flat log footage flatters no one. Our DaVinci comparisons show the dynamic range captured on set and the grade applied in post — the two halves of image quality you are actually buying.',
    ],
  },
  {
    title: 'Starter, Signature and Flagship Bands',
    body: [
      'Starter productions at ৳25,000 to ৳80,000 cover single-session interviews, batch shorts, catalogue shoots and event teasers. They replicate in 3 to 7 days and suit always-on content needs.',
      'Signature work at ৳1,00,000 to ৳3,00,000 covers company profiles, OVCs, documentaries and wedding narratives with creative direction and multi-day production. Flagship campaigns above ৳5,00,000 cover TVCs, multi-film campaigns and feature documentaries with casting, art direction and broadcast finishing.',
    ],
  },
  {
    title: 'Which Reference to Ask For',
    list: [
      'Selling to corporates: ask for a company profile with crew sheet and replication timeline.',
      'Selling online: ask for an OVC with cutdowns plus retention or ROAS context where shared.',
      'Selling recordings: ask for a full podcast or interview episode with raw-versus-mastered audio notes.',
    ],
  },
  {
    title: 'Dhaka Realities We Plan Around',
    list: [
      'Verification: walk through the ECB Chattar stage to confirm the lighting, acoustics and monitoring behind the reels.',
      'Power: building generator plus IPS backup is the same infrastructure that protected every portfolio shoot.',
      'Access: the studio is at Matikata ECB Chattar, reachable from Mirpur DOHS, Banani and Airport Road, with parking beside Eurasia Building.',
    ],
  },
  {
    title: 'Timelines, Revisions and After Delivery',
    body: [
      'Starter replications deliver in 3 to 7 days. Signature and flagship timelines are set in your written quote. Review runs through a timestamped cloud link with 2 structured revision rounds.',
      'Express 48-hour delivery is available at a 30% priority fee. Masters are archived for 60 days with free re-exports to new aspect ratios.',
    ],
  },
]

export default function PlanningGuide() {
  return (
    <section id="planning-guide" className="border-t-2 border-frame-border bg-frame-muted/10 px-4 py-20 md:px-8 md:py-28 scroll-mt-24">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Planning Guide"
          title="Quality, Budget and Delivery"
          index="06"
        >
          How to judge studio work, what each band buys, which reference to request, and what happens after booking.
        </SectionIntro>

        <div className="grid gap-6 md:grid-cols-2">
          {guideBlocks.map((block, i) => (
            <article key={i} className={`border-2 border-frame-border bg-frame-bg p-6 md:p-8 ${i === 0 ? 'md:col-span-2' : ''}`}>
              <h3 className="font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg">
                {block.title}
              </h3>
              {block.body && block.body.map((para, j) => (
                <p key={j} className="mt-4 text-sm wide:text-lg font-medium leading-relaxed text-frame-muted-fg">
                  {para}
                </p>
              ))}
              {block.list && (
                <ul className="mt-4 space-y-2.5">
                  {block.list.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm wide:text-lg font-medium leading-relaxed text-frame-muted-fg">
                      <span className="text-frame-accent font-bold">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
