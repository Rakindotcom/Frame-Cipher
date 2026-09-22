import { comparisonRows } from '../../data/agency'
import { SectionIntro } from '../Kinetic'

const reasons = [
  {
    number: '01',
    title: 'Strategy + execution',
    description: 'Most agencies sell execution. We run strategy first, so every deliverable has a reason.',
  },
  {
    number: '02',
    title: 'Marketing + technology',
    description: 'Brands need marketing and software to grow. We do both under one roof.',
  },
  {
    number: '03',
    title: 'Creative + performance',
    description: 'Content that looks good and performs. Design work is verified against reports, not opinions.',
  },
  {
    number: '04',
    title: 'Flexible engagement',
    description: 'One-off project or full 360 partner—the model changes around the business stage.',
  },
  {
    number: '05',
    title: 'Built around your business',
    description: 'No force-fed packages. Everything is mapped to your goal, audience, and budget.',
  },
]

export default function ServicesWhy() {
  return (
    <section className="border-b-2 border-frame-border bg-frame-bg px-4 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Why FrameCipher / the difference" title="One team. Multiple capabilities." index="12">
          Instead of coordinating five vendors, you get one accountable partner across strategy,
          marketing, creative, media, and technology.
        </SectionIntro>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {reasons.map((reason) => (
            <article
              key={reason.number}
              className="group flex min-h-56 flex-col justify-between border-2 border-frame-border bg-frame-muted p-7 transition-colors duration-300 hover:border-frame-accent md:p-9"
            >
              <div className="flex items-start justify-between gap-5">
                <span className="font-heading text-4xl font-bold leading-none tracking-tighter text-frame-muted-fg transition-colors duration-300 group-hover:text-frame-accent md:text-5xl">
                  {reason.number}
                </span>
                <span className="h-2 w-10 bg-frame-accent" aria-hidden="true" />
              </div>
              <div className="mt-8">
                <h3 className="font-heading text-2xl font-bold uppercase leading-tight tracking-tighter text-frame-fg md:text-3xl">
                  {reason.title}
                </h3>
                <p className="mt-4 text-base font-medium leading-snug text-frame-muted-fg">
                  {reason.description}
                </p>
              </div>
            </article>
          ))}

          <div className="flex min-h-56 flex-col justify-center border-2 border-frame-accent bg-frame-accent p-7 text-center md:p-9">
            <p className="font-heading text-2xl font-bold uppercase leading-tight tracking-tighter text-frame-accent-fg">
              vs. hiring five separate agencies
            </p>
            <p className="mt-4 text-base font-medium leading-snug text-frame-accent-fg/85">
              One brief, one budget, one point of contact, one accountable outcome.
            </p>
          </div>
        </div>

        <div className="mt-16 overflow-x-auto border-2 border-frame-border bg-frame-bg">
          <table className="w-full min-w-[720px] border-collapse text-left">
            <thead>
              <tr className="border-b-2 border-frame-border">
                <th className="w-[34%] p-6 text-xs font-black uppercase tracking-[0.24em] text-frame-fg">
                  What you get
                </th>
                <th className="p-6 text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                  One agency
                </th>
                <th className="w-[30%] p-6 text-xs font-black uppercase tracking-[0.24em] text-frame-muted-fg">
                  Five vendors
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row.label} className="border-b border-frame-border last:border-b-0">
                  <td className="p-6 text-base font-bold text-frame-fg">{row.label}</td>
                  <td className="bg-frame-accent/[0.18] p-6 text-base font-bold text-frame-accent">
                    {row.frameCipher}
                  </td>
                  <td className="p-6 text-base font-medium text-frame-muted-fg">{row.vendors}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}