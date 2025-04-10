
import { AssessmentInterface, Question } from "@/components/shared/AssessmentInterface";
import { Layout } from "@/components/shared/Layout";
import { NigeriaLawfulBasisDescription } from "@/components/lawful-basis/NigeriaLawfulBasisDescription";
import { NigeriaLawfulBasisGuidance } from "@/components/lawful-basis/NigeriaLawfulBasisGuidance";
import { useState, lazy, Suspense } from "react";
import { CheckCircle, FileCheck, Gavel, Heart, Users, Handshake } from "lucide-react";

// Used to track the user's path through the assessment
interface AnswerPath {
  [key: number]: string;
}

const NigeriaLawfulBasis = () => {
  const [answerPath, setAnswerPath] = useState<AnswerPath>({});
  const [finalMessage, setFinalMessage] = useState<string | null>(null);
  const [selectedBasis, setSelectedBasis] = useState<string>("");

  // Messages for each lawful basis
  const consentMessage = "Your most appropriate lawful basis is likely to be Consent. This requires obtaining explicit, informed, and freely given consent from data subjects for your specific processing activities.";

  const contractMessage = "Your most appropriate lawful basis is likely to be Contractual Necessity. This basis applies when processing is necessary to fulfill your contractual obligations to the data subject or to take steps at their request before entering into a contract.";

  const legalMessage = "Your most appropriate lawful basis is likely to be Legal Obligation. This basis applies when you need to process the data to comply with a legal requirement under Nigerian law.";

  const vitalMessage = "Your most appropriate lawful basis is likely to be Vital Interests. This basis applies when processing is necessary to protect someone's life or physical integrity, typically in emergency situations.";

  const publicMessage = "Your most appropriate lawful basis is likely to be Public Interest. This basis applies when processing is necessary for a task carried out in the public interest or in the exercise of official authority.";

  const legitimateMessage = "Your most appropriate lawful basis is likely to be Legitimate Interests. This basis applies when processing is necessary for your legitimate interests or those of a third party, provided these interests don't override the fundamental rights and freedoms of the data subject.";

  // Function to handle answer recording and determine assessment result
  const handleAnswer = (questionId: number, answer: string) => {
    const newAnswers = { ...answerPath, [questionId]: answer };
    setAnswerPath(newAnswers);

    // Decision tree logic
    if (questionId === 1) {
      if (answer === "yes") {
        // If processing for legal obligation, go to legal obligation confirmation
        setCurrentQuestionId(2);
      } else {
        // If not for legal obligation, check for contract necessity
        setCurrentQuestionId(3);
      }
    } 
    else if (questionId === 2) {
      if (answer === "yes") {
        // Confirmed legal obligation
        setFinalMessage(legalMessage);
        setSelectedBasis("Legal Obligation");
      } else {
        // Not truly a legal obligation, check for contract
        setCurrentQuestionId(3);
      }
    }
    else if (questionId === 3) {
      if (answer === "yes") {
        // If processing for a contract, go to contract confirmation
        setCurrentQuestionId(4);
      } else {
        // If not for a contract, check for vital interests
        setCurrentQuestionId(5);
      }
    }
    else if (questionId === 4) {
      if (answer === "yes") {
        // Confirmed necessary for contract
        setFinalMessage(contractMessage);
        setSelectedBasis("Contractual Necessity");
      } else {
        // Not truly necessary for contract, check for vital interests
        setCurrentQuestionId(5);
      }
    }
    else if (questionId === 5) {
      if (answer === "yes") {
        // If processing for vital interests, go to vital interests confirmation
        setCurrentQuestionId(6);
      } else {
        // If not for vital interests, check for public interest
        setCurrentQuestionId(7);
      }
    }
    else if (questionId === 6) {
      if (answer === "yes") {
        // Confirmed vital interests
        setFinalMessage(vitalMessage);
        setSelectedBasis("Vital Interests");
      } else {
        // Not truly for vital interests, check for public interest
        setCurrentQuestionId(7);
      }
    }
    else if (questionId === 7) {
      if (answer === "yes") {
        // If processing for public interest, go to public interest confirmation
        setCurrentQuestionId(8);
      } else {
        // If not for public interest, check for legitimate interests
        setCurrentQuestionId(9);
      }
    }
    else if (questionId === 8) {
      if (answer === "yes") {
        // Confirmed public interest
        setFinalMessage(publicMessage);
        setSelectedBasis("Public Interest");
      } else {
        // Not truly for public interest, check for legitimate interests
        setCurrentQuestionId(9);
      }
    }
    else if (questionId === 9) {
      if (answer === "yes") {
        // If processing might be for legitimate interests, go to legitimate interests conditions
        setCurrentQuestionId(10);
      } else {
        // If not even for legitimate interests, must be consent
        setFinalMessage(consentMessage);
        setSelectedBasis("Consent");
      }
    }
    else if (questionId === 10) {
      if (answer === "yes") {
        // If legitimate interests would override rights, must be consent
        setFinalMessage(consentMessage);
        setSelectedBasis("Consent");
      } else {
        // Legitimate interests is appropriate
        setFinalMessage(legitimateMessage);
        setSelectedBasis("Legitimate Interests");
      }
    }
  };

  // Track the current question ID separately from the answers
  const [currentQuestionId, setCurrentQuestionId] = useState(1);

  const questions: Question[] = [
    {
      id: 1,
      text: "Are you processing personal data to comply with a Nigerian law or regulation?",
      tooltip: "This includes legal requirements explicitly stated in Nigerian legislation, regulations, or court orders that mandate specific data processing.",
      options: {
        yes: {
          nextQuestion: 2, // Go to legal obligation confirmation
          message: null
        },
        no: {
          nextQuestion: 3, // Not for legal obligation, check for contract
          message: null
        },
      },
    },
    {
      id: 2,
      text: "Can you identify the specific legal provision that requires this processing?",
      tooltip: "You should be able to point to a specific section of Nigerian law or regulation that makes this processing necessary.",
      options: {
        yes: {
          nextQuestion: null, // End with legal obligation result
          message: null // Will be set to legalMessage by handleAnswer function
        },
        no: {
          nextQuestion: 3, // Not truly a legal obligation, check for contract
          message: null
        },
      },
    },
    {
      id: 3,
      text: "Are you processing the data to fulfill a contract with the data subject?",
      tooltip: "This includes processing necessary to deliver services or products the individual has signed up for, or steps before entering a contract at their request.",
      options: {
        yes: {
          nextQuestion: 4, // Go to contract confirmation
          message: null
        },
        no: {
          nextQuestion: 5, // Not for contract, check for vital interests
          message: null
        },
      },
    },
    {
      id: 4,
      text: "Is the processing strictly necessary to fulfill the contract (not just useful or enhanced service)?",
      tooltip: "The contract couldn't be performed without this specific processing - it's essential, not just an enhancement or convenience.",
      options: {
        yes: {
          nextQuestion: null, // End with contract result
          message: null // Will be set by handleAnswer function
        },
        no: {
          nextQuestion: 5, // Not strictly necessary for contract, check vital interests
          message: null
        },
      },
    },
    {
      id: 5,
      text: "Are you processing the data to protect someone's life or physical safety?",
      tooltip: "This typically applies in emergencies or health contexts where processing is needed to prevent serious harm.",
      options: {
        yes: {
          nextQuestion: 6, // Go to vital interests confirmation
          message: null
        },
        no: {
          nextQuestion: 7, // Not for vital interests, check for public interest
          message: null
        },
      },
    },
    {
      id: 6,
      text: "Is this processing necessary in an emergency where no other basis can be relied upon?",
      tooltip: "Vital interests is generally only appropriate in life or death situations or to prevent serious harm when you cannot rely on consent or other bases.",
      options: {
        yes: {
          nextQuestion: null, // End with vital interests result
          message: null // Will be set by handleAnswer function
        },
        no: {
          nextQuestion: 7, // Not truly vital interests, check public interest
          message: null
        },
      },
    },
    {
      id: 7,
      text: "Are you processing the data to perform a task in the public interest or as part of official authority?",
      tooltip: "This typically applies to public authorities or organizations carrying out tasks in the public interest with a clear basis in law.",
      options: {
        yes: {
          nextQuestion: 8, // Go to public interest confirmation
          message: null
        },
        no: {
          nextQuestion: 9, // Not for public interest, check for legitimate interests
          message: null
        },
      },
    },
    {
      id: 8,
      text: "Can you identify a clear public interest or official authority basis for this processing?",
      tooltip: "There should be a clear basis in Nigerian law for the public interest task or official authority you're exercising.",
      options: {
        yes: {
          nextQuestion: null, // End with public interest result
          message: null // Will be set by handleAnswer function
        },
        no: {
          nextQuestion: 9, // Not truly public interest, check legitimate interests
          message: null
        },
      },
    },
    {
      id: 9,
      text: "Are you processing data to pursue legitimate business interests or third-party interests?",
      tooltip: "This includes commercial interests, organizational objectives, or third-party goals that have a valid justification.",
      options: {
        yes: {
          nextQuestion: 10, // Go to legitimate interests conditions
          message: null
        },
        no: {
          nextQuestion: null, // Not pursuing any legitimate interests, must be consent
          message: null // Will be set by handleAnswer function
        },
      },
    },
    {
      id: 10,
      text: "Would your legitimate interests be overridden by the data subject's rights or interests?",
      tooltip: "Consider if your processing would adversely impact individuals in ways that outweigh your legitimate interests.",
      options: {
        yes: {
          nextQuestion: null, // If rights override interests, must be consent
          message: null // Will be set by handleAnswer function
        },
        no: {
          nextQuestion: null, // Legitimate interests is appropriate
          message: null // Will be set by handleAnswer function
        },
      },
    },
  ];

  // Get the current question to display
  const currentQuestion = questions.find(q => q.id === currentQuestionId);

  // Reset function for the assessment
  const resetAssessment = () => {
    setAnswerPath({});
    setFinalMessage(null);
    setSelectedBasis("");
    setCurrentQuestionId(1);
  };

  return (
    <Layout>
      <div className="container mx-auto py-8">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Lawful Basis Assessment - Nigeria
        </h1>
        <div className="mb-8 max-w-3xl mx-auto">
          <NigeriaLawfulBasisDescription />
        </div>
        <AssessmentInterface
          title="Lawful Basis Assessment"
          questions={questions}
          onComplete={() => {}}
          onReset={resetAssessment}
          customAnswerHandler={handleAnswer}
          finalMessage={finalMessage}
        />
        
        {finalMessage && selectedBasis && (
          <div className="mt-8 max-w-3xl mx-auto">
            <NigeriaLawfulBasisGuidance selectedBasis={selectedBasis} />
          </div>
        )}
      </div>
    </Layout>
  );
};

export default NigeriaLawfulBasis;
