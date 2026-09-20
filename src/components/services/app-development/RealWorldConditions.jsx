import { SectionIntro } from '../../Kinetic'

const realWorldConditions = [
  {
    title: "Device Compatibility",
    desc: "Designing and testing around the devices and screen sizes relevant to the target audience."
  },
  {
    title: "Slow or Unstable Networks",
    desc: "Considering loading, retry, timeout, error, and synchronization behavior when connectivity is limited."
  },
  {
    title: "Offline Workflows",
    desc: "Supporting offline functionality or data synchronization when the business case requires continued operation."
  },
  {
    title: "API & Service Failures",
    desc: "Planning appropriate loading, timeout, fallback, and recovery states when connected services fail."
  },
  {
    title: "Performance",
    desc: "Considering API response times, asset size, memory use, loading behavior, and other factors that affect responsiveness."
  }
]

export default function RealWorldConditions() {
  return (
    <div className="mt-28">
      <SectionIntro
        eyebrow="Resilient Performance"
        title="Built for Real-World App Conditions"
      >
        An application can work in development and still fail under real-world conditions. We consider how your users will actually access and use the product.
      </SectionIntro>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {realWorldConditions.map((cond, i) => (
          <div
            key={i}
            className="border-2 border-frame-border bg-frame-bg p-6 transition-colors hover:border-frame-accent"
          >
            <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
              Condition 0{i + 1}
            </span>
            <h3 className="mt-2 font-heading text-lg font-bold uppercase text-frame-fg">
              {cond.title}
            </h3>
            <p className="mt-3 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
              {cond.desc}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 border-2 border-frame-border bg-frame-muted/10">
        <p className="text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
          The goal is to build for real usage conditions, not only controlled development environments.
        </p>
      </div>
    </div>
  )
}