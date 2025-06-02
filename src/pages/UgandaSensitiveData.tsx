
import { Layout } from "@/components/shared/Layout";
import { AssessmentInterface } from "@/components/shared/AssessmentInterface";

const UgandaSensitiveData = () => {
  const questions = [
    {
      id: 1,
      text: "What types of sensitive data do you process?",
      options: {
        yes: { 
          nextQuestion: null,
          message: "You process sensitive personal data and must implement additional safeguards and obtain explicit consent where required under Uganda's Data Protection and Privacy Act." 
        },
        no: { 
          nextQuestion: null,
          message: "This module does not apply to you if you don't process sensitive personal data. However, ensure you correctly identify what constitutes sensitive data under Uganda law." 
        }
      }
    }
  ];

  return (
    <Layout>
      <div className="container py-8 space-y-6">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">Uganda Sensitive Data Assessment</h1>
          <p className="text-lg text-muted-foreground">
            Assess requirements and safeguards for processing sensitive personal data under Uganda's Data Protection and Privacy Act.
          </p>
        </div>
        
        <AssessmentInterface
          title="Sensitive Data Assessment"
          questions={questions}
        />
      </div>
    </Layout>
  );
};

export default UgandaSensitiveData;
