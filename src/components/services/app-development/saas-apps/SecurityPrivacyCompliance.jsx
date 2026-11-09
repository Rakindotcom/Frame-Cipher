'use client'

import React from 'react'
import {
  ShieldCheck,
  Lock,
  KeyRound,
  Smartphone,
  FileCode,
  FileText,
  Server,
  Database,
  RefreshCw,
  Clock,
  Building2,
} from 'lucide-react'

const securityComplianceItems = [
  {
    icon: ShieldCheck,
    title: "Tenant Data Isolation",
    desc: "Customer data should remain separated according to the application's tenant and authorization model."
  },
  {
    icon: Lock,
    title: "Authentication & Authorization",
    desc: "Controls should determine both who can sign in and what each user is allowed to access."
  },
  {
    icon: KeyRound,
    title: "Role-Based Access",
    desc: "Permissions should be enforced across the interface, APIs, and backend."
  },
  {
    icon: Smartphone,
    title: "Two-Factor Authentication",
    desc: "Multi-factor authentication can be added where stronger account protection is required."
  },
  {
    icon: FileCode,
    title: "Encryption",
    desc: "Sensitive data should be protected through appropriate transmission and storage practices for the application's requirements."
  },
  {
    icon: FileText,
    title: "Audit Logs",
    desc: "Important administrative and security-sensitive actions can be logged for accountability and troubleshooting."
  },
  {
    icon: Server,
    title: "Secure API Access",
    desc: "API endpoints should validate authentication, permissions, request data, and access to tenant-specific resources."
  },
  {
    icon: Database,
    title: "Data Backups",
    desc: "Backup strategies should consider database recovery and operational continuity."
  },
  {
    icon: RefreshCw,
    title: "Disaster Recovery",
    desc: "Critical SaaS products may require defined recovery priorities, backup restoration procedures, and documented response processes."
  },
  {
    icon: Clock,
    title: "Data Retention",
    desc: "Retention and deletion behavior can be designed around product requirements and applicable legal obligations."
  },
  {
    icon: Building2,
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
            SaaS Security, Privacy &amp; Compliance.
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            A SaaS platform can hold customer accounts, business records, payment information, internal workflows, and sensitive operational data.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {securityComplianceItems.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={idx}
                className="group relative flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#0D0D0F] p-8 md:p-10 transition-all duration-300 hover:border-white/[0.16] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-purple-500/20 bg-purple-500/10 text-purple-600">
                      <Icon className="h-6 w-6 text-purple-600" />
                    </div>
                    <span className="font-mono text-xs uppercase tracking-wider text-purple-400">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="font-heading text-xl font-medium text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm font-normal leading-relaxed text-zinc-300">
                    {item.desc}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
