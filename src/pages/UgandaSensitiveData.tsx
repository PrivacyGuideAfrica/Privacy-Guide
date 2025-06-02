
import { Layout } from "@/components/shared/Layout";
import { AssessmentInterface } from "@/components/shared/AssessmentInterface";

const UgandaSensitiveData = () => {
  const questions = [
    {
      id: 1,
      text: "What types of sensitive data do you process?",
      options: {
        yes: {
          nextQuestion: null,
          message: "Processing sensitive personal data requires additional safeguards under Uganda's law. You need explicit consent or another lawful basis specifically for sensitive data, implement enhanced security measures, conduct privacy impact assessments, and ensure stricter access controls. Consider appointing a Data Protection Officer if processing large volumes of sensitive data."
        },
        no: {
          nextQuestion: null,
          message: "Since you don't process sensitive personal data, the enhanced requirements for sensitive data don't apply. However, ensure you properly classify your data and have procedures to identify if you begin processing sensitive data in the future, as this would trigger additional compliance obligations."
        }
      }
    }
  ];

  return (
    <Layout>
      <AssessmentInterface
        title="Uganda Sensitive Data Assessment"
        description="Assess requirements and safeguards for processing sensitive personal data"
        questions={questions}
        backLink="/country/uganda"
        backText="Back to Uganda Modules"
      />
    </Layout>
  );
};

export default UgandaSensitiveData;
