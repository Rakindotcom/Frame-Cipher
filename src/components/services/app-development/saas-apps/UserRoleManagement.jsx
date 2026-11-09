'use client'

import React from 'react'
import {
  User,
  Building2,
  UserPlus,
  ShieldCheck,
  Lock,
  KeyRound,
  Users,
  Clock,
} from 'lucide-react'

const userManagementItems = [
  {
    icon: User,
    title: "User Accounts",
    desc: "Manage registration, login, password recovery, profiles, sessions, and account status."
  },
  {
    icon: Building2,
    title: "Organizations & Workspaces",
    desc: "Group users into companies, workspaces, departments, branches, teams, or other structures required by the product."
  },
  {
    icon: UserPlus,
    title: "Team Invitations",
    desc: "Allow administrators or account owners to invite users and assign appropriate access."
  },
  {
    icon: ShieldCheck,
    title: "Roles & Permissions",
    desc: "Define what users can view, create, edit, approve, export, manage, or administer."
  },
  {
    icon: Lock,
    title: "Role-Based Access Control",
    desc: "Permissions should be enforced across the application and backend rather than relying only on interface-level restrictions."
  },
  {
    icon: KeyRound,
    title: "Enterprise Authentication",
    desc: "For suitable products, authentication can include SSO or other enterprise identity requirements."
  },
  {
    icon: Users,
    title: "Support & Administrative Access",
    desc: "Controlled support access or administrative impersonation can be implemented when it is useful and appropriate for the product."
  },
  {
    icon: Clock,
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
            SaaS User, Team &amp; Role Management.
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Many SaaS products serve organizations rather than individual users, making account structure a core feature.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {userManagementItems.map((item, idx) => {
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
