import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { HelpCircle, ArrowLeft, RotateCcw } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

const ControllerProcessor = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [result, setResult] = useState<string | null>(null);
  const { toast } = useToast();

  const resetAssessment = () => {
    setCurrentQuestion(1);
    setResult(null);
    toast({
      title: "Assessment Reset",
      description: "You can start the assessment again.",
    });
  };

  const renderQuestion = () => {
    switch (currentQuestion) {
      case 1:
        return (
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <h2 className="text-xl font-semibold">
                Are you processing (collecting, using, sharing, storing, or deleting) personal data?
              </h2>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <HelpCircle className="h-5 w-5 text-gray-500" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Processing refers to any operation performed on personal data.</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <div className="space-x-4">
              <Button onClick={() => setCurrentQuestion(2)}>Yes</Button>
              <Button
                variant="outline"
                onClick={() =>
                  setResult(
                    "The Nigerian Data Protection Act does not apply to your processing."
                  )
                }
              >
                No
              </Button>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <h2 className="text-xl font-semibold">
                Are you responsible for determining the purposes and means of processing personal data?
              </h2>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <HelpCircle className="h-5 w-5 text-gray-500" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Determining the purposes and means refers to deciding why and how personal data is processed.</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <div className="space-x-4">
              <Button onClick={() => setCurrentQuestion(3)}>Yes</Button>
              <Button variant="outline" onClick={() => setCurrentQuestion(5)}>
                No
              </Button>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <h2 className="text-xl font-semibold">
                Do you control who can access the data and how it is shared with others?
              </h2>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <HelpCircle className="h-5 w-5 text-gray-500" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Controlling access refers to deciding how and with whom personal data is shared.</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <div className="space-x-4">
              <Button onClick={() => setCurrentQuestion(4)}>Yes</Button>
              <Button variant="outline" onClick={() => setCurrentQuestion(5)}>
                No
              </Button>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">
              Are you the primary entity responsible for the personal data lifecycle (from collection to deletion)?
            </h2>
            <div className="space-x-4">
              <Button
                onClick={() =>
                  setResult(
                    "You are a Data Controller. As a Data Controller, you must:\n\n" +
                    "• Register with the NDPC and file annual Compliance Audit Reports if you're a controller of major importance\n" +
                    "• Appoint Data Protection Officers to provide semi-annual reports\n" +
                    "• Identify lawful bases for processing\n" +
                    "• Provide Privacy Notices to Data Subjects\n" +
                    "• Implement security measures including data protection schedules and encryption"
                  )
                }
              >
                Yes
              </Button>
              <Button variant="outline" onClick={() => setCurrentQuestion(5)}>
                No
              </Button>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">
              Do you process personal data based solely on the instructions of another entity (such as a Data Controller)?
            </h2>
            <div className="space-x-4">
              <Button
                onClick={() =>
                  setResult(
                    "You are a Data Processor. Your responsibilities include:\n\n" +
                    "• Acting only on Controller Instructions\n" +
                    "• Carrying out Data Protection Impact Assessments\n" +
                    "• Ensuring software compliance with NDPA guidelines\n" +
                    "• Immediate notification of data breaches to controllers"
                  )
                }
              >
                Yes
              </Button>
              <Button variant="outline" onClick={() => setCurrentQuestion(6)}>
                No
              </Button>
            </div>
          </div>
        );

      case 6:
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">
              Are you involved in both determining the purpose of data processing and handling data for another organisation?
            </h2>
            <div className="space-x-4">
              <Button
                onClick={() =>
                  setResult(
                    "You may be both a Data Controller and Processor. Consult with a Data Protection Officer (DPO) for clarity on your specific obligations under each role."
                  )
                }
              >
                Yes
              </Button>
              <Button
                variant="outline"
                onClick={() =>
                  setResult(
                    "Based on your responses, we recommend reviewing the questions again or consulting with a Data Protection Officer for clarity on your role."
                  )
                }
              >
                No
              </Button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-3xl mx-auto px-4">
        <div className="mb-6 flex items-center justify-between">
          <Link to="/" className="flex items-center text-gray-600 hover:text-gray-900">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </Link>
          <Button variant="outline" onClick={resetAssessment}>
            <RotateCcw className="h-4 w-4 mr-2" />
            Start Over
          </Button>
        </div>

        <Card>
          <CardContent className="pt-6">
            {!result ? (
              <div>
                <div className="mb-6">
                  <div className="h-2 w-full bg-gray-200 rounded-full">
                    <div
                      className="h-2 bg-ndpa-green rounded-full transition-all duration-300"
                      style={{
                        width: `${(currentQuestion / 6) * 100}%`,
                      }}
                    />
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    Question {currentQuestion} of 6
                  </p>
                </div>
                {renderQuestion()}
              </div>
            ) : (
              <div className="space-y-6">
                <Alert>
                  <AlertDescription className="whitespace-pre-line">
                    {result}
                  </AlertDescription>
                </Alert>
                <div className="space-y-4">
                  <Button onClick={resetAssessment} className="w-full">
                    Take Assessment Again
                  </Button>
                  <Link to="/">
                    <Button variant="outline" className="w-full">
                      Return to Home
                    </Button>
                  </Link>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ControllerProcessor;