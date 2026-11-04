'use client'

import React from 'react'

const securityPillars = [
  {
    title: 'Secure Authentication',
    desc: 'Implement suitable authentication, session handling, account recovery, and access control based on application requirements.',
  },
  {
    title: 'Role-Based Authorization',
    desc: 'Different users should only access the data and features assigned to their roles.',
  },
  {
    title: 'API Security',
    desc: 'We account for authentication, authorization, validation, secure communication, and appropriate backend controls.',
  },
  {
    title: 'Secure Data Storage',
    desc: 'Sensitive information is handled using suitable storage and transmission practices for the product.',
  },
  {
    title: 'Payment Security',
    desc: 'Payment workflows are implemented around the selected provider and its required security model without storing unnecessary sensitive payment information inside the application.',
  },
  {
    title: 'Permission Management',
    desc: 'Camera, location, notifications, contacts, Bluetooth, and other permissions are requested based on actual feature requirements.',
  },
  {
    title: 'Dependency Maintenance',
    desc: 'Frameworks, plugins, packages, and dependencies need ongoing review as the application evolves and platform versions change.',
  },
]

export default function Security() {
  return (
    <section id="security" className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl space-y-4">
<h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Cross-Platform App Security &amp;{' '}
            <span className="italic text-frame-accent">Data Protection.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Security needs to be considered as part of architecture and application development.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {securityPillars.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between bg-[#0f1011] p-6 sm:p-7 transition-colors hover:bg-[#141516]"
            >
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">
                  0{idx + 1}
                </span>
                <h3 className="mt-3 font-heading text-lg font-medium tracking-tight text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-xs sm:text-sm font-normal leading-relaxed text-zinc-400">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
