'use client'

import { MapPin, Navigation, ArrowUpRight, Phone, Clock } from 'lucide-react'
import { contact } from '../../data/agency'

export default function GoogleMapEmbed({
  title = 'FrameCipher Studio Location',
  description = '6th Floor, Eurasia Building, Khan Polli Jame Masjid, Matikata ECB Chattar, Dhaka 1206',
  className = '',
  height = '480px',
  showDetails = true,
  mapQuery = contact.studioCoords,
  zoom = 16,
  directionsUrl = contact.googleMapsUrl || 'https://maps.app.goo.gl/Ht7yUXyMw6V1fAcF6',
}) {
  const mapSrc = `https://maps.google.com/maps?q=${mapQuery}&t=&z=${zoom}&ie=UTF8&output=embed`

  return (
    <div className={`relative isolate overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214] ${className}`}>
      {/* Map Header Bar */}
      <div className="relative z-10 border-b border-white/[0.08] bg-[#18181B] px-6 py-4.5 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/[0.08] bg-[#121214] text-frame-accent">
            <MapPin className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h4 className="font-heading text-sm md:text-base font-medium tracking-tight text-white">
                {title}
              </h4>
              <span className="inline-flex items-center rounded-full border border-white/[0.08] bg-[#121214] px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-wider text-frame-accent">
                Live GPS
              </span>
            </div>
            <p className="text-xs text-zinc-400 mt-0.5 line-clamp-1">{description}</p>
          </div>
        </div>

        <a
          href={directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex min-h-[44px] h-[44px] items-center gap-2 rounded-full border border-white/[0.14] bg-[#18181B] px-5 text-xs font-medium uppercase tracking-wider text-white transition-colors duration-200 hover:border-white/[0.25] hover:bg-[#1f1f23]"
        >
          <span>Open in Google Maps</span>
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>

      {/* Map surface with Cyber-Luxury Dark Shader */}
      <div className="relative w-full bg-[#09090B]" style={{ height }}>
        <iframe
          src={mapSrc}
          title={title}
          width="100%"
          height="100%"
          style={{
            border: 0,
            filter: 'invert(90%) hue-rotate(180deg) contrast(1.18) brightness(0.92) saturate(0.85)',
          }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-full w-full"
        />

        {/* Ambient Map Vignette Overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#121214]/80 via-transparent to-transparent z-10" />

        {/* Floating Location Badge */}
        <div className="pointer-events-none absolute top-4 left-4 z-20 flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#09090B]/90 px-3.5 py-1.5 font-mono text-[11px] text-zinc-300 backdrop-blur-md">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Matikata ECB Chattar &bull; Dhaka 1206</span>
        </div>

        {/* Floating Quick Action Button */}
        <a
          href={directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${title} in Google Maps`}
          className="group absolute bottom-4 right-4 z-20 flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#09090B]/90 px-4 py-2.5 font-mono text-xs uppercase tracking-wider text-white backdrop-blur-md transition-colors hover:border-white/[0.2] hover:bg-[#18181B]"
        >
          <Navigation className="h-3.5 w-3.5 text-frame-accent" />
          <span>Navigate with Maps</span>
          <ArrowUpRight className="h-3.5 w-3.5 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </div>

      {/* Details Bar */}
      {showDetails && (
        <div className="relative z-10 border-t border-white/[0.08] bg-[#18181B] p-5 md:p-6 grid gap-4 sm:grid-cols-3">
          <div className="flex items-start gap-3 rounded-lg border border-white/[0.08] bg-[#121214] p-4 transition-colors hover:border-white/[0.14]">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-white/[0.08] bg-[#18181B] text-frame-accent">
              <Navigation className="h-4 w-4" />
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-white">Transit &amp; Directions</p>
              <p className="text-xs text-zinc-400 mt-1 leading-relaxed">Off Mirpur DOHS to Banani flyover road at Matikata ECB Chattar.</p>
            </div>
          </div>

          <div className="flex items-start gap-3 rounded-lg border border-white/[0.08] bg-[#121214] p-4 transition-colors hover:border-white/[0.14]">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-white/[0.08] bg-[#18181B] text-frame-accent">
              <Clock className="h-4 w-4" />
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-white">Opening Hours</p>
              <p className="text-xs text-zinc-400 mt-1 leading-relaxed">Open 24 Hours &bull; Sessions by advance reservation.</p>
            </div>
          </div>

          <div className="flex items-start gap-3 rounded-lg border border-white/[0.08] bg-[#121214] p-4 transition-colors hover:border-white/[0.14]">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-white/[0.08] bg-[#18181B] text-frame-accent">
              <Phone className="h-4 w-4" />
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-white">Hotline &amp; WhatsApp</p>
              <a href="tel:+8801768146650" className="inline-block text-xs font-mono font-medium text-frame-accent hover:text-white mt-1 transition-colors">
                +880 1768-146650
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
