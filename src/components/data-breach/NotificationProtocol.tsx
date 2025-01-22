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

interface NotificationProtocolProps {
  isHighRisk: boolean;
  onComplete: () => void;
}

interface Question {
  id: number;
  text: string;
}

const questions: Question[] = [
  {
    id: 6,
    text: "Is the breach likely to result in a risk to the rights and freedoms of individuals?",
  },
  {
    id: 7,
    text: "Has the breach affected the confidentiality, integrity, or availability of personal data?",
  },
  {
    id: 8,
    text: "Have more than 72 hours passed since you became aware of the breach?",
  },
  {
    id: 9,
    text: "Can affected individuals take specific steps to mitigate potential harm?",
  },
  {
    id: 10,
    text: "Is it feasible to directly notify all affected individuals?",
  },
];

export const NotificationProtocol = ({
  isHighRisk,
  onComplete,
}: NotificationProtocolProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, "yes" | "no">>({});

  const handleAnswer = (answer: "yes" | "no") => {
    const newAnswers = { ...answers, [questions[currentQuestion].id]: answer };
    setAnswers(newAnswers);

    if (currentQuestion === questions.length - 1) {
      onComplete();
    } else if (answer === "no" && currentQuestion === 0) {
      onComplete();
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const question = questions[currentQuestion];

  return (
    <div className="space-y-6">
      <CardHeader className="px-0">
        <CardTitle className="text-xl">Notification Protocol</CardTitle>
        <CardDescription>
          Determine the notification requirements for this breach
        </CardDescription>
      </CardHeader>

      <Card>
        <CardContent className="pt-6">
          <p className="text-lg font-medium mb-4">{question.text}</p>

          <RadioGroup
            className="space-y-4"
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