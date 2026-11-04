'use client'

import React from 'react'
import { MapPin, Phone, Mail, Clock, Navigation, CheckCircle2, ArrowUpRight } from 'lucide-react'
import { contact } from '../../data/agency'

const audienceTypes = [
  'Businesses producing marketing, corporate and brand films',
  'Podcasters, interviewers and talk-show creators',
  'YouTubers and independent educators',
  'E-commerce sellers who need catalogue and lifestyle photos',
  'Founders, executives and consultants building a personal brand',
  'Creative agencies and video crews that need studio space',
]

export default function StudioLocation() {
  return (
    <section id="location" className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl space-y-4">
            <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[1.04] tracking-[-0.03em] text-white">
              Find FrameCipher Studio{' '}
              <span className="italic text-frame-accent">in Dhaka.</span>
            </h2>
          </div>
          <p className="max-w-md text-base font-normal leading-relaxed text-zinc-300">
            Who can book our soundstage, exact geographic coordinates at ECB Chattar, and complete transit instructions.
          </p>
        </div>

        {/* 2-Column Architectural Split */}
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Location & Navigation Dossier */}
          <div className="flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#121214] p-8 sm:p-10">
            <div>
              <div className="mb-4 flex items-center gap-2">
                <MapPin className="h-4 w-4 text-frame-accent" />
                <span className="font-mono text-xs uppercase tracking-[1.1px] text-frame-accent">
                  Address &amp; Arrival Logistics
                </span>
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl font-medium tracking-tight text-white">
                Eurasia Building, 6th Floor
              </h3>

              <div className="mt-6 space-y-4 text-sm font-normal text-zinc-300">
                <div className="flex items-start gap-3 border-b border-white/[0.08] pb-3">
                  <Navigation className="mt-0.5 h-4 w-4 shrink-0 text-frame-accent" />
                  <div>
                    <p className="font-mono text-xs uppercase text-zinc-500">Address</p>
                    <p className="text-zinc-200 mt-0.5">6th Floor, Eurasia Building, Khan Polli Jame Masjid, Matikata ECB Chattar, Dhaka 1206, Bangladesh</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 border-b border-white/[0.08] pb-3">
                  <Navigation className="mt-0.5 h-4 w-4 shrink-0 text-frame-accent" />
                  <div>
                    <p className="font-mono text-xs uppercase text-zinc-500">Getting here</p>
                    <p className="text-zinc-200 mt-0.5">The studio is beside Khan Polli Jame Masjid on Matikata Road at ECB Chattar, close to Mirpur DOHS, with flyover access toward Banani, Gulshan and Airport Road. Dedicated passenger elevator to the 6th floor, with secure parking nearby.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 border-b border-white/[0.08] pb-3">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-frame-accent" />
                  <div>
                    <p className="font-mono text-xs uppercase text-zinc-500">Hours</p>
                    <p className="text-zinc-200 mt-0.5">Open 24 hours (sessions by advance reservation)</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 border-b border-white/[0.08] pb-3">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-frame-accent" />
                  <div>
                    <p className="font-mono text-xs uppercase text-zinc-500">Phone &amp; WhatsApp</p>
                    <p className="mt-0.5">
                      <a href="tel:+8801768146650" className="font-mono text-zinc-200 hover:text-white transition-colors">+880 1768-146650</a>
                      {' '}•{' '}
                      <a href="https://wa.me/8801768146650" target="_blank" rel="noopener noreferrer" className="font-mono text-frame-accent hover:underline">WhatsApp Direct &rarr;</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-frame-accent" />
                  <div>
                    <p className="font-mono text-xs uppercase text-zinc-500">Email</p>
                    <a href="mailto:teamframecipher@gmail.com" className="font-mono text-zinc-200 hover:text-white transition-colors">teamframecipher@gmail.com</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-white/[0.08] pt-6">
              <a
                href={contact.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex h-[52px] items-center gap-2 rounded-full border border-white/20 bg-white/[0.04] px-6 font-mono text-xs uppercase tracking-wider text-white transition-all hover:border-white/40 hover:bg-white/10"
              >
                <span>Get Driving Directions on Google Maps</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>

          {/* Who Can Book Soundstage */}
          <div className="flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#121214] p-8 sm:p-10">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
                <p className="font-mono text-xs uppercase tracking-[1.1px] text-frame-accent">
                  Client Archetypes
                </p>
              </div>
              <h3 className="font-heading text-xl sm:text-2xl font-medium tracking-tight text-white">
                Who Can Book Our Dhaka Studio
              </h3>
              <ul className="mt-6 space-y-3.5">
                {audienceTypes.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 rounded-lg border border-white/[0.04] bg-[#18181B] p-3 text-xs sm:text-sm font-normal text-zinc-300">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-frame-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
