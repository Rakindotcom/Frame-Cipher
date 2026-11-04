import React from 'react'
import PosterButton from '../../../home/PosterButton'

const weakManagementCosts = [
  {
    title: 'Missed Buying Questions',
    desc: 'Direct purchase inquiries and product questions in comments and DMs abandoned without response, losing high-intent buyers to competitors within minutes.',
  },
  {
    title: 'Public Escalation Spills',
    desc: 'Frustrated customers venting publicly when left unacknowledged, turning small service issues into permanent reputation liabilities on public feeds.',
  },
  {
    title: 'Robotic Template Fatigue',
    desc: 'Copied-and-pasted boilerplate replies that alienate users, diminish authenticity, and destroy brand credibility across social channels.',
  },
  {
    title: 'Deferred Customer Intelligence',
    desc: 'Critical product feedback, recurring complaints, and sentiment shifts going unlogged and unrouted to leadership and marketing teams.',
  },
]

const advantages = [
  {
    number: '01',
    title: 'One In-House Team',
    desc: 'Your community management works within the same broader marketing environment as your content and social strategy. That makes it easier to maintain context and consistent brand communication.',
  },
  {
    number: '02',
    title: 'Response With Context, Not Templates',
    desc: 'Templates can help with repetitive questions, but not every customer interaction deserves the same answer. We use approved guidance while adapting responses to the actual conversation.',
  },
  {
    number: '03',
    title: 'Clear Escalation Process',
    desc: "When an issue requires your team's authority or information, it should reach the right person instead of receiving an inaccurate answer.",
  },
  {
    number: '04',
    title: 'Platform-Specific Community Management',
    desc: 'Facebook, Instagram, LinkedIn, TikTok, and YouTube each create different types of audience interactions. Our workflow adapts to the platform instead of treating every channel as one inbox.',
  },
  {
    number: '05',
    title: 'Bangladesh & International Experience',
    desc: 'Framecipher is based in Dhaka and works with businesses across Bangladesh and international markets, including the US, UK, Australia, Canada, and UAE.',
  },
  {
    number: '06',
    title: 'Transparent Reporting',
    desc: 'You should be able to see what is happening inside your community management workflow. We report on agreed metrics and surface important feedback, issues, and recommendations.',
  },
]

export default function WhyChoose() {
  return (
    <section id="why-choose" className="relative isolate border-t border-white/[0.08] bg-[#09090B] px-4 py-20 md:px-8 md:py-28 scroll-mt-24 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl space-y-4">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
              Why choose Framecipher for{' '}
              <span className="italic text-frame-accent">community management.</span>
            </h2>
          </div>
          <p className="max-w-md text-base font-normal leading-relaxed text-zinc-300">
            Because community management requires more than fast replies. It requires judgment, escalation, brand consistency, and an operating system that continues after the post is published.
          </p>
        </div>

        {/* 2-Column Comparative Architecture */}
        <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
          {/* Left: The Compounding Cost */}
          <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <h3 className="font-heading text-2xl sm:text-3xl font-medium tracking-tight text-white">
                The Compounding Cost of Weak Community Management
              </h3>

              <div className="mt-8 space-y-4">
                {weakManagementCosts.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-4 rounded-lg border border-white/[0.04] bg-[#18181B] p-5 transition-colors hover:border-white/[0.08]"
                  >
                    <span className="font-mono text-xs uppercase text-frame-accent mt-0.5">
                      0{idx + 1}
                    </span>
                    <div>
                      <h4 className="font-heading text-base font-medium text-white">
                        {item.title}
                      </h4>
                      <p className="mt-1 text-sm font-normal leading-relaxed text-zinc-300">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/[0.08]">
              <PosterButton href="/contact" variant="accent">
                Book a Community Strategy Session &rarr;
              </PosterButton>
            </div>
          </div>

          {/* Right: The Framecipher Standard */}
          <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-8 sm:p-10">
            <h3 className="font-heading text-2xl sm:text-3xl font-medium tracking-tight text-white">
              Why Choose Framecipher for Community Management
            </h3>

            <div className="mt-8 space-y-4">
              {advantages.map((item) => (
                <div
                  key={item.number}
                  className="rounded-lg border border-white/[0.04] bg-[#18181B] p-5 transition-colors hover:border-white/[0.08]"
                >
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-xs text-frame-accent">
                      {item.number}
                    </span>
                    <h4 className="font-heading text-base font-medium text-white">
                      {item.title}
                    </h4>
                  </div>
                  <p className="mt-2 text-sm font-normal leading-relaxed text-zinc-300">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
