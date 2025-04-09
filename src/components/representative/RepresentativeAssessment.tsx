
import { useState } from "react";
import { AssessmentInterface, Question } from "@/components/shared/AssessmentInterface";
import { Separator } from "@/components/ui/separator";
import { 
  CheckCircle, 
  Building, 
  Globe, 
  Users, 
  FileText, 
  ClipboardList,
  AlertTriangle
} from "lucide-react";

const representativeQuestions: Question[] = [
  {
    id: 1,
    text: "Are you a Data Controller or a Data Processor?",
    tooltip: "A Data Controller determines the purposes and means of processing personal data. A Data Processor processes personal data on behalf of the Controller.",
    options: {
      yes: {
        nextQuestion: 2,
        message: null,
      },
      no: {
        nextQuestion: null,
        message: "Based on your response, you do not need to designate a representative in Rwanda because you are neither a Data Controller nor a Data Processor.",
      },
    },
  },
  {
    id: 2,
    text: "Are you established or do you reside outside Rwanda?",
    tooltip: "This refers to whether your organization has a physical presence (establishment) in Rwanda or if you as an individual reside outside Rwanda.",
    options: {
      yes: {
        nextQuestion: 3,
        message: null,
      },
      no: {
        nextQuestion: null,
        message: "Based on your response, you do not need to designate a representative in Rwanda because you are established or reside within Rwanda.",
      },
    },
  },
  {
    id: 3,
    text: "Do you process the personal data of individuals located in Rwanda?",
    tooltip: "Processing includes collecting, recording, organizing, structuring, storing, adapting, using, disclosing, or otherwise making available personal data of individuals in Rwanda.",
    options: {
      yes: {
        nextQuestion: null,
        message: "Based on your responses, you must designate a representative in writing within Rwanda.\n\nAs an organization processing personal data of Rwandan residents while being established outside Rwanda, you are required to appoint a local representative under the Rwandan Data Protection Law.",
      },
      no: {
        nextQuestion: null,
        message: "Based on your response, you do not need to designate a representative in Rwanda because you do not process personal data of individuals located in Rwanda.",
      },
    },
  },
];

export const RepresentativeAssessment = () => {
  const [isComplete, setIsComplete] = useState(false);

  const handleComplete = () => {
    setIsComplete(true);
  };

  const handleReset = () => {
    setIsComplete(false);
  };

  const renderQuestion = (question: Question) => {
    return (
      <div className="space-y-2">
        <p className="text-lg">{question.text}</p>
      </div>
    );
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Do You Need to Designate a Representative in Rwanda?</h1>
          <p className="text-muted-foreground">
            This module helps you determine whether you must appoint a representative under the Rwandan Data Protection Law, and provides additional guidance if you do.
          </p>
        </div>

        <AssessmentInterface
          title="Representative Assessment"
          questions={representativeQuestions}
          onComplete={handleComplete}
          onReset={handleReset}
          renderQuestion={renderQuestion}
        />

        {isComplete && representativeQuestions.find(q => q.id === 3)?.options.yes.message && (
          <div className="space-y-8 mt-8 animate-fade-in">
            <Separator />
            
            <div className="bg-card border rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-6">If You Must Designate a Representative</h2>
              <p className="mb-4 text-muted-foreground">
                The following sections help you understand who can serve as your representative, how to appoint them, what they must do, and when to report changes.
              </p>

              <div className="space-y-8">
                {/* Who Can Be Your Representative section */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Building className="h-5 w-5 text-ndpa-green" />
                    <h3 className="text-xl font-semibold">Who Can Be Your Representative?</h3>
                  </div>
                  <p className="text-muted-foreground">A representative must be:</p>
                  <ul className="list-disc list-inside space-y-2 ml-6 text-muted-foreground">
                    <li>A corporate body or legal entity established in Rwanda (this can be an external service provider or a local entity within your company group).</li>
                    <li>Registered as a Data Controller or Data Processor with the NCSA (if required by law).</li>
                    <li>Knowledgeable about your business and data processing operations.</li>
                    <li>Able to fulfill the responsibilities in your representation agreement.</li>
                    <li>Capable of handling data subjects' requests and cooperating with the NCSA.</li>
                  </ul>
                </div>

                {/* How to Designate a Representative section */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-ndpa-green" />
                    <h3 className="text-xl font-semibold">How to Designate a Representative</h3>
                  </div>
                  <ul className="list-disc list-inside space-y-2 ml-6 text-muted-foreground">
                    <li>You must do so in writing through a "representation agreement."</li>
                    <li>This agreement details the roles and responsibilities of both parties and demonstrates compliance with Rwandan Data Protection Law.</li>
                  </ul>
                </div>

                {/* Representative's Duties section */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <ClipboardList className="h-5 w-5 text-ndpa-green" />
                    <h3 className="text-xl font-semibold">Representative's Duties</h3>
                  </div>
                  <ul className="list-disc list-inside space-y-2 ml-6 text-muted-foreground">
                    <li>Act on your behalf in all data protection and privacy matters.</li>
                    <li>Respond to inquiries from data subjects and the NCSA.</li>
                    <li>Keep records of your data processing activities, ready for inspection.</li>
                    <li>Take on liabilities and enforce legal decisions against you, as applicable.</li>
                    <li>Perform other duties assigned by the NCSA.</li>
                  </ul>
                </div>

                {/* When to Report a Change section */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-ndpa-green" />
                    <h3 className="text-xl font-semibold">When to Report a Change of Representative</h3>
                  </div>
                  <p className="text-muted-foreground">You and your representative must notify the NCSA in writing within 15 working days of:</p>
                  <ul className="list-disc list-inside space-y-2 ml-6 text-muted-foreground">
                    <li>Any changes to the representation agreement.</li>
                    <li>Designation of a new representative.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
