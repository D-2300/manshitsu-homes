/**
 * JSON-LD 構造化データのヘルパー。
 * 各ページで <JsonLd data={...} /> を返す。React がページに script タグを埋め込む。
 *
 * schema.org 準拠: https://schema.org/
 */

import { createElement } from "react";

export function JsonLd({ data }: { data: unknown }) {
  return createElement("script", {
    type: "application/ld+json",
    dangerouslySetInnerHTML: { __html: JSON.stringify(data) },
  });
}

const BASE_URL = "https://manshitsu.homes";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "満室デザインLABO",
  url: BASE_URL,
  logo: `${BASE_URL}/images/logo-manshitsu-h-gold.webp`,
  sameAs: [],
  description: "宮城のアパート投資を、物件探しから手伝う内装屋。",
  telephone: "+81-80-6900-3314",
  address: {
    "@type": "PostalAddress",
    addressCountry: "JP",
    addressRegion: "宮城県",
    addressLocality: "仙台市",
  },
};

export function articleSchema(article: {
  slug: string;
  title: string;
  date: string;
  heroImage: string;
  leadText: string;
  metaDescription?: string;
  keywords?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.metaDescription || article.leadText,
    image: article.heroImage.startsWith("http")
      ? article.heroImage
      : `${BASE_URL}${article.heroImage}`,
    datePublished: article.date,
    dateModified: article.date,
    author: {
      "@type": "Organization",
      name: "満室デザインLABO",
      url: BASE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "満室デザインLABO",
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/images/logo-manshitsu-h-gold.webp`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BASE_URL}/articles/${article.slug}`,
    },
    keywords: article.keywords?.join(", "),
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${BASE_URL}${item.url}`,
    })),
  };
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
