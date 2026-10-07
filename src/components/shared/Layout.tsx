import { GuidanceReferences } from "./GuidanceReferences";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, ChevronRight, FileText, Printer } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/shared/Footer";
import { findAssessment, findCountry } from "@/data/catalog";
import { pageMetadata } from "@/lib/page-metadata";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const { pathname: rawPath } = useLocation();
  const pathname = rawPath.replace(/\/+$/, "") || "/";
  const assessment = findAssessment(pathname);
  const country = assessment?.country || (pathname.startsWith("/country/") ? findCountry(pathname.slice(9)) : undefined);
  const infoTitle = ({ "/about": "About us", "/privacy": "Privacy Notice", "/legal-notice": "Legal Notice" } as Record<string, string>)[pathname];
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
  const content = <>{children}{assessment && ["/uganda-registration", "/uganda-annual-compliance", "/uganda-data-subject-rights", "/south-africa-data-subject-rights"].includes(pathname) && <div className="custom-result-tools"><Button onClick={() => window.print()}><Printer aria-hidden="true" />Print or save as PDF</Button><GuidanceReferences /></div>}</>;
  return <div className="site-layout">
    <a href="#main-content" className="skip-link" onClick={() => document.getElementById("main-content")?.focus()}>Skip to main content</a>
    <Navbar />
    <main id="main-content" tabIndex={-1} className="flex-grow min-w-0">
      {pathname !== "/" && <nav aria-label="Breadcrumb" className="page-container breadcrumbs print:hidden"><ol>
        <li><Link to="/">Home</Link></li><li aria-hidden="true"><ChevronRight size={13} /></li>
        {infoTitle ? <li aria-current="page">{infoTitle}</li> : <>
          <li>{pathname === "/countries" ? <span aria-current="page">Countries</span> : <Link to="/countries">Countries</Link>}</li>
          {country?.status === "available" && <><li aria-hidden="true"><ChevronRight size={13} /></li><li>{assessment ? <Link to={`/country/${country.id}`}>{country.name}</Link> : <span aria-current="page">{country.name}</span>}</li></>}
          {assessment && <><li aria-hidden="true"><ChevronRight size={13} /></li><li aria-current="page">{assessment.module.title}</li></>}
        </>}
      </ol></nav>}
      {assessment ? <div className="page-container assessment-shell">
        <aside className="assessment-sidebar print:hidden" aria-label={`${assessment.country.name} assessment navigation`}>
          <Link className="sidebar-back" to={`/country/${assessment.country.id}`}><ArrowLeft aria-hidden="true" size={16} />All {assessment.country.name} modules</Link>
          <div className="sidebar-country"><span aria-hidden="true">{assessment.country.flagEmoji}</span><div><strong>{assessment.country.name}</strong><p>{assessment.country.lawName}</p></div></div>
          <nav aria-label="Country assessments">{assessment.country.modules.map(module => module.status === "available" && <Link key={module.link} to={module.link} aria-current={assessment.module.link === module.link ? "page" : undefined}><FileText aria-hidden="true" size={17} /><span>{module.title}</span></Link>)}</nav>
          {assessment.country.regulator && <a className="sidebar-regulator" href={assessment.country.regulator.url} target="_blank" rel="noopener noreferrer">Regulator resources <ArrowUpRight aria-hidden="true" size={15} /></a>}
        </aside>
        <div className="assessment-body">{content}</div>
      </div> : content}
    </main>
    <Footer />
  </div>;
};
