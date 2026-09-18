import { PosterButton } from '../../../Kinetic'

export default function CTA() {
  return (
    <section className="border-t-2 border-frame-border bg-frame-muted/30 px-4 py-20 md:px-8 md:py-32">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-xs md:text-sm font-black uppercase tracking-[0.28em] text-frame-accent mb-4">
          Ready to Build?
        </p>
        <h2 className="font-heading text-[clamp(2.4rem,6vw,5rem)] font-bold uppercase leading-[0.88] tracking-tighter text-frame-fg">
          Start Your MVP Development Project
        </h2>
        <p className="mt-6 text-base md:text-xl font-medium leading-relaxed text-frame-muted-fg max-w-2xl mx-auto">
          If you have a product idea but are not ready to commit to a full-scale build, start with the question that matters most: what do you need to learn? We can review your idea, target users, core workflow, required platform, integrations, and validation goals to determine what the MVP should actually contain. Tell us what product you want to build, who the initial users are, what problem it solves, what you need to validate, which features are essential, whether you need web, mobile, or both, which integrations or payment systems are required, and your expected timeline. We will review the requirements and help define an appropriate MVP development approach.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <PosterButton href="/contact">Request a Free Consultation</PosterButton>
          <PosterButton href="/projects" variant="outline">
            See Our Work
          </PosterButton>
        </div>
      </div>
    </section>
  )
}
