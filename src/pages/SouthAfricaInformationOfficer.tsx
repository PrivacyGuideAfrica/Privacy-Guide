import { AssessmentHeader } from "@/components/shared/AssessmentHeader";
import { AssessmentInterface, Question } from "@/components/shared/AssessmentInterface";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Users, Shield, FileText, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const questions: Question[] = [
  {
    id: 1,
    text: "Are you a Responsible Party processing personal information?",
    tooltip: "As a Responsible Party, you are the individual or organisation that determines the purpose and means of processing personal information. If you collect, use, store, or otherwise handle personal information, this applies to you.",
    options: {
      yes: {
        nextQuestion: null,
        message: "Information Officer Required\n\nAn Information Officer is required for your organisation. Every Responsible Party (whether a public or private body) must designate an Information Officer.\n\nBy default, the head of your public or private body serves as the Information Officer, unless another person is formally designated. The designated Information Officer only officially takes up their duties once your organisation has been registered with the Information Regulator.\n\nCore Responsibilities:\n• Encourage compliance with lawful processing conditions\n• Handle data subject requests under POPIA\n• Liaise with the Information Regulator on investigations\n• Ensure overall POPIA compliance\n• Develop compliance frameworks\n• Conduct personal information impact assessments\n• Manage information practice manuals\n• Develop internal systems for information requests\n• Conduct POPIA awareness sessions for staff\n\nNext Steps:\n• Designate your Information Officer (if not already done)\n• Register with Information Regulator\n• Review POPIA Section 55 and Regulation 4"
      },
      no: {
        nextQuestion: null,
        message: "As you are not a Responsible Party, the specific requirement to designate an Information Officer does not apply to you."
      }
    }
  }
];

const SouthAfricaInformationOfficer = () => {
  const navigate = useNavigate();

  const handleCompletion = () => {
    // Assessment completed - no logging needed for production
  };

  const handleReset = () => {
    // Assessment reset - no logging needed for production
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-8">
        <div className="assessment-page">


          <section className="assessment-introduction">
            <div>
              <AssessmentHeader title="Module 8: Appointment of Information Officer and Responsibilities">
                <p>Understand Information Officer appointment and responsibilities under South Africa's Protection of Personal Information Act (POPIA).</p>
              </AssessmentHeader>
              <div className="text-left space-y-4 text-gray-700">
                <Alert>
                  <Shield className="h-4 w-4" />
                  <AlertDescription>
                    <strong>The Information Officer is a central figure in ensuring your organisation's compliance with POPIA.</strong> Every Responsible Party must designate an Information Officer to oversee data protection compliance.
                  </AlertDescription>
                </Alert>
                
                <p>
                  This module guides you, as a <strong>Responsible Party</strong> (an individual or organisation that determines why and how personal information is processed), on the requirements relating to the Information Officer under South Africa's Protection of Personal Information Act (POPIA) when your organisation requires to appoint a deputy information officer with delegated or designated duties.
                </p>
                
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                  <p className="text-sm">
                    <strong>Key Point:</strong> By default, the head of your public or private body serves as the Information Officer, unless another person is formally authorised. The authorised Information Officer only officially takes up their duties once your organisation has been registered with the Information Regulator.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <AssessmentInterface
            title="Information Officer Assessment"
            questions={questions}
            onComplete={handleCompletion}
            onReset={handleReset}
          />

          <div className="mt-8 text-center">
            <Button
              onClick={() => navigate("/countries")}
              variant="outline"
              size="lg"
            >
              Take Other South Africa Assessments
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SouthAfricaInformationOfficer;
