'use client'

import React from 'react'

const techStack = [
  { layer: 'Cross-Platform', tech: 'Flutter, React Native' },
  { layer: 'Languages', tech: 'Dart, JavaScript, TypeScript' },
  { layer: 'Android', tech: 'Android SDK, Kotlin for native modules' },
  { layer: 'iOS', tech: 'iOS SDK, Swift for native modules' },
  { layer: 'UI', tech: 'Flutter widgets, React Native, platform-specific UI' },
  { layer: 'Networking', tech: 'REST APIs, JSON, GraphQL where required' },
  { layer: 'Backend', tech: 'Node.js, PHP/Laravel, or existing client backend' },
  { layer: 'Database', tech: 'MySQL, PostgreSQL, Firebase, SQLite/local storage' },
  { layer: 'Services', tech: 'Firebase, push notifications, analytics, crash monitoring' },
  { layer: 'Development', tech: 'Xcode, Android Studio, Git' },
  { layer: 'Testing', tech: 'Unit, integration, UI, device, regression testing' },
  { layer: 'Release', tech: 'TestFlight, App Store Connect, Google Play Console' },
]

export default function TechStack() {
  return (
    <section id="tech-stack" className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Cross-Platform App Technology Stack.
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            We choose technologies based on the application rather than forcing every project into one fixed stack.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0D0D0F] shadow-xl before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-white/[0.08] bg-[#18181B] font-mono text-xs uppercase tracking-wider text-zinc-300">
                <tr>
                  <th className="p-4 sm:p-5 border-r border-white/[0.08] text-white">Layer</th>
                  <th className="p-4 sm:p-5 text-purple-400">Technologies</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.06] font-sans">
                {techStack.map((row, idx) => (
                  <tr key={idx} className="transition-colors hover:bg-white/[0.02]">
                    <td className="p-4 sm:p-5 font-mono text-xs uppercase tracking-wider text-zinc-400 border-r border-white/[0.08]">
                      {row.layer}
                    </td>
                    <td className="p-4 sm:p-5 font-normal text-white">
                      {row.tech}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
