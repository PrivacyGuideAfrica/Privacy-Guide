import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, UserCog, CheckCircle, AlertCircle, BookOpen, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Badge } from '@/components/ui/badge';

interface Question {
  id: number;
  text: string;
  tooltip: string;
}

const questions: Question[] = [
  {
    id: 1,
    text: "Do your main activities involve regularly and systematically watching or tracking a large number of individuals?",
    tooltip: "\"Regular and systematic monitoring\" involves ongoing observation, tracking, or analysis of people. \"Large number\" considers factors such as the total number of individuals concerned, the volume and variety of data being processed, the duration or permanence of the data processing activity, and the geographical extent of the processing."
  },
  {
    id: 2,
    text: "Are your main activities focused on processing special personal data?",
    tooltip: "\"Special personal data\" includes information related to religious or philosophical beliefs, political opinions, sexual life, financial information, health status, or medical records of an individual."
  }
];

const UgandaDPO: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState<'required' | 'not-required' | null>(null);

  const handleAnswer = (answer: string) => {
    const newAnswers = { ...answers, [questions[currentQuestion].id]: answer };
    setAnswers(newAnswers);

    // Question 1: If Yes, DPO required
    if (currentQuestion === 0 && answer === 'yes') {
      setResult('required');
      setShowResult(true);
      return;
    }

    // Question 1: If No, go to Question 2
    if (currentQuestion === 0 && answer === 'no') {
      setCurrentQuestion(1);
      return;
    }

    // Question 2: If Yes, DPO required; If No, DPO not required
    if (currentQuestion === 1) {
      setResult(answer === 'yes' ? 'required' : 'not-required');
      setShowResult(true);
    }
  };

  const resetAssessment = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResult(false);
    setResult(null);
  };

  const getProgress = () => {
    if (showResult) return 100;
    return ((currentQuestion + 1) / questions.length) * 100;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link to="/country/uganda" className="text-blue-600 hover:text-blue-800 flex items-center gap-2">
            <ChevronLeft className="h-4 w-4" />
            Back to Uganda
          </Link>
        </div>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-blue-100 rounded-lg">
              <UserCog className="h-8 w-8 text-blue-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Appointment of a Data Protection Officer (DPO)
              </h1>
              <p className="text-gray-600 mt-2">
                This module helps you work out if your organisation needs to appoint a Data Protection Officer (DPO) under Uganda's Data Protection and Privacy Act, 2019.
              </p>
            </div>
          </div>
          <p className="text-gray-700">
            A DPO is a designated person with expert knowledge who helps your organisation comply with data protection laws and manage personal data responsibly.
          </p>
        </div>

        {!showResult ? (
          /* Assessment Questions */
          <Card className="mb-8">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="flex items-center gap-2">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium">
                    Question {currentQuestion + 1} of {questions.length}
                  </span>
                  DPO Necessity Assessment
                </CardTitle>
              </div>
              <Progress value={getProgress()} className="w-full h-2" />
            </CardHeader>
            <CardContent>
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
                <div className="flex items-start gap-3">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="cursor-help">
                          <h3 className="font-semibold text-blue-900 mb-2">
                            {questions[currentQuestion].text}
                          </h3>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent side="top" className="max-w-md">
                        <p>{questions[currentQuestion].tooltip}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </div>

              <div className="flex gap-4">
                <Button
                  onClick={() => handleAnswer('yes')}
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white"
                >
                  Yes
                </Button>
                <Button
                  onClick={() => handleAnswer('no')}
                  variant="outline"
                  className="flex-1"
                >
                  No
                </Button>
              </div>
            </CardContent>
          </Card>
        ) : (
          /* Results */
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                {result === 'required' ? (
                  <CheckCircle className="h-6 w-6 text-green-600" />
                ) : (
                  <AlertCircle className="h-6 w-6 text-amber-600" />
                )}
                Assessment Result
              </CardTitle>
            </CardHeader>
            <CardContent>
              {result === 'required' ? (
                <div>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                    <h3 className="font-semibold text-green-900 mb-2">
                      You need to appoint a Data Protection Officer (DPO).
                    </h3>
                    <p className="text-green-800">
                      Your organisation's activities meet the criteria for mandatory DPO appointment under Uganda's Data Protection and Privacy Regulations.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <Badge variant="outline" className="mr-2">
                      <Link to="#" className="text-blue-600 hover:underline">
                        Understand DPO Responsibilities
                      </Link>
                    </Badge>
                    <Badge variant="outline">
                      <Link to="#" className="text-blue-600 hover:underline">
                        Find a Qualified DPO
                      </Link>
                    </Badge>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-4">
                    <h3 className="font-semibold text-amber-900 mb-2">
                      You are not legally required to appoint a DPO.
                    </h3>
                    <p className="text-amber-800">
                      Based on your answers, your organisation does not currently meet the specific conditions for mandatory DPO appointment. However, having a DPO, or at least a dedicated person responsible for data protection, can still be very beneficial for ensuring compliance and demonstrating good practice.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <Badge variant="outline" className="mr-2">
                      <Link to="#" className="text-blue-600 hover:underline">
                        Why a DPO is still beneficial
                      </Link>
                    </Badge>
                    <Badge variant="outline">
                      <Link to="#" className="text-blue-600 hover:underline">
                        Learn more about general data protection compliance
                      </Link>
                    </Badge>
                  </div>
                </div>
              )}

              <div className="mt-6">
                <Button onClick={resetAssessment} variant="outline">
                  Take Assessment Again
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* DPO Guidance Sections */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* What Does a DPO Do? */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-6 w-6 text-blue-600" />
                What Does a DPO Do?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 font-medium">
                If your organisation appoints a DPO, this person will have several key responsibilities:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>They will advise your organisation and its employees on their obligations under the Data Protection and Privacy Act.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>They will monitor your compliance with the Act and your organisation's own data protection policies.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>They will act as the main point of contact between your organisation and the Personal Data Protection Office on all data processing matters.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>They will conduct regular assessments and audits to ensure compliance with the Act.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>They will maintain records of all data processing activities conducted by your organisation.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>They will respond to data subjects and inform them about how their personal data is being used and what measures your organisation has put in place to protect the data.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>They will ensure that requests from data subjects to see copies of their personal data or to have their personal data erased are fulfilled or responded to as necessary.</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Who Can Be a DPO? */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-6 w-6 text-blue-600" />
                Who Can Be a DPO?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-blue-900 font-medium mb-2">
                  A DPO should be designated with expert knowledge of data protection law and practices, and have the ability to carry out the tasks prescribed under the Act.
                </p>
                <p className="text-blue-800">
                  Your organisation must provide the designated DPO with relevant training to enable them to perform their duties effectively.
                </p>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900">Key Qualifications:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Expert knowledge of data protection laws and practices</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Ability to carry out prescribed tasks under the Act</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Access to relevant training opportunities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Understanding of organizational data processing activities</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default UgandaDPO;