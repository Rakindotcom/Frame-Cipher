'use client'

import React from 'react'
import { AlertTriangle, XCircle } from 'lucide-react'

const reasonsNotRight = [
  'The target audience has virtually no active user presence on TikTok.',
  'The product or service has little visual, demonstrative, or narrative appeal.',
  'The destination landing page, pricing, or checkout offer is not conversion-ready.',
  'The business cannot support ongoing creative production and video testing.',
  'The target market has restricted TikTok advertising or commerce functionality.',
  'The sales cycle requires high-intent search (where Google Search Ads excels).',
  'There is insufficient monthly budget to support statistically valid creative testing.',
]

export default function WhenNotRight() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-2xl border border-white/[0.08] bg-[#121214] p-8 sm:p-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-yellow-500/30 bg-yellow-500/10 text-yellow-400">
              <AlertTriangle className="h-5 w-5" />
            </span>
            <div>
              <h3 className="font-heading text-2xl sm:text-3xl font-medium text-white">
                When TikTok Ads May Not Be Your Primary Channel
              </h3>
            </div>
          </div>

          <p className="text-sm sm:text-base text-zinc-300 font-normal leading-relaxed mb-6 max-w-3xl">
            TikTok is not automatically the right primary paid channel for every business model. In these scenarios, another acquisition channel (such as Google Ads or LinkedIn Ads) may deserve priority:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-2">
            {reasonsNotRight.map((reason, idx) => (
              <div key={idx} className="flex items-start gap-2.5 rounded-lg border border-white/[0.04] bg-white/[0.02] p-3.5">
                <XCircle className="h-4 w-4 text-zinc-500 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-zinc-300 leading-snug">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
