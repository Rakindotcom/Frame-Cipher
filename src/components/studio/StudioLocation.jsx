'use client'

import { MapPin, Phone, MessageSquare, Mail, Clock, Navigation, CheckCircle2, ArrowUpRight } from 'lucide-react'
import { SectionIntro } from '../Kinetic'
import GoogleMapEmbed from '../common/GoogleMapEmbed'
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
    <section id="location" className="border-b-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Visit & who books" title="Find FrameCipher Studio in Dhaka." index="08">
          Who can book, where we are, and how to reach us.
        </SectionIntro>
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="flex flex-col justify-between border-2 border-frame-border bg-frame-muted/20 p-8 md:p-10">
            <div>
              <div className="mb-4 flex items-center gap-2 text-frame-accent">
                <MapPin className="h-5 w-5" />
                <span className="text-xs font-black uppercase tracking-[0.22em]">Address & Getting Here</span>
              </div>
              <h3 className="font-heading text-2xl font-extrabold uppercase text-frame-fg md:text-3xl">Eurasia Building, 6th Floor</h3>
              <div className="mt-6 space-y-4 text-sm font-medium text-frame-muted-fg">
                <div className="flex items-start gap-3 border-b border-frame-border/60 pb-3">
                  <Navigation className="mt-0.5 h-4 w-4 shrink-0 text-frame-accent" />
                  <div>
                    <p className="font-semibold text-frame-fg">Address:</p>
                    <p>6th Floor, Eurasia Building, Khan Polli Jame Masjid, Matikata ECB Chattar, Dhaka 1206, Bangladesh</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 border-b border-frame-border/60 pb-3">
                  <Navigation className="mt-0.5 h-4 w-4 shrink-0 text-frame-accent" />
                  <div>
                    <p className="font-semibold text-frame-fg">Getting here:</p>
                    <p>The studio is beside Khan Polli Jame Masjid on Matikata Road at ECB Chattar, close to Mirpur DOHS, with flyover access toward Banani, Gulshan and Airport Road. There is an elevator to the 6th floor, and parking is nearby.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 border-b border-frame-border/60 pb-3">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-frame-accent" />
                  <div>
                    <p className="font-semibold text-frame-fg">Hours:</p>
                    <p>Open 24 hours — sessions by advance reservation</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 border-b border-frame-border/60 pb-3">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-frame-accent" />
                  <div>
                    <p className="font-semibold text-frame-fg">Phone and WhatsApp:</p>
                    <a href="tel:+8801768146650" className="font-bold text-frame-accent hover:underline">+880 1768-146650</a>
                    {' '}•{' '}
                    <a href="https://wa.me/8801768146650" target="_blank" rel="noopener noreferrer" className="font-bold text-frame-accent hover:underline">WhatsApp &rarr;</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-frame-accent" />
                  <div>
                    <p className="font-semibold text-frame-fg">Email:</p>
                    <a href="mailto:teamframecipher@gmail.com" className="font-bold text-frame-accent hover:underline">teamframecipher@gmail.com</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 border-t border-frame-border pt-6">
              <a href={contact.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border-2 border-frame-accent bg-frame-accent px-6 py-3.5 text-xs font-black uppercase tracking-wider text-frame-accent-fg transition-all duration-300 hover:bg-frame-accent/90">
                <span>Get Driving Directions on Google Maps</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
          <div className="flex flex-col justify-between border-2 border-frame-border bg-frame-bg p-8 md:p-10">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.24em] text-frame-accent">Who Can Book Our Dhaka Studio</p>
              <ul className="mt-6 space-y-3">
                {audienceTypes.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs font-medium text-frame-muted-fg">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-frame-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8 border border-frame-border bg-frame-muted/30 p-4 text-xs font-medium text-frame-muted-fg">
              <strong className="font-bold text-frame-fg">Power backup:</strong> the studio has IPS and generator power backup — recording continues through power cuts.
            </div>
          </div>
        </div>
        <div className="mt-12">
          <GoogleMapEmbed title="FrameCipher Studio Dhaka (ECB Chattar)" description="6th Floor, Eurasia Building, Khan Polli Jame Masjid, Matikata Road, ECB Chattar, Dhaka 1206" height="460px" mapQuery={contact.studioCoords} directionsUrl={contact.googleMapsUrl} />
        </div>
      </div>
    </section>
  )
}
