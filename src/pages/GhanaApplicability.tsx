import { Layout } from "@/components/shared/Layout";
import { AssessmentInterface, Question } from "@/components/shared/AssessmentInterface";

const questions: Question[] = [
  {
    id: 1,
    text: "Is your organisation established in Ghana, and do you process personal data within Ghana?",
    tooltip: "An organisation is considered \"established in Ghana\" if it is an individual living here, a company set up under Ghanaian law, a partnership, a joint venture, or any person maintaining an office, branch, or agency through which business activities are carried out in Ghana.",
    options: {
      yes: {
        nextQuestion: null,
        message: "The Ghana Data Protection Act, 2012 (Act 843) applies to your activities. Your data processing activities meet the criteria for application under the Data Protection Act, 2012. You must comply with its provisions. Next action: Proceed to Module 2: Registration with the Data Protection Commission."
      },
      no: { nextQuestion: 2 }
    }
  },
  {
    id: 2,
    text: "Are you a data controller or processor located outside Ghana, but you use equipment or a data processor in Ghana to process personal data?",
    options: {
      yes: {
        nextQuestion: null,
        message: "The Ghana Data Protection Act, 2012 (Act 843) applies to your activities. Your data processing activities meet the criteria for application under the Data Protection Act, 2012. You must comply with its provisions. Next action: Proceed to Module 2: Registration with the Data Protection Commission."
      },
      no: { nextQuestion: 3 }
    }
  },
  {
    id: 3,
    text: "Does the personal data you process originate partly or wholly from Ghana?",
    tooltip: "This covers situations where the information itself comes from Ghana, regardless of where your processing takes place. Note that this Act does not apply to data that merely passes through Ghana from an external source.",
    options: {
      yes: {
        nextQuestion: null,
        message: "The Ghana Data Protection Act, 2012 (Act 843) applies to your activities. Your data processing activities meet the criteria for application under the Data Protection Act, 2012. You must comply with its provisions. Next action: Proceed to Module 2: Registration with the Data Protection Commission."
      },
      no: {
        nextQuestion: null,
        message: "The Ghana Data Protection Act, 2012 (Act 843) does not directly apply to your current activities. Based on your answers, your data handling does not directly fall under the specific conditions outlined in the Data Protection Act, 2012."
      }
    }
  }
];

const GhanaApplicability = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Ghana Data Protection Act - Applicability Assessment
        </h1>
        <p className="text-muted-foreground mb-8 text-center max-w-2xl mx-auto">
          This module helps you quickly determine if the Data Protection Act, 2012 (Act 843) applies to how your 
          organisation handles personal data in Ghana. Understanding this is the crucial first step to ensuring 
          your business complies with Ghanaian data protection laws.
        </p>
        <div className="mb-6 p-4 bg-muted rounded-lg">
          <p className="text-sm text-muted-foreground">
            <strong>Personal data</strong> refers to any information that can be used to identify an individual. 
            <strong> Processing</strong> means any operation or activity, or set of operations, performed on data or 
            personal data by automatic or other means, which includes collecting, organising, altering, retrieving, 
            using, disclosing, or destroying information.
          </p>
        </div>
        <AssessmentInterface
          title="Applicability Assessment"
          questions={questions}
          onComplete={() => {}}
          onReset={() => {}}
        />
      </div>
    </Layout>
  );
};

export default GhanaApplicability;
