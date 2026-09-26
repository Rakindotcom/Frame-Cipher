import Hero from './Hero'
import Overview from './Overview'
import Offerings from './Offerings'
import Groups from './Groups'
import WhyMatters from './WhyMatters'
import WhoFor from './WhoFor'
import Process from './Process'
import WhyChoose from './WhyChoose'
import Pricing from './Pricing'
import Timeline from './Timeline'
import Guarantee from './Guarantee'
import ServiceAreas from './ServiceAreas'
import FAQ from './FAQ'
import CTA from './CTA'
import { TypeMarquee } from '../../../Kinetic'

const marqueeItems = [
  'Facebook Page Management',
  'Page Optimization',
  'Content & Reels',
  'Messenger Workflows',
  'Comment & Review Care',
  'Moderation',
  'Reporting',
]

export default function SocialMediaManagementFacebookService() {
  return (
    <main className="service-page bg-frame-bg text-frame-fg min-h-screen">
      <Hero />
      <TypeMarquee items={marqueeItems} slow />
      <Overview />
      <Offerings />
      <Groups />
      <WhyMatters />
      <WhoFor />
      <Process />
      <WhyChoose />
      <Pricing />
      <Timeline />
      <Guarantee />
      <ServiceAreas />
      <FAQ />
      <CTA />
    </main>
  )
}

export { Hero, Overview, Offerings, Process, Pricing, Timeline, Guarantee, ServiceAreas, FAQ, CTA }
