import { findAssessment, findCountry } from "../data/catalog.ts";

const pages: Record<string, { title: string; description: string }> = {
  "/": { title: "Privacy guidance for African organisations", description: "Explore free country-specific privacy assessments and practical next steps for your organisation." },
  "/countries": { title: "Choose your country", description: "Find data protection assessments for Ghana, Nigeria, Rwanda, South Africa and Uganda." },
  "/about": { title: "About PrivacyGuide.Africa", description: "Learn about the people and purpose behind PrivacyGuide.Africa." },
  "/privacy": { title: "Privacy notice", description: "Read how PrivacyGuide.Africa describes its use of data and third-party services." },
  "/legal-notice": { title: "Legal notice", description: "Understand the scope and limitations of the guidance on PrivacyGuide.Africa." },
};
export const pageMetadata = (pathname: string) => {
  const path = pathname.replace(/\/+$/, "") || "/";
  const assessment = findAssessment(path);
  const country = path.startsWith("/country/") ? findCountry(path.slice(9)) : undefined;
  const info = assessment
    ? { title: `${assessment.module.title} · ${assessment.country.name}`, description: assessment.module.description }
    : country?.status === "available"
      ? { title: `${country.name} privacy assessments`, description: `Explore ${country.name}'s data protection assessment modules and guidance under ${country.lawName}.` }
      : pages[path] || { title: "Page not found", description: "Choose an available country to find a privacy assessment." };
  return { title: `${info.title} | PrivacyGuide.Africa`, description: info.description, canonical: `https://privacyguide.africa${path === "/dpia-assessment" ? "/rwanda-dpia" : path}` };
};
