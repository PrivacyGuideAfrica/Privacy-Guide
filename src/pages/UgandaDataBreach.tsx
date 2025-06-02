
import { Layout } from "@/components/shared/Layout";
import { AssessmentInterface } from "@/components/shared/AssessmentInterface";

const UgandaDataBreach = () => {
  const questions = [
    {
      id: 1,
      text: "How prepared is your organization for data breaches?",
      options: {
        yes: {
          nextQuestion: null,
          message: "Excellent! Having comprehensive incident response plans is crucial under Uganda's data protection law. Ensure your plans include procedures for breach assessment, containment, notification to the Data Protection Authority within 72 hours, and communication to affected data subjects when required."
        },
        no: {
          nextQuestion: null,
          message: "You need to develop comprehensive data breach response procedures immediately. Under Uganda's law, you must notify the Data Protection Authority within 72 hours of becoming aware of a breach that poses risks to individuals' rights and freedoms. Consider conducting breach response training and establishing clear escalation procedures."
        }
      }
    }
  ];

  return (
    <Layout>
      <AssessmentInterface
        title="Uganda Data Breach Assessment"
        description="Understand your obligations for reporting data breaches to authorities and individuals"
        questions={questions}
        backLink="/country/uganda"
        backText="Back to Uganda Modules"
      />
    </Layout>
  );
};

export default UgandaDataBreach;
