# Frame Cipher — Full Website UI Update Master Sequence (Folder & Component Level)

> **Design Standard:** Linear.app + Raycast + Stripe Editorial + Authentic Dhaka Studio Craft  
> **Service Page Golden Benchmark:** Strictly follow [`09-SERVICE-PAGE-MASTER-BLUEPRINT-SPEC.md`](./09-SERVICE-PAGE-MASTER-BLUEPRINT-SPEC.md) modeled 100% on `/services/website-design-development` (`src/components/services/website-design-development/*`).  
> **Rule of Law:** Strict adherence to `MASTER-DESIGN-PROMPT.md` & `05-CONTENT-ZERO-LOSS-POLICY.md`:
> 1. **Headings (H1, H2, H3):** Natural Title/Sentence case (NO `uppercase`), solid pure white (`text-white font-medium tracking-tight`) + italic purple emphasis (`italic text-frame-accent`). BANNED: Clip gradients.
> 2. **Zero Tagline Clutter:** Remove all artificial slash/bracketed eyebrow tags above headings (e.g. `The offer / Architecture`, `[ 01 / PATHWAYS ]`).
> 3. **Pure Imagery:** 100% clean photographs & screenshots. NO fake browser URLs/dashboards, NO text overlays or badges on images, NO dark opacity scrims (`bg-black/40`).
> 4. **Standardized Pill Buttons:** Use `PosterButton`, `SectionButton`, or full-width card footer pill buttons (`rounded-full`, min-h >= 44px). Remove `Scope:...` text clutter from card footers.
> 5. **Text-Heavy Rhythm Alternation:** Alternate between the 5 Visual Rhythm Modalities (`03-LAYOUT-AND-GRIDS.md`) so no more than two 3-column text card grids stack back-to-back. Constrain intro copy to `max-w-3xl`.
> **Workflow:** Execute updates step-by-step, URL by URL, folder by folder, component by component. Mark each checkbox `[x]` upon visual and functional verification.

---

## Master Architecture & Phase Navigation

- [**Phase 00: Global Shell, Navigation & Shared Foundations**](#phase-00-global-shell-navigation--shared-foundations)
- [**Phase 01: Homepage (`/`)**](#phase-01-homepage-)
- [**Phase 02: About Page (`/about`)**](#phase-02-about-page-about)
- [**Phase 03: Contact & Headquarters (`/contact`)**](#phase-03-contact--headquarters-contact)
- [**Phase 04: Services Full Engine (`/services` & Sub-services)**](#phase-04-services-full-engine)
  - [04.A: Services Directory Overview (`/services`)](#04a-services-directory-overview-services)
  - [04.B: Dynamic Generic Service Detail Engine (`/services/[...slug]`)](#04b-dynamic-generic-service-detail-engine-services-slug)
  - [04.C: Flagship 360 Marketing (`/services/360-marketing`)](#04c-flagship-360-marketing-services360-marketing)
  - [04.D: Pillar 1 — Website Design & Development (Hub + 12 Sub-services)](#04d-pillar-1--website-design--development)
  - [04.E: Pillar 2 — App Development (Hub + 8 Sub-services)](#04e-pillar-2--app-development)
  - [04.F: Pillar 3 — SEO (Hub + 12 Sub-services)](#04f-pillar-3--seo)
  - [04.G: Pillar 4 — Paid Advertising (Hub + 10 Sub-services)](#04g-pillar-4--paid-advertising)
  - [04.H: Pillar 5 — Social Media Management (Hub + 8 Sub-services)](#04h-pillar-5--social-media-management)
  - [04.I: Pillar 6 — Content Writing (Hub + 8 Sub-services)](#04i-pillar-6--content-writing)
  - [04.J: Pillar 7 — Content Creation (Hub + 9 Sub-services)](#04j-pillar-7--content-creation)
- [**Phase 05: Portfolio & Projects (`/projects`)**](#phase-05-portfolio--projects-projects)
- [**Phase 06: Case Studies (`/case-studies` & `[slug]`)**](#phase-06-case-studies-case-studies--slug)
- [**Phase 07: Dhaka Cinema Studio (`/studio` & Sub-routes)**](#phase-07-dhaka-cinema-studio-studio--sub-routes)
  - [07.A: Main Studio Hub (`/studio`)](#07a-main-studio-hub-studio)
  - [07.B: Studio Shared Subcomponents & Shell](#07b-studio-shared-subcomponents--shell)
  - [07.C: Cluster A — Business Video (6 Sub-services)](#07c-cluster-a--business-video)
  - [07.D: Cluster B — Live & Event Video (2 Sub-services)](#07d-cluster-b--live--event-video)
  - [07.E: Cluster C — Story-Led & Personal Video (4 Sub-services)](#07e-cluster-c--story-led--personal-video)
  - [07.F: Cluster D — Post-Production & Audio (4 Sub-services)](#07f-cluster-d--post-production--audio)
  - [07.G: Cluster E — Studio Access & Rental (3 Sub-services)](#07g-cluster-e--studio-access--rental)
  - [07.H: Cluster F — Trust & Local Landing Hubs (6 Sub-services)](#07h-cluster-f--trust--local-landing-hubs)
- [**Phase 08: Calculators & Simulators (`/calculators` & `[service]`)**](#phase-08-calculators--simulators-calculators--service)
- [**Phase 09: Blog & Authors (`/blog` & `/authors`)**](#phase-09-blog--authors-blog--authors)
- [**Phase 10: Legal & Administrative (`/privacy`, `/terms`, `/admin/*`)**](#phase-10-legal--administrative-privacy-terms-admin)

---

## Phase 00: Global Shell, Navigation & Shared Foundations

- [x] **00.1 `src/index.css` (Design System Tokens & Utilities)**
  - File: `src/index.css`
  - Action: Added `--color-frame-cream`, `--color-frame-surface-1`, `--color-frame-surface-2`, `--color-frame-surface-3`, `--color-frame-ice`, and utility classes `.fc-laser-card`, `.fc-laser-sheen`, `.fc-frosted-pill`, `.fc-metallic-heading`, `.fc-section-ambient`.
- [x] **00.2 Global Site Shell & Noise Overlay**
  - File: `src/components/layout/ConditionalLayout.jsx`
  - Target: Ensure `public-site-shell` has `overflow-x-clip`, background `#09090B`, text `#FAFAFA`, and subtle canvas noise.
- [x] **00.3 Primary Navbar & Mega-Menu**
  - File: `src/components/Navbar.jsx`
  - Target: Frosted backdrop (`backdrop-blur-md bg-[#09090B]/80 border-b border-white/[0.08]`), mobile slide-out drawer, 52px consultation button, live telemetry dot.
- [x] **00.4 Global Footer**
  - File: `src/components/Footer.jsx`
  - Target: 1px hairline perimeter, Dhaka physical office address, directory cluster links, social channels, copyright notice.
- [x] **00.5 Kinetic Scroll to Top Button**
  - File: `src/components/ScrollToTop.jsx`
  - Target: Subtle glassmorphism circle, smooth spring animation, border `border-white/[0.14]`.
- [x] **00.6 Global Breadcrumb Component**
  - File: `src/components/common/Breadcrumb.jsx`
  - Target: Monospace uppercase crumb hierarchy, chevron dividers, JSON-LD synchronicity.
- [x] **00.7 Global 404 Error Page**
  - File: `app/not-found.jsx`
  - Target: Obsidian canvas, laser sheen card, direct recovery buttons to `/` and `/services`.
- [x] **00.8 Shared Modal Shells**
  - Files: `src/components/projects/WorkArchiveModal.jsx`, `src/components/projects/VideoPlayerModal.jsx`, `src/components/projects/WorkImageModal.jsx`
  - Target: Surface layer 3 (`#050505`) backdrop blur, crisp `border-white/[0.1]`, esc-key handlers.

---

## Phase 01: Homepage (`/`)

Page Entry: `app/page.jsx` &rarr; `src/views/Home.jsx`. 26 components in exact render sequence.

- [x] **01.01 HomeHero** (`src/components/home/HomeHero.jsx`)
  - Target: Solid white H1 + italic purple accent (`From signal to scale.`), dual `PosterButton` pills, elevated hardware stats card, zero fake dashboard chrome.
- [x] **01.02 Clients (Brand Trust Marquee)** (`src/components/Clients.jsx`)
  - Target: Crisp 1px border dividers, grayscale logo marquee with hover full-opacity, partner counter.
- [x] **01.03 HomeProblems** (`src/components/home/HomeProblems.jsx`)
  - Target: Divided row breakdown of agency failure modes vs sovereign systems + `PosterButton`.
- [x] **01.04 HomeBuild** (`src/components/home/HomeBuild.jsx`)
  - Target: 3-column capability cards with concentric deliverable tags, laser top sheen, and `SectionButton`.
- [x] **01.05 HomeStudioShowcase** (`src/components/home/HomeStudioShowcase.jsx`)
  - Target: Authentic photographic showcase of our 2 physical Dhaka studios (5 real photos, zero fake dashboards, zero overlays on images) + `SectionButton`.
- [x] **01.06 Testimonials** (`src/components/Testimonials.jsx`)
  - Target: Solid white H2 + italic purple accent, editorial quote cards, client executive attribution.
- [x] **01.07 GrowthOSHome** (`src/components/GrowthOS.jsx`)
  - Target: Unified operating system architectural diagram, interactive pillar tabs.
- [x] **01.08 HomeMarqueeStats** (`src/components/home/HomeMarqueeStats.jsx`)
  - Target: Tabular monospace figures (`font-mono tabular-nums text-4xl sm:text-5xl`), verified growth metrics.
- [x] **01.09 HomePillars** (`src/components/home/HomePillars.jsx`)
  - Target: 5-column architectural divided band (`divide-y lg:divide-x border-white/[0.08]`).
- [x] **01.10 HomeLoop** (`src/components/home/HomeLoop.jsx`)
  - Target: 2-column sticky layout with numbered step rows (`01 Audit` &rarr; `07 Scale`).
- [x] **01.11 HomeManifesto** (`src/components/home/HomeManifesto.jsx`)
  - Target: 3-column shared 1px hairline continuum matrix (`gap-px bg-white/[0.08]`).
- [x] **01.12 HomeTextMarquee** (`src/components/home/HomeTextMarquee.jsx`)
  - Target: 100% solid pure white kinetic typography ribbon (`text-white font-medium`) with subtle dot dividers.
- [x] **01.13 HomeFeaturedWork** (`src/components/home/HomeFeaturedWork.jsx`)
  - Target: 3-column showcase with pure 16:10 thumbnails (no overlays), zero `Scope:...` clutter, and full-width `View project →` pill button.
- [x] **01.14 HomePortfolioShowcase** (`src/components/home/HomePortfolioShowcase.jsx`)
  - Target: Website & SEO portfolio tiers with `SectionButton` headers, pure screenshots, and full-width card pill buttons.
- [x] **01.15 HomeRecentInsights** (`src/components/home/HomeRecentInsights.jsx`)
  - Target: 3-column card grid of latest blogs + `SectionButton`.
- [x] **01.16 HomeCaseStudies** (`src/components/home/HomeCaseStudies.jsx`)
  - Target: 3-column verified case studies with 100% clean analytics graphs (zero overlays on images), 2x2 tabular metrics, and full-width `Read Case Study →` pill button.
- [x] **01.17 HomeCalculatorsGrid** (`src/components/home/HomeCalculatorsGrid.jsx`)
  - Target: 4-column interactive calculator cards + bottom multi-channel banner with `SectionButton`.
- [x] **01.18 HomeProcess** (`src/components/home/HomeProcess.jsx`)
  - Target: 5-column architectural continuum band (`01 Diagnose` &rarr; `05 Optimize`).
- [x] **01.19 HomeEngagement** (`src/components/home/HomeEngagement.jsx`)
  - Target: 5-column divided engagement model continuum.
- [x] **01.20 HomeIndustries** (`src/components/home/HomeIndustries.jsx`)
  - Target: Grid of enterprise industry verticals served.
- [x] **01.21 HomeWhy** (`src/components/home/HomeWhy.jsx`)
  - Target: 6 architectural proofs comparing Frame Cipher to commodity shops.
- [x] **01.22 HomeTech** (`src/components/home/HomeTech.jsx`)
  - Target: Technical infrastructure matrix (Next.js, TypeScript, Cloudflare, Sony Cinema, DaVinci).
- [x] **01.23 HomeComparison** (`src/components/home/HomeComparison.jsx`)
  - Target: High-density comparison table with green checkmarks vs legacy red crosses.
- [x] **01.24 HomeAbout** (`src/components/home/HomeAbout.jsx`)
  - Target: 4-col global stats + 3-col founder portrait cards (pure photos, zero duplicate studio block) + `SectionButton`.
- [x] **01.25 HomeFAQ** (`src/components/home/HomeFAQ.jsx`)
  - Target: 1px hairline accordion disclosures with crisp expand/collapse chevron transitions.
- [x] **01.26 HomeCTA** (`src/components/home/HomeCTA.jsx`)
  - Target: Elevated rounded-2xl conversion bay with dual `PosterButton` action buttons.

---

## Phase 02: About Page (`/about`)

Page Entry: `app/about/page.jsx` &rarr; `src/views/AboutPage.jsx`.

- [x] **02.01 AboutHero** (`src/components/about/AboutHero.jsx`)
- [x] **02.02 AboutVision** (`src/components/about/AboutVision.jsx`)
- [x] **02.03 AboutClients** (`src/components/about/AboutClients.jsx`)
- [x] **02.04 AboutOrigin** (`src/components/about/AboutOrigin.jsx`)
- [x] **02.05 AboutGlobalDelivery** (`src/components/about/AboutGlobalDelivery.jsx`)
- [x] **02.06 AboutTechStack** (`src/components/about/AboutTechStack.jsx`)
- [x] **02.07 AboutTimeline** (`src/components/about/AboutTimeline.jsx`)
- [x] **02.08 AboutFounders** (`src/components/about/AboutFounders.jsx`)
- [x] **02.09 AboutPrinciples** (`src/components/about/AboutPrinciples.jsx`)
- [x] **02.10 AboutCapabilityMix** (`src/components/about/AboutCapabilityMix.jsx`)
- [x] **02.11 AboutIndustries** (`src/components/about/AboutIndustries.jsx`)
- [x] **02.12 AboutFAQ** (`src/components/about/AboutFAQ.jsx`)
- [x] **02.13 AboutCTA** (`src/components/about/AboutCTA.jsx`)

---

## Phase 03: Contact & Headquarters (`/contact`)

Page Entry: `app/contact/page.jsx` &rarr; `src/views/ContactPage.jsx`.

- [x] **03.01 ContactHero** (`src/components/contact/ContactHero.jsx`)
- [x] **03.02 ContactDirectLines** (`src/components/contact/ContactDirectLines.jsx`)
- [x] **03.03 ContactBriefForm** (`src/components/contact/ContactBriefForm.jsx`)
- [x] **03.04 GoogleMapEmbed** (`src/components/common/GoogleMapEmbed.jsx`)

---

## Phase 04: Services Full Engine

### 04.A: Services Directory Overview (`/services`)
Folder: `src/components/services/` | View: `src/views/ServicesPage.jsx`

- [x] **04.A.01 ServicesHero** (`src/components/services/ServicesHero.jsx`)
- [x] **04.A.02 ServicesProblemSelector** (`src/components/services/ServicesProblemSelector.jsx`)
- [x] **04.A.03 ServicesBusinessGoals** (`src/components/services/ServicesBusinessGoals.jsx`)
- [x] **04.A.04 ServicesConnectedSystem** (`src/components/services/ServicesConnectedSystem.jsx`)
- [x] **04.A.05 ServicesCoreCapabilities** (`src/components/services/ServicesCoreCapabilities.jsx`)
- [x] **04.A.06 ServicesPillarsGrid** (`src/components/services/ServicesPillarsGrid.jsx`)
- [x] **04.A.07 ServicesAllList** (`src/components/services/ServicesAllList.jsx`)
- [x] **04.A.08 ServicesDeliverables** (`src/components/services/ServicesDeliverables.jsx`)
- [x] **04.A.09 ServicesBundles** (`src/components/services/ServicesBundles.jsx`)
- [x] **04.A.10 ServicesProcess** (`src/components/services/ServicesProcess.jsx`)
- [x] **04.A.11 ServicesIndustries** (`src/components/services/ServicesIndustries.jsx`)
- [x] **04.A.12 ServicesCaseStudies** (`src/components/services/ServicesCaseStudies.jsx`)
- [x] **04.A.13 ServicesWhy** (`src/components/services/ServicesWhy.jsx`)
- [x] **04.A.14 ServicesStats** (`src/components/services/ServicesStats.jsx`)
- [x] **04.A.15 ServicesComparison** (`src/components/services/ServicesComparison.jsx`)
- [x] **04.A.16 ServiceClusterSection** (`src/components/services/ServiceClusterSection.jsx`)
- [x] **04.A.17 ServiceSubServices** (`src/components/services/ServiceSubServices.jsx`)
- [x] **04.A.18 ServicesEngagementModels** (`src/components/services/ServicesEngagementModels.jsx`)
- [x] **04.A.19 ServicesFAQ** (`src/components/services/ServicesFAQ.jsx`)
- [x] **04.A.20 ServicesCTA** (`src/components/services/ServicesCTA.jsx`)

---

### 04.B: Dynamic Generic Service Detail Engine (`/services/[...slug]`)
Folder: `src/components/specific-service/` | Views: `src/views/ServiceExperience.jsx`, `src/views/DocServicePageView.jsx`, `src/views/ServiceDetailPage.jsx`

- [x] **04.B.01 ServiceExperienceHero** (`src/components/specific-service/ServiceExperienceHero.jsx`)
- [x] **04.B.02 ServiceExperiencePillarServices** (`src/components/specific-service/ServiceExperiencePillarServices.jsx`)
- [x] **04.B.03 ServiceExperienceOfferings** (`src/components/specific-service/ServiceExperienceOfferings.jsx`)
- [x] **04.B.04 ServiceExperienceBusinessCase** (`src/components/specific-service/ServiceExperienceBusinessCase.jsx`)
- [x] **04.B.05 ServiceExperienceProcess** (`src/components/specific-service/ServiceExperienceProcess.jsx`)
- [x] **04.B.06 ServiceExperiencePricing** (`src/components/specific-service/ServiceExperiencePricing.jsx`)
- [x] **04.B.07 ServiceExperienceDetails** (`src/components/specific-service/ServiceExperienceDetails.jsx`)
- [x] **04.B.08 ServiceExperienceFAQ** (`src/components/specific-service/ServiceExperienceFAQ.jsx`)
- [x] **04.B.09 ServiceExperienceRelated** (`src/components/specific-service/ServiceExperienceRelated.jsx`)
- [x] **04.B.10 ServiceExperienceCTA** (`src/components/specific-service/ServiceExperienceCTA.jsx`)
- [x] **04.B.11 ServiceDetailHero** (`src/components/specific-service/ServiceDetailHero.jsx`)
- [x] **04.B.12 ServiceDetailProblemSection** (`src/components/specific-service/ServiceDetailProblemSection.jsx`)
- [x] **04.B.13 ServiceDetailScopeSection** (`src/components/specific-service/ServiceDetailScopeSection.jsx`)
- [x] **04.B.14 ServiceDetailDeliverablesSection** (`src/components/specific-service/ServiceDetailDeliverablesSection.jsx`)
- [x] **04.B.15 ServiceDetailProcessSection** (`src/components/specific-service/ServiceDetailProcessSection.jsx`)
- [x] **04.B.16 ServiceDetailOutputsSection** (`src/components/specific-service/ServiceDetailOutputsSection.jsx`)
- [x] **04.B.17 ServiceDetailLocalRelevanceSection** (`src/components/specific-service/ServiceDetailLocalRelevanceSection.jsx`)
- [x] **04.B.18 ServicePillarClusterLinks** (`src/components/specific-service/ServicePillarClusterLinks.jsx`)
- [x] **04.B.19 ServiceDetailRelatedWorkSection** (`src/components/specific-service/ServiceDetailRelatedWorkSection.jsx`)
- [x] **04.B.20 ServiceDetailFAQSection** (`src/components/specific-service/ServiceDetailFAQSection.jsx`)

---

### 04.C: Flagship 360 Marketing (`/services/360-marketing`)
Folder: `src/components/services/360-marketing/`

- [x] **04.C.01 Hero** (`src/components/services/360-marketing/Hero.jsx`)
- [x] **04.C.02 Overview** (`src/components/services/360-marketing/Overview.jsx`)
- [x] **04.C.03 Pillars** (`src/components/services/360-marketing/Pillars.jsx`)
- [x] **04.C.04 Deliverables** (`src/components/services/360-marketing/Deliverables.jsx`)
- [x] **04.C.05 FullFunnelModel** (`src/components/services/360-marketing/FullFunnelModel.jsx`)
- [x] **04.C.06 IndustryPlaybooks** (`src/components/services/360-marketing/IndustryPlaybooks.jsx`)
- [x] **04.C.07 Process** (`src/components/services/360-marketing/Process.jsx`)
- [x] **04.C.08 ProofMetrics** (`src/components/services/360-marketing/ProofMetrics.jsx`)
- [x] **04.C.09 Pricing** (`src/components/services/360-marketing/Pricing.jsx`)
- [x] **04.C.10 ServiceAreas** (`src/components/services/360-marketing/ServiceAreas.jsx`)
- [x] **04.C.11 TechStack** (`src/components/services/360-marketing/TechStack.jsx`)
- [x] **04.C.12 VsFragmented** (`src/components/services/360-marketing/VsFragmented.jsx`)
- [x] **04.C.13 FAQ** (`src/components/services/360-marketing/FAQ.jsx`)
- [x] **04.C.14 CTA** (`src/components/services/360-marketing/CTA.jsx`)
- [x] **04.C.15 Index Shell** (`src/components/services/360-marketing/index.jsx`)

---

### 04.D: Pillar 1 — Website Design & Development

#### 04.D.0 Pillar Hub Root (`src/components/services/website-design-development/`)
- [x] `Hero.jsx`, `Offerings.jsx`, `Process.jsx`, `Pricing.jsx`, `Markets.jsx`, `WhoFor.jsx`, `WhyChoose.jsx`, `FAQ.jsx`, `CTA.jsx`, `index.jsx`

#### 04.D.1 `business-website/` (`src/components/services/website-design-development/business-website/`)
- [x] `Hero.jsx`, `Offerings.jsx`, `Features.jsx`, `Included.jsx`, `Markets.jsx`, `Solutions.jsx`, `SeoReady.jsx`, `Process.jsx`, `Pricing.jsx`, `WhyChoose.jsx`, `FAQ.jsx`, `CTA.jsx`, `index.jsx`

#### 04.D.2 `ecommerce-website/` (`src/components/services/website-design-development/ecommerce-website/`)
- [x] `Hero.jsx`, `Offerings.jsx`, `Features.jsx`, `Models.jsx`, `Platforms.jsx`, `Payments.jsx`, `SeoReady.jsx`, `Markets.jsx`, `Process.jsx`, `Pricing.jsx`, `WhyChoose.jsx`, `FAQ.jsx`, `CTA.jsx`, `index.jsx`

#### 04.D.3 `landing-pages/` (`src/components/services/website-design-development/landing-pages/`)
- [x] `Hero.jsx`, `Offerings.jsx`, `WhyDedicated.jsx`, `ConversionOptimization.jsx`, `CopyStrategy.jsx`, `Solutions.jsx`, `TrafficSources.jsx`, `Tracking.jsx`, `Process.jsx`, `Pricing.jsx`, `WhyChoose.jsx`, `FAQ.jsx`, `CTA.jsx`, `index.jsx`

#### 04.D.4 `wordpress/` (`src/components/services/website-design-development/wordpress/`)
- [x] `Hero.jsx`, `Offerings.jsx`, `BuilderVsCustom.jsx`, `ContentStructures.jsx`, `WooCommerceDev.jsx`, `SeoReady.jsx`, `Solutions.jsx`, `Markets.jsx`, `Process.jsx`, `Pricing.jsx`, `WhyChoose.jsx`, `FAQ.jsx`, `CTA.jsx`, `index.jsx`

#### 04.D.5 `wix/` (`src/components/services/website-design-development/wix/`)
- [x] `Hero.jsx`, `Offerings.jsx`, `Comparison.jsx`, `PlatformFit.jsx`, `Solutions.jsx`, `PortfolioShowcase.jsx`, `Markets.jsx`, `Handover.jsx`, `Maintenance.jsx`, `Process.jsx`, `Pricing.jsx`, `WhyChoose.jsx`, `FAQ.jsx`, `CTA.jsx`, `index.jsx`

#### 04.D.6 `magento/` (`src/components/services/website-design-development/magento/`)
- [x] `Hero.jsx`, `Offerings.jsx`, `WhyMagento.jsx`, `Comparison.jsx`, `TechStack.jsx`, `PortfolioShowcase.jsx`, `Markets.jsx`, `Process.jsx`, `Pricing.jsx`, `Support.jsx`, `WhyChoose.jsx`, `FAQ.jsx`, `CTA.jsx`, `index.jsx`

#### 04.D.7 `webflow/` (`src/components/services/website-design-development/webflow/`)
- [x] `Hero.jsx`, `Offerings.jsx`, `WhyWebflow.jsx`, `Comparison.jsx`, `TechStack.jsx`, `PortfolioShowcase.jsx`, `Markets.jsx`, `Process.jsx`, `Pricing.jsx`, `WhyChoose.jsx`, `FAQ.jsx`, `CTA.jsx`, `index.jsx`

#### 04.D.8 `shopify/` (`src/components/services/website-design-development/shopify/`)
- [x] `Hero.jsx`, `Offerings.jsx`, `WhyShopify.jsx`, `Comparison.jsx`, `TechStack.jsx`, `PortfolioShowcase.jsx`, `Markets.jsx`, `Process.jsx`, `Pricing.jsx`, `WhyChoose.jsx`, `FAQ.jsx`, `CTA.jsx`, `index.jsx`

#### 04.D.9 `custom-development/` (`src/components/services/website-design-development/custom-development/`)
- [x] `Hero.jsx`, `Offerings.jsx`, `Solutions.jsx`, `TechStack.jsx`, `HeadlessCms.jsx`, `Devops.jsx`, `Performance.jsx`, `SeoArchitecture.jsx`, `Accessibility.jsx`, `Migrations.jsx`, `CaseStudyStandards.jsx`, `WhoFor.jsx`, `Comparison.jsx`, `Markets.jsx`, `Process.jsx`, `Pricing.jsx`, `WhyChoose.jsx`, `FAQ.jsx`, `CTA.jsx`, `index.jsx`

#### 04.D.10 `redesign/` (`src/components/services/website-design-development/redesign/`)
- [x] `Hero.jsx`, `Offerings.jsx`, `Outcomes.jsx`, `SeoEquity.jsx`, `Timeline.jsx`, `Included.jsx`, `Niches.jsx`, `CaseStudies.jsx`, `Mistakes.jsx`, `ReviewSupport.jsx`, `WhyFramecipher.jsx`, `ServiceAreas.jsx`, `Process.jsx`, `Pricing.jsx`, `WhyChoose.jsx`, `FAQ.jsx`, `CTA.jsx`, `index.jsx`

#### 04.D.11 `maintenance/` (`src/components/services/website-design-development/maintenance/`)
- [x] `Hero.jsx`, `Offerings.jsx`, `Scope.jsx`, `EcommerceMaintenance.jsx`, `EmergencySupport.jsx`, `OngoingImprovements.jsx`, `Onboarding.jsx`, `Takeover.jsx`, `SupportPriority.jsx`, `Ownership.jsx`, `CaseStudyStandards.jsx`, `Markets.jsx`, `Process.jsx`, `Pricing.jsx`, `WhyChoose.jsx`, `FAQ.jsx`, `CTA.jsx`, `index.jsx`

#### 04.D.12 `ui-ux-design/` (`src/components/services/website-design-development/ui-ux-design/`)
- [x] `Hero.jsx`, `Offerings.jsx`, `Deliverables.jsx`, `ProductTypes.jsx`, `UxAudit.jsx`, `DeveloperHandoff.jsx`, `Revisions.jsx`, `PostLaunch.jsx`, `CaseStudies.jsx`, `Comparison.jsx`, `ServiceAreas.jsx`, `Process.jsx`, `Pricing.jsx`, `WhyChoose.jsx`, `FAQ.jsx`, `CTA.jsx`, `index.jsx`

---

### 04.E: Pillar 2 — App Development

#### 04.E.0 Pillar Hub Root (`src/components/services/app-development/`)
- [x] `Hero.jsx`, `AppInterfaceHeroVisual.jsx`, `CaseStudies.jsx`, `Services.jsx`, `Offerings.jsx`, `AppTypes.jsx`, `WhyCustomApps.jsx`, `Capabilities.jsx`, `NativeVsCross.jsx`, `UiUxDesign.jsx`, `BackendDevelopment.jsx`, `Integrations.jsx`, `Security.jsx`, `RealWorldConditions.jsx`, `Testing.jsx`, `StoreLaunch.jsx`, `Process.jsx`, `MvpStartups.jsx`, `Modernization.jsx`, `Deliverables.jsx`, `WhyChoose.jsx`, `Pricing.jsx`, `StartRequirements.jsx`, `BangladeshWorldwide.jsx`, `FAQ.jsx`, `CTA.jsx`, `index.jsx`

#### 04.E.1 `android/` (`src/components/services/app-development/android/`)
- [x] `Hero.jsx`, `AndroidHeroVisual.jsx`, `CaseStudies.jsx`, `Services.jsx`, `Offerings.jsx`, `AppsWeBuild.jsx`, `WhyRealPartner.jsx`, `FeaturesIntegrations.jsx`, `NativeKotlin.jsx`, `TechStack.jsx`, `StrategyArchitecture.jsx`, `CodeQuality.jsx`, `UiUxDesign.jsx`, `Security.jsx`, `RealWorldConditions.jsx`, `Testing.jsx`, `StoreLaunch.jsx`, `Process.jsx`, `Modernization.jsx`, `Deliverables.jsx`, `WhyChoose.jsx`, `Pricing.jsx`, `BangladeshWorldwide.jsx`, `FAQ.jsx`, `CTA.jsx`, `index.jsx`

#### 04.E.2 `ios/` (`src/components/services/app-development/ios/`)
- [x] `Hero.jsx`, `IosHeroVisual.jsx`, `CaseStudies.jsx`, `Services.jsx`, `Offerings.jsx`, `AppTypes.jsx`, `WhyRealPartner.jsx`, `Capabilities.jsx`, `SwiftSwiftUi.jsx`, `AppleEcosystem.jsx`, `TechStack.jsx`, `StrategyArchitecture.jsx`, `ArchitectureCodeQuality.jsx`, `UiUxDesign.jsx`, `Security.jsx`, `AccessibilityLocalization.jsx`, `PerformanceCompatibility.jsx`, `TestFlightValidation.jsx`, `Testing.jsx`, `StoreLaunch.jsx`, `Process.jsx`, `PortingMigration.jsx`, `Deliverables.jsx`, `WhyChoose.jsx`, `Pricing.jsx`, `BangladeshWorldwide.jsx`, `FAQ.jsx`, `CTA.jsx`, `index.jsx`

#### 04.E.3 `cross-platform/` (`src/components/services/app-development/cross-platform/`)
- [x] `Hero.jsx`, `CrossPlatformHeroVisual.jsx`, `CoreServices.jsx`, `Offerings.jsx`, `AppsWeBuild.jsx`, `WhyChooseCrossPlatform.jsx`, `CrossVsNative.jsx`, `FlutterVsReact.jsx`, `FeaturesIntegrations.jsx`, `Architecture.jsx`, `NativeModules.jsx`, `UiUxDesign.jsx`, `TechStack.jsx`, `Security.jsx`, `AccessibilityLocalization.jsx`, `OfflineConditions.jsx`, `PerformanceCompatibility.jsx`, `Testing.jsx`, `StoreDeployment.jsx`, `Process.jsx`, `MigrationModernization.jsx`, `Deliverables.jsx`, `WhyChoose.jsx`, `CaseStudies.jsx`, `Pricing.jsx`, `BangladeshWorldwide.jsx`, `FAQ.jsx`, `CTA.jsx`, `index.jsx`

#### 04.E.4 `saas-apps/` (`src/components/services/app-development/saas-apps/`)
- [x] `Hero.jsx`, `SaasHeroVisual.jsx`, `WhatIsSaas.jsx`, `OurServices.jsx`, `Offerings.jsx`, `TypesOfSaas.jsx`, `WhyBuildSaas.jsx`, `MultiTenantArchitecture.jsx`, `BillingMonetization.jsx`, `UserRoleManagement.jsx`, `OnboardingActivation.jsx`, `AnalyticsDashboards.jsx`, `ApisWebhooksIntegrations.jsx`, `BackgroundJobsAutomation.jsx`, `SecurityPrivacyCompliance.jsx`, `TechnologyStack.jsx`, `PerformanceScalability.jsx`, `UiUxProductDesign.jsx`, `MvpDevelopment.jsx`, `ScalingModernization.jsx`, `WebMobileDevelopment.jsx`, `TestingQualityAssurance.jsx`, `DeploymentHandoff.jsx`, `Process.jsx`, `ProjectDeliverables.jsx`, `WhyChooseFramecipher.jsx`, `CaseStudies.jsx`, `Pricing.jsx`, `BangladeshWorldwide.jsx`, `FAQ.jsx`, `CTA.jsx`, `index.jsx`

#### 04.E.5 `enterprise-apps/` (`src/components/services/app-development/enterprise-apps/`)
- [x] `Hero.jsx`, `EnterpriseHeroVisual.jsx`, `WhatIsEnterprise.jsx`, `Services.jsx`, `Offerings.jsx`, `AppsWeBuild.jsx`, `WhyMoreThanCoding.jsx`, `Architecture.jsx`, `SystemsIntegration.jsx`, `WorkflowAutomation.jsx`, `SecurityCompliance.jsx`, `DataReporting.jsx`, `MobileOffline.jsx`, `ModernizationMigration.jsx`, `CloudPerformance.jsx`, `DevopsManagement.jsx`, `TechStack.jsx`, `UiUxAdoption.jsx`, `RolloutChange.jsx`, `TestingQa.jsx`, `DataMigration.jsx`, `EngagementModels.jsx`, `Process.jsx`, `Deliverables.jsx`, `WhyChoose.jsx`, `CaseStudies.jsx`, `Pricing.jsx`, `BangladeshWorldwide.jsx`, `FAQ.jsx`, `CTA.jsx`, `index.jsx`

#### 04.E.6 `api-development/` (`src/components/services/app-development/api-development/`)
- [x] `Hero.jsx`, `ApiHeroVisual.jsx`, `Services.jsx`, `Offerings.jsx`, `ApiTypes.jsx`, `Integrations.jsx`, `ArchitectureDesign.jsx`, `Security.jsx`, `Reliability.jsx`, `PerformanceScalability.jsx`, `Documentation.jsx`, `AuditModernization.jsx`, `TechTooling.jsx`, `UseCases.jsx`, `WhyPartner.jsx`, `Process.jsx`, `Pricing.jsx`, `WhyChoose.jsx`, `CaseStudies.jsx`, `BangladeshWorldwide.jsx`, `FAQ.jsx`, `CTA.jsx`, `index.jsx`

#### 04.E.7 `mvp-development/` (`src/components/services/app-development/mvp-development/`)
- [x] `Hero.jsx`, `MvpHeroVisual.jsx`, `Offerings.jsx`, `StageComparison.jsx`, `WhenToBuild.jsx`, `TypesOfMvp.jsx`, `ValidationMeasurement.jsx`, `CommonMistakes.jsx`, `TechStack.jsx`, `Process.jsx`, `Pricing.jsx`, `WhyChoose.jsx`, `BangladeshWorldwide.jsx`, `FAQ.jsx`, `CTA.jsx`, `index.jsx`

#### 04.E.8 `maintenance/` (`src/components/services/app-development/maintenance/`)
- [x] `Hero.jsx`, `MaintenanceHeroVisual.jsx`, `OurServices.jsx`, `Offerings.jsx`, `TypesOfMaintenance.jsx`, `AppsWeMaintain.jsx`, `WhyOngoingMaintenance.jsx`, `TakingOverExistingApp.jsx`, `Process.jsx`, `Pricing.jsx`, `WhatsIncluded.jsx`, `SupportLevels.jsx`, `MaintenanceVsNewDev.jsx`, `WhyChoose.jsx`, `BangladeshWorldwide.jsx`, `FAQ.jsx`, `CTA.jsx`, `index.jsx`

---

### 04.F: Pillar 3 — SEO

#### 04.F.0 Pillar Hub Root (`src/components/services/seo/`)
- [x] `Hero.jsx`, `SeoHeroSearchVisual.jsx`, `Overview.jsx`, `WhyNotRanking.jsx`, `Offerings.jsx`, `Conversions.jsx`, `Platforms.jsx`, `Process.jsx`, `Included.jsx`, `Timeline.jsx`, `Pricing.jsx`, `Guarantee.jsx`, `CaseStudies.jsx`, `SeoCaseStudiesSection.jsx`, `VsPaid.jsx`, `WhoFor.jsx`, `ServiceAreas.jsx`, `Reporting.jsx`, `GettingStarted.jsx`, `FAQ.jsx`, `CTA.jsx`, `index.jsx`

#### 04.F.1 to 04.F.12 Sub-services (`src/components/services/seo/`)
- [x] **technical-seo/** (`Hero.jsx`, `Offerings.jsx`, `CoreWebVitals.jsx`, `Crawlability.jsx`, `SchemaArchitecture.jsx`, `Process.jsx`, `Pricing.jsx`, `FAQ.jsx`, `CTA.jsx`, `index.jsx`)
- [x] **on-page-seo/** (`Hero.jsx`, `Offerings.jsx`, `ContentOptimization.jsx`, `InternalLinking.jsx`, `Process.jsx`, `Pricing.jsx`, `FAQ.jsx`, `CTA.jsx`, `index.jsx`)
- [x] **link-building/** (`Hero.jsx`, `Offerings.jsx`, `WhiteHatOutreach.jsx`, `EditorialPlacements.jsx`, `Process.jsx`, `Pricing.jsx`, `FAQ.jsx`, `CTA.jsx`, `index.jsx`)
- [x] **local-seo/** (`Hero.jsx`, `Offerings.jsx`, `GmbOptimization.jsx`, `LocalCitations.jsx`, `MapRankings.jsx`, `Process.jsx`, `Pricing.jsx`, `FAQ.jsx`, `CTA.jsx`, `index.jsx`)
- [x] **ecommerce-seo/** (`Hero.jsx`, `Offerings.jsx`, `ProductCategorySeo.jsx`, `FacetedNavigation.jsx`, `Process.jsx`, `Pricing.jsx`, `FAQ.jsx`, `CTA.jsx`, `index.jsx`)
- [x] **international-seo/** (`Hero.jsx`, `Offerings.jsx`, `HreflangSetup.jsx`, `MultiRegionTargeting.jsx`, `Process.jsx`, `Pricing.jsx`, `FAQ.jsx`, `CTA.jsx`, `index.jsx`)
- [x] **seo-audit/** (`Hero.jsx`, `Offerings.jsx`, `AuditChecklist.jsx`, `PriorityMatrix.jsx`, `Process.jsx`, `Pricing.jsx`, `FAQ.jsx`, `CTA.jsx`, `index.jsx`)
- [x] **seo-strategy/** (`Hero.jsx`, `Offerings.jsx`, `RoadmapQuarterly.jsx`, `CompetitiveIntelligence.jsx`, `Process.jsx`, `Pricing.jsx`, `FAQ.jsx`, `CTA.jsx`, `index.jsx`)
- [x] **keyword-research/** (`Hero.jsx`, `Offerings.jsx`, `SearchIntentMapping.jsx`, `VolumeDifficulty.jsx`, `Process.jsx`, `Pricing.jsx`, `FAQ.jsx`, `CTA.jsx`, `index.jsx`)
- [x] **ai-search-optimization/** (`Hero.jsx`, `Offerings.jsx`, `PerplexityGeo.jsx`, `GenerativeAiVisibility.jsx`, `Process.jsx`, `Pricing.jsx`, `FAQ.jsx`, `CTA.jsx`, `index.jsx`)
- [x] **adsense-approval/** (`Hero.jsx`, `Offerings.jsx`, `PolicyCompliance.jsx`, `HighQualityContent.jsx`, `Process.jsx`, `Pricing.jsx`, `FAQ.jsx`, `CTA.jsx`, `index.jsx`)
- [x] **penalty-recovery/** (`Hero.jsx`, `Offerings.jsx`, `AlgorithmicRecovery.jsx`, `DisavowCleanse.jsx`, `Process.jsx`, `Pricing.jsx`, `FAQ.jsx`, `CTA.jsx`, `index.jsx`)

---

### 04.G: Pillar 4 — Paid Advertising

#### 04.G.0 Pillar Hub Root (`src/components/services/paid-advertising/`)
- [x] `Hero.jsx`, `PaidAdsHeroVisual.jsx`, `Overview.jsx`, `CaseStudies.jsx`, `Offerings.jsx`, `Platforms.jsx`, `CustomerJourney.jsx`, `BudgetDecisions.jsx`, `WhoFor.jsx`, `WhyFail.jsx`, `Process.jsx`, `Included.jsx`, `WhyChoose.jsx`, `Pricing.jsx`, `Timeline.jsx`, `Guarantee.jsx`, `ServiceAreas.jsx`, `Reporting.jsx`, `RelatedAdsPlatforms.jsx`, `ServiceCalculatorBanner.jsx`, `FAQ.jsx`, `GettingStarted.jsx`, `CTA.jsx`, `index.jsx`

#### 04.G.1 to 04.G.10 Sub-services (`src/components/services/paid-advertising/`)
- [x] **google-ads/** (`Hero.jsx`, `GoogleAdsHeroVisual.jsx`, `Overview.jsx`, `Campaigns.jsx`, `Includes.jsx`, `Offerings.jsx`, `ProblemsWeFix.jsx`, `WhoFor.jsx`, `Markets.jsx`, `Process.jsx`, `Results.jsx`, `WhyChoose.jsx`, `Pricing.jsx`, `PerformanceCommitment.jsx`, `Timeline.jsx`, `FAQ.jsx`, `CTA.jsx`, `index.jsx`)
- [x] **meta-ads/** (`Hero.jsx`, `MetaHeroVisual.jsx`, `Overview.jsx`, `Campaigns.jsx`, `Includes.jsx`, `Offerings.jsx`, `ProblemsWeFix.jsx`, `WhoFor.jsx`, `Markets.jsx`, `Process.jsx`, `Results.jsx`, `WhyChoose.jsx`, `Pricing.jsx`, `PerformanceCommitment.jsx`, `Timeline.jsx`, `FAQ.jsx`, `CTA.jsx`, `index.jsx`)
- [x] **linkedin-ads/** (`Hero.jsx`, `LinkedinHeroVisual.jsx`, `Overview.jsx`, `Campaigns.jsx`, `Includes.jsx`, `Offerings.jsx`, `ProblemsWeFix.jsx`, `WhoFor.jsx`, `Markets.jsx`, `Process.jsx`, `Results.jsx`, `WhyChoose.jsx`, `Pricing.jsx`, `PerformanceCommitment.jsx`, `Timeline.jsx`, `FAQ.jsx`, `CTA.jsx`, `index.jsx`)
- [x] **chatgpt-ads/** (`Hero.jsx`, `ChatGptHeroVisual.jsx`, `Overview.jsx`, `HowItWorks.jsx`, `Includes.jsx`, `Offerings.jsx`, `BusinessTypes.jsx`, `Markets.jsx`, `AeoGeo.jsx`, `WhyChoose.jsx`, `Process.jsx`, `Pricing.jsx`, `ServiceAreas.jsx`, `Timeline.jsx`, `Reporting.jsx`, `Guarantee.jsx`, `FAQ.jsx`, `CTA.jsx`, `index.jsx`)
- [x] **pinterest-ads/** (`Hero.jsx`, `PinterestHeroVisual.jsx`, `Overview.jsx`, `Includes.jsx`, `BusinessTypes.jsx`, `Markets.jsx`, `WhyChoose.jsx`, `Results.jsx`, `Process.jsx`, `Pricing.jsx`, `Timeline.jsx`, `Reporting.jsx`, `Guarantee.jsx`, `FAQ.jsx`, `CTA.jsx`, `index.jsx`)
- [x] **tiktok-ads/** (`Hero.jsx`, `TikTokHeroVisual.jsx`, `Overview.jsx`, `Includes.jsx`, `Formats.jsx`, `CreativeTesting.jsx`, `Tracking.jsx`, `WhoFor.jsx`, `WhenNotRight.jsx`, `Comparison.jsx`, `WhyChoose.jsx`, `Process.jsx`, `Pricing.jsx`, `Markets.jsx`, `Timeline.jsx`, `Guarantee.jsx`, `FAQ.jsx`, `CTA.jsx`, `index.jsx`)
- [x] **microsoft-ads/** (`Hero.jsx`, `MicrosoftHeroVisual.jsx`, `Overview.jsx`, `Includes.jsx`, `WhoFor.jsx`, `WhenNotRight.jsx`, `Strategy.jsx`, `Tracking.jsx`, `Comparison.jsx`, `WhyChoose.jsx`, `Process.jsx`, `Pricing.jsx`, `Markets.jsx`, `Timeline.jsx`, `Guarantee.jsx`, `FAQ.jsx`, `CTA.jsx`, `index.jsx`)
- [x] **amazon-ads/** (`Hero.jsx`, `AmazonHeroVisual.jsx`, `Overview.jsx`, `WhenWrong.jsx`, `Solutions.jsx`, `Includes.jsx`, `Economics.jsx`, `Attribution.jsx`, `WhoFor.jsx`, `WhenNotRight.jsx`, `WhyChoose.jsx`, `Process.jsx`, `Pricing.jsx`, `Markets.jsx`, `Timeline.jsx`, `Guarantee.jsx`, `FAQ.jsx`, `CTA.jsx`, `index.jsx`)
- [x] **remarketing/** (`Hero.jsx`, `RemarketingHeroVisual.jsx`, `Overview.jsx`, `WhenWrong.jsx`, `Segmentation.jsx`, `VsRetargeting.jsx`, `Tracking.jsx`, `Privacy.jsx`, `Includes.jsx`, `Metrics.jsx`, `CaseStudies.jsx`, `WhyChoose.jsx`, `Process.jsx`, `Pricing.jsx`, `WhoFor.jsx`, `WhenNotRight.jsx`, `Markets.jsx`, `Timeline.jsx`, `Guarantee.jsx`, `FAQ.jsx`, `CTA.jsx`, `index.jsx`)
- [x] **lead-generation-ads/** (`Hero.jsx`, `LeadGenHeroVisual.jsx`, `Overview.jsx`, `WhyUnderperform.jsx`, `Platforms.jsx`, `Includes.jsx`, `Metrics.jsx`, `CaseStudies.jsx`, `WhyChoose.jsx`, `Process.jsx`, `Pricing.jsx`, `WhoFor.jsx`, `WhenNotRight.jsx`, `Markets.jsx`, `Timeline.jsx`, `Guarantee.jsx`, `FAQ.jsx`, `CTA.jsx`, `index.jsx`)

---

### 04.H: Pillar 5 — Social Media Management

#### 04.H.0 Pillar Hub Root (`src/components/services/social-media-management/`)
- [x] `Hero.jsx`, `SocialMediaHeroVisual.jsx`, `Overview.jsx`, `Offerings.jsx`, `Platforms.jsx`, `ContentStrategy.jsx`, `CommunityCare.jsx`, `Process.jsx`, `Pricing.jsx`, `Outcomes.jsx`, `Expectations.jsx`, `CaseStudies.jsx`, `VsPaid.jsx`, `WhoFor.jsx`, `ServiceAreas.jsx`, `WhyChoose.jsx`, `GettingStarted.jsx`, `FAQ.jsx`, `CTA.jsx`, `index.jsx`

#### 04.H.1 to 04.H.8 Sub-services (`src/components/services/social-media-management/`)
- [x] **facebook/** (`Hero.jsx`, `Offerings.jsx`, `CommunityGroups.jsx`, `ViralPacing.jsx`, `Process.jsx`, `Pricing.jsx`, `FAQ.jsx`, `CTA.jsx`, `index.jsx`)
- [x] **instagram/** (`Hero.jsx`, `Offerings.jsx`, `ReelsAesthetic.jsx`, `StoriesEngagement.jsx`, `Process.jsx`, `Pricing.jsx`, `FAQ.jsx`, `CTA.jsx`, `index.jsx`)
- [x] **linkedin/** (`Hero.jsx`, `Offerings.jsx`, `ThoughtLeadership.jsx`, `EmployeeAdvocacy.jsx`, `Process.jsx`, `Pricing.jsx`, `FAQ.jsx`, `CTA.jsx`, `index.jsx`)
- [x] **tiktok-management/** (`Hero.jsx`, `Offerings.jsx`, `DailyTrendJumping.jsx`, `CreatorVoice.jsx`, `Process.jsx`, `Pricing.jsx`, `FAQ.jsx`, `CTA.jsx`, `index.jsx`)
- [x] **youtube-management/** (`Hero.jsx`, `Offerings.jsx`, `ChannelPackaging.jsx`, `ThumbnailOptimization.jsx`, `Process.jsx`, `Pricing.jsx`, `FAQ.jsx`, `CTA.jsx`, `index.jsx`)
- [x] **content-calendar-strategy/** (`Hero.jsx`, `Offerings.jsx`, `PillarBatching.jsx`, `SchedulingArchitecture.jsx`, `Process.jsx`, `Pricing.jsx`, `FAQ.jsx`, `CTA.jsx`, `index.jsx`)
- [x] **community-management/** (`Hero.jsx`, `Overview.jsx`, `Offerings.jsx`, `Platforms.jsx`, `WhyMatters.jsx`, `VsSupport.jsx`, `WhoFor.jsx`, `Process.jsx`, `WhyChoose.jsx`, `Pricing.jsx`, `Timeline.jsx`, `Guarantee.jsx`, `ServiceAreas.jsx`, `FAQ.jsx`, `CTA.jsx`, `index.jsx`)
- [x] **reporting/** (`Hero.jsx`, `Offerings.jsx`, `LookerStudioDashboards.jsx`, `ExecutiveBriefs.jsx`, `Process.jsx`, `Pricing.jsx`, `FAQ.jsx`, `CTA.jsx`, `index.jsx`)

---

### 04.I: Pillar 6 — Content Writing

#### 04.I.0 Pillar Hub Root (`src/components/services/content-writing/`)
- [x] `Hero.jsx`, `Overview.jsx`, `WhatGoodContentDoes.jsx`, `Offerings.jsx`, `ContentJobs.jsx`, `SeoWriting.jsx`, `VsCopywriting.jsx`, `Process.jsx`, `Timeline.jsx`, `Pricing.jsx`, `QualityStandard.jsx`, `WhoFor.jsx`, `ServiceAreas.jsx`, `WhyChoose.jsx`, `FAQ.jsx`, `CTA.jsx`, `index.jsx`

#### 04.I.1 to 04.I.8 Sub-services (`src/components/services/content-writing/`)
- [x] **seo-blog-writing/** (`Hero.jsx`, `Offerings.jsx`, `DeepResearchArticles.jsx`, `KeywordIntegration.jsx`, `Process.jsx`, `Pricing.jsx`, `FAQ.jsx`, `CTA.jsx`, `index.jsx`)
- [x] **website-content/** (`Hero.jsx`, `Offerings.jsx`, `BrandVoicePages.jsx`, `UxMicrocopy.jsx`, `Process.jsx`, `Pricing.jsx`, `FAQ.jsx`, `CTA.jsx`, `index.jsx`)
- [x] **landing-page-copy/** (`Hero.jsx`, `Offerings.jsx`, `DirectResponseFramework.jsx`, `ObjectionHandling.jsx`, `Process.jsx`, `Pricing.jsx`, `FAQ.jsx`, `CTA.jsx`, `index.jsx`)
- [x] **product-descriptions/** (`Hero.jsx`, `Offerings.jsx`, `BenefitDrivenCopy.jsx`, `SkimmableBullets.jsx`, `Process.jsx`, `Pricing.jsx`, `FAQ.jsx`, `CTA.jsx`, `index.jsx`)
- [x] **sales-copywriting/** (`Hero.jsx`, `Offerings.jsx`, `VslScripts.jsx`, `ColdOutreachPitches.jsx`, `Process.jsx`, `Pricing.jsx`, `FAQ.jsx`, `CTA.jsx`, `index.jsx`)
- [x] **email-copywriting/** (`Hero.jsx`, `Offerings.jsx`, `WelcomeSequences.jsx`, `CartAbandonmentTriggers.jsx`, `Process.jsx`, `Pricing.jsx`, `FAQ.jsx`, `CTA.jsx`, `index.jsx`)
- [x] **case-study-writing/** (`Hero.jsx`, `Offerings.jsx`, `CustomerInterviews.jsx`, `MetricSpotlights.jsx`, `Process.jsx`, `Pricing.jsx`, `FAQ.jsx`, `CTA.jsx`, `index.jsx`)
- [x] **content-strategy/** (`Hero.jsx`, `Offerings.jsx`, `TopicClustering.jsx`, `FunnelMapping.jsx`, `Process.jsx`, `Pricing.jsx`, `FAQ.jsx`, `CTA.jsx`, `index.jsx`)

---

### 04.J: Pillar 7 — Content Creation

#### 04.J.0 Pillar Hub Root (`src/components/services/content-creation/`)
- [x] `Hero.jsx`, `MarketingStages.jsx`, `Offerings.jsx`, `ProductionLibrary.jsx`, `ContentVsStrategy.jsx`, `Process.jsx`, `Pricing.jsx`, `WhyChoose.jsx`, `FAQ.jsx`, `CTA.jsx`, `index.jsx`

#### 04.J.1 to 04.J.9 Sub-services (`src/components/services/content-creation/`)
- [x] **video-production/** (`Hero.jsx`, `Offerings.jsx`, `SonyCinemaGear.jsx`, `DaVinciGrading.jsx`, `Process.jsx`, `Pricing.jsx`, `FAQ.jsx`, `CTA.jsx`, `index.jsx`)
- [x] **short-form-video/** (`Hero.jsx`, `Offerings.jsx`, `HighRetentionHooks.jsx`, `DynamicCaptions.jsx`, `Process.jsx`, `Pricing.jsx`, `FAQ.jsx`, `CTA.jsx`, `index.jsx`)
- [x] **youtube-videos/** (`Hero.jsx`, `Offerings.jsx`, `EpisodeStructures.jsx`, `BrollPacing.jsx`, `Process.jsx`, `Pricing.jsx`, `FAQ.jsx`, `CTA.jsx`, `index.jsx`)
- [x] **motion-graphics-animation/** (`Hero.jsx`, `Offerings.jsx`, `AfterEffects2D3D.jsx`, `ProductExplainerDemos.jsx`, `Process.jsx`, `Pricing.jsx`, `FAQ.jsx`, `CTA.jsx`, `index.jsx`)
- [x] **graphic-design/** (`Hero.jsx`, `Offerings.jsx`, `DigitalPrintCollateral.jsx`, `BrandConsistency.jsx`, `Process.jsx`, `Pricing.jsx`, `FAQ.jsx`, `CTA.jsx`, `index.jsx`)
- [x] **logo-design/** (`Hero.jsx`, `Offerings.jsx`, `VectorMarks.jsx`, `BrandIdentitySystems.jsx`, `Process.jsx`, `Pricing.jsx`, `FAQ.jsx`, `CTA.jsx`, `index.jsx`)
- [x] **branding/** (`Hero.jsx`, `Offerings.jsx`, `BrandBooks.jsx`, `TypographyPalettes.jsx`, `Process.jsx`, `Pricing.jsx`, `FAQ.jsx`, `CTA.jsx`, `index.jsx`)
- [x] **product-photography/** (`Hero.jsx`, `Offerings.jsx`, `StudioLightingSets.jsx`, `RetouchingStandards.jsx`, `Process.jsx`, `Pricing.jsx`, `FAQ.jsx`, `CTA.jsx`, `index.jsx`)
- [x] **social-media-graphics/** (`Hero.jsx`, `Offerings.jsx`, `CarouselTemplates.jsx`, `BannerSuites.jsx`, `Process.jsx`, `Pricing.jsx`, `FAQ.jsx`, `CTA.jsx`, `index.jsx`)

---

## Phase 05: Portfolio & Projects (`/projects`)

Folder: `src/components/projects/` | View: `src/views/ProjectsPage.jsx`

- [x] **05.01 ProjectsHero** (`src/components/projects/ProjectsHero.jsx`)
- [x] **05.02 ProjectsFilterBar** (`src/components/projects/ProjectsFilterBar.jsx`)
- [x] **05.03 ProjectsWebsitesSection** (`src/components/projects/ProjectsWebsitesSection.jsx`)
- [x] **05.04 ProjectsVideoSection** (`src/components/projects/ProjectsVideoSection.jsx`)
- [x] **05.05 ProjectsSeoSection** (`src/components/projects/ProjectsSeoSection.jsx`)
- [x] **05.06 ProjectsPaidAdsSection** (`src/components/projects/ProjectsPaidAdsSection.jsx`)
- [x] **05.07 ProjectsDesignSection** (`src/components/projects/ProjectsDesignSection.jsx`)
- [x] **05.08 ProjectsWritingSection** (`src/components/projects/ProjectsWritingSection.jsx`)
- [x] **05.09 ProjectsFAQ** (`src/components/projects/ProjectsFAQ.jsx`)
- [x] **05.10 WorkArchiveModal, VideoPlayerModal & WorkImageModal** (`src/components/projects/*.jsx`)

---

## Phase 06: Case Studies (`/case-studies` & `[slug]`)

Folder: `src/components/case-studies/` | Views: `src/views/CaseStudiesPage.jsx`, `src/views/CaseStudyDetailPage.jsx`

- [x] **06.01 CaseStudiesHero** (`src/components/case-studies/CaseStudiesHero.jsx`)
- [x] **06.02 CaseStudiesFilterBar** (`src/components/case-studies/CaseStudiesFilterBar.jsx`)
- [x] **06.03 CaseStudiesFeaturedSpotlight** (`src/components/case-studies/CaseStudiesFeaturedSpotlight.jsx`)
- [x] **06.04 CaseStudiesGrid** (`src/components/case-studies/CaseStudiesGrid.jsx`)
- [x] **06.05 CaseStudiesFAQ** (`src/components/case-studies/CaseStudiesFAQ.jsx`)
- [x] **06.06 CaseStudiesCTA** (`src/components/case-studies/CaseStudiesCTA.jsx`)
- [x] **06.07 CaseStudyDetailHero** (`src/components/case-studies/CaseStudyDetailHero.jsx`)
- [x] **06.08 CaseStudyDetailSnapshot** (`src/components/case-studies/CaseStudyDetailSnapshot.jsx`)
- [x] **06.09 CaseStudyDetailBreakdown** (`src/components/case-studies/CaseStudyDetailBreakdown.jsx`)
- [x] **06.10 Deployed Infrastructure & Internal Links Section** (`src/views/CaseStudyDetailPage.jsx`)
- [x] **06.11 CaseStudyDetailNext** (`src/components/case-studies/CaseStudyDetailNext.jsx`)

---

## Phase 07: Dhaka Cinema Studio (`/studio` & Sub-routes)

### 07.A: Main Studio Hub (`/studio`)
Folder: `src/components/studio/` | View: `src/views/StudioPage.jsx`

- [x] **07.A.01 StudioHero** (`src/components/studio/StudioHero.jsx`)
  - Target: Live telemetry radar ("Studio Active"), gear badges, dual symmetrical 52px CTAs.
- [x] **07.A.02 StudioAtGlance** (`src/components/studio/StudioAtGlance.jsx`)
  - Target: Modality 3 Blueprint Matrix (facility dimensions, acoustic isolation rating, multi-cam grid).
- [x] **07.A.03 StudioOfferings** (`src/components/studio/StudioOfferings.jsx`)
  - Target: 2x3 laser card grid covering podcast, commercial video, product photography, live stream.
- [x] **07.A.04 VideoPortfolioPreview** (`src/components/projects/VideoPortfolioPreview.jsx`)
  - Target: Featured 4K cinema reel player with laser sheen container.
- [x] **07.A.05 StudioComparison** (`src/components/studio/StudioComparison.jsx`)
  - Target: Modality 2 Architectural Divided Column Band comparing studio package tiers.
- [x] **07.A.06 StudioPricing** (`src/components/studio/StudioPricing.jsx`)
  - Target: Shift rates, hourly cards, lighting & camera add-on matrix.
- [x] **07.A.07 StudioProcess** (`src/components/studio/StudioProcess.jsx`)
  - Target: 5-column architectural continuum band from booking confirmation to raw file handover.
- [x] **07.A.08 StudioWhyMatters** (`src/components/studio/StudioWhyMatters.jsx`)
  - Target: Acoustic isolation & cinematic lighting superiority vs DIY office recording.
- [x] **07.A.09 StudioLocation** (`src/components/studio/StudioLocation.jsx`)
  - Target: ECB Chattar Matikata Dhaka logistics, parking, floor access.
- [x] **07.A.10 StudioHubExtended** (`src/components/studio/StudioHubExtended.jsx`)
  - Target: Comprehensive technical gear inventory (Sony FX3/FX6, Aputure lighting, Shure SM7B).
- [x] **07.A.11 StudioFaq** (`src/components/studio/StudioFaq.jsx`)
  - Target: 1px hairline studio booking FAQ disclosure accordion.
- [x] **07.A.12 StudioBookingForm** (`src/components/studio/StudioBookingForm.jsx`)
  - Target: High-conversion studio slot selector with date/shift reservation.
- [x] **07.A.13 StudioClusterNav** (`src/components/studio/StudioClusterNav.jsx`)
  - Target: Deep-link bridge between 6 studio clusters.
- [x] **07.A.14 StudioExtendedSections** (`src/components/studio/StudioExtendedSections.jsx`)
  - Target: Additional studio facility specifications.

---

### 07.B: Studio Shared Subcomponents & Shell
Folder: `src/components/studio/` & `src/components/studio/common/`

- [x] **07.B.01 StudioSubHero** (`src/components/studio/StudioSubHero.jsx`)
- [x] **07.B.02 StudioSubOverview** (`src/components/studio/StudioSubOverview.jsx`)
- [x] **07.B.03 StudioSubDeliverables** (`src/components/studio/StudioSubDeliverables.jsx`)
- [x] **07.B.04 StudioSubProcess** (`src/components/studio/StudioSubProcess.jsx`)
- [x] **07.B.05 StudioSubPricingFactors** (`src/components/studio/StudioSubPricingFactors.jsx`)
- [x] **07.B.06 StudioSubFaq** (`src/components/studio/StudioSubFaq.jsx`)
- [x] **07.B.07 StudioSubClusterNav** (`src/components/studio/StudioSubClusterNav.jsx`)
- [x] **07.B.08 StudioServiceLayout** (`src/components/studio/common/StudioServiceLayout.jsx`)

---

### 07.C: Cluster A — Business Video
Folder: `src/components/studio/business-video/`

Each subfolder contains: `AtGlance.jsx`, `Hero.jsx`, `Offerings.jsx`, `PlanningGuide.jsx`, `Pricing.jsx`, `Process.jsx`, `RelatedServices.jsx`, `TypesOfService.jsx`, `FAQ.jsx`, `CTA.jsx`, `index.jsx`.

- [x] **07.C.1 commercial-video-production/** (`src/components/studio/business-video/commercial-video-production/`)
  - Files: `AtGlance.jsx`, `Hero.jsx`, `Offerings.jsx`, `PlanningGuide.jsx`, `Pricing.jsx`, `Process.jsx`, `RelatedServices.jsx`, `TypesOfService.jsx`, `FAQ.jsx`, `CTA.jsx`, `index.jsx`
- [x] **07.C.2 corporate-video-production/** (`src/components/studio/business-video/corporate-video-production/`)
  - Files: `AtGlance.jsx`, `Hero.jsx`, `Offerings.jsx`, `PlanningGuide.jsx`, `Pricing.jsx`, `Process.jsx`, `RelatedServices.jsx`, `TypesOfService.jsx`, `FAQ.jsx`, `CTA.jsx`, `index.jsx`
- [x] **07.C.3 promotional-video-production/** (`src/components/studio/business-video/promotional-video-production/`)
  - Files: `AtGlance.jsx`, `Hero.jsx`, `Offerings.jsx`, `PlanningGuide.jsx`, `Pricing.jsx`, `Process.jsx`, `RelatedServices.jsx`, `TypesOfService.jsx`, `FAQ.jsx`, `CTA.jsx`, `index.jsx`
- [x] **07.C.4 social-media-video-production/** (`src/components/studio/business-video/social-media-video-production/`)
  - Files: `AtGlance.jsx`, `Hero.jsx`, `Offerings.jsx`, `PlanningGuide.jsx`, `Pricing.jsx`, `Process.jsx`, `RelatedServices.jsx`, `TypesOfService.jsx`, `FAQ.jsx`, `CTA.jsx`, `index.jsx`
- [x] **07.C.5 video-marketing/** (`src/components/studio/business-video/video-marketing/`)
  - Files: `AtGlance.jsx`, `Hero.jsx`, `Offerings.jsx`, `PlanningGuide.jsx`, `Pricing.jsx`, `Process.jsx`, `RelatedServices.jsx`, `TypesOfService.jsx`, `FAQ.jsx`, `CTA.jsx`, `index.jsx`
- [x] **07.C.6 video-production/** (`src/components/studio/business-video/video-production/`)
  - Files: `AtGlance.jsx`, `Hero.jsx`, `Offerings.jsx`, `PlanningGuide.jsx`, `Pricing.jsx`, `Process.jsx`, `RelatedServices.jsx`, `TypesOfService.jsx`, `FAQ.jsx`, `CTA.jsx`, `index.jsx`

---

### 07.D: Cluster B — Live & Event Video
Folder: `src/components/studio/live-and-event/`

- [x] **07.D.1 live-streaming/** (`src/components/studio/live-and-event/live-streaming/`)
  - Files: `AtGlance.jsx`, `Hero.jsx`, `Offerings.jsx`, `PlanningGuide.jsx`, `Pricing.jsx`, `Process.jsx`, `RelatedServices.jsx`, `TypesOfService.jsx`, `FAQ.jsx`, `CTA.jsx`, `index.jsx`
- [x] **07.D.2 event-video-production/** (`src/components/studio/live-and-event/event-video-production/`)
  - Files: `AtGlance.jsx`, `Hero.jsx`, `Offerings.jsx`, `PlanningGuide.jsx`, `Pricing.jsx`, `Process.jsx`, `RelatedServices.jsx`, `TypesOfService.jsx`, `FAQ.jsx`, `CTA.jsx`, `index.jsx`

---

### 07.E: Cluster C — Story-Led & Personal Video
Folder: `src/components/studio/story-and-personal/`

- [x] **07.E.1 documentary-production/** (`src/components/studio/story-and-personal/documentary-production/`)
  - Files: `AtGlance.jsx`, `Hero.jsx`, `Offerings.jsx`, `PlanningGuide.jsx`, `Pricing.jsx`, `Process.jsx`, `RelatedServices.jsx`, `TypesOfService.jsx`, `FAQ.jsx`, `CTA.jsx`, `index.jsx`
- [x] **07.E.2 property-videography/** (`src/components/studio/story-and-personal/property-videography/`)
  - Files: `AtGlance.jsx`, `Hero.jsx`, `Offerings.jsx`, `PlanningGuide.jsx`, `Pricing.jsx`, `Process.jsx`, `RelatedServices.jsx`, `TypesOfService.jsx`, `FAQ.jsx`, `CTA.jsx`, `index.jsx`
- [x] **07.E.3 wedding-videography/** (`src/components/studio/story-and-personal/wedding-videography/`)
  - Files: `AtGlance.jsx`, `Hero.jsx`, `Offerings.jsx`, `PlanningGuide.jsx`, `Pricing.jsx`, `Process.jsx`, `RelatedServices.jsx`, `TypesOfService.jsx`, `FAQ.jsx`, `CTA.jsx`, `index.jsx`
- [x] **07.E.4 family-video-productions/** (`src/components/studio/story-and-personal/family-video-productions/`)
  - Files: `AtGlance.jsx`, `Hero.jsx`, `Offerings.jsx`, `PlanningGuide.jsx`, `Pricing.jsx`, `Process.jsx`, `RelatedServices.jsx`, `TypesOfService.jsx`, `FAQ.jsx`, `CTA.jsx`, `index.jsx`

---

### 07.F: Cluster D — Post-Production & Audio
Folder: `src/components/studio/post-production-audio/`

- [x] **07.F.1 post-production/** (`src/components/studio/post-production-audio/post-production/`)
  - Files: `AtGlance.jsx`, `Hero.jsx`, `Offerings.jsx`, `PlanningGuide.jsx`, `Pricing.jsx`, `Process.jsx`, `RelatedServices.jsx`, `TypesOfService.jsx`, `FAQ.jsx`, `CTA.jsx`, `index.jsx`
- [x] **07.F.2 video-editing/** (`src/components/studio/post-production-audio/video-editing/`)
  - Files: `AtGlance.jsx`, `Hero.jsx`, `Offerings.jsx`, `PlanningGuide.jsx`, `Pricing.jsx`, `Process.jsx`, `RelatedServices.jsx`, `TypesOfService.jsx`, `FAQ.jsx`, `CTA.jsx`, `index.jsx`
- [x] **07.F.3 voice-over/** (`src/components/studio/post-production-audio/voice-over/`)
  - Files: `AtGlance.jsx`, `Hero.jsx`, `Offerings.jsx`, `PlanningGuide.jsx`, `Pricing.jsx`, `Process.jsx`, `RelatedServices.jsx`, `TypesOfService.jsx`, `FAQ.jsx`, `CTA.jsx`, `index.jsx`
- [x] **07.F.4 green-screen-video/** (`src/components/studio/post-production-audio/green-screen-video/`)
  - Files: `AtGlance.jsx`, `Hero.jsx`, `Offerings.jsx`, `PlanningGuide.jsx`, `Pricing.jsx`, `Process.jsx`, `RelatedServices.jsx`, `TypesOfService.jsx`, `FAQ.jsx`, `CTA.jsx`, `index.jsx`

---

### 07.G: Cluster E — Studio Access & Rental
Folder: `src/components/studio/studio-access/`

- [x] **07.G.1 podcast/** (`src/components/studio/studio-access/podcast/`)
  - Files: `AtGlance.jsx`, `Hero.jsx`, `Offerings.jsx`, `PlanningGuide.jsx`, `Pricing.jsx`, `Process.jsx`, `RelatedServices.jsx`, `TypesOfService.jsx`, `FAQ.jsx`, `CTA.jsx`, `index.jsx`
- [x] **07.G.2 product-photography/** (`src/components/studio/studio-access/product-photography/`)
  - Files: `AtGlance.jsx`, `Hero.jsx`, `Offerings.jsx`, `PlanningGuide.jsx`, `Pricing.jsx`, `Process.jsx`, `RelatedServices.jsx`, `TypesOfService.jsx`, `FAQ.jsx`, `CTA.jsx`, `index.jsx`
- [x] **07.G.3 rental/** (`src/components/studio/studio-access/rental/`)
  - Files: `AtGlance.jsx`, `Hero.jsx`, `Offerings.jsx`, `PlanningGuide.jsx`, `Pricing.jsx`, `Process.jsx`, `RelatedServices.jsx`, `TypesOfService.jsx`, `FAQ.jsx`, `CTA.jsx`, `index.jsx`

---

### 07.H: Cluster F — Trust & Local Landing Hubs
Folder: `src/components/studio/trust-and-local/`

- [x] **07.H.1 portfolio/** (`src/components/studio/trust-and-local/portfolio/`)
  - Files: `AtGlance.jsx`, `Hero.jsx`, `Offerings.jsx`, `PlanningGuide.jsx`, `Pricing.jsx`, `Process.jsx`, `RelatedServices.jsx`, `TypesOfService.jsx`, `FAQ.jsx`, `CTA.jsx`, `index.jsx`
- [x] **07.H.2 process/** (`src/components/studio/trust-and-local/process/`)
  - Files: `AtGlance.jsx`, `Hero.jsx`, `Offerings.jsx`, `PlanningGuide.jsx`, `Pricing.jsx`, `Process.jsx`, `RelatedServices.jsx`, `TypesOfService.jsx`, `FAQ.jsx`, `CTA.jsx`, `index.jsx`
- [x] **07.H.3 pricing/** (`src/components/studio/trust-and-local/pricing/`)
  - Files: `AtGlance.jsx`, `Hero.jsx`, `Offerings.jsx`, `PlanningGuide.jsx`, `Pricing.jsx`, `Process.jsx`, `RelatedServices.jsx`, `TypesOfService.jsx`, `FAQ.jsx`, `CTA.jsx`, `index.jsx`
- [x] **07.H.4 equipment-and-facilities/** (`src/components/studio/trust-and-local/equipment-and-facilities/`)
  - Files: `AtGlance.jsx`, `Hero.jsx`, `Offerings.jsx`, `PlanningGuide.jsx`, `Pricing.jsx`, `Process.jsx`, `RelatedServices.jsx`, `TypesOfService.jsx`, `FAQ.jsx`, `CTA.jsx`, `index.jsx`
- [x] **07.H.5 faq/** (`src/components/studio/trust-and-local/faq/`)
  - Files: `AtGlance.jsx`, `Hero.jsx`, `Offerings.jsx`, `PlanningGuide.jsx`, `Pricing.jsx`, `Process.jsx`, `RelatedServices.jsx`, `TypesOfService.jsx`, `FAQ.jsx`, `CTA.jsx`, `index.jsx`
- [x] **07.H.6 contact/** (`src/components/studio/trust-and-local/contact/`)
  - Files: `AtGlance.jsx`, `Hero.jsx`, `Offerings.jsx`, `PlanningGuide.jsx`, `Pricing.jsx`, `Process.jsx`, `RelatedServices.jsx`, `TypesOfService.jsx`, `FAQ.jsx`, `CTA.jsx`, `index.jsx`

---

## Phase 08: Calculators & Simulators (`/calculators` & `[service]`)

Folder: `src/components/calculators/` | View: `app/calculators/page.jsx`, `app/calculators/ads/page.jsx`

- [x] **08.01 Calculators Index Hero & Grid** (`app/calculators/page.jsx`)
- [x] **08.02 QuickCalculatorBar** (`src/components/calculators/QuickCalculatorBar.jsx`)
- [x] **08.03 10 Channel Simulators** (Meta, Google, TikTok, LinkedIn, Amazon, ChatGPT, Microsoft, Pinterest, Remarketing, YouTube)
- [x] **08.04 Math Equation & Formula Disclosure Cards**
- [x] **08.05 CalculatorServiceBridge** (`src/components/calculators/CalculatorServiceBridge.jsx`)
- [x] **08.06 Unit Economics Diagnostic Summary Card**

---

## Phase 09: Blog & Authors (`/blog` & `/authors`)

Folder: `src/components/blog/` & `app/authors/`

- [x] **09.01 BlogPageClient (Blog Index)** (`src/components/blog/BlogPageClient.tsx`)
- [x] **09.02 BlogPostClientView (Article Reader)** (`src/components/blog/BlogPostClientView.tsx`)
- [x] **09.03 WordPressSidebar (Blog Directory)** (`src/components/blog/WordPressSidebar.tsx`)
- [x] **09.04 Category Archive View** (`app/blog/category/[category]/page.jsx`)
- [x] **09.05 Authors Index Directory** (`app/authors/page.tsx`)
- [x] **09.06 Author Profile Detail View** (`app/authors/[slug]/page.tsx`)

---

## Phase 10: Legal & Administrative (`/privacy`, `/terms`, `/admin/*`)

- [x] **10.01 PrivacyHero & Content** (`src/components/privacy/PrivacyHero.jsx`, `PrivacyContent.jsx`)
- [x] **10.02 TermsHero & Content** (`src/components/terms/TermsHero.jsx`, `TermsContent.jsx`)
- [x] **10.03 Admin Shell & Navigation** (`src/components/admin/AdminLayoutClient.tsx`, `AdminSidebar.tsx`, `AdminHeader.tsx`)
- [x] **10.04 Admin Analytics & Metric Cards** (`src/components/admin/MetricCard.tsx`, `RealAnalyticsDashboard.tsx`)
- [x] **10.05 Admin CMS & Media Library** (`src/components/admin/cms/WordPressEditor.tsx`, `MediaLibraryModal.tsx`)

---

## The 6-Step Execution Protocol for Every Single Component

When updating any component in this sequence:
1. **Zero Text & Data Loss:** Never delete, shorten, or rephrase any text, stat, badge, link, or bullet point.
2. **Container Standards:** Use `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` on outer bounds.
3. **Card Sheen:** Use `border border-white/[0.08] bg-[#121214] rounded-xl relative overflow-hidden before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-frame-accent/40 before:to-transparent` (or `.fc-laser-card`).
4. **Display Heading Gradient:** Use `font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[0.96] tracking-tight bg-gradient-to-b from-white via-frame-cream/95 to-frame-muted bg-clip-text text-transparent` (or `.fc-metallic-heading`).
5. **Taxonomy & Pills:** Use `.fc-frosted-pill` or `inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-mono uppercase tracking-wider text-frame-muted backdrop-blur-md`.
6. **Integrity Validation:** Run `npm run typecheck` and `npm test` after editing each component.
