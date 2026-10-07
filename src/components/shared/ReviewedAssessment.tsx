import { AssessmentHeader } from "@/components/shared/AssessmentHeader";
import { AssessmentInterface } from "./AssessmentInterface";
import type { ReviewedAssessment as Definition } from "@/data/reviewed/types";

export const ReviewedAssessment = ({ definition }: { definition: Definition }) => (
  <div className="assessment-page">
    <AssessmentHeader title={definition.title}>
      <p>{definition.intro}</p>
    </AssessmentHeader>
    <p className="text-sm text-slate-600">Assess one processing activity or incident at a time. Choose “Not Sure” where the facts are unresolved. This guidance does not determine every legal obligation.</p>
    <AssessmentInterface
      title="Assessment questions"
      questions={definition.questions}
      reviewedGuidance={<section aria-labelledby="reviewed-guidance" className="space-y-4">
        <h3 id="reviewed-guidance" className="text-xl font-semibold">Conditions and practical guidance</h3>
        {definition.guidance.map(paragraph => <p key={paragraph} className="text-slate-700 leading-relaxed">{paragraph}</p>)}
        {definition.links.length > 0 && <ul className="space-y-2 list-disc pl-5">
          {definition.links.map(link => <li key={link.url}><a className="text-blue-800 underline" href={link.url} target="_blank" rel="noopener noreferrer">{link.label}</a></li>)}
        </ul>}
      </section>}
    />
  </div>
);
