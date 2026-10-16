'use client'

import Link from 'next/link'
import { PageHero, PosterButton } from '../../../Kinetic'

export default function Hero({ service }) {
  const title = 'Green Screen Video Production in Dhaka'
  const subtitle =
    'FrameCipher Studio runs an in-studio chroma keying wall at Matikata ECB Chattar with a pre-lit seamless green stage, real-time key preview and in-house compositing. Step in, present to teleprompter, and leave with clean keyable footage — or a finished composite on your virtual set.'

  return (
    <div className="bg-frame-bg text-frame-fg">
      {/* BREADCRUMB */}
      <nav aria-label="Breadcrumb" className="border-b border-frame-border/60 bg-frame-bg/80 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-frame-muted-fg md:px-8">
        <div className="mx-auto flex max-w-[95vw] items-center gap-2 overflow-x-auto">
          <Link href="/" className="transition hover:text-frame-fg">Home</Link>
          <span>/</span>
          <Link href="/studio" className="transition hover:text-frame-fg">Studio</Link>
          <span>/</span>
          <span className="text-frame-accent">Green Screen Studio</span>
        </div>
      </nav>

      {/* HERO */}
      <PageHero
        eyebrow="Chroma Key & Virtual Set Production"
        meta="Physical Studio / Matikata ECB Chattar, Dhaka"
        number="01"
        title={title}
        actions={
          <>
            <PosterButton href="#booking">
              Book Green Screen Studio &rarr;
            </PosterButton>
            <PosterButton href="#pricing" variant="outline">
              See Studio Rates &rarr;
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
            Pre-Lit Stage. Clean Keys. No Rescue Bills.
          </p>
          <h2 className="font-heading text-[clamp(2.2rem,5.5vw,4.5rem)] font-bold uppercase leading-[0.9] tracking-tighter text-frame-fg">
            Even Light. Crisp Edges. Any Background.
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
            A bad green screen — uneven light, spill on hair and shoulders, ragged edges — costs more in rescue
            compositing than a proper stage saves. Our wall is lit by a calibrated overhead grid with zero hot spots,
            so keying is a non-event and presenters step into any digital background with edge fidelity intact.
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
            Watch the live key on monitors while you record, direct from the floor, and choose raw keyable footage or
            a finished composite with slides, sets and graphics composited in-house.
          </p>

          {/* PIPELINE BADGES */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 md:gap-3 text-xs md:text-sm font-black uppercase tracking-wider text-frame-fg">
            <span className="border border-frame-border/80 bg-frame-bg px-3.5 py-2">Wardrobe & Light Check</span>
            <span className="text-frame-accent font-bold">&rarr;</span>
            <span className="border border-frame-border/80 bg-frame-bg px-3.5 py-2">In-Studio Keying Shoot</span>
            <span className="text-frame-accent font-bold">&rarr;</span>
            <span className="border border-frame-border/80 bg-frame-bg px-3.5 py-2">Spill-Free Composite</span>
            <span className="text-frame-accent font-bold">&rarr;</span>
            <span className="border border-frame-accent bg-frame-accent/10 px-3.5 py-2 text-frame-accent">Virtual-Set Master</span>
          </div>
        </div>
      </section>
    </div>
  )
}
