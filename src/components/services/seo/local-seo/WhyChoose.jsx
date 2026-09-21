import { SectionIntro } from '../../../Kinetic'

const reasons = [
  {
    title: 'One In-House Team',
    body: 'Your local SEO strategy stays with one team instead of moving between multiple outsourced providers. Our work can connect SEO strategy with website development, content, design, and digital marketing when the project requires it.',
  },
  {
    title: 'Connected Local SEO Strategy',
    body: 'We do not treat your Google Business Profile, website, content, citations, and reputation as isolated tasks. Each part has a specific role within the wider local search strategy. This helps create a more consistent customer journey from search discovery to enquiry.',
  },
  {
    title: 'Bangladesh & International Experience',
    body: 'We work with businesses targeting customers in Bangladesh and international markets. Our approach can adapt to local market conditions, city-level competition, service areas, and different geographic targets.',
  },
  {
    title: 'Transparent Reporting',
    body: 'You should understand what work was completed and what changed. Our reporting focuses on relevant activities, visibility, customer actions, and business outcomes. We aim to make performance understandable rather than filling reports with unnecessary metrics.',
  },
]

export default function WhyChoose() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="The Framecipher standard"
          title="Why Choose Framecipher for Local SEO"
        >
          Local SEO works best when the different parts of your digital presence support one
          another.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, index) => (
            <div key={reason.title} className="flex flex-col justify-between bg-frame-bg p-7 md:p-8">
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