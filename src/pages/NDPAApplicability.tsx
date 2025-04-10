import { Layout } from "@/components/shared/Layout";
import { AssessmentInterface, Question } from "@/components/shared/AssessmentInterface";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Globe } from "lucide-react";

const questions: Question[] = [
  {
    id: 1,
    text: "Are you processing personal data (any information related to an identifiable individual)?",
    tooltip: "Personal data includes names, emails, biometric data, or any information that can identify an individual directly or indirectly.",
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
    text: "Is the personal data being processed within Nigeria or does it involve data subjects (people) in Nigeria?",
    tooltip: "Processing can include collection, storage, analysis, or transfer of data involving Nigerian residents.",
    options: {
      yes: { nextQuestion: 3 },
      no: { nextQuestion: 4 }
    }
  },
  {
    id: 3,
    text: "Is your organisation established or operating within Nigeria?",
    tooltip: "An organisation is considered established in Nigeria if it has offices, branches, or carries out business within Nigeria.",
    options: {
      yes: {
        nextQuestion: null,
        message: "Based on your responses, the NDPA applies to your organisation. Ensure compliance with Nigeria's data protection regulations."
      },
      no: { nextQuestion: 4 }
    }
  },
  {
    id: 4,
    text: "Is your organisation outside Nigeria but processing personal data of data subjects in Nigeria?",
    tooltip: "Even if your organisation is outside Nigeria, the NDPA applies if you offer goods or services to people in Nigeria or monitor their behaviour.",
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
    text: "Are you only using personal data for personal or family reasons at home, and are you making sure you are not invading anyone's privacy?",
    tooltip: "Household purposes include personal use such as storing contacts or managing family finances but do not cover surveillance or sharing data publicly.",
    options: {
      yes: {
        nextQuestion: null,
        message: "The NDPA does not apply to your processing activities, but ensure you follow relevant data protection laws in your jurisdiction."
      },
      no: { nextQuestion: 6 }
    }
  },
  {
    id: 6,
    text: "Is the information being used by a government agency for one of these reasons?\n\n• Prevention, investigation, detection, prosecution, or adjudication of a criminal offence?\n• Prevention or control of a national public health emergency?\n• National security?\n• Publication in the public interest?\n• Journalism, educational, artistic, or literary purposes?\n• Establishment, exercise, or defence of legal claims?",
    tooltip: "Government agencies have specific exemptions under the NDPA for certain processing activities in the public interest.",
    options: {
      yes: {
        nextQuestion: null,
        message: "The NDPA does not apply to your processing activities, but ensure you follow relevant data protection laws in your jurisdiction."
      },
      no: {
        nextQuestion: null,
        message: "Based on your responses, the NDPA applies to your organisation. Ensure compliance with Nigeria's data protection regulations."
      }
    }
  }
];

const NDPAApplicability = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <AssessmentInterface
          title="NDPA Applicability Assessment"
          questions={questions}
          onComplete={() => {}}
          onReset={() => {}}
        />
        
        <div className="mt-8 text-center">
          <Link 
            to="/countries" 
            className="inline-flex items-center px-6 py-3 border border-blue-500 text-blue-600 rounded-md font-medium hover:bg-blue-50 transition-colors"
          >
            <Globe className="mr-2 h-5 w-5" />
            Take Other Assessments
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NDPAApplicability;