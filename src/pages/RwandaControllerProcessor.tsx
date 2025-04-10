
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

    // For Q3 and Q4, we determine the result immediately as they're end points
    if (questionId === 3) {
      if (answer === "yes") {
        setFinalMessage(controllerMessage);
      } else {
        setFinalMessage(processorMessage);
      }
    } else if (questionId === 4) {
      // Q4 is always Controller
      setFinalMessage(controllerMessage);
    }
  };

  // The logic is now handled directly in the handleAnswer function

  const questions: Question[] = [
    {
      id: 1,
      text: "Are you processing personal data under the direct instructions of another organisation or entity?",
      tooltip: "This means someone else tells you what data to collect, how to use it, and you follow their guidelines.",
      options: {
        yes: {
          nextQuestion: 2,
        },
        no: {
          nextQuestion: 4, // Skip to Q4 if not following instructions
        },
      },
    },
    {
      id: 2,
      text: "Do you decide the purpose for which the personal data is being used?",
      tooltip: "This means you determine why the data is collected and how it will be used, regardless of whose instructions you follow.",
      options: {
        yes: {
          nextQuestion: 4, // If deciding purpose, go to Q4
        },
        no: {
          nextQuestion: 3, // If not deciding purpose, go to Q3
        },
      },
    },
    {
      id: 3,
      text: "Do you decide what data to collect, from whom, and how long to retain it?",
      tooltip: "This includes making key decisions about data collection scope, sources, and retention periods.",
      options: {
        yes: {
          nextQuestion: null,
          message: null // Will be set to controllerMessage by handleAnswer function
        },
        no: {
          nextQuestion: null,
          message: null // Will be set to processorMessage by handleAnswer function
        },
      },
    },
    {
      id: 4,
      text: "You appear to have decision-making authority over personal data. This typically means you are a Data Controller.",
      tooltip: "Data Controllers determine the purposes and means of processing personal data. They decide what data to collect and how to use it.",
      options: {
        yes: {
          nextQuestion: null,
          message: null // Will be set to controllerMessage by handleAnswer function
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
