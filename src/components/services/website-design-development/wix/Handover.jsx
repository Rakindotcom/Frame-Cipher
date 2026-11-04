import React from 'react'
import { Check } from 'lucide-react'

const ownershipAccessItems = [
  'Wix website and editor access',
  'Domain access or connection details',
  'Relevant business and app accounts',
  'Analytics and tracking access',
  'Agreed project assets and content',
]

const editorHandoverItems = [
  'Editing page content',
  'Updating images and media',
  'Managing services or products',
  'Updating forms and contact information',
  'Managing blog or CMS content',
  'Making basic layout changes',
  'Reviewing website submissions and inquiries',
]

export default function Handover() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading: STRICTLY LEFT-ALIGNED */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            Website Ownership, Editor Handover &amp;{' '}
            <span className="italic text-frame-accent">Training.</span>
          </h2>
          <p className="text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            Your Wix website should remain manageable after development is complete. We make sure you receive the agreed access, assets, and guidance needed to take control of the website.
          </p>
        </div>

        {/* 2 Top Deliverables */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* OWNERSHIP & ACCESS */}
          <div className="flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#121214] p-7 md:p-10 transition-colors duration-200 hover:border-white/[0.14]">
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">
                01
              </span>
              <h3 className="mt-3 font-heading text-xl md:text-2xl font-medium tracking-tight text-white">
                Website Ownership &amp; Access
              </h3>
              <p className="mt-3 text-sm md:text-base font-normal leading-relaxed text-zinc-400">
                At project handover, we provide the agreed access and credentials required to manage your website, subject to the ownership and account structure established for the project. This can include:
              </p>
              <ul className="mt-4 space-y-2.5 text-sm md:text-base font-normal text-zinc-300">
                {ownershipAccessItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-frame-accent/40 bg-frame-accent/10 text-frame-accent mt-0.5">
                      <Check className="h-3 w-3 stroke-[2.5]" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* EDITOR HANDOVER */}
          <div className="flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#121214] p-7 md:p-10 transition-colors duration-200 hover:border-white/[0.14]">
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">
                02
              </span>
              <h3 className="mt-3 font-heading text-xl md:text-2xl font-medium tracking-tight text-white">
                Wix Editor Handover
              </h3>
              <p className="mt-3 text-sm md:text-base font-normal leading-relaxed text-zinc-400">
                We walk you through the parts of the Wix editor your team will need for routine website management. Depending on the project, this can include:
              </p>
              <ul className="mt-4 space-y-2.5 text-sm md:text-base font-normal text-zinc-300">
                {editorHandoverItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-frame-accent/40 bg-frame-accent/10 text-frame-accent mt-0.5">
                      <Check className="h-3 w-3 stroke-[2.5]" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* 2 Bottom Deliverables */}
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {/* BASIC TRAINING & GUIDANCE */}
          <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-7 md:p-10 transition-colors duration-200 hover:border-white/[0.14]">
            <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">
              03
            </span>
            <h3 className="mt-3 font-heading text-xl md:text-2xl font-medium tracking-tight text-white">
              Basic Training &amp; Guidance
            </h3>
            <p className="mt-3 text-sm md:text-base font-normal leading-relaxed text-zinc-400">
              We provide basic guidance so you understand how to manage the website after launch. The training focuses on the actual features included in your project rather than overwhelming you with unnecessary technical details.
            </p>
          </div>

          {/* HANDOVER DOCUMENTATION */}
          <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-7 md:p-10 transition-colors duration-200 hover:border-white/[0.14]">
            <span className="font-mono text-xs uppercase tracking-wider text-frame-accent">
              04
            </span>
            <h3 className="mt-3 font-heading text-xl md:text-2xl font-medium tracking-tight text-white">
              Handover Documentation
            </h3>
            <p className="mt-3 text-sm md:text-base font-normal leading-relaxed text-zinc-400">
              Where included in the project scope, we provide basic instructions or documentation covering important website management tasks, access details, and agreed post-launch procedures.
            </p>
            <p className="mt-4 text-xs italic text-zinc-500 font-normal">
              The exact ownership, account access, source materials, licenses, and documentation provided depend on the project scope and agreement.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
