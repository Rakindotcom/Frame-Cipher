import { SITE_URL } from "./site";
import { FAQItem } from "@/types/seo";

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
