
import { Layout } from "@/components/shared/Layout";
import { AssessmentInterface } from "@/components/shared/AssessmentInterface";

const UgandaCrossBorderTransfer = () => {
  const questions = [
    {
      id: 1,
      text: "Do you transfer personal data outside of Uganda?",
      options: {
        yes: {
          nextQuestion: null,
          message: "Cross-border data transfers from Uganda require adequate safeguards. You must ensure the receiving country has adequate data protection laws or implement appropriate safeguards such as standard contractual clauses, binding corporate rules, or obtain explicit consent from data subjects."
        },
        no: {
          nextQuestion: null,
          message: "Since you don't transfer data outside Uganda, cross-border transfer regulations don't apply to your operations. However, ensure you have proper data localization measures in place and continue monitoring if your data processing practices change."
        }
      }
    }
  ];

  return (
    <Layout>
      <AssessmentInterface
        title="Uganda Cross-border Transfer Assessment"
        description="Understand restrictions and requirements for transferring data outside Uganda"
        questions={questions}
        backLink="/country/uganda"
        backText="Back to Uganda Modules"
      />
    </Layout>
  );
};

export default UgandaCrossBorderTransfer;
