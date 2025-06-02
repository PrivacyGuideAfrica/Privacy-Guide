
import { Layout } from "@/components/shared/Layout";
import { AssessmentInterface } from "@/components/shared/AssessmentInterface";

const UgandaCrossBorderTransfer = () => {
  const questions = [
    {
      id: "transfer_data",
      question: "Do you transfer personal data outside of Uganda?",
      options: [
        { value: "yes", label: "Yes, we regularly transfer data internationally" },
        { value: "sometimes", label: "Occasionally, for specific purposes" },
        { value: "no", label: "No, all data stays within Uganda" }
      ]
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
