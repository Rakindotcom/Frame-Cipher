'use client'

import { ContactHero, ContactDirectLines, ContactBriefForm } from '../components/contact'
import GoogleMapEmbed from '../components/common/GoogleMapEmbed'
import { contact } from '../data/agency'

export default function ContactPage() {
  return (
    <main className="bg-frame-bg text-frame-fg">
      <ContactHero />

      <section className="px-4 py-20 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-[95vw] gap-12 lg:grid-cols-[0.78fr_1.22fr]">
          <ContactDirectLines />
          <ContactBriefForm />
        </div>
      </section>

      {/* Interactive Google Map Section */}
      <section className="border-t-2 border-frame-border bg-frame-muted/10 px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-[95vw]">
          <div className="mb-10 max-w-2xl">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              Our Physical Presence
            </span>
            <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
              Visit Our Dhaka Studio & Office
            </h2>
            <p className="mt-3 text-sm md:text-base font-medium text-frame-muted-fg leading-relaxed">
              Located on the 6th floor of Eurasia Building at Matikata ECB Chattar, Dhaka. Easily accessible from Mirpur DOHS, Banani, and Airport Road.
            </p>
          </div>

          <GoogleMapEmbed
            title="FrameCipher Studio & Headquarters"
            description="6th Floor, Eurasia Building, Khan Polli Jame Masjid, Matikata ECB Chattar, Dhaka 1206"
            height="480px"
            mapQuery={contact.officeCoords}
            zoom={17}
            directionsUrl={contact.officeMapsUrl}
          />
        </div>
      </section>
    </main>
  )
}
