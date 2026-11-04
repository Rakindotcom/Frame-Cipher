'use client'

import React from 'react'
import {
  MapPin,
  Globe2,
  Laptop,
} from 'lucide-react'
import PosterButton from '../../../home/PosterButton'

export default function BangladeshWorldwide() {
  return (
    <section
      id="bangladesh-worldwide"
      className="border-b border-white/[0.08] py-20 md:py-28 bg-[#09090B] text-white"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
<h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            Android App Development Services Across{' '}
            <span className="italic text-frame-accent">Bangladesh &amp; Worldwide.</span>
          </h2>

          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            Framecipher provides Android app development services for startups, SMEs, established businesses, and digital product teams across Bangladesh and international markets.
          </p>
        </div>

        {/* 3 Regional Cards */}
        <div className="mt-16 grid grid-cols-1 divide-y divide-white/[0.08] overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214] md:grid-cols-3 md:divide-y-0 md:divide-x">
          {/* Card 1: Domestic */}
          <div className="p-8 space-y-4 transition-colors duration-200 hover:bg-white/[0.02]">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/[0.06] bg-white/[0.02] text-frame-accent">
              <MapPin className="h-6 w-6" />
            </div>

            <h3 className="font-heading text-xl font-medium tracking-tight text-white">
              Android App Development in Bangladesh
            </h3>

            <p className="text-sm font-normal leading-relaxed text-zinc-400">
              We work with businesses in Dhaka, Gazipur, Chattogram, Narayanganj, Sylhet, Cumilla, Rajshahi, Khulna, Rangpur, Barishal, and Mymensingh, as well as clients in other parts of Bangladesh.
            </p>

            <p className="text-sm font-normal leading-relaxed text-zinc-400 border-t border-white/[0.06] pt-4">
              For Bangladesh-focused Android products, we can plan around the device range, connectivity, language, payment workflows, and business systems relevant to the target users. Where required and technically supported, this can include local services such as bKash and Nagad.
            </p>
          </div>

          {/* Card 2: International */}
          <div className="p-8 space-y-4 transition-colors duration-200 hover:bg-white/[0.02]">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/[0.06] bg-white/[0.02] text-frame-accent">
              <Globe2 className="h-6 w-6" />
            </div>

            <h3 className="font-heading text-xl font-medium tracking-tight text-white">
              Android Development for International Businesses
            </h3>

            <p className="text-sm font-normal leading-relaxed text-zinc-400">
              We also work with businesses and product teams serving customers in the United States, United Kingdom, Canada, Australia, and UAE.
            </p>

            <p className="text-sm font-normal leading-relaxed text-zinc-400 border-t border-white/[0.06] pt-4">
              International projects can be planned around the target market, supported devices, third-party services, payment providers, backend systems, and Google Play release requirements.
            </p>
          </div>

          {/* Card 3: Remote */}
          <div className="p-8 space-y-4 transition-colors duration-200 hover:bg-white/[0.02]">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/[0.06] bg-white/[0.02] text-frame-accent">
              <Laptop className="h-6 w-6" />
            </div>

            <h3 className="font-heading text-xl font-medium tracking-tight text-white">
              Remote Android Development
            </h3>

            <p className="text-sm font-normal leading-relaxed text-zinc-400">
              You do not need to be based in Dhaka or Bangladesh to work with Framecipher. We can collaborate remotely through online consultations, project management, design reviews, development updates, testing, and release coordination.
            </p>

            <p className="text-sm font-normal leading-relaxed text-zinc-400 border-t border-white/[0.06] pt-4">
              All code check-ins, sprint demonstrations, builds, and device logs are synchronized daily via secure Git and CI/CD pipelines.
            </p>
          </div>
        </div>

        {/* Closing Takeaway & Symmetrical Consultation Button */}
        <div className="mt-12 rounded-xl border border-white/[0.08] bg-[#121214] p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <p className="max-w-2xl font-sans text-sm sm:text-base leading-relaxed text-zinc-300">
            Whether you&apos;re launching a local business app in Bangladesh or building an Android product for an international audience, our development process is structured around your users, technical requirements, and business goals.
          </p>
          <div className="shrink-0">
            <PosterButton href="/contact" variant="accent">
              Book an Android Consultation
            </PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
