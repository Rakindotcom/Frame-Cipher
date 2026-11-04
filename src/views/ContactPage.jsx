'use client'

import { ContactHero, ContactDirectLines, ContactBriefForm } from '../components/contact'
import GoogleMapEmbed from '../components/common/GoogleMapEmbed'
import { contact } from '../data/agency'

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#09090B] text-[#FAFAFA] overflow-x-hidden">
      <ContactHero />

      {/* Direct Channels & Brief Form Container */}
      <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl grid gap-12 lg:grid-cols-[0.8fr_1.2fr] items-start">
          <ContactDirectLines />
          <ContactBriefForm />
        </div>
      </section>

      {/* Interactive Google Map Section */}
      <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-16 text-white md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-2xl">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium leading-[0.96] tracking-tight text-white">
              Visit Our Dhaka{' '}
              <span className="italic text-frame-accent">
                Studio &amp; Office.
              </span>
            </h2>
            <p className="mt-4 text-sm sm:text-base font-normal text-zinc-400 leading-relaxed">
              Located on the 6th floor of Eurasia Building at Matikata ECB Chattar, Dhaka. Easily accessible from Mirpur DOHS, Banani, and Airport Road.
            </p>
          </div>

          <div className="overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214]">
            <GoogleMapEmbed
              title="FrameCipher Studio &amp; Headquarters"
              description="6th Floor, Eurasia Building, Khan Polli Jame Masjid, Matikata ECB Chattar, Dhaka 1206"
              height="480px"
              mapQuery={contact.officeCoords}
              zoom={17}
              directionsUrl={contact.officeMapsUrl}
            />
          </div>
        </div>
      </section>
    </main>
  )
}
