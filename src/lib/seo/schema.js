import { siteUrl, contact } from "../../data/agency";

export const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || siteUrl || "https://framecipher.info";

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    name: "Frame Cipher",
    url: BASE_URL,
    logo: `${BASE_URL}/logo.png`,
    description: "Frame Cipher is a 360 marketing, media, branding, website, software, and growth systems agency in Bangladesh.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Mirpur 14",
      addressLocality: "Dhaka",
      addressCountry: "BD",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: contact.phoneHref,
      contactType: "Customer Service",
      email: contact.email,
    },
    founder: {
      "@type": "Person",
      name: "Mahedi Hasan Perves",
      jobTitle: "Founder & Lead Strategist",
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "American International University-Bangladesh (AIUB)",
        url: "https://aiub.edu",
      },
    },
  };
}

export function buildBlogPostingSchema(post) {
  if (!post) return null;

  const imageUrl = post.featuredImage?.url
    ? post.featuredImage.url.startsWith("http")
      ? post.featuredImage.url
      : `${BASE_URL}${post.featuredImage.url}`
    : `${BASE_URL}/logo.png`;

  return {
    "@context": "https://schema.org",
    "@type": post.schemaType || "BlogPosting",
    "@id": `${post.canonicalUrl || `${BASE_URL}/blog/${post.slug}`}#article`,
    headline: post.title,
    description: post.metaDescription || post.excerpt,
    image: imageUrl,
    datePublished: post.publishDate ? `${post.publishDate}T00:00:00.000Z` : undefined,
    dateModified: new Date().toISOString(),
    author: {
      "@type": "Person",
      name: post.author || "Mahedi Hasan Perves",
      jobTitle: post.authorRole || "Founder & Lead Strategist",
      url: `${BASE_URL}/about`,
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "American International University-Bangladesh (AIUB)",
        url: "https://aiub.edu",
      },
    },
    publisher: {
      "@type": "Organization",
      name: "Frame Cipher",
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": post.canonicalUrl || `${BASE_URL}/blog/${post.slug}`,
    },
  };
}

export function buildFAQSchema(faqs) {
  if (!faqs || faqs.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function buildBreadcrumbSchema(crumbs) {
  if (!crumbs || crumbs.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: crumb.name,
      item: crumb.url.startsWith("http") ? crumb.url : `${BASE_URL}${crumb.url}`,
    })),
  };
}
