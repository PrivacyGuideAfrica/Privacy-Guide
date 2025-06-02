
import { Layout } from "@/components/shared/Layout";
import { AssessmentInterface } from "@/components/shared/AssessmentInterface";

const UgandaLawfulBasis = () => {
  const questions = [
    {
      id: "processing_purpose",
      question: "What is the primary purpose of your data processing?",
      options: [
        { value: "consent", label: "Based on individual consent" },
        { value: "contract", label: "Performance of a contract" },
        { value: "legal", label: "Compliance with legal obligation" },
        { value: "vital", label: "Protection of vital interests" },
        { value: "public", label: "Performance of public task" },
        { value: "legitimate", label: "Legitimate interests" }
      ]
    }
  ];

  return (
    <Layout>
      <AssessmentInterface
        title="Uganda Lawful Basis Assessment"
        description="Identify the appropriate lawful basis for your data processing activities under Uganda law"
        questions={questions}
        backLink="/country/uganda"
        backText="Back to Uganda Modules"
      />
    </Layout>
  );
};

export default UgandaLawfulBasis;
