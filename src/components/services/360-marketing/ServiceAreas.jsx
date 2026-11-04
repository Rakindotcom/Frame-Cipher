import { SectionIntro } from '../../Kinetic'

const areas = [
  {
    region: 'Dhaka City Prime Hubs',
    scope: 'Gulshan, Banani, Uttara, Dhanmondi, Mohakhali, Mirpur, Motijheel, Bashundhara',
    description:
      'We understand the specific buying psychology, linguistic nuances, and consumer behavior of Dhaka shoppers, including cash-on-delivery preferences, WhatsApp inquiry urgency, and high-frequency Facebook browsing.',
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
    <section className="px-4 py-24 md:px-8 md:py-32 bg-[#09090B] text-[#FAFAFA] border-b border-white/[0.08]">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          title={
            <>
              Built for Bangladesh Realities &amp;{' '}
              <span className="italic text-frame-accent">Global Ambition.</span>
            </>
          }
        >
          Headquartered in Dhaka (Ecb Chattar, Matikata), Frame Cipher combines deep on-the-ground local
          market intelligence with global digital advertising standards.
        </SectionIntro>

        <div className="grid border-t border-b border-white/[0.08] divide-y md:divide-y-0 md:divide-x divide-white/[0.08] md:grid-cols-3 bg-[#09090B]">
          {areas.map((a, idx) => (
            <article
              key={a.region}
              className="group bg-[#09090B] p-7 md:p-8 transition-colors duration-200 hover:bg-[#121214]"
            >
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-3.5">
                <span className="font-mono text-xs text-frame-accent tabular-nums">
                  0{idx + 1}
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-frame-accent" />
              </div>
              <h3 className="mt-5 font-heading text-xl font-medium text-white group-hover:text-frame-accent transition-colors">
                {a.region}
              </h3>
              <p className="mt-2 font-mono text-xs text-purple-300">
                {a.scope}
              </p>
              <p className="mt-4 text-xs sm:text-sm font-normal leading-relaxed text-zinc-400">
                {a.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
