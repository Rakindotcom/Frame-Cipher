import { SectionIntro, PosterButton } from '../../../Kinetic'

const advantages = [
  {
    title: 'One In-House Creative Team',
    desc: 'Concept development, filming, editing, and delivery stay connected through one team—ensuring creative intent is preserved from the hook script to the final cut.'
  },
  {
    title: 'Vertical From the Start',
    desc: 'We plan and shoot with the 9:16 frame in mind from the beginning, instead of treating vertical content as an awkward crop of a horizontal master.'
  },
  {
    title: 'Strategy Before Production',
    desc: 'We start with your audience, key message, commercial objective, and platform nuances before turning on a camera, ensuring every short serves a tangible purpose.'
  },
  {
    title: 'Batch Production Efficiency',
    desc: 'We organize multiple short-form assets into coordinated filming sessions, reducing repeated setup time and maximizing your content output.'
  },
  {
    title: 'Multi-Platform Deliverables',
    desc: 'We deliver tailored cuts, captions, and safe-zone layouts for Instagram Reels, TikTok, YouTube Shorts, and paid performance ad formats.'
  },
  {
    title: 'Clear Production Communication',
    desc: 'You always know what is being produced, what is included, what feedback is needed, and when finished assets will be delivered.'
  },
  {
    title: 'Bangladesh-Based, Internationally Oriented',
    desc: 'Framecipher produces for businesses in Bangladesh and global clients across the US, UK, Australia, Canada, and UAE with platform-native excellence.'
  }
]

export default function WhyChoose() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="The Framecipher Standard"
          title="Why Choose Framecipher for Short-Form Video"
          align="center"
        >
          We combine fast-paced visual storytelling with commercial strategy, helping brands build high-retention vertical content that converts.
        </SectionIntro>

        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          {/* ADVANTAGES (LEFT) */}
          <div className="space-y-6">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                Core Strengths
              </span>
              <h3 className="mt-2 font-heading text-2xl md:text-3xl font-bold uppercase tracking-tight text-frame-fg">
                The Mobile-First Advantage
              </h3>
            </div>

            <div className="grid border-2 border-frame-border bg-frame-border gap-px">
              {advantages.map((item, index) => (
                <div key={index} className="bg-frame-bg p-6">
                  <div className="flex items-baseline gap-3">
                    <span className="font-heading text-sm font-black text-frame-accent">
                      0{index + 1}
                    </span>
                    <h4 className="font-heading text-base md:text-lg font-bold uppercase tracking-tight text-frame-fg">
                      {item.title}
                    </h4>
                  </div>
                  <p className="mt-2 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* PRODUCTION VS EDITING (RIGHT) */}
          <div className="border-2 border-frame-border bg-frame-bg p-7 md:p-10 sticky top-28">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              Service Distinction
            </span>
            <h3 className="mt-2 font-heading text-2xl md:text-3xl font-bold uppercase tracking-tight text-frame-fg">
              Short-Form Production vs. Video Editing
            </h3>
            <p className="mt-3 text-xs md:text-sm font-medium text-frame-muted-fg leading-relaxed">
              Short-form video production and editing solve different operational needs:
            </p>

            <div className="mt-6 space-y-4">
              <div className="border border-frame-border bg-frame-muted/30 p-5">
                <span className="text-xs font-black uppercase tracking-wider text-frame-accent">
                  Complete Short-Form Video Production (This Service)
                </span>
                <p className="mt-2 text-xs md:text-sm font-medium text-frame-fg leading-relaxed">
                  Covers the wider workflow from scratch: hook development, scriptwriting, pre-production planning, vertical filming on location, mobile editing, dynamic captions, sound design, and platform exports.
                </p>
                <span className="mt-3 block text-[11px] font-bold uppercase tracking-wider text-frame-muted-fg">
                  Best For: Brands needing fresh, ongoing vertical content created from concept to delivery
                </span>
              </div>

              <div className="border border-frame-border bg-frame-bg p-5">
                <span className="text-xs font-black uppercase tracking-wider text-frame-fg">
                  Short-Form Video Editing Only
                </span>
                <p className="mt-2 text-xs md:text-sm font-medium text-frame-muted-fg leading-relaxed">
                  Starts with footage you already have. Focuses on turning raw clips, zoom recordings, or podcasts into fast-paced Reels, Shorts, and TikTok cuts.
                </p>
                <span className="mt-3 block text-[11px] font-bold uppercase tracking-wider text-frame-muted-fg">
                  Best For: Creators or brands that already record their own raw footage
                </span>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 border-t-2 border-frame-border pt-6">
              <PosterButton href="/projects#video-work" variant="outline" className="w-full sm:w-auto text-xs">
                View Short-Form Portfolio &rarr;
              </PosterButton>
              <PosterButton href="/contact" className="w-full sm:w-auto text-xs">
                Get a Free Consultation &rarr;
              </PosterButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
