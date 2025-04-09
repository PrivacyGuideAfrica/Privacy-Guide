
import { Layout } from "@/components/shared/Layout";
import { AssessmentInterface } from "@/components/shared/AssessmentInterface";
import { dpiaQuestions } from "@/data/dpiaQuestions";

const DPIAAssessment = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto p-6 space-y-6">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold text-foreground">
            Data Protection Impact Assessment (DPIA) in Rwanda
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            This assessment helps you determine whether you need to conduct a DPIA under Rwandan law. 
            A DPIA evaluates potential risks to individuals' rights and freedoms when you process their personal data.
          </p>
        </div>

        <AssessmentInterface
          title="DPIA Assessment"
          questions={dpiaQuestions}
        />
      </div>
    </Layout>
  );
};

export default DPIAAssessment;
