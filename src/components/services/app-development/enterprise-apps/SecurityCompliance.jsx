'use client'

import React from 'react'
import {
  Lock,
  KeyRound,
  Users,
  Smartphone,
  FileCode,
  FileText,
  Server,
  Activity,
  Clock,
  ShieldCheck,
  Globe,
  Search,
} from 'lucide-react'

const securityCompliance = [
  {
    icon: Lock,
    title: "Identity & Access Management",
    desc: "Control authentication and access across users, departments, applications, and connected enterprise systems."
  },
  {
    icon: KeyRound,
    title: "Role-Based Access Control",
    desc: "Define which users can view, create, edit, approve, export, or administer specific information and functions."
  },
  {
    icon: Users,
    title: "Single Sign-On",
    desc: "Integrate supported identity providers so employees can use existing organizational authentication."
  },
  {
    icon: Smartphone,
    title: "Multi-Factor Authentication",
    desc: "Add additional authentication factors where the application's security requirements call for them."
  },
  {
    icon: FileCode,
    title: "Data Encryption",
    desc: "Protect sensitive information during transmission and through appropriate storage practices."
  },
  {
    icon: FileText,
    title: "Audit Logs",
    desc: "Record important administrative, security, and business actions for accountability and investigation."
  },
  {
    icon: Server,
    title: "API Security",
    desc: "Secure APIs through authentication, authorization, validation, access controls, and suitable rate controls."
  },
  {
    icon: Activity,
    title: "Security Monitoring",
    desc: "Monitor important security and application events so unusual activity and technical issues can be identified earlier."
  },
  {
    icon: Clock,
    title: "Data Retention",
    desc: "Define retention, archival, and deletion behavior according to business and legal requirements."
  },
  {
    icon: ShieldCheck,
    title: "Compliance Requirements",
    desc: "Enterprise applications can be designed around the regulatory, contractual, or internal security requirements that apply to the organization."
  },
  {
    icon: Globe,
    title: "Network & Infrastructure Security",
    desc: "Network-level controls, access rules, and infrastructure hardening can be included where the application's risk profile and deployment environment require them."
  },
  {
    icon: Search,
    title: "Third-Party Security Review",
    desc: "Connected external services, vendors, and integrations can introduce additional risk. Where appropriate, third-party interfaces and access are reviewed alongside the application itself."
  }
]

export default function SecurityCompliance() {
  return (
    <section id="security" className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Security, Permissions &amp; Compliance.
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Security should be built into the architecture rather than added near the end of the project.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {securityCompliance.map((item, idx) => {
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
