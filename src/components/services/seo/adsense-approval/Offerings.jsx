import { SectionIntro, PosterButton } from '../../../Kinetic'

const offerings = [
  {
    title: 'AdSense Readiness Audit',
    body: 'We assess your site before you apply or reapply. The review covers content quality, site structure, navigation, policy risks, technical readiness, traffic sources, eligibility factors, and other issues that may affect the review.',
    closing:
      'You receive clear findings instead of a generic \u201Cyour site is not ready\u201D answer.',
  },
  {
    title: 'Content Quality & Originality Review',
    body: 'We review whether your important pages provide original, useful, and sufficiently detailed information.',
    lead: 'Our analysis can identify:',
    points: [
      'Thin or underdeveloped pages',
      'Repetitive content',
      'Low-value pages',
      'Auto-generated or minimally useful content',
      'Weak topical coverage',
      'Content that provides little additional value',
      'Affiliate pages that need stronger original value',
    ],
    closing:
      'Google specifically identifies insufficient content and content quality issues as common reasons an application may not be approved.',
  },
  {
    title: 'Policy & Restricted Content Review',
    body: 'We check your published content and site elements for AdSense policy risks. This includes reviewing potentially prohibited or restricted topics, misleading practices, problematic promotional elements, and other content or implementation issues that may require attention.',
    closing:
      'Google\u2019s publisher policies apply to participating publishers, and Google can update those policies over time.',
  },
  {
    title: 'Site Structure & Navigation Review',
    body: 'We examine how your site is organized and how easily users can move between important pages.',
    lead: 'We review:',
    points: [
      'Main navigation',
      'Internal linking',
      'URL and category structure',
      'Broken links',
      'Redirects',
      'Restricted or inaccessible pages',
      'Mobile usability',
      'Unfinished or placeholder sections',
      'Excessive pop-ups or disruptive elements',
    ],
    closing: 'The goal is a website that is clear, accessible, and ready for review.',
  },
  {
    title: 'Essential Trust & Transparency Pages',
    body: 'We review the pages and disclosures appropriate to your website, business model, and audience.',
    lead: 'This may include:',
    points: [
      'Privacy Policy',
      'About page',
      'Contact page',
      'Terms and conditions',
      'Relevant publisher or disclosure information',
    ],
    closing:
      'Google specifically requires publishers to provide certain privacy-policy disclosures relating to advertising cookies and third-party vendors when applicable. We do not treat every legal or informational page as a universal AdSense checklist. Instead, we assess what your particular site needs and identify missing or inadequate information.',
  },
  {
    title: 'AdSense Site Connection & Application Support',
    body: 'Once your website is ready, we can guide you through the AdSense connection and submission process. This includes checking that the site is live, the required code can be placed correctly, and the application is submitted with the right technical setup.',
    closing:
      'Google instructs publishers to connect their site, confirm AdSense code placement, and request a review through the AdSense Sites area.',
  },
  {
    title: 'Rejection Diagnosis & Re-Application Support',
    body: 'Already rejected? We review the rejection information available in your AdSense account together with the actual condition of your website. Then we identify the most relevant issues, prioritize the necessary fixes, and perform a pre-submission review before you apply again. This approach is especially useful when the rejection notice is broad and your site has several possible problem areas.',
  },
  {
    title: 'AdSense Setup & Ad Placement Guidance',
    body: 'After approval, your site still needs compliant implementation. We can help review planned ad placements, page layouts, ad density, and user experience so ads do not interfere with navigation or create misleading click opportunities.',
    closing:
      'Google\u2019s policies prohibit implementations that encourage clicks or cause users to mistake ads for other elements of the page.',
  },
]

export default function Offerings() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="What we cover" title="Our Google AdSense Approval Services">
          AdSense review outcomes hinge on content, policy, navigation, technical, and eligibility
          requirements. Our services map directly to what Google evaluates.
        </SectionIntro>

        <div className="space-y-10 md:space-y-14">
          {offerings.map((item, index) => (
            <div
              key={item.title}
              className="grid gap-6 border-2 border-frame-border bg-frame-bg p-7 md:p-10 lg:grid-cols-[1fr_1.6fr]"
            >
              <div>
                <div className="flex items-center justify-between gap-4">
                  <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                    Offer 0{index + 1}
                  </span>
                </div>
                <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                  {item.title}
                </h3>
                <span className="mt-2 block h-1 w-8 bg-frame-accent" />
              </div>
              <div>
                <p className="text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {item.body}
                </p>
                {item.lead && (
                  <p className="mt-4 text-sm font-semibold leading-relaxed text-frame-fg">
                    {item.lead}
                  </p>
                )}
                {item.points?.length > 0 && (
                  <ul className="mt-5 space-y-2.5 border-l-2 border-frame-accent pl-5 text-sm md:text-base font-medium text-frame-fg">
                    {item.points.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2 leading-snug">
                        <span className="mt-0.5 text-frame-accent font-bold">✓</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {item.closing && (
                  <p className="mt-5 border-t-2 border-frame-border/60 pt-4 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                    {item.closing}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 border-2 border-frame-accent bg-frame-accent/10 p-7 md:p-10 lg:flex lg:items-center lg:justify-between lg:gap-8">
          <p className="max-w-4xl text-sm md:text-base font-medium leading-relaxed text-frame-fg/90">
            Not sure whether your site is ready? Tell us where your website stands and we will
            recommend the most relevant starting point before you apply.
          </p>
          <div className="mt-6 lg:mt-0 lg:shrink-0">
            <PosterButton href="/contact" className="w-full whitespace-nowrap self-center">
              Request an AdSense Readiness Audit
            </PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}