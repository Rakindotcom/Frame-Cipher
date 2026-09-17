import { SectionIntro, SectionLabel } from '../../../Kinetic'

const coreServices = [
  {
    title: 'Custom WordPress Theme Development',
    tag: 'Service 01',
    description: 'We build custom WordPress themes around your brand, content structure, and user experience instead of forcing your business into a pre-built template.',
    bullets: [
      'Bespoke visual layouts & typography matching your brand identity.',
      'Custom Gutenberg blocks allowing easy, modular page assembly.',
      'Responsive design systems that your team can manage after launch.',
      'Clean semantic markup ensuring high Core Web Vitals performance.',
    ],
  },
  {
    title: 'Custom Plugin & API Development',
    tag: 'Service 02',
    description: 'When existing plugins cannot meet your requirements, we develop custom functionality around your business workflow.',
    bullets: [
      'Custom REST API endpoints and third-party data integrations.',
      'Tailored administrative workflows and client-side dashboards.',
      'Custom user roles, permission structures, and private portals.',
      'Lightweight code avoiding plugin dependency vulnerabilities.',
    ],
  },
  {
    title: 'WordPress Page Builder Development',
    tag: 'Service 03',
    description: 'For businesses that need flexible visual editing, we work with Gutenberg or Elementor without bloat.',
    bullets: [
      'Pre-configured reusable sections and modular design libraries.',
      'Mobile-responsive layout controls optimized for non-technical editors.',
      'Performance-tuned asset loading minimizing redundant CSS/JS.',
      'Editorial independence without breaking core layouts.',
    ],
  },
  {
    title: 'WordPress Security & Hardening',
    tag: 'Service 04',
    description: 'We apply practical security measures during development to protect against common vulnerabilities.',
    bullets: [
      'Login protection, two-factor authentication, and brute-force shields.',
      'SSL/TLS configuration and database prefix hardening.',
      'Firewall setup, security headers, and malware scanning.',
      'Automated off-site backup routines and recovery testing.',
    ],
  },
  {
    title: 'Speed & Core Web Vitals Optimization',
    tag: 'Service 05',
    description: 'We optimize the factors that affect WordPress performance to ensure fast, sub-second load times.',
    bullets: [
      'Advanced server-side page caching and Redis/Memcached object caching.',
      'Next-gen image conversion (WebP/AVIF) and lazy loading.',
      'Script deferral, stylesheet minification, and database indexing.',
      'Global CDN configuration for lightning-fast international delivery.',
    ],
  },
  {
    title: 'WordPress Migration & Rebuilds',
    tag: 'Service 06',
    description: 'Moving an existing site to WordPress or rebuilding an outdated installation with zero SEO loss.',
    bullets: [
      'Complete database, content, media, and user account transfer.',
      'Comprehensive 301 redirect mapping protecting search rankings.',
      'Metadata and schema preservation during restructuring.',
      'Staging environment review before live DNS cutover.',
    ],
  },
]

const useCases = [
  { title: 'Business & Corporate Sites', desc: 'Structured around lead generation, service clarity, and credibility for teams updating content regularly.' },
  { title: 'WooCommerce Stores', desc: 'Full product catalogs, local payment integration (bKash/Nagad), and inventory management in one CMS.' },
  { title: 'Blogs & Publications', desc: 'Fast publishing workflows, author management, category taxonomy, and SEO-friendly architecture.' },
  { title: 'Portfolios & Personal Brands', desc: 'Visually driven builds for executives, consultants, and creative agencies where presentation matters.' },
  { title: 'Membership & Community Sites', desc: 'Gated content, paid member tiers, user accounts, and recurring subscription workflows.' },
  { title: 'Directories & Listings', desc: 'Structured, filterable content for job boards, classifieds, and business directories with custom post types.' },
]

export default function Offerings() {
  return (
    <div className="bg-frame-bg text-frame-fg">
      {/* CORE CAPABILITIES */}
      <section className="px-4 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-[95vw]">
          <SectionIntro
            eyebrow="Scope of work"
            title="Our WordPress Development Services"
          >
            We provide end-to-end WordPress development based on your website&apos;s purpose, content workflow, functionality, and long-term requirements.
          </SectionIntro>

          <div className="grid bg-frame-border gap-px md:grid-cols-2 lg:grid-cols-3">
            {coreServices.map((service, index) => (
              <div key={index} className="bg-frame-bg p-7 md:p-8 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">{service.tag}</span>
                  <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
                    {service.description}
                  </p>
                </div>
                <ul className="mt-6 space-y-2.5 border-t border-frame-border/60 pt-5 text-xs md:text-sm font-medium text-frame-fg/90">
                  {service.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2">
                      <span className="text-frame-accent font-bold">✓</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTIONS FOR DIFFERENT BUSINESS NEEDS */}
      <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-[95vw]">
          <SectionIntro
            eyebrow="Platform Versatility"
            title="WordPress Solutions for Different Business Needs"
          >
            WordPress isn&apos;t one type of website; it&apos;s a platform flexible enough to power almost any kind of site, and each type needs its own approach.
          </SectionIntro>

          <div className="grid bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-3">
            {useCases.map((uc, index) => (
              <div key={index} className="bg-frame-bg p-7">
                <SectionLabel className="mb-2">Architecture {String(index + 1).padStart(2, '0')}</SectionLabel>
                <h3 className="font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-frame-fg">
                  {uc.title}
                </h3>
                <p className="mt-3 text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {uc.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PAGE BUILDER VS CUSTOM THEME TABLE */}
      <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-[95vw]">
          <SectionIntro
            eyebrow="Technical Decision"
            title="Page Builder vs Custom WordPress Theme"
          >
            Both approaches can work well. The right choice depends on your budget, editing workflow, performance needs, and long-term plans.
          </SectionIntro>

          <div className="overflow-hidden border-2 border-frame-border bg-frame-bg">
            <table className="w-full text-left">
              <thead className="border-b-2 border-frame-border bg-frame-muted/30">
                <tr>
                  <th className="p-4 md:p-6 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Factor</th>
                  <th className="p-4 md:p-6 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Page Builder (Elementor/Gutenberg)</th>
                  <th className="p-4 md:p-6 text-xs md:text-sm font-black uppercase tracking-[0.24em] text-frame-accent">Custom WordPress Theme</th>
                </tr>
              </thead>
              <tbody className="divide-y-2 divide-frame-border text-sm md:text-base font-medium">
                <tr className="hover:bg-frame-muted/20">
                  <td className="p-4 md:p-6 font-bold text-frame-fg">Initial Investment</td>
                  <td className="p-4 md:p-6 text-frame-muted-fg">Lower starting cost</td>
                  <td className="p-4 md:p-6 text-frame-muted-fg">Higher initial investment</td>
                </tr>
                <tr className="hover:bg-frame-muted/20">
                  <td className="p-4 md:p-6 font-bold text-frame-fg">Launch Speed</td>
                  <td className="p-4 md:p-6 text-frame-muted-fg">Faster turnaround</td>
                  <td className="p-4 md:p-6 text-frame-muted-fg">Longer design & build cycle</td>
                </tr>
                <tr className="hover:bg-frame-muted/20">
                  <td className="p-4 md:p-6 font-bold text-frame-fg">Performance & Speed</td>
                  <td className="p-4 md:p-6 text-frame-muted-fg">Requires tuning to avoid bloat</td>
                  <td className="p-4 md:p-6 text-frame-accent font-bold">Sub-second Core Web Vitals</td>
                </tr>
                <tr className="hover:bg-frame-muted/20">
                  <td className="p-4 md:p-6 font-bold text-frame-fg">Plugin Dependency</td>
                  <td className="p-4 md:p-6 text-frame-muted-fg">Moderate to high</td>
                  <td className="p-4 md:p-6 text-frame-accent font-bold">Minimal; clean code architecture</td>
                </tr>
                <tr className="hover:bg-frame-muted/20">
                  <td className="p-4 md:p-6 font-bold text-frame-fg">Best Suited For</td>
                  <td className="p-4 md:p-6 text-frame-muted-fg">SMEs needing rapid visual editing</td>
                  <td className="p-4 md:p-6 text-frame-muted-fg">Brands needing bespoke custom architecture</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  )
}
