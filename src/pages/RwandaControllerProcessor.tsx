
import { AssessmentInterface, Question } from "@/components/shared/AssessmentInterface";
import { Layout } from "@/components/shared/Layout";
import { RwandaControllerProcessorDescription } from "@/components/controller-processor/RwandaControllerProcessorDescription";

const questions: Question[] = [
  {
    id: 1,
    text: "Do you (or your organisation) decide how or why personal data is collected or used?",
    tooltip: "This means you determine the purposes and means of processing personal data, including what data to collect and how it will be used.",
    options: {
      yes: {
        nextQuestion: 2,
      },
      no: {
        nextQuestion: null,
        message: "You likely have no decision-making power over personal data usage. You may not be a data controller."
      },
    },
  },
  {
    id: 2,
    text: "Do you also decide key factors such as which data is collected, who receives it, and how long it is kept?",
    tooltip: "This includes making decisions about data collection scope, data sharing, and retention periods.",
    options: {
      yes: {
        nextQuestion: 3,
      },
      no: {
        nextQuestion: null,
        message: "You might share or partially have control over data use. Consider whether you are a joint controller or otherwise follow someone else's instructions."
      },
    },
  },
  {
    id: 3,
    text: "Do you ever handle personal data solely under instructions from a separate party who decides all major aspects?",
    tooltip: "As a processor, you would only act on behalf of another entity that provides clear instructions on data handling.",
    options: {
      yes: {
        nextQuestion: 4,
      },
      no: {
        nextQuestion: null,
        message: "You appear to make the crucial decisions, so you likely act as a Data Controller.\n\n" +
          "A Data Controller is a person or entity (public, private, or legal) that alone or jointly determines how and why personal data is processed. They hold the decision-making power regarding data collection, use, and disclosure.\n\n" +
          "Key Obligations as a Data Controller under Rwanda's Law:\n\n" +
          "• Registration: Must register with the National Cyber Security Authority (NCSA).\n" +
          "• Compliance with Principles: Ensure data is processed lawfully, fairly, and securely.\n" +
          "• Respect Data Subject Rights: E.g., access, objection, erasure, rectification.\n" +
          "• Maintain Records: Keep logs of processing activities.\n" +
          "• Implement Safeguards: Address risks (technical and organisational measures).\n" +
          "• Notify Breaches: Inform the NCSA within 48 hours if a breach occurs and submit a report within 72 hours.\n" +
          "• Limit International Transfers: Store personal data in Rwanda or obtain proper authorisation for transfers.\n" +
          "• Appoint a DPO (if required): When large-scale or specific processing activities apply."
      },
    },
  },
  {
    id: 4,
    text: "Do you handle personal data in some activities by making all the decisions yourself, and in other activities only follow someone else's instructions?",
    tooltip: "This would indicate you may have different roles depending on the specific processing activities.",
    options: {
      yes: {
        nextQuestion: null,
        message: "You may have a Dual Role - acting as a controller in some activities and as a processor in others.\n\n" +
          "Definition & Context:\n" +
          "An organisation may act as both a controller and a processor if, in some activities, it decides how and why data is processed (controller role), but in others, it simply follows the instructions of a different controller (processor role).\n\n" +
          "Typical Scenario:\n" +
          "• A company processes its employees' data as a controller (making all decisions on collection and use).\n" +
          "• It also processes customer data on behalf of a partner company strictly under that partner's directions, taking the processor role.\n\n" +
          "Key Points:\n" +
          "• Scope Clarity: Each project or data flow needs clear documentation to identify which role you hold.\n" +
          "• Compliance: You must meet controller obligations (for the activities where you decide on data use) and processor obligations (for the activities where you follow instructions).\n" +
          "• Liability: You may bear direct responsibility for compliance failures in each respective role."
      },
      no: {
        nextQuestion: null,
        message: "You are consistently following instructions, so you likely act as a Data Processor (if you do not set data usage decisions). Otherwise, you are a Data Controller.\n\n" +
          "A Data Processor is an individual or entity that processes personal data solely on behalf of, and under the instructions of, a Data Controller. They do not decide why or how the data is used.\n\n" +
          "Key Obligations as a Data Processor under Rwanda's Law:\n\n" +
          "• Register with the NCSA: Just like controllers, processors must also register if they handle data of individuals in Rwanda.\n" +
          "• Follow Instructions: Process data strictly as directed by the controller.\n" +
          "• Maintain Security Measures: Protect data from unauthorised access or loss.\n" +
          "• Notify Breaches: Inform the controller within 48 hours if a data breach occurs.\n" +
          "• Limit International Transfers: Transfer data outside Rwanda only with controller authorisation and in compliance with legal safeguards.\n" +
          "• Keep Records: Logs of processing activities may be required.\n" +
          "• Appoint a DPO (if required): Same criteria as controllers, depending on nature and scope of processing."
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
