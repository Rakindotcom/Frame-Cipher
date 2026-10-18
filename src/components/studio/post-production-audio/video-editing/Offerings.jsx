'use client'

import Link from 'next/link'
import { SectionIntro, PosterButton } from '../../../Kinetic'

const productionStandards = [
  "Platform-native pacing: rapid hooks for Reels and Shorts, measured structure for corporate and courses",
  "Multi-camera and separate-audio sync with clean dialogue levelling that never buries speech under music",
  "Retention devices: zoom punches, B-roll, graphic callouts, kinetic captions in Bangla or English",
  "Cinematic colour grade and exposure rescue, including LOG footage from mixed cameras",
  "Licensed music beds, risers and sound effects — zero copyright strikes on YouTube, Meta or TikTok",
  "Export presets tuned per platform: YouTube, Instagram, LinkedIn, Facebook and TikTok"
]
const confirmedDeliverables = [
  "Finished 16:9 landscape master in high-bitrate MP4",
  "9:16 vertical cutdowns and shorts extracted per edit",
  "Clean dialogue audio master with loudness levelling",
  "SRT caption files in Bangla or English",
  "60-day archive with free re-exports to new aspect ratios"
]

export default function Offerings() {
  return (
    <section id="offerings" className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28 scroll-mt-24">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Scope & Standards"
          title="What Our Video Editing Service Includes"
          index="03"
        >
          Cutting, grading and packaging handled by one in-house team in Dhaka.
        </SectionIntro>

        <div className="grid border-2 border-frame-border bg-frame-border gap-px sm:grid-cols-2">
          <div className="bg-frame-bg p-7 md:p-8 flex flex-col justify-between">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                Production Standards
              </span>
              <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                Paced, Graded & Mixed In-House
              </h3>
              <ul className="mt-6 space-y-3 text-xs md:text-sm font-medium text-frame-fg/90">
                {productionStandards.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-frame-accent font-bold mt-0.5">✓</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-frame-bg p-7 md:p-8 flex flex-col justify-between">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                Confirmed Deliverables
              </span>
              <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                Masters, Cutdowns & Caption Files
              </h3>
              <ul className="mt-6 space-y-3 text-xs md:text-sm font-medium text-frame-fg/90">
                {confirmedDeliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-frame-accent font-bold mt-0.5">✓</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 border-2 border-frame-border bg-frame-muted/30 p-6 md:p-8">
          <div>
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              Single Team Accountability
            </span>
            <h4 className="mt-1 font-heading text-xl font-bold uppercase tracking-tight text-frame-fg">
              One editor owns your footage from intake checksum to final export.
            </h4>
            <p className="mt-1 text-xs md:text-sm font-medium text-frame-muted-fg wide:text-lg">
              No freelancer chain sits between your drive handoff and your finished video.
            </p>
          </div>
          <PosterButton href="#booking" className="shrink-0">
            Book a Video Editing Slot &rarr;
          </PosterButton>
        </div>

        <p className="mt-6 text-xs md:text-sm font-medium text-frame-muted-fg wide:text-lg">
          Also see our{' '}
          <Link href="/studio/post-production/" className="font-bold text-frame-fg underline decoration-frame-accent/40 hover:text-frame-accent transition-colors">
            video post-production services in Dhaka
          </Link>{' '}
          and{' '}
          <Link href="/studio/social-media-video-production/" className="font-bold text-frame-fg underline decoration-frame-accent/40 hover:text-frame-accent transition-colors">
            social media video production in Dhaka
          </Link>{' '}
          pages for full finishing and shoot-plus-edit scopes.
        </p>
      </div>
    </section>
  )
}
