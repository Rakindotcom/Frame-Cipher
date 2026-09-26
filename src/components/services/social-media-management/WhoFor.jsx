import { SectionIntro } from '../../Kinetic'

const audiences = [
  {
    title: 'Small Businesses',
    body: 'Small businesses can use professional social media management to maintain a consistent presence without assigning daily social tasks to an internal team.',
  },
  {
    title: 'Startups',
    body: 'Startups can build their initial social presence around clear messaging, audience education, brand awareness, and early community development.',
  },
  {
    title: 'Ecommerce Brands',
    body: 'Ecommerce businesses can use social content to showcase products, explain benefits, answer common questions, highlight customer experiences, and support product discovery.',
  },
  {
    title: 'Local Businesses',
    body: 'Local businesses can use social media to maintain an active presence, communicate with nearby customers, showcase products or services, and support local discovery.',
  },
  {
    title: 'B2B Companies',
    body: 'B2B businesses can use LinkedIn and other relevant platforms to share expertise, company updates, industry insights, educational content, and thought leadership.',
  },
  {
    title: 'Personal Brands & Founders',
    body: 'Founders, consultants, professionals, and creators can use social media to build authority and communicate expertise through a consistent personal brand.',
  },
  {
    title: 'Established Businesses',
    body: 'Established businesses can use professional social media management to maintain multiple platforms, coordinate campaigns, manage communities, and keep brand communication consistent.',
  },
]

export default function WhoFor() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Target audience alignment"
          title="Who Is Social Media Management For?"
        >
          The plan, platform mix, and content volume are adjusted to the audience you already
          have and the stage your business is at.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-2 lg:grid-cols-3">
          {audiences.map((audience, index) => (
            <article key={audience.title} className="flex flex-col justify-between bg-frame-bg p-7 md:p-8">
              <div>
                <span className="flex h-10 w-10 items-center justify-center border-2 border-frame-accent/40 bg-frame-accent/10 font-heading text-sm font-bold text-frame-accent">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-4 font-heading text-xl font-bold uppercase leading-tight tracking-tight text-frame-fg md:text-2xl">
                  {audience.title}
                </h3>
                <p className="mt-3 text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {audience.body}
                </p>
              </div>
            </article>
          ))}

          <div className="flex flex-col justify-center bg-frame-accent/10 p-7 md:p-8">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              Not sure where you fit
            </span>
            <p className="mt-4 text-sm font-medium leading-relaxed text-frame-fg/90">
              The free initial social audit helps us understand your requirements before
              recommending a plan, so you are not paying for scope you do not need.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
