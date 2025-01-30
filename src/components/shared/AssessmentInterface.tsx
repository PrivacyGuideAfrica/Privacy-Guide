import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ArrowLeft, ArrowRight, RotateCcw, HelpCircle } from "lucide-react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
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
          <div className="space-y-6">
            <Alert>
              <AlertDescription className="whitespace-pre-wrap">
                {finalMessage}
              </AlertDescription>
            </Alert>
            <div className="space-y-4">
              <Button className="w-full" onClick={resetAssessment}>
                Retake Assessment
              </Button>
              <Button variant="outline" className="w-full" onClick={() => navigate("/")}>
                Take Other Assessments
              </Button>
            </div>
          </div>
        ) : currentQuestionData ? (
          <div className="space-y-6">
            <div className="flex items-start gap-2">
              <p className="text-lg">{currentQuestionData.text}</p>
              {currentQuestionData.tooltip && (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-6 w-6 p-0">
                        <HelpCircle className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="max-w-xs">{currentQuestionData.tooltip}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )}
            </div>
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

      {!finalMessage && (
        <div className="p-6 pt-0">
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
        </div>
      )}
    </Card>
  );
};