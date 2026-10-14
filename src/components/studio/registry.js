// Studio Service Component Registry
// Cluster A: Business Video
import VideoProductionService from './business-video/video-production'
import CorporateVideoProductionService from './business-video/corporate-video-production'
import CommercialVideoProductionService from './business-video/commercial-video-production'
import PromotionalVideoProductionService from './business-video/promotional-video-production'
import VideoMarketingService from './business-video/video-marketing'
import SocialMediaVideoProductionService from './business-video/social-media-video-production'

// Cluster B: Live & Event
import LiveStreamingService from './live-and-event/live-streaming'
import EventVideoProductionService from './live-and-event/event-video-production'

// Cluster C: Story-Led & Personal
import DocumentaryProductionService from './story-and-personal/documentary-production'
import PropertyVideographyService from './story-and-personal/property-videography'
import WeddingVideographyService from './story-and-personal/wedding-videography'
import FamilyVideoProductionsService from './story-and-personal/family-video-productions'

// Cluster D: Post-Production & Audio
import PostProductionService from './post-production-audio/post-production'
import VideoEditingService from './post-production-audio/video-editing'
import VoiceOverService from './post-production-audio/voice-over'
import GreenScreenVideoService from './post-production-audio/green-screen-video'

// Cluster E: Studio Access
import PodcastService from './studio-access/podcast'
import ProductPhotographyService from './studio-access/product-photography'
import RentalService from './studio-access/rental'

// Trust and Local Layer
import PortfolioService from './trust-and-local/portfolio'
import ProcessService from './trust-and-local/process'
import PricingService from './trust-and-local/pricing'
import EquipmentAndFacilitiesService from './trust-and-local/equipment-and-facilities'
import FaqService from './trust-and-local/faq'
import ContactService from './trust-and-local/contact'

export const studioServiceRegistry = {
  // Cluster A
  'video-production': VideoProductionService,
  'corporate-video-production': CorporateVideoProductionService,
  'commercial-video-production': CommercialVideoProductionService,
  'promotional-video-production': PromotionalVideoProductionService,
  'video-marketing': VideoMarketingService,
  'social-media-video-production': SocialMediaVideoProductionService,

  // Cluster B
  'live-streaming': LiveStreamingService,
  'event-video-production': EventVideoProductionService,

  // Cluster C
  'documentary-production': DocumentaryProductionService,
  'property-videography': PropertyVideographyService,
  'wedding-videography': WeddingVideographyService,
  'family-video-productions': FamilyVideoProductionsService,

  // Cluster D
  'post-production': PostProductionService,
  'video-editing': VideoEditingService,
  'voice-over': VoiceOverService,
  'green-screen-video': GreenScreenVideoService,

  // Cluster E
  'podcast': PodcastService,
  'product-photography': ProductPhotographyService,
  'rental': RentalService,

  // Trust & Local Layer
  'portfolio': PortfolioService,
  'process': ProcessService,
  'pricing': PricingService,
  'equipment-and-facilities': EquipmentAndFacilitiesService,
  'faq': FaqService,
  'contact': ContactService,
}

export function getStudioComponent(slug) {
  if (!slug) return null
  return studioServiceRegistry[slug] || null
}

export {
  VideoProductionService,
  CorporateVideoProductionService,
  CommercialVideoProductionService,
  PromotionalVideoProductionService,
  VideoMarketingService,
  SocialMediaVideoProductionService,
  LiveStreamingService,
  EventVideoProductionService,
  DocumentaryProductionService,
  PropertyVideographyService,
  WeddingVideographyService,
  FamilyVideoProductionsService,
  PostProductionService,
  VideoEditingService,
  VoiceOverService,
  GreenScreenVideoService,
  PodcastService,
  ProductPhotographyService,
  RentalService,
  PortfolioService,
  ProcessService,
  PricingService,
  EquipmentAndFacilitiesService,
  FaqService,
  ContactService,
}
