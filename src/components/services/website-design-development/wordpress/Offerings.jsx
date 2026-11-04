const coreServices = [
  {
    tag: '01',
    title: 'Custom WordPress Theme Development',
    description: 'We build custom WordPress themes around your brand, content structure, and user experience instead of forcing your business into a pre-built template. This can include custom layouts, Gutenberg blocks, responsive templates, reusable sections, and design systems that your team can manage after launch.',
  },
  {
    tag: '02',
    title: 'Custom WordPress Plugin Development',
    description: 'When an existing plugin cannot meet your requirements, we can develop custom functionality around your business workflow. This may include custom features, REST API integrations, admin tools, custom Gutenberg blocks, user roles, and other functionality that needs to work directly with your WordPress environment.',
  },
  {
    tag: '03',
    title: 'WordPress Page Builder Development',
    description: 'For businesses that need flexible visual editing, we can work with tools such as Elementor or Gutenberg. We configure reusable sections, templates, and responsive layouts while keeping performance and maintainability in mind. The goal is to give your team editing flexibility without adding unnecessary technical overhead.',
  },
  {
    tag: '04',
    title: 'WordPress Security & Hardening',
    description: 'We apply practical security measures during development to reduce common WordPress risks. Depending on the project, this can include login protection, SSL configuration, secure access settings, firewall or security plugin setup, update practices, backups, and other hardening measures.',
  },
  {
    tag: '05',
    title: 'WordPress Speed & Performance Optimization',
    description: 'We optimize the factors that affect WordPress performance, including caching, image handling, scripts, plugins, database performance, and mobile usability. Where required, CDN configuration and other performance improvements can also be considered to support a faster user experience and stronger Core Web Vitals.',
  },
  {
    tag: '06',
    title: 'WordPress Migration & Website Rebuild',
    description: 'We can move an existing website to WordPress or rebuild an outdated WordPress installation without treating migration as a simple content copy. The process can include content and media migration, URL mapping, redirects, metadata preservation, staging, testing, and SEO-conscious restructuring.',
  },
]

export default function Offerings() {
  return (
    <section className="relative border-t border-white/[0.08] bg-[#09090B] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        {/* Left-Aligned Header Block */}
        <div className="mb-14 max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight text-white">
            Our WordPress Development{' '}
            <span className="italic text-frame-accent">Services.</span>
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
            We provide end-to-end WordPress development based on your website&apos;s purpose, content workflow, functionality, and long-term requirements.
          </p>
        </div>

        {/* 3-Column Grid of Service Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {coreServices.map((service, index) => (
            <div
              key={index}
              className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/[0.08] bg-[#121214] p-7 sm:p-8 transition-colors duration-200 hover:border-white/[0.14] before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-frame-accent/40 before:to-transparent"
            >
              <div>
                <span className="font-mono text-[11px] uppercase tracking-widest text-frame-accent">
                  {service.tag}
                </span>
                <h3 className="mt-3 font-heading text-xl font-medium tracking-tight text-white">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-300">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Context Callout */}
        <div className="mt-10 rounded-xl border border-white/[0.08] bg-[#121214] p-6 border-l-2 border-l-frame-accent">
          <p className="text-sm sm:text-base leading-relaxed text-zinc-300">
            Our recommendations depend on your website&apos;s purpose, technical requirements, content workflow, and budget. We use only the functionality your project actually needs rather than adding unnecessary themes, plugins, or complexity.
          </p>
        </div>
      </div>
    </section>
  )
}
