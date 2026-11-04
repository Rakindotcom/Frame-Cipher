import { PosterButton } from '../../../Kinetic'

const groupScope = [
  'Group strategy',
  'Content planning',
  'Discussion prompts',
  'Member engagement',
  'Group moderation',
  'Community guidelines',
  'Page-to-Group coordination',
]

const additionalFeatures = [
  'Relevant Facebook Events',
  'Additional Facebook features that support your business goals',
]

export default function Groups() {
  return (
    <section className="relative border-t border-white/[0.08] bg-[#09090B] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <div className="flex items-center gap-2 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-frame-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            Groups &amp; Additional Features
          </div>
          <h2 className="mt-4 font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Facebook Groups &amp; Community Features
          </h2>
          <p className="mt-4 text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            Not every business needs a Facebook Group. If your business has a genuine reason to build
            an ongoing community, we can help assess whether a Group makes sense.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-12 lg:items-start">
          {/* Left Context Card */}
          <div className="space-y-6 lg:col-span-5">
            <div className=" rounded-xl border border-white/[0.08] bg-[#121214] p-7">
              <p className="text-sm leading-relaxed text-[#A1A1AA] sm:text-base">
                Groups remain one of the platform&rsquo;s genuinely active spaces, but only where there
                is a real reason for one. A dormant Group does less for a business than no Group at
                all, so we assess it before it is added to the workflow.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-[#A1A1AA] sm:text-base">
                Depending on the scope, Group management can include the following, alongside relevant
                Facebook Events and other features that support your business goals.
              </p>
            </div>

            {/* Also Available Card */}
            <div className=" rounded-xl border border-white/[0.08] bg-[#121214] p-7">
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-frame-accent">
                Also Available Where Relevant
              </span>
              <ul className="mt-4 space-y-3">
                {additionalFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-[#FAFAFA]">
                    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-frame-accent/10 text-frame-accent">
                      <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Scope List */}
          <div className="space-y-6 lg:col-span-7">
            <div className=" rounded-xl border border-white/[0.08] bg-[#121214] p-7 sm:p-8">
              <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-frame-accent">
                Depending on scope, Group management may include
              </span>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {groupScope.map((item, index) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 text-sm font-medium text-[#FAFAFA] transition-colors hover:border-white/[0.12] hover:bg-white/[0.04]"
                  >
                    <span className="font-mono text-xs font-semibold text-frame-accent">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 rounded-xl border border-white/[0.06] bg-[#09090B]/60 p-4">
                <p className="text-xs leading-relaxed text-[#A1A1AA] sm:text-sm">
                  We do not recommend creating a Group simply to add another channel to your
                  workload. If a Group does not make strategic sense, we will say so.
                </p>
              </div>

              <div className="mt-6">
                <PosterButton href="/contact" variant="outline">
                  Discuss Group Management 
             </PosterButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
