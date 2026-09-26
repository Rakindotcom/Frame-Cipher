import { SectionIntro, PosterButton } from '../../../Kinetic'

const advantages = [
  {
    num: '01',
    title: 'One In-House Creative Team',
    desc: 'Concept writers, directors, cinematographers, sound designers, and thumbnail artists stay connected from briefing to final upload.'
  },
  {
    num: '02',
    title: 'Planned Around the Final Edit',
    desc: 'We shoot with the edit timeline in mind. Necessary camera angles, B-roll pauses, graphics inserts, and thumbnail poses are captured deliberately.'
  },
  {
    num: '03',
    title: 'YouTube-Native Long-Form Workflow',
    desc: 'Engineered specifically for YouTube audience retention, average view duration (AVD), and click-through rates (CTR)—not repurposed television commercials.'
  },
  {
    num: '04',
    title: 'Batch Production Agility',
    desc: 'Produce 4 to 8 long-form videos in a single coordinated monthly shoot day, optimizing studio costs, presenter time, and content consistency.'
  },
  {
    num: '05',
    title: 'Multi-Platform Content Repurposing',
    desc: 'Every production session seamlessly generates high-converting YouTube Shorts, Reels, TikTok cutdowns, and promotional teasers.'
  },
  {
    num: '06',
    title: 'Bangladesh-Based, Internationally Minded',
    desc: 'Providing high-caliber 4K cinema production for Bangladeshi brands and remote editing, graphics, and thumbnail support for US, UK, AU, CA, and UAE clients.'
  }
]

const portfolioCategories = [
  'Founder & Expert Videos',
  'Talking-Head & Masterclasses',
  'Product Demonstrations',
  'Educational & Tutorial Series',
  'Multi-Camera Interviews',
  'Corporate YouTube Content',
  'Documentary & Story Films'
]

export default function WhyChoose() {
  return (
    <section className="border-b-2 border-frame-border bg-frame-bg px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="The Framecipher Advantage"
          title="Why Choose Framecipher for YouTube Video Production"
        >
          We bridge the gap between cinema-grade production standards and modern YouTube audience psychology.
        </SectionIntro>

        {/* 6 ADVANTAGES GRID */}
        <div className="mt-12 grid gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-2 lg:grid-cols-3">
          {advantages.map((item) => (
            <div key={item.num} className="bg-frame-bg p-6 md:p-8 flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs font-black text-frame-accent">
                  Advantage {item.num}
                </span>
                <h3 className="mt-3 font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg">
                  {item.title}
                </h3>
                <p className="mt-3 text-xs sm:text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <PosterButton href="/contact">
            Talk to Our YouTube Production Team &rarr;
          </PosterButton>
        </div>

        {/* SERVICE DISTINCTION: PRODUCTION VS VIDEO EDITING */}
        <div className="mt-20 border-2 border-frame-border bg-frame-muted/20 p-6 md:p-10">
          <div className="max-w-3xl">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              Service Clarity
            </span>
            <h3 className="mt-2 font-heading text-2xl md:text-3xl font-bold uppercase tracking-tight text-frame-fg">
              YouTube Video Production vs. Video Editing
            </h3>
            <p className="mt-3 text-xs sm:text-sm font-medium leading-relaxed text-frame-muted-fg">
              YouTube Video Production and YouTube Video Editing are two different scopes of work depending on your existing assets.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="border border-frame-border bg-frame-bg p-6">
              <span className="text-xs font-black uppercase tracking-wider text-frame-accent">
                Full Video Production
              </span>
              <p className="mt-2 text-xs sm:text-sm font-medium text-frame-fg">
                Covers creation from zero: scripting, studio/location setup, cinema lighting, directional audio, presenter coaching, camera shooting, editing, motion graphics, and thumbnail design.
              </p>
              <span className="mt-4 inline-block text-[11px] font-bold uppercase tracking-wider text-frame-muted-fg">
                Best when: You need new content planned, filmed, and finished.
              </span>
            </div>

            <div className="border border-frame-border bg-frame-bg p-6">
              <span className="text-xs font-black uppercase tracking-wider text-frame-muted-fg">
                Video Editing Only
              </span>
              <p className="mt-2 text-xs sm:text-sm font-medium text-frame-muted-fg">
                Starts with footage you already recorded and focuses purely on post-production: pacing cuts, dialogue sweetening, B-roll overlay, color grading, animations, and thumbnail packaging.
              </p>
              <span className="mt-4 inline-block text-[11px] font-bold uppercase tracking-wider text-frame-muted-fg">
                Best when: You already have raw footage ready for assembly.
              </span>
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-frame-border/60 pt-6 sm:flex-row">
            <p className="text-xs font-medium text-frame-fg">
              Unsure which engagement model matches your current assets? We’ll evaluate your footage during the discovery call.
            </p>
            <PosterButton href="/contact" variant="outline" className="shrink-0 text-xs">
              Not Sure Which Service You Need? Talk to Our Team &rarr;
            </PosterButton>
          </div>
        </div>

        {/* SELECTED WORK / PORTFOLIO PREVIEW */}
        <div className="mt-20 border-2 border-frame-accent bg-frame-bg p-6 md:p-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between border-b-2 border-frame-accent/40 pb-6">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                Proof of Performance
              </span>
              <h3 className="mt-2 font-heading text-2xl md:text-3xl font-bold uppercase tracking-tight text-frame-fg">
                Selected YouTube Video Production Work
              </h3>
              <p className="mt-2 text-xs sm:text-sm font-medium text-frame-muted-fg">
                Explore our catalog of verified long-form productions, founder interviews, and high-retention educational videos.
              </p>
            </div>
            <PosterButton href="/projects#video-work" variant="outline" className="shrink-0">
              View Our YouTube Video Portfolio &rarr;
            </PosterButton>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {portfolioCategories.map((cat, idx) => (
              <span
                key={idx}
                className="border border-frame-border bg-frame-muted/30 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-frame-fg"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
