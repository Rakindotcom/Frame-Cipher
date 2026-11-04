'use client'

import React from 'react'

const securityComplianceItems = [
  {
    title: "Tenant Data Isolation",
    desc: "Customer data should remain separated according to the application's tenant and authorization model."
  },
  {
    title: "Authentication & Authorization",
    desc: "Controls should determine both who can sign in and what each user is allowed to access."
  },
  {
    title: "Role-Based Access",
    desc: "Permissions should be enforced across the interface, APIs, and backend."
  },
  {
    title: "Two-Factor Authentication",
    desc: "Multi-factor authentication can be added where stronger account protection is required."
  },
  {
    title: "Encryption",
    desc: "Sensitive data should be protected through appropriate transmission and storage practices for the application's requirements."
  },
  {
    title: "Audit Logs",
    desc: "Important administrative and security-sensitive actions can be logged for accountability and troubleshooting."
  },
  {
    title: "Secure API Access",
    desc: "API endpoints should validate authentication, permissions, request data, and access to tenant-specific resources."
  },
  {
    title: "Data Backups",
    desc: "Backup strategies should consider database recovery and operational continuity."
  },
  {
    title: "Disaster Recovery",
    desc: "Critical SaaS products may require defined recovery priorities, backup restoration procedures, and documented response processes."
  },
  {
    title: "Data Retention",
    desc: "Retention and deletion behavior can be designed around product requirements and applicable legal obligations."
  },
  {
    title: "Enterprise SSO",
    desc: "Enterprise-focused SaaS products may require centralized identity and SSO integrations."
  }
]

export default function SecurityPrivacyCompliance() {
  return (
    <section id="security" className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl space-y-4">
<h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            SaaS Security, Privacy &amp;{' '}
            <span className="italic text-frame-accent">Compliance.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            A SaaS platform can hold customer accounts, business records, payment information, internal workflows, and sensitive operational data.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-3">
          {securityComplianceItems.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between bg-[#0f1011] p-6 sm:p-7 transition-colors hover:bg-[#141516]"
            >
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">
                  0{idx + 1}
                </span>
                <h3 className="mt-3 font-heading text-lg font-medium tracking-tight text-white">
                  {item.title || item.category || item.name}
                </h3>
                <p className="mt-2.5 text-xs sm:text-sm font-normal leading-relaxed text-zinc-400">
                  {item.desc || item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
