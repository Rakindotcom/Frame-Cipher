import { SectionIntro } from '../../../Kinetic'

const includedItems = [
  'Security and software updates',
  'Backup management',
  'Backup verification',
  'Uptime monitoring',
  'Performance checks',
  'Malware and vulnerability checks',
  'Minor content updates',
  'Minor functionality fixes',
  'Integration checks',
  'Broken-link and error checks',
  'Routine technical support',
  'Maintenance reporting',
]

const separateProjectItems = [
  'Full website redesigns',
  'New website development',
  'Major new features',
  'Large application development',
  'Major ecommerce changes',
  'New complex integrations',
  'Platform migrations',
  'Full SEO campaigns',
  'Content writing',
  'Branding or graphic design projects',
  'Large content migrations',
]

export default function Scope() {
  return (
    <section className="bg-frame-bg px-4 py-16 sm:py-20 md:px-8 md:py-28 border-b-2 border-frame-border">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Scope Definition" title="What's Included in Website Maintenance, and What's Not">
          Clear scope helps prevent confusion about what a maintenance plan is designed to cover.
        </SectionIntro>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="border-2 border-frame-border bg-frame-bg p-7 sm:p-8 md:p-10">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
              Core Coverage
            </span>
            <h3 className="mt-2 font-heading text-2xl font-bold uppercase tracking-tight text-frame-fg">
              Usually Included
            </h3>
            <p className="mt-3 text-sm font-medium text-frame-muted-fg">
              Depending on your plan, website maintenance can include:
            </p>
            <ul className="mt-6 space-y-2.5 text-xs sm:text-sm font-medium text-frame-fg">
              {includedItems.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2.5">
                  <span className="text-frame-accent font-bold">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-2 border-frame-border bg-frame-muted/10 p-7 sm:p-8 md:p-10">
            <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-muted-fg">
              Separate Scopes
            </span>
            <h3 className="mt-2 font-heading text-2xl font-bold uppercase tracking-tight text-frame-fg">
              Usually Handled as Separate Projects
            </h3>
            <p className="mt-3 text-sm font-medium text-frame-muted-fg">
              Some requests change the scope of the website rather than simply maintaining it. These may include:
            </p>
            <ul className="mt-6 space-y-2.5 text-xs sm:text-sm font-medium text-frame-fg">
              {separateProjectItems.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2.5 text-frame-muted-fg">
                  <span className="text-frame-border font-bold">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 border-2 border-frame-border bg-frame-bg p-6 md:p-8">
          <p className="text-sm sm:text-base font-medium leading-relaxed text-frame-muted-fg">
            The exact boundary depends on your maintenance plan and the work required. We define that scope before beginning additional work so you know what is covered and what is not.
          </p>
        </div>
      </div>
    </section>
  )
}