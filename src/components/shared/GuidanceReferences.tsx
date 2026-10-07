import { BookOpen } from "lucide-react";
import { useLocation } from "react-router-dom";
import { findAssessment } from "@/data/catalog";
export const GuidanceReferences = () => {
  const { pathname } = useLocation();
  const assessment = findAssessment(pathname);
  return assessment ? <section className="guidance-references" aria-labelledby="result-sources">
      <h3 id="result-sources" className="text-xl font-semibold"><BookOpen aria-hidden="true" />Sources and legal references</h3>
      <p className="mt-3 text-slate-700">{assessment.country.name} · {assessment.country.lawName}</p>
      {assessment.module.sources.length > 0 ? <ul className="mt-3 list-disc pl-5 space-y-2">{assessment.module.sources.map(source => <li key={`${source.url}-${source.section}`}><a href={source.url} target="_blank" rel="noopener noreferrer" className="text-blue-800 underline">{source.label} — {source.section}</a></li>)}</ul> : <p className="mt-3 text-sm text-slate-600">Module-specific citations have not yet been recorded. Use the regulator’s resources to check current requirements.</p>}
      {assessment.country.regulator && <a className="mt-3 inline-block text-blue-800 underline" href={assessment.country.regulator.url} target="_blank" rel="noopener noreferrer">{assessment.country.regulator.label} — regulator resources</a>}
      <a className="mt-3 inline-block text-blue-800 underline" href={`mailto:support@privacyguide.africa?subject=${encodeURIComponent(`Guidance feedback: ${assessment.country.name} — ${assessment.module.title}`)}`}>Report outdated guidance</a>
      <p className="mt-2 text-sm text-slate-600">Please do not include personal data or confidential incident details in your feedback.</p>
    </section> : null;

};
