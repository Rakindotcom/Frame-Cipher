import { SectionIntro } from '../../Kinetic'

const storeLaunchPillars = [
  {
    title: "Release Preparation",
    desc: "Preparing the production build, configuration, release information, and required assets."
  },
  {
    title: "Store Listing Support",
    desc: "Supporting required app information, screenshots, descriptions, categories, and other submission materials where included."
  },
  {
    title: "Google Play Submission",
    desc: "Preparing and submitting the Android application through the Google Play release process."
  },
  {
    title: "Apple App Store Submission",
    desc: "Preparing and submitting the iOS application through Apple's publishing workflow."
  },
  {
    title: "Review Feedback",
    desc: "If Apple or Google requests changes, we can help identify the required technical or product updates for resubmission."
  }
]

export default function StoreLaunch() {
  return (
    <div className="mt-28">
      <SectionIntro
        eyebrow="Store Publishing"
        title="App Store & Google Play Launch"
      >
        Development does not end when the application builds successfully. We can support the preparation and submission process for the relevant app stores.
      </SectionIntro>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {storeLaunchPillars.map((pillar, i) => (
          <div
            key={i}
            className="border-2 border-frame-border bg-frame-bg p-6 transition-colors hover:border-frame-accent"
          >
            <span className="text-xs font-black uppercase tracking-[0.2em] text-frame-accent">
              Launch Step 0{i + 1}
            </span>
            <h3 className="mt-2 font-heading text-lg font-bold uppercase text-frame-fg">
              {pillar.title}
            </h3>
            <p className="mt-3 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
              {pillar.desc}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 border-2 border-frame-border bg-frame-muted/10">
        <p className="text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
          Final approval remains under the control of Apple and Google.
        </p>
      </div>
    </div>
  )
}