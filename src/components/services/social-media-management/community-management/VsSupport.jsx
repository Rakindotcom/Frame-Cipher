import { SectionIntro } from '../../../Kinetic'

const columns = [
  {
    title: 'Community Management',
    body: 'Community management focuses on audience interaction after or alongside content is published. It includes comments, DMs, reviews, moderation, social listening, escalation, proactive engagement, and reporting on customer-facing conversations.',
  },
  {
    title: 'Customer Support',
    body: 'Customer support is usually more transactional. It helps customers resolve specific issues involving orders, accounts, billing, service problems, or product questions, often through a dedicated support channel rather than public social platforms.',
  },
  {
    title: 'Social Media Management',
    body: 'Social media management is the broader discipline. It can include strategy, content planning, content creation, publishing, community management, reporting, platform optimization, and paid promotion.',
  },
]

export default function VsSupport() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Service boundaries"
          title="Community Management vs. Customer Support vs. Social Media Management"
        >
          These services overlap, but they are not the same thing. Understanding the difference helps prevent
          scope confusion later.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border md:grid-cols-3">
          {columns.map((column) => (
            <article
              key={column.title}
              className={`flex flex-col p-7 md:p-8 ${
                column.title === 'Community Management' ? 'bg-frame-accent/10' : 'bg-frame-bg'
              }`}
            >
              <h3 className="font-heading text-base font-bold uppercase leading-tight tracking-tight text-frame-fg md:text-lg">
                {column.title}
              </h3>
              <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
                {column.body}
              </p>
            </article>
          ))}
        </div>

        <p className="mt-8 border-l-2 border-frame-accent bg-frame-muted/10 p-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
          In practice, a business may need more than one of these. Framecipher can manage community
          management on its own, or coordinate it alongside broader social media management, platform
          management, content strategy, and content production, depending on the selected scope.
        </p>
      </div>
    </section>
  )
}
