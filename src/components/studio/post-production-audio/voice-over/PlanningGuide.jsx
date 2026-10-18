'use client'

import { SectionIntro } from '../../../Kinetic'

const guideBlocks = [
  {
    title: 'What a Voice Over Session Covers',
    body: [
      'A voice over session is casting, direction, recording and mastering in one booking: we match a Bangla or English voice to your script, direct the performance for tone and pacing, record in an isolated booth, then process the takes into broadcast masters — optionally timed to your locked picture.',
      'That matters because narration carries videos people never watch with full attention. IVR menus, explainers and course lessons all depend on clarity, pronunciation and consistent energy across minutes of audio. We lock tone on sample lines before recording the full script, so retakes stay rare.',
    ],
  },
  {
    title: 'Booth, Talent and Script Notes',
    body: [
      'The vocal booth is acoustically isolated from street horns, fans and room echo, with a studio condenser chain captured at 24-bit 48kHz. The roster covers male and female voices in shuddho Bangla, conversational Bangla, neutral English and British or American accent options.',
      'Send the final script as editable text with pronunciations for brand names, technical terms and mixed Bangla-English phrases marked. For timing to picture, share the locked video with timecodes; we pace the read to hit each visual beat.',
    ],
  },
  {
    title: 'Which Tier to Choose',
    list: [
      'Short Read: IVR prompts, short explainers and social VO up to 2 minutes needing a directed session and a levelled broadcast master within 24–48 hours.',
      'Commercial VO: TVC and brand-film narration needing performance direction, timing to picture, multilingual options and usage-rights documentation.',
      'Series & Course: documentaries, audiobooks and course modules needing multi-session voice continuity, glossaries, chaptered delivery and a corrections window.',
    ],
  },
  {
    title: 'Dhaka Realities We Plan Around',
    list: [
      'Noise: the isolated booth and close-pattern condenser remove the horns, construction and fan hum that ruin home recordings.',
      'Language mix: scripts that switch between Bangla and English get pronunciation checks line by line, so code-switched reads sound natural, not translated.',
      'Power: building generator plus IPS backup keeps sessions and masters safe through load-shedding.',
    ],
  },
  {
    title: 'Timelines, Revisions and After Delivery',
    body: [
      'Short reads deliver in 24–48 hours from script confirmation. Commercial VO follows your picture lock schedule, and series narration runs on agreed multi-session calendars. Review is straightforward: check masters against script and picture, then request pickup lines.',
      'Pickup and correction windows are included on full scopes, re-recorded in the same booth setup for seamless matching. Masters are archived for 60 days with free re-exports. Confirm usage rights (broadcast, digital, duration) at the quote stage, because commercial runs price differently from internal use.',
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
          How VO sessions work, what to send us, which tier fits, and what happens after delivery.
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
