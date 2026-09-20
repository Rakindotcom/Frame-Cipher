import { SectionIntro } from '../../../Kinetic'

const coreServices = [
  {
    tag: 'Service 01',
    title: 'Custom WordPress Theme Development',
    description: 'We build custom WordPress themes around your brand, content structure, and user experience instead of forcing your business into a pre-built template. This can include custom layouts, Gutenberg blocks, responsive templates, reusable sections, and design systems that your team can manage after launch.',
  },
  {
    tag: 'Service 02',
    title: 'Custom WordPress Plugin Development',
    description: 'When an existing plugin cannot meet your requirements, we can develop custom functionality around your business workflow. This may include custom features, REST API integrations, admin tools, custom Gutenberg blocks, user roles, and other functionality that needs to work directly with your WordPress environment.',
  },
  {
    tag: 'Service 03',
    title: 'WordPress Page Builder Development',
    description: 'For businesses that need flexible visual editing, we can work with tools such as Elementor or Gutenberg. We configure reusable sections, templates, and responsive layouts while keeping performance and maintainability in mind. The goal is to give your team editing flexibility without adding unnecessary technical overhead.',
  },
  {
    tag: 'Service 04',
    title: 'WordPress Security & Hardening',
    description: 'We apply practical security measures during development to reduce common WordPress risks. Depending on the project, this can include login protection, SSL configuration, secure access settings, firewall or security plugin setup, update practices, backups, and other hardening measures.',
  },
  {
    tag: 'Service 05',
    title: 'WordPress Speed & Performance Optimization',
    description: 'We optimize the factors that affect WordPress performance, including caching, image handling, scripts, plugins, database performance, and mobile usability. Where required, CDN configuration and other performance improvements can also be considered to support a faster user experience and stronger Core Web Vitals.',
  },
  {
    tag: 'Service 06',
    title: 'WordPress Migration & Website Rebuild',
    description: 'We can move an existing website to WordPress or rebuild an outdated WordPress installation without treating migration as a simple content copy. The process can include content and media migration, URL mapping, redirects, metadata preservation, staging, testing, and SEO-conscious restructuring.',
  },
]

export default function Offerings() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Capabilities & Custom Builds" title="Our WordPress Development Services" index="05">
          We provide end-to-end WordPress development based on your website&apos;s purpose, content workflow, functionality, and long-term requirements.
        </SectionIntro>

        <div className="grid border-2 border-frame-border bg-frame-border gap-px md:grid-cols-2 lg:grid-cols-3">
          {coreServices.map((service, index) => (
            <div key={index} className="bg-frame-bg p-7 md:p-8 flex flex-col justify-between min-h-[260px]">
              <div>
                <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">{service.tag}</span>
                <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 border-2 border-frame-border bg-frame-muted/20 p-6 md:p-8">
          <p className="text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
            Our recommendations depend on your website&apos;s purpose, technical requirements, content workflow, and budget. We use only the functionality your project actually needs rather than adding unnecessary themes, plugins, or complexity.
          </p>
        </div>
      </div>
    </section>
  )
}