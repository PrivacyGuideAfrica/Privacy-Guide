
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

  // Function to handle answer recording and determine assessment result
  const handleAnswer = (questionId: number, answer: string) => {
    const newAnswers = { ...answerPath, [questionId]: answer };
    setAnswerPath(newAnswers);

    // Determine the result based on the answers to the questions
    if (questionId === 1 && answer === "yes") {
      // If they decide what data to collect, they're a controller
      setFinalMessage(controllerMessage);
    } else if (questionId === 2 && answer === "yes") {
      // If they determine the purpose, they're a controller
      setFinalMessage(controllerMessage);
    } else if (questionId === 3) {
      if (answer === "yes") {
        // If they follow instructions, they're a processor
        setFinalMessage(processorMessage);
      } else {
        // If they don't follow instructions, they're a controller
        setFinalMessage(controllerMessage);
      }
    }
  };

  // The logic is handled directly in the handleAnswer function

  const questions: Question[] = [
    {
      id: 1,
      text: "Do you decide what personal data to collect and from whom?",
      tooltip: "This means you make decisions about what specific data points to gather and which individuals or groups to collect data from.",
      options: {
        yes: {
          nextQuestion: null,
          message: null // Will be set to controllerMessage by handleAnswer function
        },
        no: {
          nextQuestion: 2, // If not deciding what data to collect, go to Q2
        },
      },
    },
    {
      id: 2,
      text: "Do you determine the purpose or outcome for which the personal data is processed?",
      tooltip: "This means you decide why the data is being collected and how it will ultimately be used.",
      options: {
        yes: {
          nextQuestion: null,
          message: null // Will be set to controllerMessage by handleAnswer function
        },
        no: {
          nextQuestion: 3, // If not determining purpose, go to Q3
        },
      },
    },
    {
      id: 3,
      text: "Do you process data strictly according to instructions from another organization?",
      tooltip: "This means you follow direction from someone else about how to handle the data, without making key decisions yourself.",
      options: {
        yes: {
          nextQuestion: null,
          message: null // Will be set to processorMessage by handleAnswer function
        },
        no: {
          nextQuestion: null,
          message: null // Will be set to controllerMessage by handleAnswer function
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
