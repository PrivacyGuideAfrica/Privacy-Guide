
import { Layout } from "@/components/shared/Layout";
import { AssessmentInterface } from "@/components/shared/AssessmentInterface";

const UgandaDataBreach = () => {
  const questions = [
    {
      id: "breach_preparedness",
      question: "How prepared is your organization for data breaches?",
      options: [
        { value: "well_prepared", label: "We have comprehensive incident response plans" },
        { value: "somewhat", label: "We have basic procedures in place" },
        { value: "limited", label: "Limited preparation" },
        { value: "not_prepared", label: "No specific breach response procedures" }
      ]
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
