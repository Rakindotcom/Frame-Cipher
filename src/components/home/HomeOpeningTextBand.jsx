'use client'

import { useState } from 'react'

const textItems = [
  'Strategy that has teeth',
  'Content built for campaigns',
  'Software that carries growth',
  'Media that moves fast',
  'Reporting that changes decisions',
]

export default function HomeOpeningTextBand() {
  const [isPaused, setIsPaused] = useState(false)

  return (
    <aside
      aria-label="Frame Cipher capabilities ticker"
      className="relative border-y border-white/[0.08] bg-white/[0.02] py-3.5 text-white"
    >
      <div className="flex items-center">
        {/* Pause / Play Control */}
        <div className="relative z-10 shrink-0 border-r border-white/[0.08] bg-[#09090B] px-4">
          <button
            type="button"
            onClick={() => setIsPaused((prev) => !prev)}
            aria-pressed={isPaused}
            aria-label={isPaused ? 'Resume text ticker' : 'Pause text ticker'}
            className="group flex items-center gap-2 rounded-full border border-white/[0.14] bg-white/[0.04] px-3 py-1 text-[11px] font-medium text-zinc-400 transition-colors hover:border-frame-accent hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-frame-accent"
          >
            <span
              aria-hidden="true"
              className="inline-block h-2 w-2 rounded-full bg-frame-accent "
            />
            <span>{isPaused ? 'Play' : 'Pause'}</span>
          </button>
        </div>

        {/* FC Marquee Track */}
        <div
          className="fc-marquee overflow-hidden"
          data-fc-marquee-paused={isPaused ? 'true' : 'false'}
        >
          <div className="fc-marquee-track">
            {/* Primary reading copy */}
            <div className="flex shrink-0 items-center gap-8 px-4">
              {textItems.map((item, index) => (
                <div key={`primary-${index}`} className="flex items-center gap-8">
                  <span className="whitespace-nowrap font-heading text-xs font-medium text-white md:text-sm">
                    {item}
                  </span>
                  <span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 shrink-0 rounded-full bg-frame-accent shadow-[0_0_6px_rgba(168,85,247,0.6)]"
                  />
                </div>
              ))}
            </div>

            {/* Duplicated copy for continuous loop (hidden from assistive technology) */}
            <div
              className="flex shrink-0 items-center gap-8 px-4"
              aria-hidden="true"
            >
              {textItems.map((item, index) => (
                <div key={`dup-${index}`} className="flex items-center gap-8">
                  <span className="whitespace-nowrap font-heading text-xs font-medium text-white md:text-sm">
                    {item}
                  </span>
                  <span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 shrink-0 rounded-full bg-frame-accent shadow-[0_0_6px_rgba(168,85,247,0.6)]"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </aside>
  )
}
