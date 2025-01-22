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
    text: "Has there been unauthorised access, loss, destruction, or disclosure of personal data?",
    options: {
      yes: { nextQuestion: 2 },
      no: { 
        nextQuestion: null,
        message: "No breach has occurred."
      }
    }
  },
  {
    id: 2,
    text: "Does the breach involve sensitive personal data (e.g., health, financial, biometric data)?",
    tooltip: "Sensitive data refers to personal information that, if disclosed, could cause serious harm to individuals.",
    options: {
      yes: { nextQuestion: 3 },
      no: { nextQuestion: 4 }
    }
  },
  {
    id: 3,
    text: "Could the breach result in significant harm to the data subject (e.g., identity theft, financial loss, or discrimination)?",
    options: {
      yes: { 
        nextQuestion: null,
        message: "This is a high-risk breach. You must notify the NDPC within 72 hours and affected individuals immediately."
      },
      no: { nextQuestion: 4 }
    }
  },
  {
    id: 4,
    text: "Does the breach affect a large number of individuals or involve vulnerable data subjects (e.g., children, elderly)?",
    options: {
      yes: { 
        nextQuestion: null,
        message: "This is a high-risk breach. You must notify the NDPC within 72 hours and affected individuals immediately."
      },
      no: { nextQuestion: 5 }
    }
  },
  {
    id: 5,
    text: "Can the breach be mitigated effectively (e.g., encryption or timely recovery of data)?",
    options: {
      yes: { nextQuestion: 6 },
      no: { 
        nextQuestion: null,
        message: "This is a high-risk breach. You must notify the NDPC within 72 hours and affected individuals immediately."
      }
    }
  },
  {
    id: 6,
    text: "Is the breach likely to result in a risk to the rights and freedoms of individuals?",
    options: {
      yes: { nextQuestion: 7 },
      no: { 
        nextQuestion: null,
        message: "No immediate notification is required, but document the breach in your breach registry."
      }
    }
  },
  {
    id: 7,
    text: "Has the breach affected the confidentiality, integrity, or availability of personal data (e.g., unencrypted data was leaked)?",
    options: {
      yes: { nextQuestion: 8 },
      no: { 
        nextQuestion: null,
        message: "No notification is necessary unless the situation changes."
      }
    }
  },
  {
    id: 8,
    text: "Have more than 72 hours passed since you became aware of the breach?",
    options: {
      yes: { 
        nextQuestion: null,
        message: "You must notify the Nigeria Data Protection Commission (NDPC) immediately."
      },
      no: { nextQuestion: 9 }
    }
  },
  {
    id: 9,
    text: "Can affected individuals take specific steps to mitigate potential harm (e.g., change passwords, monitor accounts)?",
    options: {
      yes: { 
        nextQuestion: null,
        message: "Notify affected data subjects immediately with advice on mitigation."
      },
      no: { nextQuestion: 10 }
    }
  },
  {
    id: 10,
    text: "Is it feasible to directly notify all affected individuals?",
    options: {
      yes: { 
        nextQuestion: null,
        message: "Notify individuals immediately."
      },
      no: { 
        nextQuestion: null,
        message: "Issue a public notice through widespread channels."
      }
    }
  }
];

const DataBreachAssessment = () => {
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
          <h1 className="text-2xl font-bold">Data Breach Assessment</h1>
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

export default DataBreachAssessment;