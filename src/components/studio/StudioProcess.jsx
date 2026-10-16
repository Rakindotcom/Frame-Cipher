'use client'

import { MessageSquare, FileCheck2, CalendarCheck, Clapperboard, CheckCheck } from 'lucide-react'
import { SectionIntro, PosterButton } from '../Kinetic'

const steps = [
  { step: '01', title: 'Discuss your project', icon: MessageSquare, description: 'Tell us what to produce, who it is for and where it will publish. Share references or scripts.', action: 'Brief & format lock' },
  { step: '02', title: 'Define requirements', icon: FileCheck2, description: 'We confirm session length, participants, crew, equipment, lighting and editing scope.', action: 'Itemised scope' },
  { step: '03', title: 'Confirm the booking', icon: CalendarCheck, description: 'Schedule, price and scope are agreed in writing, and the slot is reserved with preparation notes.', action: 'Slot reserved' },
  { step: '04', title: 'Prepare and record', icon: Clapperboard, description: 'We set up and check sound and light before filming. You arrive with products, guests or notes.', action: 'Live studio shoot' },
  { step: '05', title: 'Edit and deliver', icon: CheckCheck, description: 'Cuts follow the agreed specs, feedback rounds are handled, and platform-ready masters, captions and cloud delivery follow.', action: 'Masters delivered' },
]

export default function StudioProcess() {
  return (
    <section id="process" className="border-b-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="How booking works" title="Studio booking in 5 steps." index="06">
          To start, send three WhatsApp messages to +880 1768-146650: your date, your setup and your goal. Then
          expect an itemised quote within 48 hours.
        </SectionIntro>
        <div className="grid gap-px border-2 border-frame-border bg-frame-border md:grid-cols-5">
          {steps.map((st) => {
            const Icon = st.icon
            return (
              <div key={st.step} className="group relative flex flex-col justify-between overflow-hidden bg-frame-bg p-6 transition-colors duration-300 hover:bg-frame-muted/30 md:p-7">
                <span className="pointer-events-none absolute -bottom-6 -right-2 select-none font-heading text-[6rem] font-bold leading-none tracking-tighter text-frame-muted/25 md:text-[7rem]" aria-hidden="true">
                  {st.step}
                </span>
                <div className="relative z-10">
                  <div className="flex items-center justify-between border-b border-frame-border/60 pb-4">
                    <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">Step {st.step}</span>
                    <Icon className="h-5 w-5 text-frame-muted-fg transition-colors group-hover:text-frame-accent" />
                  </div>
                  <h3 className="mt-5 font-heading text-lg font-bold uppercase tracking-tight text-frame-fg md:text-xl">{st.title}</h3>
                  <p className="mt-3 text-xs font-medium leading-relaxed text-frame-muted-fg md:text-sm">{st.description}</p>
                </div>
                <div className="relative z-10 mt-6 border-t border-frame-border/60 pt-4">
                  <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-frame-accent">{st.action} &rarr;</span>
                </div>
              </div>
            )
          })}
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border border-frame-border bg-frame-muted/20 p-6 sm:flex-row">
          <p className="text-sm font-medium text-frame-muted-fg">Your date, your setup, your goal — three messages and we take it from there.</p>
          <PosterButton href="https://wa.me/8801768146650" className="shrink-0 text-xs">Start on WhatsApp</PosterButton>
        </div>
      </div>
    </section>
  )
}
