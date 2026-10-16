'use client'

import { MessageSquare, Sliders, Clapperboard, RefreshCw, CheckCheck } from 'lucide-react'
import { SectionIntro } from '../Kinetic'

const defaultSteps = [
  { num: '01', title: 'Consultation & Creative Brief', desc: 'We clarify the video format, target audience, core talking points, visual references, and distribution channels.', icon: MessageSquare },
  { num: '02', title: 'Pre-Production & Technical Scope', desc: 'We finalize the shot list, participant scheduling, lighting setup, audio requirements, and deliverable specs.', icon: Sliders },
  { num: '03', title: 'Studio Production & Capture', desc: 'The shoot takes place at our ECB Chattar studio with calibrated lighting, real-time audio monitoring, and 4K cameras.', icon: Clapperboard },
  { num: '04', title: 'Post-Production & Client Review', desc: 'Our editors assemble the cuts, color grade in DaVinci, clean dialogue, and integrate your structured revision notes.', icon: RefreshCw },
  { num: '05', title: 'Final Platform Delivery', desc: 'We deliver your finished high-bitrate master exports, vertical social cuts, and subtitle files via high-speed cloud drive.', icon: CheckCheck },
]

function SubProcessGrid({ steps }) {
  return (
    <div className="grid gap-px border-2 border-frame-border bg-frame-border md:grid-cols-5">
      {steps.map((st) => {
        const Icon = st.icon || CheckCheck
        return (
          <div key={st.num} className="relative flex flex-col justify-between overflow-hidden bg-frame-bg p-7">
            <span className="pointer-events-none absolute -bottom-6 -right-2 select-none font-heading text-[6rem] font-bold leading-none tracking-tighter text-frame-muted/25 md:text-[7rem]" aria-hidden="true">
              {st.num}
            </span>
            <div className="relative z-10">
              <div className="mb-4 flex items-center justify-between border-b border-frame-border/60 pb-3">
                <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">Phase {st.num}</span>
                <Icon className="h-4 w-4 text-frame-muted-fg" />
              </div>
              <h3 className="font-heading text-lg font-bold uppercase tracking-tight text-frame-fg md:text-xl">{st.title}</h3>
              <p className="mt-3 text-xs font-medium leading-relaxed text-frame-muted-fg md:text-sm">{st.desc}</p>
            </div>
            <div className="relative z-10 mt-6 border-t border-frame-border/50 pt-3 font-mono text-[11px] font-bold uppercase text-frame-accent">
              Stage Verified &rarr;
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default function StudioSubProcess({ service }) {
  const steps = service.customSteps || defaultSteps

  return (
    <section className="border-b-2 border-frame-border bg-frame-muted/10 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Workflow & execution" title="From brief to delivery." index="04">
          Every step keeps your project organized, avoids last-minute surprises, and produces content ready for
          immediate commercial publication.
        </SectionIntro>
        <SubProcessGrid steps={steps} />
      </div>
    </section>
  )
}
