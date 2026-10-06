import { GuidanceReferences } from "./GuidanceReferences";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/shared/Footer";
import { findAssessment, findCountry } from "@/data/catalog";
import { pageMetadata } from "@/lib/page-metadata";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const { pathname: rawPath } = useLocation();
  const pathname = rawPath.replace(/\/+$/, "") || "/";
  const assessment = findAssessment(pathname);
  const country = assessment?.country || (pathname.startsWith("/country/") ? findCountry(pathname.slice(9)) : undefined);
  useEffect(() => {
    const metadata = pageMetadata(pathname);
    document.title = metadata.title;
    for (const [selector, value] of [
      ['meta[name="description"]', metadata.description],
      ['meta[property="og:title"]', metadata.title],
      ['meta[property="og:description"]', metadata.description],
      ['meta[property="og:url"]', metadata.canonical],
    ]) document.querySelector(selector)?.setAttribute("content", value);
    document.querySelector('link[rel="canonical"]')?.setAttribute("href", metadata.canonical);
  }, [pathname]);
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <a href="#main-content" className="skip-link" onClick={() => document.getElementById("main-content")?.focus()}>Skip to main content</a>
      <Navbar />
      <main id="main-content" tabIndex={-1} className="flex-grow min-w-0">
        {pathname !== "/" && <nav aria-label="Breadcrumb" className="mx-auto max-w-6xl px-4 pt-6 sm:px-6 print:hidden">
          <ol className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-slate-600">
            <li><Link to="/" className="text-blue-800 underline">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li>{pathname === "/countries" ? <span aria-current="page">Countries</span> : <Link to="/countries" className="text-blue-800 underline">Countries</Link>}</li>
            {country?.status === "available" && <><li aria-hidden="true">/</li><li>{assessment ? <Link to={`/country/${country.id}`} className="text-blue-800 underline">{country.name}</Link> : <span aria-current="page">{country.name}</span>}</li></>}
            {assessment && <><li aria-hidden="true">/</li><li aria-current="page">{assessment.module.title}</li></>}
          </ol>
        </nav>}
        {children}
        {assessment && ["/uganda-registration", "/uganda-annual-compliance", "/uganda-data-subject-rights", "/south-africa-data-subject-rights", "/ghana-registration"].includes(pathname) && <div className="mx-auto max-w-4xl px-6 pb-10 space-y-6">
          <Button variant="outline" onClick={() => window.print()}>Print or save as PDF</Button>
          <GuidanceReferences />
        </div>}
      </main>
      <Footer />
    </div>
  );
};
