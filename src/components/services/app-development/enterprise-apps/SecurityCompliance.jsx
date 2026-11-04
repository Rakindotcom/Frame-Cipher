'use client'

import React from 'react'

const securityCompliance = [
  {
    title: "Identity & Access Management",
    desc: "Control authentication and access across users, departments, applications, and connected enterprise systems."
  },
  {
    title: "Role-Based Access Control",
    desc: "Define which users can view, create, edit, approve, export, or administer specific information and functions."
  },
  {
    title: "Single Sign-On",
    desc: "Integrate supported identity providers so employees can use existing organizational authentication."
  },
  {
    title: "Multi-Factor Authentication",
    desc: "Add additional authentication factors where the application's security requirements call for them."
  },
  {
    title: "Data Encryption",
    desc: "Protect sensitive information during transmission and through appropriate storage practices."
  },
  {
    title: "Audit Logs",
    desc: "Record important administrative, security, and business actions for accountability and investigation."
  },
  {
    title: "API Security",
    desc: "Secure APIs through authentication, authorization, validation, access controls, and suitable rate controls."
  },
  {
    title: "Security Monitoring",
    desc: "Monitor important security and application events so unusual activity and technical issues can be identified earlier."
  },
  {
    title: "Data Retention",
    desc: "Define retention, archival, and deletion behavior according to business and legal requirements."
  },
  {
    title: "Compliance Requirements",
    desc: "Enterprise applications can be designed around the regulatory, contractual, or internal security requirements that apply to the organization."
  },
  {
    title: "Network & Infrastructure Security",
    desc: "Network-level controls, access rules, and infrastructure hardening can be included where the application's risk profile and deployment environment require them."
  },
  {
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
            Security, Permissions &amp; <span className="italic text-frame-accent">Compliance.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Security should be built into the architecture rather than added near the end of the project.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-3">
          {securityCompliance.map((item, idx) => (
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
