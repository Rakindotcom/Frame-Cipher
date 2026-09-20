import { SectionIntro } from '../../../Kinetic'

const wixGoodFitPoints = [
  'You need a professional website without managing a complex technical stack',
  'Your team wants to edit content easily',
  'You need a relatively fast website launch',
  'Your site needs business features such as forms, bookings, CMS, or ecommerce',
  'You want design flexibility without managing separate hosting infrastructure',
  'Your website does not require highly specialized backend architecture',
]

const anotherPlatformBetterPoints = [
  'The project depends on highly specialized backend functionality',
  'The ecommerce operation has unusually complex requirements',
  'The website needs a highly customized application architecture',
  'Your team needs platform capabilities that Wix does not support',
  'Long-term technical requirements make another ecosystem a better fit',
]

export default function PlatformFit() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Platform Fit & Evaluation" title="Is Wix the Right Platform for Your Business?" />

        <div className="mt-10 grid gap-6 md:grid-cols-3 border-2 border-frame-border bg-frame-muted/10 p-7 sm:p-8 md:p-10">
          <p className="text-sm sm:text-base font-medium leading-relaxed text-frame-muted-fg">
            Wix can be an excellent fit for many businesses, but choosing a website platform should start with requirements rather than trends.
          </p>
          <p className="md:col-span-2 text-sm sm:text-base font-medium leading-relaxed text-frame-muted-fg">
            We recommend Wix when its editing experience, built-in features, development options, and long-term flexibility match what your business actually needs.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* GOOD FIT */}
          <div className="border-2 border-frame-border bg-frame-bg p-7 md:p-10 flex flex-col justify-between">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.28em] text-emerald-500">
                Recommended For
              </span>
              <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                Wix Can Be a Good Fit When:
              </h3>
              <ul className="mt-6 space-y-3 text-sm sm:text-base font-medium text-frame-fg/90">
                {wixGoodFitPoints.map((pt, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-emerald-500 font-bold">✓</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ANOTHER PLATFORM */}
          <div className="border-2 border-frame-border bg-frame-bg p-7 md:p-10 flex flex-col justify-between">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.28em] text-amber-500">
                Alternative Architecture
              </span>
              <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
                Another Platform May Be Better When:
              </h3>
              <ul className="mt-6 space-y-3 text-sm sm:text-base font-medium text-frame-fg/90">
                {anotherPlatformBetterPoints.map((pt, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-amber-500 font-bold">&rarr;</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* OUR APPROACH */}
        <div className="mt-10 border-2 border-frame-border bg-frame-bg p-7 md:p-10">
          <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
            Our Advisory Standard
          </span>
          <h3 className="mt-2 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg">
            Our Approach
          </h3>
          <p className="mt-4 text-base md:text-lg font-medium leading-relaxed text-frame-muted-fg">
            We do not recommend Wix simply because Wix is what you asked for. We first review the business model, content structure, integrations, functionality, SEO requirements, ecommerce needs, and future plans. Then we recommend the platform that makes the most practical sense for the project.
          </p>
        </div>
      </div>
    </section>
  )
}