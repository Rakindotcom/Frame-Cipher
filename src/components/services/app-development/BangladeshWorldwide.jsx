'use client'

import React from 'react'
import PosterButton from '../../home/PosterButton'

export default function BangladeshWorldwide() {
  return (
    <section className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-8 sm:p-12 md:p-14">
<h2 className="mt-4 font-heading text-2xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white leading-tight">
            App Development Services in{' '}
            <span className="italic text-frame-accent">Bangladesh &amp; Worldwide.</span>
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 text-sm sm:text-base font-normal leading-relaxed text-zinc-300">
            <p>
              Framecipher provides app development services for businesses across Bangladesh, including Dhaka, as well as international clients.
            </p>
            <p>
              We work with products targeting markets such as the UAE, US, UK, Australia, and Canada, adapting the technology, integrations, user experience, and release process to the project&apos;s requirements.
            </p>
            <p>
              For Bangladesh-focused products, we can support relevant local integrations such as bKash or Nagad where applicable. International products may require different payment providers, business systems, or market-specific requirements.
            </p>
            <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-5 flex items-center">
              <p className="font-medium text-white">
                Our goal is to build the right application for the product and market rather than apply the same development approach to every client.
              </p>
            </div>
          </div>

          <div className="mt-8">
            <PosterButton href="/contact" variant="accent">
              Start Your Project Consultation
            </PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
