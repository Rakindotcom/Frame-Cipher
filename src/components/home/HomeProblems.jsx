import { AlertCircle } from 'lucide-react'
import PosterButton from './PosterButton'

const problems = [
  {
    title: 'Marketing feels disconnected',
    description:
      'Different people handle different channels without a unified strategy.',
  },
  {
    title: 'Your website is not converting',
    description:
      'A website may look good but still fail to generate leads or sales.',
  },
  {
    title: 'Ads are spending without clear direction',
    description:
      'Campaigns need proper targeting, creative, tracking, and continuous optimization.',
  },
  {
    title: 'Content is inconsistent',
    description:
      'Businesses struggle to maintain a consistent brand voice and publishing system.',
  },
  {
    title: 'Business operations are still manual',
    description:
      'Repetitive processes can slow down teams and create unnecessary operational work.',
  },
  {
    title: 'Too many vendors',
    description:
      'Managing separate developers, designers, marketers, and content teams creates unnecessary complexity.',
  },
]

export default function HomeProblems() {
  return (
    <section className="relative isolate border-b border-white/[0.08] bg-[#09090B] px-4 py-20 text-white md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl">
          <h2 className="font-heading text-3xl sm:text-5xl font-semibold leading-[1.05] tracking-tight text-highlighted">
            Your business does not need more vendors.
            <br />
            It needs a better system.
          </h2>
          <p className="mt-5 max-w-2xl text-base font-normal leading-relaxed text-white md:text-lg">
            Growth becomes difficult when your marketing, website, content, and technology are
            handled separately. Frame Cipher brings these capabilities together under one team.
          </p>
        </div>

        {/* Editorial Problems Divided Rows */}
        <div className="border-t border-white/[0.08]">
          {problems.map((problem, index) => (
            <article
              key={problem.title}
              className="group relative grid grid-cols-1 gap-4 border-b border-white/[0.08] py-8 transition-colors duration-300 hover:bg-white/[0.02] md:grid-cols-12 md:items-baseline md:gap-8 md:py-10 px-4 -mx-4 rounded-lg before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-frame-accent/40 before:to-transparent before:opacity-0 hover:before:opacity-100"
            >
              <div className="md:col-span-3">
                <span className="font-mono inline-flex items-center gap-2 rounded-full border border-purple-600/30 bg-purple-600/10 px-3 py-1 text-[11px] uppercase tracking-wider text-purple-600 font-medium tabular-nums">
                  <AlertCircle className="h-3 w-3 shrink-0 text-purple-600" />
                  Problem 0{index + 1}
                </span>
              </div>
              <div className="md:col-span-4">
                <h3 className="font-heading text-xl sm:text-2xl font-semibold text-highlighted tracking-tight">
                  {problem.title}
                </h3>
              </div>
              <div className="md:col-span-5">
                <p className="text-sm md:text-base font-normal leading-relaxed text-white transition-colors duration-200 group-hover:text-default">
                  {problem.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="relative overflow-hidden mt-14 flex flex-col items-start justify-between gap-6 rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 sm:flex-row sm:items-center before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-frame-accent/40 before:to-transparent">
          <p className="max-w-xl text-base font-normal leading-relaxed text-white md:text-lg">
            Fragmented execution is the real cost. One team keeps the message, the build, and
            the campaigns moving in the same direction.
          </p>
          <div className="shrink-0">
            <PosterButton href="/contact">Let&apos;s solve it together</PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
