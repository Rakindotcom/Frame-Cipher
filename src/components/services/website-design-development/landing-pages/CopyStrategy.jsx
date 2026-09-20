import { SectionIntro } from '../../../Kinetic'

const copyStrategies = [
  {
    title: 'Headline & Value Proposition',
    desc: 'The opening section should make the offer, audience, and primary benefit clear without forcing visitors to search for the point.',
  },
  {
    title: 'Benefit-Focused Messaging',
    desc: 'We organize product or service information around the outcomes and benefits that matter most to the campaign audience.',
  },
  {
    title: 'CTA Messaging',
    desc: 'The primary call to action should tell visitors exactly what happens when they click, submit, book, purchase, or register.',
  },
  {
    title: 'Trust & Objection Handling',
    desc: 'Relevant testimonials, reviews, guarantees, case studies, FAQs, credentials, or other trust signals can be placed where they help address hesitation.',
  },
  {
    title: 'Message Match',
    desc: 'The language on the landing page should match the campaign, advertisement, search intent, email, or social content that brought the visitor there.',
  },
]

export default function CopyStrategy() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/20 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Persuasion Architecture / Value Articulation" title="Landing Page Copy & Message Strategy">
          A landing page can have excellent design and still fail when visitors do not understand the offer quickly. We structure the message around what the audience needs to know before taking action.
        </SectionIntro>

        <div className="grid bg-frame-border gap-px border-2 border-frame-border sm:grid-cols-2 lg:grid-cols-3">
          {copyStrategies.map((copy, index) => (
            <div key={index} className="bg-frame-bg p-7 md:p-8 flex flex-col justify-between">
              <div>
                <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">Principle 0{index + 1}</span>
                <h3 className="mt-3 font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg">
                  {copy.title}
                </h3>
                <p className="mt-3 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {copy.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-xs md:text-sm font-medium text-frame-muted-fg border-l-2 border-frame-accent pl-4">
          Copywriting can be included within the project scope when required. Otherwise, we can work with your existing copy and structure it for the landing-page experience.
        </p>
      </div>
    </section>
  )
}