import { countries, findAssessment, findCountry } from "../data/catalog.ts";

export const siteMetadata = {
  origin: "https://privacyguide.africa",
  name: "Privacy Guide Africa",
  image: "https://privacyguide.africa/images/social/privacy-guide-africa-v1.png",
  imageAlt: "Privacy Guide Africa — Data protection made human, for humans. Layered blue artwork of Africa.",
  imageWidth: "1730",
  imageHeight: "909",
};
const pages: Record<string, { title: string; description: string }> = {
  "/": { title: "Privacy guidance for African organisations", description: "Explore free country-specific privacy assessments and practical next steps for your organisation." },
  "/countries": { title: "Choose your country", description: "Find data protection assessments for Ghana, Nigeria, Rwanda, South Africa and Uganda." },
  "/about": { title: "About us", description: "Learn about the people and purpose behind PrivacyGuide.Africa." },
  "/privacy": { title: "Privacy notice", description: "Read how PrivacyGuide.Africa uses information, including analytics, retention and your privacy rights." },
  "/legal-notice": { title: "Legal notice", description: "Understand the scope and limitations of the guidance on PrivacyGuide.Africa." },
};
// Concise search/share titles; assessment headings and legal copy remain unchanged.
const assessmentTitles: Record<string, string> = {
  "/rwanda-applicability": "Law applicability",
  "/rwanda-controller-processor": "Controller or processor",
  "/rwanda-registration": "Data protection registration",
  "/rwanda-dpia": "DPIA assessment",
  "/representative-assessment": "Local representative",
  "/dpo-assessment": "DPO appointment",
  "/uganda-registration": "Data protection registration",
  "/uganda-annual-compliance": "Annual compliance report",
  "/uganda-dpia": "DPIA assessment",
  "/uganda-data-subject-rights": "Data subject rights",
  "/uganda-dpo": "DPO appointment",
  "/south-africa-prior-authorisation": "Prior authorisation",
  "/south-africa-responsible-party": "Responsible party or operator",
  "/south-africa-data-subject-rights": "Data subject rights",
  "/south-africa-special-information": "Special personal information",
  "/south-africa-children-information": "Children’s personal information",
  "/south-africa-information-officer": "Information Officer",
  "/ghana-registration": "Data protection registration",
  "/ghana-dpo": "Data Protection Supervisor",
};
export const metadataPaths = [
  ...Object.keys(pages),
  ...countries.filter(country => country.status === "available").flatMap(country => [
    `/country/${country.id}`, ...country.modules.map(module => module.link),
  ]),
];
export const pageMetadata = (pathname: string) => {
  const normalized = pathname.split(/[?#]/)[0].replace(/\/+$/, "") || "/";
  const path = normalized === "/dpia-assessment" ? "/rwanda-dpia" : normalized;
  const assessment = findAssessment(path);
  const country = path.startsWith("/country/") ? findCountry(path.slice(9)) : undefined;
  const known = Boolean(assessment || country?.status === "available" || pages[path]);
  const info = assessment
    ? { title: `${assessmentTitles[path] || assessment.module.title} · ${assessment.country.name}`, description: assessment.module.description }
    : country?.status === "available"
      ? { title: `${country.name} privacy assessments`, description: `Explore ${country.name}'s data protection assessment modules and guidance under ${country.lawName}.` }
      : pages[path] || { title: "Page not found", description: "Choose an available country to find a privacy assessment." };
  return {
    title: `${info.title} | PrivacyGuide.Africa`, description: info.description,
    canonical: known ? `${siteMetadata.origin}${path === "/" ? "/" : `${path}/`}` : null,
    robots: known && (!assessment || assessment.module.status === "available") ? "index, follow" : "noindex, follow",
  };
};
export const metadataTags = (info: ReturnType<typeof pageMetadata>): ["name" | "property", string, string][] => [
  ["name", "description", info.description],
  ["name", "robots", info.robots],
  ["property", "og:type", "website"],
  ["property", "og:site_name", siteMetadata.name],
  ["property", "og:title", info.title],
  ["property", "og:description", info.description],
  ["property", "og:url", info.canonical || ""],
  ["property", "og:image", siteMetadata.image],
  ["property", "og:image:type", "image/png"],
  ["property", "og:image:width", siteMetadata.imageWidth],
  ["property", "og:image:height", siteMetadata.imageHeight],
  ["property", "og:image:alt", siteMetadata.imageAlt],
  ["name", "twitter:card", "summary_large_image"],
  ["name", "twitter:title", info.title],
  ["name", "twitter:description", info.description],
  ["name", "twitter:image", siteMetadata.image],
  ["name", "twitter:image:alt", siteMetadata.imageAlt],
];
