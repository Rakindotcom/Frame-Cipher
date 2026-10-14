'use client'

import { useState } from 'react'
import { Send, Phone, MessageSquare, CheckCircle2, Calendar, Clock, User, Mail } from 'lucide-react'
import { contact } from '../../data/agency'
import { db } from '../../firebase'
import { collection, addDoc } from 'firebase/firestore'

const servicesList = [
  'Podcast Recording Studio & Production',
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

export default function StudioBookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: servicesList[0],
    date: '',
    duration: 'Half-Day (4 Hours)',
    brief: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError(null)

    const payload = {
      type: 'studio_booking',
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      service: formData.service,
      date: formData.date,
      duration: formData.duration,
      brief: formData.brief,
    }

    try {
      // 1. Post to unified API endpoint (saves directly to Firebase Cloud Firestore)
      await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      }).catch((err) => console.warn('API inquiries save error:', err))

      // 2. Client-side Firestore write to contact_messages (verified permitted collection in Cloud rules)
      if (db) {
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

  const buildWhatsAppUrl = () => {
    const text = `Hi FrameCipher Studio! I'd like to discuss a studio session:\n• Name: ${formData.name || 'Not specified'}\n• Service: ${formData.service}\n• Target Date: ${formData.date || 'Flexible'}\n• Duration: ${formData.duration}\n• Details: ${formData.brief || 'Ready to discuss requirements'}`
    return `https://wa.me/8801768146650?text=${encodeURIComponent(text)}`
  }

  return (
    <section id="booking" className="bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        {/* Header */}
        <div className="mb-14 max-w-3xl">
          <p className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
            Request a Session
          </p>
          <h2 className="mt-3 font-heading text-[clamp(2rem,4.5vw,4.5rem)] font-bold uppercase leading-[0.95] tracking-tighter text-frame-fg">
            Tell Us About Your Project.
          </h2>
          <p className="mt-4 text-base font-medium leading-relaxed text-frame-muted-fg">
            Share your preferred dates and deliverables. We will review your production requirements, confirm studio availability, and provide a clear quote before locking in your session.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Form Side */}
          <div className="border-2 border-frame-border bg-frame-muted/20 p-6 md:p-10">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-frame-accent/20 text-frame-accent">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="font-heading text-2xl font-bold uppercase text-frame-fg">
                  Inquiry Received!
                </h3>
                <p className="text-sm text-frame-muted-fg max-w-md mx-auto">
                  Thank you! Our studio team will review your requirements and respond within 1 business day. For immediate scheduling, jump straight onto WhatsApp:
                </p>
                <div className="pt-4">
                  <a
                    href={buildWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border-2 border-frame-accent bg-frame-accent px-6 py-3.5 text-xs font-black uppercase tracking-wider text-frame-accent-fg transition-all hover:bg-frame-accent/90"
                  >
                    <MessageSquare className="h-4 w-4" />
                    <span>Open WhatsApp with Project Summary</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  {/* Name */}
                  <div>
                    <label className="block text-[11px] font-black uppercase tracking-[0.2em] text-frame-muted-fg mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        required
                        placeholder="e.g. Tanvir Ahmed"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full border-2 border-frame-border bg-frame-bg px-4 py-3 text-sm text-frame-fg placeholder-frame-muted-fg/60 focus:border-frame-accent focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-[11px] font-black uppercase tracking-[0.2em] text-frame-muted-fg mb-2">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +880 1700-000000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full border-2 border-frame-border bg-frame-bg px-4 py-3 text-sm text-frame-fg placeholder-frame-muted-fg/60 focus:border-frame-accent focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  {/* Email */}
                  <div>
                    <label className="block text-[11px] font-black uppercase tracking-[0.2em] text-frame-muted-fg mb-2">
                      Work Email
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full border-2 border-frame-border bg-frame-bg px-4 py-3 text-sm text-frame-fg placeholder-frame-muted-fg/60 focus:border-frame-accent focus:outline-none"
                    />
                  </div>

                  {/* Service Type */}
                  <div className="w-full min-w-0 max-w-full">
                    <label className="block text-[11px] font-black uppercase tracking-[0.2em] text-frame-muted-fg mb-2 truncate">
                      Production Service *
                    </label>
                    <div className="relative w-full min-w-0 max-w-full">
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full min-w-0 max-w-full appearance-none truncate border-2 border-frame-border bg-frame-bg px-4 py-3 pr-10 text-sm font-semibold text-frame-fg focus:border-frame-accent focus:outline-none cursor-pointer box-border"
                      >
                        {servicesList.map((svc) => (
                          <option key={svc} value={svc} className="bg-frame-bg text-frame-fg py-1.5 font-medium">
                            {svc}
                          </option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3.5 text-frame-accent">
                        <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                          <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 w-full min-w-0">
                  {/* Target Date */}
                  <div className="w-full min-w-0 max-w-full">
                    <label className="block text-[11px] font-black uppercase tracking-[0.2em] text-frame-muted-fg mb-2 truncate">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full min-w-0 max-w-full border-2 border-frame-border bg-frame-bg px-4 py-3 text-sm text-frame-fg focus:border-frame-accent focus:outline-none box-border"
                    />
                  </div>

                  {/* Session Duration */}
                  <div className="w-full min-w-0 max-w-full">
                    <label className="block text-[11px] font-black uppercase tracking-[0.2em] text-frame-muted-fg mb-2 truncate">
                      Estimated Duration
                    </label>
                    <div className="relative w-full min-w-0 max-w-full">
                      <select
                        value={formData.duration}
                        onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                        className="w-full min-w-0 max-w-full appearance-none truncate border-2 border-frame-border bg-frame-bg px-4 py-3 pr-10 text-sm font-semibold text-frame-fg focus:border-frame-accent focus:outline-none cursor-pointer box-border"
                      >
                        <option value="2-3 Hours (Quick Session)">2-3 Hours (Quick Session)</option>
                        <option value="Half-Day (4 Hours)">Half-Day (4 Hours)</option>
                        <option value="Full-Day (8 Hours)">Full-Day (8 Hours)</option>
                        <option value="Multi-Day Production">Multi-Day Production</option>
                        <option value="Recurring Series / Retainer">Recurring Series / Retainer</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3.5 text-frame-accent">
                        <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                          <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Brief */}
                <div>
                  <label className="block text-[11px] font-black uppercase tracking-[0.2em] text-frame-muted-fg mb-2">
                    Project Brief & Expected Deliverables
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your project: who is speaking, format requirements, reference links, editing needs..."
                    value={formData.brief}
                    onChange={(e) => setFormData({ ...formData, brief: e.target.value })}
                    className="w-full border-2 border-frame-border bg-frame-bg px-4 py-3 text-sm text-frame-fg placeholder-frame-muted-fg/60 focus:border-frame-accent focus:outline-none"
                  />
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex flex-1 items-center justify-center gap-2 border-2 border-frame-accent bg-frame-accent py-4 text-xs font-black uppercase tracking-wider text-frame-accent-fg transition-all duration-300 hover:bg-frame-accent/90 disabled:opacity-60"
                  >
                    <Send className="h-4 w-4" />
                    <span>{isSubmitting ? 'Saving Request...' : 'Submit Studio Booking Request'}</span>
                  </button>

                  <a
                    href={buildWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 border-2 border-frame-border bg-frame-muted/30 px-6 py-4 text-xs font-black uppercase tracking-wider text-frame-fg transition-colors hover:border-frame-fg hover:bg-frame-muted/60"
                  >
                    <MessageSquare className="h-4 w-4 text-frame-accent" />
                    <span>Instant WhatsApp</span>
                  </a>
                </div>
              </form>
            )}
          </div>

          {/* Direct Channels & Studio Trust */}
          <div className="flex flex-col justify-between border-2 border-frame-border bg-frame-bg p-6 md:p-8">
            <div className="space-y-6">
              <div>
                <span className="text-[10px] font-black uppercase tracking-[0.24em] text-frame-accent">
                  Direct Assistance
                </span>
                <h3 className="mt-1 font-heading text-xl md:text-2xl font-bold uppercase text-frame-fg">
                  Talk to the Studio Team
                </h3>
                <p className="mt-2 text-xs font-medium leading-relaxed text-frame-muted-fg">
                  Have a shoot scheduled soon or need to inspect the studio in person? You can reach us directly:
                </p>
              </div>

              <div className="space-y-4 text-xs font-medium text-frame-muted-fg">
                <div className="border border-frame-border bg-frame-muted/20 p-4">
                  <p className="font-black uppercase tracking-wider text-frame-accent mb-1">Direct Hotline</p>
                  <a href="tel:+8801768146650" className="text-base font-bold text-frame-fg hover:text-frame-accent transition-colors">
                    +880 1768-146650
                  </a>
                  <p className="text-[11px] text-frame-muted-fg mt-1">Available 24/7 for booking queries</p>
                </div>

                <div className="border border-frame-border bg-frame-muted/20 p-4">
                  <p className="font-black uppercase tracking-wider text-frame-accent mb-1">WhatsApp Fast Track</p>
                  <a href="https://wa.me/8801768146650" target="_blank" rel="noopener noreferrer" className="text-base font-bold text-frame-fg hover:text-frame-accent transition-colors">
                    Chat on WhatsApp &rarr;
                  </a>
                  <p className="text-[11px] text-frame-muted-fg mt-1">Instant responses during working hours</p>
                </div>

                <div className="border border-frame-border bg-frame-muted/20 p-4">
                  <p className="font-black uppercase tracking-wider text-frame-accent mb-1">Studio Address</p>
                  <p className="text-frame-fg font-semibold">
                    6th Floor, Eurasia Building, Khan Polli Jame Masjid, Matikata ECB Chattar, Dhaka 1206
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-frame-border text-[11px] text-frame-muted-fg">
              All bookings are covered by our verified equipment, soundproofing, and revision agreement.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
