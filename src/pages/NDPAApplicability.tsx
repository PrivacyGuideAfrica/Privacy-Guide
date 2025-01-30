import { useNavigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { AssessmentInterface, Question } from "@/components/shared/AssessmentInterface";

const questions: Question[] = [
  {
    id: 1,
    text: "Are you processing personal data (any information related to an identifiable individual)?",
    tooltip: "Personal data includes names, emails, biometric data, or any information that can identify an individual",
    options: {
      yes: { nextQuestion: 2 },
      no: { 
        nextQuestion: null,
        message: "The NDPA does not apply as you are not processing personal data."
      }
    }
  },
  {
    id: 2,
    text: "Is the personal data being processed within Nigeria or involves Nigerian citizens?",
    options: {
      yes: { nextQuestion: 3 },
      no: { nextQuestion: 4 }
    }
  },
  {
    id: 3,
    text: "Is your organisation domiciled or operating within Nigeria?",
    options: {
      yes: {
        nextQuestion: null,
        message: "The NDPA applies to your processing activities. Ensure compliance with NDPA requirements."
      },
      no: { nextQuestion: 4 }
    }
  },
  {
    id: 4,
    text: "Is your organisation outside Nigeria but processing personal data of Nigerian residents or individuals within Nigeria?",
    options: {
      yes: { nextQuestion: 5 },
      no: {
        nextQuestion: null,
        message: "The NDPA may not apply, but check other relevant data protection laws."
      }
    }
  },
  {
    id: 5,
    text: "Is your processing solely for personal or household purposes and does not violate a data subject's fundamental right to privacy?",
    tooltip: "Household purposes include using personal data for family or personal matters without violating privacy rights.",
    options: {
      yes: {
        nextQuestion: null,
        message: "The NDPA does not apply to your processing."
      },
      no: { nextQuestion: 6 }
    }
  },
  {
    id: 6,
    text: "Is your processing carried out by a competent authority for one of the following purposes:\n- Prevention, investigation, detection, prosecution, or adjudication of a criminal offence?\n- Prevention or control of a national public health emergency?\n- National security?\n- Publication in the public interest?\n- Journalism, educational, artistic, or literary purposes?\n- Establishment, exercise, or defence of legal claims?",
    options: {
      yes: {
        nextQuestion: null,
        message: "The NDPA does not apply to your processing."
      },
      no: {
        nextQuestion: null,
        message: "The NDPA applies to your processing activities."
      }
    }
  }
];

const NDPAApplicability = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <AssessmentInterface
          title="NDPA Applicability Assessment"
          questions={questions}
          onComplete={() => {}}
          onReset={() => {}}
        />
      </div>
    </div>
  );
};

export default NDPAApplicability;
