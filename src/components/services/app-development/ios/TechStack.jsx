'use client'

import React from 'react'
import {
  Code2,
  Layout,
  Terminal,
  Layers,
  Globe,
  KeyRound,
  Database,
  Cloud,
  Sparkles,
  CheckCircle2,
  Rocket,
} from 'lucide-react'

const techStack = [
  { icon: Code2, layer: 'Language', tech: 'Swift 6 & Modern Concurrency' },
  { icon: Layout, layer: 'UI Frameworks', tech: 'SwiftUI (Declarative), UIKit (Legacy & Custom Controls)' },
  { icon: Terminal, layer: 'Development Environment', tech: 'Xcode, Instruments, Apple Developer SDKs' },
  { icon: Layers, layer: 'Architecture Patterns', tech: 'MVVM-C, Clean Swift, Modular Package Architecture' },
  { icon: Globe, layer: 'Networking & APIs', tech: 'URLSession, async/await, RESTful & GraphQL endpoints' },
  { icon: KeyRound, layer: 'Authentication', tech: 'Sign in with Apple, Face ID / Touch ID (LocalAuthentication), OAuth 2.0' },
  { icon: Database, layer: 'Local Data & Persistence', tech: 'SwiftData, CoreData, Keychain Services, App Group Shared Storage' },
  { icon: Cloud, layer: 'Cloud & Push Services', tech: 'Apple Push Notification service (APNs), CloudKit, Firebase Analytics' },
  { icon: Sparkles, layer: 'Apple Frameworks', tech: 'StoreKit 2, MapKit, CoreLocation, HealthKit, CallKit, WidgetKit' },
  { icon: CheckCircle2, layer: 'Testing & QA', tech: 'XCTest (Unit), XCUITest (UI Automations), Real iPhone & iPad Matrix' },
  { icon: Rocket, layer: 'Distribution & Release', tech: 'TestFlight Beta, Provisioning Profiles, App Store Connect Automation' },
]

export default function TechStack() {
  return (
    <section id="tech-stack" className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            iOS Technology Stack.
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            We select the Apple technology stack around your application&apos;s requirements, existing systems, supported devices, and long-term maintenance needs.
          </p>
        </div>

        {/* Structured Architectural Table */}
        <div className="relative overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214] shadow-xl before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent">
          <div className="border-b border-white/[0.08] px-6 py-4 flex items-center justify-between bg-[#18181B]">
            <span className="font-mono text-xs uppercase tracking-wider text-zinc-400">
              Production Stack
            </span>
            <span className="font-mono text-[11px] uppercase text-purple-400 font-semibold">
              Swift 6 Ready
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left font-sans text-sm">
              <thead className="border-b border-white/[0.08] bg-[#141416] font-mono text-xs uppercase text-zinc-400">
                <tr>
                  <th className="p-4 sm:p-5 w-1/3 border-r border-white/[0.08] text-white">Architecture Layer</th>
                  <th className="p-4 sm:p-5 text-purple-400">Adopted Technologies</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.06] text-zinc-300">
                {techStack.map((row, idx) => {
                  const Icon = row.icon
                  return (
                    <tr key={idx} className="transition-colors hover:bg-white/[0.04]">
                      <td className="p-4 sm:p-5 font-heading text-sm font-medium text-white border-r border-white/[0.08] whitespace-nowrap">
                        <div className="flex items-center gap-3">
                          <Icon className="h-4 w-4 text-purple-600 shrink-0" strokeWidth={2} />
                          <span>{row.layer}</span>
                        </div>
                      </td>
                      <td className="p-4 sm:p-5 font-mono text-xs text-zinc-300">
                        {row.tech}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
