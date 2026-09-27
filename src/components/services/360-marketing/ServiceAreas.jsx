import { SectionIntro } from '../../Kinetic'

const areas = [
  {
    region: 'Dhaka City Prime Hubs',
    scope: 'Gulshan, Banani, Uttara, Dhanmondi, Mohakhali, Mirpur, Motijheel, Bashundhara',
    description:
      'We understand the specific buying psychology, linguistic nuances, and consumer behavior of Dhaka shoppers—including cash-on-delivery preferences, WhatsApp inquiry urgency, and high-frequency Facebook browsing.',
  },
  {
    region: 'Nationwide Bangladesh Expansion',
    scope: 'Chittagong, Sylhet, Rajshahi, Khulna, Gazipur, Narayanganj & Greater Divisions',
    description:
      'Scaling consumer brands beyond the capital with localized regional targeting, courier tracking integrations, Bengali vernacular ad copy, and mobile-optimized checkout funnels.',
  },
  {
    region: 'NRB Diaspora & Cross-Border Export',
    scope: 'United Arab Emirates (Dubai), United Kingdom (London), USA, Canada, Australia',
    description:
      'Helping Bangladeshi manufacturers, real estate developers, and IT service exporters capture lucrative remittance capital and international clients with global payment gateways and compliant ad targeting.',
  },
]

export default function ServiceAreas() {
  return (
    <section className="px-4 py-24 md:px-8 md:py-32 bg-frame-bg text-frame-fg border-b-2 border-frame-border">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Market Footprint"
          title="Built for Bangladesh Realities &amp; Global Ambition."
        >
          Headquartered in Dhaka (Ecb Chattar, Matikata), Frame Cipher combines deep on-the-ground local
          market intelligence with global digital advertising standards.
        </SectionIntro>

        <div className="grid bg-frame-border gap-px md:grid-cols-3">
          {areas.map((a) => (
            <article
              key={a.region}
              className="bg-frame-bg p-7 md:p-8 transition-colors duration-300 hover:bg-neutral-900/60"
            >
              <h3 className="font-heading text-xl font-bold uppercase text-frame-accent">
                {a.region}
              </h3>
              <p className="mt-2 text-xs font-bold uppercase tracking-wider text-frame-fg/80">
                {a.scope}
              </p>
              <p className="mt-4 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                {a.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
