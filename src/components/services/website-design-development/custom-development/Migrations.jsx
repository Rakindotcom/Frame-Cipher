import { SectionIntro } from '../../../Kinetic'

const migrationTypes = [
  {
    title: 'WordPress to Next.js',
    desc: 'Rebuild the frontend in Next.js while preserving important content structures, URLs, metadata, redirects, and SEO requirements.',
  },
  {
    title: 'React SPA to Next.js',
    desc: 'Modernize an existing React application where the business needs improved architecture, rendering options, routing, or performance.',
  },
  {
    title: 'Pages Router to App Router',
    desc: 'Refactor an existing Next.js application toward the App Router while reviewing data fetching, component boundaries, routing, caching, and existing functionality.',
  },
  {
    title: 'Legacy Frontend Modernization',
    desc: 'Replace outdated frontend architecture with a more maintainable Next.js structure while protecting the business functionality that already works.',
  },
  {
    title: 'Existing Next.js Codebase Takeover',
    desc: 'We can review and continue an existing Next.js project when a business needs a new development partner, technical improvements, or ongoing feature development.',
  },
]

export default function Migrations() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Platform Replatforming" title="Next.js Migration &amp; Modernization">
          Moving an existing website or application to Next.js requires more than rebuilding the frontend. We first review the current architecture, content, URLs, data, integrations, functionality, and technical limitations.
        </SectionIntro>

        <div className="grid bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 border-2 border-frame-border">
          {migrationTypes.map((mig, idx) => (
            <div key={idx} className="flex flex-col justify-between bg-frame-bg p-6 sm:p-7">
              <div>
                <span className="text-[11px] font-black uppercase tracking-wider text-frame-accent">
                  Modernization 0{idx + 1}
                </span>
                <h3 className="mt-2 font-heading text-base sm:text-lg font-bold uppercase text-frame-fg">
                  {mig.title}
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-frame-muted-fg leading-relaxed">
                  {mig.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-xs sm:text-sm italic text-frame-muted-fg border-l-2 border-frame-accent pl-3 py-1">
          A migration plan should protect valuable content and functionality while giving the new architecture a clear path forward.
        </p>
      </div>
    </section>
  )
}