import { SectionIntro } from '../../../Kinetic'

const emergencyTriggers = [
  'The website goes offline',
  'A critical update breaks the site',
  'A checkout stops working',
  'Forms stop submitting',
  'A key integration fails',
  'Malware or suspicious activity is detected',
  'Important website data needs to be restored',
  'A major technical error affects visitors or customers',
]

export default function EmergencySupport() {
  return (
    <section className="bg-frame-muted/20 px-4 py-16 sm:py-20 md:px-8 md:py-28 border-b-2 border-frame-border">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro eyebrow="Rapid Incident Response" title="Emergency Website Support & Recovery">
          Some website problems cannot wait for a scheduled maintenance cycle.
        </SectionIntro>

        <div className="mt-12 border-2 border-frame-border bg-frame-bg p-7 sm:p-8 md:p-10">
          <h3 className="font-heading text-xl sm:text-2xl font-bold uppercase tracking-tight text-frame-fg mb-6">
            Emergency support can apply when:
          </h3>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {emergencyTriggers.map((trigger, idx) => (
              <div key={idx} className="flex items-start gap-2.5 border border-frame-border bg-frame-muted/10 p-4">
                <span className="text-frame-accent font-bold">!</span>
                <span className="text-xs sm:text-sm font-medium text-frame-fg leading-snug">{trigger}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 border-t border-frame-border pt-6 space-y-3 text-sm sm:text-base font-medium text-frame-muted-fg">
            <p>
              Our response starts with identifying the immediate problem, protecting the available data, and restoring critical functionality where possible.
            </p>
            <p className="font-bold text-frame-fg">
              When a tested backup is available, it can provide an important recovery path. The exact emergency response and availability depend on your maintenance plan.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}