import { Layout } from "@/components/shared/Layout";
import { AssessmentInterface, Question } from "@/components/shared/AssessmentInterface";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Baby, Shield, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";

const childrenInformationQuestions: Question[] = [
  {
    id: 1,
    text: "Do you process personal information concerning an individual under the age of 18?",
    tooltip: "This includes any collection, storage, use, or disclosure of information related to a child.",
    options: {
      yes: {
        nextQuestion: 2,
      },
      no: {
        nextQuestion: null,
        message: "You do not appear to process personal information of children, so the specific rules for children's data under POPIA do not apply to you.",
      },
    },
  },
  {
    id: 2,
    text: "Is your processing of personal information of children based on any of the following reasons?\n\n• You have the prior consent of a competent person (e.g., parent or guardian)\n• The processing is necessary for the establishment, exercise, or defence of a right or obligation in law\n• The processing is necessary to comply with an obligation of international public law\n• The processing is for historical, statistical, or research purposes, where the purpose serves a public interest and is necessary for that purpose, and sufficient guarantees are provided to protect the child's privacy\n• The information has been deliberately made public by the child with the consent of a competent person",
    tooltip: "If none of these specific conditions apply, processing personal information of children is generally prohibited.",
    options: {
      yes: {
        nextQuestion: null,
        message: "Your processing of children's personal information appears to be lawful.\n\nYou are processing children's personal information under one of the specific conditions authorised by POPIA. Always ensure you maintain proper documentation of your lawful basis and the safeguards you have in place to protect this sensitive data.\n\nNext steps:\n• Ensure all appropriate safeguards are in place as required for children's personal information\n• Maintain accurate records of your lawful basis and any consents obtained for processing this data",
      },
      no: {
        nextQuestion: 3,
      },
    },
  },
  {
    id: 3,
    text: "Do you have authorisation from the Information Regulator for this processing?",
    tooltip: "The Information Regulator can grant specific authorisation for processing children's personal information in certain circumstances where none of the standard lawful bases apply, for example, if it is in the public interest and appropriate safeguards are in place. This requires a formal application process.",
    options: {
      yes: {
        nextQuestion: null,
        message: "Your processing of children's personal information is lawful under an authorisation granted by the Information Regulator.\n\nYou have obtained authorisation from the Information Regulator to process children's personal information. Ensure you comply with any conditions attached to the authorisation and maintain records of this approval.\n\nNext steps:\n• Review and comply with all conditions attached to your authorisation\n• Maintain documentation of the authorisation approval\n• Monitor for any changes to the terms of your authorisation\n• Implement all required technical and organisational safeguards for children's data\n• Keep the Information Regulator informed of any material changes to your processing",
      },
      no: {
        nextQuestion: null,
        message: "You appear to be processing personal information of children without a lawful basis under POPIA.\n\nThis type of processing is generally prohibited unless one of the specific conditions applies or you have authorisation from the Information Regulator.\n\nImmediate Actions Required:\n• Stop processing the children's personal information immediately until you obtain authorisation\n• Apply for authorisation from the Information Regulator in the manner prescribed\n• Contact the Information Regulator at: POPIACompliance@inforegulator.org.za\n• Seek legal advice on your specific circumstances and processing activities\n• Implement immediate security measures to protect any children's personal information you currently hold\n• Document your assessment and the steps you are taking to achieve compliance\n\nDo not resume processing children's personal information until you have obtained the necessary authorisation. Failure to comply with POPIA's requirements can result in significant penalties and harm to the children whose information you process.",
      },
    },
  },
];

export default function SouthAfricaChildrenInformation() {
  const navigate = useNavigate();

  const handleComplete = () => {
    // Assessment completed - no logging needed for production
  };

  const handleReset = () => {
    // Assessment reset - no logging needed for production
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <Button
            variant="ghost"
            onClick={() => navigate("/countries/south-africa")}
            className="mb-6 text-gray-600 hover:text-gray-800"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to South Africa Assessments
          </Button>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full">
                <Baby className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  Processing Personal Information of Children
                </h1>
                <p className="text-lg text-gray-600 mt-2">
                  Module 7: Understanding POPIA's Protection of Children's Data
                </p>
              </div>
            </div>

            <Alert className="mb-6 border-amber-200 bg-amber-50">
              <AlertTriangle className="h-4 w-4 text-amber-600" />
              <AlertDescription className="text-amber-800">
                <strong>Special Protection for Children:</strong> POPIA places particular emphasis on protecting children's privacy due to their vulnerability. Stricter rules apply to processing their personal information.
              </AlertDescription>
            </Alert>

            <div className="prose max-w-none mb-8">
              <p className="text-gray-700 text-base leading-relaxed mb-4">
                This module guides you, as a Responsible Party (an individual or organisation that determines why and how personal information is processed), in understanding the strict rules for handling personal information relating to children under South Africa's Protection of Personal Information Act (POPIA).
              </p>
              
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
                <div className="flex items-start">
                  <Shield className="h-5 w-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-blue-800 mb-2">
                      <strong>Key Definitions under POPIA:</strong>
                    </p>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li><strong>Child:</strong> A natural person under the age of 18 years who is not legally competent, without the assistance of a competent person, to take any action or decision concerning themselves.</li>
                      <li><strong>Competent person:</strong> Someone legally able to consent on behalf of the child (e.g., parent or guardian).</li>
                    </ul>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 text-base leading-relaxed">
                Children require enhanced protection under POPIA due to their vulnerability and limited capacity to understand the implications of data processing. This assessment will help you determine if your processing activities comply with the specific requirements for children's personal information.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <AssessmentInterface
              title="Children's Information Processing Assessment"
              questions={childrenInformationQuestions}
              onComplete={handleComplete}
              onReset={handleReset}
            />
          </div>

          <div className="mt-8 text-center">
            <Button
              onClick={() => navigate("/countries/south-africa")}
              variant="outline"
              className="bg-white hover:bg-gray-50"
            >
              Take Other South Africa Assessments
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}