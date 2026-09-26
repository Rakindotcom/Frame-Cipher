import { SectionIntro, PosterButton } from '../../../Kinetic'

export default function CTA() {
  return (
    <section className="border-y-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <SectionIntro
          eyebrow="Next step"
          title="Ready to Build a Landing Page Around Your Campaign Goal?"
          align="center"
        >
          Tell us what the offer is, who it is for, where the traffic will come from, and what action the page
          needs to drive.
        </SectionIntro>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
          <PosterButton href="/contact">Get a Free Consultation &rarr;</PosterButton>
          <PosterButton href="/contact" variant="outline">
            Request a Landing Page Sample &rarr;
          </PosterButton>
          <PosterButton href="/contact" variant="outline">
            Request a Custom Quote &rarr;
          </PosterButton>
        </div>
      </div>
    </section>
  )
}
