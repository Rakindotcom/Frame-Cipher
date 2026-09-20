import Link from 'next/link'
import { SectionIntro } from '../../Kinetic'

const coreOfferings = [
  {
    title: "Android App Development",
    slug: "/services/app-development/android",
    desc: "Native Android applications built for performance, device compatibility, and the Google Play ecosystem. We develop around the features, devices, and user requirements that matter to your product."
  },
  {
    title: "iOS App Development",
    slug: "/services/app-development/ios",
    desc: "Native iOS applications built with platform-specific requirements in mind, including Apple interface conventions, device behavior, and App Store release requirements."
  },
  {
    title: "Cross-Platform App Development",
    slug: "/services/app-development/cross-platform",
    desc: "Applications built with technologies such as Flutter or React Native when a shared codebase makes sense for the project. This can be useful for businesses that need to reach Android and iOS users without maintaining two completely separate application codebases."
  },
  {
    title: "SaaS App Development",
    slug: "/services/app-development/saas-apps",
    desc: "Web-based software products with features such as user accounts, subscriptions, dashboards, permissions, billing, and recurring workflows. We build the product around the business model and user roles rather than treating SaaS as a standard website."
  },
  {
    title: "Enterprise App Development",
    slug: "/services/app-development/enterprise-apps",
    desc: "Custom internal and B2B applications designed around business workflows, data, permissions, reporting, integrations, and operational requirements."
  },
  {
    title: "API Development & Integration",
    slug: "/services/app-development/api-development",
    desc: "Custom APIs and third-party integrations that connect the application with payment providers, CRMs, analytics tools, maps, business software, and other required systems."
  },
  {
    title: "MVP Development",
    slug: "/services/app-development/mvp-development",
    desc: "Focused first versions that include the core functionality needed to test a product idea with real users before committing to a larger feature set."
  },
  {
    title: "App Maintenance & Support",
    slug: "/services/app-development/maintenance",
    desc: "Ongoing application maintenance, OS compatibility updates, bug fixes, performance monitoring, security patching, and store compliance."
  }
]

export default function Services() {
  return (
    <div>
      <SectionIntro
        eyebrow="End-To-End Delivery"
        title="What We Offer"
      >
        Framecipher provides end-to-end app development for startups, businesses, and growing digital products. We handle strategy, UI/UX, architecture, development, integrations, testing, launch, and post-launch support through one in-house team.
      </SectionIntro>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {coreOfferings.map((item, i) => (
          <div
            key={i}
            className="flex flex-col justify-between border-2 border-frame-border bg-frame-bg p-6 md:p-8 hover:border-frame-accent transition-colors group"
          >
            <div>
              <span className="text-xs font-black uppercase tracking-[0.24em] text-frame-accent">
                Offering 0{i + 1}
              </span>
              <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-frame-fg group-hover:text-frame-accent transition-colors">
                {item.title}
              </h3>
              <p className="mt-4 text-sm font-medium leading-relaxed text-frame-muted-fg">
                {item.desc}
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-frame-border/60">
              <Link
                href={item.slug}
                className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-frame-accent hover:underline"
              >
                Explore Service &rarr;
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}