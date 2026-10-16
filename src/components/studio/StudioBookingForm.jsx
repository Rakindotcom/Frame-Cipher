'use client'

import { useState } from 'react'
import { Send, Phone, MessageSquare, CheckCircle2 } from 'lucide-react'
import { SectionIntro } from '../Kinetic'
import { db } from '../../firebase'
import { collection, addDoc } from 'firebase/firestore'

const servicesList = [
  'Podcast Recording Studio & Production',
  'Video Production',
  'Corporate Video & Company Profiles',
  'Commercial Video & TVC Production',
  'Promotional Video & Brand Story Films',
  'Social Media Video (Reels / TikTok / Shorts)',
  'Multi-Camera Live Streaming Services',
  'Event Videography & Conference Coverage',
  'Commercial Product Photography Studio',
  'Professional Video Editing & Color Grading',
  'Voice Over Recording & Sound Studio',
  'Green Screen Studio & Chroma Keying',
  'Documentary & Milestone Story Production',
  'Studio Space Rental (Dhaka ECB Chattar)',
  'Other / Custom Studio Production Scope',
]

const durations = [
  '2-3 Hours (Quick Session)',
  'Half-Day (4 Hours)',
  'Full-Day (8 Hours)',
  'Multi-Day Production',
  'Recurring Series / Retainer',
]

function BookingFormFields({ formData, setFormData, onSubmit, isSubmitting, whatsappUrl }) {
  const set = (k) => (e) => setFormData({ ...formData, [k]: e.target.value })
  const inputCls = 'w-full border-2 border-frame-border bg-frame-bg px-4 py-3 text-sm text-frame-fg placeholder-frame-muted-fg/60 focus:border-frame-accent focus:outline-none'
  const labelCls = 'mb-2 block truncate text-[11px] font-black uppercase tracking-[0.2em] text-frame-muted-fg'
  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className={labelCls}>Full Name *</label>
          <input type="text" required placeholder="e.g. Tanvir Ahmed" value={formData.name} onChange={set('name')} className={inputCls} />
        </div>
        <div>
          <label className={labelCls}>Phone / WhatsApp *</label>
          <input type="tel" required placeholder="e.g. +880 1700-000000" value={formData.phone} onChange={set('phone')} className={inputCls} />
        </div>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className={labelCls}>Work Email</label>
          <input type="email" placeholder="e.g. name@company.com" value={formData.email} onChange={set('email')} className={inputCls} />
        </div>
        <div className="w-full min-w-0 max-w-full">
          <label className={labelCls}>Production Service *</label>
          <div className="relative w-full min-w-0 max-w-full">
            <select value={formData.service} onChange={set('service')} className="box-border w-full min-w-0 max-w-full cursor-pointer appearance-none truncate border-2 border-frame-border bg-frame-bg px-4 py-3 pr-10 text-sm font-semibold text-frame-fg focus:border-frame-accent focus:outline-none">
              {servicesList.map((svc) => (
                <option key={svc} value={svc} className="bg-frame-bg py-1.5 font-medium text-frame-fg">{svc}</option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3.5 text-frame-accent">
              <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" /></svg>
            </div>
          </div>
        </div>
      </div>
      <div className="grid w-full min-w-0 gap-6 sm:grid-cols-2">
        <div className="w-full min-w-0 max-w-full">
          <label className={labelCls}>Preferred Date</label>
          <input type="date" value={formData.date} onChange={set('date')} className="box-border w-full min-w-0 max-w-full border-2 border-frame-border bg-frame-bg px-4 py-3 text-sm text-frame-fg focus:border-frame-accent focus:outline-none" />
        </div>
        <div className="w-full min-w-0 max-w-full">
          <label className={labelCls}>Estimated Duration</label>
          <div className="relative w-full min-w-0 max-w-full">
            <select value={formData.duration} onChange={set('duration')} className="box-border w-full min-w-0 max-w-full cursor-pointer appearance-none truncate border-2 border-frame-border bg-frame-bg px-4 py-3 pr-10 text-sm font-semibold text-frame-fg focus:border-frame-accent focus:outline-none">
              {durations.map((d) => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3.5 text-frame-accent">
              <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" /></svg>
            </div>
          </div>
        </div>
      </div>
      <div>
        <label className={labelCls}>Project Brief & Expected Deliverables</label>
        <textarea rows={4} placeholder="Tell us about your project: who is speaking, format requirements, reference links, editing needs..." value={formData.brief} onChange={set('brief')} className="w-full border-2 border-frame-border bg-frame-bg px-4 py-3 text-sm text-frame-fg placeholder-frame-muted-fg/60 focus:border-frame-accent focus:outline-none" />
      </div>
      <div className="flex flex-col gap-4 pt-2 sm:flex-row">
        <button type="submit" disabled={isSubmitting} className="flex flex-1 items-center justify-center gap-2 border-2 border-frame-accent bg-frame-accent py-4 text-xs font-black uppercase tracking-wider text-frame-accent-fg transition-all duration-300 hover:bg-frame-accent/90 disabled:opacity-60">
          <Send className="h-4 w-4" />
          <span>{isSubmitting ? 'Saving Request...' : 'Submit Studio Booking Request'}</span>
        </button>
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 border-2 border-frame-border bg-frame-muted/30 px-6 py-4 text-xs font-black uppercase tracking-wider text-frame-fg transition-colors hover:border-frame-fg hover:bg-frame-muted/60">
          <MessageSquare className="h-4 w-4 text-frame-accent" />
          <span>Instant WhatsApp</span>
        </a>
      </div>
    </form>
  )
}

function BookingSuccess({ whatsappUrl }) {
  return (
    <div className="space-y-4 py-12 text-center">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-frame-accent/20 text-frame-accent">
        <CheckCircle2 className="h-8 w-8" />
      </div>
      <h3 className="font-heading text-2xl font-bold uppercase text-frame-fg">Inquiry Received!</h3>
      <p className="mx-auto max-w-md text-sm text-frame-muted-fg">Thank you! Our studio team will review your requirements and respond within 1 business day. For immediate scheduling, jump straight onto WhatsApp:</p>
      <div className="pt-4">
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border-2 border-frame-accent bg-frame-accent px-6 py-3.5 text-xs font-black uppercase tracking-wider text-frame-accent-fg transition-all hover:bg-frame-accent/90">
          <MessageSquare className="h-4 w-4" />
          <span>Open WhatsApp with Project Summary</span>
        </a>
      </div>
    </div>
  )
}

function BookingSidebar() {
  return (
    <div className="flex flex-col justify-between border-2 border-frame-border bg-frame-bg p-6 md:p-8">
      <div className="space-y-6">
        <div>
          <span className="text-[10px] font-black uppercase tracking-[0.24em] text-frame-accent">Direct Assistance</span>
          <h3 className="mt-1 font-heading text-xl font-bold uppercase text-frame-fg md:text-2xl">Call or WhatsApp +880 1768-146650</h3>
          <p className="mt-2 text-xs font-medium leading-relaxed text-frame-muted-fg">Prefer to talk first? Chat with the studio team on WhatsApp:</p>
        </div>
        <div className="space-y-4 text-xs font-medium text-frame-muted-fg">
          <div className="border border-frame-border bg-frame-muted/20 p-4">
            <p className="mb-1 font-black uppercase tracking-wider text-frame-accent">Direct Hotline</p>
            <a href="tel:+8801768146650" className="text-base font-bold text-frame-fg transition-colors hover:text-frame-accent">+880 1768-146650</a>
            <p className="mt-1 text-[11px] text-frame-muted-fg">Available 24/7 for booking queries</p>
          </div>
          <div className="border border-frame-border bg-frame-muted/20 p-4">
            <p className="mb-1 font-black uppercase tracking-wider text-frame-accent">WhatsApp Fast Track</p>
            <a href="https://wa.me/8801768146650" target="_blank" rel="noopener noreferrer" className="text-base font-bold text-frame-fg transition-colors hover:text-frame-accent">Chat on WhatsApp &rarr;</a>
            <p className="mt-1 text-[11px] text-frame-muted-fg">Instant responses during working hours</p>
          </div>
          <div className="border border-frame-border bg-frame-muted/20 p-4">
            <p className="mb-1 font-black uppercase tracking-wider text-frame-accent">Studio Address</p>
            <p className="font-semibold text-frame-fg">6th Floor, Eurasia Building, Khan Polli Jame Masjid, Matikata ECB Chattar, Dhaka 1206</p>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-frame-border pt-4 text-[11px] text-frame-muted-fg">
        Fixed packages from ৳2,000/hr • itemised quotes in 48h • VAT invoices on every payment.
      </div>
    </div>
  )
}

export default function StudioBookingForm({ defaultService }) {
  const initialService = defaultService && servicesList.includes(defaultService) ? defaultService : servicesList[0]
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: initialService, date: '', duration: 'Half-Day (4 Hours)', brief: '' })
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const buildWhatsAppUrl = () => {
    const text = `Hi FrameCipher Studio! I'd like to discuss a studio session:\n• Name: ${formData.name || 'Not specified'}\n• Service: ${formData.service}\n• Target Date: ${formData.date || 'Flexible'}\n• Duration: ${formData.duration}\n• Details: ${formData.brief || 'Ready to discuss requirements'}`
    return `https://wa.me/8801768146650?text=${encodeURIComponent(text)}`
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    const payload = { type: 'studio_booking', name: formData.name, email: formData.email, phone: formData.phone, service: formData.service, date: formData.date, duration: formData.duration, brief: formData.brief }
    try {
      let savedViaApi = false
      try {
        const res = await fetch('/api/inquiries', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
        if (res.ok) savedViaApi = true
      } catch (err) {
        console.warn('API inquiries save error:', err)
      }
      if (!savedViaApi && db) {
        try {
          await addDoc(collection(db, 'contact_messages'), {
            name: formData.name.trim(),
            email: formData.email?.trim() || 'studio-booking@framecipher.com',
            message: `[STUDIO BOOKING]\nService: ${formData.service}\nPhone: ${formData.phone}\nTarget Date: ${formData.date || 'Flexible'}\nDuration: ${formData.duration}\nBrief: ${formData.brief || 'No additional brief'}`,
            createdAt: new Date().toISOString(),
            status: 'new',
            read: false,
          })
        } catch (fsErr) {
          console.warn('Firestore client write error:', fsErr)
        }
      }
      setSubmitted(true)
    } catch (err) {
      console.error('Error submitting studio booking:', err)
      setSubmitted(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="booking" className="bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Request a session" title="Request a session." index="11">
          Tell us about your project. Share preferred dates and deliverables, and we confirm availability and send a
          clear BDT quote before locking your session.
        </SectionIntro>
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="border-2 border-frame-border bg-frame-muted/20 p-6 md:p-10">
            {submitted ? (
              <BookingSuccess whatsappUrl={buildWhatsAppUrl()} />
            ) : (
              <BookingFormFields formData={formData} setFormData={setFormData} onSubmit={handleSubmit} isSubmitting={isSubmitting} whatsappUrl={buildWhatsAppUrl()} />
            )}
          </div>
          <BookingSidebar />
        </div>
      </div>
    </section>
  )
}
