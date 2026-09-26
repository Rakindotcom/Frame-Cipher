import { SectionIntro, PosterButton } from '../../../Kinetic'

function CheckIcon({ className = "h-4 w-4 shrink-0 text-frame-accent mt-0.5" }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className={className}>
      <path d="m4.5 10 3.5 3.5 7.5-7.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const deliverableGroups = [
  {
    category: 'Creative Deliverables',
    subtitle: 'From Concept to Sound Design',
    items: [
      'Original creative concept & narrative arc',
      'Full scriptwriting or client script refinement',
      'Visual storyboard mapping key scenes & transitions',
      'High-fidelity style frames & color palettes',
      'Custom vector illustrations or 3D models',
      'Professional voice-over casting & sync',
      'Bespoke sound design, foley & licensed music score',
      'Master high-resolution animation render'
    ]
  },
  {
    category: 'Platform-Ready Deliverables',
    subtitle: 'Cross-Platform Native Ratios',
    items: [
      '16:9 Landscape master for YouTube & website embeds',
      '9:16 Vertical cuts for Instagram Reels, Shorts & TikTok',
      '1:1 Square edits optimized for LinkedIn & Meta feed',
      'Ultra-widescreen presentations & keynote loops',
      'High-converting digital advertising cutdowns (6s, 15s, 30s)',
      'Looping background video headers for landing pages'
    ]
  },
  {
    category: 'File & Handover Options',
    subtitle: 'Broadcast Standards & Formats',
    items: [
      'High-bitrate master MP4 / ProRes files',
      'Lightweight, optimized web-ready MP4/WebM exports',
      'Transparent alpha channel video (ProRes 4444) for overlays',
      'Burnt-in subtitles and synchronized SRT/VTT caption files',
      'Multiple resolution outputs (1080p Full HD & 4K UHD)',
      'Organized source project files (After Effects / Blender) when scoped'
    ]
  }
]

const multiOutputs = [
  { name: 'Website Master', desc: 'Hero explainer for conversion pages' },
  { name: 'YouTube 16:9', desc: 'Full-length high-retention upload' },
  { name: '9:16 Vertical Cut', desc: 'Punchy hook for Reels & TikTok' },
  { name: '1:1 Feed Asset', desc: 'Clean square video for LinkedIn' },
  { name: 'Paid Ad Creatives', desc: '15-second high-intent sales cuts' },
  { name: 'Presentation Loops', desc: 'Silent visual backdrop for slide decks' },
  { name: 'Feature Spotlights', desc: 'Individual UI interaction snippets' },
  { name: 'Brand Motion Sting', desc: 'Reusable logo intro for all video content' }
]

export default function Deliverables() {
  return (
    <section className="border-b-2 border-frame-border bg-frame-bg px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Turnkey Deliverables"
          title="What We Deliver"
        >
          Your exact deliverable checklist is confirmed before production begins, ensuring your marketing, design, and product teams receive ready-to-publish assets for every channel.
        </SectionIntro>

        {/* 3 DELIVERABLES COLUMNS */}
        <div className="mt-12 grid gap-px border-2 border-frame-border bg-frame-border lg:grid-cols-3">
          {deliverableGroups.map((group, idx) => (
            <div key={idx} className="bg-frame-bg p-6 md:p-8 flex flex-col justify-between">
              <div>
                <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                  Package Group 0{idx + 1}
                </span>
                <h3 className="mt-2 font-heading text-xl font-bold uppercase tracking-tight text-frame-fg">
                  {group.category}
                </h3>
                <p className="mt-1 text-xs font-medium text-frame-muted-fg">
                  {group.subtitle}
                </p>

                <ul className="mt-6 space-y-2.5 border-t border-frame-border/60 pt-4 text-xs sm:text-sm font-medium text-frame-fg/90">
                  {group.items.map((item, iIdx) => (
                    <li key={iIdx} className="flex items-start gap-2">
                      <CheckIcon />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* ONE ANIMATION MULTIPLE FORMATS */}
        <div className="mt-20 border-2 border-frame-accent bg-frame-accent/5 p-6 md:p-10">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between border-b-2 border-frame-accent/40 pb-4">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                Asset Multiplication Pipeline
              </span>
              <h3 className="mt-1 font-heading text-xl md:text-3xl font-bold uppercase tracking-tight text-frame-fg">
                One Animation, Multiple Formats & Uses
              </h3>
            </div>
            <span className="rounded bg-frame-accent px-3 py-1 text-xs font-black uppercase text-frame-bg shrink-0">
              1 Concept &rarr; 8+ Channels
            </span>
          </div>

          <p className="mt-4 text-xs sm:text-sm font-medium leading-relaxed text-frame-muted-fg max-w-3xl">
            A well-planned animation does not need to become a single file for a single platform. We plan aspect ratios, text safe-zones, and cut points upfront so one master creative concept generates an entire cross-channel content library.
          </p>

          <div className="mt-8 grid gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-2 lg:grid-cols-4">
            {multiOutputs.map((item, idx) => (
              <div key={idx} className="bg-frame-bg p-5 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono font-bold text-frame-accent">
                    Asset 0{idx + 1}
                  </span>
                  <h4 className="mt-2 font-heading text-base font-bold uppercase tracking-tight text-frame-fg">
                    {item.name}
                  </h4>
                  <p className="mt-1 text-xs font-medium text-frame-muted-fg leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-frame-accent/40 pt-6 sm:flex-row">
            <p className="text-xs font-medium text-frame-fg">
              Keep your visual identity 100% unified across website, social, ads, and investor presentations.
            </p>
            <PosterButton href="/contact" className="shrink-0 text-xs sm:text-sm">
              Scope Multi-Format Assets &rarr;
            </PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
