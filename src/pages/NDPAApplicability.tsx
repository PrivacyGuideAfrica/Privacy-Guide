import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { HelpCircle, ArrowLeft, RotateCcw } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { toast } from "sonner";

interface Question {
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

const questions: Question[] = [
  {
    id: 1,
    text: "Are you processing personal data (any information related to an identifiable individual)?",
    tooltip: "Personal data includes names, emails, biometric data, or any information that can identify an individual",
    options: {
      yes: { nextQuestion: 2 },
      no: { 
        nextQuestion: null,
        message: "The NDPA does not apply as you are not processing personal data."
      }
    }
  },
  {
    id: 2,
    text: "Is the personal data being processed within Nigeria or involves Nigerian citizens?",
    options: {
      yes: { nextQuestion: 3 },
      no: { nextQuestion: 4 }
    }
  },
  {
    id: 3,
    text: "Is your organisation domiciled or operating within Nigeria?",
    options: {
      yes: {
        nextQuestion: null,
        message: "The NDPA applies to your processing activities. Ensure compliance with NDPA requirements."
      },
      no: { nextQuestion: 4 }
    }
  },
  {
    id: 4,
    text: "Is your organisation outside Nigeria but processing personal data of Nigerian residents or individuals within Nigeria?",
    options: {
      yes: { nextQuestion: 5 },
      no: {
        nextQuestion: null,
        message: "The NDPA may not apply, but check other relevant data protection laws."
      }
    }
  },
  {
    id: 5,
    text: "Is your processing solely for personal or household purposes and does not violate a data subject's fundamental right to privacy?",
    tooltip: "Household purposes include using personal data for family or personal matters without violating privacy rights.",
    options: {
      yes: {
        nextQuestion: null,
        message: "The NDPA does not apply to your processing."
      },
      no: { nextQuestion: 6 }
    }
  },
  {
    id: 6,
    text: "Is your processing carried out by a competent authority for one of the following purposes:\n- Prevention, investigation, detection, prosecution, or adjudication of a criminal offence?\n- Prevention or control of a national public health emergency?\n- National security?\n- Publication in the public interest?\n- Journalism, educational, artistic, or literary purposes?\n- Establishment, exercise, or defence of legal claims?",
    options: {
      yes: {
        nextQuestion: null,
        message: "The NDPA does not apply to your processing."
      },
      no: {
        nextQuestion: null,
        message: "The NDPA applies to your processing activities."
      }
    }
  }
];

const NDPAApplicability = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [answer, setAnswer] = useState<string>("");
  const [finalMessage, setFinalMessage] = useState<string | null>(null);
  const [responses, setResponses] = useState<Record<number, string>>({});

  const handleAnswer = (value: string) => {
    const question = questions.find(q => q.id === currentQuestion);
    if (!question) return;

    const newResponses = { ...responses, [currentQuestion]: value };
    setResponses(newResponses);
    setAnswer(value);

    const option = value === "yes" ? question.options.yes : question.options.no;

    if (option.message) {
      setFinalMessage(option.message);
    } else if (option.nextQuestion) {
      setCurrentQuestion(option.nextQuestion);
      setAnswer("");
    }
  };

  const resetAssessment = () => {
    setCurrentQuestion(1);
    setAnswer("");
    setFinalMessage(null);
    setResponses({});
    toast.success("Assessment reset successfully");
  };

  const currentQuestionData = questions.find(q => q.id === currentQuestion);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-8">
          <Button
            variant="outline"
            size="icon"
            onClick={() => navigate("/")}
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <h1 className="text-2xl font-bold">NDPA Applicability Assessment</h1>
        </div>

        <Card className="w-full">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              {finalMessage ? "Assessment Complete" : `Question ${currentQuestion} of ${questions.length}`}
              <Button
                variant="outline"
                size="icon"
                onClick={resetAssessment}
              >
                <RotateCcw className="h-4 w-4" />
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            {finalMessage ? (
              <Alert>
                <AlertDescription className="whitespace-pre-wrap">
                  {finalMessage}
                </AlertDescription>
              </Alert>
            ) : currentQuestionData ? (
              <div className="space-y-4">
                <div className="flex items-start gap-2">
                  <p className="text-lg">{currentQuestionData.text}</p>
                  {currentQuestionData.tooltip && (
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
                  )}
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
              </div>
            ) : null}
          </CardContent>
          <CardFooter className="flex flex-col items-start gap-4">
            {finalMessage && (
              <>
                <div className="w-full space-y-4">
                  <Button
                    className="w-full"
                    onClick={() => navigate("/")}
                  >
                    Take Other Assessments
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={resetAssessment}
                  >
                    Start Over
                  </Button>
                </div>
                <div className="text-sm text-gray-500">
                  Was this assessment helpful? <a href="#" className="text-ndpa-green hover:underline">Let us know how we can improve</a>
                </div>
              </>
            )}
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default NDPAApplicability;