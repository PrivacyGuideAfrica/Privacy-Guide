import React, { useState } from "react";
import { Layout } from "@/components/shared/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { ArrowLeft, CheckCircle, XCircle, HelpCircle, User, Edit, X, UserCheck } from "lucide-react";

interface Question {
  id: string;
  text: string;
  tooltip?: string;
  options: {
    yes?: { nextQuestion?: string; message?: string };
    no?: { nextQuestion?: string; message?: string };
    notSure?: { nextQuestion?: string; message?: string };
  };
}

interface RequestType {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  questions: Question[];
}

// Request Type A - Access Request Questions
const accessQuestions: Question[] = [
  {
    id: "1A",
    text: "Has the individual requested to confirm if you hold their personal information, or asked for a description of the personal information you hold about them?",
    tooltip: "This typically involves requests like 'What personal information do you have about me?' or 'Can I see my customer records?'. This right also extends to knowing the identity or categories of third parties who have had access to their information.",
    options: {
      yes: { nextQuestion: "2A" },
      no: { message: "This request does not fall under the Right to Access. Please review other request types." }
    }
  },
  {
    id: "2A",
    text: "Can you reasonably confirm the individual's identity and locate the requested personal information?",
    tooltip: "You are not obliged to comply if you cannot reasonably identify the person or locate the data. You may charge a prescribed fee for access to the information.",
    options: {
      yes: { message: "COMPLY_ACCESS" },
      no: { message: "REFUSE_ACCESS" }
    }
  }
];

// Request Type B - Correction/Deletion Questions
const correctionQuestions: Question[] = [
  {
    id: "1B",
    text: "Has the individual requested that you correct, destroy, or delete their personal information because it is inaccurate, irrelevant, excessive, outdated, incomplete, misleading, unlawfully obtained, or because you are no longer authorised to retain it?",
    tooltip: "This applies if the individual believes the quality of their data is flawed or you no longer have a legal basis to hold it.",
    options: {
      yes: { nextQuestion: "2B" },
      no: { message: "This request does not fall under the Right to Rectification/Erasure. Please review other request types." }
    }
  },
  {
    id: "2B",
    text: "Is the information indeed inaccurate, irrelevant, excessive, outdated, incomplete, misleading, unlawfully obtained, or are you no longer authorised to retain it?",
    tooltip: "You should investigate the claim. If there's an agreement, you must follow it. If the data is accurate, you can provide credible evidence.",
    options: {
      yes: { message: "COMPLY_CORRECTION" },
      no: { message: "REFUSE_CORRECTION" }
    }
  }
];

// Request Type C - Objection Questions
const objectionQuestions: Question[] = [
  {
    id: "1C",
    text: "Has the individual objected to your processing of their personal information on reasonable grounds relating to their specific situation?",
    tooltip: "This typically applies to processing based on 'legitimate interests' or 'public law duties' (POPIA Section 11(1)(d) to (f)). For example, someone might object to data collection for a survey due to concerns about privacy.",
    options: {
      yes: { nextQuestion: "2C" },
      no: { nextQuestion: "3C" }
    }
  },
  {
    id: "2C",
    text: "Does your processing of this personal information override the individual's objection, considering any specific legal provisions or your compelling legitimate interests?",
    tooltip: "You must stop processing the personal information if the individual objects, unless there's a specific legal obligation or compelling legitimate ground to continue that outweighs their rights.",
    options: {
      yes: { message: "CONTINUE_PROCESSING" },
      no: { message: "STOP_PROCESSING" }
    }
  },
  {
    id: "3C",
    text: "Has the individual specifically objected to receiving direct marketing from you through unsolicited electronic communications (e.g., SMS, email, automated calls)?",
    tooltip: "This refers to direct marketing via electronic means where specific consent rules apply (POPIA Section 69). Individuals have a right to object at any time.",
    options: {
      yes: { message: "STOP_MARKETING" },
      no: { message: "NO_OBJECTION" }
    }
  }
];

// Request Type D - Automated Decision Questions
const automatedQuestions: Question[] = [
  {
    id: "1D",
    text: "Have you received a request from an individual to reconsider a decision that was based solely on automated processing (without human involvement) and has significant legal consequences or substantially affects them?",
    tooltip: "This applies to automated profiling or decision-making that has a major impact on an individual, such as automatically denying a loan application or rejecting a job application without human review. This does not apply to decisions made in connection with or in anticipation of entering into or performing a contract.",
    options: {
      yes: { message: "RECONSIDER_AUTOMATED" },
      no: { message: "NO_AUTOMATED_REVIEW" }
    }
  }
];

const requestTypes: RequestType[] = [
  {
    id: "A",
    title: "Request for Access to Personal Information",
    description: "Right to Access - POPIA Section 23. Individuals want to know what information you hold about them.",
    icon: User,
    questions: accessQuestions
  },
  {
    id: "B", 
    title: "Request for Correction or Deletion",
    description: "Right to Rectification/Erasure - POPIA Section 24. Individuals want to correct or delete their information.",
    icon: Edit,
    questions: correctionQuestions
  },
  {
    id: "C",
    title: "Request to Object to Processing", 
    description: "Right to Object - POPIA Section 11(3). Individuals want to stop certain processing activities.",
    icon: X,
    questions: objectionQuestions
  },
  {
    id: "D",
    title: "Request for Review of Automated Decisions",
    description: "Right to Automated Decision-Making - POPIA Section 71. Individuals want human review of automated decisions.",
    icon: UserCheck,
    questions: automatedQuestions
  }
];

const SouthAfricaDataSubjectRights = () => {
  const [currentStage, setCurrentStage] = useState<'initial' | 'selection' | 'assessment' | 'results'>('initial');
  const [selectedRequestType, setSelectedRequestType] = useState<RequestType | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [finalResult, setFinalResult] = useState<string>("");

  const handleInitialAnswer = (answer: string) => {
    if (answer === 'yes') {
      setCurrentStage('selection');
    } else {
      setFinalResult("NO_REQUEST");
      setCurrentStage('results');
    }
  };

  const handleRequestTypeSelection = (requestType: RequestType) => {
    setSelectedRequestType(requestType);
    setCurrentQuestion(0);
    setAnswers({});
    setCurrentStage('assessment');
  };

  const handleAnswer = (answer: string) => {
    if (!selectedRequestType) return;

    const question = selectedRequestType.questions[currentQuestion];
    const newAnswers = { ...answers, [question.id]: answer };
    setAnswers(newAnswers);

    const nextOption = question.options[answer as keyof typeof question.options];
    
    if (nextOption?.nextQuestion) {
      const nextQuestionIndex = selectedRequestType.questions.findIndex(q => q.id === nextOption.nextQuestion);
      if (nextQuestionIndex !== -1) {
        setCurrentQuestion(nextQuestionIndex);
      }
    } else if (nextOption?.message) {
      setFinalResult(nextOption.message);
      setCurrentStage('results');
    }
  };

  const resetAssessment = () => {
    setCurrentStage('initial');
    setSelectedRequestType(null);
    setCurrentQuestion(0);
    setAnswers({});
    setFinalResult("");
  };

  const getResultContent = (result: string) => {
    switch (result) {
      case "NO_REQUEST":
        return {
          title: "No Action Required",
          description: "No immediate action is required regarding data subject rights requests. Remember to maintain general compliance with POPIA.",
          type: "neutral" as const,
          actions: ["Continue monitoring for any future data subject requests", "Ensure staff are trained on recognizing data subject rights requests"]
        };
      
      case "COMPLY_ACCESS":
        return {
          title: "Comply with Access Request",
          description: "You must provide access to the personal information. You are obliged to confirm whether you hold the personal information and provide a description of it in an understandable form within a reasonable time.",
          type: "success" as const,
          actions: [
            "Provide the personal information in a reasonable manner and format",
            "Inform the data subject of their right to request correction (POPIA Section 24)",
            "Respond within a reasonable timeframe"
          ]
        };

      case "REFUSE_ACCESS":
        return {
          title: "Refuse Access Request (with reasons)",
          description: "You may refuse the request if you cannot reasonably identify the individual or locate the data. You must inform the individual of your refusal and the reasons for it.",
          type: "warning" as const,
          actions: [
            "Inform the individual in writing of the refusal and the reasons for it",
            "Advise the individual of their right to lodge a complaint with the Information Regulator"
          ]
        };

      case "COMPLY_CORRECTION":
        return {
          title: "Comply with Correction or Deletion Request",
          description: "You must take reasonably practicable steps to correct or delete the information. If you correct it, you must also inform any third parties to whom the data was previously disclosed, if reasonably practicable.",
          type: "success" as const,
          actions: [
            "Perform the requested action (correct, destroy, or delete)",
            "Notify relevant third parties (if applicable) and the individual of the action taken"
          ]
        };

      case "REFUSE_CORRECTION":
        return {
          title: "Refuse Correction or Deletion Request (with reasons)",
          description: "If you cannot comply with the request (e.g., you can provide credible evidence that the data is accurate), you must inform the individual of the rejection and attach an indication to the record that a request was made but not complied with.",
          type: "warning" as const,
          actions: [
            "Inform the individual in writing of the refusal and the reasons for it",
            "Attach an indication to the record that a correction request was made but not complied with",
            "Advise the individual of their right to lodge a complaint with the Information Regulator"
          ]
        };

      case "STOP_PROCESSING":
        return {
          title: "Stop Processing (General Objection)",
          description: "The individual's objection on reasonable grounds has been accepted. You may no longer process their personal information for that purpose.",
          type: "success" as const,
          actions: [
            "Update your records to reflect the objection",
            "Ensure that all relevant internal teams are aware of the cessation of processing"
          ]
        };

      case "CONTINUE_PROCESSING":
        return {
          title: "Continue Processing (General Objection Refused)",
          description: "You have a compelling legitimate interest or legal basis that overrides the individual's objection. You must inform the individual of your decision and the reasons for it.",
          type: "warning" as const,
          actions: [
            "Inform the individual in writing of your decision and reasons",
            "Advise the individual of their right to lodge a complaint with the Information Regulator"
          ]
        };

      case "STOP_MARKETING":
        return {
          title: "Stop Direct Marketing",
          description: "Individuals have an absolute right to object to direct marketing by electronic means. You may no longer send them unsolicited electronic marketing communications.",
          type: "success" as const,
          actions: [
            "Remove the individual from your direct marketing lists for electronic communications",
            "Update your objection database immediately"
          ]
        };

      case "NO_OBJECTION":
        return {
          title: "Objection Not Applicable",
          description: "This specific objection type does not apply to the individual's request.",
          type: "neutral" as const,
          actions: ["Re-evaluate the nature of the individual's request or whether another right might apply"]
        };

      case "RECONSIDER_AUTOMATED":
        return {
          title: "Reconsider Automated Decision",
          description: "The individual has a right to challenge a solely automated decision that significantly affects them. You must provide them with an opportunity to make representations about the decision and reconsider it within twenty-one days.",
          type: "success" as const,
          actions: [
            "Conduct a human review of the automated decision within 21 days",
            "Allow the individual to make representations about the decision",
            "Inform the individual of the outcome and reasons for the reconsideration",
            "Advise the individual of their right to complain to the Information Regulator if unsatisfied"
          ]
        };

      case "NO_AUTOMATED_REVIEW":
        return {
          title: "No Automated Decision Review Required",
          description: "No immediate action required for automated decision review based on the current request.",
          type: "neutral" as const,
          actions: ["Continue monitoring for other types of data subject requests"]
        };

      default:
        return {
          title: "Assessment Complete",
          description: "Please review the assessment or try again.",
          type: "neutral" as const,
          actions: []
        };
    }
  };

  const renderResults = () => {
    const result = getResultContent(finalResult);
    
    return (
      <div className="space-y-6">
        <Alert className={result.type === 'success' ? 'border-green-200 bg-green-50' : 
                         result.type === 'warning' ? 'border-yellow-200 bg-yellow-50' : 
                         'border-blue-200 bg-blue-50'}>
          <div className="flex items-start space-x-2">
            {result.type === 'success' ? <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" /> :
             result.type === 'warning' ? <XCircle className="h-5 w-5 text-yellow-600 mt-0.5" /> :
             <HelpCircle className="h-5 w-5 text-blue-600 mt-0.5" />}
            <div className="flex-1">
              <h3 className="font-semibold text-lg mb-2">{result.title}</h3>
              <AlertDescription className="text-base">
                {result.description}
              </AlertDescription>
            </div>
          </div>
        </Alert>

        {result.actions.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Required Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {result.actions.map((action, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>{action}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}

        <div className="bg-blue-50 p-4 rounded-lg">
          <h4 className="font-semibold mb-2">General Reminders</h4>
          <ul className="text-sm space-y-1">
            <li>• Maintain detailed records of all data subject requests and actions taken</li>
            <li>• Ensure staff are properly trained on handling these requests</li>
            <li>• Individuals always have the right to lodge a complaint with the Information Regulator</li>
            <li>• Respond to all requests within legally specified timeframes</li>
          </ul>
        </div>

        <div className="flex justify-center">
          <Button onClick={resetAssessment} variant="outline">
            Start New Assessment
          </Button>
        </div>
      </div>
    );
  };

  const getProgressPercentage = () => {
    if (currentStage === 'initial') return 25;
    if (currentStage === 'selection') return 50;
    if (currentStage === 'assessment') {
      if (!selectedRequestType) return 50;
      return 50 + ((currentQuestion + 1) / selectedRequestType.questions.length) * 25;
    }
    return 100;
  };

  return (
    <Layout>
      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Handling Data Subject Rights Requests in South Africa
            </h1>
            {currentStage !== 'results' && (
              <div className="mb-6">
                <Progress value={getProgressPercentage()} className="w-full max-w-md mx-auto" />
                <p className="text-sm text-gray-600 mt-2">{Math.round(getProgressPercentage())}% Complete</p>
              </div>
            )}
          </div>

          {currentStage === 'initial' && (
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <p className="text-gray-700 leading-relaxed">
                  This module helps you, as a Responsible Party (an individual or organisation that determines why and how personal information is processed), understand how to effectively respond when individuals ask to exercise their rights regarding their personal information under South Africa's Protection of Personal Information Act (POPIA). Promptly and correctly handling these requests is crucial for compliance.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Personal information is any information about an identifiable, living natural person, and where applicable, an identifiable existing juristic person. A data subject is the individual to whom the personal information relates.
                </p>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Initial Assessment</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="font-medium mb-4">
                      Have you received a request from an individual asking to access, change, delete, or object to the use of their personal information?
                    </p>
                    <p className="text-sm text-gray-600 mb-4">
                      This covers any formal communication (written, email, or via a specific form like Form 1 or Form 2 of the POPIA Regulations 2021) where an individual asks you to take action regarding their personal information.
                    </p>
                    <div className="flex space-x-3">
                      <Button onClick={() => handleInitialAnswer('yes')} className="bg-green-600 hover:bg-green-700">
                        Yes
                      </Button>
                      <Button onClick={() => handleInitialAnswer('no')} variant="outline">
                        No
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {currentStage === 'selection' && (
            <div className="space-y-6">
              <div className="text-center">
                <h2 className="text-xl font-semibold mb-4">Select the Type of Request</h2>
                <p className="text-gray-600">Choose the category that best matches the individual's request:</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {requestTypes.map((type) => (
                  <Card key={type.id} className="cursor-pointer hover:shadow-md transition-shadow" onClick={() => handleRequestTypeSelection(type)}>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-3">
                        <type.icon className="h-6 w-6 text-blue-600" />
                        <span className="text-lg">{type.title}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{type.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="text-center">
                <Button onClick={() => setCurrentStage('initial')} variant="outline">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Initial Question
                </Button>
              </div>
            </div>
          )}

          {currentStage === 'assessment' && selectedRequestType && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <Badge variant="outline" className="text-sm">
                  {selectedRequestType.title}
                </Badge>
                <span className="text-sm text-gray-500">
                  Question {currentQuestion + 1} of {selectedRequestType.questions.length}
                </span>
              </div>

              <Card>
                <CardContent className="space-y-4 pt-6">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="font-medium mb-4">
                      {selectedRequestType.questions[currentQuestion].text}
                    </p>
                    {selectedRequestType.questions[currentQuestion].tooltip && (
                      <p className="text-sm text-gray-600 mb-4">
                        {selectedRequestType.questions[currentQuestion].tooltip}
                      </p>
                    )}
                    <div className="flex space-x-3">
                      <Button onClick={() => handleAnswer('yes')} className="bg-green-600 hover:bg-green-700">
                        Yes
                      </Button>
                      <Button onClick={() => handleAnswer('no')} variant="outline">
                        No
                      </Button>
                      <Button onClick={() => handleAnswer('notSure')} variant="secondary">
                        Not Sure
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="text-center">
                <Button onClick={() => setCurrentStage('selection')} variant="outline">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Request Types
                </Button>
              </div>
            </div>
          )}

          {currentStage === 'results' && renderResults()}
        </div>
      </div>
    </Layout>
  );
};

export default SouthAfricaDataSubjectRights;