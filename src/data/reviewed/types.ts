import type { Question } from "../../components/shared/AssessmentInterface";

export interface ReviewedAssessment {
  packet: string;
  title: string;
  intro: string;
  questions: Question[];
  guidance: string[];
  links: { label: string; url: string }[];
}
