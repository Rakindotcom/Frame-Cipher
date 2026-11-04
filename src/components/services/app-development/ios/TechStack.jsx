'use client'

import React from 'react'
import { Layers } from 'lucide-react'

const techStack = [
  { layer: 'Language', tech: 'Swift 6 & Modern Concurrency' },
  { layer: 'UI Frameworks', tech: 'SwiftUI (Declarative), UIKit (Legacy & Custom Controls)' },
  { layer: 'Development Environment', tech: 'Xcode, Instruments, Apple Developer SDKs' },
  { layer: 'Architecture Patterns', tech: 'MVVM-C, Clean Swift, Modular Package Architecture' },
  { layer: 'Networking & APIs', tech: 'URLSession, async/await, RESTful & GraphQL endpoints' },
  { layer: 'Authentication', tech: 'Sign in with Apple, Face ID / Touch ID (LocalAuthentication), OAuth 2.0' },
  { layer: 'Local Data & Persistence', tech: 'SwiftData, CoreData, Keychain Services, App Group Shared Storage' },
  { layer: 'Cloud & Push Services', tech: 'Apple Push Notification service (APNs), CloudKit, Firebase Analytics' },
  { layer: 'Apple Frameworks', tech: 'StoreKit 2, MapKit, CoreLocation, HealthKit, CallKit, WidgetKit' },
  { layer: 'Testing & QA', tech: 'XCTest (Unit), XCUITest (UI Automations), Real iPhone & iPad Matrix' },
  { layer: 'Distribution & Release', tech: 'TestFlight Beta, Provisioning Profiles, App Store Connect Automation' },
]

export default function TechStack() {
  return (
    <section id="tech-stack" className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl space-y-4">
<h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            iOS Technology{' '}
            <span className="italic text-frame-accent">Stack.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            We select the Apple technology stack around your application&apos;s requirements, existing systems, supported devices, and long-term maintenance needs.
          </p>
        </div>

        {/* Structured Architectural Table */}
        <div className="overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214]">
          <div className="border-b border-white/[0.08] px-6 py-4 flex items-center justify-between">
            <span className="font-mono text-xs uppercase tracking-wider text-zinc-400">
              Production Stack
            </span>
            <span className="font-mono text-[11px] uppercase text-frame-accent">
              Swift 6 Ready
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left font-sans text-sm">
              <thead className="border-b border-white/[0.08] bg-white/[0.02] font-mono text-xs uppercase text-zinc-400">
                <tr>
                  <th className="p-4 sm:p-5 w-1/3">Architecture Layer</th>
                  <th className="p-4 sm:p-5">Adopted Technologies</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.06] text-zinc-300">
                {techStack.map((row, idx) => (
                  <tr key={idx} className="transition-colors hover:bg-white/[0.02]">
                    <td className="p-4 sm:p-5 font-heading text-sm font-medium text-white">
                      {row.layer}
                    </td>
                    <td className="p-4 sm:p-5 font-mono text-xs text-frame-accent">
                      {row.tech}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Philosophy Note */}
        <div className="mt-6 flex items-start gap-3 rounded-xl border border-white/[0.06] bg-[#121214] p-4 text-xs text-zinc-400">
          <Layers className="h-4 w-4 text-purple-400 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-zinc-200">Architecture Philosophy:</strong> The final stack depends on the application rather than following a rigid list. We evaluate performance requirements, battery life, offline states, and data schemas before committing to dependencies.
          </p>
        </div>
      </div>
    </section>
  )
}
