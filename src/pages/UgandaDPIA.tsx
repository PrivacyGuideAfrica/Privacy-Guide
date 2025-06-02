
import { Layout } from "@/components/shared/Layout";
import { AssessmentInterface } from "@/components/shared/AssessmentInterface";

const UgandaDPIA = () => {
  const questions = [
    {
      id: 1,
      text: "What type of data processing do you conduct?",
      options: {
        yes: {
          nextQuestion: null,
          message: "Based on your data processing activities, you must conduct a Data Protection Impact Assessment (DPIA). Under Uganda's law, DPIAs are required for processing that involves high risks to individuals' rights and freedoms, including automated decision-making, sensitive data processing, large-scale processing, or systematic monitoring."
        },
        no: {
          nextQuestion: null,
          message: "For standard data processing activities, a DPIA may not be mandatory, but it's still good practice. However, monitor your processing activities as any changes toward high-risk processing (automated decisions, sensitive data, large-scale processing, or systematic monitoring) would trigger DPIA requirements."
        }
      }
    }
  ];

  return (
    <Layout>
      <AssessmentInterface
        title="Uganda DPIA Assessment"
        description="Determine when you need to conduct a Data Protection Impact Assessment under Uganda's requirements"
        questions={questions}
        backLink="/country/uganda"
        backText="Back to Uganda Modules"
      />
    </Layout>
  );
};

export default UgandaDPIA;
