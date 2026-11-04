'use client'

import { useState } from 'react'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../../firebase'

const budgetRanges = [
  'Under $500',
  '$500 to $1,500',
  '$1,500 to $5,000',
  '$5,000 to $10,000',
  '$10,000+',
  'Not sure yet',
]

const timelines = ['ASAP', 'This month', '1 to 3 months', '3 months+', 'Not sure yet']

export const contactServiceGroups = [
  {
    category: '360 Growth & Strategy',
    items: [
      '360 Growth Marketing Retainer',
      'Brand Strategy & Positioning',
      'Growth & Technical Marketing Audit',
    ],
  },
  {
    category: 'Website Design & Development',
    items: [
      'Business Website Development',
      'E-commerce Website (Shopify / WooCommerce)',
      'High-Converting Landing Page Design',
      'Custom Web App (Next.js / React / Full-Stack)',
      'UI/UX Design & Prototyping',
      'Website Redesign & Speed Optimization',
      'Website Maintenance & Retainer Support',
    ],
  },
  {
    category: 'Mobile & Software Development',
    items: [
      'Android & iOS Mobile App Development',
      'Cross-Platform App Development (Flutter / React Native)',
      'Custom Business Software & CRM Development',
      'SaaS Application & MVP Development',
      'API Development & Integration',
    ],
  },
  {
    category: 'Search Engine Optimization (SEO)',
    items: [
      'Complete SEO Strategy & Monthly Retainer',
      'Local SEO Dhaka & Google Maps Optimization',
      'Technical SEO Audit & Speed Fixes',
      'On-Page SEO & Keyword Architecture',
      'Link Building & High-Authority Digital PR',
      'E-commerce SEO (Shopify / Catalog)',
      'AI Search Optimization (AEO / GEO / Perplexity)',
      'Google Penalty Recovery Services',
    ],
  },
  {
    category: 'Paid Advertising & Media Buying',
    items: [
      'Meta Ads (Facebook & Instagram Advertising)',
      'Google Search, Display & Performance Max Ads',
      'YouTube Video Advertising',
      'TikTok Ads & Viral Campaigns',
      'LinkedIn B2B Lead Generation Ads',
      'Cross-Platform Retargeting & Tracking Setup',
      'Paid Ads Account & Performance Audit',
    ],
  },
  {
    category: 'Social Media Management',
    items: [
      'Full Social Media Management (FB, IG, LinkedIn)',
      'TikTok & Short-Form Video Channel Management',
      'YouTube Channel Management & Optimization',
      'Monthly Content Strategy & Editorial Calendar',
      'Community Management & Customer Engagement',
    ],
  },
  {
    category: 'Content Writing & Copywriting',
    items: [
      'SEO Blog Writing & Content Marketing',
      'High-Converting Website Copywriting',
      'Sales Copywriting & Landing Page Copy',
      'Ad Copywriting & Performance Creatives',
      'Email Marketing Campaigns & Newsletters',
    ],
  },
  {
    category: 'Content Creation & Creative Design',
    items: [
      'Brand Identity, Guidelines & Logo Design',
      'Graphic Design & Marketing Collaterals',
      'Short-Form Video (Reels / TikTok / Shorts)',
      'Motion Graphics & 2D/3D Animation',
      'Commercial Photography & Creative Direction',
    ],
  },
  {
    category: 'Studio Video & Audio Production',
    items: [
      'Corporate Video & Company Profile Shoots',
      'Commercial Video & TVC Production',
      'Promotional Video & Brand Films',
      'Multi-Camera Live Streaming Services',
      'Event Videography & Conference Coverage',
      'Podcast Recording Studio & Episode Production',
      'Commercial Product Photography Studio',
      'Professional Video Editing & Color Grading Suite',
      'Voice Over Recording & Sound Engineering Studio',
      'Green Screen Studio & Chroma Keying',
      'Studio Space Rental (Dhaka ECB Chattar)',
    ],
  },
  {
    category: 'Other / Custom Inquiries',
    items: [
      'Other / Custom Scope Discussion',
    ],
  },
]

function Field({ label, name, value, onChange, type = 'text', required = false }) {
  return (
    <div className="w-full min-w-0 max-w-full">
      <label className="mb-2 block font-mono text-[11px] uppercase tracking-[1.1px] text-zinc-400 truncate" htmlFor={name}>
        {label} {required && <span className="text-frame-accent">*</span>}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="h-13 w-full min-w-0 max-w-full rounded-lg border border-white/[0.08] bg-[#18181B] px-4 text-[16px] sm:text-[15px] font-normal text-white placeholder:text-zinc-500 focus:border-white/[0.2] focus:outline-none focus-visible:ring-2 focus-visible:ring-frame-accent focus-visible:ring-offset-2 focus-visible:ring-offset-[#121214] transition-colors box-border"
      />
    </div>
  )
}

function SelectField({ label, name, value, onChange, options, groups }) {
  return (
    <div className="w-full min-w-0 max-w-full">
      <label className="mb-2 block font-mono text-[11px] uppercase tracking-[1.1px] text-zinc-400 truncate" htmlFor={name}>
        {label}
      </label>
      <div className="relative w-full min-w-0 max-w-full">
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className="h-13 w-full min-w-0 max-w-full appearance-none truncate rounded-lg border border-white/[0.08] bg-[#18181B] px-4 pr-10 text-[16px] sm:text-[14px] font-medium text-white focus:border-white/[0.2] focus:outline-none focus-visible:ring-2 focus-visible:ring-frame-accent focus-visible:ring-offset-2 focus-visible:ring-offset-[#121214] transition-colors cursor-pointer box-border"
        >
          {groups ? (
            groups.map((grp) => (
              <optgroup key={grp.category} label={`── ${grp.category} ──`} className="bg-[#121214] font-mono text-xs text-frame-accent">
                {grp.items.map((item) => (
                  <option key={item} value={item} className="bg-[#18181B] text-white py-1.5 font-normal">
                    {item}
                  </option>
                ))}
              </optgroup>
            ))
          ) : (
            options?.map((option) => (
              <option key={option} value={option} className="bg-[#18181B] text-white py-2 font-normal">
                {option}
              </option>
            ))
          )}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-zinc-400">
          <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default function ContactBriefForm() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    serviceNeeded: contactServiceGroups[0].items[0],
    budgetRange: 'Not sure yet',
    timeline: 'Not sure yet',
    details: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // 1. Send to server inquiries endpoint
      let savedViaApi = false
      try {
        const res = await fetch('/api/inquiries', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            type: 'contact',
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            company: formData.company,
            service: formData.serviceNeeded,
            budget: formData.budgetRange,
            timeline: formData.timeline,
            details: formData.details,
          }),
        })
        if (res.ok) savedViaApi = true
      } catch (e) {
        console.warn('API save error, fallback to firestore', e)
      }

      // 2. Direct Firestore backup ONLY if server API failed
      if (!savedViaApi && db) {
        try {
          await addDoc(collection(db, 'contact_messages'), {
            name: formData.name.trim(),
            email: formData.email.trim(),
            message: `[CONTACT BRIEF]\nCompany: ${formData.company || 'N/A'}\nPhone: ${formData.phone}\nService: ${formData.serviceNeeded}\nBudget: ${formData.budgetRange}\nTimeline: ${formData.timeline}\nDetails: ${formData.details || 'N/A'}`,
            createdAt: new Date().toISOString(),
            status: 'new',
            read: false,
          })
        } catch (err) {
          console.warn('contact_messages write error:', err)
        }
      }

      setSubmitStatus('success')
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        serviceNeeded: contactServiceGroups[0].items[0],
        budgetRange: 'Not sure yet',
        timeline: 'Not sure yet',
        details: '',
      })
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="w-full min-w-0 max-w-full overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 md:p-10">
      <div className="mb-8">
        <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-white">
          Send us a{' '}
          <span className="italic text-frame-accent">
            brief.
          </span>
        </h2>
        <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
          Fill in what you know; leave what you don&apos;t. We&apos;ll schedule a session or respond async.
        </p>
      </div>

      {submitStatus === 'success' && (
        <div className="mb-6 rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-4 font-mono text-xs uppercase tracking-wider text-emerald-300">
          Message sent. We will review the brief and reply with the best next step.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="mb-6 rounded-lg border border-red-500/30 bg-red-500/10 p-4 font-mono text-xs uppercase tracking-wider text-red-300">
          The form could not be sent. Please email us or try WhatsApp directly.
        </div>
      )}

      <form onSubmit={handleSubmit} className="grid gap-6 w-full min-w-0 max-w-full">
        <div className="grid gap-6 md:grid-cols-2 w-full min-w-0">
          <Field label="Name" name="name" value={formData.name} onChange={handleChange} required />
          <Field label="Company" name="company" value={formData.company} onChange={handleChange} />
        </div>
        <div className="grid gap-6 md:grid-cols-2 w-full min-w-0">
          <Field label="Email" name="email" type="email" value={formData.email} onChange={handleChange} required />
          <Field label="Phone or WhatsApp" name="phone" value={formData.phone} onChange={handleChange} required />
        </div>
        
        <SelectField
          label="Service needed"
          name="serviceNeeded"
          value={formData.serviceNeeded}
          onChange={handleChange}
          groups={contactServiceGroups}
        />

        <div className="grid gap-6 md:grid-cols-2 w-full min-w-0">
          <SelectField
            label="Budget range"
            name="budgetRange"
            value={formData.budgetRange}
            onChange={handleChange}
            options={budgetRanges}
          />
          <SelectField
            label="Timeline"
            name="timeline"
            value={formData.timeline}
            onChange={handleChange}
            options={timelines}
          />
        </div>

        <div className="w-full min-w-0 max-w-full">
          <label className="mb-2 block font-mono text-[11px] uppercase tracking-[1.1px] text-zinc-400 truncate" htmlFor="details">
            Project details <span className="text-frame-accent">*</span>
          </label>
          <textarea
            id="details"
            name="details"
            value={formData.details}
            onChange={handleChange}
            required
            rows="5"
            className="w-full min-w-0 max-w-full resize-none rounded-lg border border-white/[0.08] bg-[#18181B] p-4 text-[16px] sm:text-[15px] font-normal leading-relaxed text-white placeholder:text-zinc-500 focus:border-white/[0.2] focus:outline-none focus-visible:ring-2 focus-visible:ring-frame-accent focus-visible:ring-offset-2 focus-visible:ring-offset-[#121214] transition-colors box-border"
            placeholder="Tell us about the business, offer, goal, current problem, and what you need built or promoted."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="group sw-btn sw-btn-primary min-h-[52px] h-[52px] px-8 text-[15px] font-medium leading-none text-[#09090B] bg-[#FAFAFA] rounded-full w-full flex items-center justify-center gap-2.5 transition-transform hover:scale-[1.01] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer touch-manipulation select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-frame-accent focus-visible:ring-offset-2 focus-visible:ring-offset-[#121214]"
        >
          <span>{isSubmitting ? 'Sending...' : 'Send us a brief'}</span>
          <span aria-hidden="true" className="text-lg leading-none transition-transform duration-200 group-hover:translate-x-1 shrink-0">
            &rarr;
          </span>
        </button>
      </form>
    </div>
  )
}
