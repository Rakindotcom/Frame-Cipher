import { SectionIntro } from '../../../Kinetic'

const ownershipAccessItems = [
  'Wix website and editor access',
  'Domain access or connection details',
  'Relevant business and app accounts',
  'Analytics and tracking access',
  'Agreed project assets and content',
]

const editorHandoverItems = [
  'Editing page content',
  'Updating images and media',
  'Managing services or products',
  'Updating forms and contact information',
  'Managing blog or CMS content',
  'Making basic layout changes',
  'Reviewing website submissions and inquiries',
]

export default function Handover() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Assets & Independence" title="Website Ownership, Editor Handover & Training">
          Your Wix website should remain manageable after development is complete. We make sure you receive the agreed access, assets, and guidance needed to take control of the website.
        </SectionIntro>

        <div className="grid gap-8 md:grid-cols-2">
          {/* OWNERSHIP & ACCESS */}
          <div className="border-2 border-frame-border bg-frame-bg p-7 md:p-10 flex flex-col justify-between">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
                Deliverable 01
              </span>
              <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                Website Ownership &amp; Access
              </h3>
              <p className="mt-3 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
                At project handover, we provide the agreed access and credentials required to manage your website, subject to the ownership and account structure established for the project. This can include:
              </p>
              <ul className="mt-4 space-y-2 text-sm md:text-base font-medium text-frame-fg/90">
                {ownershipAccessItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-frame-accent font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* EDITOR HANDOVER */}
          <div className="border-2 border-frame-border bg-frame-bg p-7 md:p-10 flex flex-col justify-between">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
                Deliverable 02
              </span>
              <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                Wix Editor Handover
              </h3>
              <p className="mt-3 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
                We walk you through the parts of the Wix editor your team will need for routine website management. Depending on the project, this can include:
              </p>
              <ul className="mt-4 space-y-2 text-sm md:text-base font-medium text-frame-fg/90">
                {editorHandoverItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-frame-accent font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {/* BASIC TRAINING & GUIDANCE */}
          <div className="border-2 border-frame-border bg-frame-bg p-7 md:p-10">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              Deliverable 03
            </span>
            <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
              Basic Training &amp; Guidance
            </h3>
            <p className="mt-3 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              We provide basic guidance so you understand how to manage the website after launch. The training focuses on the actual features included in your project rather than overwhelming you with unnecessary technical details.
            </p>
          </div>

          {/* HANDOVER DOCUMENTATION */}
          <div className="border-2 border-frame-border bg-frame-bg p-7 md:p-10">
            <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
              Deliverable 04
            </span>
            <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
              Handover Documentation
            </h3>
            <p className="mt-3 text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
              Where included in the project scope, we provide basic instructions or documentation covering important website management tasks, access details, and agreed post-launch procedures.
            </p>
            <p className="mt-4 text-xs italic text-frame-muted-fg">
              The exact ownership, account access, source materials, licenses, and documentation provided depend on the project scope and agreement.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}