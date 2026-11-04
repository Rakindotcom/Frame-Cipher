import { SectionIntro, PosterButton } from '../../../Kinetic'

export default function StrategyFirst() {
  return (
    <section className="border-b border-white/[0.08] bg-[#121214] px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          eyebrow="What strategy actually does"
          title="Content Strategy Built Around Business Goals, Audience Intent &amp; Growth"
        >
          A content calendar can tell you what to publish next month. A real content strategy explains why those
          topics matter, who they serve, how they connect, and what they are expected to accomplish.
        </SectionIntro>

        <div className="grid gap-10 border-t border-white/[0.08] pt-12 lg:grid-cols-2 lg:items-start">
          <div className="space-y-5 text-base font-medium leading-relaxed text-[#A1A1AA] md:text-lg">
            <p>
              We start with what already exists. Then we study your business goals, audience, search demand,
              competitors, buyer journey, and available resources.
            </p>
            <p>
              The result is a practical content system your team can actually execute, rather than a document that
              describes ambition the business does not have the capacity to deliver.
            </p>
          </div>

          <div className="grid gap-px border border-white/[0.08] bg-frame-border">
            <article className="bg-[#09090B] p-7 md:p-8 transition-colors duration-200 hover:bg-[#121214]/40">
              <h3 className="font-heading text-base font-bold leading-tight tracking-tight text-[#FAFAFA] md:text-lg">
                Audit Before Recommendation
              </h3>
              <p className="mt-3 text-sm wide:text-lg font-medium leading-relaxed text-[#A1A1AA] md:text-base">
                New content is not the default answer. We assess what you have already published, what performs,
                what has decayed, and where effort is currently being duplicated.
              </p>
            </article>
            <article className="bg-[#09090B] p-7 md:p-8 transition-colors duration-200 hover:bg-[#121214]/40">
              <h3 className="font-heading text-base font-bold leading-tight tracking-tight text-[#FAFAFA] md:text-lg">
                Prioritized, Not Exhaustive
              </h3>
              <p className="mt-3 text-sm wide:text-lg font-medium leading-relaxed text-[#A1A1AA] md:text-base">
                A roadmap that ranks what to create first, what can wait, and what should not be produced at all is
                more useful than an undifferentiated list of ideas.
              </p>
            </article>
            <article className="bg-[#09090B] p-7 md:p-8 transition-colors duration-200 hover:bg-[#121214]/40">
              <h3 className="font-heading text-base font-bold leading-tight tracking-tight text-[#FAFAFA] md:text-lg">
                Built Around Real Constraints
              </h3>
              <p className="mt-3 text-sm wide:text-lg font-medium leading-relaxed text-[#A1A1AA] md:text-base">
                Team capacity, approval process, production resources, and publishing requirements shape the plan.
                A strategy nobody can execute is not a strategy.
              </p>
            </article>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-6 border-t border-white/[0.08] pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-3xl text-sm wide:text-lg font-medium leading-relaxed text-[#A1A1AA] md:text-base">
            If you are not sure what to prioritize first, an audit is the correct starting point.
          </p>
          <div className="shrink-0">
            <PosterButton href="/contact">Request a Content Strategy &rarr;</PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
