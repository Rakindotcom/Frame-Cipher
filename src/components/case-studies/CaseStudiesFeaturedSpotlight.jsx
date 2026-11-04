'use client'

import { caseStudyPlaceholders } from '../../data/agency'

export default function CaseStudiesFeaturedSpotlight() {
  const featuredStudy = caseStudyPlaceholders[0]

  return (
    <section
      id="featured-spotlight"
      aria-label="Flagship personal brand case study"
      className="relative isolate scroll-mt-[100px] border-t border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* Spotlight Banner Header */}
        <div className="border-b border-white/[0.08] pb-14">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 font-mono text-xs font-semibold uppercase tracking-wider text-violet-300">
              Flagship Personal Brand Case Study
            </span>
            <span className="rounded-full border border-white/[0.08] bg-white/[0.04] px-3.5 py-1 font-mono text-xs font-medium uppercase tracking-wider tabular-nums text-zinc-400">
              Platform Growth &bull; 7.2M+ Views
            </span>
          </div>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <h3 className="font-heading text-4xl sm:text-5xl md:text-6xl font-medium leading-[0.96] tracking-tight text-white">
                {featuredStudy.title}
              </h3>
              <p className="mt-6 max-w-2xl text-base font-normal leading-relaxed text-zinc-300 sm:text-lg">
                {featuredStudy.overview}
              </p>
            </div>

            {/* Modality 3: Architectural Metadata Blueprint Matrix */}
            <dl className="grid sm:grid-cols-2 rounded-xl border border-white/[0.08] bg-[#121214] overflow-hidden">
              <div className="p-5 border-b border-white/[0.08] sm:border-r">
                <dt className="font-mono text-[11px] uppercase tracking-wider text-violet-400">Client</dt>
                <dd className="mt-1.5 font-heading text-base font-medium text-white">{featuredStudy.client}</dd>
              </div>
              <div className="p-5 border-b border-white/[0.08]">
                <dt className="font-mono text-[11px] uppercase tracking-wider text-violet-400">Industry</dt>
                <dd className="mt-1.5 font-heading text-base font-medium text-white">{featuredStudy.industry}</dd>
              </div>
              <div className="p-5 border-b border-white/[0.08] sm:border-r">
                <dt className="font-mono text-[11px] uppercase tracking-wider text-violet-400">Role</dt>
                <dd className="mt-1.5 font-heading text-base font-medium text-white">{featuredStudy.role}</dd>
              </div>
              <div className="p-5 border-b border-white/[0.08]">
                <dt className="font-mono text-[11px] uppercase tracking-wider text-violet-400">Timeline</dt>
                <dd className="mt-1.5 font-heading text-base font-medium text-white">{featuredStudy.timeline}</dd>
              </div>
              <div className="p-5 border-b border-white/[0.08] sm:col-span-2">
                <dt className="font-mono text-[11px] uppercase tracking-wider text-violet-400">Services Deployed</dt>
                <dd className="mt-1.5 text-sm font-normal text-zinc-300">{featuredStudy.servicesUsed.join(', ')}</dd>
              </div>
              <div className="p-5 sm:col-span-2">
                <dt className="font-mono text-[11px] uppercase tracking-wider text-violet-400">Core Goal</dt>
                <dd className="mt-1.5 text-sm font-normal text-zinc-300">{featuredStudy.goal}</dd>
              </div>
            </dl>
          </div>
        </div>

        {/* Modality 2: Architectural Column Band for Outcome Metrics */}
        <div className="mt-14">
          <div className={`rounded-xl border border-white/[0.08] overflow-hidden grid gap-px bg-white/[0.08] ${
            featuredStudy.results?.length === 6
              ? 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-6'
              : 'grid-cols-2 sm:grid-cols-2 lg:grid-cols-4'
          }`}>
            {featuredStudy.results.map((result) => (
              <div
                key={result.label}
                className="bg-[#121214] p-5 sm:p-6 md:p-7 transition-colors duration-200 hover:bg-white/[0.02]"
              >
                <p className="font-heading text-3xl sm:text-4xl lg:text-5xl font-medium leading-none tracking-tight tabular-nums text-white">
                  {result.metric}
                </p>
                <h4 className="mt-3 font-heading text-sm sm:text-base font-medium tracking-tight text-white">
                  {result.label}
                </h4>
                <p className="mt-2 text-xs font-normal leading-relaxed text-zinc-400">
                  {result.impact}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* The Challenge & 3 Strategic Pillars (Modality 2) */}
        <div className="mt-20">
          <div className="mb-10 max-w-3xl">
            <h3 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium leading-[0.96] tracking-tight text-white">
              Credibility existed.{' '}
              <span className="italic text-frame-accent">Content presence did not.</span>
            </h3>
            <p className="mt-4 text-base font-normal leading-relaxed text-zinc-300">
              {featuredStudy.problem}
            </p>
          </div>

          <div className="rounded-xl border border-white/[0.08] bg-[#121214] overflow-hidden divide-y lg:divide-y-0 lg:divide-x divide-white/[0.08] grid lg:grid-cols-3">
            <div className="p-7 md:p-8 transition-colors duration-200 hover:bg-white/[0.02]">
              <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-violet-300">
                Goal
              </span>
              <h4 className="mt-4 font-heading text-xl font-medium tracking-tight text-white">
                Start with trust
              </h4>
              <p className="mt-3 text-sm font-normal leading-relaxed text-zinc-400">
                {featuredStudy.objective}
              </p>
            </div>
            <div className="p-7 md:p-8 transition-colors duration-200 hover:bg-white/[0.02]">
              <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-violet-300">
                Strategy
              </span>
              <h4 className="mt-4 font-heading text-xl font-medium tracking-tight text-white">
                Make expertise watchable
              </h4>
              <p className="mt-3 text-sm font-normal leading-relaxed text-zinc-400">
                {featuredStudy.strategy}
              </p>
            </div>
            <div className="p-7 md:p-8 transition-colors duration-200 hover:bg-white/[0.02]">
              <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-violet-300">
                Execution
              </span>
              <h4 className="mt-4 font-heading text-xl font-medium tracking-tight text-white">
                Build the content system
              </h4>
              <p className="mt-3 text-sm font-normal leading-relaxed text-zinc-400">
                {featuredStudy.execution}
              </p>
            </div>
          </div>
        </div>

        {/* The 4 Production Engine Stages (Modality 2) */}
        <div className="mt-20 border-t border-white/[0.08] pt-20">
          <div className="mb-10 max-w-3xl">
            <h3 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium leading-[0.96] tracking-tight text-white">
              A structured production engine for{' '}
              <span className="italic text-frame-accent">compound reach.</span>
            </h3>
            <p className="mt-4 text-base font-normal leading-relaxed text-zinc-300">
              {featuredStudy.solution}
            </p>
          </div>

          <div className="rounded-xl border border-white/[0.08] bg-[#121214] overflow-hidden divide-y md:divide-y-0 md:divide-x divide-white/[0.08] grid md:grid-cols-2 lg:grid-cols-4">
            {featuredStudy.processStages?.map((stage) => (
              <div
                key={stage.number}
                className="p-6 md:p-8 transition-colors duration-200 hover:bg-white/[0.02]"
              >
                <p className="font-mono text-2xl font-bold leading-none tabular-nums text-violet-400">
                  {stage.number}
                </p>
                <h4 className="mt-4 font-heading text-lg font-medium tracking-tight text-white">
                  {stage.title}
                </h4>
                <p className="mt-2.5 text-xs font-normal leading-relaxed text-zinc-400">
                  {stage.description}
                </p>
              </div>
            ))}
          </div>

          {/* 5 Focus Points: Seamless Continuum */}
          <div className="mt-6 rounded-xl border border-white/[0.08] bg-[#121214] overflow-hidden divide-y sm:divide-y-0 sm:divide-x divide-white/[0.08] grid sm:grid-cols-2 lg:grid-cols-5">
            {featuredStudy.focusPoints.map((point, index) => (
              <div key={point} className="flex items-center gap-3 p-4 transition-colors duration-200 hover:bg-white/[0.02]">
                <span className="font-mono text-sm font-bold tabular-nums text-violet-400">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <p className="font-mono text-xs uppercase tracking-wider text-zinc-300">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Highlight Outcome Box & Proof */}
        <div className="mt-20 border-t border-white/[0.08] pt-20">
          <div className="mb-10 max-w-3xl">
            <h3 className="font-heading text-3xl sm:text-4xl md:text-5xl font-medium leading-[0.96] tracking-tight text-white">
              Real platform data from standing start to{' '}
              <span className="italic text-frame-accent">1M+ views.</span>
            </h3>
            <p className="mt-4 text-base font-normal leading-relaxed text-zinc-300">
              {featuredStudy.result}
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <article className="rounded-xl border border-white/[0.08] bg-[#121214] p-7 md:p-10 ">
              <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-3.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-violet-300">
                Highlight Outcome
              </span>
              <h4 className="mt-6 font-heading text-3xl sm:text-4xl md:text-5xl font-medium leading-[0.96] tracking-tight text-white">
                {featuredStudy.keyResult}
              </h4>
              <p className="mt-6 max-w-2xl text-base font-normal leading-relaxed text-zinc-300">
                From a starting channel with just 5 subscribers, the very first YouTube Short generated 350K+ views. Today, the content engine scales past 7.2 million views on Facebook alone with individual breakout reels crossing 1 million views.
              </p>
              <div className="mt-8 flex flex-wrap gap-2 border-t border-white/[0.08] pt-6">
                <span className="rounded-full border border-white/[0.08] bg-[#18181B] px-3.5 py-1 font-mono text-[11px] tabular-nums text-white">
                  1M+ Breakout Reel
                </span>
                <span className="rounded-full border border-white/[0.08] bg-[#18181B] px-3.5 py-1 font-mono text-[11px] tabular-nums text-white">
                  7.2M+ Facebook Views
                </span>
                <span className="rounded-full border border-white/[0.08] bg-[#18181B] px-3.5 py-1 font-mono text-[11px] tabular-nums text-white">
                  350K+ First Upload
                </span>
                <span className="rounded-full border border-white/[0.08] bg-[#18181B] px-3.5 py-1 font-mono text-[11px] tabular-nums text-white">
                  100K to 450K+ Repeatable Range
                </span>
              </div>
            </article>

            <div className="grid gap-4">
              <article className="rounded-xl border border-white/[0.08] bg-[#121214] p-6">
                <p className="font-mono text-[11px] uppercase tracking-wider text-violet-400">First upload velocity</p>
                <h4 className="mt-2 font-heading text-xl font-medium tracking-tight text-white">
                  350K+ Views on Video 01
                </h4>
                <p className="mt-2.5 text-xs font-normal leading-relaxed text-zinc-400">
                  Proved that hook engineering and audience retention outperform channel size. The client reached massive organic reach immediately without paid boost or existing follower base.
                </p>
              </article>
              <article className="rounded-xl border border-white/[0.08] bg-[#121214] p-6">
                <p className="font-mono text-[11px] uppercase tracking-wider text-violet-400">Retention-led scaling</p>
                <h4 className="mt-2 font-heading text-xl font-medium tracking-tight text-white">
                  Consistent 100K to 1M Views
                </h4>
                <p className="mt-2.5 text-xs font-normal leading-relaxed text-zinc-400">
                  Subsequent videos repeatedly hit 447K, 390K, 378K, 333K, 287K, and 1M views, establishing Dr. Saleheen as a recognized thought leader in supply chain and organizational leadership.
                </p>
              </article>
            </div>
          </div>

          {/* First-Party Platform Proof Screenshots */}
          <div className="mt-14">
            <div className="flex flex-col gap-3 border-b border-white/[0.08] pb-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h4 className="font-heading text-2xl sm:text-3xl font-medium tracking-tight text-white">
                  Dr. Ferdoush Saleheen Channel Reporting
                </h4>
              </div>
              <p className="font-mono text-xs uppercase tracking-wider text-zinc-400">
                Live YouTube Studio &amp; Facebook Reels verification
              </p>
            </div>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {featuredStudy.proofImages?.map((proof) => (
                <figure
                  key={proof.src}
                  className="group overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214] transition-colors duration-200 hover:border-white/[0.14]"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-black">
                    <img
                      src={proof.src}
                      alt={proof.title}
                      className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <figcaption className="border-t border-white/[0.08] p-5">
                    <p className="mb-1.5 font-mono text-[10px] uppercase tracking-wider text-frame-accent">
                      {proof.badge}
                    </p>
                    <h5 className="font-heading text-base font-medium tracking-tight text-white">
                      {proof.title}
                    </h5>
                    <p className="mt-1.5 text-xs font-normal leading-relaxed text-zinc-400">
                      {proof.subtitle}
                    </p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
