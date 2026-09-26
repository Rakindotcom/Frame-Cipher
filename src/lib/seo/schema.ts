import { SITE_NAME, SITE_URL } from "./site";
import { contact, services, getServiceLandingContent } from "../../data/agency";
import {
  getServiceDisplayName,
  getServicePageBySlug,
} from "../../data/servicePages";
import { generateOrganizationSchema } from "./organization";
import { generateWebsiteSchema } from "./website";
import { generateWebPageSchema } from "./webpage";
import { generateServiceSchema } from "./service";
import { generateArticleSchema } from "./article";
import { generatePersonSchema } from "./person";
import { generateBreadcrumbSchema } from "./breadcrumb";
import { generateFAQSchema } from "./faq";
import { generateLocalBusinessSchema } from "./local-business";
import { PageType, BreadcrumbItem, FAQItem, SchemaGraph } from "@/types/seo";

export {
  SITE_URL as BASE_URL,
  generateOrganizationSchema,
  generateWebsiteSchema,
  generateWebPageSchema,
  generateServiceSchema,
  generateArticleSchema,
  generatePersonSchema,
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateLocalBusinessSchema,
};

function absoluteUrl(path: string | undefined): string {
  if (!path) return SITE_URL;
  if (path.startsWith("http")) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

function toImageObject(url: string, name = SITE_NAME) {
  const abs = absoluteUrl(url);
  return {
    "@type": "ImageObject",
    "@id": `${abs}#logo`,
    url: abs,
    caption: name,
  };
}

// Global Organization Schema
export function buildOrganizationSchema() {
  return generateOrganizationSchema();
}

// Global WebSite Schema
export function buildWebSiteSchema() {
  return generateWebsiteSchema();
}

export function buildSiteGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [buildOrganizationSchema(), buildWebSiteSchema()],
  };
}

export function buildBreadcrumbSchema(crumbs: BreadcrumbItem[] | any[], pageUrl?: string) {
  if (!crumbs || crumbs.length === 0) return null;
  return generateBreadcrumbSchema(crumbs, pageUrl);
}

export function buildFAQSchema(faqs: FAQItem[] | any[], pageUrl?: string) {
  if (!faqs || faqs.length === 0) return null;
  return generateFAQSchema(faqs, pageUrl);
}

// Complete Service Page Schema Graph (Specification Points 14, 18, 34, 45)
export function buildServiceSchema(page: any) {
  if (!page) return null;

  const pageUrl = absoluteUrl(page.fullPath).replace(/\/$/, "");
  const crumbs: BreadcrumbItem[] = [
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
  ];

  if (page.pillarSlug) {
    const pillar = getServicePageBySlug(page.pillarSlug);
    if (pillar) {
      crumbs.push({ name: getServiceDisplayName(pillar), url: pillar.fullPath });
    }
  }
  crumbs.push({ name: getServiceDisplayName(page), url: page.fullPath });

  const serviceEntity = generateServiceSchema({
    url: `${pageUrl}/`,
    name: getServiceDisplayName(page),
    serviceType: page.serviceType || getServiceDisplayName(page),
    description: page.metaDescription || page.shortDesc,
    pricing: page.pricing,
  });

  const webPageEntity = generateWebPageSchema({
    url: `${pageUrl}/`,
    name: `${getServiceDisplayName(page)} | ${SITE_NAME}`,
    description: page.metaDescription || page.shortDesc,
    aboutId: `${pageUrl}#service`,
    breadcrumbId: `${pageUrl}#breadcrumb`,
  });

  const graph: Array<Record<string, unknown>> = [
    buildOrganizationSchema(),
    buildWebSiteSchema(),
    webPageEntity,
    serviceEntity,
    buildBreadcrumbSchema(crumbs, pageUrl),
  ].filter(Boolean) as Array<Record<string, unknown>>;

  const faq = buildFAQSchema(page.faqs, pageUrl);
  if (faq) graph.push(faq);

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}

// Complete Legacy Service Page Schema Graph
export function buildLegacyServiceSchema(service: any) {
  if (!service) return null;

  const landing = getServiceLandingContent(service);
  const pageUrl = absoluteUrl(`/services/${service.slug}`).replace(/\/$/, "");

  const crumbs: BreadcrumbItem[] = [
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: service.title, url: `/services/${service.slug}` },
  ];

  const serviceEntity = generateServiceSchema({
    url: `${pageUrl}/`,
    name: service.title,
    serviceType: service.title,
    description: service.metadataDescription || service.description,
  });

  const webPageEntity = generateWebPageSchema({
    url: `${pageUrl}/`,
    name: `${service.title} | ${SITE_NAME}`,
    description: service.metadataDescription || service.description,
    aboutId: `${pageUrl}#service`,
    breadcrumbId: `${pageUrl}#breadcrumb`,
  });

  const graph: Array<Record<string, unknown>> = [
    buildOrganizationSchema(),
    buildWebSiteSchema(),
    webPageEntity,
    serviceEntity,
    buildBreadcrumbSchema(crumbs, pageUrl),
  ].filter(Boolean) as Array<Record<string, unknown>>;

  const faq = buildFAQSchema(landing?.faqs, pageUrl);
  if (faq) graph.push(faq);

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}

export interface CaseStudySchemaOptions {
  slug: string;
  title: string;
  summary: string;
  client?: string;
  image?: { src?: string; alt?: string };
  canonicalUrl?: string;
}

export function generateCaseStudySchema(study: CaseStudySchemaOptions | any) {
  if (!study) return null;
  const base = (SITE_URL || "https://framecipher.info").replace(/\/$/, "");
  const pageUrl = study.canonicalUrl || `${base}/case-studies/${study.slug}/`;
  const canonicalNoSlash = pageUrl.replace(/\/$/, "");
  const articleId = `${canonicalNoSlash}#article`;
  const webpageId = `${canonicalNoSlash}#webpage`;

  const imageUrl = study.image?.src
    ? (study.image.src.startsWith("http") ? study.image.src : `${base}${study.image.src.startsWith("/") ? study.image.src : `/${study.image.src}`}`)
    : `${base}/logo.png`;

  const articleEntity: Record<string, unknown> = {
    "@type": "Article",
    "@id": articleId,
    headline: study.title,
    description: study.summary,
    image: {
      "@type": "ImageObject",
      url: imageUrl,
    },
    author: {
      "@id": `${base}/#organization`,
    },
    publisher: {
      "@id": `${base}/#organization`,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": webpageId,
    },
  };

  if (study.client) {
    articleEntity.about = {
      "@type": "Organization",
      name: study.client,
    };
  }

  return articleEntity;
}

export function buildCaseStudySchema(study: any) {
  if (!study) return null;

  const base = (SITE_URL || "https://framecipher.info").replace(/\/$/, "");
  const pageUrl = absoluteUrl(`/case-studies/${study.slug}`).replace(/\/$/, "");
  const articleEntity = generateCaseStudySchema(study);

  const webPageEntity = generateWebPageSchema({
    url: `${pageUrl}/`,
    name: `${study.title} | ${SITE_NAME} Case Study`,
    description: study.summary,
    aboutId: `${pageUrl}#article`,
    breadcrumbId: `${pageUrl}#breadcrumb`,
  });

  const crumbs: BreadcrumbItem[] = [
    { name: "Home", url: "/" },
    { name: "Case Studies", url: "/case-studies" },
    { name: study.title, url: `/case-studies/${study.slug}` },
  ];

  const graph: Array<Record<string, unknown>> = [
    buildOrganizationSchema(),
    buildWebSiteSchema(),
    webPageEntity,
    articleEntity,
    buildBreadcrumbSchema(crumbs, pageUrl),
  ].filter(Boolean) as Array<Record<string, unknown>>;

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}

export function buildBlogPostingSchema(post: any) {
  if (!post) return null;

  const pageUrl = absoluteUrl(post.canonicalUrl || `/blog/${post.slug}`).replace(/\/$/, "");
  const authorName = post.author || "Mahedi Hasan Perves";
  const authorSlug = authorName.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
  const authorId = `${SITE_URL}/authors/${authorSlug}#person`;

  const articleEntity = generateArticleSchema({
    url: pageUrl,
    headline: post.title,
    description: post.metaDescription || post.excerpt,
    image: post.featuredImage?.url,
    datePublished: post.publishDate ? `${post.publishDate}T00:00:00.000Z` : undefined,
    dateModified: post.dateModified || new Date().toISOString(),
    authorId,
    authorName,
  });

  const personEntity = generatePersonSchema({
    name: authorName,
    slug: authorSlug,
    jobTitle: post.authorRole || "Founder & Lead Strategist",
  });

  const webPageEntity = generateWebPageSchema({
    url: `${pageUrl}/`,
    name: `${post.title} | ${SITE_NAME}`,
    description: post.metaDescription || post.excerpt,
    aboutId: `${pageUrl}#article`,
    breadcrumbId: `${pageUrl}#breadcrumb`,
  });

  const crumbs: BreadcrumbItem[] = [
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: post.title, url: `/blog/${post.slug}` },
  ];

  const graph: Array<Record<string, unknown>> = [
    buildOrganizationSchema(),
    buildWebSiteSchema(),
    personEntity,
    webPageEntity,
    articleEntity,
    buildBreadcrumbSchema(crumbs, pageUrl),
  ].filter(Boolean) as Array<Record<string, unknown>>;

  const faq = buildFAQSchema(post.faqs, pageUrl);
  if (faq) graph.push(faq);

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}

export interface PageSchemaPayload {
  pageType: PageType;
  data: {
    canonicalUrl?: string;
    title?: string;
    description?: string;
    breadcrumbs?: BreadcrumbItem[];
    faqs?: FAQItem[];
    service?: any;
    article?: any;
    author?: any;
    caseStudy?: any;
  };
}

export function generatePageSchema({ pageType, data }: PageSchemaPayload): SchemaGraph {
  const base = (SITE_URL || "https://framecipher.info").replace(/\/$/, "");
  const canonical = data.canonicalUrl || base;
  const canonicalClean = canonical.replace(/\/$/, "");
  const graph: Array<Record<string, unknown>> = [];

  const org = generateOrganizationSchema();
  const website = generateWebsiteSchema();

  switch (pageType) {
    case "homepage": {
      graph.push(org);
      graph.push(website);
      graph.push(
        generateWebPageSchema({
          url: `${base}/`,
          name: data.title || `${SITE_NAME} | 360 Marketing, Media & Technology Agency`,
          description: data.description,
        })
      );
      break;
    }

    case "services": {
      graph.push(org);
      graph.push(website);
      graph.push(
        generateWebPageSchema({
          type: "CollectionPage",
          url: `${base}/services/`,
          name: data.title || `Digital Marketing, Web & Software Development Services | ${SITE_NAME}`,
          description: data.description,
          breadcrumbId: `${base}/services#breadcrumb`,
        })
      );
      const crumbs = data.breadcrumbs || [
        { name: "Home", url: "/" },
        { name: "Services", url: "/services" },
      ];
      const bc = generateBreadcrumbSchema(crumbs, `${base}/services`);
      if (bc) graph.push(bc);
      break;
    }

    case "service":
    case "sub-service": {
      const s = data.service || {};
      const serviceName = s.name || s.title || data.title || "Service";
      const serviceDesc = s.metaDescription || s.shortDesc || s.description || data.description || "";
      const serviceUrl = s.fullPath || canonical;
      const cleanServiceUrl = (serviceUrl.startsWith("http") ? serviceUrl : `${base}${serviceUrl.startsWith("/") ? serviceUrl : `/${serviceUrl}`}`).replace(/\/$/, "");

      graph.push(org);
      graph.push(website);

      const serviceEntity = generateServiceSchema({
        url: cleanServiceUrl,
        name: serviceName,
        serviceType: s.serviceType || serviceName,
        description: serviceDesc,
        pricing: s.pricing,
      });
      graph.push(serviceEntity);

      graph.push(
        generateWebPageSchema({
          url: cleanServiceUrl,
          name: data.title || `${serviceName} | ${SITE_NAME}`,
          description: serviceDesc,
          aboutId: `${cleanServiceUrl}#service`,
          breadcrumbId: `${cleanServiceUrl}#breadcrumb`,
        })
      );

      const crumbs = data.breadcrumbs || [
        { name: "Home", url: "/" },
        { name: "Services", url: "/services" },
        { name: serviceName, url: cleanServiceUrl },
      ];
      const bc = generateBreadcrumbSchema(crumbs, cleanServiceUrl);
      if (bc) graph.push(bc);

      const faqs = data.faqs || s.faqs;
      const faqSchema = generateFAQSchema(faqs, cleanServiceUrl);
      if (faqSchema) graph.push(faqSchema);
      break;
    }

    case "blog": {
      graph.push(org);
      graph.push(website);
      graph.push(
        generateWebPageSchema({
          type: "CollectionPage",
          url: `${base}/blog/`,
          name: data.title || `Blog & Strategic Blueprints | ${SITE_NAME}`,
          description: data.description,
          breadcrumbId: `${base}/blog#breadcrumb`,
        })
      );
      const crumbs = data.breadcrumbs || [
        { name: "Home", url: "/" },
        { name: "Blog", url: "/blog" },
      ];
      const bc = generateBreadcrumbSchema(crumbs, `${base}/blog`);
      if (bc) graph.push(bc);
      break;
    }

    case "article": {
      const art = data.article || {};
      const artUrl = (art.canonicalUrl || canonical).replace(/\/$/, "");

      graph.push(org);
      graph.push(website);

      const authorName = art.author || "Mahedi Hasan Perves";
      const authorSlug = authorName.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
      const authorId = `${base}/authors/${authorSlug}#person`;

      const articleEntity = generateArticleSchema({
        url: artUrl,
        headline: art.title || data.title || "Article",
        description: art.metaDescription || art.excerpt || data.description || "",
        image: art.featuredImage?.url || art.image,
        datePublished: art.publishDate ? `${art.publishDate}T00:00:00.000Z` : undefined,
        dateModified: art.dateModified || new Date().toISOString(),
        authorId,
        authorName,
      });
      graph.push(articleEntity);

      graph.push(
        generatePersonSchema({
          name: authorName,
          slug: authorSlug,
          jobTitle: art.authorRole || "Founder & Lead Strategist",
        })
      );

      graph.push(
        generateWebPageSchema({
          url: artUrl,
          name: data.title || `${art.title} | ${SITE_NAME}`,
          description: art.metaDescription || art.excerpt,
          aboutId: `${artUrl}#article`,
          breadcrumbId: `${artUrl}#breadcrumb`,
        })
      );

      const crumbs = data.breadcrumbs || [
        { name: "Home", url: "/" },
        { name: "Blog", url: "/blog" },
        { name: art.title, url: artUrl },
      ];
      const bc = generateBreadcrumbSchema(crumbs, artUrl);
      if (bc) graph.push(bc);

      const faqs = data.faqs || art.faqs;
      const faqSchema = generateFAQSchema(faqs, artUrl);
      if (faqSchema) graph.push(faqSchema);
      break;
    }

    case "case-studies": {
      graph.push(org);
      graph.push(website);
      graph.push(
        generateWebPageSchema({
          type: "CollectionPage",
          url: `${base}/case-studies/`,
          name: data.title || `Case Studies | ${SITE_NAME}`,
          description: data.description,
          breadcrumbId: `${base}/case-studies#breadcrumb`,
        })
      );
      const crumbs = data.breadcrumbs || [
        { name: "Home", url: "/" },
        { name: "Case Studies", url: "/case-studies" },
      ];
      const bc = generateBreadcrumbSchema(crumbs, `${base}/case-studies`);
      if (bc) graph.push(bc);
      break;
    }

    case "case-study": {
      const cs = data.caseStudy || {};
      const csUrl = (cs.canonicalUrl || canonical).replace(/\/$/, "");

      graph.push(org);
      graph.push(website);

      const csEntity = generateCaseStudySchema({
        slug: cs.slug,
        title: cs.title || data.title,
        summary: cs.summary || data.description,
        client: cs.client,
        image: cs.image,
        canonicalUrl: csUrl,
      });
      if (csEntity) graph.push(csEntity);

      graph.push(
        generateWebPageSchema({
          url: csUrl,
          name: data.title || `${cs.title} | ${SITE_NAME} Case Study`,
          description: cs.summary,
          aboutId: `${csUrl}#article`,
          breadcrumbId: `${csUrl}#breadcrumb`,
        })
      );

      const crumbs = data.breadcrumbs || [
        { name: "Home", url: "/" },
        { name: "Case Studies", url: "/case-studies" },
        { name: cs.title, url: csUrl },
      ];
      const bc = generateBreadcrumbSchema(crumbs, csUrl);
      if (bc) graph.push(bc);
      break;
    }

    case "about": {
      graph.push(org);
      graph.push(website);
      graph.push(
        generateWebPageSchema({
          type: "AboutPage",
          url: `${base}/about/`,
          name: data.title || `About ${SITE_NAME}`,
          description: data.description,
          breadcrumbId: `${base}/about#breadcrumb`,
        })
      );
      const crumbs = data.breadcrumbs || [
        { name: "Home", url: "/" },
        { name: "About", url: "/about" },
      ];
      const bc = generateBreadcrumbSchema(crumbs, `${base}/about`);
      if (bc) graph.push(bc);
      break;
    }

    case "contact": {
      graph.push(org);
      graph.push(website);
      graph.push(
        generateWebPageSchema({
          type: "ContactPage",
          url: `${base}/contact/`,
          name: data.title || `Contact | ${SITE_NAME}`,
          description: data.description,
          breadcrumbId: `${base}/contact#breadcrumb`,
        })
      );
      const crumbs = data.breadcrumbs || [
        { name: "Home", url: "/" },
        { name: "Contact", url: "/contact" },
      ];
      const bc = generateBreadcrumbSchema(crumbs, `${base}/contact`);
      if (bc) graph.push(bc);
      break;
    }

    case "author": {
      const aut = data.author || {};
      const autSlug = aut.slug || (aut.name ? aut.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "") : "author");
      const autUrl = `${base}/authors/${autSlug}/`;

      graph.push(org);
      graph.push(
        generatePersonSchema({
          name: aut.name || "Author",
          slug: autSlug,
          jobTitle: aut.jobTitle,
          description: aut.shortBio || aut.bio,
          image: aut.image?.url,
          worksFor: aut.worksFor,
          sameAs: aut.socialLinks ? Object.values(aut.socialLinks) as string[] : undefined,
          knowsAbout: aut.tags,
        })
      );

      graph.push(
        generateWebPageSchema({
          type: "ProfilePage",
          url: autUrl,
          name: data.title || `${aut.name} | ${SITE_NAME}`,
          description: aut.shortBio || aut.bio,
          breadcrumbId: `${base}/authors/${autSlug}#breadcrumb`,
        })
      );

      const crumbs = data.breadcrumbs || [
        { name: "Home", url: "/" },
        { name: "Authors", url: "/authors" },
        { name: aut.name, url: `/authors/${autSlug}` },
      ];
      const bc = generateBreadcrumbSchema(crumbs, autUrl);
      if (bc) graph.push(bc);
      break;
    }

    case "local-service": {
      graph.push(org);
      graph.push(website);
      graph.push(generateLocalBusinessSchema());
      const s = data.service || {};
      const serviceName = s.name || s.title || data.title || "Local Service";
      const cleanServiceUrl = (canonical.startsWith("http") ? canonical : `${base}${canonical.startsWith("/") ? canonical : `/${canonical}`}`).replace(/\/$/, "");

      graph.push(
        generateServiceSchema({
          url: cleanServiceUrl,
          name: serviceName,
          serviceType: s.serviceType || serviceName,
          description: s.description || data.description || "",
        })
      );

      graph.push(
        generateWebPageSchema({
          url: cleanServiceUrl,
          name: data.title || `${serviceName} | ${SITE_NAME}`,
          description: data.description,
          aboutId: `${cleanServiceUrl}#service`,
          breadcrumbId: `${cleanServiceUrl}#breadcrumb`,
        })
      );

      const crumbs = data.breadcrumbs || [
        { name: "Home", url: "/" },
        { name: "Services", url: "/services" },
        { name: serviceName, url: cleanServiceUrl },
      ];
      const bc = generateBreadcrumbSchema(crumbs, cleanServiceUrl);
      if (bc) graph.push(bc);

      const faqs = data.faqs || s.faqs;
      const faqSchema = generateFAQSchema(faqs, cleanServiceUrl);
      if (faqSchema) graph.push(faqSchema);
      break;
    }

    default: {
      graph.push(org);
      graph.push(website);
      graph.push(
        generateWebPageSchema({
          url: canonical,
          name: data.title || SITE_NAME,
          description: data.description,
        })
      );
      break;
    }
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}
