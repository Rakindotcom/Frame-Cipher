import { SectionIntro } from '../../../Kinetic'

const standards = [
  {
    number: '01',
    title: 'Relevant to the Searcher',
    body: 'The content should answer the question or support the task behind the search.',
  },
  {
    number: '02',
    title: 'Useful Beyond the Search Result',
    body: 'Readers should gain something valuable after visiting the page, rather than finding another generic summary they could get anywhere.',
  },
  {
    number: '03',
    title: 'Original and Specific',
    body: 'Useful original information can include first-hand experience, expert input, unique examples, original data, client-approved insights, or a genuinely useful perspective.',
    note: "Google's current guidance for AI search also emphasizes unique, non-commodity content and information that adds value beyond what is already widely available.",
  },
  {
    number: '04',
    title: 'Easy to Read and Navigate',
    body: 'Clear headings, concise paragraphs, useful lists, examples, and logical sequencing make complex subjects easier to understand.',
  },
  {
    number: '05',
    title: 'Supported by Evidence Where Needed',
    body: 'Claims that depend on current statistics, research, regulations, industry data, or other external facts should be appropriately researched and supported.',
  },
  {
    number: '06',
    title: 'Connected to the Rest of the Website',
    body: 'A blog article should not exist as an isolated page.',
    note: 'Where relevant, it should connect readers to related content, services, products, categories, and other useful resources.',
  },
]

export default function WorthPublishing() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Editorial standard"
          title="What Makes an SEO Blog Post Worth Publishing?"
        >
          Useful content requires more than optimization. It has to be worth a reader&rsquo;s time and worth your
          domain&rsquo;s reputation.
        </SectionIntro>

        <div className="grid gap-px border-2 border-frame-border bg-frame-border md:grid-cols-2 lg:grid-cols-3">
          {standards.map((standard) => (
            <article key={standard.number} className="flex flex-col justify-between bg-frame-bg p-7 md:p-8 transition-colors duration-200 hover:bg-frame-muted/40">
              <div>
                <span className="font-heading text-4xl font-bold leading-none tracking-tighter text-frame-muted">
                  {standard.number}
                </span>
                <h3 className="mt-5 font-heading text-base font-bold uppercase leading-tight tracking-tight text-frame-fg md:text-lg">
                  {standard.title}
                </h3>
                <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg md:text-base">
                  {standard.body}
                </p>
              </div>

              {standard.note && (
                <p className="mt-5 border-l-2 border-frame-accent bg-frame-muted/10 p-3 text-xs font-medium leading-relaxed text-frame-muted-fg">
                  {standard.note}
                </p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
