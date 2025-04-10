
import { Layout } from "@/components/shared/Layout";
import { AssessmentInterface, Question } from "@/components/shared/AssessmentInterface";

const questions: Question[] = [
  {
    id: 1,
    text: "Do you use electronic or other means (automated or non-automated platforms) to process personal data?",
    tooltip: "Processing personal data includes collecting, storing, using, sharing, or deleting information about individuals.",
    options: {
      yes: { nextQuestion: 2 },
      no: { 
        nextQuestion: null,
        message: "The Rwandan Data Protection Law might not apply to you, but it is always good practice to handle personal data responsibly."
      }
    }
  },
  {
    id: 2,
    text: "Are you a data controller, data processor, or a third party involved in processing personal data?",
    tooltip: "A data controller decides why and how to process data. A processor handles data on behalf of a controller. A third party is any other person or organization involved in processing.",
    options: {
      yes: { nextQuestion: 3 },
      no: { 
        nextQuestion: null,
        message: "The Rwandan Data Protection Law might not apply to you, but it is always good practice to handle personal data responsibly."
      }
    }
  },
  {
    id: 3,
    text: "Are you established or do you reside in Rwanda and process personal data while in Rwanda?",
    tooltip: "Being established means having an office, branch, or carrying out business activities within Rwanda.",
    options: {
      yes: {
        nextQuestion: null,
        message: "The Rwandan Data Protection Law applies to you. You must comply with all the requirements under Rwanda's data protection framework."
      },
      no: { nextQuestion: 4 }
    }
  },
  {
    id: 4,
    text: "Even if you are not established or do not reside in Rwanda, do you process personal data of individuals (data subjects) who are located in Rwanda?",
    tooltip: "This could include offering goods or services to people in Rwanda, monitoring their behavior, or processing their data for any purpose.",
    options: {
      yes: {
        nextQuestion: null,
        message: "The Rwandan Data Protection Law applies to you. You must comply with all the requirements under Rwanda's data protection framework."
      },
      no: {
        nextQuestion: null,
        message: "The Rwandan Data Protection Law might not apply to you, but it is always good practice to handle personal data responsibly."
      }
    }
  }
];

const RwandaApplicability = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Does the Rwandan Data Protection Law Apply to You?
        </h1>
        <p className="text-gray-600 mb-8 text-center max-w-2xl mx-auto">
          This assessment will help you determine if Rwanda's Data Protection Law applies to your 
          data processing activities. This law sets out rules for how personal data is handled to 
          protect the privacy of individuals in Rwanda.
        </p>
        <AssessmentInterface
          title="Rwandan Data Protection Law Applicability"
          questions={questions}
          onComplete={() => {}}
          onReset={() => {}}
        />
      </div>
    </Layout>
  );
};

export default RwandaApplicability;
