import { SectionIntro, PosterButton } from '../../../Kinetic'

const audiences = [
  {
    title: 'Ecommerce & Product Brands',
    body: 'For brands that need product education, demonstrations, comparisons, tutorials, and product discovery content.',
  },
  {
    title: 'Service Businesses',
    body: 'For businesses that need to explain services, answer customer questions, build trust, and generate qualified inquiries.',
  },
  {
    title: 'SaaS & Technology Businesses',
    body: 'For software and technology companies that need product education, tutorials, feature explanations, demos, and educational content.',
  },
  {
    title: 'Professional & B2B Businesses',
    body: 'For consultants, agencies, professional firms, and B2B companies that want to communicate expertise and support longer buying journeys.',
  },
  {
    title: 'Education & Training Businesses',
    body: 'For educators, training companies, coaches, and organizations that rely on educational content to attract and engage audiences.',
  },
  {
    title: 'Personal Brands & Experts',
    body: 'For founders, professionals, creators, consultants, and subject-matter experts building authority around their knowledge.',
  },
  {
    title: 'Podcasts & Media Brands',
    body: 'For podcast and media businesses that need structured video publishing, clips, Shorts, thumbnails, metadata, and channel organization.',
  },
  {
    title: 'International Businesses',
    body: 'For businesses targeting audiences outside Bangladesh, including the US, UK, Australia, Canada, UAE, and other international markets.',
    note: 'International channel strategies can be adapted around market-specific audiences, language, search behavior, topics, and business goals.',
  },
]

export default function WhoFor() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Target audience alignment"
          title="Who Our YouTube Management Service Is For"
        >
          We build YouTube strategies around the business model rather than forcing every client into the
          same content formula.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-2 lg:grid-cols-3">
          {audiences.map((audience, index) => (
            <article key={audience.title} className="flex flex-col justify-between bg-frame-bg p-7 md:p-8">
              <div>
                <span className="flex h-10 w-10 items-center justify-center border-2 border-frame-accent/40 bg-frame-accent/10 font-heading text-sm font-bold text-frame-accent">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-4 font-heading text-lg font-bold uppercase leading-tight tracking-tight text-frame-fg md:text-xl">
                  {audience.title}
                </h3>
                <p className="mt-3 text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {audience.body}
                </p>
              </div>

              {audience.note && (
                <p className="mt-6 border-l-2 border-frame-accent bg-frame-muted/10 p-3 text-xs font-medium leading-relaxed text-frame-muted-fg">
                  {audience.note}
                </p>
              )}
            </article>
          ))}

          <div className="flex flex-col justify-center bg-frame-accent/10 p-7 md:p-8">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              Not sure if YouTube fits?
            </span>
            <p className="mt-4 text-sm font-medium leading-relaxed text-frame-fg/90 md:text-base">
              Ask during the consultation and we will tell you honestly whether YouTube is the right
              primary channel for your business right now.
            </p>
            <div className="mt-6">
              <PosterButton href="/contact">Get a Free Consultation &rarr;</PosterButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
