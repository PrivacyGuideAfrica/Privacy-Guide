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
  onClassificationSelected: (classification: string) => void;
}

export const AuditNecessityAssessment = ({ onProceedToClassification, onClassificationSelected }: Props) => {
  const [answer, setAnswer] = useState<string>("");
  const [showClassification, setShowClassification] = useState(false);
  const [selectedClassification, setSelectedClassification] = useState<string>("");

  const handleAnswer = (value: string) => {
    setAnswer(value);
    if (value === "yes") {
      setShowClassification(true);
    }
  };

  const handleClassificationSelect = (value: string) => {
    setSelectedClassification(value);
    if (value === "unsure") {
      onProceedToClassification();
    } else {
      onClassificationSelected(value);
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

          {answer === "yes" && (
            <div className="space-y-4">
              <p className="text-lg">What is your organisation's classification?</p>
              <RadioGroup value={selectedClassification} onValueChange={handleClassificationSelect}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="MDP-UHL" id="mdp-uhl" />
                  <Label htmlFor="mdp-uhl">MDP-UHL (Ultra High Level)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="MDP-EHL" id="mdp-ehl" />
                  <Label htmlFor="mdp-ehl">MDP-EHL (Extra High Level)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="MDP-OHL" id="mdp-ohl" />
                  <Label htmlFor="mdp-ohl">MDP-OHL (Ordinary High Level)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="unsure" id="unsure" />
                  <Label htmlFor="unsure">Not sure</Label>
                </div>
              </RadioGroup>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};