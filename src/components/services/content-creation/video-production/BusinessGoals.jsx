import { SectionIntro, PosterButton } from '../../../Kinetic'

const goals = [
  {
    number: '01',
    title: 'Build Brand Awareness',
    description: 'Cinematic brand films and promotional videos introduce your business, products, or service to a wider global audience with compelling storytelling that leaves an enduring impression.'
  },
  {
    number: '02',
    title: 'Explain a Product or Service',
    description: 'Demonstrations, visual walkthroughs, and explainer-style video production make complex technical features, processes, and customer benefits instantly easy to grasp.'
  },
  {
    number: '03',
    title: 'Generate Inquiries & Leads',
    description: 'Video elevates landing pages, pitch decks, proposals, and lead generation funnels by delivering concise value propositions with unambiguous calls to action.'
  },
  {
    number: '04',
    title: 'Support Paid Advertising',
    description: 'Platform-native vertical videos and fast-hook ad edits fuel Meta, TikTok, YouTube, and LinkedIn campaigns to drive lower customer acquisition costs.'
  },
  {
    number: '05',
    title: 'Strengthen Your Website',
    description: 'A homepage hero film or service overview video anchors site visitors immediately, reducing bounce rates and increasing on-page dwell time dramatically.'
  },
  {
    number: '06',
    title: 'Build Credibility & Trust',
    description: 'Customer case studies, executive insights, and authentic employee interviews humanize your business, providing social proof that removes hesitation.'
  },
  {
    number: '07',
    title: 'Support Internal Communication',
    description: 'Standardize employee onboarding, SOP training, leadership town halls, and company updates into clear, high-retention video formats.'
  }
]

export default function BusinessGoals() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Commercial Alignment"
          title="Video Production for Different Business Goals"
          index="05"
        >
          We engineer every video around a specific commercial objective. Your business goal determines the creative structure, shoot plan, and delivery formats.
        </SectionIntro>

        <div className="grid border-2 border-frame-border bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-3">
          {goals.map((item) => (
            <div key={item.number} className="bg-frame-bg p-7 md:p-8 flex flex-col justify-between">
              <div>
                <span className="font-heading text-3xl font-black text-frame-accent">
                  {item.number}
                </span>
                <h3 className="mt-3 font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg">
                  {item.title}
                </h3>
                <p className="mt-3 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {item.description}
                </p>
              </div>
            </div>
          ))}

          {/* CONSULTATION CARD */}
          <div className="bg-frame-accent/10 border-2 border-frame-accent p-7 md:p-8 flex flex-col justify-between">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                Strategic Consultation
              </span>
              <h3 className="mt-2 font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg">
                Targeting Multiple Business Goals?
              </h3>
              <p className="mt-2 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                We can architect a phased production plan that captures awareness, conversion, and trust assets in one cohesive schedule.
              </p>
            </div>
            <div className="mt-6">
              <PosterButton href="/contact" className="w-full text-xs">
                Discuss Your Target Goal &rarr;
              </PosterButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
