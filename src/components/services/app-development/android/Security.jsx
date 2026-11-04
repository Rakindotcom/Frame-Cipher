'use client'

import React from 'react'
import {
  ShieldCheck,
  UserCheck,
  Lock,
  FileCheck,
  GitCommit,
  CreditCard,
  CheckCircle2,
} from 'lucide-react'

const securityPillars = [
  {
    num: '01',
    title: 'Secure Authentication',
    desc: 'Protecting account access through suitable authentication and authorization methods.',
    icon: ShieldCheck,
  },
  {
    num: '02',
    title: 'Role-Based Access',
    desc: 'Controlling what customers, staff, administrators, and other users can view or modify.',
    icon: UserCheck,
  },
  {
    num: '03',
    title: 'Secure API Communication',
    desc: 'Protecting information exchanged between the application, backend, and connected services.',
    icon: Lock,
  },
  {
    num: '04',
    title: 'Data Protection',
    desc: 'Handling sensitive customer and business information according to the application\'s requirements.',
    icon: FileCheck,
  },
  {
    num: '05',
    title: 'Dependency Maintenance',
    desc: 'Keeping relevant libraries, frameworks, and platform components maintained to reduce avoidable security and compatibility risks.',
    icon: GitCommit,
  },
  {
    num: '06',
    title: 'Secure Payment Workflows',
    desc: 'Using appropriate payment-provider integrations and following the required transaction flow.',
    icon: CreditCard,
  },
]

export default function Security() {
  return (
    <section
      id="security"
      className="border-b border-white/[0.08] py-20 md:py-28 bg-[#09090B] text-white"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
<h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            Android App Security &amp;{' '}
            <span className="italic text-frame-accent">Data Protection.</span>
          </h2>

          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            Security should be considered throughout the development process rather than added just before launch.
          </p>
        </div>

        {/* 6-Card Grid */}
        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-3">
          {securityPillars.map((sec, i) => (
            <div
              key={i}
              className="group bg-[#0f1011] p-8 transition-colors duration-200 hover:bg-[#141516]"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-widest text-frame-accent">
                  {sec.num}
                </span>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.06] bg-white/[0.02] text-frame-accent">
                  <sec.icon className="h-5 w-5" />
                </div>
              </div>

              <h3 className="mt-5 font-heading text-xl font-medium tracking-tight text-white">
                {sec.title}
              </h3>

              <p className="mt-3 text-sm font-normal leading-relaxed text-zinc-400">
                {sec.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Security Context Callout */}
        <div className="mt-12 rounded-xl border border-white/[0.08] bg-[#121214] p-6 md:p-8 flex items-start gap-4">
          <CheckCircle2 className="h-5 w-5 text-frame-accent shrink-0 mt-0.5" />
          <p className="font-mono text-sm leading-relaxed text-zinc-300">
            <strong className="text-white">Security Context:</strong> Security requirements depend on the product, data, integrations, and business context, so the exact implementation is defined during technical planning.
          </p>
        </div>
      </div>
    </section>
  )
}
