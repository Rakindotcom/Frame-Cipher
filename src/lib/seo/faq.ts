import { SITE_URL } from "./site";
import { FAQItem } from "@/types/seo";

/**
 * FAQ entries exist in two shapes across the codebase:
 *   { question, answer }  <- servicePagesData.json (the schema source of truth)
 *   { q, a }              <- legacy inline arrays inside service FAQ components
 *
 * Resolving to both key styles lets a component render `faq.question` or `faq.q`
 * interchangeably, so the visible list and the FAQPage schema can never diverge.
 */
export function resolveFaqs<T extends Record<string, any>>(
  service: { faqs?: T[] } | undefined | null,
  fallback?: T[] | null,
): T[] {
  const source =
    service && Array.isArray(service.faqs) && service.faqs.length > 0
      ? service.faqs
      : fallback;

  if (!Array.isArray(source) || source.length === 0) return [];

  return source
    .filter((faq) => faq && (faq.question || faq.q) && (faq.answer || faq.a))
    .map((faq) => ({
      ...faq,
      question: faq.question ?? faq.q,
      answer: faq.answer ?? faq.a,
      q: faq.q ?? faq.question,
      a: faq.a ?? faq.answer,
    })) as T[];
}

export function generateFAQSchema(faqs: FAQItem[] | undefined | null, pageUrl?: string) {
  if (!faqs || !Array.isArray(faqs) || faqs.length === 0) return null;

  const validFaqs = faqs.filter((f) => f && f.question && f.answer);
  if (validFaqs.length === 0) return null;

  const base = (SITE_URL || "https://framecipher.info").replace(/\/$/, "");
  const canonical = pageUrl
    ? (pageUrl.startsWith("http") ? pageUrl : `${base}${pageUrl.startsWith("/") ? pageUrl : `/${pageUrl}`}`)
    : base;

  const faqId = `${canonical.replace(/\/$/, "")}#faq`;

  return {
    "@type": "FAQPage",
    "@id": faqId,
    mainEntity: validFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question.trim(),
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer.trim(),
      },
    })),
  };
}
