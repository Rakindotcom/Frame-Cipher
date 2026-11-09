import { SectionIntro } from '../../Kinetic'
import { MapPin, Compass, Globe } from 'lucide-react'

const areas = [
  {
    region: 'Dhaka City Prime Hubs',
    icon: MapPin,
    scope: 'Gulshan, Banani, Uttara, Dhanmondi, Mohakhali, Mirpur, Motijheel, Bashundhara',
    description:
      'We understand the specific buying psychology, linguistic nuances, and consumer behavior of Dhaka shoppers, including cash-on-delivery preferences, WhatsApp inquiry urgency, and high-frequency Facebook browsing.',
  },
  {
    region: 'Nationwide Bangladesh Expansion',
    icon: Compass,
    scope: 'Chittagong, Sylhet, Rajshahi, Khulna, Gazipur, Narayanganj & Greater Divisions',
    description:
      'Scaling consumer brands beyond the capital with localized regional targeting, courier tracking integrations, Bengali vernacular ad copy, and mobile-optimized checkout funnels.',
  },
  {
    region: 'NRB Diaspora & Cross-Border Export',
    icon: Globe,
    scope: 'United Arab Emirates (Dubai), United Kingdom (London), USA, Canada, Australia',
    description:
      'Helping Bangladeshi manufacturers, real estate developers, and IT service exporters capture lucrative remittance capital and international clients with global payment gateways and compliant ad targeting.',
  },
]

export default function ServiceAreas() {
  return (
    <section className="px-4 py-20 md:px-8 md:py-28 bg-[#09090B] text-white border-b border-white/[0.08]">
      <div className="mx-auto max-w-7xl">
        <SectionIntro title="Built for Bangladesh Realities & Global Ambition.">
          Headquartered in Dhaka (Ecb Chattar, Matikata), Frame Cipher combines deep on-the-ground local
          market intelligence with global digital advertising standards.
        </SectionIntro>

        <div className="grid border-t border-b border-white/[0.08] divide-y md:divide-y-0 md:divide-x divide-white/[0.08] md:grid-cols-3 bg-[#09090B]">
          {areas.map((a, idx) => {
            const Icon = a.icon
            return (
              <article
                key={a.region}
                className="group bg-[#121214] p-7 md:p-8 transition-colors duration-200 hover:bg-[#18181B]"
              >
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                  <Icon className="h-7 w-7 text-purple-600 transition-transform duration-300 group-hover:scale-110" />
                  <span className="font-mono text-xs text-zinc-500 tabular-nums font-semibold">
                    0{idx + 1}
                  </span>
                </div>
                <h3 className="mt-5 font-heading text-xl font-semibold text-white transition-colors">
                  {a.region}
                </h3>
                <p className="mt-2 font-mono text-xs text-purple-400 font-medium">
                  {a.scope}
                </p>
                <p className="mt-4 text-sm font-normal leading-relaxed text-zinc-300">
                  {a.description}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
