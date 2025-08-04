import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Download, Mail, FileText } from "lucide-react";

interface Question {
  id: string;
  question: string;
  tooltip?: string;
  options: Array<{ value: string; label: string }>;
}

const UgandaAnnualCompliance = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResult, setShowResult] = useState(false);

  const questions: Question[] = [
    {
      id: "registration_status",
      question: "Are you currently registered as a Data Collector, Data Processor, or Data Controller with the Personal Data Protection Office (PDPO) in Uganda?",
      tooltip: "This applies to any person, institution, or public body that has completed the official registration process with the PDPO.",
      options: [
        { value: "yes", label: "Yes" },
        { value: "no", label: "No" }
      ]
    }
  ];

  const handleAnswer = (questionId: string, answer: string) => {
    const newAnswers = { ...answers, [questionId]: answer };
    setAnswers(newAnswers);
    
    // Show result immediately since we only have one question
    setShowResult(true);
  };

  const resetAssessment = () => {
    setCurrentQuestionIndex(0);
    setAnswers({});
    setShowResult(false);
  };

  const isReportRequired = answers.registration_status === "yes";

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link 
            to="/country/uganda" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Uganda Assessments
          </Link>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Annual Data Protection Compliance Report - Uganda
          </h1>
          <p className="text-lg text-gray-600">
            This module helps you understand your obligation to file an Annual Data Protection and Privacy Compliance Report with the Personal Data Protection Office (PDPO) in Uganda. This report is crucial for demonstrating your organisation's ongoing commitment to data protection.
          </p>
        </div>

        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="flex items-center">
              <FileText className="mr-2 h-6 w-6 text-ndpa-green" />
              Is an Annual Compliance Report Required for Your Organisation?
            </CardTitle>
          </CardHeader>
          
          <CardContent>
            {!showResult ? (
              <div className="space-y-6">
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-gray-500">
                      Question {currentQuestionIndex + 1} of {questions.length}
                    </span>
                    <div className="w-32 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-ndpa-green h-2 rounded-full transition-all duration-300"
                        style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                    <h3 className="font-semibold text-lg mb-3">
                      {questions[currentQuestionIndex].question}
                    </h3>
                    {questions[currentQuestionIndex].tooltip && (
                      <p className="text-sm text-gray-600 mb-4">
                        <strong>Note:</strong> {questions[currentQuestionIndex].tooltip}
                      </p>
                    )}
                  </div>

                  <div className="grid gap-3">
                    {questions[currentQuestionIndex].options.map((option) => (
                      <Button
                        key={option.value}
                        variant="outline"
                        className="justify-start p-4 h-auto text-left"
                        onClick={() => handleAnswer(questions[currentQuestionIndex].id, option.value)}
                      >
                        {option.label}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                {isReportRequired ? (
                  <div>
                    <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
                      <h3 className="text-xl font-semibold text-red-800 mb-2">
                        Annual Compliance Report is Required
                      </h3>
                      <p className="text-red-700 font-medium">
                        You must submit an Annual Data Protection and Privacy Compliance Report.
                      </p>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-2">Explanation:</h4>
                        <p className="text-gray-700">
                          As a registered Data Collector, Data Processor, or Data Controller, you are legally obliged to submit an annual summary of your data protection activities to the PDPO.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">When to Submit:</h4>
                        <p className="text-gray-700">
                          The report covers the Government financial year (1st July to 30th June) and must be submitted to the PDPO between 1st July and 30th September of each year.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3">What to Include in the Report:</h4>
                        <p className="text-gray-700 mb-3">
                          Your report should be comprehensive and cover various aspects of your compliance efforts. It typically includes:
                        </p>
                        <ul className="space-y-2 text-gray-700">
                          <li className="flex items-start">
                            <span className="font-medium mr-2">•</span>
                            <div>
                              <strong>Organisation Background:</strong> A description of your core activities and how they involve personal data processing.
                            </div>
                          </li>
                          <li className="flex items-start">
                            <span className="font-medium mr-2">•</span>
                            <div>
                              <strong>PDPO Registration Status:</strong> Details about your current registration, including renewal status and any changes to your registered information.
                            </div>
                          </li>
                          <li className="flex items-start">
                            <span className="font-medium mr-2">•</span>
                            <div>
                              <strong>Leadership and Oversight:</strong> Information about your Data Protection Officer (if appointed), their role, responsibilities, and how they report within your organisation.
                            </div>
                          </li>
                          <li className="flex items-start">
                            <span className="font-medium mr-2">•</span>
                            <div>
                              <strong>Data Protection Policies:</strong> An overview of your privacy notices, policies, and procedures for handling and protecting personal data.
                            </div>
                          </li>
                          <li className="flex items-start">
                            <span className="font-medium mr-2">•</span>
                            <div>
                              <strong>Training and Awareness:</strong> Details on data protection training provided to your DPO, staff, and any third-party contractors.
                            </div>
                          </li>
                          <li className="flex items-start">
                            <span className="font-medium mr-2">•</span>
                            <div>
                              <strong>Complaints Handling:</strong> A summary of any data protection-related complaints received, their status, and how they were resolved.
                            </div>
                          </li>
                          <li className="flex items-start">
                            <span className="font-medium mr-2">•</span>
                            <div>
                              <strong>Data Security Breaches:</strong> Information on any data breaches experienced, including the number of breaches, their causes, and the actions taken to address them.
                            </div>
                          </li>
                          <li className="flex items-start">
                            <span className="font-medium mr-2">•</span>
                            <div>
                              <strong>Data Protection Impact Assessments (DPIAs):</strong> Whether you conducted any DPIAs during the year and details of those assessments.
                            </div>
                          </li>
                          <li className="flex items-start">
                            <span className="font-medium mr-2">•</span>
                            <div>
                              <strong>Audits and Assessments:</strong> A report on any regular data protection assessments or audits conducted, and the percentage of recommendations implemented.
                            </div>
                          </li>
                          <li className="flex items-start">
                            <span className="font-medium mr-2">•</span>
                            <div>
                              <strong>Key Observations:</strong> Your major takeaways, general observations, and any challenges faced in ensuring compliance.
                            </div>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">How to Submit:</h4>
                        <p className="text-gray-700">
                          The completed, signed, and scanned report should be submitted to the PDPO via email at compliance@pdpo.go.ug.
                        </p>
                      </div>

                      <div className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="font-semibold mb-4">Next action links:</h3>
                        <div className="space-y-3">
                          <Button variant="outline" className="w-full justify-start" asChild>
                            <a href="https://www.pdpo.go.ug/information-centre/" target="_blank" rel="noopener noreferrer">
                              <Download className="mr-2 h-4 w-4" />
                              Download the Annual Data Protection and Privacy Compliance Report template from the PDPO website
                            </a>
                          </Button>
                          <Button variant="outline" className="w-full justify-start">
                            <Mail className="mr-2 h-4 w-4" />
                            Contact the Personal Data Protection Office (Uganda) for further guidance
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
                      <h3 className="text-xl font-semibold text-green-800 mb-2">
                        Annual Compliance Report not required
                      </h3>
                      <p className="text-green-700 font-medium">
                        Based on your current registration status, an Annual Data Protection and Privacy Compliance Report is not required.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Explanation:</h4>
                      <p className="text-gray-700">
                        This report is only mandatory for organisations registered as Data Collectors, Data Processors, or Data Controllers with the PDPO. If you are not registered, this specific reporting obligation does not apply to you. However, please ensure you have checked if you need to be registered in the first place.
                      </p>
                    </div>
                  </div>
                )}

                <div className="flex gap-4 pt-6 border-t">
                  <Button onClick={resetAssessment} variant="outline">
                    Start Over
                  </Button>
                  <Link to="/country/uganda">
                    <Button variant="default">
                      Back to Uganda Assessments
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

export default UgandaAnnualCompliance;