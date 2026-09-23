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
    <section className="border-y-2 border-frame-border bg-frame-muted px-4 py-20 md:px-8 md:py-32">
      <div className="mx-auto max-w-[95vw]">
        <div className="mb-12 max-w-[95vw]">
          <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-frame-accent md:text-sm">
            Problems / We solve
          </p>
          <h2 className="font-heading text-[clamp(2.4rem,7vw,6.5rem)] font-bold uppercase leading-[0.85] tracking-tighter text-frame-fg">
            Your business does not need more vendors.
            <br />
            It needs a better system.
          </h2>
          <p className="mt-6 max-w-3xl text-base font-medium leading-relaxed text-frame-muted-fg md:text-xl">
            Growth becomes difficult when your marketing, website, content, and technology are
            handled separately. Frame Cipher brings these capabilities together under one team.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((problem, index) => (
            <article
              key={problem.title}
              className="group flex min-h-56 flex-col justify-between border-2 border-frame-border bg-frame-bg p-6 transition-all duration-300 hover:border-frame-accent hover:bg-frame-accent sm:p-8"
            >
              <div>
                <p
                  className="font-heading text-5xl font-bold leading-none tracking-tighter text-frame-muted transition-colors duration-300 group-hover:text-frame-accent-fg sm:text-6xl"
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, '0')}
                </p>
                <h3 className="mt-5 font-heading text-2xl font-bold uppercase leading-tight tracking-tighter text-frame-fg transition-colors duration-300 group-hover:text-frame-accent-fg sm:text-3xl">
                  {problem.title}
                </h3>
              </div>
              <p className="mt-5 text-sm font-medium leading-relaxed text-frame-muted-fg transition-colors duration-300 group-hover:text-frame-accent-fg/85 sm:text-base">
                {problem.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-5 border-t-2 border-frame-border/80 pt-10 sm:flex-row sm:items-center">
          <p className="max-w-xl text-base font-medium leading-relaxed text-frame-muted-fg md:text-lg">
            Fragmented execution is the real cost. One team keeps the message, the build, and
            the campaigns moving in the same direction.
          </p>
          <PosterButton href="/contact">Let&apos;s solve it together</PosterButton>
        </div>
      </div>
    </section>
  )
}