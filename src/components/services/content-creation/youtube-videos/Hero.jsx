import Link from 'next/link'
import { PageHero, PosterButton } from '../../../Kinetic'

const approachPoints = [
  {
    num: '01',
    title: 'Clear Openings & Content Structure',
    desc: 'Hooks and introductions structured around what the video delivers, keeping drop-off low in the critical first minute.'
  },
  {
    num: '02',
    title: 'Presenter Framing & Balanced Lighting',
    desc: 'Cinematic three-point lighting and eye-level framing tailored for extended, distraction-free viewing comfort.'
  },
  {
    num: '03',
    title: 'Clean, Consistent Broadcast Audio',
    desc: 'Multi-channel wireless audio recording and acoustic treatment so every word is clear and effortless to listen to.'
  },
  {
    num: '04',
    title: 'Purposeful Pacing & Natural Delivery',
    desc: 'Trimming dead pauses while preserving organic speech rhythms, balancing engagement without frantic over-editing.'
  },
  {
    num: '05',
    title: 'B-Roll & Supporting Visuals',
    desc: 'Contextual cutaways, macro product shots, and live workplace footage to break visual monotony.'
  },
  {
    num: '06',
    title: 'Graphics & On-Screen Information',
    desc: 'Branded lower-thirds, key takeaway callouts, diagrams, and screen recordings that reinforce understanding.'
  },
  {
    num: '07',
    title: 'Visual Variation Across Long Sections',
    desc: 'Multi-camera angles, focal shifts, and dynamic zooms that reset viewer attention across 10 to 30+ minute runtimes.'
  },
  {
    num: '08',
    title: 'A Final Edit Built Around the Goal',
    desc: 'Seamless post-production calibrated to guide viewers to clear next steps, whether education, conversion, or subscription.'
  }
]

export default function Hero({ service }) {
  const title = service?.h1 || "YouTube Video Production Service in Bangladesh"
  const subtitle = service?.shortDesc || "Long-form YouTube content needs more than a camera and an editing timeline. It needs clear structure, strong production, clean audio, purposeful pacing, and visuals that keep the viewer engaged."

  return (
    <div className="bg-frame-bg text-frame-fg">
      {/* BREADCRUMB */}
      <nav aria-label="Breadcrumb" className="border-b border-frame-border/60 bg-frame-bg/80 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-frame-muted-fg md:px-8">
        <div className="mx-auto flex max-w-[95vw] items-center gap-2 overflow-x-auto">
          <Link href="/" className="transition hover:text-frame-fg">Home</Link>
          <span>/</span>
          <Link href="/services" className="transition hover:text-frame-fg">Services</Link>
          <span>/</span>
          <Link href="/services/content-creation" className="transition hover:text-frame-fg">Content Creation</Link>
          <span>/</span>
          <span className="text-frame-accent">YouTube Video Production</span>
        </div>
      </nav>

      {/* HERO */}
      <PageHero
        eyebrow="Specialized Long-Form Video Capability"
        meta="YouTube 4K Production / Audio & Lighting / Script to Thumbnail"
        number="03"
        title={title}
        actions={
          <>
            <PosterButton href="/contact">
              Get a Free YouTube Video Production Consultation &rarr;
            </PosterButton>
            <PosterButton href="/projects#video-work" variant="outline">
              View Our YouTube Video Portfolio &rarr;
            </PosterButton>
          </>
        }
      >
        {subtitle}
        <span className="mt-4 block text-xs md:text-sm font-normal text-frame-muted-fg leading-relaxed">
          Framecipher provides YouTube video production services for businesses in Bangladesh and international clients across the USA, UK, Australia, Canada, and UAE. We handle the production from content structure and scripting through filming, editing, thumbnail production, and final delivery. Whether you need a founder video, educational series, interview, product demonstration, corporate video, or recurring YouTube content, we build the production around your format, audience, and business goal.
        </span>
      </PageHero>

      {/* VALUE PROPOSITION: BUILT FOR LONG-FORM VIEWING */}
      <section className="border-b-2 border-frame-border bg-frame-muted/30 px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-[95vw]">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent mb-4">
              Long-Form Retention Dynamics
            </p>
            <h2 className="font-heading text-[clamp(2.2rem,5.5vw,4.5rem)] font-bold uppercase leading-[0.9] tracking-tighter text-frame-fg">
              YouTube Video Production Built for Long-Form Viewing
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              A ten-minute or thirty-minute video gives production problems more time to become noticeable. Audio issues, repetitive visuals, weak pacing, and unnecessary sections can affect the viewing experience far more than they would in a short clip. That is why we plan long-form production around the complete viewing experience.
            </p>
          </div>

          {/* 8 APPROACH POINTS GRID */}
          <div className="mt-12 grid gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-2 lg:grid-cols-4">
            {approachPoints.map((item) => (
              <div key={item.num} className="bg-frame-bg p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-black text-frame-accent">
                      {item.num}
                    </span>
                    <span className="text-[10px] font-black uppercase tracking-wider text-frame-muted-fg">
                      Standard
                    </span>
                  </div>
                  <h3 className="mt-4 font-heading text-base md:text-lg font-bold uppercase tracking-tight text-frame-fg">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm font-medium leading-relaxed text-frame-muted-fg">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* QUOTE BANNER & CTA */}
          <div className="mx-auto mt-10 flex max-w-5xl flex-col items-center justify-between gap-6 border-2 border-frame-accent/70 bg-frame-bg p-6 md:p-8 sm:flex-row text-left">
            <div>
              <blockquote className="font-heading text-base md:text-xl font-bold uppercase tracking-tight text-frame-fg">
                &ldquo;The goal is not to make every second feel fast. It is to make the video clear, watchable, and useful from beginning to end.&rdquo;
              </blockquote>
              <p className="mt-2 text-xs font-bold uppercase tracking-widest text-frame-accent">
                Framecipher YouTube Production Philosophy
              </p>
            </div>
            <PosterButton href="/contact" className="shrink-0 text-xs sm:text-sm">
              Plan Your YouTube Video &rarr;
            </PosterButton>
          </div>
        </div>
      </section>
    </div>
  )
}
