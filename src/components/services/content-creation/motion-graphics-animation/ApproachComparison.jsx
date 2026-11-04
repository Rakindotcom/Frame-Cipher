import { SectionIntro, PosterButton } from '../../../Kinetic'

const approaches = [
  {
    approach: '2D Motion Graphics',
    fits: 'Clear communication and flexible visual storytelling',
    uses: 'Explainers, typography, infographics, social content, UI walkthroughs',
    highlight: false
  },
  {
    approach: '2D Character Animation',
    fits: 'Narratives and emotional stories that benefit from illustrated human or mascot figures',
    uses: 'Customer journeys, educational courses, non-profit campaigns, brand storytelling',
    highlight: false
  },
  {
    approach: '3D Animation & Rendering',
    fits: 'Volumetric depth, complex physical mechanisms, photorealistic product detail',
    uses: 'Hardware demos, physical product visualization, architectural & technical concepts',
    highlight: true
  },
  {
    approach: 'Hybrid 2D + 3D Mixed Media',
    fits: 'Ambitious projects combining realistic 3D product assets with dynamic 2D graphic typography',
    uses: 'Flagship product launch campaigns, advanced SaaS explainers, branded commercials',
    highlight: false
  }
]

export default function ApproachComparison() {
  return (
    <section className="border-b border-white/[0.08] bg-[#121214] px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          eyebrow="Stylistic Alignment"
          title="2D vs. 3D Animation: Which Approach Fits Your Project?"
        >
          The choice between 2D and 3D should come from the core communication problem, not simply visual novelty. Here is how we evaluate stylistic fit.
        </SectionIntro>

        <div className="mt-12 overflow-x-auto border border-white/[0.08] bg-[#09090B]">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="border-b border-white/[0.08] bg-[#121214]">
              <tr>
                <th className="p-4 md:p-6 font-black uppercase tracking-wider text-[#FAFAFA]">
                  Animation Approach
                </th>
                <th className="p-4 md:p-6 font-black uppercase tracking-wider text-[#FAFAFA]">
                  Usually Fits
                </th>
                <th className="p-4 md:p-6 font-black uppercase tracking-wider text-[#FAFAFA]">
                  Typical Use Cases
                </th>
              </tr>
            </thead>
            <tbody className="divide-y-2 divide-frame-border">
              {approaches.map((row, idx) => (
                <tr
                  key={idx}
                  className={`transition-colors hover:bg-[#121214] ${
                    row.highlight ? 'bg-[#A855F7]/[0.05]' : ''
                  }`}
                >
                  <td className="p-4 md:p-6 font-heading text-sm md:text-base font-bold uppercase tracking-tight text-[#FAFAFA] whitespace-nowrap">
                    {row.approach}
                  </td>
                  <td className="p-4 md:p-6 font-medium text-[#FAFAFA]">
                    {row.fits}
                  </td>
                  <td className="p-4 md:p-6 font-medium text-[#A1A1AA]">
                    {row.uses}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-2 border-[#A855F7]/30 bg-[#09090B] p-6 sm:flex-row text-center sm:text-left">
          <div>
            <span className="text-xs font-black uppercase tracking-[0.2em] text-[#A855F7]">
              Unsure Which Fits Best?
            </span>
            <p className="mt-1 text-xs sm:text-sm font-medium text-[#FAFAFA]">
              We review your script or message and recommend whether clean 2D vectors, character illustration, or 3D rendering will communicate it best.
            </p>
          </div>
          <PosterButton href="/contact" className="shrink-0 text-xs sm:text-sm">
            Discuss Your Animation Approach &rarr;
          </PosterButton>
        </div>
      </div>
    </section>
  )
}
