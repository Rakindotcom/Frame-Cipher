'use client'

import { MapPin, Navigation, ArrowUpRight, Phone, Clock } from 'lucide-react'
import { contact } from '../../data/agency'

export default function GoogleMapEmbed({
  title = 'FrameCipher Studio Location',
  description = '6th Floor, Eurasia Building, Khan Polli Jame Masjid, Matikata ECB Chattar, Dhaka 1206',
  className = '',
  height = '450px',
  showDetails = true,
  mapQuery = contact.studioCoords,
  zoom = 16,
  directionsUrl = contact.googleMapsUrl || 'https://maps.app.goo.gl/Ht7yUXyMw6V1fAcF6',
}) {
  const mapSrc = `https://maps.google.com/maps?q=${mapQuery}&t=&z=${zoom}&ie=UTF8&output=embed`

  return (
    <div className={`border-2 border-frame-border bg-frame-bg overflow-hidden ${className}`}>
      {/* Map Header */}
      <div className="border-b-2 border-frame-border bg-frame-muted/20 px-6 py-4 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-frame-accent">
          <MapPin className="h-5 w-5 shrink-0" />
          <div>
            <h4 className="font-heading text-sm md:text-base font-bold uppercase tracking-tight text-frame-fg">
              {title}
            </h4>
            <p className="text-xs text-frame-muted-fg">{description}</p>
          </div>
        </div>

        <a
          href={directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 border border-frame-accent bg-frame-accent px-4 py-2 text-xs font-black uppercase text-frame-bg hover:opacity-90 transition-opacity"
        >
          <span>Open in Google Maps</span>
          <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </div>

      {/* Map surface — intentionally non-interactive.
          Google's keyless `output=embed` map renders tiles + pin but cannot fetch
          Place Details, which is why clicking the pin showed "Place info couldn't
          load". So the iframe is inert and the whole surface opens the real map. */}
      <div className="relative w-full bg-frame-muted/40" style={{ height }}>
        <iframe
          src={mapSrc}
          title={title}
          width="100%"
          height="100%"
          style={{ border: 0, filter: 'contrast(1.05)' }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="pointer-events-none h-full w-full"
          tabIndex={-1}
          aria-hidden="true"
        />
        <a
          href={directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${title} in Google Maps`}
          className="group absolute inset-0 flex items-end justify-end p-3"
        >
          <span className="inline-flex items-center gap-1.5 border-2 border-frame-border bg-frame-bg/95 px-3 py-1.5 text-[11px] font-black uppercase tracking-wider text-frame-fg shadow-md backdrop-blur transition-colors group-hover:border-frame-accent group-hover:bg-frame-accent group-hover:text-frame-accent-fg">
            <MapPin className="h-3.5 w-3.5" />
            <span>Open in Google Maps</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </span>
        </a>
      </div>

      {/* Optional Details Bar */}
      {showDetails && (
        <div className="border-t-2 border-frame-border bg-frame-muted/10 p-6 grid gap-4 sm:grid-cols-3 text-xs font-medium text-frame-muted-fg">
          <div className="flex items-start gap-2.5">
            <Navigation className="h-4 w-4 shrink-0 text-frame-accent mt-0.5" />
            <div>
              <p className="font-bold uppercase text-frame-fg">Transit & Directions</p>
              <p className="mt-0.5">Off Mirpur DOHS - Banani flyover road at Matikata ECB Chattar.</p>
            </div>
          </div>

          <div className="flex items-start gap-2.5">
            <Clock className="h-4 w-4 shrink-0 text-frame-accent mt-0.5" />
            <div>
              <p className="font-bold uppercase text-frame-fg">Opening Hours</p>
              <p className="mt-0.5">Open 24 Hours • Sessions by advance reservation.</p>
            </div>
          </div>

          <div className="flex items-start gap-2.5">
            <Phone className="h-4 w-4 shrink-0 text-frame-accent mt-0.5" />
            <div>
              <p className="font-bold uppercase text-frame-fg">Hotline & WhatsApp</p>
              <a href="tel:+8801768146650" className="text-frame-fg hover:text-frame-accent font-mono">
                +880 1768-146650
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
