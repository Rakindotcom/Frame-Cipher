'use client'

import React from 'react'
import { Zap, Code2, Layers, CheckCircle2 } from 'lucide-react'

const flutterVsReactTable = [
  { factor: 'Primary language', flutter: 'Dart', react: 'JavaScript / TypeScript' },
  { factor: 'UI approach', flutter: 'Flutter widgets and rendering', react: 'React-based development with platform integration' },
  { factor: 'Visual control', flutter: 'Strong', react: 'Strong with platform-aware implementation' },
  { factor: 'Existing React ecosystem', flutter: 'Limited relevance', react: 'Major advantage' },
  { factor: 'Native integration', flutter: 'Native platform integration available', react: 'Native modules and platform integration available' },
  { factor: 'Strong fit', flutter: 'Custom interfaces and controlled cross-platform experiences', react: 'Products aligned with React or JavaScript/TypeScript' },
]

export default function FlutterVsReact() {
  return (
    <section id="flutter-vs-react" className="border-b border-white/[0.08] bg-[#09090B] px-4 py-20 sm:px-6 md:px-8 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Flutter vs React Native: Which Should You Choose?
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            Flutter and React Native can both support serious Android and iOS applications. The right choice depends on your product and technical context.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 mb-12">
          <div className="group relative rounded-2xl border border-white/[0.08] bg-[#0D0D0F] p-8 md:p-10 transition-all duration-300 hover:border-white/[0.16] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent">
            <div className="flex items-center justify-between mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-purple-500/20 bg-purple-500/10 text-purple-600">
                <Zap className="h-6 w-6 text-purple-600" />
              </div>
              <span className="font-mono text-xs uppercase tracking-wider text-purple-400">
                01 — Google Flutter
              </span>
            </div>
            <h3 className="font-heading text-xl sm:text-2xl font-medium text-white">
              Flutter App Development
            </h3>
            <p className="mt-4 text-xs sm:text-sm font-normal leading-relaxed text-zinc-300">
              Flutter can be a strong fit for products that need a highly controlled interface, reusable components, and a consistent cross-platform visual system. It can work particularly well when the application has substantial custom UI requirements and the project is being designed around a fresh cross-platform architecture.
            </p>
          </div>

          <div className="group relative rounded-2xl border border-white/[0.08] bg-[#0D0D0F] p-8 md:p-10 transition-all duration-300 hover:border-white/[0.16] before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent">
            <div className="flex items-center justify-between mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-purple-500/20 bg-purple-500/10 text-purple-600">
                <Code2 className="h-6 w-6 text-purple-600" />
              </div>
              <span className="font-mono text-xs uppercase tracking-wider text-purple-400">
                02 — Meta React Native
              </span>
            </div>
            <h3 className="font-heading text-xl sm:text-2xl font-medium text-white">
              React Native App Development
            </h3>
            <p className="mt-4 text-xs sm:text-sm font-normal leading-relaxed text-zinc-300">
              React Native can be a strong fit for products that benefit from the JavaScript or TypeScript ecosystem, existing React knowledge, or an established React-based technology environment. It can also be practical when a product or internal team already works heavily with the broader React ecosystem.
            </p>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0D0D0F] shadow-xl before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-white/[0.08] bg-[#18181B] font-mono text-xs uppercase tracking-wider text-zinc-300">
                <tr>
                  <th className="p-4 sm:p-5 border-r border-white/[0.08] text-white">Factor</th>
                  <th className="p-4 sm:p-5 border-r border-white/[0.08] text-purple-400">Flutter</th>
                  <th className="p-4 sm:p-5 text-white">React Native</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.06] font-sans">
                {flutterVsReactTable.map((row, rIdx) => (
                  <tr key={rIdx} className="transition-colors hover:bg-white/[0.02]">
                    <td className="p-4 sm:p-5 font-medium text-white border-r border-white/[0.08]">
                      {row.factor}
                    </td>
                    <td className="p-4 sm:p-5 font-normal text-purple-300 border-r border-white/[0.08]">
                      {row.flutter}
                    </td>
                    <td className="p-4 sm:p-5 font-normal text-zinc-300">
                      {row.react}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="relative mt-10 rounded-2xl border border-white/[0.08] bg-[#0D0D0F] p-6 sm:p-8 space-y-3 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-purple-600/40 before:to-transparent">
          <p className="text-sm font-medium text-white">
            <span className="font-mono text-xs uppercase tracking-wider text-purple-400 mr-2">Recommendation Guide</span>
            Which Framework Fits Your Product? The decision depends on your UI requirements, existing systems, development team, integrations, performance needs, and future product direction.
          </p>
          <p className="text-xs sm:text-sm font-normal leading-relaxed text-zinc-400">
            We do not force every client into the same framework. We recommend Flutter, React Native, native development, or a hybrid model based on what your application actually needs.
          </p>
        </div>
      </div>
    </section>
  )
}
