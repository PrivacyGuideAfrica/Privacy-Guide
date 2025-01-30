import { AssessmentInterface, Question } from "@/components/shared/AssessmentInterface";
import { Layout } from "@/components/shared/Layout";

const questions: Question[] = [
  {
    id: 1,
    text: "Do you process personal data? (e.g., collect, store, use, share, or delete it)",
    tooltip: "Processing is doing anything with personal data, like collecting it, storing it, using it, sharing it, or even deleting it.",
    options: {
      yes: {
        nextQuestion: 2,
      },
      no: {
        nextQuestion: null,
        message: "The Nigerian Data Protection Act does not apply to your processing.",
      },
    },
  },
  {
    id: 2,
    text: "Are you responsible for deciding why and how you use personal data?",
    options: {
      yes: {
        nextQuestion: 3,
      },
      no: {
        nextQuestion: 5,
      },
    },
  },
  {
    id: 3,
    text: "Do you set rules for who can access, use, and share the data?",
    options: {
      yes: {
        nextQuestion: 4,
      },
      no: {
        nextQuestion: 5,
      },
    },
  },
  {
    id: 4,
    text: "Do you oversee the personal data lifecycle, from collection to deletion?",
    options: {
      yes: {
        nextQuestion: null,
        message: "Your organisation may be classified as a Data Controller. As a Data Controller, you must:\n\n" +
          "• Register with the NDPC and file annual Compliance Audit Reports if you're a controller of major importance\n" +
          "• Appoint Data Protection Officers to provide semi-annual reports\n" +
          "• Identify lawful bases for processing, including consent, contractual necessity, legal obligations\n" +
          "• Provide Privacy Notices to Data Subjects before collecting data\n" +
          "• Implement security measures including data protection schedules, encryption, and software updates",
      },
      no: {
        nextQuestion: 5,
      },
    },
  },
  {
    id: 5,
    text: "Do you process personal data based solely on the instructions of another entity (such as a Data Controller)?",
    tooltip: "A Data Processor only acts under the direction of a Controller and does not decide how data is used.",
    options: {
      yes: {
        nextQuestion: null,
        message: "Your organisation may be classified as a Data Processor. Your responsibilities include:\n\n" +
          "• Acting only on Controller Instructions\n" +
          "• Carrying out Data Protection Impact Assessments before deploying high-risk systems\n" +
          "• Ensuring software compliance with NDPA guidelines\n" +
          "• Immediate notification of data breaches to controllers",
      },
      no: {
        nextQuestion: 6,
      },
    },
  },
  {
    id: 6,
    text: "Do you determine how another organisation uses personal data while also processing it on their behalf?",
    options: {
      yes: {
        nextQuestion: null,
        message: "You may function as both a Data Controller and Processor. Review your internal processes with a Data Protection Professional to ensure compliance with both sets of obligations under the NDPA.",
      },
      no: {
        nextQuestion: null,
        message: "Your responses suggest that further clarification is needed to determine your role. Please review the definitions and responsibilities of Data Controllers and Data Processors to better understand your obligations under the NDPA.",
      },
    },
  },
];

const ControllerProcessor = () => {
  return (
    <Layout>
      <div className="container mx-auto py-8">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Controller or Processor Assessment
        </h1>
        <p className="text-gray-600 mb-8 text-center max-w-2xl mx-auto">
          This assessment will help determine whether your organization is classified as a Data Controller
          or Data Processor under the Nigerian Data Protection Act (NDPA).
        </p>
        <AssessmentInterface
          title="Controller/Processor Assessment"
          questions={questions}
        />
      </div>
    </Layout>
  );
};

export default ControllerProcessor;