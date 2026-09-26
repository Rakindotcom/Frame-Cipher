import { SectionIntro, PosterButton } from '../../../Kinetic'

const disconnectedProblems = [
  {
    step: '01',
    problem: 'Script Written in Isolation',
    solution: 'Our Creative Direction Informs the Shoot',
    desc: 'Scripts that look good on paper often turn out impractical or stiff on set. Our writers and directors plan with physical filming constraints and real cadence in mind.'
  },
  {
    step: '02',
    problem: 'Footage Shot Without Edit Context',
    solution: 'Our Shoot Is Planned Around the Edit',
    desc: 'Shooting without thinking about transitions, coverage, and pacing leaves an editor fixing gaps. We shoot with specific cut sequences, audio cues, and aspect ratios planned.'
  },
  {
    step: '03',
    problem: 'Edit Assembled Blindly',
    solution: 'The Edit Follows the Original Objective',
    desc: 'An editor disconnected from the client brief merely stitches clips together. Our in-house editors shape the story to drive the exact viewer emotion and commercial action needed.'
  },
  {
    step: '04',
    problem: 'One Generic Master Export',
    solution: 'Exports Tailored to Intended Platforms',
    desc: 'Delivering only a 16:9 file leaves social and mobile channels compromised. We engineer vertical crops, subtitles, and ad variations into the initial project plan.'
  }
]

const preProductionPillars = [
  {
    title: 'Locations & Talent',
    bullets: [
      'Office, studio, commercial, retail, or outdoor location planning',
      'Filming permits, background coordination & site access',
      'Professional presenters, actors, voice actors & executives',
      'Direct interview coaching for camera-shy team members'
    ]
  },
  {
    title: 'Shot Lists & Storyboards',
    bullets: [
      'Comprehensive shot lists mapping essential vs. b-roll coverage',
      'Visual storyboards and framing references for key scenes',
      'Product macro angles, action sequences & establishing shots',
      'Multi-camera coverage planning for live events and interviews'
    ]
  },
  {
    title: 'Audio & Controlled Lighting',
    bullets: [
      'Directional boom and wireless lavalier microphone deployment',
      'Site acoustic assessment to eliminate environmental noise',
      'Studio key, fill, and rim lighting matched to brand aesthetic',
      'Natural light diffusion and color temperature calibration'
    ]
  },
  {
    title: 'Brand & Aesthetic Standards',
    bullets: [
      'Visual identity guidelines, color palettes & wardrobe styling',
      'Brand typography, on-screen lower thirds & logo treatment',
      'Consistent product positioning, framing & prop selection',
      'Tone of voice, cadence & clear call-to-action integration'
    ]
  }
]

export default function ConnectedWorkflow() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        {/* PART 1: CONNECTED PIPELINE */}
        <SectionIntro
          eyebrow="Unified Methodology"
          title="One Production Plan From Brief to Final Export"
          index="03"
        >
          A common production failure happens when every stage is treated as a separate freelance gig. Framecipher keeps the production connected under one in-house team.
        </SectionIntro>

        <div className="grid border-2 border-frame-border bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-4">
          {disconnectedProblems.map((item) => (
            <div key={item.step} className="bg-frame-bg p-7 flex flex-col justify-between">
              <div>
                <span className="font-heading text-2xl font-black text-frame-accent">
                  {item.step}
                </span>
                <span className="block mt-2 text-[11px] font-bold uppercase tracking-wider text-frame-muted-fg line-through">
                  {item.problem}
                </span>
                <h4 className="mt-1 font-heading text-lg font-bold uppercase tracking-tight text-frame-fg">
                  {item.solution}
                </h4>
                <p className="mt-3 text-xs md:text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* PART 2: PRE-PRODUCTION PILLARS */}
        <div className="mt-20">
          <div className="mb-10 max-w-3xl">
            <span className="text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent">
              Shoot Readiness
            </span>
            <h3 className="mt-2 font-heading text-2xl md:text-4xl font-bold uppercase tracking-tight text-frame-fg">
              Pre-Production Planning for a Smoother Shoot
            </h3>
            <p className="mt-3 text-sm md:text-base font-medium text-frame-muted-fg leading-relaxed">
              What happens before filming has a direct impact on what happens during editing. We eliminate surprises on set through thorough pre-production planning.
            </p>
          </div>

          <div className="grid border-2 border-frame-border bg-frame-border gap-px sm:grid-cols-2 lg:grid-cols-4">
            {preProductionPillars.map((pillar, pIdx) => (
              <div key={pIdx} className="bg-frame-bg p-6 md:p-8 flex flex-col justify-between">
                <div>
                  <span className="flex h-8 w-8 items-center justify-center border-2 border-frame-accent bg-frame-accent/10 font-heading text-xs font-bold text-frame-accent">
                    0{pIdx + 1}
                  </span>
                  <h4 className="mt-4 font-heading text-lg font-bold uppercase tracking-tight text-frame-fg">
                    {pillar.title}
                  </h4>
                  <ul className="mt-4 space-y-2 border-t border-frame-border/60 pt-4 text-xs font-medium text-frame-fg/90">
                    {pillar.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2">
                        <span className="text-frame-accent font-bold">✓</span>
                        <span className="leading-snug">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
