import React from 'react'
import PosterButton from '../../home/PosterButton'

const onboardingSteps = [
  {
    step: '01',
    title: 'Book Your Free Consultation',
    description: 'Contact us by phone, WhatsApp, email, or our website form to share your goals and ideas.',
  },
  {
    step: '02',
    title: 'Receive a Free Project Assessment',
    description: 'We will review your current site (if you have one), your business goals, and the platform that fits best.',
  },
  {
    step: '03',
    title: 'Get a Custom Proposal',
    description: 'We will explain our recommended approach, estimated timeline, and quotation based on your actual scope, not a generic package price.',
  },
  {
    step: '04',
    title: 'Approve the Plan',
    description: 'No design or development work begins until you review and approve the proposed scope, deliverables, and timeline.',
  },
  {
    step: '05',
    title: 'Design & Development Begins',
    description: 'Our in-house team starts on wireframes and builds, with review checkpoints so you are approving direction at every stage, not seeing the final product for the first time at launch.',
  },
  {
    step: '06',
    title: 'Launch & Ongoing Support',
    description: 'Once your site goes live, we provide guidance on maintenance needs and next steps for keeping it updated, fast, and secure.',
  },
]

export default function CTA() {
  return (
    <section id="cta" className="relative isolate border-t border-white/[0.08] bg-[#09090B] px-4 py-20 md:px-8 md:py-28 scroll-mt-20 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl space-y-4">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
              What happens next after{' '}
              <span className="italic text-frame-accent">you contact us?</span>
            </h2>
          </div>
          <p className="max-w-md text-base font-normal leading-relaxed text-zinc-300">
            Getting started is simple and transparent. Here is what you can expect from your first inquiry to final launch and handover.
          </p>
        </div>

        {/* Modality 3 Blueprint Matrix (2x3 Structured Grid) */}
        <div className="grid grid-cols-1 border-t border-l border-white/[0.08] sm:grid-cols-2 lg:grid-cols-3">
          {onboardingSteps.map((item) => (
            <div
              key={item.step}
              className="group flex flex-col justify-between border-r border-b border-white/[0.08] bg-[#121214] p-8 sm:p-10 transition-colors duration-200 hover:bg-white/[0.02]"
            >
              <div>
                <h3 className="font-heading text-xl sm:text-2xl font-medium tracking-tight text-white group-hover:text-frame-accent transition-colors">
                  {item.title}
                </h3>

                <p className="mt-3.5 text-sm font-normal leading-relaxed text-zinc-300">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Final Conversion Master Banner */}
        <div className="mt-14 rounded-xl border border-white/[0.08] bg-[#121214] p-8 sm:p-12 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className="max-w-2xl space-y-3">
            <h3 className="font-heading text-2xl sm:text-4xl font-medium tracking-tight text-white">
              Ready to build your next website?
            </h3>
            <p className="text-base font-normal leading-relaxed text-zinc-300">
              Get a free consultation and see what we would build for you. Straight answers, clear estimates, and zero sales pressure.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 shrink-0">
            <PosterButton href="/contact" variant="accent">
              Get a Free Website Quote
            </PosterButton>
            <PosterButton href="/contact" variant="outline">
              Talk to Our Dev Team
            </PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
