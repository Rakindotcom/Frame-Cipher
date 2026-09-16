'use client'

import { useState } from 'react'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../../firebase'
import { services } from '../../data/agency'

const budgetRanges = [
  'Under $500',
  '$500 to $1,500',
  '$1,500 to $5,000',
  '$5,000 to $10,000',
  '$10,000+',
  'Not sure yet',
]

const timelines = ['ASAP', 'This month', '1 to 3 months', '3 months+', 'Not sure yet']

function Field({ label, name, value, onChange, type = 'text', required = false }) {
  return (
    <div>
      <label className="mb-3 block text-xs font-black uppercase tracking-[0.22em] text-frame-accent" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="h-14 w-full border-2 border-frame-border bg-frame-bg px-4 text-base font-semibold text-frame-fg outline-none transition-colors placeholder:text-frame-muted focus:border-frame-accent md:h-16"
      />
    </div>
  )
}

function SelectField({ label, name, value, onChange, options }) {
  return (
    <div>
      <label className="mb-3 block text-xs font-black uppercase tracking-[0.22em] text-frame-accent" htmlFor={name}>
        {label}
      </label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="h-14 w-full border-2 border-frame-border bg-frame-bg px-4 text-sm font-bold uppercase tracking-tight text-frame-fg outline-none transition-colors focus:border-frame-accent md:h-16 md:text-base"
      >
        {options.map((option) => (
          <option key={option} className="bg-frame-bg text-frame-fg py-2">{option}</option>
        ))}
      </select>
    </div>
  )
}

export default function ContactBriefForm() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    serviceNeeded: '360 Marketing',
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
      await addDoc(collection(db, 'contacts'), {
        ...formData,
        timestamp: serverTimestamp(),
      })

      setSubmitStatus('success')
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        serviceNeeded: '360 Marketing',
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
    <div className="border-2 border-frame-border bg-frame-bg p-6 md:p-8">
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

      <form onSubmit={handleSubmit} className="mt-8 grid gap-7">
        <div className="grid gap-7 md:grid-cols-2">
          <Field label="Name" name="name" value={formData.name} onChange={handleChange} required />
          <Field label="Company" name="company" value={formData.company} onChange={handleChange} />
        </div>
        <div className="grid gap-7 md:grid-cols-2">
          <Field label="Email" name="email" type="email" value={formData.email} onChange={handleChange} required />
          <Field label="Phone or WhatsApp" name="phone" value={formData.phone} onChange={handleChange} required />
        </div>
        <SelectField
          label="Service needed"
          name="serviceNeeded"
          value={formData.serviceNeeded}
          onChange={handleChange}
          options={services.map((service) => service.title)}
        />
        <div className="grid gap-7 md:grid-cols-2">
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
        <div>
          <label className="mb-3 block text-xs font-black uppercase tracking-[0.22em] text-frame-accent" htmlFor="details">
            Project details
          </label>
          <textarea
            id="details"
            name="details"
            value={formData.details}
            onChange={handleChange}
            required
            rows="6"
            className="h-48 w-full resize-none border-2 border-frame-border bg-frame-bg px-4 py-4 text-base font-semibold leading-snug text-frame-fg outline-none transition-colors placeholder:text-frame-muted focus:border-frame-accent"
            placeholder="Tell us about the business, offer, goal, current problem, and what you need built or promoted."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="min-h-16 border-2 border-frame-accent bg-frame-accent px-8 py-4 text-base font-black uppercase tracking-tighter text-frame-accent-fg transition-all duration-200 hover:scale-[1.02] active:scale-95 disabled:cursor-not-allowed disabled:opacity-50 md:min-h-20 md:text-lg"
        >
          {isSubmitting ? 'Sending...' : 'Send us a brief'}
        </button>
      </form>
    </div>
  )
}
