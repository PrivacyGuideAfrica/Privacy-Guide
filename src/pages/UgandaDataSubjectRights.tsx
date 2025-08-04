import { Layout } from "@/components/shared/Layout";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Eye, Edit, Trash2, Ban, Download, Shield, Users, Clock, FileText, AlertTriangle, CheckCircle2, HelpCircle } from "lucide-react";

type DataSubjectRight = {
  id: string;
  name: string;
  icon: React.ComponentType<any>;
  description: string;
  timeframe: number; // days
  color: string;
};

const dataSubjectRights: DataSubjectRight[] = [
  {
    id: "access",
    name: "Right of Access",
    icon: Eye,
    description: "Request copies of personal data and information about processing",
    timeframe: 30,
    color: "text-blue-500"
  },
  {
    id: "rectification", 
    name: "Right to Rectification",
    icon: Edit,
    description: "Request correction of inaccurate or incomplete data",
    timeframe: 30,
    color: "text-green-500"
  },
  {
    id: "erasure",
    name: "Right to Erasure",
    icon: Trash2, 
    description: "Request deletion of personal data (right to be forgotten)",
    timeframe: 30,
    color: "text-red-500"
  },
  {
    id: "object",
    name: "Right to Object",
    icon: Ban,
    description: "Object to processing, especially for direct marketing or legitimate interests",
    timeframe: 14,
    color: "text-amber-500"
  },
  {
    id: "portability",
    name: "Right to Data Portability", 
    icon: Download,
    description: "Request data in structured, machine-readable format",
    timeframe: 30,
    color: "text-purple-500"
  },
  {
    id: "restriction",
    name: "Right to Restriction",
    icon: Shield,
    description: "Request restriction of processing in certain circumstances",
    timeframe: 30,
    color: "text-indigo-500"
  }
];

const UgandaDataSubjectRights = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedRights, setSelectedRights] = useState<string[]>([]);
  const [isCompleted, setIsCompleted] = useState(false);
  const [answers, setAnswers] = useState<{[key: number]: string}>({});

  const questions = [
    {
      id: 1,
      text: "Have you received a request from an individual exercising their rights under the law?",
      tooltip: "Includes access, rectification, erasure, objection, portability, or restriction of processing."
    },
    {
      id: 2,
      text: "Can you confirm the identity of the requester using reasonable means?",
      tooltip: "You must verify identity to avoid unauthorised disclosure. Request government-issued ID, utility bills, or other reasonable documentation."
    }
  ];

  const handleAnswer = (questionId: number, answer: string) => {
    setAnswers(prev => ({...prev, [questionId]: answer}));
    
    if (questionId === 1 && answer === "no") {
      setIsCompleted(true);
      return;
    }
    
    if (questionId === 2 && answer === "no") {
      setIsCompleted(true);
      return;
    }
    
    if (questionId === 2 && answer === "yes") {
      setCurrentStep(3); // Go to rights selection
      return;
    }
    
    setCurrentStep(prev => prev + 1);
  };

  const handleRightsSelection = (rightId: string, checked: boolean) => {
    setSelectedRights(prev => {
      if (checked) {
        return [...prev, rightId];
      } else {
        return prev.filter(id => id !== rightId);
      }
    });
  };

  const handleRightsSubmit = () => {
    if (selectedRights.length > 0) {
      setCurrentStep(4);
    }
  };

  const handleFinalSubmit = (documented: string) => {
    setAnswers(prev => ({...prev, 4: documented}));
    setIsCompleted(true);
  };

  const getSelectedRightsData = () => {
    return dataSubjectRights.filter(right => selectedRights.includes(right.id));
  };

  const getEarliestDeadline = () => {
    const selectedRightsData = getSelectedRightsData();
    if (selectedRightsData.length === 0) return 30;
    return Math.min(...selectedRightsData.map(right => right.timeframe));
  };

  const hasUrgentRights = () => {
    return selectedRights.includes("object");
  };

  const getProgressPercentage = () => {
    if (isCompleted) return 100;
    if (currentStep === 3) return 50; // Rights selection
    if (currentStep === 4) return 75; // Final question
    return (currentStep / 4) * 100;
  };

  const renderCurrentStep = () => {
    if (currentStep <= 2) {
      const question = questions[currentStep - 1];
      return (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              Question {currentStep} of 4
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <HelpCircle className="h-4 w-4 text-muted-foreground" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{question.tooltip}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-lg">{question.text}</p>
            <div className="flex gap-4">
              <Button 
                onClick={() => handleAnswer(question.id, "yes")}
                className="flex-1"
              >
                Yes
              </Button>
              <Button 
                onClick={() => handleAnswer(question.id, "no")}
                variant="outline"
                className="flex-1"
              >
                No
              </Button>
            </div>
          </CardContent>
        </Card>
      );
    }

    if (currentStep === 3) {
      return (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              Step 3 of 4: Select Data Subject Rights
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <HelpCircle className="h-4 w-4 text-muted-foreground" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Select all rights that the individual is exercising in their request.</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-lg">Which of the following rights is the data subject exercising?</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {dataSubjectRights.map((right) => {
                const Icon = right.icon;
                return (
                  <Card key={right.id} className="relative cursor-pointer hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <Checkbox
                          id={right.id}
                          checked={selectedRights.includes(right.id)}
                          onCheckedChange={(checked) => handleRightsSelection(right.id, checked as boolean)}
                        />
                        <Icon className={`h-5 w-5 ${right.color} flex-shrink-0 mt-1`} />
                        <div className="flex-1">
                          <label htmlFor={right.id} className="font-medium cursor-pointer">
                            {right.name}
                          </label>
                          <p className="text-sm text-muted-foreground mt-1">
                            {right.description}
                          </p>
                          <Badge variant={right.timeframe === 14 ? "destructive" : "secondary"} className="mt-2">
                            {right.timeframe} days to respond
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
            <Button 
              onClick={handleRightsSubmit}
              disabled={selectedRights.length === 0}
              className="w-full"
            >
              Continue with Selected Rights ({selectedRights.length})
            </Button>
          </CardContent>
        </Card>
      );
    }

    if (currentStep === 4) {
      return (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              Step 4 of 4: Documentation
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <HelpCircle className="h-4 w-4 text-muted-foreground" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Maintain comprehensive records of identity verification, assessments, actions taken, and communications for audit purposes.</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-lg">Have you documented all steps taken to fulfill or explain limitations for each requested right?</p>
            <div className="flex gap-4">
              <Button 
                onClick={() => handleFinalSubmit("yes")}
                className="flex-1"
              >
                Yes, all documented
              </Button>
              <Button 
                onClick={() => handleFinalSubmit("no")}
                variant="outline"
                className="flex-1"
              >
                No, needs documentation
              </Button>
            </div>
          </CardContent>
        </Card>
      );
    }
  };

  const renderResults = () => {
    if (answers[1] === "no") {
      return (
        <Card>
          <CardContent className="p-6">
            <h3 className="font-semibold text-lg mb-2">No Action Required</h3>
            <p className="text-muted-foreground">
              No action required unless a valid request is received. Keep monitoring for any future data subject rights requests that may come through various channels (email, phone, written letter, etc.).
            </p>
          </CardContent>
        </Card>
      );
    }

    if (answers[2] === "no") {
      return (
        <Card>
          <CardContent className="p-6">
            <h3 className="font-semibold text-lg mb-2">Identity Verification Required</h3>
            <p className="text-muted-foreground">
              Request proof of identity. Do not proceed until verified. Ask for government-issued ID, utility bills, or other documentation that can reasonably confirm the requester's identity before processing any data subject rights request.
            </p>
          </CardContent>
        </Card>
      );
    }

    if (answers[4] === "no") {
      return (
        <Card>
          <CardContent className="p-6">
            <h3 className="font-semibold text-lg mb-2">Documentation Required</h3>
            <p className="text-muted-foreground">
              Ensure proper documentation of all steps taken, decisions made, and communications sent. This is essential for accountability and regulatory compliance.
            </p>
          </CardContent>
        </Card>
      );
    }

    const selectedRightsData = getSelectedRightsData();
    const earliestDeadline = getEarliestDeadline();
    const urgent = hasUrgentRights();

    return (
      <div className="space-y-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle2 className="h-5 w-5 text-green-500" />
              <h3 className="font-semibold text-lg">Rights Assessment Complete</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              You must fulfill the selected rights and respond within the required timeframes. All actions must be documented.
            </p>
            
            {urgent && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
                <p className="text-sm text-red-800 font-medium">
                  <AlertTriangle className="h-4 w-4 inline mr-1" />
                  URGENT: Objection rights must be fulfilled within 14 days!
                </p>
              </div>
            )}

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm text-blue-800">
                <Clock className="h-4 w-4 inline mr-1" />
                <strong>Earliest Response Deadline:</strong> {earliestDeadline} days from receipt of verified request
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Selected Rights to Fulfill</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {selectedRightsData.map((right) => {
                const Icon = right.icon;
                return (
                  <Card key={right.id} className="border-l-4 border-l-primary">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <Icon className={`h-5 w-5 ${right.color} flex-shrink-0 mt-1`} />
                        <div>
                          <h4 className="font-medium flex items-center gap-2">
                            {right.name}
                            <Badge variant={right.timeframe === 14 ? "destructive" : "secondary"}>
                              {right.timeframe} days
                            </Badge>
                          </h4>
                          <p className="text-sm text-muted-foreground mt-1">
                            {right.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </CardContent>
        </Card>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Next Steps</h3>
          <div className="grid grid-cols-1 gap-4">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <FileText className="h-5 w-5 text-blue-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium">Document the Request</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Record the request details, identity verification, and selected rights in your data protection logs.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-purple-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium">Set Reminders</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Create calendar reminders for each deadline. Objection rights (14 days) take priority over other rights (30 days).
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <Users className="h-5 w-5 text-indigo-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium">Coordinate Response</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Assign responsibilities to team members and ensure all required data is gathered to fulfill each right.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
          <h3 className="font-medium text-lg mb-2">Best Practices</h3>
          <ul className="space-y-2 text-sm text-green-800">
            <li>• Acknowledge receipt of the request promptly</li>
            <li>• Fulfill objection rights immediately (especially for direct marketing)</li>
            <li>• Provide clear explanations if any rights cannot be fulfilled</li>
            <li>• Maintain detailed audit trails of all actions taken</li>
            <li>• Include information about complaint procedures in your response</li>
          </ul>
        </div>
      </div>
    );
  };

  return (
    <Layout>
      <div className="container py-8 space-y-6">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">Uganda Data Subject Rights Assessment</h1>
          <p className="text-lg text-muted-foreground">
            Learn how to handle data subject requests and rights under Uganda's Data Protection and Privacy Act, 2019 and its 2021 Regulations.
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-sm text-blue-800">
              <strong>Important:</strong> Response timeframes vary by right type - Objection requests must be handled within 14 days, while other rights have a 30-day deadline.
            </p>
          </div>
        </div>

        {!isCompleted && (
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>Progress</span>
                <span>{Math.round(getProgressPercentage())}%</span>
              </div>
              <Progress value={getProgressPercentage()} className="h-2" />
            </div>
            {renderCurrentStep()}
          </div>
        )}

        {isCompleted && (
          <div className="space-y-6 mt-8 animate-fade-in">
            <h2 className="text-2xl font-semibold">Assessment Results</h2>
            <Separator className="my-2" />
            {renderResults()}
          </div>
        )}

        <div className="flex gap-4">
          <Button 
            onClick={() => {
              setCurrentStep(1);
              setSelectedRights([]);
              setIsCompleted(false);
              setAnswers({});
            }}
            variant="outline"
          >
            Start Over
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default UgandaDataSubjectRights;