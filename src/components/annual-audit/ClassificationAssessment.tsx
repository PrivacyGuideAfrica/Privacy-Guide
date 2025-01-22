import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { HelpCircle } from "lucide-react";
import type { Classification } from "@/pages/AnnualAudit";

interface Props {
  onClassificationDetermined: (classification: Classification) => void;
}

export const ClassificationAssessment = ({ onClassificationDetermined }: Props) => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const handleAnswer = (value: string) => {
    const newAnswers = { ...answers, [currentQuestion]: value };
    setAnswers(newAnswers);

    if (currentQuestion === 1 && value === "yes") {
      setCurrentQuestion(2);
    } else if (currentQuestion === 1 && value === "no") {
      setCurrentQuestion(3);
    } else if (currentQuestion === 2) {
      if (value === "yes") {
        onClassificationDetermined("MDP-UHL");
      } else {
        setCurrentQuestion(3);
      }
    } else if (currentQuestion === 3) {
      if (value === "yes") {
        onClassificationDetermined("MDP-EHL");
      } else {
        onClassificationDetermined("MDP-OHL");
      }
    }
  };

  const questions = [
    {
      id: 1,
      text: "Does your organisation process a large volume of sensitive personal data or data from vulnerable individuals?",
      tooltip: "Sensitive data includes information that could lead to significant harm if misused, while vulnerable individuals may require additional protections."
    },
    {
      id: 2,
      text: "Are you a large multinational organisation or one that handles personal data across borders regularly?",
      tooltip: "MDP-UHL organisations typically engage in data processing that could lead to significant harm and must adhere to strict regulatory requirements."
    },
    {
      id: 3,
      text: "Does your organisation process personal data on a large scale but not necessarily at the highest risk level?",
      tooltip: "MDP-EHL applies to organisations handling substantial amounts of personal data with moderate risk but not at the ultra-high level."
    }
  ];

  const currentQuestionData = questions.find(q => q.id === currentQuestion);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Classification Assessment</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {currentQuestionData && (
          <div className="space-y-4">
            <div className="flex items-start gap-2">
              <p className="text-lg">{currentQuestionData.text}</p>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <HelpCircle className="h-5 w-5 text-gray-400" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="max-w-xs">{currentQuestionData.tooltip}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>

            <RadioGroup value={answers[currentQuestion]} onValueChange={handleAnswer}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="yes" />
                <Label htmlFor="yes">Yes</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="no" />
                <Label htmlFor="no">No</Label>
              </div>
            </RadioGroup>
          </div>
        )}
      </CardContent>
    </Card>
  );
};