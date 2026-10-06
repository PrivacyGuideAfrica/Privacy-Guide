import { findAssessment } from "@/data/catalog";
import { ResultDetails } from "./ResultDetails";
import { useState, useEffect, useRef, lazy, Suspense } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ArrowLeft, ArrowRight, RotateCcw, HelpCircle, ChevronDown, CheckCircle, AlertCircle, FileText, CheckCircle2, Shield, Users, Database, UserCheck, Send, UserCog, Globe, AlertTriangle } from "lucide-react";
import { toast } from "sonner";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import DOMPurify from "dompurify";

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
  /** Clear parent-owned completion state when restarting or reviewing a result. */
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
  const { pathname } = useLocation();
  const assessment = findAssessment(pathname);
  const questionHeading = useRef<HTMLHeadingElement>(null);
  const resultHeading = useRef<HTMLHeadingElement>(null);
  const mounted = useRef(false);
  const [currentQuestion, setCurrentQuestion] = useState(questions[0]?.id ?? 1);
  const [history, setHistory] = useState<number[]>([]);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [internalFinalMessage, setInternalFinalMessage] = useState<string | null>(null);
  const finalMessage = externalFinalMessage !== undefined ? externalFinalMessage : internalFinalMessage;
  const [openSteps, setOpenSteps] = useState<number[]>([]);

  useEffect(() => {
    if (!mounted.current) { mounted.current = true; return; }
    (finalMessage ? resultHeading : questionHeading).current?.focus();
  }, [currentQuestion, finalMessage]);

  const editAnswer = (index: number) => {
    const path = [...history, currentQuestion];
    const retainedPath = path.slice(0, index);
    setCurrentQuestion(path[index]);
    setHistory(retainedPath);
    setAnswers(Object.fromEntries(retainedPath.map(id => [id, answers[id]])));
    setInternalFinalMessage(null);
    setOpenSteps([]);
    onReset?.();
  };


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
    // Keep only answers on the current branch when an earlier answer changes.
    const retainedAnswers = Object.fromEntries(
      history.map(id => [id, answers[id]])
    );
    setAnswers({ ...retainedAnswers, [currentQuestion]: value });
    customAnswerHandler?.(currentQuestion, value);

    if (option.nextQuestion === null) {
      if (externalFinalMessage === undefined) {
        setInternalFinalMessage(option.message ?? null);
      }
      onComplete?.();
    } 
    else {
      setHistory([...history, currentQuestion]);
      setCurrentQuestion(option.nextQuestion);
    }
  };

  const goToPreviousQuestion = () => {
    if (finalMessage) {
      // Reopen the terminal question and clear any parent-owned result/guidance.
      setInternalFinalMessage(null);
      setAnswers(Object.fromEntries(history.map(id => [id, answers[id]])));
      setOpenSteps([]);
      onReset?.();
      return;
    }
    const previousQuestion = history[history.length - 1];
    if (previousQuestion === undefined) return;
    const previousHistory = history.slice(0, -1);
    setCurrentQuestion(previousQuestion);
    setHistory(previousHistory);
    setAnswers(Object.fromEntries(previousHistory.map(id => [id, answers[id]])));
  };

  const resetAssessment = () => {
    setCurrentQuestion(questions[0]?.id ?? 1);
    setHistory([]);
    setAnswers({});
    setInternalFinalMessage(null);
    setOpenSteps([]);
    onReset?.();
    toast.success("Assessment reset successfully");
  };

  const currentQuestionData = questions.find(q => q.id === currentQuestion);

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

    // Detect Direct Marketing assessments
    const isDirectMarketing = window.location.pathname.includes("direct-marketing");
    const getDirectMarketingContent = () => {
      if (finalMessage === "END_NO_ELECTRONIC_MARKETING") {
        return {
          title: "Rules Do Not Apply",
          explanation: "This module's specific rules for direct marketing via unsolicited electronic communications do not apply to your current activities.",
          actions: []
        };
      } else if (finalMessage === "LAWFUL_MARKETING") {
        return {
          title: "Lawful Direct Marketing Practices",
          explanation: "You are conducting direct marketing using unsolicited electronic communications based on valid consent or the existing customer relationship exception, as required by POPIA. You must ensure every communication includes your identity and contact details for objection.",
          actions: [
            "Ensure all electronic direct marketing communications clearly state your identity and provide an address or other contact details for the recipient to send a request to cease communications.",
            "Maintain accurate records of all consents or customer relationships relied upon."
          ]
        };
      } else if (finalMessage === "UNLAWFUL_MARKETING") {
        return {
          title: "Unlawful Direct Marketing Practices",
          explanation: "Your current practices for direct marketing using unsolicited electronic communications do not appear to meet the strict consent or customer relationship conditions set out in POPIA. This type of processing is prohibited unless these conditions are met.",
          actions: [
            "Immediately review and adjust your direct marketing strategies to ensure compliance.",
            "Stop sending unsolicited electronic communications until a lawful basis is established.",
            "Seek professional legal advice from a data protection compliance professional."
          ]
        };
      }
      return null;
    };
    
    return (
      <div className="assessment-result space-y-6">
        {assessment && <p className="text-sm font-medium text-slate-700">{assessment.country.name} · {assessment.module.title}</p>}
        <div className="flex flex-col items-center justify-center p-6 text-center">
          {(() => {
            // Direct Marketing specific icons
            if (isDirectMarketing && getDirectMarketingContent()) {
              const dmContent = getDirectMarketingContent();
              if (finalMessage === "UNLAWFUL_MARKETING") {
                return (
                  <div className="bg-muted/50 rounded-full p-4 mb-4">
                    <AlertCircle className="h-12 w-12 text-destructive" />
                  </div>
                );
              } else {
                return (
                  <div className="bg-muted/50 rounded-full p-4 mb-4">
                    <CheckCircle2 className="h-12 w-12 text-ndpa-green" />
                  </div>
                );
              }
            }
            
            // Other assessment types
            if (isDpiaRequired || isBreachNotification && finalMessage?.includes("immediately")) {
              return (
                <div className="bg-muted/50 rounded-full p-4 mb-4">
                  <AlertCircle className="h-12 w-12 text-destructive" />
                </div>
              );
            } else {
              return (
                <div className="bg-muted/50 rounded-full p-4 mb-4">
                  <CheckCircle2 className="h-12 w-12 text-ndpa-green" />
                </div>
              );
            }
          })()}
          <h2 ref={resultHeading} tabIndex={-1} className="text-2xl font-bold mb-2">
            {isDirectMarketing && getDirectMarketingContent()
              ? getDirectMarketingContent()?.title
              : isDpiaRequired 
                ? "DPIA Required" 
                : "Assessment Complete"}
          </h2>
          <p className="text-muted-foreground">
            {isDirectMarketing && getDirectMarketingContent()
              ? "Your direct marketing compliance status has been assessed."
              : isDpiaRequired 
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
              <h3 className="text-xl font-semibold">Outcome</h3>
              {(() => {
                // Handle Direct Marketing specific content
                if (isDirectMarketing && getDirectMarketingContent()) {
                  const dmContent = getDirectMarketingContent();
                  return (
                    <div className="space-y-3">
                      <div className="text-sm text-muted-foreground">
                        {dmContent?.explanation}
                      </div>
                      {dmContent?.actions && dmContent.actions.length > 0 && (
                        <div className="space-y-2">
                          <h4 className="text-sm font-medium">What to do:</h4>
                          <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground ml-2">
                            {dmContent.actions.map((action, index) => (
                              <li key={index}>{action}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  );
                }

                // Handle other assessment types
                const messageContent = externalFinalMessage && isDpoRequired 
                  ? externalFinalMessage.replace("You must designate a Data Protection Officer (DPO)", "You may need to designate a Data Protection Officer (DPO)")
                  : finalMessage;
                
                // Check if the message contains HTML tags
                const containsHTML = messageContent && /<[^>]+>/.test(messageContent);
                
                if (containsHTML) {
                  // Sanitize HTML content to prevent XSS attacks
                  const sanitizedContent = DOMPurify.sanitize(messageContent, {
                    ALLOWED_TAGS: ['p', 'br', 'strong', 'em', 'ul', 'ol', 'li', 'a', 'span'],
                    ALLOWED_ATTR: ['href', 'target', 'class'],
                    ALLOW_DATA_ATTR: false
                  });
                  
                  return (
                    <div 
                      className="text-sm text-muted-foreground" 
                      dangerouslySetInnerHTML={{ __html: sanitizedContent }} 
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

        <ResultDetails questions={questions} answers={answers} path={[...history, currentQuestion]} onEdit={editAnswer} />

        <div className="space-y-4 pt-2 print:hidden">
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
    <Card className="assessment-card w-full max-w-3xl mx-auto">
      <CardHeader>
        <div className="flex items-start justify-between gap-3">
          <h2 className="text-xl font-semibold">
          {finalMessage ? "Assessment Complete" : title}
          </h2>
          <Button
            variant="outline"
            size="icon"
            onClick={resetAssessment}
            title="Reset Assessment"
          >
            <RotateCcw className="h-4 w-4" />
          </Button>
        </div>
        {!finalMessage && (
          <div className="space-y-2" aria-live="polite" aria-atomic="true">
            <p className="text-sm text-gray-600">
              Step {history.length + 1} · {history.length} answered
            </p>
            <p className="text-sm text-gray-600">Your answers determine which questions come next.</p>
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
            <h3 ref={questionHeading} tabIndex={-1} className="text-lg font-semibold">Step {history.length + 1}</h3>
            <div className="flex items-start gap-2">
              {renderQuestion && renderQuestion(currentQuestionData) || (
                <p className="text-lg whitespace-pre-line">{currentQuestionData.text}</p>
              )}
              {!renderQuestion && currentQuestionData.tooltip && (
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="ghost" size="icon" aria-label="Explain this question" className="shrink-0">
                      <HelpCircle className="h-4 w-4" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="max-w-xs text-sm">
                    <p>{currentQuestionData.tooltip}</p>
                  </PopoverContent>
                </Popover>
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

      <div className="p-6 pt-0 print:hidden">
        <Button
          variant="outline"
          onClick={goToPreviousQuestion}
          disabled={!finalMessage && history.length === 0}
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          {finalMessage ? "Review last answer" : "Previous"}
        </Button>
      </div>
    </Card>
  );
};
