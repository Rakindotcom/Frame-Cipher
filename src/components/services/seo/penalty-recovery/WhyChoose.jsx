import React from 'react'

const reasons = [
  {
    title: 'Diagnosis Before Action',
    body: 'We do not start by removing content, deleting backlinks, or making large-scale changes simply because traffic dropped.',
    closing: 'We first establish what happened and why.',
  },
  {
    title: 'One In-House SEO, Content & Development Team',
    body: 'Penalty and traffic-drop recovery can cross several disciplines.',
    closing:
      'Our in-house SEO, content, technical, and development capabilities allow us to investigate the website as a whole rather than treating every problem as a backlink or content issue.',
  },
  {
    title: 'Evidence-Based Remediation',
    body: 'Every major recommendation should have a reason behind it.',
    closing:
      'We connect findings to affected pages, data, Search Console evidence, policy requirements, technical conditions, or SERP observations so you understand what is being changed and why.',
  },
  {
    title: 'Bangladesh & International Experience',
    body: 'Framecipher is based in Bangladesh and supports businesses serving both local and international markets.',
    closing:
      'That includes websites targeting Bangladesh, English-speaking markets, multilingual audiences, and multi-country search demand.',
  },
]

export default function WhyChoose() {
  return (
    <section className="border-t border-b border-white/[0.08] bg-[#09090B]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="pt-20 pb-12 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-[#A855F7]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#A855F7]" />
            <span>The Framecipher Advantage</span>
          </div>
          <h2 className="text-3xl font-medium tracking-tight text-white sm:text-5xl">
            Why Choose Framecipher for Google Penalty Recovery
          </h2>
          <p className="text-base leading-relaxed text-zinc-300 sm:text-lg">
            The quality of a recovery depends on who structures the diagnosis and who executes the work. Four reasons clients trust ours.
          </p>
        </div>

        {/* Modality 2: Architectural Divided Column Band */}
        <div className="grid grid-cols-1 divide-y divide-white/[0.08] md:grid-cols-2 md:divide-y-0 md:divide-x lg:grid-cols-4 pb-20">
          {reasons.map((item, index) => (
            <div
              key={item.title}
              className="group relative flex flex-col justify-between p-6 transition-colors duration-300 hover:bg-[#121214] sm:p-8"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-wider text-zinc-500">
                    Pillar // 0{index + 1}
                  </span>
                  <span className="h-2 w-2 rounded-full bg-white/10 transition-colors duration-300 group-hover:bg-frame-accent" />
                </div>

                <h3 className="text-xl font-medium text-white transition-colors duration-200 group-hover:text-frame-accent">
                  {item.title}
                </h3>

                <p className="text-sm leading-relaxed text-zinc-300">
                  {item.body}
                </p>

                <p className="border-l-2 border-frame-accent pl-3 text-xs leading-relaxed text-zinc-400">
                  {item.closing}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
