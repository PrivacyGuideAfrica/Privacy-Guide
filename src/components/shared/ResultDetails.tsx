import { GuidanceReferences } from "./GuidanceReferences";
import { Link, useLocation } from "react-router-dom";
import { ListChecks, Footprints } from "lucide-react";
import { Button } from "@/components/ui/button";
import { findAssessment } from "@/data/catalog";
import type { Question } from "./AssessmentInterface";

interface Props {
  questions: Question[];
  answers: Record<number, string>;
  path: number[];
  onEdit: (index: number) => void;
}
export const ResultDetails = ({ questions, answers, path, onEdit }: Props) => {
  const { pathname } = useLocation();
  const assessment = findAssessment(pathname);
  const labels: Record<string, string> = { yes: "Yes", no: "No", notSure: "Not sure" };
  return <div className="result-details">
    <section aria-labelledby="result-context">
      <h3 id="result-context" className="text-xl font-semibold"><ListChecks aria-hidden="true" />Why this applies</h3>
      <p className="mt-3 leading-relaxed text-slate-700">This result follows the answers below{assessment ? ` for ${assessment.country.name}` : ""}. Check that they describe your situation before acting on the guidance.</p>
      <ol className="mt-4 space-y-4">
        {path.map((id, index) => <li key={`${id}-${index}`} className="rounded-lg border border-slate-200 p-4">
          <p className="font-medium">{index + 1}. {questions.find(question => question.id === id)?.text}</p>
          <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
            <p className="text-slate-700">Your answer: <strong>{labels[answers[id]] || answers[id]}</strong></p>
            <Button variant="outline" size="sm" onClick={() => onEdit(index)} aria-label={`Change answer ${index + 1}`}>Change answer</Button>
          </div>
        </li>)}
      </ol>
    </section>
    <section aria-labelledby="result-next-steps">
      <h3 id="result-next-steps" className="text-xl font-semibold"><Footprints aria-hidden="true" />Next steps</h3>
      <ol className="mt-3 list-decimal space-y-2 pl-5 leading-relaxed text-slate-700">
        <li>Check the outcome and any actions or deadlines described in the guidance above.</li>
        <li>Confirm requirements for your organisation with the relevant regulator or a qualified adviser.</li>
        <li>Keep a copy of this result and revisit it when your circumstances change.</li>
      </ol>
    </section>
    <GuidanceReferences />
    {assessment && <div className="print:hidden"><Link className="text-blue-800 underline" to={`/country/${assessment.country.id}`}>Explore other {assessment.country.name} assessments</Link></div>}
  </div>;
};
