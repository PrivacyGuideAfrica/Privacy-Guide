import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Info } from "lucide-react";

interface RiskAssessmentProps {
  onComplete: (isHighRisk: boolean) => void;
}

interface Question {
  id: number;
  text: string;
  tooltip?: string;
}

const questions: Question[] = [
  {
    id: 1,
    text: "Has there been unauthorised access, loss, destruction, or disclosure of personal data?",
  },
  {
    id: 2,
    text: "Does the breach involve sensitive personal data (e.g., health, financial, biometric data)?",
    tooltip: "Sensitive data refers to personal information that, if disclosed, could cause serious harm to individuals.",
  },
  {
    id: 3,
    text: "Could the breach result in significant harm to the data subject (e.g., identity theft, financial loss, or discrimination)?",
  },
  {
    id: 4,
    text: "Does the breach affect a large number of individuals or involve vulnerable data subjects (e.g., children, elderly)?",
  },
  {
    id: 5,
    text: "Can the breach be mitigated effectively (e.g., encryption or timely recovery of data)?",
  },
];

export const RiskAssessment = ({ onComplete }: RiskAssessmentProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, "yes" | "no">>({});

  const handleAnswer = (answer: "yes" | "no") => {
    const newAnswers = { ...answers, [questions[currentQuestion].id]: answer };
    setAnswers(newAnswers);

    if (currentQuestion === questions.length - 1) {
      // Determine if it's a high-risk breach based on answers
      const isHighRisk =
        (newAnswers[2] === "yes" && newAnswers[3] === "yes") || // Sensitive data + significant harm
        newAnswers[4] === "yes" || // Large number/vulnerable subjects
        (newAnswers[5] === "no"); // Cannot be mitigated

      onComplete(isHighRisk);
    } else if (answer === "no" && currentQuestion === 0) {
      // If first question is "no", no breach occurred
      onComplete(false);
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const question = questions[currentQuestion];

  return (
    <div className="space-y-6">
      <CardHeader className="px-0">
        <CardTitle className="text-xl">Risk Evaluation</CardTitle>
        <CardDescription>
          Determine if the breach constitutes a high risk under the NDPA
        </CardDescription>
      </CardHeader>

      <Card>
        <CardContent className="pt-6">
          <div className="flex items-start gap-2">
            <p className="text-lg font-medium flex-1">{question.text}</p>
            {question.tooltip && (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Info className="h-5 w-5 text-muted-foreground" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{question.tooltip}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
          </div>

          <RadioGroup
            className="mt-4 space-y-4"
            value={answers[question.id]}
            onValueChange={(value: "yes" | "no") => handleAnswer(value)}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes" id="yes" />
              <label htmlFor="yes" className="text-sm font-medium">
                Yes
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="no" id="no" />
              <label htmlFor="no" className="text-sm font-medium">
                No
              </label>
            </div>
          </RadioGroup>
        </CardContent>
      </Card>
    </div>
  );
};