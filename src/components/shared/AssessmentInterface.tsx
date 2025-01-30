import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { ArrowLeft, ArrowRight, RotateCcw } from "lucide-react";
import { toast } from "sonner";

export interface Question {
  id: number;
  text: string;
  tooltip?: string;
  options: {
    yes: {
      nextQuestion: number | null;
      message?: string;
    };
    no: {
      nextQuestion: number | null;
      message?: string;
    };
  };
}

interface Props {
  title: string;
  questions: Question[];
  onComplete?: () => void;
  onReset?: () => void;
}

export const AssessmentInterface = ({ title, questions, onComplete, onReset }: Props) => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [finalMessage, setFinalMessage] = useState<string | null>(null);

  const handleAnswer = (value: string) => {
    const question = questions.find(q => q.id === currentQuestion);
    if (!question) return;

    const newAnswers = { ...answers, [currentQuestion]: value };
    setAnswers(newAnswers);

    const option = value === "yes" ? question.options.yes : question.options.no;

    if (option.message) {
      setFinalMessage(option.message);
      onComplete?.();
    } else if (option.nextQuestion) {
      setCurrentQuestion(option.nextQuestion);
    }
  };

  const goToPreviousQuestion = () => {
    if (currentQuestion > 1) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const goToNextQuestion = () => {
    const nextQuestionId = currentQuestion + 1;
    const nextQuestion = questions.find(q => q.id === nextQuestionId);
    if (nextQuestion) {
      setCurrentQuestion(nextQuestionId);
    }
  };

  const resetAssessment = () => {
    setCurrentQuestion(1);
    setAnswers({});
    setFinalMessage(null);
    onReset?.();
    toast.success("Assessment reset successfully");
  };

  const currentQuestionData = questions.find(q => q.id === currentQuestion);
  const progress = (currentQuestion / questions.length) * 100;

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          {finalMessage ? "Assessment Complete" : title}
          <Button
            variant="outline"
            size="icon"
            onClick={resetAssessment}
            title="Reset Assessment"
          >
            <RotateCcw className="h-4 w-4" />
          </Button>
        </CardTitle>
        {!finalMessage && (
          <div className="space-y-2">
            <div className="h-2 w-full bg-gray-200 rounded-full">
              <div
                className="h-2 bg-ndpa-green rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="text-sm text-gray-600">
              Question {currentQuestion} of {questions.length}
            </p>
          </div>
        )}
      </CardHeader>

      <CardContent>
        {finalMessage ? (
          <Alert>
            <AlertDescription className="whitespace-pre-wrap">
              {finalMessage}
            </AlertDescription>
          </Alert>
        ) : currentQuestionData ? (
          <div className="space-y-6">
            <p className="text-lg">{currentQuestionData.text}</p>
            <div className="space-y-4">
              <Button
                variant={answers[currentQuestion] === "yes" ? "default" : "outline"}
                className="w-full justify-start"
                onClick={() => handleAnswer("yes")}
              >
                Yes
              </Button>
              <Button
                variant={answers[currentQuestion] === "no" ? "default" : "outline"}
                className="w-full justify-start"
                onClick={() => handleAnswer("no")}
              >
                No
              </Button>
            </div>
          </div>
        ) : null}
      </CardContent>

      <CardFooter className="flex flex-col gap-4">
        {!finalMessage && (
          <div className="flex justify-between w-full">
            <Button
              variant="outline"
              onClick={goToPreviousQuestion}
              disabled={currentQuestion === 1}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Previous
            </Button>
            <Button
              variant="outline"
              onClick={goToNextQuestion}
              disabled={!answers[currentQuestion] || currentQuestion === questions.length}
            >
              Next
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        )}
      </CardFooter>
    </Card>
  );
};