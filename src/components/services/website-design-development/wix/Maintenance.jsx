import { SectionIntro } from '../../../Kinetic'

const maintenanceItems = [
  'Content and page updates',
  'Layout and responsive fixes',
  'App and integration checks',
  'Performance reviews',
  'SEO updates',
  'Troubleshooting',
  'Minor functionality improvements',
  'Wix Studio refinements',
  'Ongoing website enhancements',
]

export default function Maintenance() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Ongoing Care & Support" title="Post-Launch Wix Support & Maintenance">
          Launching the website is only the beginning. Businesses often need updates, fixes, improvements, and occasional technical support after launch.
        </SectionIntro>

        <div className="border-2 border-frame-border bg-frame-bg p-7 md:p-10">
          <p className="text-sm md:text-base font-medium text-frame-fg/90 mb-6">
            Our ongoing Wix support can include:
          </p>
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
            {maintenanceItems.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 border border-frame-border/80 bg-frame-muted/20 p-4">
                <span className="text-frame-accent font-bold">✓</span>
                <span className="text-xs md:text-sm font-medium text-frame-fg">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 space-y-4 border-t border-frame-border/80 pt-6 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
            <p>
              Ongoing support is scoped separately based on the level of assistance your website requires.
            </p>
            <p>
              For businesses that prefer to manage the website independently, we provide the agreed editor handover and basic guidance during launch.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}