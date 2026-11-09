'use client'

import React from 'react'
import { MapPin, Globe, CheckCircle2 } from 'lucide-react'
import PosterButton from '../../../home/PosterButton'

export default function BangladeshWorldwide() {
  return (
    <section className="relative isolate border-b border-white/10 bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            App Maintenance Services Across Bangladesh &amp; Worldwide.
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Framecipher provides ongoing application maintenance from Bangladesh for businesses that need a reliable technical partner after launch.
          </p>
        </div>

        {/* 2-Column Comparative Layout (gap-6) */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Bangladesh Domestic */}
          <div className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/10 bg-[#0D0D0F] p-8 sm:p-10 transition-all duration-300 hover:border-white/20 hover:bg-[#121214] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-purple-600/20 bg-purple-600/10 text-purple-600 transition-colors group-hover:border-purple-600/40 group-hover:bg-purple-600/15">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-medium tracking-tight text-white">
                      App Maintenance in Bangladesh
                    </h3>
                    <span className="font-mono text-xs text-zinc-400">
                      Dhaka HQ &bull; Local Ecosystem
                    </span>
                  </div>
                </div>
                <span className="font-mono text-xs uppercase tracking-wider text-emerald-400 font-medium">
                  DOMESTIC
                </span>
              </div>

              <p className="mt-6 text-sm sm:text-base text-zinc-300 leading-relaxed">
                We support businesses in Dhaka and across Bangladesh with ongoing application maintenance, bug fixes, platform updates, security maintenance, performance support, and technical improvements. Our local delivery model makes it easier to coordinate directly with your team while maintaining a structured engineering workflow.
              </p>

              <div className="mt-6 space-y-3 pt-6 border-t border-white/10 text-xs sm:text-sm text-zinc-300">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-purple-400 shrink-0" />
                  <span>bKash, Nagad &amp; local payment switch maintenance</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-purple-400 shrink-0" />
                  <span>Same-timezone direct phone &amp; in-person escalation</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-purple-400 shrink-0" />
                  <span>Low-bandwidth &amp; mobile-first device compatibility testing</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 font-mono text-xs text-zinc-400 flex items-center justify-between">
              <span>DHAKA DELIVERY SQUAD</span>
              <span className="text-emerald-400">&bull; ACTIVE</span>
            </div>
          </div>

          {/* International App Support */}
          <div className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/10 bg-[#0D0D0F] p-8 sm:p-10 transition-all duration-300 hover:border-white/20 hover:bg-[#121214] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-purple-600/20 bg-purple-600/10 text-purple-600 transition-colors group-hover:border-purple-600/40 group-hover:bg-purple-600/15">
                    <Globe className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-medium tracking-tight text-white">
                      International App Support
                    </h3>
                    <span className="font-mono text-xs text-zinc-400">
                      Global Timezone Overlap
                    </span>
                  </div>
                </div>
                <span className="font-mono text-xs uppercase tracking-wider text-purple-400 font-medium">
                  GLOBAL REACH
                </span>
              </div>

              <p className="mt-6 text-sm sm:text-base text-zinc-300 leading-relaxed">
                We also work with businesses targeting international markets, including the US, UK, Australia, Canada, and UAE. Remote collaboration allows us to support applications across different markets while keeping maintenance communication organized and transparent.
              </p>

              <div className="mt-6 space-y-3 pt-6 border-t border-white/10 text-xs sm:text-sm text-zinc-300">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-purple-400 shrink-0" />
                  <span>US EST/PST, UK GMT, AEST &amp; UAE GST schedule alignment</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-purple-400 shrink-0" />
                  <span>Stripe, PayPal, AWS, GCP, Sentry &amp; Datadog monitoring</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-purple-400 shrink-0" />
                  <span>GDPR, HIPAA, and platform compliance audit support</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 font-mono text-xs text-zinc-400 flex items-center justify-between">
              <span>GLOBAL TIMEZONES</span>
              <span className="text-purple-400">&bull; 24/7 ESCALATION</span>
            </div>
          </div>
        </div>

        {/* Symmetrical 52px Button Pair */}
        <div className="mt-12 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
          <PosterButton href="/contact" variant="primary" className="h-[52px]">
            Start Your Maintenance Plan
          </PosterButton>
          <PosterButton href="#pricing" variant="outline" className="h-[52px]">
            View Pricing &amp; SLAs
          </PosterButton>
        </div>
      </div>
    </section>
  )
}
