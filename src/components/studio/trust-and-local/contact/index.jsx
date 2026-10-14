import StudioServiceLayout from '../../common/StudioServiceLayout'
import GoogleMapEmbed from '../../../common/GoogleMapEmbed'
import { MapPin, Phone, Clock, MessageSquare, ShieldCheck, Mail } from 'lucide-react'

export default function ContactService({ service }) {
  const extraSections = (
    <div className="border-2 border-frame-border bg-frame-bg p-6 md:p-8 space-y-8">
      <div>
        <span className="text-xs font-black uppercase tracking-widest text-frame-accent">
          Verified Studio Credentials
        </span>
        <h3 className="mt-1 font-heading text-xl md:text-2xl font-bold uppercase text-frame-fg">
          Physical Location & Operations
        </h3>
        <p className="mt-2 text-sm text-frame-muted-fg leading-relaxed">
          Please confirm your booking in advance before visiting. We recommend scheduling an initial consultation so our studio space and equipment can be prepared for your inspection.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="border border-frame-border bg-frame-muted/10 p-5">
          <div className="flex items-center gap-2 text-frame-accent mb-2">
            <MapPin className="h-5 w-5" />
            <h4 className="font-heading text-sm font-bold uppercase text-frame-fg">Studio Address</h4>
          </div>
          <p className="text-xs text-frame-muted-fg leading-relaxed">
            FrameCipher Studio<br />
            6th Floor, Eurasia Building<br />
            Next to Khan Polli Jame Masjid<br />
            Matikata Road, ECB Chattar<br />
            Dhaka 1206, Bangladesh
          </p>
        </div>

        <div className="border border-frame-border bg-frame-muted/10 p-5">
          <div className="flex items-center gap-2 text-frame-accent mb-2">
            <Clock className="h-5 w-5" />
            <h4 className="font-heading text-sm font-bold uppercase text-frame-fg">Opening Hours</h4>
          </div>
          <p className="text-xs text-frame-muted-fg leading-relaxed">
            Open 24 Hours / 7 Days a week.<br />
            All production shoots, podcasts, and studio visits scheduled by advance appointment.
          </p>
        </div>

        <div className="border border-frame-border bg-frame-muted/10 p-5">
          <div className="flex items-center gap-2 text-frame-accent mb-2">
            <Phone className="h-5 w-5" />
            <h4 className="font-heading text-sm font-bold uppercase text-frame-fg">Direct Hotline & WhatsApp</h4>
          </div>
          <p className="text-xs text-frame-muted-fg leading-relaxed">
            Phone / WhatsApp: <a href="tel:+8801768146650" className="text-frame-fg font-bold hover:text-frame-accent">+880 1768-146650</a><br />
            Fastest response for booking inquiries and quote requests.
          </p>
        </div>

        <div className="border border-frame-border bg-frame-muted/10 p-5">
          <div className="flex items-center gap-2 text-frame-accent mb-2">
            <ShieldCheck className="h-5 w-5" />
            <h4 className="font-heading text-sm font-bold uppercase text-frame-fg">Parking & Accessibility</h4>
          </div>
          <p className="text-xs text-frame-muted-fg leading-relaxed">
            Dedicated vehicle parking adjacent to Eurasia Building.<br />
            Passenger elevator access directly to the 6th floor studio.
          </p>
        </div>
      </div>

      <div className="border-t border-frame-border/60 pt-6">
        <h4 className="font-heading text-sm font-bold uppercase text-frame-fg mb-3">
          Transit Guidance: Reaching ECB Chattar
        </h4>
        <p className="text-xs text-frame-muted-fg leading-relaxed">
          The studio is located directly off the main Mirpur DOHS - Banani flyover access road at Matikata ECB Chattar. Conveniently accessible within 10–15 minutes from Gulshan, Banani, Uttara, and Mirpur.
        </p>
      </div>

      <div className="pt-2">
        <GoogleMapEmbed
          title="FrameCipher Studio Dhaka (ECB Chattar)"
          description="6th Floor, Eurasia Building, Khan Polli Jame Masjid, Matikata ECB Chattar, Dhaka 1206"
          height="400px"
          showDetails={false}
        />
      </div>
    </div>
  )

  const customData = {
    h1: 'Contact and Book FrameCipher Studio',
    lead: 'Tell us what you want to create, your preferred date and where the content will be published. We will reply with next steps and a customized scope for your quote. We welcome creators, brands, and agencies to visit our studio in person to test acoustics, inspect lighting grids, and discuss project scopes.',
    whatIncluded: [
      'Rapid inquiry response via direct phone and WhatsApp hotline',
      'In-person studio tour and technical infrastructure consultation',
      'Written itemized quote with confirmed deliverable timelines',
      'Clear parking and driving transit instructions',
      'Advance calendar reservation'
    ],
    serviceTypes: [
      { title: 'Video Production Inquiries', desc: 'Corporate, commercial, promotional, and social media video quotes.' },
      { title: 'Podcast Studio Bookings', desc: 'Hourly and batch podcast recording reservations.' },
      { title: 'Product Photography Sessions', desc: 'Catalog and lifestyle e-commerce shoot inquiries.' },
      { title: 'Studio Rental by the Session', desc: 'Hourly, half-day, and full-day shooting space rentals.' }
    ],
    whyMatters: 'Advance communication ensures the studio is calibrated to your exact specifications before you arrive. We review talk outlines, wardrobe choices, backdrops, and lighting setups in advance so your shoot day runs with maximum efficiency.',
    howRuns: [
      'Submit booking inquiry with preferred date, duration, and content type.',
      'Receive prompt scope confirmation and itemized quote.',
      'Confirm reservation with advance deposit.',
      'Arrive at Eurasia Building, 6th Floor, Matikata ECB Chattar.',
      'Execute your shoot in a controlled, sound-isolated environment.'
    ],
    costFactors: [
      'Initial consultation and studio tour are completely free of charge'
    ],
    linksOut: [
      { label: 'Full-Service Video Production', href: '/studio/video-production/' },
      { label: 'Studio Production Pricing', href: '/studio/pricing/' },
      { label: 'Studio Frequently Asked Questions', href: '/studio/faq/' },
      { label: 'Studio Portfolio', href: '/studio/portfolio/' }
    ],
    extraSections
  }

  return <StudioServiceLayout service={service} {...customData} />
}
