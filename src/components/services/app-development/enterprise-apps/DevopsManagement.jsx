'use client'

import React from 'react'
import {
  Server,
  GitBranch,
  Boxes,
  FileCode2,
  Database,
  Lock,
  RotateCcw,
  Activity
} from 'lucide-react'

const devOpsManagement = [
  {
    icon: Server,
    title: "Development Environments",
    desc: "Maintain suitable development, staging, and production environments to reduce deployment risk."
  },
  {
    icon: GitBranch,
    title: "CI/CD",
    desc: "Automate appropriate build, testing, and deployment steps for more consistent releases."
  },
  {
    icon: Boxes,
    title: "Automated Builds",
    desc: "Generate predictable application builds and deployment artifacts through controlled processes."
  },
  {
    icon: FileCode2,
    title: "Infrastructure as Code",
    desc: "Where appropriate, manage infrastructure configuration through version-controlled definitions rather than repeated manual changes."
  },
  {
    icon: Database,
    title: "Database Migrations",
    desc: "Apply schema changes through tested migration processes with appropriate rollback planning."
  },
  {
    icon: Lock,
    title: "Release Controls",
    desc: "Use approval and release procedures suited to the organization's risk and governance requirements."
  },
  {
    icon: RotateCcw,
    title: "Rollback Planning",
    desc: "Maintain a practical recovery path when a deployment creates unexpected production issues."
  },
  {
    icon: Activity,
    title: "Post-Deployment Monitoring",
    desc: "Monitor production behavior after releases to identify errors, performance changes, and integration issues early."
  }
]

export default function DevopsManagement() {
  return (
    <section id="devops" className="relative border-b border-white/10 bg-[#0A0A0C] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            DevOps, CI/CD &amp; Cloud Operations.
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Enterprise releases need controlled processes, not manual deployment alone.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {devOpsManagement.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={idx}
                className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/10 bg-[#0D0D0F] p-6 sm:p-7 transition-all duration-300 hover:border-white/20 hover:bg-[#121214] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-purple-600/20 bg-purple-600/10 text-purple-600">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-mono text-xs uppercase tracking-wider text-purple-600/80">
                      0{idx + 1}
                    </span>
                  </div>
                  <h3 className="mt-4 font-heading text-lg font-medium tracking-tight text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm font-normal leading-relaxed text-zinc-300">
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
