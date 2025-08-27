import { Layout } from "@/components/shared/Layout";
import { AssessmentInterface, Question } from "@/components/shared/AssessmentInterface";

const questions: Question[] = [
  {
    id: 1,
    text: "Are you processing personal information (using either automated or non-automated methods) that is part of a record or filing system?",
    tooltip: "This means you are doing anything with personal information (e.g., collecting, storing, using, sharing). A 'record' includes any recorded information regardless of its form or medium. 'Automated means' refers to equipment capable of operating automatically in response to instructions for processing information.",
    options: {
      yes: { nextQuestion: 2 },
      no: { 
        nextQuestion: null,
        message: "This does not appear to be processing of personal information as defined by POPIA, so the Act does not apply."
      }
    }
  },
  {
    id: 2,
    text: "Is your organisation or you, as a responsible party, based in South Africa?",
    tooltip: "A 'responsible party' is a public or private body or any other person that determines the purpose and means for processing personal information. Being \"based in South Africa\" means you are domiciled (have your principal place of business or residence) in the Republic of South Africa.",
    options: {
      yes: {
        nextQuestion: null,
        message: "The Protection of Personal Information Act (POPIA) applies to your activities. Your personal information processing activities fall under the scope of POPIA, meaning you must comply with its conditions for lawful processing. Next action: Proceed to Module 2: Understanding Your Role (Responsible Party or Operator)."
      },
      no: { nextQuestion: 3 }
    }
  },
  {
    id: 3,
    text: "Even if your organisation is not based in South Africa, do you use automated or non-automated means (equipment or methods) located within South Africa to process personal information?",
    tooltip: "This applies unless your use of means in South Africa is only for forwarding personal information through the country.",
    options: {
      yes: {
        nextQuestion: null,
        message: "The Protection of Personal Information Act (POPIA) applies to your activities. Your personal information processing activities fall under the scope of POPIA, meaning you must comply with its conditions for lawful processing. Next action: Proceed to Module 2: Understanding Your Role (Responsible Party or Operator)."
      },
      no: { nextQuestion: 4 }
    }
  },
  {
    id: 4,
    text: "Is your processing of personal information purely for personal or household activities, or has the information been permanently de-identified so it can no longer identify anyone?",
    tooltip: "POPIA generally does not apply to processing done only for personal or household activities. It also does not apply to information that has been de-identified to the extent that it cannot be re-identified again. There are other limited exclusions, such as for certain public body functions related to national security or for journalistic, literary, or artistic purposes.",
    options: {
      yes: {
        nextQuestion: null,
        message: "The Protection of Personal Information Act (POPIA) does not directly apply to your current activities. Based on your answers, your current personal information processing activities appear to be excluded from the direct application of POPIA."
      },
      no: {
        nextQuestion: null,
        message: "The Protection of Personal Information Act (POPIA) applies to your activities. Your personal information processing activities fall under the scope of POPIA, meaning you must comply with its conditions for lawful processing. Next action: Proceed to Module 2: Understanding Your Role (Responsible Party or Operator)."
      }
    }
  }
];

const SouthAfricaApplicability = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6 text-center">
          POPIA Applicability Assessment
        </h1>
        <p className="text-muted-foreground mb-8 text-center max-w-2xl mx-auto">
          This module helps you quickly determine if the Protection of Personal Information Act, 2013 (POPIA) 
          applies to how you handle personal information in South Africa. Understanding this is the crucial 
          first step to ensuring your business or individual activities comply with South African data protection laws.
        </p>
        <div className="mb-6 p-4 bg-muted rounded-lg">
          <p className="text-sm text-muted-foreground">
            <strong>Personal information</strong> refers to any information about an identifiable, living natural person, 
            and where applicable, an identifiable existing juristic person (like a company or organisation). 
            <strong>Processing</strong> means any operation or activity, whether automated or not, concerning personal information. 
            This includes things like collecting, receiving, recording, storing, updating, using, or disclosing information.
          </p>
        </div>
        <AssessmentInterface
          title="POPIA Applicability Assessment"
          questions={questions}
          onComplete={() => {}}
          onReset={() => {}}
        />
      </div>
    </Layout>
  );
};

export default SouthAfricaApplicability;