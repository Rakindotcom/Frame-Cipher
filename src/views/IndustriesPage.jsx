import Link from 'next/link'
import { industryLandingPages } from '../data/agency'
import { CTASection, PageHero, SectionIntro, TypeMarquee } from '../components/Kinetic'

export default function IndustriesPage() {
  return (
    <main className="bg-frame-bg text-frame-fg">
      <PageHero
        eyebrow="Industries"
        meta={`${industryLandingPages.length} high-intent landing pages`}
        number="IND"
        title="Marketing systems for specific markets."
      >
        Dedicated landing pages for restaurants, real estate, e-commerce, personal brands, and events in Dhaka and Bangladesh.
      </PageHero>

      <TypeMarquee items={industryLandingPages.map((page) => page.keyword)} accent slow />

      <section className="px-4 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-[95vw]">
          <SectionIntro eyebrow="Choose a market" title="Built around buyer intent." />
          <div className="grid gap-px bg-frame-border md:grid-cols-2">
            {industryLandingPages.map((page, index) => (
              <Link key={page.slug} href={`/industries/${page.slug}`} className="group bg-frame-bg p-7 transition-colors hover:bg-frame-accent md:p-10">
                <p className="font-heading text-5xl font-bold leading-none tracking-tighter text-frame-muted transition-colors group-hover:text-frame-accent-fg">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <p className="mt-7 text-xs font-black uppercase tracking-[0.26em] text-frame-accent transition-colors group-hover:text-frame-accent-fg/70">
                  {page.keyword}
                </p>
                <h2 className="mt-5 font-heading text-3xl font-bold uppercase leading-none tracking-tighter text-frame-fg transition-colors group-hover:text-frame-accent-fg md:text-4xl">
                  {page.title}
                </h2>
                <p className="mt-6 text-base font-medium leading-tight text-frame-muted-fg transition-colors group-hover:text-frame-accent-fg/80 md:text-lg">
                  {page.intro}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Need a market-specific campaign?" primaryText="Get a 360 Growth Audit">
        Frame Cipher can shape the strategy, content, website, ads, search visibility, and reporting around the market you sell into.
      </CTASection>
    </main>
  )
}
