import Link from 'next/link'
import { SectionIntro, PosterButton } from '../../../Kinetic'

const objectives = [
  'Build B2B visibility',
  'Strengthen professional credibility',
  'Establish executive authority',
  'Communicate industry expertise',
  'Support lead generation',
  'Build relationships with prospects and partners',
  'Support recruitment and employer branding',
  'Share company news and milestones',
  'Educate potential customers',
  'Support sales conversations',
  'Strengthen your professional reputation',
  'Build a network around your expertise',
]

export default function Overview() {
  return (
    <section className="border-y-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Strategic approach"
          title="LinkedIn Management Built Around Your Business Goals"
        >
          LinkedIn should have a clear role in your broader business strategy. Framecipher develops
          your LinkedIn strategy around those objectives instead of treating every business like a
          corporate publishing account.
        </SectionIntro>

        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-start">
          <div>
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              Depending on your business, your LinkedIn presence may need to
            </span>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {objectives.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 border-2 border-frame-border bg-frame-muted/10 p-4 transition-colors hover:border-frame-accent"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center border border-frame-accent bg-frame-accent/10 text-frame-accent">
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-sm font-semibold leading-snug text-frame-fg">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 border-l-2 border-frame-accent bg-frame-muted/10 p-6">
              <p className="text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
                We can coordinate company page content with executive profiles, thought leadership,
                employee participation, community engagement, and performance insights so each part
                supports the broader LinkedIn strategy.
              </p>
            </div>
          </div>

          <div className="border-2 border-frame-border bg-frame-muted/10 p-7 md:p-8">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              Free LinkedIn Presence Audit
            </span>
            <h3 className="mt-3 font-heading text-xl font-bold uppercase tracking-tight text-frame-fg md:text-2xl">
              See what your presence is communicating
            </h3>
            <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
              A company page posting quarterly and a founder who hasn&rsquo;t updated their profile
              since changing jobs are both quietly telling LinkedIn the same thing. We review the
              pages, profiles, content, and audience response behind your presence.
            </p>
            <div className="mt-7 space-y-3">
              <PosterButton href="/contact">Get Your LinkedIn Presence Audited &rarr;</PosterButton>
              <PosterButton href="/contact" variant="outline" className="w-full">
                Request a Custom Quote
              </PosterButton>
            </div>
            <p className="mt-5 text-xs font-medium leading-relaxed text-frame-muted-fg">
              Looking for the full service?{' '}
              <Link
                href="/services/social-media-management"
                className="font-bold text-frame-accent underline underline-offset-4 transition hover:text-frame-fg"
              >
                Social media management
              </Link>{' '}
              covers LinkedIn as part of a coordinated cross-platform presence.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
