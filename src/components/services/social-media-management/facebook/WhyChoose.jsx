import { AutoLinks } from '../../../seo/AutoLinks'
import { PosterButton } from '../../../Kinetic'

const standards = [
  {
    title: 'One In-House Team',
    body: 'Your Facebook management does not need to move between unrelated freelancers and outsourced teams. Strategy, content, publishing, community management, and reporting can be coordinated through one in-house team.',
  },
  {
    title: 'Facebook-Specific Strategy',
    body: 'Facebook is not Instagram with a different logo. We consider Facebook-specific content formats, customer behavior, Page structure, community interactions, Messenger, reviews, and business goals when building your strategy.',
  },
  {
    title: 'Human Review & Approval',
    body: 'We do not treat automation as a replacement for judgment. Content is reviewed for brand fit, accuracy, tone, customer relevance, business context, and publishing readiness. Your approval remains part of the workflow where required.',
    points: ['Brand fit', 'Accuracy', 'Tone', 'Customer relevance', 'Business context', 'Publishing readiness'],
  },
  {
    title: 'Bangladesh & International Experience',
    body: 'We understand the differences between managing a Bangladesh-focused Page and communicating with international audiences. We can adapt communication for local and international markets while maintaining your core brand identity.',
  },
  {
    title: 'Client-Owned Accounts & Secure Access',
    body: 'Your business should retain ownership of its Facebook Page and relevant business assets. Where access is required, we use the appropriate account permissions and access workflows rather than asking clients to hand over personal passwords.',
    note: 'Meta’s business tools support role and asset-based access, making structured account management important for businesses working with external teams.',
  },
  {
    title: 'Clear Reporting & Communication',
    body: 'You should know what is being managed and what the numbers mean. We provide clear reporting around agreed metrics, content performance, community activity, and recommended next steps.',
  },
]

export default function WhyChoose() {
  return (
    <section className="relative border-t border-white/[0.08] bg-[#09090B] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Header */}
        <div className="mb-14 max-w-3xl space-y-4">
          <div className="flex items-center gap-2 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-frame-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
            The Framecipher Standard
          </div>
          <h2 className="mt-4 font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-[-0.03em] text-white">
            Why Choose Framecipher for Facebook Management
          </h2>
          <p className="mt-4 text-base sm:text-lg font-normal leading-relaxed text-zinc-300">
            Facebook work handled by people who know the platform, with clear boundaries between what
            your team controls and what Meta controls.
          </p>
        </div>

        {/* Standards Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {standards.map((standard, index) => (
            <article
              key={standard.title}
              className="group flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#121214] p-7 transition-colors duration-300 hover:border-white/[0.18] hover:bg-[#151518]"
            >
              <div>
                <span className="font-mono text-xs font-medium text-frame-accent">
                  Standard {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-4 font-heading text-lg sm:text-xl font-medium tracking-tight text-white">
                  {standard.title}
                </h3>
                <div className="mt-3 text-sm leading-relaxed text-[#A1A1AA]">
                  <AutoLinks currentPath="/services/social-media-management/facebook" allowed={["/services/social-media-management/community-management"]}>
                    {standard.body}
                  </AutoLinks>
                </div>
              </div>

              <div className="mt-6 border-t border-white/[0.08] pt-5">
                {standard.points && (
                  <ul className="space-y-2">
                    {standard.points.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2 text-xs text-[#D4D4D8]">
                        <svg
                          className="mt-0.5 h-3.5 w-3.5 shrink-0 text-frame-accent"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="leading-snug">{point}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {standard.note && (
                  <div className="mt-4 rounded-xl border border-white/[0.06] bg-[#09090B]/60 p-3 text-xs leading-relaxed text-[#A1A1AA]">
                    {standard.note}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 rounded-xl border border-white/[0.08] bg-[#121214] p-8 sm:p-10 lg:flex lg:items-center lg:justify-between lg:gap-8">
          <div className="mb-14 max-w-3xl space-y-4">
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-frame-accent">
              Transparent Boundaries
            </span>
            <p className="mt-2 text-base leading-relaxed text-[#FAFAFA] sm:text-lg">
              Ad spend is separate from Facebook management fees, which keeps organic content,
              community management, and paid advertising strategically distinct.
            </p>
          </div>
          <div className="mt-6 shrink-0 lg:mt-0">
            <PosterButton href="/contact">Get Your Free Page Audit</PosterButton>
          </div>
        </div>
      </div>
    </section>
  )
}
