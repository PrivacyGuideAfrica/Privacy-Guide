import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import DPIARequirement from "@/components/dpia/DPIARequirement";
import DPIAGuidance from "@/components/dpia/DPIAGuidance";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

type Step = "requirement" | "guidance" | "result";

const DPIAAssessment = () => {
  const [currentStep, setCurrentStep] = useState<Step>("requirement");
  const [isDPIARequired, setIsDPIARequired] = useState<boolean | null>(null);
  const { toast } = useToast();

  const handleAssessmentComplete = (required: boolean) => {
    setIsDPIARequired(required);
    setCurrentStep("result");
    toast({
      title: "Assessment Complete",
      description: "Your DPIA requirement has been determined.",
    });
  };

  const restartAssessment = () => {
    setCurrentStep("requirement");
    setIsDPIARequired(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-center mb-8">
          Data Protection Impact Assessment (DPIA)
        </h1>

        {currentStep === "requirement" && (
          <DPIARequirement onComplete={handleAssessmentComplete} />
        )}

        {currentStep === "result" && isDPIARequired !== null && (
          <div className="space-y-6">
            {isDPIARequired ? (
              <DPIAGuidance />
            ) : (
              <div className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-xl font-semibold mb-4">Assessment Result</h2>
                <p className="text-gray-700 mb-4">
                  A DPIA is not mandatory based on your current processing activities. 
                  However, it is recommended to document your activities for accountability. 
                  If the scope, nature, or purpose of your data processing changes in the 
                  future—such as implementing new technologies, processing sensitive data, 
                  or engaging in large-scale processing—you should reassess whether a DPIA 
                  is required.
                </p>
                <div className="flex gap-4 mt-6">
                  <Button onClick={restartAssessment}>
                    Start New Assessment
                  </Button>
                  <Button variant="outline" onClick={() => window.location.href = "/"}>
                    Take Other Assessments
                  </Button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default DPIAAssessment;