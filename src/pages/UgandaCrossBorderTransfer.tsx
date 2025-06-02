
import { Layout } from "@/components/shared/Layout";
import { AssessmentInterface } from "@/components/shared/AssessmentInterface";

const UgandaCrossBorderTransfer = () => {
  const questions = [
    {
      id: 1,
      text: "Do you transfer personal data outside of Uganda?",
      options: {
        yes: { 
          nextQuestion: null,
          message: "You must ensure adequate protection for cross-border transfers. This may require adequacy decisions, standard contractual clauses, or other appropriate safeguards under Uganda law." 
        },
        no: { 
          nextQuestion: null,
          message: "This module does not apply to you as all data stays within Uganda." 
        }
      }
    }
  ];

  return (
    <Layout>
      <div className="container py-8 space-y-6">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">Uganda Cross-border Transfer Assessment</h1>
          <p className="text-lg text-muted-foreground">
            Understand restrictions and requirements for transferring data outside Uganda under the Uganda Data Protection and Privacy Act.
          </p>
        </div>
        
        <AssessmentInterface
          title="Cross-border Transfer Assessment"
          questions={questions}
        />
      </div>
    </Layout>
  );
};

export default UgandaCrossBorderTransfer;
