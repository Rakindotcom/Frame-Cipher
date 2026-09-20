const uiUxPoints = [
  {
    title: "User Flow Mapping",
    desc: "We structure navigation and important tasks before visual design begins."
  },
  {
    title: "Material Design",
    desc: "We use Android interface conventions and Material Design principles where they improve consistency and usability."
  },
  {
    title: "Adaptive Layouts",
    desc: "We design for the screen sizes, orientations, and device categories relevant to the application's target audience."
  },
  {
    title: "Interaction & State Design",
    desc: "We plan loading, empty, error, success, disabled, and other important interface states."
  },
  {
    title: "Prototype & Usability Testing",
    desc: "Where included, we validate important flows before development so usability issues can be identified earlier."
  }
]

export default function UiUxDesign() {
  return (
    <div className="mt-28 border-2 border-frame-border bg-frame-bg p-6 md:p-12">
      <div className="mb-8">
        <span className="text-xs font-black uppercase tracking-[0.28em] text-frame-accent">
          Platform Native UX
        </span>
        <h2 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
          UI/UX Design for Android
        </h2>
        <p className="mt-3 max-w-3xl text-sm md:text-base font-medium leading-relaxed text-frame-muted-fg">
          Android interfaces should feel natural to Android users while supporting the goals of the product.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {uiUxPoints.map((item, i) => (
          <div
            key={i}
            className="border-2 border-frame-border bg-frame-muted/10 p-6 transition-colors hover:border-frame-accent"
          >
            <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
              Design Element 0{i + 1}
            </span>
            <h3 className="mt-2 font-heading text-lg font-bold uppercase text-frame-fg">
              {item.title}
            </h3>
            <p className="mt-3 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6 border-t-2 border-frame-border/60 pt-4">
        <p className="text-sm font-semibold italic text-frame-fg">
          The goal is to create an interface that feels designed for Android rather than simply displayed on an Android device.
        </p>
      </div>
    </div>
  )
}