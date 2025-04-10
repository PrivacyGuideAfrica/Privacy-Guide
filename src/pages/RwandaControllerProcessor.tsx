
import { AssessmentInterface, Question } from "@/components/shared/AssessmentInterface";
import { Layout } from "@/components/shared/Layout";
import { RwandaControllerProcessorDescription } from "@/components/controller-processor/RwandaControllerProcessorDescription";

const questions: Question[] = [
  {
    id: 1,
    text: "Do you (or your organisation) decide how and why personal data is collected or used?",
    tooltip: "This means you determine the purposes and means of processing personal data, including what data to collect and how it will be used.",
    options: {
      yes: {
        nextQuestion: 2,
      },
      no: {
        nextQuestion: 3,
      },
    },
  },
  {
    id: 2,
    text: "Do you also decide factors like which personal data is collected, who receives it, and how long it's kept?",
    tooltip: "This includes making decisions about data collection scope, data sharing, and retention periods.",
    options: {
      yes: {
        nextQuestion: 4,
      },
      no: {
        nextQuestion: 3,
      },
    },
  },
  {
    id: 3,
    text: "Do you handle or process personal data strictly under instructions from someone else who decides all major aspects (like what data to collect and how it's used)?",
    tooltip: "As a processor, you would only act on behalf of another entity that provides clear instructions on data handling.",
    options: {
      yes: {
        nextQuestion: 4,
      },
      no: {
        nextQuestion: 4,
      },
    },
  },
  {
    id: 4,
    text: "In some activities, do you decide how and why data is used, while in other activities you simply follow someone else's instructions?",
    tooltip: "This would indicate you may have different roles depending on the specific processing activities.",
    options: {
      yes: {
        nextQuestion: null,
        message: "You have a Dual Role:\n\n" +
          "• For certain activities, you decide on data use (like a Data Controller)\n" +
          "• For others, you process data only on someone else's instructions (like a Data Processor)\n\n" +
          "Under Rwanda's Data Protection Law, you will need to fulfill the obligations of both roles depending on the specific processing activities. This includes maintaining records of processing, implementing appropriate security measures, and ensuring compliance with data protection principles for activities where you act as a controller."
      },
      no: {
        nextQuestion: null,
        message: "Based on your answers:\n\n" +
          "If you answered 'Yes' to Questions 1 and 2:\n" +
          "You're effectively acting as a Data Controller—you decide how and why data is used.\n\n" +
          "Under Rwanda's Data Protection Law, as a Data Controller, you must:\n\n" +
          "• Register with the National Cybersecurity Authority (NCSA)\n" +
          "• Ensure lawful processing with a valid legal basis\n" +
          "• Provide clear privacy notices to data subjects\n" +
          "• Implement appropriate technical and organizational security measures\n" +
          "• Respond to data subject rights requests\n" +
          "• Report data breaches within 72 hours\n" +
          "• Conduct Data Protection Impact Assessments for high-risk processing\n\n" +
          "If you answered 'Yes' to Question 3:\n" +
          "You're effectively acting as a Data Processor—you handle data under another's instructions.\n\n" +
          "Under Rwanda's Data Protection Law, as a Data Processor, you must:\n\n" +
          "• Process data only according to documented instructions from the controller\n" +
          "• Ensure confidentiality of the data you process\n" +
          "• Implement appropriate security measures\n" +
          "• Assist the controller in fulfilling their obligations\n" +
          "• Notify the controller of any data breaches without undue delay\n" +
          "• Delete or return all personal data after service completion\n\n" +
          "If you're partially deciding or sharing decisions:\n" +
          "You may be a Joint Controller or have partial control.\n\n" +
          "Under Rwanda's Data Protection Law, if you share decision-making about data processing with others, you may be considered joint controllers. This means:\n\n" +
          "• You must have a clear arrangement defining each party's responsibilities\n" +
          "• You must ensure data subjects can exercise their rights regardless of your arrangement\n" +
          "• You share liability for any damages resulting from non-compliance\n\n" +
          "Consider consulting with a data protection professional to clarify your specific obligations based on your role."
      },
    },
  },
];

const RwandaControllerProcessor = () => {
  return (
    <Layout>
      <div className="container mx-auto py-8">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Controller or Processor Assessment - Rwanda
        </h1>
        <p className="text-gray-600 mb-8 text-center max-w-2xl mx-auto">
          This assessment will help determine whether your organization is classified as a Data Controller
          or Data Processor under Rwanda's Data Protection Law.
        </p>
        <div className="mb-8 max-w-3xl mx-auto">
          <RwandaControllerProcessorDescription />
        </div>
        <AssessmentInterface
          title="Controller/Processor Assessment"
          questions={questions}
        />
      </div>
    </Layout>
  );
};

export default RwandaControllerProcessor;
