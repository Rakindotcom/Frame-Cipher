'use client'

import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { PosterButton } from '../../../Kinetic'

const contactRows = [
  { icon: MapPin, label: 'Address', value: '6th Floor, Eurasia Building, Khan Polli Jame Masjid, Matikata ECB Chattar, Dhaka 1206, Bangladesh' },
  { icon: Phone, label: 'Phone and WhatsApp', value: '+880 1768-146650', href: 'https://wa.me/8801768146650' },
  { icon: Mail, label: 'Email', value: 'teamframecipher@gmail.com', href: 'mailto:teamframecipher@gmail.com' },
  { icon: Clock, label: 'Hours', value: 'Open 24 hours — sessions by advance reservation' },
]

export default function CTA() {
  return (
    <section id="cta" className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-32 scroll-mt-24">
      <div className="mx-auto max-w-[95vw]">
        <div className="border-2 border-frame-accent bg-frame-accent/10 p-8 md:p-16 lg:p-20">
          <div className="mx-auto max-w-4xl text-center">
            <span className="text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Closing CTA & Contact
            </span>
            <h2 className="mt-4 font-heading text-[clamp(2.4rem,6vw,5.5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
              Book Social Media Video With FrameCipher Studio
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg">
              Tell us your platforms, clip count and posting goal. We guide you through hooks,
              recording day and caption specs.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <PosterButton href="#booking">
                Book a Session &rarr;
              </PosterButton>
              <PosterButton href="/projects#short-video-work" variant="outline">
                View Short-Form Portfolio &rarr;
              </PosterButton>
            </div>

            <div className="mt-12 grid gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-2 text-left">
              {contactRows.map((row, i) => {
                const Icon = row.icon
                const content = (
                  <>
                    <span className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                      <Icon className="h-4 w-4" />
                      {row.label}
                    </span>
                    <p className="mt-2 text-xs sm:text-sm font-bold text-frame-fg">{row.value}</p>
                  </>
                )
                return (
                  <div key={i} className="bg-frame-bg p-5">
                    {row.href ? (
                      <a href={row.href} target={row.href.startsWith('http') ? '_blank' : undefined} rel={row.href.startsWith('http') ? 'noopener noreferrer' : undefined} className="block hover:opacity-80 transition-opacity">
                        {content}
                      </a>
                    ) : (
                      content
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
