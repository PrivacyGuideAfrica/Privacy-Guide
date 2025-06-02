
import { Layout } from "@/components/shared/Layout";
import { AssessmentInterface } from "@/components/shared/AssessmentInterface";

const UgandaSensitiveData = () => {
  const questions = [
    {
      id: "sensitive_data_types",
      question: "What types of sensitive data do you process?",
      options: [
        { value: "health", label: "Health and medical data" },
        { value: "biometric", label: "Biometric data" },
        { value: "financial", label: "Financial information" },
        { value: "political", label: "Political opinions or affiliations" },
        { value: "none", label: "We don't process sensitive data" }
      ]
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
