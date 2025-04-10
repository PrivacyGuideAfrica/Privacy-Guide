
import { AssessmentInterface, Question } from "@/components/shared/AssessmentInterface";
import { Layout } from "@/components/shared/Layout";
import { RwandaControllerProcessorDescription } from "@/components/controller-processor/RwandaControllerProcessorDescription";
import { useState } from "react";

// Used to track the user's path through the assessment
interface AnswerPath {
  [key: number]: string;
}

const RwandaControllerProcessor = () => {
  const [answerPath, setAnswerPath] = useState<AnswerPath>({});
  const [finalMessage, setFinalMessage] = useState<string | null>(null);

  // Simplified messages that will be shown in the initial result card
  const controllerMessage = "You are likely to be a Data Controller.";

  const processorMessage = "You are likely to be a Data Processor.";

  const dualRoleMessage = "You are likely to have a Dual Role — acting as a controller in some activities and as a processor in others.";

  // Function to handle answer recording and determine assessment result
  const handleAnswer = (questionId: number, answer: string) => {
    const newAnswers = { ...answerPath, [questionId]: answer };
    setAnswerPath(newAnswers);

    // Check for completed assessment at question 4
    if (questionId === 4) {
      determineResult(newAnswers);
    }
  };

  // Function to determine the result based on the answer path
  const determineResult = (answers: AnswerPath) => {
    // Path 1: Q1(No) -> Q2(No) -> Q3(Yes) -> Q4(No) = "You are likely to be a Data Processor"
    if (
      answers[1] === "no" && 
      answers[2] === "no" && 
      answers[3] === "yes" && 
      answers[4] === "no"
    ) {
      setFinalMessage(processorMessage);
      return;
    }
    
    // Path 2: Q1(Yes) -> Q2(Yes) -> Q3(No) -> Q4(No) = "You are likely to be a Data Controller"
    if (
      answers[1] === "yes" && 
      answers[2] === "yes" && 
      answers[3] === "no" && 
      answers[4] === "no"
    ) {
      setFinalMessage(controllerMessage);
      return;
    }
    
    // Path 3: Q1(either) -> Q2(Yes) -> Q3(No) -> Q4(Yes) = "You are likely to have a Dual Role"
    if (
      (answers[1] === "yes" || answers[1] === "no") && 
      answers[2] === "yes" && 
      answers[3] === "no" && 
      answers[4] === "yes"
    ) {
      setFinalMessage(dualRoleMessage);
      return;
    }
    
    // If no specific pattern matches, provide a default message based on the most relevant scenario
    // Default: Controller if Q1 and Q2 are Yes, Q3 is No
    if (
      answers[1] === "yes" && 
      answers[2] === "yes" && 
      answers[3] === "no"
    ) {
      setFinalMessage(controllerMessage);
      return;
    }
    
    // Default: Processor if Q3 is Yes
    if (answers[3] === "yes") {
      setFinalMessage(processorMessage);
      return;
    }
    
    // Default: Dual Role if Q4 is Yes
    if (answers[4] === "yes") {
      setFinalMessage(dualRoleMessage);
      return;
    }

    // Final default if no other conditions match
    setFinalMessage("Your answers do not match one of the common patterns. You may be a Joint Controller or have partial control. Please consider consulting with a data protection professional for a detailed assessment of your specific situation.");
  };

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
          nextQuestion: 2, // Changed to go to Question 2 instead of ending
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
          nextQuestion: 3, // Changed to go to Question 3
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
          nextQuestion: 4, // Changed to go to Question 4
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
          message: null // Will be set by handleAnswer function
        },
        no: {
          nextQuestion: null,
          message: null // Will be set by handleAnswer function
        },
      },
    },
  ];

  // Reset function for the assessment
  const resetAssessment = () => {
    setAnswerPath({});
    setFinalMessage(null);
  };

  return (
    <Layout>
      <div className="container mx-auto py-8">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Controller or Processor Assessment - Rwanda
        </h1>
        <div className="mb-8 max-w-3xl mx-auto">
          <RwandaControllerProcessorDescription />
        </div>
        <AssessmentInterface
          title="Controller/Processor Assessment"
          questions={questions}
          onComplete={() => {}}
          onReset={resetAssessment}
          customAnswerHandler={handleAnswer}
          finalMessage={finalMessage}
        />
      </div>
    </Layout>
  );
};

export default RwandaControllerProcessor;
