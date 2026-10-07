import type { ReactNode } from "react";

export const AssessmentHeader = ({ title, children }: { title: ReactNode; children: ReactNode }) => (
  <header className="assessment-header">
    <h1>{title}</h1>
    <div className="assessment-description">{children}</div>
  </header>
);
