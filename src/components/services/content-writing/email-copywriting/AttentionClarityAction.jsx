import { SectionIntro, PosterButton } from '../../../Kinetic'

const elements = [
  'Subject line',
  'Preview text',
  'Opening',
  'Core message',
  'Offer or value',
  'Supporting proof',
  'Call to action',
  'Sequence context',
]

const context = [
  {
    title: 'A Welcome Email',
    text: 'A welcome email should prepare the reader for what comes next.',
  },
  {
    title: 'A Nurture Email',
    text: 'A nurture email should build on what came before.',
  },
  {
    title: 'A Promotional Email',
    text: 'A promotional email should make the offer clear without burying the action under unnecessary copy.',
  },
]

export default function AttentionClarityAction() {
  return (
    <section className="border-b-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="What makes email work"
          title="Email Copy Built for Attention, Clarity, and Action"
        >
          A good email does more than sound persuasive. It needs to make sense in the inbox, give the reader a
          reason to continue, communicate one clear message, and make the next step obvious.
        </SectionIntro>

        <div className="grid gap-10 border-t-2 border-frame-border pt-12 lg:grid-cols-[1.3fr_0.7fr] lg:items-start">
          <div className="space-y-5 text-base font-medium leading-relaxed text-frame-muted-fg md:text-lg">
            <p>That means looking at the entire message, not just the paragraphs in the body.</p>
            <p>
              We also consider what happens before and after the individual email. A sequence is a connected
              communication system, so each message has to make sense inside the journey it belongs to.
            </p>
            <p>
              The result is email writing built around the customer journey rather than isolated sends.
            </p>
          </div>

          <div className="border-2 border-frame-border bg-frame-bg p-7 md:p-8">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              The entire message
            </span>
            <ul className="mt-5 space-y-2.5">
              {elements.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm font-medium leading-relaxed text-frame-fg"
                >
                  <span aria-hidden="true" className="mt-1 shrink-0 font-bold text-frame-accent">
                    &rarr;
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 grid gap-px border-2 border-frame-border bg-frame-border md:grid-cols-3">
          {context.map((item) => (
            <article key={item.title} className="bg-frame-bg p-7 md:p-8 transition-colors duration-200 hover:bg-frame-muted/40">
              <h3 className="font-heading text-base font-bold uppercase leading-tight tracking-tight text-frame-fg md:text-lg">
                {item.title}
              </h3>
              <p className="mt-3 text-sm font-medium leading-relaxed text-frame-muted-fg">{item.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-6 border-t-2 border-frame-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-3xl text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
            A sequence should feel like a series rather than a pile of unrelated emails.
          </p>
          <div className="shrink-0">
            <PosterButton href="/contact">Discuss Your Email Copy Project &rarr;</PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
