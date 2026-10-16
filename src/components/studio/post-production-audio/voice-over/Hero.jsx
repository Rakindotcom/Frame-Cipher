'use client'

import Link from 'next/link'
import { PageHero, PosterButton } from '../../../Kinetic'

export default function Hero({ service }) {
  const title = 'Voice Over Recording in Dhaka'
  const subtitle =
    'FrameCipher Studio records Bangla and English voice over in an acoustically isolated booth at Matikata ECB Chattar. Directed sessions with a talent roster, broadcast processing and timed-to-picture delivery — for commercials, explainers, corporate films, documentaries and courses.'

  return (
    <div className="bg-frame-bg text-frame-fg">
      {/* BREADCRUMB */}
      <nav aria-label="Breadcrumb" className="border-b border-frame-border/60 bg-frame-bg/80 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-frame-muted-fg md:px-8">
        <div className="mx-auto flex max-w-[95vw] items-center gap-2 overflow-x-auto">
          <Link href="/" className="transition hover:text-frame-fg">Home</Link>
          <span>/</span>
          <Link href="/studio" className="transition hover:text-frame-fg">Studio</Link>
          <span>/</span>
          <span className="text-frame-accent">Voice Over Studio</span>
        </div>
      </nav>

      {/* HERO */}
      <PageHero
        eyebrow="Bangla & English Voiceover Recording"
        meta="Physical Studio / Matikata ECB Chattar, Dhaka"
        number="01"
        title={title}
        actions={
          <>
            <PosterButton href="#booking">
              Book Voice Over Studio &rarr;
            </PosterButton>
            <PosterButton href="#pricing" variant="outline">
              See VO Rates &rarr;
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
            Final Script In. Broadcast Audio Out.
          </p>
          <h2 className="font-heading text-[clamp(2.2rem,5.5vw,4.5rem)] font-bold uppercase leading-[0.9] tracking-tighter text-frame-fg">
            Booth-Quiet. Director-Led. On Picture.
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
            A voice session goes faster when the script is final, the tone is agreed and pronunciations are settled
            before you arrive. Our isolated vocal booth removes horns, fans and room echo at the source, so the
            recording needs processing — not rescue.
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
            Direct in person from our lounge or live over Zoom. You leave with de-breathed, levelled 24-bit masters —
            or a finished video track with the narration already synced to picture.
          </p>

          {/* PIPELINE BADGES */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 md:gap-3 text-xs md:text-sm font-black uppercase tracking-wider text-frame-fg">
            <span className="border border-frame-border/80 bg-frame-bg px-3.5 py-2">Script & Casting</span>
            <span className="text-frame-accent font-bold">&rarr;</span>
            <span className="border border-frame-border/80 bg-frame-bg px-3.5 py-2">Acoustic Booth Session</span>
            <span className="text-frame-accent font-bold">&rarr;</span>
            <span className="border border-frame-border/80 bg-frame-bg px-3.5 py-2">Master & Sync</span>
            <span className="text-frame-accent font-bold">&rarr;</span>
            <span className="border border-frame-accent bg-frame-accent/10 px-3.5 py-2 text-frame-accent">Broadcast WAV</span>
          </div>
        </div>
      </section>
    </div>
  )
}
