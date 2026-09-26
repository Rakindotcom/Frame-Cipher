import { SectionIntro } from '../../../Kinetic'

const platforms = [
  {
    title: 'Facebook',
    body: 'Facebook community management can include page comment moderation, inbox and message response, review handling, and escalation of customer issues that need a direct response from your business.',
  },
  {
    title: 'Instagram',
    body: 'Instagram community management often includes comment and DM response, story engagement where included, feed comment moderation, and escalation of customer questions or complaints.',
  },
  {
    title: 'LinkedIn',
    body: 'LinkedIn community management can include comment and message response, discussion participation where agreed, and professional handling of B2B inquiries, partnership questions, and reputation-sensitive topics.',
  },
  {
    title: 'TikTok',
    body: 'TikTok community management can include comment response, message response, moderation of spam and abuse, and escalation of recurring questions or sensitive issues that appear in comment sections.',
  },
  {
    title: 'YouTube',
    body: 'YouTube community management can include comment monitoring and response, message handling, moderation, and escalation of issues raised publicly by viewers and subscribers.',
  },
  {
    title: 'Google Business Profile Reviews',
    body: 'Google review response can help businesses maintain a professional public presence on one of the most important review platforms for local customers, while still following platform rules about what can be changed.',
  },
]

export default function Platforms() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Platform coverage"
          title="Community Management Across Your Social Platforms"
        >
          Each platform creates a different type of audience interaction, so the response approach should adapt
          to the channel instead of treating every comment section as the same inbox.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border md:grid-cols-2 lg:grid-cols-3">
          {platforms.map((platform) => (
            <article key={platform.title} className="bg-frame-bg p-7 md:p-8">
              <h3 className="font-heading text-base font-bold uppercase leading-tight tracking-tight text-frame-fg md:text-lg">
                {platform.title}
              </h3>
              <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
                {platform.body}
              </p>
            </article>
          ))}
        </div>

        <p className="mt-8 border-l-2 border-frame-accent bg-frame-bg p-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
          Platform coverage can be combined or handled separately depending on your business, the volume of
          interaction on each platform, and the level of response required.
        </p>
      </div>
    </section>
  )
}
