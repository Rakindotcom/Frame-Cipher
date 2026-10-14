import StudioServiceLayout from '../../common/StudioServiceLayout'

export default function VideoMarketingService({ service }) {
  const customData = {
    h1: 'Video Marketing Services for Businesses in Dhaka',
    lead: 'Video marketing means using video at each stage of how customers find, evaluate and choose a business. FrameCipher Studio helps with the production side: planning content, recording it in the studio and editing it into formats you can publish across your channels. We connect creative studio filming directly into your full-funnel customer journey.',
    whatIncluded: [
      'Buyer journey mapping: Top-of-funnel (awareness), Mid-funnel (consideration), Bottom-funnel (decision)',
      'Scripting specifically engineered for click-through rate (CTR) and watch time',
      'Batch studio recording sessions in Dhaka to produce monthly content libraries',
      'Multi-platform video assets (YouTube, Meta Ads, LinkedIn, TikTok)',
      'A/B testing creative variations with alternative opening hooks',
      'Metadata, thumbnail design, and chapter optimization guidance'
    ],
    serviceTypes: [
      { title: 'Brand & Service Introductions', desc: 'Top-of-funnel videos answering who you are and why you matter.' },
      { title: 'Product Demonstrations & Explainers', desc: 'Mid-funnel educational videos resolving buyer hesitation.' },
      { title: 'Customer & Expert Interviews', desc: 'Credibility assets demonstrating proof and peer validation.' },
      { title: 'Short-Form Social Content Series', desc: 'Repeatable vertical clips keeping your brand top-of-mind daily.' },
      { title: 'Podcast & Keynote Repurposing', desc: 'Turning long-form talks into 15+ actionable short-form clips.' }
    ],
    whyMatters: 'Filming a beautiful video is meaningless if it fails to reach the right audience or trigger commercial action. When shooting and editing are planned together, one session can produce a main video and several shorter pieces. That makes regular publishing more practical for small teams.',
    howRuns: [
      'Map commercial search queries and buyer pain points.',
      'Plan monthly batch shoots with structured topic roadmaps.',
      'Filming at FrameCipher Studio with multi-camera angles and sound.',
      'Post-production editing with captions, B-roll, and hooks.',
      'Asset delivery organized by marketing funnel stage.'
    ],
    costFactors: [
      'Scope of marketing content roadmap and volume of deliverables',
      'Batch session frequency (monthly retainer vs single batch)',
      'Number of A/B test hook variations per core video'
    ],
    linksOut: [
      { label: 'Social Media Video Production', href: '/studio/social-media-video-production/' },
      { label: 'Promotional Video Production', href: '/studio/promotional-video-production/' },
      { label: 'Post-Production Services', href: '/studio/post-production/' },
      { label: 'Digital Marketing Agency', href: '/services/360-marketing/' },
    ]
  }

  return <StudioServiceLayout service={service} {...customData} />
}
