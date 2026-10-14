'use client'

import { MapPin, Phone, MessageSquare, Clock, Navigation, CheckCircle2, ArrowUpRight } from 'lucide-react'
import { contact } from '../../data/agency'
import GoogleMapEmbed from '../common/GoogleMapEmbed'

const audienceTypes = [
  'Businesses producing marketing, corporate & brand films',
  'Podcasters, interviewers, and talk-show creators',
  'YouTubers and independent educational publishers',
  'E-commerce merchants requiring catalogue & lifestyle photos',
  'Founders, executives & consultants building personal brands',
  'Creative agencies & video crews needing dedicated studio space',
]

export default function StudioLocation() {
  return (
    <section id="location" className="border-b-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        {/* Section Intro */}
        <div className="mb-14 max-w-3xl">
          <p className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
            Physical Studio Location
          </p>
          <h2 className="mt-3 font-heading text-[clamp(2rem,4.5vw,4.5rem)] font-bold uppercase leading-[0.95] tracking-tighter text-frame-fg">
            Visit FrameCipher Studio in Dhaka.
          </h2>
          <p className="mt-4 text-base font-medium leading-relaxed text-frame-muted-fg">
            Conveniently located at Matikata ECB Chattar, our physical studio provides straightforward road transit from Mirpur DOHS, Banani flyover, Airport Road, and Gulshan.
          </p>
        </div>

        {/* Location & Contact Grid */}
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left Details Card */}
          <div className="flex flex-col justify-between border-2 border-frame-border bg-frame-muted/20 p-8 md:p-10">
            <div>
              <div className="flex items-center gap-2 text-frame-accent mb-4">
                <MapPin className="h-5 w-5" />
                <span className="text-xs font-black uppercase tracking-[0.22em]">
                  Studio Address & Navigation
                </span>
              </div>

              <h3 className="font-heading text-2xl md:text-3xl font-extrabold uppercase text-frame-fg">
                Eurasia Building, 6th Floor
              </h3>

              <div className="mt-6 space-y-4 text-sm font-medium text-frame-muted-fg">
                <div className="flex items-start gap-3 border-b border-frame-border/60 pb-3">
                  <Navigation className="h-4 w-4 shrink-0 text-frame-accent mt-0.5" />
                  <div>
                    <p className="text-frame-fg font-semibold">Complete Physical Address:</p>
                    <p>6th Floor, Eurasia Building, Khan Polli Jame Masjid, Matikata ECB Chattar, Dhaka 1206, Bangladesh</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 border-b border-frame-border/60 pb-3">
                  <Clock className="h-4 w-4 shrink-0 text-frame-accent mt-0.5" />
                  <div>
                    <p className="text-frame-fg font-semibold">Studio Operating Hours:</p>
                    <p>Open 24 Hours • Sessions Scheduled by Advance Reservation</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 border-b border-frame-border/60 pb-3">
                  <Phone className="h-4 w-4 shrink-0 text-frame-accent mt-0.5" />
                  <div>
                    <p className="text-frame-fg font-semibold">Direct Phone / Booking Hotline:</p>
                    <a href="tel:+8801768146650" className="text-frame-accent font-bold hover:underline">
                      +880 1768-146650
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MessageSquare className="h-4 w-4 shrink-0 text-frame-accent mt-0.5" />
                  <div>
                    <p className="text-frame-fg font-semibold">WhatsApp Project Chat:</p>
                    <a href="https://wa.me/8801768146650" target="_blank" rel="noopener noreferrer" className="text-frame-accent font-bold hover:underline">
                      Chat with Studio Director on WhatsApp &rarr;
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-frame-border">
              <a
                href="https://maps.app.goo.gl/Ht7yUXyMw6V1fAcF6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-frame-accent bg-frame-accent px-6 py-3.5 text-xs font-black uppercase tracking-wider text-frame-accent-fg transition-all duration-300 hover:bg-frame-accent/90"
              >
                <span>Get Driving Directions on Google Maps</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Right Audience / Transit Information */}
          <div className="border-2 border-frame-border bg-frame-bg p-8 md:p-10 flex flex-col justify-between">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.24em] text-frame-accent">
                Who Can Book Our Studio?
              </p>
              <h3 className="mt-2 font-heading text-xl md:text-2xl font-bold uppercase text-frame-fg">
                Built for Commercial Excellence.
              </h3>
              <p className="mt-2 text-xs font-medium text-frame-muted-fg leading-relaxed">
                Whether you are an established brand in Dhaka or visiting from elsewhere in Bangladesh, sessions can be reserved ahead of time with all crew and set preparation handled for you.
              </p>

              <ul className="mt-6 space-y-3">
                {audienceTypes.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs font-medium text-frame-muted-fg">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-frame-accent mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 border border-frame-border bg-frame-muted/30 p-4 text-xs font-medium text-frame-muted-fg">
              <strong className="text-frame-fg font-bold">Transit Note:</strong> The studio is adjacent to Khan Polli Jame Masjid right at Matikata ECB Chattar, offering elevator access directly to the 6th floor with dedicated customer vehicle parking nearby.
            </div>
          </div>
        </div>

        {/* Embedded Interactive Google Map */}
        <div className="mt-12">
          <GoogleMapEmbed
            title="FrameCipher Studio Dhaka (ECB Chattar)"
            description="6th Floor, Eurasia Building, Khan Polli Jame Masjid, Matikata Road, ECB Chattar, Dhaka 1206"
            height="460px"
          />
        </div>
      </div>
    </section>
  )
}
