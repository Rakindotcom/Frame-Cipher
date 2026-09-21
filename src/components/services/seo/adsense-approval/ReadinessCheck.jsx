import { SectionIntro } from '../../../Kinetic'

const criteria = [
  {
    title: 'Original, Useful Content',
    body: 'Google says sites applying for AdSense should have high-quality, original content that provides value to visitors. It also warns against sites with insufficient content, mostly visual pages, unfinished sections, or little original value. We review whether your pages offer genuine information, useful context, complete explanations, and enough substance for visitors to understand the topic. We do not rely on a fixed article count because Google does not publish one universal number of posts required for approval.',
  },
  {
    title: 'Clear Navigation & User Experience',
    body: 'Your visitors should be able to move through the site easily and find the information they are looking for. Google identifies navigation problems as a reason an AdSense application may not be approved. Issues can include broken links, restricted pages, excessive pop-ups, redirects, unfinished pages, and unclear site organization. We review menus, internal links, page hierarchy, usability, mobile presentation, and other structural issues that can make a site difficult to use.',
  },
  {
    title: 'AdSense Policy Compliance',
    body: 'Your website must comply with Google\u2019s AdSense and publisher policies before you apply. Google can update these policies, so we review your site against the requirements that apply at the time of your engagement. We look for prohibited or restricted content, problematic implementations, misleading elements, and other policy risks that could affect your application.',
  },
  {
    title: 'Site Ownership & Technical Access',
    body: 'Google requires applicants to have access to the site\u2019s HTML source code so AdSense can be connected and reviewed properly. We check whether your website is technically prepared for AdSense connection, including access, live pages, site configuration, and the basic setup needed to place and verify AdSense code.',
  },
  {
    title: 'Publisher Eligibility',
    body: 'Google\u2019s current eligibility guidance states that applicants need their own content, must comply with AdSense policies, and must be at least 18 years old. Additional account and product requirements can also apply depending on how AdSense is being used. We review the eligibility factors that are relevant to your website and explain any issue that should be addressed before you submit.',
  },
]

export default function ReadinessCheck() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Readiness criteria" title="Is Your Website Ready for Google AdSense?">
          Google evaluates sites on content, navigation, policy compliance, technical setup, and
          eligibility before deciding on an application.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-2 lg:grid-cols-3">
          {criteria.map((item, index) => (
            <div key={item.title} className="flex flex-col justify-between bg-frame-bg p-7 md:p-8">
              <div>
                <span className="font-heading text-4xl font-bold leading-none tracking-tighter text-frame-muted">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-4 font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {item.body}
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