import { moduleIcon } from "@/lib/module-icon";
import { GuidanceReferences } from "./GuidanceReferences";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, ChevronRight, ChevronDown, Printer } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/shared/Footer";
import { findAssessment, findCountry } from "@/data/catalog";
import { metadataTags, pageMetadata } from "@/lib/page-metadata";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const { pathname: rawPath } = useLocation();
  const pathname = rawPath.replace(/\/+$/, "") || "/";
  const assessment = findAssessment(pathname);
  const mobileModules = useRef<HTMLDetailsElement>(null);
  useEffect(() => { if (mobileModules.current) mobileModules.current.open = false; }, [pathname]);
  const country = assessment?.country || (pathname.startsWith("/country/") ? findCountry(pathname.slice(9)) : undefined);
  const infoTitle = ({ "/about": "About us", "/privacy": "Privacy Notice", "/legal-notice": "Legal Notice" } as Record<string, string>)[pathname];
  useEffect(() => {
    const metadata = pageMetadata(pathname);
    document.title = metadata.title;
    for (const [attribute, key, value] of metadataTags(metadata)) {
      let tag = document.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
      if (!value) { tag?.remove(); continue; }
      if (!tag) { tag = document.createElement("meta"); tag.setAttribute(attribute, key); document.head.appendChild(tag); }
      tag.content = value;
    }
    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (metadata.canonical) {
      if (!canonical) { canonical = document.createElement("link"); canonical.rel = "canonical"; document.head.appendChild(canonical); }
      canonical.href = metadata.canonical;
    } else canonical?.remove();
  }, [pathname]);
  const moduleNavigation = assessment && <nav aria-label="Country assessments">{assessment.country.modules.filter(module => module.status === "available").map(module => {
    const Icon = moduleIcon(module.title);
    return <Link key={module.link} to={module.link} aria-current={assessment.module.link === module.link ? "page" : undefined}><Icon aria-hidden="true" size={18} /><span>{module.title}</span></Link>;
  })}</nav>;
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
          {moduleNavigation}
          {assessment.country.regulator && <a className="sidebar-regulator" href={assessment.country.regulator.url} target="_blank" rel="noopener noreferrer">Regulator resources <ArrowUpRight aria-hidden="true" size={15} /></a>}
        </aside>
        <div className="assessment-body">
          <details ref={mobileModules} className="assessment-mobile-modules print:hidden">
            <summary>Country modules <span>{assessment.country.name}</span><ChevronDown aria-hidden="true" size={18} /></summary>
            {moduleNavigation}
          </details>
          {content}
        </div>
      </div> : content}
    </main>
    <Footer />
  </div>;
};
