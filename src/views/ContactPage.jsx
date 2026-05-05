'use client'

import { useState } from 'react'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase'
import { contact, services } from '../data/agency'

const budgetRanges = [
  'Under $500',
  '$500 to $1,500',
  '$1,500 to $5,000',
  '$5,000 to $10,000',
  '$10,000+',
  'Not sure yet',
]

const timelines = ['ASAP', 'This month', '1 to 3 months', '3 months+', 'Not sure yet']

export default function ContactPage() {
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
    <main className="px-6 pb-24 pt-32">
      <section className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-cyan-300">Contact</p>
          <h1 className="font-heading text-5xl font-bold leading-tight text-white md:text-7xl">
            Tell us what you are building. We will help you plan the next move.
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-400 md:text-xl">
            Whether you need a campaign, content production, a website, software, or a complete 360 growth
            system, send us the brief and we will get back with the best next step.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <div className="border border-white/10 bg-white/[0.04] p-5">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500">Email</p>
              <a href={`mailto:${contact.email}`} className="mt-2 block text-gray-200 hover:text-cyan-200">
                {contact.email}
              </a>
            </div>
            <div className="border border-white/10 bg-white/[0.04] p-5">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500">Phone</p>
              <a href={`tel:${contact.phoneHref}`} className="mt-2 block text-gray-200 hover:text-cyan-200">
                {contact.phone}
              </a>
            </div>
            <div className="border border-white/10 bg-white/[0.04] p-5">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500">Office</p>
              <p className="mt-2 text-gray-200">{contact.location}</p>
            </div>
            <div className="border border-white/10 bg-white/[0.04] p-5">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500">Response time</p>
              <p className="mt-2 text-gray-200">{contact.responseTime}</p>
            </div>
          </div>

          <a
            href={contact.whatsapp}
            className="mt-6 inline-block border border-cyan-300/40 px-6 py-4 text-sm font-bold text-cyan-200 hover:bg-cyan-300/10"
          >
            Talk on WhatsApp
          </a>
        </div>

        <div className="border border-white/10 bg-[#0b0d14] p-6 md:p-8">
          <h2 className="font-heading text-3xl font-bold text-white">Send Us a Brief</h2>

          {submitStatus === 'success' && (
            <div className="mt-5 border border-emerald-400/40 bg-emerald-400/10 p-4 text-emerald-200">
              Message sent. We will review the brief and reply with the best next step.
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mt-5 border border-red-400/40 bg-red-400/10 p-4 text-red-200">
              The form could not be sent. Please email us or try WhatsApp.
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
            <div className="grid gap-4 md:grid-cols-2">
              <Field label="Name" name="name" value={formData.name} onChange={handleChange} required />
              <Field label="Company" name="company" value={formData.company} onChange={handleChange} />
            </div>
            <div className="grid gap-4 md:grid-cols-2">
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
            <div className="grid gap-4 md:grid-cols-2">
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
              <label className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-gray-400" htmlFor="details">
                Project details
              </label>
              <textarea
                id="details"
                name="details"
                value={formData.details}
                onChange={handleChange}
                required
                rows="6"
                className="w-full border border-white/10 bg-[#07070b] px-4 py-3 text-gray-200 outline-none transition-colors focus:border-cyan-300/60"
                placeholder="Tell us about the business, offer, goal, current problem, and what you need built or promoted."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-white px-6 py-4 text-sm font-bold text-[#08080d] transition-opacity disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? 'Sending...' : 'Send Us a Brief'}
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}

function Field({ label, name, value, onChange, type = 'text', required = false }) {
  return (
    <div>
      <label className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-gray-400" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full border border-white/10 bg-[#07070b] px-4 py-3 text-gray-200 outline-none transition-colors focus:border-cyan-300/60"
      />
    </div>
  )
}

function SelectField({ label, name, value, onChange, options }) {
  return (
    <div>
      <label className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-gray-400" htmlFor={name}>
        {label}
      </label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full border border-white/10 bg-[#07070b] px-4 py-3 text-gray-200 outline-none transition-colors focus:border-cyan-300/60"
      >
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </div>
  )
}
