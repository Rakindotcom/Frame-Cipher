import { SectionIntro } from '../../../Kinetic'

function CheckIcon({ className = "h-4 w-4 shrink-0 text-frame-accent mt-0.5" }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className={className}>
      <path d="m4.5 10 3.5 3.5 7.5-7.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const principles = [
  {
    num: "01",
    title: "Show the Product Clearly",
    subtitle: "Visual Focus & Form",
    text: "The product should remain the visual focus. Lighting and composition should reveal its shape, finish, construction, and important features without unnecessary distractions, awkward reflections, or distorted silhouettes.",
    check: "Clean isolation & balanced specular highlights"
  },
  {
    num: "02",
    title: "Make Important Details Visible",
    subtitle: "Tactile Scrutiny",
    text: "Texture, stitching, materials, controls, packaging, finishes, and functional elements can matter during a buying decision. Detail and macro photography give those elements their own dedicated visual space.",
    check: "Macro focus-stacking for micro-details"
  },
  {
    num: "03",
    title: "Show the Product in Context",
    subtitle: "Real-World Relativity",
    text: "A clean studio image shows what the product is. A lifestyle image can show how it fits into a real environment or use case. Both serve different, vital purposes within the same product listing or campaign.",
    check: "Studio clarity paired with lifestyle utility"
  },
  {
    num: "04",
    title: "Keep the Catalog Consistent",
    subtitle: "Storewide Authority",
    text: "Products photographed with inconsistent lighting, framing, backgrounds, or color treatment can make an online store feel disorganized. We use planned shot lists and consistent production standards to keep related products visually connected.",
    check: "Calibrated camera elevations & lighting grids"
  },
  {
    num: "05",
    title: "Prepare Images for Their Actual Use",
    subtitle: "Channel-Specific Spec",
    text: "Photography should be planned around the final destination. Amazon, Daraz, Shopify stores, social media, advertising campaigns, catalogs, and websites can have different technical and creative requirements. The shoot should account for those requirements before production begins.",
    check: "Planned aspect ratios, safe zones & margins"
  },
  {
    num: "06",
    title: "The Conversion Outcome",
    subtitle: "Measurable Impact",
    text: "Good product photography combines clarity, consistency, accuracy, and visual direction. By resolving visual uncertainty before checkout, high-fidelity photography directly reduces returns and accelerates purchase confidence.",
    check: "Confidence before touch or in-person inspection"
  }
]

export default function Principles() {
  return (
    <section className="border-b-2 border-frame-border bg-frame-bg px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[95vw]">
        <SectionIntro
          eyebrow="Selling Philosophy"
          title="What Makes Product Photography Effective for Online Selling"
          align="center"
        >
          Good product photography combines clarity, consistency, accuracy, and visual direction to help buyers understand what they are actually considering before they can touch, hold, or inspect it in person.
        </SectionIntro>

        {/* PERFECTLY BALANCED 3x2 GRID (6 cards) */}
        <div className="mt-12 grid gap-px border-2 border-frame-border bg-frame-border sm:grid-cols-2 lg:grid-cols-3">
          {principles.map((item, index) => (
            <div
              key={index}
              className={`bg-frame-bg p-7 md:p-8 flex flex-col justify-between transition-colors hover:bg-frame-muted/10 ${
                index === 5 ? 'border-t-2 sm:border-t-0 border-frame-accent/40 bg-frame-accent/[0.03]' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between border-b border-frame-border/60 pb-3 mb-4">
                  <span className="font-heading text-3xl font-black text-frame-accent">
                    {item.num}
                  </span>
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-frame-muted-fg border border-frame-border px-2 py-0.5">
                    {item.subtitle}
                  </span>
                </div>

                <h3 className="font-heading text-xl font-bold uppercase tracking-tight text-frame-fg">
                  {item.title}
                </h3>

                <p className="mt-3 text-xs sm:text-sm font-medium leading-relaxed text-frame-muted-fg">
                  {item.text}
                </p>
              </div>

              <div className="mt-6 border-t border-frame-border/60 pt-4 flex items-start gap-2 text-xs font-mono font-bold text-frame-fg">
                <CheckIcon className="h-4 w-4 shrink-0 text-frame-accent" />
                <span className="leading-snug">{item.check}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
