import React from 'react'
import PosterButton from '../../../home/PosterButton'

const onboardingSteps = [
  {
    step: '01',
    title: 'Request a Community Consultation',
    description: 'Contact us by WhatsApp, email, or our website form to share your active social channels, current response volume, and key goals.',
  },
  {
    step: '02',
    title: 'Receive a Free Account & Inbox Audit',
    description: 'We review your active channels, typical response speeds, common customer questions, review listings, and moderation challenges.',
  },
  {
    step: '03',
    title: 'Get a Custom Scope & SLA Proposal',
    description: 'We define the recommended platform coverage, response hours, escalation workflows, and transparent monthly pricing tailored to your scale.',
  },
  {
    step: '04',
    title: 'Brand Voice & Guardrail Alignment',
    description: 'You review and approve tone guidelines, pre-approved FAQ answers, escalation contacts, and platform moderation boundaries before any replies begin.',
  },
  {
    step: '05',
    title: 'Workflow Setup & Tooling Integration',
    description: 'We establish secure manager access, team routing channels, and escalation verification to ensure zero dropped customer conversations.',
  },
  {
    step: '06',
    title: 'Active Operations & Continuous Telemetry',
    description: 'Our team assumes active inbox management with ongoing monitoring, daily customer response, and monthly reporting to optimize the workflow.',
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
            Getting started is structured and transparent. Here is what you can expect from your first inquiry to daily live operations.
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
                <span className="font-mono text-xs uppercase text-frame-accent">
                  Step {item.step}
                </span>

                <h3 className="mt-3 font-heading text-xl sm:text-2xl font-medium tracking-tight text-white group-hover:text-frame-accent transition-colors">
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
        <div className="mt-14 rounded-xl border border-white/[0.08] bg-[#121214] p-8 sm:p-12 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-frame-accent/60 before:to-transparent">
          <div className="max-w-2xl space-y-3">
            <h3 className="font-heading text-2xl sm:text-4xl font-medium tracking-tight text-white">
              Ready to build a more{' '}
              <span className="italic text-frame-accent">
                responsive brand community?
              </span>
            </h3>
            <p className="text-base font-normal leading-relaxed text-zinc-300">
              Your audience should not have to wonder whether anyone is listening. Framecipher helps businesses manage comments, messages, reviews, moderation, and community conversations through a structured response system built around your brand.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 shrink-0">
            <PosterButton href="/contact" variant="accent">
              Request a Community Consultation &rarr;
            </PosterButton>
            <PosterButton href="/services/social-media-management" variant="outline">
              Explore Social Media Management &rarr;
            </PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
