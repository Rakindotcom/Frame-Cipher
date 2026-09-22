import { SectionIntro, PosterButton } from '../../../Kinetic'

const keyPoints = [
  'The product or service being advertised',
  'The customer need behind the conversation',
  'Context and conversational intent',
  'Landing-page promise and ad alignment',
  'Campaign objective and conversion goal',
]

const focusPoints = [
  'Relevance',
  'Measurement',
  'Controlled testing',
  'Ongoing optimization',
]

export default function Overview() {
  return (
    <section className="border-y-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Our approach"
          title="ChatGPT Ads Built for High-Intent AI Conversations"
        >
          Traditional advertising often starts with a keyword, audience, or placement. ChatGPT
          Ads start with a conversation.
        </SectionIntro>

        <div className="grid gap-10 border-t-2 border-frame-border pt-12 lg:grid-cols-[1.3fr_0.7fr] lg:items-start">
          <div className="space-y-5 text-base font-medium leading-relaxed text-frame-muted-fg md:text-lg">
            <p>
              People use ChatGPT to research products, compare services, evaluate alternatives,
              solve problems, and decide what to do next. That creates a different advertising
              environment where relevance depends on conversational context as well as campaign
              settings and ad information.
            </p>
            <p>
              OpenAI says ChatGPT Ads can consider the context and intent of the current
              conversation, the ad&rsquo;s landing page, title and copy, advertiser-provided
              context hints, and, where applicable, selected signals from a user&rsquo;s broader
              ChatGPT experience. That makes campaign structure especially important.
            </p>
            <p>
              Framecipher builds ChatGPT advertising campaigns around the customer need behind
              the conversation. We align campaign objectives, ad groups, context hints, creative,
              landing pages, and conversion goals so each campaign has a clear commercial purpose.
            </p>
          </div>

          <div className="border-2 border-frame-border bg-frame-muted/10 p-7 md:p-8">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              What we align in every campaign
            </span>
            <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
              What makes ChatGPT campaigns work
            </h3>
            <ul className="mt-6 space-y-2.5">
              {keyPoints.map((item, index) => (
                <li key={index} className="flex items-start gap-3 border-b border-frame-border/60 pb-2.5 text-sm font-semibold text-frame-fg">
                  <span className="font-mono text-xs font-black text-frame-accent">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-7">
              <PosterButton href="/contact">Request a Consultation &rarr;</PosterButton>
            </div>
          </div>
        </div>

        <div className="mt-10 border-2 border-frame-border bg-frame-muted/10 p-7 md:p-9">
          <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
            Where the channel is evolving, our focus stays on
          </span>
          <ul className="mt-5 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
            {focusPoints.map((item, index) => (
              <li key={index} className="flex items-start gap-2 text-sm font-semibold text-frame-fg">
                <span className="text-frame-accent font-bold">✓</span>
                <span className="leading-snug">{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 border-t border-frame-border/60 pt-5 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
            Whether you are launching your first ChatGPT Ads test or adding the channel to an
            existing paid media strategy, the approach stays the same: build campaigns with a
            clear commercial purpose, measure what actually happens, and optimize from evidence.
          </p>
        </div>
      </div>
    </section>
  )
}