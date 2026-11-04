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
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            Your business does not need more vendors.
            <br />
            <span className="italic text-frame-accent">
              It needs a better system.
            </span>
          </h2>
          <p className="mt-6 text-base font-normal leading-relaxed text-zinc-300 md:text-lg">
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
                <span className="font-mono inline-flex items-center gap-2 text-[11px] uppercase tracking-wider text-amber-400 tabular-nums">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                  Problem 0{index + 1}
                </span>
              </div>
              <div className="md:col-span-4">
                <h3 className="font-heading text-xl sm:text-2xl font-medium text-white transition-colors duration-200 group-hover:text-frame-accent">
                  {problem.title}
                </h3>
              </div>
              <div className="md:col-span-5">
                <p className="text-sm md:text-base font-normal leading-relaxed text-zinc-400 transition-colors duration-200 group-hover:text-zinc-200">
                  {problem.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-6 border-t border-white/[0.08] pt-10 sm:flex-row sm:items-center">
          <p className="max-w-xl text-base font-normal leading-relaxed text-zinc-300 md:text-lg">
            Fragmented execution is the real cost. One team keeps the message, the build, and
            the campaigns moving in the same direction.
          </p>
          <PosterButton href="/contact">Let&apos;s solve it together</PosterButton>
        </div>
      </div>
    </section>
  )
}
