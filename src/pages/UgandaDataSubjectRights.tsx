
import { Layout } from "@/components/shared/Layout";
import { AssessmentInterface } from "@/components/shared/AssessmentInterface";

const UgandaDataSubjectRights = () => {
  const questions = [
    {
      id: "request_handling",
      question: "How do you currently handle data subject requests?",
      options: [
        { value: "formal", label: "We have formal procedures in place" },
        { value: "informal", label: "We handle them informally as they come" },
        { value: "none", label: "We haven't received any requests yet" },
        { value: "unsure", label: "We're not sure about our obligations" }
      ]
    }
  ];

  return (
    <Layout>
      <AssessmentInterface
        title="Uganda Data Subject Rights Assessment"
        description="Learn how to handle data subject requests and rights under Uganda law"
        questions={questions}
        backLink="/country/uganda"
        backText="Back to Uganda Modules"
      />
    </Layout>
  );
};

export default UgandaDataSubjectRights;
