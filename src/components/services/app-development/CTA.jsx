'use client'

import React from 'react'
import {
  PhoneCall,
  Compass,
  FileText,
  CheckCircle2,
  Code2,
  Rocket,
} from 'lucide-react'
import PosterButton from '../../home/PosterButton'

const onboardingSteps = [
  {
    step: '01',
    icon: PhoneCall,
    title: 'Book a Consultation',
    desc: 'Tell us about your product idea, business problem, target users, and current stage.',
  },
  {
    step: '02',
    icon: Compass,
    title: 'Receive an Initial Assessment',
    desc: 'We review the requirements and discuss whether native, cross-platform, SaaS, web, or an MVP-first approach makes sense.',
  },
  {
    step: '03',
    icon: FileText,
    title: 'Get a Custom Proposal',
    desc: 'We define the recommended scope, architecture, timeline, deliverables, and estimated investment.',
  },
  {
    step: '04',
    icon: CheckCircle2,
    title: 'Approve the Scope',
    desc: 'Development begins only after the scope, responsibilities, timeline, and commercial terms are agreed.',
  },
  {
    step: '05',
    icon: Code2,
    title: 'Design & Development',
    desc: 'Our in-house team moves through architecture, UI/UX, development, testing, and launch with agreed review checkpoints.',
  },
  {
    step: '06',
    icon: Rocket,
    title: 'Launch & Support',
    desc: 'Once the application is released, we can continue with maintenance, new features, technical improvements, and ongoing support.',
  },
]

export default function CTA() {
  return (
    <div id="contact-process">
      {/* WHAT HAPPENS NEXT AFTER YOU CONTACT US */}
      <section className="border-b border-white/[0.08] bg-[#09090B] px-4 pt-8 pb-12 sm:px-6 sm:pt-10 sm:pb-14 md:px-8 md:pt-12 md:pb-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl space-y-4">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
              What Happens Next After You Contact Us?
            </h2>

            <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
              Getting started is straightforward. We first understand what you are building before recommending a technology or scope.
            </p>
          </div>

          {/* Modality 3: Shared 1px Hairline Continuum Matrix */}
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-3 shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
            {onboardingSteps.map((item, idx) => {
              const Icon = item.icon
              return (
                <div
                  key={idx}
                  className="group flex flex-col justify-between bg-[#121214] p-7 md:p-8 transition-colors duration-200 hover:bg-[#18181B]"
                >
                  <div>
                    <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                      <Icon className="h-6 w-6 text-purple-600 transition-transform duration-300 group-hover:scale-110" />
                      <span className="font-mono text-xs text-zinc-500 tabular-nums font-semibold">
                        {item.step}
                      </span>
                    </div>
                    <h3 className="mt-4 font-heading text-xl font-medium text-white transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm font-normal leading-relaxed text-zinc-300">
                      {item.desc}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CANONICAL HOMECTA ASYMMETRICAL SPLIT CARD */}
      <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 pt-2 pb-16 text-white sm:px-6 sm:pt-4 sm:pb-20 md:px-8 md:pt-4 md:pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#121214] p-7 sm:p-10 md:p-16 before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent shadow-[0_4px_25px_rgba(0,0,0,0.4)]">
            {/* Heading with Oversized Arrow */}
            <div className="mt-6 flex items-baseline justify-between gap-6 border-b border-white/[0.08] pb-10">
              <h2 className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-medium leading-[0.92] tracking-[-0.03em] text-white">
                Start Your App Development Project.
              </h2>
              <span
                className="hidden lg:block select-none font-mono text-7xl xl:text-8xl font-light text-white/20"
                aria-hidden="true"
              >
                &rarr;
              </span>
            </div>

            {/* Bottom Split: Running Description & Actions Stack */}
            <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-8">
                <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300 max-w-2xl">
                  Have an app idea, an existing application that needs improvement, or a business process that should become software? Tell us what you are trying to build. We&apos;ll help you define the right platform, scope, and development approach for your product.
                </p>
              </div>
              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4">
                <PosterButton href="/contact" variant="accent" className="w-full">
                  Get a Free App Consultation
                </PosterButton>
                <PosterButton href="/contact" variant="outline" className="w-full">
                  Request a Custom Quote
                </PosterButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
