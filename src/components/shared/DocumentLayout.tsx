import { useEffect, useState, type ReactNode } from "react";
import { ChevronDown, ArrowUpRight } from "lucide-react";

interface Props { title: string; subtitle: string; sections: { id: string; label: string }[]; children: ReactNode }
export const DocumentLayout = ({ title, subtitle, sections, children }: Props) => {
  const [active, setActive] = useState(sections[0]?.id);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      const first = entries.find(entry => entry.isIntersecting);
      if (first) setActive(first.target.id);
    }, { rootMargin: "-100px 0px -55% 0px" });
    sections.forEach(section => { const node = document.getElementById(section.id); if (node) observer.observe(node); });
    return () => observer.disconnect();
  }, [sections]);
  const links = sections.map(section => <a key={section.id} href={`#${section.id}`} aria-current={active === section.id ? "location" : undefined} onClick={event => {
    setActive(section.id);
    event.currentTarget.closest("details")?.removeAttribute("open");
    document.getElementById(section.id)?.focus({ preventScroll: true });
  }}>{section.label}</a>);
  return <div className="page-container page-space document-page">
    <header className="page-intro"><p className="eyebrow">PrivacyGuide.Africa</p><h1>{title}</h1><p>{subtitle}</p></header>
    <details className="document-mobile-toc"><summary>On this page <ChevronDown aria-hidden="true" size={18} /></summary><nav aria-label="Page contents">{links}</nav></details>
    <div className="document-grid"><aside className="document-sidebar"><nav aria-label="Page contents"><p>On this page</p>{links}</nav><a className="document-contact" href="mailto:support@privacyguide.africa">Have a question?<ArrowUpRight aria-hidden="true" size={16} /></a></aside><article className="document-content">{children}</article></div>
  </div>;
};
