import { SectionIntro, PosterButton } from '../../../Kinetic'

const focusAreas = [
  {
    title: 'Google Maps Visibility',
    body: 'Help customers discover your business locally when they search by place or service.',
  },
  {
    title: 'Local Organic Visibility',
    body: 'Attract searches beyond the Map Pack through standard organic results.',
  },
  {
    title: 'Customer Actions',
    body: 'Turn local discovery into calls, website visits, directions, bookings, and enquiries.',
  },
]

export default function Overview() {
  return (
    <section className="border-y-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Strategic Approach"
          title="Local SEO Built for Maps, Search Visibility, and Local Customers"
        >
          Local customers often search with a specific place, area, or service in mind. They may
          search for a restaurant nearby, a clinic in their city, a repair service in their area,
          or a company that serves their neighborhood. Your business needs to appear where those
          searches happen.
        </SectionIntro>

        <div className="grid gap-10 border-t-2 border-frame-border pt-12 lg:grid-cols-[1.3fr_0.7fr] lg:items-start">
          <div className="space-y-5 text-base font-medium leading-relaxed text-frame-muted-fg md:text-lg">
            <p>
              Our local SEO strategy focuses on three connected areas that determine whether a
              nearby customer finds you and takes action.
            </p>
            <ul className="space-y-3 text-sm font-semibold text-frame-fg md:text-base">
              {focusAreas.map((area) => (
                <li key={area.title} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center border border-frame-accent bg-frame-accent/10 text-frame-accent">
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>
                    {area.title}. <span className="font-medium text-frame-muted-fg">{area.body}</span>
                  </span>
                </li>
              ))}
            </ul>
            <p>
              We do not treat your Google Business Profile and website as separate marketing
              channels. We connect the relevant local signals so your business presents consistent
              information across search.
            </p>
            <p>
              The goal is not simply to increase impressions. It is to create stronger local
              visibility that supports real customer actions.
            </p>
          </div>

          <div className="border-2 border-frame-border bg-frame-muted/10 p-7 md:p-8">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              Get Free Consultation
            </span>
            <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
              See where your business shows up locally
            </h3>
            <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
              We review your Google Business Profile, local pages, citations, competition, and
              Maps visibility to identify the improvements that matter most.
            </p>
            <div className="mt-7">
              <PosterButton href="/contact">Get Free Consultation &rarr;</PosterButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}