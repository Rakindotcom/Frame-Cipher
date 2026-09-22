import FAQList from '../FAQList'

const faqs = [
  {
    question: 'How does Frame Cipher charge for its work?',
    answer:
      'Most engagements run as fixed, scope-based monthly retainers, so you know exactly what you are paying for each month. Ad spend, media budgets, and third-party tools are quoted separately and never hidden inside the management fee.',
  },
  {
    question: 'Do you work with international clients?',
    answer:
      'Yes. Frame Cipher works with brands in Bangladesh, the US, the UK, and other international markets. We plan around your target region, currency, platform rules, and reporting standards.',
  },
  {
    question: 'How long before we see meaningful results?',
    answer:
      'It depends on the channel. Paid ads can show directional data within the first few weeks, but sustained, compounding results typically land between 60 and 90 days once tracking, creative, and targeting are stabilized. SEO and content systems take longer and are built to compound.',
  },
  {
    question: 'Do you require a long-term contract?',
    answer:
      'No. We work on rolling monthly agreements, not lock-in contracts. You stay because the system is producing, not because a contract forces you to.',
  },
  {
    question: 'Who owns the accounts, websites, and content you produce?',
    answer:
      'You do. Ad accounts, website properties, brand assets, and content are delivered under your ownership from day one, so you are never locked out of the system we build together.',
  },
]

export default function HomeFAQ() {
  return (
    <section className="px-4 py-20 md:px-8 md:py-32">
      <div className="mx-auto max-w-[95vw]">
        <div className="mb-12 max-w-4xl">
          <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-frame-accent md:text-sm">
            FAQ / Straight answers
          </p>
          <h2 className="font-heading text-[clamp(2.4rem,7vw,6.5rem)] font-bold uppercase leading-[0.85] tracking-tighter text-frame-fg">
            Before you ask.
          </h2>
          <p className="mt-6 max-w-3xl text-base font-medium leading-relaxed text-frame-muted-fg md:text-xl">
            The short answers to the questions we hear most before any engagement starts.
          </p>
        </div>

        <FAQList faqs={faqs} />
      </div>
    </section>
  )
}