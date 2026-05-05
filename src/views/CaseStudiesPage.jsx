import Link from 'next/link'
import { caseStudyPlaceholders } from '../data/agency'

export default function CaseStudiesPage() {
  return (
    <main className="px-6 pb-24 pt-32">
      <section className="mx-auto max-w-7xl">
        <div className="max-w-4xl">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-cyan-300">Case Studies</p>
          <h1 className="font-heading text-5xl font-bold leading-tight text-white md:text-7xl">
            Case study structures ready for real client proof.
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-400 md:text-xl">
            This page is prepared for deeper proof across client, industry, problem, objective, services,
            strategy, execution, result, visual assets, and testimonial fields. No fake metrics or invented
            quotes are used.
          </p>
        </div>
      </section>

      <section className="mx-auto mt-14 grid max-w-7xl gap-6 lg:grid-cols-2">
        {caseStudyPlaceholders.map((study) => (
          <article key={study.client} className="border border-white/10 bg-white/[0.04] p-6 md:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">{study.industry}</p>
            <h2 className="mt-4 font-heading text-3xl font-bold text-white">{study.client}</h2>
            <dl className="mt-6 grid gap-5">
              <StudyField label="Problem" value={study.problem} />
              <StudyField label="Objective" value={study.objective} />
              <StudyField label="Services used" value={study.servicesUsed.join(', ')} />
              <StudyField label="Strategy" value={study.strategy} />
              <StudyField label="Execution" value={study.execution} />
              <StudyField label="Result" value={study.result} />
              <StudyField label="Visual assets" value="Prepared for project images, video embeds, campaign visuals, and website screenshots." />
              <StudyField label="Testimonial" value="Reserved for a real client quote when approved." />
            </dl>
          </article>
        ))}
      </section>

      <section className="mx-auto mt-24 max-w-5xl border border-cyan-300/20 bg-white/[0.04] p-8 text-center md:p-12">
        <h2 className="font-heading text-4xl font-bold text-white">Want your project built as a full growth system?</h2>
        <Link href="/contact" className="mt-8 inline-block bg-white px-6 py-4 text-sm font-bold text-[#08080d]">
          Book a Strategy Call
        </Link>
      </section>
    </main>
  )
}

function StudyField({ label, value }) {
  return (
    <div>
      <dt className="text-xs font-bold uppercase tracking-[0.18em] text-gray-500">{label}</dt>
      <dd className="mt-2 text-sm leading-7 text-gray-300">{value}</dd>
    </div>
  )
}
