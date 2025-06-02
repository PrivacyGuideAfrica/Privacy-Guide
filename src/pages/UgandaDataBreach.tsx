
import { Layout } from "@/components/shared/Layout";
import { AssessmentInterface } from "@/components/shared/AssessmentInterface";

const UgandaDataBreach = () => {
  const questions = [
    {
      id: 1,
      text: "How prepared is your organization for data breaches?",
      options: {
        yes: { 
          nextQuestion: null,
          message: "Great! Ensure your incident response plans align with Uganda's breach notification requirements and timelines for reporting to authorities and individuals." 
        },
        no: { 
          nextQuestion: null,
          message: "You need to develop comprehensive data breach response procedures that comply with Uganda's notification requirements to authorities and data subjects." 
        }
      }
    }
  ];

  return (
    <Layout>
      <div className="container py-8 space-y-6">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">Uganda Data Breach Assessment</h1>
          <p className="text-lg text-muted-foreground">
            Understand your obligations for reporting data breaches to authorities and individuals under Uganda law.
          </p>
        </div>
        
        <AssessmentInterface
          title="Data Breach Assessment"
          questions={questions}
        />
      </div>
    </Layout>
  );
};

export default UgandaDataBreach;
