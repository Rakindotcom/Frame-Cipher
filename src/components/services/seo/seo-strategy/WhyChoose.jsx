import { SectionIntro } from '../../../Kinetic'

const reasons = [
  {
    title: 'One In-House Team',
    body: 'Strategy advice comes from people who also execute the work themselves, not consultants disconnected from what implementation actually involves.',
  },
  {
    title: 'Honest About What\u2019s Realistic',
    body: 'We don\u2019t hand over a roadmap that assumes resources you\u2019ve told us you don\u2019t have, the plan gets built around your actual situation.',
  },
  {
    title: 'Flexible Engagement Models',
    body: 'Project-based, fractional, hybrid, or full transition to execution, whichever actually fits your team.',
  },
  {
    title: 'Local & International Strategic Experience',
    body: 'Based in Dhaka. Advising clients across Bangladesh, the US, UK, Australia, Canada, and UAE.',
  },
]

export default function WhyChoose() {
  return (
    <section className="border-t border-white/[0.08] bg-[#09090B] px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionIntro eyebrow="The Framecipher standard" title="Why Choose Framecipher for SEO Strategy">
          Good strategy is built around what your team can actually execute, not a wish list.
        </SectionIntro>

        <div className="grid gap-px rounded-2xl border border-white/[0.08] bg-frame-border sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, index) => (
            <div key={index} className="flex flex-col justify-between bg-[#09090B] p-7 md:p-8">
              <div>
                <span className="text-xs font-black uppercase tracking-[0.24em] text-[#A855F7]">
                  Standard 0{index + 1}
                </span>
                <h3 className="mt-3 font-heading text-lg md:text-xl font-bold tracking-tight text-[#FAFAFA]">
                  {reason.title}
                </h3>
                <p className="mt-4 text-sm wide:text-lg font-medium leading-relaxed text-[#A1A1AA]">
                  {reason.body}
                </p>
              </div>
              <span aria-hidden="true" className="mt-6 block h-1 w-8 bg-frame-accent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}