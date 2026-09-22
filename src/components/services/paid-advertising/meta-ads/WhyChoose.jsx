import { SectionIntro } from '../../../Kinetic'

const advantages = [
  {
    title: 'One In-House Team',
    body: 'Meta Ads does not operate separately from creative, landing pages, analytics, and conversion systems. Framecipher brings advertising, creative, content, website, and landing-page capabilities into one in-house team, making it easier to identify problems beyond the ad account itself.',
  },
  {
    title: 'Creative + Performance Strategy',
    body: 'We do not treat media buying and creative as separate disciplines. The same campaign needs a strong offer, relevant messaging, appropriate formats, accurate tracking, and a clear path to conversion.',
  },
  {
    title: 'Data Before Scaling',
    body: 'We want campaigns to produce usable information before scaling spend aggressively. Conversion signals, creative performance, audience behavior, and business results all contribute to the next decision.',
  },
  {
    title: 'Bangladesh & International Experience',
    body: 'Framecipher is based in Bangladesh and works with businesses targeting both local and international markets. That means campaign planning can account for differences in market size, competition, language, buying behavior, creative style, and customer journey.',
  },
  {
    title: 'Transparent Account Ownership',
    body: 'Your Meta Business account and advertising assets remain under your control. You retain access to campaign data, spend information, audiences, creative assets, and account history throughout the engagement.',
  },
]

export default function WhyChoose() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="The Frame Cipher Standard"
          title="Why Businesses Choose Framecipher for Meta Ads"
        >
          Creative, conversion data, and campaign strategy working together under one in-house team.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-2 lg:grid-cols-3">
          {advantages.map((item, index) => (
            <div key={index} className="flex flex-col justify-between bg-frame-bg p-7 md:p-8">
              <div>
                <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                  Standard 0{index + 1}
                </span>
                <h3 className="mt-3 font-heading text-xl font-bold uppercase tracking-tight text-frame-fg">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {item.body}
                </p>
              </div>
            </div>
          ))}

          <div className="flex flex-col justify-between bg-frame-accent p-7 md:p-8">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent-fg">
                Your account access
              </span>
              <h3 className="mt-3 font-heading text-xl font-bold uppercase tracking-tight text-frame-accent-fg">
                Full ownership, always
              </h3>
              <p className="mt-4 text-sm font-medium leading-relaxed text-frame-accent-fg/90">
                Campaign data, spend information, audiences, and creative assets stay under your
                control throughout the engagement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}