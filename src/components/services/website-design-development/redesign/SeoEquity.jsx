import { SectionIntro } from '../../../Kinetic'

export default function SeoEquity() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="SEO Preservation Protocol" title="Redesign Without Losing Your SEO Equity" />
        <div className="mt-10 grid gap-6 border-2 border-frame-border bg-frame-muted/10 p-7 sm:p-8 md:grid-cols-2 md:p-10">
          <p className="text-base sm:text-lg md:text-xl font-medium leading-relaxed text-frame-muted-fg">
            A website redesign can change URLs, content, navigation, templates, internal links, structured data, and technical signals at the same time.
          </p>
          <p className="flex items-center text-base sm:text-lg md:text-xl font-bold leading-relaxed text-frame-fg">
            That is why SEO needs to be considered before development and checked again after launch.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* BEFORE DEVELOPMENT */}
          <div className="border-2 border-frame-border bg-frame-bg p-7 sm:p-8 md:p-10">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              Phase 01
            </span>
            <h3 className="mt-2 font-heading text-2xl font-bold uppercase tracking-tight text-frame-fg">
              Before Development
            </h3>
            <div className="mt-6 space-y-6">
              <div>
                <h4 className="font-heading text-lg font-bold text-frame-fg uppercase">Existing URL Inventory</h4>
                <p className="mt-2 text-sm font-medium text-frame-muted-fg leading-relaxed">
                  We identify the important URLs on the existing website and determine which should remain, change, consolidate, or be removed.
                </p>
              </div>
              <div>
                <h4 className="font-heading text-lg font-bold text-frame-fg uppercase">Ranking &amp; Traffic Baseline</h4>
                <p className="mt-2 text-sm font-medium text-frame-muted-fg leading-relaxed">
                  We document important organic pages, search visibility, traffic patterns, and other available SEO data before major structural changes begin.
                </p>
              </div>
              <div>
                <h4 className="font-heading text-lg font-bold text-frame-fg uppercase">Content Review</h4>
                <p className="mt-2 text-sm font-medium text-frame-muted-fg leading-relaxed">
                  We identify valuable ranking and conversion content that should be preserved, improved, consolidated, or intentionally retired.
                </p>
              </div>
            </div>
          </div>

          {/* DURING THE REBUILD */}
          <div className="border-2 border-frame-border bg-frame-bg p-7 sm:p-8 md:p-10">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              Phase 02
            </span>
            <h3 className="mt-2 font-heading text-2xl font-bold uppercase tracking-tight text-frame-fg">
              During the Rebuild
            </h3>
            <div className="mt-6 space-y-6">
              <div>
                <h4 className="font-heading text-lg font-bold text-frame-fg uppercase">Page-Level Redirect Mapping</h4>
                <p className="mt-2 text-sm font-medium text-frame-muted-fg leading-relaxed">
                  When URLs change, old URLs are mapped to the most relevant new destinations instead of leaving valuable pages to return errors or sending unrelated pages to the homepage.
                </p>
              </div>
              <div>
                <h4 className="font-heading text-lg font-bold text-frame-fg uppercase">Metadata &amp; Content Preservation</h4>
                <p className="mt-2 text-sm font-medium text-frame-muted-fg leading-relaxed">
                  Important titles, descriptions, headings, content, images, and other search-relevant elements are reviewed during migration.
                </p>
              </div>
              <div>
                <h4 className="font-heading text-lg font-bold text-frame-fg uppercase">Internal Linking Review</h4>
                <p className="mt-2 text-sm font-medium text-frame-muted-fg leading-relaxed">
                  New navigation and page structures are checked so important pages remain discoverable and connected.
                </p>
              </div>
              <div>
                <h4 className="font-heading text-lg font-bold text-frame-fg uppercase">Canonical &amp; Structured Data Review</h4>
                <p className="mt-2 text-sm font-medium text-frame-muted-fg leading-relaxed">
                  Canonical URLs, schema, and other technical SEO elements are reviewed as templates and page structures change.
                </p>
              </div>
            </div>
          </div>

          {/* BEFORE LAUNCH */}
          <div className="border-2 border-frame-border bg-frame-bg p-7 sm:p-8 md:p-10">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              Phase 03
            </span>
            <h3 className="mt-2 font-heading text-2xl font-bold uppercase tracking-tight text-frame-fg">
              Before Launch
            </h3>
            <div className="mt-4">
              <h4 className="font-heading text-lg font-bold text-frame-fg uppercase">Pre-Launch SEO QA</h4>
              <p className="mt-2 text-sm font-medium text-frame-muted-fg mb-4">We check:</p>
              <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm font-medium text-frame-fg">
                {[
                  'Redirects',
                  'Status codes',
                  'Canonicals',
                  'Robots directives',
                  'XML sitemap',
                  'Internal links',
                  'Metadata',
                  'Structured data',
                  'Indexability',
                  'Mobile experience',
                ].map((chk, cIdx) => (
                  <div key={cIdx} className="flex items-center gap-2">
                    <span className="text-frame-accent font-bold">✓</span>
                    <span>{chk}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* AFTER LAUNCH */}
          <div className="border-2 border-frame-border bg-frame-bg p-7 sm:p-8 md:p-10">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              Phase 04
            </span>
            <h3 className="mt-2 font-heading text-2xl font-bold uppercase tracking-tight text-frame-fg">
              After Launch
            </h3>
            <div className="mt-4">
              <h4 className="font-heading text-lg font-bold text-frame-fg uppercase">Post-Launch Monitoring</h4>
              <p className="mt-2 text-sm sm:text-base font-medium text-frame-muted-fg leading-relaxed">
                We monitor important search and technical signals after launch to identify issues that may appear during the transition.
              </p>
            </div>
            <div className="mt-8 border-t border-frame-border pt-4">
              <p className="text-xs font-medium text-frame-muted-fg italic">
                Search engines need time to process changes, and post-launch vigilance ensures that unexpected crawl anomalies are addressed instantly.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 border-2 border-frame-border bg-frame-bg p-6 md:p-8">
          <p className="text-sm sm:text-base md:text-lg font-medium leading-relaxed text-frame-muted-fg">
            The goal isn&apos;t simply to launch a newer website. It&apos;s to launch a better website without unnecessarily giving up the search visibility, content, and authority the existing website has already earned.
          </p>
        </div>
      </div>
    </section>
  )
}