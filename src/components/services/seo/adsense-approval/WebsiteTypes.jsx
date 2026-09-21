import { SectionIntro } from '../../../Kinetic'

const websiteTypes = [
  {
    title: 'Blogs & Content Publishers',
    body: 'We help bloggers and independent publishers prepare content-focused websites for AdSense by reviewing content depth, originality, navigation, policy compliance, and overall site readiness.',
  },
  {
    title: 'Niche & Informational Websites',
    body: 'Informational websites need more than a collection of short pages. We review topic coverage, content usefulness, internal structure, originality, and whether the site provides enough value beyond basic or repetitive information.',
  },
  {
    title: 'Affiliate & Review Websites',
    body: 'Affiliate sites can face additional quality challenges when much of their content provides little value beyond product listings or third-party information. We review whether your pages add genuine original value and whether affiliate content forms an appropriate part of the overall site.',
    closing:
      'Google\u2019s own guidance specifically warns against affiliate content that does not provide sufficient additional value.',
  },
  {
    title: 'News & Magazine Websites',
    body: 'We review category structure, article organization, publishing quality, navigation, author or publication information where relevant, and the broader policy-readiness of the site.',
  },
  {
    title: 'Multilingual Publishing Websites',
    body: 'Multilingual websites need careful attention to language support, navigation, page organization, and content quality across different versions.',
    closing:
      'Google currently supports several publisher languages, including Bengali and English, but unsupported primary-language content can create AdSense eligibility issues.',
  },
]

export default function WebsiteTypes() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Who we support" title="AdSense Approval Support for Different Website Types">
          The right preparation differs by site model. AdSense requirements look different for
          blogs, informational sites, affiliate sites, news publishers, and multilingual websites.
        </SectionIntro>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {websiteTypes.map((item, index) => (
            <div key={item.title} className="flex flex-col border-2 border-frame-border bg-frame-muted/30 p-7 md:p-8">
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                Website 0{index + 1}
              </span>
              <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                {item.title}
              </h3>
              <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
                {item.body}
              </p>
              {item.closing && (
                <p className="mt-5 border-l-2 border-frame-accent p-4 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {item.closing}
                </p>
              )}
              <span aria-hidden="true" className="mt-6 block h-1 w-8 bg-frame-accent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}