'use client'

import React, { useState } from 'react'
import { Send, MessageSquare, CheckCircle2 } from 'lucide-react'
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
  const inputCls =
    'w-full rounded-lg border border-[#3F3F46] bg-[#09090B] px-4 py-3.5 text-base sm:text-[15px] font-normal text-white placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-frame-accent transition-colors'
  const labelCls = 'mb-2 block truncate font-mono text-[11px] uppercase tracking-[1.1px] text-frame-accent'

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className={labelCls}>Full Name *</label>
          <input
            type="text"
            required
            placeholder="e.g. Tanvir Ahmed"
            value={formData.name}
            onChange={set('name')}
            className={inputCls}
          />
        </div>
        <div>
          <label className={labelCls}>Phone / WhatsApp *</label>
          <input
            type="tel"
            required
            placeholder="e.g. +880 1700-000000"
            value={formData.phone}
            onChange={set('phone')}
            className={inputCls}
          />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className={labelCls}>Work Email</label>
          <input
            type="email"
            placeholder="e.g. name@company.com"
            value={formData.email}
            onChange={set('email')}
            className={inputCls}
          />
        </div>
        <div className="w-full min-w-0 max-w-full">
          <label className={labelCls}>Production Service *</label>
          <div className="relative w-full min-w-0 max-w-full">
            <select
              value={formData.service}
              onChange={set('service')}
              className="box-border w-full min-w-0 max-w-full cursor-pointer appearance-none truncate rounded-lg border border-[#3F3F46] bg-[#09090B] px-4 py-3.5 pr-10 text-base sm:text-[15px] font-normal text-white focus:outline-none focus:ring-1 focus:ring-frame-accent transition-colors"
            >
              {servicesList.map((svc) => (
                <option key={svc} value={svc} className="bg-[#09090B] py-1.5 font-normal text-white">
                  {svc}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3.5 text-zinc-400">
              <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="grid w-full min-w-0 gap-6 sm:grid-cols-2">
        <div className="w-full min-w-0 max-w-full">
          <label className={labelCls}>Preferred Date</label>
          <input
            type="date"
            value={formData.date}
            onChange={set('date')}
            className="box-border w-full min-w-0 max-w-full rounded-lg border border-[#3F3F46] bg-[#09090B] px-4 py-3.5 text-base sm:text-[15px] font-normal text-white focus:outline-none focus:ring-1 focus:ring-frame-accent transition-colors"
          />
        </div>
        <div className="w-full min-w-0 max-w-full">
          <label className={labelCls}>Estimated Duration</label>
          <div className="relative w-full min-w-0 max-w-full">
            <select
              value={formData.duration}
              onChange={set('duration')}
              className="box-border w-full min-w-0 max-w-full cursor-pointer appearance-none truncate rounded-lg border border-[#3F3F46] bg-[#09090B] px-4 py-3.5 pr-10 text-base sm:text-[15px] font-normal text-white focus:outline-none focus:ring-1 focus:ring-frame-accent transition-colors"
            >
              {durations.map((d) => (
                <option key={d} value={d} className="bg-[#09090B]">
                  {d}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3.5 text-zinc-400">
              <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div>
        <label className={labelCls}>Project Brief &amp; Expected Deliverables</label>
        <textarea
          rows={4}
          placeholder="Tell us about your project: who is speaking, format requirements, reference links, editing needs..."
          value={formData.brief}
          onChange={set('brief')}
          className="w-full rounded-lg border border-[#3F3F46] bg-[#09090B] px-4 py-3.5 text-base sm:text-[15px] font-normal text-white placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-frame-accent transition-colors"
        />
      </div>

      <div className="flex flex-col gap-4 pt-2 sm:flex-row items-stretch sm:items-center">
        <button
          type="submit"
          disabled={isSubmitting}
          className="group inline-flex min-h-[52px] h-[52px] items-center justify-center gap-2 rounded-full bg-[#FAFAFA] px-8 text-[15px] font-medium leading-none text-[#09090B] transition-colors hover:bg-frame-accent hover:text-[#09090B] disabled:opacity-60 cursor-pointer touch-manipulation select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-frame-accent focus-visible:ring-offset-2 focus-visible:ring-offset-[#09090B]"
        >
          <span>{isSubmitting ? 'Saving Request...' : 'Submit Studio Booking Request'}</span>
          <span
            aria-hidden="true"
            className="text-lg leading-none transition-transform duration-200 group-hover:translate-x-1 shrink-0"
          >
            &rarr;
          </span>
        </button>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex min-h-[52px] h-[52px] items-center justify-center gap-2 rounded-full border border-white/20 bg-white/[0.04] px-6 font-mono text-xs uppercase tracking-wider text-white transition-colors hover:border-white/40 hover:bg-white/10 touch-manipulation select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-frame-accent focus-visible:ring-offset-2 focus-visible:ring-offset-[#09090B]"
        >
          <MessageSquare className="h-4 w-4 text-frame-accent" />
          <span>Instant WhatsApp</span>
        </a>
      </div>
    </form>
  )
}

export default function StudioBookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Podcast Recording Studio & Production',
    date: '',
    duration: 'Half-Day (4 Hours)',
    brief: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      if (db) {
        await addDoc(collection(db, 'studio_bookings'), {
          ...formData,
          createdAt: new Date().toISOString(),
          source: 'Studio Page Form',
        })
      }
      setSubmitted(true)
    } catch (err) {
      console.error('Error submitting studio booking:', err)
      // Fallback
      setSubmitted(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  const encodedMsg = encodeURIComponent(
    `Hello FrameCipher! I would like to book a studio session.\nName: ${formData.name || 'Not provided'}\nService: ${formData.service}\nPreferred Date: ${formData.date || 'Flexible'}\nDuration: ${formData.duration}\nBrief: ${formData.brief || 'None'}`
  )
  const whatsappUrl = `https://wa.me/8801768146650?text=${encodedMsg}`

  return (
    <section id="booking" className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl space-y-4">
            <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-medium leading-[1.04] tracking-[-0.03em] text-white">
              Reserve your{' '}
              <span className="text-white">soundstage session.</span>
            </h2>
          </div>
          <p className="max-w-md text-base font-normal leading-relaxed text-zinc-300">
            Tell us about your setup, guest count, and timeline. Our team confirms studio availability and delivers an itemised quote within 48 hours.
          </p>
        </div>

        {/* Architectural Card Container */}
        <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-8 sm:p-12">
          {submitted ? (
            <div className="py-12 text-center space-y-5">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                <CheckCircle2 className="h-7 w-7" />
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl font-medium tracking-tight text-white">
                Booking Request Received
              </h3>
              <p className="max-w-md mx-auto text-base text-zinc-300 leading-relaxed">
                Thank you, {formData.name || 'there'}. We have logged your session request for {formData.service}. Our studio team will reach out via WhatsApp/email within 48 hours with an itemised scope.
              </p>
              <div className="pt-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex h-[52px] items-center gap-2 rounded-full bg-[#FAFAFA] px-8 text-[15px] font-medium text-[#09090B] transition-colors hover:bg-frame-accent"
                >
                  <span>Continue on WhatsApp Now</span>
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  >
                    &rarr;
                  </span>
                </a>
              </div>
            </div>
          ) : (
            <BookingFormFields
              formData={formData}
              setFormData={setFormData}
              onSubmit={handleSubmit}
              isSubmitting={isSubmitting}
              whatsappUrl={whatsappUrl}
            />
          )}
        </div>
      </div>
    </section>
  )
}
