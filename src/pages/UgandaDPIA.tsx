
import { Layout } from "@/components/shared/Layout";
import { AssessmentInterface } from "@/components/shared/AssessmentInterface";

const UgandaDPIA = () => {
  const questions = [
    {
      id: "processing_type",
      question: "What type of data processing do you conduct?",
      options: [
        { value: "automated", label: "Automated decision-making or profiling" },
        { value: "sensitive", label: "Processing of sensitive personal data" },
        { value: "large_scale", label: "Large-scale processing of personal data" },
        { value: "surveillance", label: "Systematic monitoring of individuals" },
        { value: "standard", label: "Standard data processing activities" }
      ]
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
