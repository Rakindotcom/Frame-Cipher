import { SectionIntro, PosterButton } from '../../../Kinetic'

const questions = [
  'Is this actually relevant to me?',
  'Does this solve the problem I have?',
  'Why does this solution make sense?',
  'Why should I believe these claims?',
  'What makes this offer different?',
  'What happens if I have concerns?',
  'What exactly am I being offered?',
  'What should I do next?',
]

export default function CaseForBuying() {
  return (
    <section className="border-b-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="The buying decision"
          title="Sales Copy Built Around the Case for Buying"
        >
          Effective sales copy does not depend on hype. It makes the buying decision easier by answering the
          questions a serious prospect is already asking.
        </SectionIntro>

        <div className="grid gap-10 border-t-2 border-frame-border pt-12 lg:grid-cols-[1.3fr_0.7fr] lg:items-start">
          <div className="space-y-5 text-base font-medium leading-relaxed text-frame-muted-fg md:text-lg">
            <p>Our approach starts with those questions.</p>
            <p>
              We research the audience, clarify the offer, identify the strongest proof, map objections, and
              structure the argument before writing the final copy.
            </p>
            <p>
              The result is sales messaging built around a reasoned case for action, not a collection of
              aggressive phrases.
            </p>
          </div>

          <div className="border-2 border-frame-border bg-frame-bg p-7 md:p-8">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              Questions the copy answers
            </span>
            <ul className="mt-5 space-y-2.5">
              {questions.map((question) => (
                <li
                  key={question}
                  className="flex items-start gap-2.5 text-sm font-medium leading-relaxed text-frame-fg"
                >
                  <span aria-hidden="true" className="mt-1 shrink-0 font-bold text-frame-accent">
                    &rarr;
                  </span>
                  {question}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-6 border-t-2 border-frame-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-3xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
            If the argument does not hold up, more persuasive language will not fix it.
          </p>
          <div className="shrink-0">
            <PosterButton href="/contact">Discuss Your Sales Copy Project &rarr;</PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
