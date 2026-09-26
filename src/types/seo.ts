/**
 * Framecipher SEO & Structured Data Types
 * Implementation Specification Version 1.0
 */

export type PageType =
  | "homepage"
  | "services"
  | "service"
  | "sub-service"
  | "blog"
  | "article"
  | "case-studies"
  | "case-study"
  | "about"
  | "contact"
  | "author"
  | "local-service"
  | "legal";

export interface PageSEO {
  title: string;
  description: string;
  canonical: string;
  noindex?: boolean;
  ogImage?: {
    url: string;
    width: number;
    height: number;
    alt: string;
  };
  type: "website" | "service" | "article" | "local-service";
  author?: { name: string; url?: string };
  publishedTime?: string;
  modifiedTime?: string;
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  id?: string;
}

export interface ServiceDataModel {
  slug: string;
  name: string;
  type?: "service" | "sub-service";
  seo?: {
    title: string;
    description: string;
    canonical?: string;
  };
  h1?: string;
  breadcrumbs?: BreadcrumbItem[];
  faq?: FAQItem[];
  pricing?: {
    intro?: string;
    table?: Array<{ name: string; price: string }>;
  };
}

export interface SchemaGraph {
  "@context": string;
  "@graph": Array<Record<string, unknown>>;
  [key: string]: unknown;
}
