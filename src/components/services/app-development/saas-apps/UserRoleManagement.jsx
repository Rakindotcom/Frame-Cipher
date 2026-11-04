'use client'

import React from 'react'

const userManagementItems = [
  {
    title: "User Accounts",
    desc: "Manage registration, login, password recovery, profiles, sessions, and account status."
  },
  {
    title: "Organizations & Workspaces",
    desc: "Group users into companies, workspaces, departments, branches, teams, or other structures required by the product."
  },
  {
    title: "Team Invitations",
    desc: "Allow administrators or account owners to invite users and assign appropriate access."
  },
  {
    title: "Roles & Permissions",
    desc: "Define what users can view, create, edit, approve, export, manage, or administer."
  },
  {
    title: "Role-Based Access Control",
    desc: "Permissions should be enforced across the application and backend rather than relying only on interface-level restrictions."
  },
  {
    title: "Enterprise Authentication",
    desc: "For suitable products, authentication can include SSO or other enterprise identity requirements."
  },
  {
    title: "Support \u0026 Administrative Access",
    desc: "Controlled support access or administrative impersonation can be implemented when it is useful and appropriate for the product."
  },
  {
    title: "Session Management",
    desc: "Control active sessions, enforce session policies, handle concurrent access, and support secure logout across devices where the product requires it."
  }
]

export default function UserRoleManagement() {
  return (
    <section id="user-roles" className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl space-y-4">
<h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            SaaS User, Team &amp;{' '}
            <span className="italic text-frame-accent">Role Management.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Many SaaS products serve organizations rather than individual users, making account structure a core feature.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-3">
          {userManagementItems.map((item, idx) => (
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
