import { SectionIntro } from '../../../Kinetic'

const calendarPoints = [
  'What will be published',
  'When it will be published',
  'Which format will be used',
  'Who may be responsible',
  'Which campaigns or dates it supports',
]

const strategyPoints = [
  'Who the content is for',
  'What the business needs it to accomplish',
  'Which topics matter',
  'Which topics should come first',
  'How topics connect',
  'Which audience stage they support',
  'What should be created, updated, consolidated, or skipped',
  'How success will be measured',
]

export default function VsCalendar() {
  return (
    <section className="border-b border-white/[0.08] bg-[#121214] px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionIntro eyebrow="Strategy vs. execution admin" title="Content Strategy vs. Content Calendar">
          The two are related, but they are not the same. A calendar keeps execution organized. A strategy decides
          what the execution is for.
        </SectionIntro>

        <div className="grid gap-px border border-white/[0.08] bg-frame-border md:grid-cols-2">
          <article className="flex flex-col bg-[#09090B] p-7 md:p-8 transition-colors duration-200 hover:bg-[#121214]/40">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-[#A1A1AA]">
              A Calendar Answers &ldquo;When&rdquo;
            </span>
            <h3 className="mt-4 font-heading text-lg font-bold leading-tight tracking-tight text-[#FAFAFA] md:text-xl">
              A Content Calendar Organizes Production
            </h3>
            <p className="mt-4 text-sm wide:text-lg font-medium leading-relaxed text-[#A1A1AA] md:text-base">
              It tells your team:
            </p>
            <ul className="mt-4 space-y-2">
              {calendarPoints.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm font-medium leading-relaxed text-[#FAFAFA]"
                >
                  <span aria-hidden="true" className="mt-1 text-[#A855F7]">
                    &bull;
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article className="flex flex-col bg-[#A855F7]/10 p-7 md:p-8">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-[#A855F7]">
              A Strategy Answers &ldquo;Why, What &amp; For Whom&rdquo;
            </span>
            <h3 className="mt-4 font-heading text-lg font-bold leading-tight tracking-tight text-[#FAFAFA] md:text-xl">
              A Content Strategy Determines
            </h3>
            <ul className="mt-4 space-y-2">
              {strategyPoints.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm font-medium leading-relaxed text-[#FAFAFA]"
                >
                  <span aria-hidden="true" className="mt-0.5 shrink-0 font-bold text-[#A855F7]">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </div>

        <div className="mt-10 border-t border-white/[0.08] pt-8">
          <h3 className="font-heading text-base font-bold leading-tight tracking-tight text-[#FAFAFA] md:text-lg">
            Why the Difference Matters
          </h3>
          <div className="mt-4 grid gap-5 md:grid-cols-3">
            <p className="border-l-2 border-[#A855F7]/40 bg-[#09090B] p-4 text-sm wide:text-lg font-medium leading-relaxed text-[#A1A1AA]">
              A business can have a full calendar and still publish content that does not build toward a clear
              outcome.
            </p>
            <p className="border-l-2 border-[#A855F7]/40 bg-[#09090B] p-4 text-sm wide:text-lg font-medium leading-relaxed text-[#A1A1AA]">
              A strong strategy gives every important content decision a reason.
            </p>
            <p className="border-l-2 border-[#A855F7]/40 bg-[#09090B] p-4 text-sm wide:text-lg font-medium leading-relaxed text-[#A1A1AA]">
              Strategy creates the direction. The calendar turns that direction into action.
            </p>
          </div>
          <p className="mt-6 text-base font-medium leading-relaxed text-[#FAFAFA] md:text-lg">
            The calendar is therefore one output of the strategy, not the strategy itself.
          </p>
        </div>
      </div>
    </section>
  )
}
