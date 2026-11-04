'use client'

import React from 'react'

const offlineConditions = [
  {
    title: 'Offline Data Access',
    desc: 'Applications can store suitable information locally when users need to continue working without a reliable connection.',
  },
  {
    title: 'Sync & Recovery',
    desc: 'Offline changes can be synchronized when connectivity returns, based on the product\'s data rules.',
  },
  {
    title: 'Retry Handling',
    desc: 'Network requests can be designed to recover from temporary failures rather than leaving users with incomplete workflows.',
  },
  {
    title: 'Slow Network Support',
    desc: 'Loading states, retries, caching, timeouts, and clear feedback can help maintain usability under weaker network conditions.',
  },
  {
    title: 'Conflict Handling',
    desc: 'For products where multiple users can change the same information, synchronization rules should define how conflicting changes are handled.',
  },
]

export default function OfflineConditions() {
  return (
    <section id="offline-conditions" className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl space-y-4">
<h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Offline Functionality &amp;{' '}
            <span className="italic text-frame-accent">Real-World App Conditions.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Mobile users may not always have a fast or stable internet connection.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {offlineConditions.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-7 transition-colors hover:border-white/[0.16]"
            >
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">
                  0{idx + 1}
                </span>
                <h3 className="mt-3 font-heading text-lg font-medium tracking-tight text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-xs sm:text-sm font-normal leading-relaxed text-zinc-400">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
