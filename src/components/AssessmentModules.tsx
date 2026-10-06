import { Link } from "react-router-dom";
import { ArrowRight, FileText } from "lucide-react";
import { findCountry } from "@/data/catalog";

export const AssessmentModules = ({ country: countryId }: { country: string }) => {
  const country = findCountry(countryId);
  if (!country) return null;
  return (
    <section aria-labelledby="assessment-modules">
      <h2 id="assessment-modules" className="text-2xl font-semibold mb-6">{country.name}'s Assessment Modules</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {country.modules.map(module => {
          const content = <>
            <FileText aria-hidden="true" className="h-6 w-6 text-blue-800" />
            <h3 className="mt-4 text-lg font-semibold leading-snug">{module.title}</h3>
            <p className="mt-3 leading-relaxed text-slate-600">{module.description}</p>
            <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-800">
              {module.status === "available" ? <>Start assessment <ArrowRight aria-hidden="true" className="h-4 w-4" /></> : module.disabledMessage || "Under review"}
            </span>
          </>;
          return module.status === "available" ? (
            <Link key={module.link} to={module.link} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:border-blue-700 transition-colors">{content}</Link>
          ) : <div key={module.link} className="rounded-xl border border-slate-300 border-dashed bg-slate-50 p-6">{content}</div>;
        })}
      </div>
    </section>
  );
};
