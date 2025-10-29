import { AssessmentInterface, Question } from "@/components/shared/AssessmentInterface";
import { Layout } from "@/components/shared/Layout";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Shield, AlertTriangle } from "lucide-react";

const specialInformationQuestions: Question[] = [
  {
    id: 1,
    text: "Do you process personal information that falls into any of these categories?\n\n• Racial or ethnic origin\n• Religious or philosophical beliefs\n• Trade union membership\n• Political persuasion\n• Health or sex life\n• Biometric information (e.g., fingerprints, facial scans)\n• Information about an individual's criminal behaviour or alleged commission of an offence",
    tooltip: "Processing these types of personal information is generally prohibited by POPIA, unless specific conditions are met. This includes any data collection, storage, organization, structuring, adaptation, alteration, retrieval, consultation, use, disclosure, or destruction of such information.",
    options: {
      yes: { nextQuestion: 2 },
      no: { 
        nextQuestion: null, 
        message: "You do not appear to process special personal information, so the general prohibition under POPIA does not apply to you. However, ensure you continue to comply with general POPIA requirements for any other personal information you process." 
      }
    }
  },
  {
    id: 2,
    text: "Do you process this special personal information based on any of the following lawful reasons?\n\n• The data subject has given their specific consent for the processing\n• It is necessary for the establishment, exercise, or defence of a right or obligation in law\n• It is necessary to comply with an obligation of international public law\n• It is processed for historical, statistical, or research purposes serving a public interest (where consent would be impossible or involve disproportionate effort, with sufficient privacy guarantees)\n• The information has been deliberately made public by the data subject\n• The processing is done under specific POPIA authorisations (Sections 29-33 for health, criminal behaviour, biometric information, race, trade union membership, or political persuasion)",
    tooltip: "These are the specific conditions under which processing of special personal information is allowed under POPIA. If none apply, you may need authorisation from the Information Regulator. Each lawful basis has specific requirements and safeguards that must be met.",
    options: {
      yes: { 
        nextQuestion: null, 
        message: "Your processing of special personal information appears to be lawful under POPIA. You are processing this sensitive data under one of the specific conditions authorised by the Act. However, you must maintain proper documentation of your lawful basis and implement appropriate safeguards to protect this highly sensitive information.\n\nNext Steps:\n• Ensure all appropriate technical and organisational safeguards are in place\n• Maintain accurate records of your lawful basis and any consent obtained\n• Implement additional security measures appropriate for special personal information\n• Regularly review your processing to ensure continued compliance\n• Train staff on the heightened requirements for special personal information\n• Consider conducting a Data Protection Impact Assessment (DPIA) if processing involves high risks\n\nRemember: Special personal information requires heightened protection due to its sensitive nature and the potential for significant harm if compromised." 
      },
      no: { nextQuestion: 3 }
    }
  },
  {
    id: 3,
    text: "Do you have authorisation from the Information Regulator for this processing?",
    tooltip: "The Information Regulator can grant specific authorisation for processing special personal information in certain circumstances where none of the standard lawful bases apply. This requires a formal application process.",
    options: {
      yes: { 
        nextQuestion: null, 
        message: "Your processing of special personal information is lawful under an authorisation granted by the Information Regulator. Ensure you comply with any conditions attached to the authorisation and maintain records of this approval.\n\nNext Steps:\n• Review and comply with all conditions attached to your authorisation\n• Maintain documentation of the authorisation approval\n• Monitor for any changes to the terms of your authorisation\n• Implement all required technical and organisational safeguards\n• Keep the Information Regulator informed of any material changes to your processing" 
      },
      no: { 
        nextQuestion: null, 
        message: "You appear to be processing special personal information without a lawful basis under POPIA. This type of processing is generally prohibited unless one of the specific conditions applies or you have authorisation from the Information Regulator.\n\nImmediate Actions Required:\n• Stop processing the special personal information immediately until you obtain authorisation\n• Apply for authorisation from the Information Regulator in the manner prescribed\n• Contact the Information Regulator at: POPIACompliance@inforegulator.org.za\n• Seek legal advice on your specific circumstances and processing activities\n• Implement immediate security measures to protect any special personal information you currently hold\n• Document your assessment and the steps you are taking to achieve compliance\n\nDo not resume processing special personal information until you have obtained the necessary authorisation. Failure to comply with POPIA's requirements can result in significant penalties and harm to the data subjects whose information you process." 
      }
    }
  }
];

const SouthAfricaSpecialInformation = () => {
  const navigate = useNavigate();

  const handleComplete = () => {
    // Assessment completed
  };

  const handleReset = () => {
    // Assessment reset
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-6">
            <Button
              variant="ghost"
              onClick={() => navigate('/countries/south-africa')}
              className="mb-4"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to South Africa Assessments
            </Button>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <div className="flex items-center mb-6">
                <Shield className="h-8 w-8 text-green-600 mr-3" />
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">
                    Processing Special Personal Information in South Africa
                  </h1>
                  <p className="text-gray-600">
                    POPIA Module 6: Understanding heightened protection requirements for sensitive data
                  </p>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-8">
                <div className="flex items-start">
                  <AlertTriangle className="h-6 w-6 text-amber-600 mr-3 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-amber-800 mb-2">
                      About Special Personal Information
                    </h3>
                    <p className="text-amber-700 mb-4">
                      This module guides you, as a Responsible Party, in understanding the stricter rules for handling 
                      'special personal information' under South Africa's Protection of Personal Information Act (POPIA). 
                      This type of information has heightened protection due to its sensitive nature and the higher risk 
                      of harm if compromised or misused.
                    </p>
                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-amber-800">Key Definitions:</p>
                      <ul className="text-sm text-amber-700 space-y-1">
                        <li><strong>Personal Information:</strong> Any information about an identifiable, living natural person, and where applicable, an identifiable existing juristic person.</li>
                        <li><strong>Special Personal Information:</strong> A subset of personal information considered particularly sensitive, including racial origin, religious beliefs, health information, biometric data, and criminal records.</li>
                        <li><strong>Responsible Party:</strong> An individual or organisation that determines why and how personal information is processed.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <AssessmentInterface
                title="Special Personal Information Assessment"
                questions={specialInformationQuestions}
                onComplete={handleComplete}
                onReset={handleReset}
              />
            </div>

            <div className="text-center">
              <Button
                variant="outline"
                onClick={() => navigate('/countries/south-africa')}
                className="mb-4"
              >
                Take Other South Africa Assessments
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SouthAfricaSpecialInformation;