import { useState, lazy, Suspense } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ArrowLeft, ArrowRight, RotateCcw, HelpCircle, ChevronDown, CheckCircle, AlertCircle, FileText, CheckCircle2, Shield, Users, Database, UserCheck, Send, UserCog, Globe, AlertTriangle } from "lucide-react";
import { toast } from "sonner";
import { useNavigate, Link } from "react-router-dom";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const RwandaControllerProcessorGuidance = lazy(() => 
  import("@/components/controller-processor/RwandaControllerProcessorGuidance")
);

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
    notSure?: {
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
  renderQuestion?: (question: Question) => React.ReactNode;
  customAnswerHandler?: (questionId: number, answer: string) => void;
  finalMessage?: string | null;
  introContent?: React.ReactNode;
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
      "If high risks remain unresolved, consult the Data Protection Authority before proceeding."
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

interface SouthAfricaModule {
  title: string;
  description: string;
  icon: React.ElementType;
  link: string;
}

const southAfricaModules: SouthAfricaModule[] = [
  {
    title: "Applicability Assessment",
    description: "Determine if the Protection of Personal Information Act (POPIA) applies to your organization",
    icon: Shield,
    link: "/south-africa-applicability",
  },
  {
    title: "Prior Authorisation from the Information Regulator",
    description: "Assess whether your processing activities require prior authorisation from IRSA",
    icon: FileText,
    link: "/south-africa-prior-authorisation",
  },
  {
    title: "Are you a Responsible Party or Operator?",
    description: "Determine whether your organization acts as a Responsible Party (Controller) or Operator (Processor)",
    icon: Users,
    link: "/south-africa-responsible-party",
  },
  {
    title: "Data Breach Notification",
    description: "Understand your obligations for reporting security compromises under POPIA",
    icon: AlertTriangle,
    link: "/south-africa-data-breach",
  },
  {
    title: "Handling Data Subject Rights Requests in South Africa",
    description: "Learn how to respond to data subject access, correction, and deletion requests",
    icon: UserCheck,
    link: "/south-africa-data-subject-rights",
  },
  {
    title: "Processing Special Personal Information in South Africa",
    description: "Assess requirements for processing sensitive personal information under POPIA",
    icon: Database,
    link: "/south-africa-special-information",
  },
  {
    title: "Processing Personal Information of Children",
    description: "Understand the special requirements for processing children's personal information",
    icon: Users,
    link: "/south-africa-children-information",
  },
  {
    title: "Appointment of Information Officer and Responsibilities",
    description: "Determine if you need to appoint an Information Officer and understand their duties",
    icon: UserCog,
    link: "/south-africa-information-officer",
  },
  {
    title: "Direct Marketing",
    description: "Assess your compliance obligations for direct marketing activities under POPIA",
    icon: Send,
    link: "/south-africa-direct-marketing",
  },
];

export const AssessmentInterface = ({ 
  title, 
  questions, 
  onComplete, 
  onReset,
  renderQuestion,
  customAnswerHandler,
  finalMessage: externalFinalMessage,
  introContent
}: Props) => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [internalFinalMessage, setInternalFinalMessage] = useState<string | null>(null);
  const finalMessage = externalFinalMessage !== undefined ? externalFinalMessage : internalFinalMessage;
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

    if (customAnswerHandler) {
      customAnswerHandler(currentQuestion, value);
    }

    let option;
    if (value === "yes") {
      option = question.options.yes;
    } else if (value === "no") {
      option = question.options.no;
    } else if (value === "notSure" && question.options.notSure) {
      option = question.options.notSure;
    } else {
      return;
    }
    
    if (option.message && option.nextQuestion === null) {
      if (externalFinalMessage === undefined) {
        setInternalFinalMessage(option.message);
      }
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
    setInternalFinalMessage(null);
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

  // Detect if this is a South African assessment
  const isSouthAfricanAssessment = () => {
    return window.location.pathname.includes("south-africa");
  };

  // Get current assessment link to exclude from recommendations
  const getCurrentAssessmentLink = () => {
    const path = window.location.pathname;
    return path;
  };

  // Render South African assessment links
  const renderSouthAfricanAssessmentLinks = () => {
    if (!isSouthAfricanAssessment()) return null;

    const currentLink = getCurrentAssessmentLink();
    const otherAssessments = southAfricaModules.filter(module => module.link !== currentLink);

    return (
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-center">Other South Africa (POPIA) Assessments</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {otherAssessments.map((module) => (
            <Link to={module.link} key={module.title} className="block">
              <Card className="cursor-pointer hover:shadow-md transition-shadow h-full hover:translate-y-[-2px] p-4">
                <div className="flex items-start space-x-3">
                  <module.icon className="h-5 w-5 text-ndpa-green shrink-0 mt-1" />
                  <div className="space-y-1">
                    <h4 className="font-medium text-sm leading-tight">{module.title}</h4>
                    <p className="text-xs text-muted-foreground line-clamp-2">
                      {module.description}
                    </p>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    );
  };

  const renderCompletionMessage = () => {
    const isDpiaRequired = finalMessage?.includes("you must conduct a DPIA");
    const isRepresentativeRequired = finalMessage?.includes("you must designate a representative");
    const isDpoRequired = finalMessage?.includes("You must designate a Data Protection Officer");
    const isRwandaControllerProcessor = window.location.pathname.includes("rwanda-controller-processor");
    const isControllerProcessor = isRwandaControllerProcessor || finalMessage?.includes("Dual Role") || finalMessage?.includes("Controller") && (finalMessage?.includes("Processor") || finalMessage?.includes("controller") || finalMessage?.includes("processor")) && !finalMessage?.includes("breach") && !finalMessage?.includes("notify");
    
    // Detect role-based assessments (Responsible Party/Operator, Controller/Processor)
    const isRoleAssessment = window.location.pathname.includes("responsible-party") || 
                            finalMessage?.includes("Responsible Party") || 
                            finalMessage?.includes("Operator") ||
                            finalMessage?.includes("obligations under POPIA");
    
    // More specific breach notification detection - only for actual breach assessment modules
    const isBreachNotification = !isRoleAssessment && (
      window.location.pathname.includes("data-breach") ||
      window.location.pathname.includes("breach-assessment") ||
      (finalMessage?.includes("notify the NDPC") && finalMessage?.includes("within")) ||
      (finalMessage?.includes("notify your Data Controller") && finalMessage?.includes("hours"))
    );
    
    return (
      <div className="space-y-6">
        <div className="flex flex-col items-center justify-center p-6 text-center">
          {isDpiaRequired || isBreachNotification && finalMessage?.includes("immediately") ? (
            <div className="bg-muted/50 rounded-full p-4 mb-4">
              <AlertCircle className="h-12 w-12 text-destructive" />
            </div>
          ) : (
            <div className="bg-muted/50 rounded-full p-4 mb-4">
              <CheckCircle2 className="h-12 w-12 text-ndpa-green" />
            </div>
          )}
          <h2 className="text-2xl font-bold mb-2">
            {isDpiaRequired ? "DPIA Required" : "Assessment Complete"}
          </h2>
          <p className="text-muted-foreground">
            {isDpiaRequired 
              ? "Based on your responses, you need to conduct a DPIA."
              : isRepresentativeRequired
                ? "You may need to designate a local representative in Rwanda."
                : isDpoRequired
                  ? "Based on your responses, you may need to designate a DPO."
                  : isRoleAssessment
                    ? "Based on your responses, your role and obligations under data protection law are outlined below."
                    : isBreachNotification
                      ? "Based on your responses, below are your breach notification requirements."
                      : isControllerProcessor
                        ? "Based on your responses, your role under data protection law is outlined below."
                        : "Based on your assessment results."}
          </p>
        </div>

        <div className="bg-card border rounded-lg p-6 space-y-4">
          <div className="flex items-start gap-3">
            <FileText className="h-5 w-5 text-foreground shrink-0 mt-1" />
            <div className="space-y-2">
              <h3 className="font-medium">
                {isDpoRequired ? "DPO Requirements" : "Recommendation"}
              </h3>
              {(() => {
                const messageContent = externalFinalMessage && isDpoRequired 
                  ? externalFinalMessage.replace("You must designate a Data Protection Officer (DPO)", "You may need to designate a Data Protection Officer (DPO)")
                  : finalMessage;
                
                // Check if the message contains HTML tags
                const containsHTML = messageContent && /<[^>]+>/.test(messageContent);
                
                if (containsHTML) {
                  return (
                    <div 
                      className="text-sm text-muted-foreground" 
                      dangerouslySetInnerHTML={{ __html: messageContent }} 
                    />
                  );
                } else {
                  return (
                    <div className="text-sm text-muted-foreground whitespace-pre-line">
                      {messageContent}
                    </div>
                  );
                }
              })()}
            </div>
          </div>
        </div>

        {isDpiaRequired && renderDPIAGuidance()}
        
        {isRwandaControllerProcessor && (
          <div className="mt-4">
            <Suspense fallback={<div className="text-center py-4">Loading additional guidance...</div>}>
              <RwandaControllerProcessorGuidance />
            </Suspense>
          </div>
        )}

        {/* South African Assessment Links */}
        {renderSouthAfricanAssessmentLinks()}

        <div className="space-y-4 pt-2">
          <Button 
            className="w-full bg-ndpa-green text-white hover:bg-ndpa-green/90" 
            onClick={resetAssessment}
          >
            <RotateCcw className="h-4 w-4 mr-2" />
            Retake Assessment
          </Button>
          <Button 
            variant="outline" 
            className="w-full border-ndpa-green text-ndpa-green hover:bg-ndpa-green/10" 
            onClick={() => navigate("/countries")}
          >
            Take Other Assessments
          </Button>
        </div>
      </div>
    );
  };

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
        {/* Show intro content only when assessment is active (not completed) */}
        {!finalMessage && introContent && (
          <div className="mb-8">
            {introContent}
          </div>
        )}
        
        {finalMessage ? (
          renderCompletionMessage()
        ) : currentQuestionData ? (
          <div className="space-y-6">
            <div className="flex items-start gap-2">
              {renderQuestion && renderQuestion(currentQuestionData) || (
                <p className="text-lg whitespace-pre-line">{currentQuestionData.text}</p>
              )}
              {!renderQuestion && currentQuestionData.tooltip && (
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
              {currentQuestionData.options.notSure && (
                <Button
                  variant={answers[currentQuestion] === "notSure" ? "default" : "outline"}
                  className="w-full justify-start"
                  onClick={() => handleAnswer("notSure")}
                >
                  Not Sure
                </Button>
              )}
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
