'use client'

import Link from 'next/link'
import { PageHero, PosterButton } from '../../../Kinetic'

export default function Hero({ service }) {
  const title = 'Video Post-Production Services in Dhaka'
  const subtitle =
    'FrameCipher Studio finishes video shot at our studio or sent in from elsewhere. Bring your footage on an SSD or by cloud drive and one in-house team handles story assembly, colour grading, dialogue cleanup, sound design and platform masters — so externally shot material still leaves as one coherent film.'

  return (
    <div className="bg-frame-bg text-frame-fg">
      {/* BREADCRUMB */}
      <nav aria-label="Breadcrumb" className="border-b border-frame-border/60 bg-frame-bg/80 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-frame-muted-fg md:px-8">
        <div className="mx-auto flex max-w-[95vw] items-center gap-2 overflow-x-auto">
          <Link href="/" className="transition hover:text-frame-fg">Home</Link>
          <span>/</span>
          <Link href="/studio" className="transition hover:text-frame-fg">Studio</Link>
          <span>/</span>
          <span className="text-frame-accent">Post-Production</span>
        </div>
      </nav>

      {/* HERO */}
      <PageHero
        eyebrow="Finishing, Grading & Sound Suite"
        meta="Physical Studio / Matikata ECB Chattar, Dhaka"
        number="01"
        title={title}
        actions={
          <>
            <PosterButton href="#booking">
              Book Post-Production &rarr;
            </PosterButton>
            <PosterButton href="#pricing" variant="outline">
              See Finishing Rates &rarr;
            </PosterButton>
          </>
        }
      >
        {subtitle}
      </PageHero>

      {/* VALUE PROPOSITION SECTION */}
      <section className="border-b-2 border-frame-border bg-frame-muted/30 px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent mb-4">
            Raw Footage In. Finished Masters Out.
          </p>
          <h2 className="font-heading text-[clamp(2.2rem,5.5vw,4.5rem)] font-bold uppercase leading-[0.9] tracking-tighter text-frame-fg">
            Externally Shot. Studio Finished.
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
            Uneven colour, inconsistent volume and shapeless pacing are what make footage look amateur — whatever
            camera shot it. Our finishing suite conforms your material, balances every shot against the next, and
            restores dialogue recorded in noisy rooms, so the final export looks deliberate on YouTube, Meta and broadcast.
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg wide:text-lg">
            Send drives or cloud links with your brief and deadline. We verify every file on intake, cut proxies for
            fast review, and return broadcast-safe masters with subtitles and aspect-ratio versions included.
          </p>

          {/* PIPELINE BADGES */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 md:gap-3 text-xs md:text-sm font-black uppercase tracking-wider text-frame-fg">
            <span className="border border-frame-border/80 bg-frame-bg px-3.5 py-2">SSD & Cloud Handoff</span>
            <span className="text-frame-accent font-bold">&rarr;</span>
            <span className="border border-frame-border/80 bg-frame-bg px-3.5 py-2">Story Assembly</span>
            <span className="text-frame-accent font-bold">&rarr;</span>
            <span className="border border-frame-border/80 bg-frame-bg px-3.5 py-2">Grade & Sound Finish</span>
            <span className="text-frame-accent font-bold">&rarr;</span>
            <span className="border border-frame-accent bg-frame-accent/10 px-3.5 py-2 text-frame-accent">Multi-Ratio Masters</span>
          </div>
        </div>
      </section>
    </div>
  )
}
