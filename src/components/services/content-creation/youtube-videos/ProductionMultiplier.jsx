import { SectionIntro, PosterButton } from '../../../Kinetic'

const assets = [
  {
    num: '01',
    name: 'Main YouTube Video',
    format: '16:9 4K Master',
    desc: 'The complete, polished long-form episode or masterclass with color grading, balanced audio, and motion graphics.'
  },
  {
    num: '02',
    name: 'YouTube Shorts',
    format: '9:16 Vertical Cuts',
    desc: 'Selected high-impact moments, punchy quotes, and quick tips formatted for YouTube Shorts discovery.'
  },
  {
    num: '03',
    name: 'Reels & TikTok Clips',
    format: '9:16 Social Edits',
    desc: 'Bespoke vertical cutdowns featuring mobile captions, animated subtitles, and platform-native pacing.'
  },
  {
    num: '04',
    name: 'Promotional Clips',
    format: 'Teasers & Ads',
    desc: '15-to-30-second teaser cuts designed for paid social ads, newsletter embeds, and LinkedIn announcements.'
  },
  {
    num: '05',
    name: 'Thumbnail Photography',
    format: 'High-Res Stills',
    desc: 'High-resolution still captures and studio portraits shot during filming, custom-designed into click-worthy thumbnails.'
  }
]

const deliverables = [
  {
    category: 'Creative Deliverables',
    items: [
      'Comprehensive video concept & structural flow',
      'Full script, outline, or talking-point frameworks',
      'Structured interview questions & talking guidance',
      'Director treatment & visual style references',
      'Scene shot lists & on-set call sheets'
    ]
  },
  {
    category: 'Production Deliverables',
    items: [
      'Single or multi-camera 4K cinema filming',
      'Multi-point broadcast lighting setup',
      'Clean multi-track wireless audio capture',
      'On-set presenter & interview direction',
      'Contextual B-roll, product shots & workplace footage'
    ]
  },
  {
    category: 'Post-Production Deliverables',
    items: [
      'Full retention-focused long-form video edit',
      'Cinematic color correction & grading',
      'Broadcast-level audio mixing & cleanup',
      'Contextual B-roll & screen demo integration',
      'Custom on-screen typography, lower-thirds & motion elements'
    ]
  },
  {
    category: 'YouTube Assets',
    items: [
      'Master YouTube video file (4K / 1080p high bitrate)',
      'High-CTR custom YouTube thumbnail graphic',
      'Supporting title card & end screen graphics',
      'Agreed vertical Shorts / social cutdowns',
      'Closed captions or burnt-in subtitle files'
    ]
  }
]

function CheckIcon({ className = "h-4 w-4 shrink-0 text-frame-accent mt-0.5" }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className={className}>
      <path d="m4.5 10 3.5 3.5 7.5-7.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function ProductionMultiplier() {
  return (
    <section className="border-b-2 border-frame-border bg-frame-bg px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Asset Multiplication"
          title="One Shoot, Multiple YouTube & Social Assets"
        >
          A well-planned production session creates far more than one isolated video. We structure every shoot to yield weeks of multi-channel brand assets.
        </SectionIntro>

        {/* ASSET MULTIPLIER PIPELINE */}
        <div className="mt-12 border-2 border-frame-accent bg-frame-accent/5 p-6 md:p-10">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between border-b-2 border-frame-accent/40 pb-4">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              Shoot Architecture Example: Founder or Expert Interview
            </span>
            <span className="rounded bg-frame-accent px-2.5 py-1 text-[11px] font-black uppercase text-frame-bg">
              1 Shoot &rarr; 5+ Outputs
            </span>
          </div>

          <div className="mt-8 grid gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-2 lg:grid-cols-5">
            {assets.map((item) => (
              <div key={item.num} className="bg-frame-bg p-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-black text-frame-accent">
                      {item.num}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-frame-muted-fg">
                      {item.format}
                    </span>
                  </div>
                  <h4 className="mt-3 font-heading text-base font-bold uppercase tracking-tight text-frame-fg">
                    {item.name}
                  </h4>
                  <p className="mt-2 text-xs font-medium leading-relaxed text-frame-muted-fg">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs sm:text-sm font-medium text-frame-fg">
              Batch production maximizes your return on crew setup time, presenter availability, and studio staging.
            </p>
            <PosterButton href="/contact" className="shrink-0 text-xs sm:text-sm">
              Plan a Multi-Video Production Session &rarr;
            </PosterButton>
          </div>
        </div>

        {/* DELIVERABLES BREAKDOWN: WHAT YOU RECEIVE */}
        <div className="mt-20">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
              Comprehensive Output
            </span>
            <h3 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
              What You Receive
            </h3>
            <p className="mt-3 text-xs sm:text-sm font-medium text-frame-muted-fg">
              Your exact deliverable scope is customized and confirmed before production begins, ensuring zero surprises upon project completion.
            </p>
          </div>

          <div className="mt-10 grid gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-2 lg:grid-cols-4">
            {deliverables.map((col, idx) => (
              <div key={idx} className="bg-frame-bg p-6 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                    Category 0{idx + 1}
                  </span>
                  <h4 className="mt-2 font-heading text-base md:text-lg font-bold uppercase tracking-tight text-frame-fg">
                    {col.category}
                  </h4>
                  <ul className="mt-5 space-y-2.5 border-t border-frame-border/60 pt-4 text-xs font-medium text-frame-fg/90">
                    {col.items.map((it, iIdx) => (
                      <li key={iIdx} className="flex items-start gap-2">
                        <CheckIcon />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
