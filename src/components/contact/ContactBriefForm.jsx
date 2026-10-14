'use client'

import { useState } from 'react'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
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
      <label className="mb-3 block text-xs font-black uppercase tracking-[0.22em] text-frame-accent truncate" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="h-14 w-full min-w-0 max-w-full border-2 border-frame-border bg-frame-bg px-4 text-base font-semibold text-frame-fg outline-none transition-colors placeholder:text-frame-muted focus:border-frame-accent md:h-16 box-border"
      />
    </div>
  )
}

function SelectField({ label, name, value, onChange, options, groups }) {
  return (
    <div className="w-full min-w-0 max-w-full">
      <label className="mb-3 block text-xs font-black uppercase tracking-[0.22em] text-frame-accent truncate" htmlFor={name}>
        {label}
      </label>
      <div className="relative w-full min-w-0 max-w-full">
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className="h-14 w-full min-w-0 max-w-full appearance-none truncate border-2 border-frame-border bg-frame-bg px-4 pr-10 text-sm font-bold uppercase tracking-tight text-frame-fg outline-none transition-colors focus:border-frame-accent md:h-16 md:text-base cursor-pointer box-border"
        >
          {groups ? (
            groups.map((grp) => (
              <optgroup key={grp.category} label={`── ${grp.category} ──`} className="bg-frame-bg font-black text-frame-accent">
                {grp.items.map((item) => (
                  <option key={item} value={item} className="bg-frame-bg text-frame-fg py-1.5 font-semibold normal-case">
                    {item}
                  </option>
                ))}
              </optgroup>
            ))
          ) : (
            options?.map((option) => (
              <option key={option} value={option} className="bg-frame-bg text-frame-fg py-2 font-semibold">
                {option}
              </option>
            ))
          )}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-frame-accent">
          <svg className="h-4 w-4 fill-current transition-transform duration-200" viewBox="0 0 20 20">
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
      await fetch('/api/inquiries', {
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
      }).catch((e) => console.warn('API save error, fallback to firestore', e))

      // 2. Direct Firestore backups
      if (db) {
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

        try {
          await addDoc(collection(db, 'contacts'), {
            ...formData,
            timestamp: serverTimestamp(),
          })
        } catch (err) {
          console.warn('contacts collection write error:', err)
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
    <div className="w-full min-w-0 max-w-full overflow-hidden border-2 border-frame-border bg-frame-bg p-6 md:p-8">
      <h2 className="font-heading text-[clamp(1.8rem,4vw,3rem)] font-bold uppercase leading-[0.85] tracking-tighter text-frame-fg">
        Send us a brief
      </h2>

      {submitStatus === 'success' && (
        <div className="mt-6 border-2 border-frame-accent bg-frame-accent p-4 text-base font-black uppercase tracking-tighter text-frame-accent-fg">
          Message sent. We will review the brief and reply with the best next step.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="mt-6 border-2 border-frame-border bg-frame-muted p-4 text-base font-black uppercase tracking-tighter text-frame-fg">
          The form could not be sent. Please email us or try WhatsApp.
        </div>
      )}

      <form onSubmit={handleSubmit} className="mt-8 grid gap-7 w-full min-w-0 max-w-full">
        <div className="grid gap-7 md:grid-cols-2 w-full min-w-0">
          <Field label="Name" name="name" value={formData.name} onChange={handleChange} required />
          <Field label="Company" name="company" value={formData.company} onChange={handleChange} />
        </div>
        <div className="grid gap-7 md:grid-cols-2 w-full min-w-0">
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

        <div className="grid gap-7 md:grid-cols-2 w-full min-w-0">
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
          <label className="mb-3 block text-xs font-black uppercase tracking-[0.22em] text-frame-accent truncate" htmlFor="details">
            Project details
          </label>
          <textarea
            id="details"
            name="details"
            value={formData.details}
            onChange={handleChange}
            required
            rows="6"
            className="h-48 w-full min-w-0 max-w-full resize-none border-2 border-frame-border bg-frame-bg px-4 py-4 text-base font-semibold leading-snug text-frame-fg outline-none transition-colors placeholder:text-frame-muted focus:border-frame-accent box-border"
            placeholder="Tell us about the business, offer, goal, current problem, and what you need built or promoted."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="min-h-16 w-full border-2 border-frame-accent bg-frame-accent px-8 py-4 text-base font-black uppercase tracking-tighter text-frame-accent-fg transition-all duration-200 hover:scale-[1.01] active:scale-95 disabled:cursor-not-allowed disabled:opacity-50 md:min-h-20 md:text-lg"
        >
          {isSubmitting ? 'Sending...' : 'Send us a brief'}
        </button>
      </form>
    </div>
  )
}
