import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RiskAssessment } from "@/components/data-breach/RiskAssessment";
import { NotificationProtocol } from "@/components/data-breach/NotificationProtocol";
import { ResultDisplay } from "@/components/data-breach/ResultDisplay";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { RotateCcw } from "lucide-react";
import { useNavigate } from "react-router-dom";

export type AssessmentStep = "risk" | "notification" | "result";

const DataBreachAssessment = () => {
  const [currentStep, setCurrentStep] = useState<AssessmentStep>("risk");
  const [isHighRisk, setIsHighRisk] = useState<boolean | null>(null);
  const navigate = useNavigate();

  const progress = 
    currentStep === "risk" ? 33 :
    currentStep === "notification" ? 66 :
    currentStep === "result" ? 100 : 0;

  const resetAssessment = () => {
    setCurrentStep("risk");
    setIsHighRisk(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-3xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Data Breach Assessment</span>
              <Button
                variant="outline"
                size="sm"
                onClick={resetAssessment}
                className="gap-2"
              >
                <RotateCcw className="h-4 w-4" />
                Reset
              </Button>
            </CardTitle>
            <Progress value={progress} className="h-2" />
          </CardHeader>
          <CardContent>
            {currentStep === "risk" && (
              <RiskAssessment
                onComplete={(isHigh) => {
                  setIsHighRisk(isHigh);
                  setCurrentStep("notification");
                }}
              />
            )}
            {currentStep === "notification" && (
              <NotificationProtocol
                isHighRisk={isHighRisk!}
                onComplete={() => setCurrentStep("result")}
              />
            )}
            {currentStep === "result" && (
              <ResultDisplay
                isHighRisk={isHighRisk!}
                onReset={resetAssessment}
                onHome={() => navigate("/")}
              />
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DataBreachAssessment;