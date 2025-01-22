import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { AuditNecessityAssessment } from "@/components/annual-audit/AuditNecessityAssessment";
import { ClassificationAssessment } from "@/components/annual-audit/ClassificationAssessment";
import { AuditResult } from "@/components/annual-audit/AuditResult";
import { Button } from "@/components/ui/button";
import { ArrowLeft, RotateCcw } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export type AssessmentStep = "necessity" | "classification" | "result";
export type Classification = "MDP-UHL" | "MDP-EHL" | "MDP-OHL" | null;

const AnnualAudit = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState<AssessmentStep>("necessity");
  const [classification, setClassification] = useState<Classification>(null);

  const handleReset = () => {
    setCurrentStep("necessity");
    setClassification(null);
    toast.success("Assessment reset successfully");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-8">
          <Button variant="outline" size="icon" onClick={() => navigate("/")}>
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <h1 className="text-2xl font-bold">Annual Audit Assessment</h1>
          <Button variant="outline" size="icon" onClick={handleReset}>
            <RotateCcw className="h-4 w-4" />
          </Button>
        </div>

        {currentStep === "necessity" && (
          <AuditNecessityAssessment
            onProceedToClassification={() => setCurrentStep("classification")}
            onClassificationSelected={(result: Classification) => {
              setClassification(result);
              setCurrentStep("result");
            }}
          />
        )}

        {currentStep === "classification" && (
          <ClassificationAssessment
            onClassificationDetermined={(result: Classification) => {
              setClassification(result);
              setCurrentStep("result");
            }}
          />
        )}

        {currentStep === "result" && classification && (
          <AuditResult
            classification={classification}
            onReset={handleReset}
          />
        )}
      </div>
    </div>
  );
};

export default AnnualAudit;