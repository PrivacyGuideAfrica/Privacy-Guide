import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ArrowLeft, ArrowRight, RotateCcw, HelpCircle, ChevronDown, CheckCircle } from "lucide-react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

export interface Question {
  id: number;
  text: string;
  tooltip?: string;
  options: {
    yes: {
      nextQuestion: number | null;
      message?: string | null;
    };
    no: {
      nextQuestion: number | null;
      message?: string | null;
    };
  };
}

interface Props {
  title: string;
  questions: Question[];
  onComplete?: () => void;
  onReset?: () => void;
}

interface DPIAStep {
  title: string;
  description: string[];
}

const dpiaSteps: DPIAStep[] = [
  {
    title: "Step 1: Identify and Describe the Processing",
    description: [
      "Define the nature, scope, context, and purposes of the data processing.",
      "Outline the type of personal data and the methods of collection."
    ]
  },
  {
    title: "Step 2: Assess Necessity and Proportionality",
    description: [
      "Evaluate whether the processing is essential for achieving the specified objectives.",
      "Consider whether less intrusive methods could achieve the same results."
    ]
  },
  {
    title: "Step 3: Identify Risks",
    description: [
      "List risks to the rights and freedoms of data subjects (e.g., data breaches, misuse of data, discrimination).",
      "Rank the risks as low, medium, or high based on likelihood and impact."
    ]
  },
  {
    title: "Step 4: Mitigate Risks",
    description: [
      "Implement technical and organisational measures to reduce risks (e.g., encryption, anonymisation, access controls).",
      "Document how these measures reduce the likelihood or impact of identified risks."
    ]
  },
  {
    title: "Step 5: Consult with Stakeholders",
    description: [
      "Involve your Data Protection Officer (DPO) and, if necessary, seek advice from external legal advisors.",
      "If high risks remain unresolved, consult the Data Protection Authority (NDPC) before proceeding."
    ]
  },
  {
    title: "Step 6: Document and Review",
    description: [
      "Keep comprehensive documentation of the DPIA process, including the identified risks and mitigation strategies.",
      "Periodically review and update the DPIA if the processing activity changes."
    ]
  }
];

export const AssessmentInterface = ({ title, questions, onComplete, onReset }: Props) => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [finalMessage, setFinalMessage] = useState<string | null>(null);
  const [openSteps, setOpenSteps] = useState<number[]>([]);

  const toggleStep = (stepIndex: number) => {
    setOpenSteps(prev => 
      prev.includes(stepIndex) 
        ? prev.filter(i => i !== stepIndex)
        : [...prev, stepIndex]
    );
  };

  const handleAnswer = (value: string) => {
    const question = questions.find(q => q.id === currentQuestion);
    if (!question) return;

    const newAnswers = { ...answers, [currentQuestion]: value };
    setAnswers(newAnswers);

    const option = value === "yes" ? question.options.yes : question.options.no;
    
    if (option.message && option.nextQuestion === null) {
      setFinalMessage(option.message);
      onComplete?.();
    } 
    else if (option.nextQuestion !== null) {
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
    setOpenSteps([]);
    onReset?.();
    toast.success("Assessment reset successfully");
  };

  const currentQuestionData = questions.find(q => q.id === currentQuestion);
  const progress = (currentQuestion / questions.length) * 100;

  const renderDPIAGuidance = () => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold mb-4">DPIA Guidance: How to Effectively Conduct a DPIA</h3>
      <div className="space-y-2">
        {dpiaSteps.map((step, index) => (
          <Collapsible
            key={index}
            open={openSteps.includes(index)}
            onOpenChange={() => toggleStep(index)}
            className="border rounded-lg bg-card"
          >
            <CollapsibleTrigger className="flex items-center justify-between w-full p-4 hover:bg-accent rounded-lg transition-colors">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-ndpa-green" />
                <span className="font-medium">{step.title}</span>
              </div>
              <ChevronDown className={`h-5 w-5 transition-transform ${openSteps.includes(index) ? 'transform rotate-180' : ''}`} />
            </CollapsibleTrigger>
            <CollapsibleContent className="p-4 pt-0">
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                {step.description.map((desc, i) => (
                  <li key={i} className="ml-4">{desc}</li>
                ))}
              </ul>
            </CollapsibleContent>
          </Collapsible>
        ))}
      </div>
    </div>
  );

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
            {finalMessage.includes("A DPIA is required") && renderDPIAGuidance()}
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
