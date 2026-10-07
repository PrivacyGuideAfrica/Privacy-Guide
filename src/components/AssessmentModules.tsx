import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { moduleIcon } from "@/lib/module-icon";
import { findCountry } from "@/data/catalog";

export const AssessmentModules = ({ country: countryId }: { country: string }) => {
  const country = findCountry(countryId);
  if (!country) return null;
  return <section aria-labelledby="assessment-modules">
    <div className="module-heading"><h2 id="assessment-modules">{country.name}'s Assessment Modules</h2><span>{country.modules.length} modules</span></div>
    <div className="module-grid">{country.modules.map(module => {
      const Icon = moduleIcon(module.title);
      const content = <><span className="icon-tile"><Icon aria-hidden="true" strokeWidth={1.6} /></span><h3>{module.title}</h3><p>{module.description}</p><span className="module-action">{module.status === "available" ? <>Start assessment <ArrowRight aria-hidden="true" size={17} /></> : module.disabledMessage || "Under review"}</span></>;
      return module.status === "available" ? <Link key={module.link} to={module.link} className="module-card">{content}</Link> : <div key={module.link} className="module-card module-unavailable">{content}</div>;
    })}</div>
  </section>;
};
