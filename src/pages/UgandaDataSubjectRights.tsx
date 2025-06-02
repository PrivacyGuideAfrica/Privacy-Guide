
import { Layout } from "@/components/shared/Layout";
import { AssessmentInterface } from "@/components/shared/AssessmentInterface";

const UgandaDataSubjectRights = () => {
  const questions = [
    {
      id: 1,
      text: "How do you currently handle data subject requests?",
      options: {
        yes: { 
          nextQuestion: null,
          message: "Excellent! Continue to ensure your procedures comply with Uganda's requirements for responding to data subject requests, including timelines and fee structures." 
        },
        no: { 
          nextQuestion: null,
          message: "You need to establish formal procedures for handling data subject requests under Uganda law, including access, rectification, erasure, and portability rights." 
        }
      }
    }
  ];

  return (
    <Layout>
      <div className="container py-8 space-y-6">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">Uganda Data Subject Rights Assessment</h1>
          <p className="text-lg text-muted-foreground">
            Learn how to handle data subject requests and rights under Uganda's Data Protection and Privacy Act.
          </p>
        </div>
        
        <AssessmentInterface
          title="Data Subject Rights Assessment"
          questions={questions}
        />
      </div>
    </Layout>
  );
};

export default UgandaDataSubjectRights;
