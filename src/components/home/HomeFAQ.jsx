import FAQList from '../FAQList'

const faqs = [
  {
    question: 'How does Frame Cipher charge for its work?',
    answer:
      'By scope. Single projects like website builds or SEO audits are quoted per project. Ongoing work like social media management or paid ads runs on a monthly retainer, so you always know exactly what you are paying for each month.',
  },
  {
    question: 'Do you work with international clients?',
    answer:
      'Yes. Frame Cipher has worked with brands in 20+ countries, fully remote, through video calls, shared project boards, and async reporting.',
  },
  {
    question: 'How long before we see results?',
    answer:
      'It depends on the service. Paid ads and social content usually show early signals within the first month. SEO and organic growth compound over 3 to 6 months, depending on the market and the starting condition of the website.',
  },
  {
    question: 'Do you require a long-term contract?',
    answer:
      'No. Ongoing work runs on rolling monthly retainers with no lock-in. You stay because the system is producing, not because a contract forces you to.',
  },
  {
    question: 'Who owns the accounts, websites, and content you produce?',
    answer:
      'The client. Frame Cipher builds and manages the assets, but the ad account, domain, source code, and content ownership always stay with the client.',
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