import { SectionIntro, PosterButton } from '../../../Kinetic'

function CheckIcon({ className = "h-4 w-4 shrink-0 text-frame-accent mt-0.5" }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className={className}>
      <path d="m4.5 10 3.5 3.5 7.5-7.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const safeZoneRules = [
  {
    num: "01",
    title: "Safe Zones Protect Important Content",
    subtitle: "UI Overlay Immunity",
    desc: "Vertical content can include interface elements around the frame, such as profile icons, audio badges, comment drawers, and bottom bars. Important text, logos, product information, and CTAs are strictly kept clear of areas where native UI controls appear."
  },
  {
    num: "02",
    title: "Crops Can Change What People Notice First",
    subtitle: "Edge-Independent Composition",
    desc: "A profile feed preview or algorithmic placement rarely displays the entire vertical composition. Critical headlines and focal subjects never depend on being visible only at the extreme perimeter of a frame."
  },
  {
    num: "03",
    title: "Mobile Viewing Changes Scale",
    subtitle: "Thumb-Stopping Typography",
    desc: "Most social content is consumed rapidly on compact mobile displays while scrolling. Font sizes, line spacing, color contrast, and graphic density are calibrated specifically to remain effortlessly readable in motion."
  },
  {
    num: "04",
    title: "Different Formats Need Different Composition",
    subtitle: "Structural Recomposition",
    desc: "A 1:1 square feed design and a 9:16 vertical Story are not simply the same canvas with different borders. When the canvas shape shifts, we re-architect the visual hierarchy and spacing so the message remains balanced."
  }
]

const carouselPrinciples = [
  {
    step: "Slide 01",
    title: "The First Slide Has to Earn the Swipe",
    subtitle: "The Visual Hook",
    desc: "The opening frame carries the entire burden of stopping the scroll. It needs high visual hierarchy, an intriguing tension or promise, and an unmistakable prompt signaling that more value follows."
  },
  {
    step: "Slide 02–07",
    title: "The Middle Slides Need Progression",
    subtitle: "Information Velocity",
    desc: "Each subsequent slide must contribute fresh insight rather than filler. Micro-steps, frameworks, teardowns, or supporting visual evidence move the viewer forward without cognitive fatigue."
  },
  {
    step: "Continuity",
    title: "Visual Continuity Keeps the Sequence Connected",
    subtitle: "Seamless Flow",
    desc: "Consistent typography, grid baselines, subtle graphic threads crossing slide boundaries, and disciplined color palettes reassure the viewer that they are navigating one unified master narrative."
  },
  {
    step: "Final Slide",
    title: "The Final Slide Should Complete the Message",
    subtitle: "The Actionable Exit",
    desc: "The closing frame synthesizes the core lesson, delivers a definitive conclusion, and presents an unambiguous next step: save for later, share with a team, or click through to book a consultation."
  }
]

export default function SafeZonesAndCarousels() {
  return (
    <section className="border-b-2 border-frame-border bg-frame-muted/20 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        
        {/* PART 1: DESIGNING FOR CROPS, SAFE ZONES & MOBILE VIEWING */}
        <div>
          <SectionIntro
            eyebrow="Display Engineering"
            title="Designing for Crops, Safe Zones & Mobile Viewing"
            align="center"
          >
            A social graphic can look flawless on a desktop design monitor and still fail once posted. Platform interface behavior must dictate composition from day one.
          </SectionIntro>

          <div className="mt-12 grid gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-2 lg:grid-cols-4">
            {safeZoneRules.map((rule, rIdx) => (
              <div
                key={rIdx}
                className="bg-frame-bg p-6 md:p-7 flex flex-col justify-between hover:bg-frame-muted/10 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-frame-border/60 pb-3 mb-4">
                    <span className="font-heading text-2xl font-black text-frame-accent">
                      {rule.num}
                    </span>
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-frame-muted-fg border border-frame-border px-1.5 py-0.5">
                      {rule.subtitle}
                    </span>
                  </div>

                  <h3 className="font-heading text-base md:text-lg font-bold uppercase tracking-tight text-frame-fg leading-snug">
                    {rule.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm font-medium leading-relaxed text-frame-muted-fg">
                    {rule.desc}
                  </p>
                </div>

                <div className="mt-6 border-t border-frame-border/60 pt-3 flex items-center gap-1.5 text-xs font-mono font-bold text-frame-accent">
                  <CheckIcon className="h-3.5 w-3.5" />
                  <span>Platform Verified Rule</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PART 2: CAROUSELS ARE SEQUENCES, NOT STACKS OF SLIDES */}
        <div className="mt-24">
          <SectionIntro
            eyebrow="Sequence Architecture"
            title="Carousels Are Sequences, Not Stacks of Slides"
            align="center"
          >
            A carousel has a fundamentally different design problem from a single post. The viewer must actively decide to swipe at every transition point.
          </SectionIntro>

          <div className="mt-12 grid gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-2 lg:grid-cols-4">
            {carouselPrinciples.map((item, cIdx) => (
              <div
                key={cIdx}
                className="bg-frame-bg p-6 md:p-7 flex flex-col justify-between hover:bg-frame-muted/10 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-frame-border/60 pb-3 mb-4">
                    <span className="font-mono text-xs font-black uppercase tracking-wider text-frame-accent">
                      {item.step}
                    </span>
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-frame-muted-fg border border-frame-border px-1.5 py-0.5">
                      {item.subtitle}
                    </span>
                  </div>

                  <h3 className="font-heading text-base md:text-lg font-bold uppercase tracking-tight text-frame-fg leading-snug">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm font-medium leading-relaxed text-frame-muted-fg">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 border-t border-frame-border/60 pt-3 flex items-center gap-1.5 text-xs font-mono font-bold text-frame-accent">
                  <CheckIcon className="h-3.5 w-3.5" />
                  <span>Engineered Sequence</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 border-2 border-frame-border bg-frame-bg p-6 md:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="font-heading text-lg font-bold uppercase tracking-tight text-frame-fg">
                Have Complex Insights That Need Carousel Sequencing?
              </h4>
              <p className="text-xs sm:text-sm font-medium text-frame-muted-fg">
                We transform company research, case studies, and tutorials into high-retention multi-slide narratives.
              </p>
            </div>
            <div className="shrink-0">
              <PosterButton href="/contact">
                Plan a Carousel Sequence &rarr;
              </PosterButton>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
