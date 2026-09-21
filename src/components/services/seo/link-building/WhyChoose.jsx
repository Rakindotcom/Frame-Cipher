import { SectionIntro } from '../../../Kinetic'

const reasons = [
  {
    title: 'One In-House Team',
    body: 'Outreach, content, and monitoring handled by people who understand your industry, not an outsourced link-buying operation running the same playbook for every client.',
  },
  {
    title: 'Manual, Relevance-First Outreach',
    body: 'Every pitch is written for the specific publication we are reaching out to. No mail-merged templates blasted to hundreds of sites at once.',
  },
  {
    title: 'Transparent Publisher & Placement Review',
    body: 'You see exactly which sites are being pursued and which links get placed, with full visibility into the process rather than unexplained backlink counts.',
  },
  {
    title: 'Bangladesh & International Experience',
    body: 'Based in Dhaka. Building authority for clients across Bangladesh, the US, UK, Australia, Canada, and UAE with outreach adapted to each market.',
  },
]

export default function WhyChoose() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="The Framecipher standard"
          title="Why Choose Framecipher for Off-Page SEO"
        >
          Link building works best when relevance and editorial quality come before volume. The
          way a campaign is run decides whether the authority it builds lasts.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, index) => (
            <div key={index} className="flex flex-col justify-between bg-frame-bg p-7 md:p-8">
              <div>
                <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                  Standard 0{index + 1}
                </span>
                <h3 className="mt-3 font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg">
                  {reason.title}
                </h3>
                <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
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