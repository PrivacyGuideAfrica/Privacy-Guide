
import { Layout } from "@/components/shared/Layout";
import { AssessmentInterface } from "@/components/shared/AssessmentInterface";

const UgandaDPIA = () => {
  const questions = [
    {
      id: 1,
      text: "What type of data processing do you conduct?",
      options: {
        yes: { 
          nextQuestion: null,
          message: "Based on your processing activities, you must conduct a Data Protection Impact Assessment (DPIA) before beginning the processing under Uganda's requirements." 
        },
        no: { 
          nextQuestion: null,
          message: "A DPIA may not be required for standard processing activities, but consider conducting one if your processing poses risks to individuals' rights and freedoms." 
        }
      }
    }
  ];

  return (
    <Layout>
      <div className="container py-8 space-y-6">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">Uganda DPIA Assessment</h1>
          <p className="text-lg text-muted-foreground">
            Determine when you need to conduct a Data Protection Impact Assessment under Uganda's Data Protection and Privacy Act requirements.
          </p>
        </div>
        
        <AssessmentInterface
          title="DPIA Assessment"
          questions={questions}
        />
      </div>
    </Layout>
  );
};

export default UgandaDPIA;
