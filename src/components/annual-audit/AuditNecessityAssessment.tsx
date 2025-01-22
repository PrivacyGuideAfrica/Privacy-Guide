import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { HelpCircle } from "lucide-react";

interface Props {
  onProceedToClassification: () => void;
}

export const AuditNecessityAssessment = ({ onProceedToClassification }: Props) => {
  const [answer, setAnswer] = useState<string>("");
  const [showMessage, setShowMessage] = useState(false);

  const handleAnswer = (value: string) => {
    setAnswer(value);
    if (value === "yes") {
      setShowMessage(false);
    } else {
      setShowMessage(true);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Audit Necessity Assessment</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-start gap-2">
            <p className="text-lg">
              Are you processing personal data that falls under the category of Major Data Processing?
            </p>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <HelpCircle className="h-5 w-5 text-gray-400" />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="max-w-xs">
                    Major Data Processing includes large-scale processing, sensitive data handling, or high-risk processing activities
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>

          <RadioGroup value={answer} onValueChange={handleAnswer}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes" id="yes" />
              <Label htmlFor="yes">Yes</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="no" id="no" />
              <Label htmlFor="no">No</Label>
            </div>
          </RadioGroup>

          {showMessage && (
            <Alert>
              <AlertDescription>
                An annual audit may not be necessary, but ensure regular compliance documentation.
              </AlertDescription>
            </Alert>
          )}

          {answer === "yes" && (
            <Button onClick={onProceedToClassification}>
              Proceed to Classification Assessment
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};