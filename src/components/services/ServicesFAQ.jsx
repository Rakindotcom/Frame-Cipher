import FAQList from '../FAQList'
import { SectionIntro } from '../Kinetic'

const faqs = [
  {
    question: 'Can I hire just one service instead of the full system?',
    answer:
      'Yes. Every service can be scoped and started alone, from a single SEO package to a one-off video shoot. The system simply gets stronger when strategy, production, technology, and campaigns share the same path.',
  },
  {
    question: 'Can I combine services into a custom package?',
    answer:
      'Yes. Most clients start with one Service Bundle, then add or swap services as their goals change. Tell us your goal and budget, and we can build a custom mix around it.',
  },
  {
    question: 'Do you work with clients outside Bangladesh?',
    answer:
      'Yes. Frame Cipher has worked with brands in 20+ countries, fully remote, through video calls, shared project boards, and async reporting.',
  },
  {
    question: 'Will you keep helping after the project is live?',
    answer:
      'Yes. Every package includes defined handover, support, and next-step recommendations. Most clients continue with a retainer or a follow-up project once they see results.',
  },
  {
    question: 'Do you build both websites and custom software?',
    answer:
      'Yes. Website development covers marketing sites, e-commerce stores, and content platforms. Custom software covers CRMs, ERPs, inventory, POS, dashboards, and business automation.',
  },
  {
    question: 'How do I get a quotation or proposal?',
    answer:
      'Share your goals through the contact form or a quick call. We respond with a clear proposal—scope, package selection, timeline, and exact pricing—with no obligation.',
  },
]

export default function ServicesFAQ() {
  return (
    <section className="border-t-2 border-frame-border px-4 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="FAQ" title="Questions before you start." index="13">
          The short answers to the questions we hear most while teams decide which service to start with.
        </SectionIntro>

        <FAQList faqs={faqs} />
      </div>
    </section>
  )
}