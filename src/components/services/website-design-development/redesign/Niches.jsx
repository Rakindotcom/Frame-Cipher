import { SectionIntro } from '../../../Kinetic'

const nicheTypes = [
  {
    title: 'Business & Corporate Websites',
    description: 'Redesigns focused on credibility, service discovery, lead generation, clear messaging, and stronger paths from visitor to inquiry.',
  },
  {
    title: 'Ecommerce Stores',
    description: 'Redesigns focused on product discovery, category structure, product-page conversion, checkout friction, mobile shopping, catalog organization, and performance.',
  },
  {
    title: 'Blogs & Content Publications',
    description: 'Redesigns focused on content discovery, category architecture, readability, internal linking, search, archive pages, and publishing workflows.',
  },
  {
    title: 'Portfolios & Personal Brands',
    description: 'Redesigns focused on presenting work clearly, improving project discovery, strengthening credibility, and creating a better path to inquiries.',
  },
  {
    title: 'Membership & Community Sites',
    description: 'Redesigns focused on account journeys, member navigation, gated content, dashboards, and outdated functionality.',
  },
  {
    title: 'Directories & Listing Websites',
    description: 'Redesigns focused on search, filtering, taxonomy, structured listings, category navigation, and scalability as listings grow.',
  },
]

export default function Niches() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Niche Specialization" title="Website Redesign for Every Niche and Purpose">
          Different websites fail in different ways. A business website may have a weak lead path, while an ecommerce store may have checkout friction or a difficult product structure. A content website may have thousands of pages but poor content discovery. We adapt the redesign around how your website works and what users need to accomplish.
        </SectionIntro>

        <div className="grid bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-3 border-2 border-frame-border">
          {nicheTypes.map((niche, idx) => (
            <div key={idx} className="bg-frame-bg p-7 sm:p-8 md:p-10 flex flex-col justify-between hover:bg-frame-muted/10 transition-colors">
              <div>
                <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
                  Niche 0{idx + 1}
                </span>
                <h3 className="mt-4 font-heading text-xl sm:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                  {niche.title}
                </h3>
                <p className="mt-4 text-sm sm:text-base font-medium leading-relaxed text-frame-muted-fg">
                  {niche.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-sm sm:text-base font-medium text-frame-muted-fg italic">
          We scope the redesign around what your specific website needs rather than applying the same business-site checklist to every project.
        </p>
      </div>
    </section>
  )
}