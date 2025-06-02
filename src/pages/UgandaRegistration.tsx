
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Building, FileText, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/shared/Layout";

const UgandaRegistration = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      id: "org_type",
      question: "What type of organization are you?",
      options: [
        { value: "public", label: "Public body or institution" },
        { value: "private", label: "Private company/organization" },
        { value: "ngo", label: "NGO or non-profit" },
        { value: "other", label: "Other" }
      ]
    },
    {
      id: "data_processing",
      question: "Do you process personal data as part of your operations?",
      options: [
        { value: "yes", label: "Yes, we regularly process personal data" },
        { value: "limited", label: "Yes, but only limited processing" },
        { value: "no", label: "No, we don't process personal data" }
      ]
    },
    {
      id: "data_volume",
      question: "What is the scale of your data processing?",
      options: [
        { value: "large", label: "Large scale (thousands of data subjects)" },
        { value: "medium", label: "Medium scale (hundreds of data subjects)" },
        { value: "small", label: "Small scale (under 100 data subjects)" }
      ]
    }
  ];

  const handleAnswer = (questionId: string, answer: string) => {
    setAnswers({ ...answers, [questionId]: answer });
    if (currentStep < questions.length) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResult(true);
    }
  };

  const getRegistrationRequirement = () => {
    const orgType = answers.org_type;
    const processing = answers.data_processing;
    const volume = answers.data_volume;

    if (processing === "no") {
      return {
        required: false,
        title: "Registration Not Required",
        message: "Since you don't process personal data, registration with the Personal Data Protection Office is not required.",
        icon: <FileText className="h-12 w-12 text-green-500" />
      };
    }

    if (orgType === "public" || volume === "large") {
      return {
        required: true,
        title: "Registration Required",
        message: "Your organization must register with Uganda's Personal Data Protection Office before processing personal data.",
        icon: <Building className="h-12 w-12 text-red-500" />,
        deadline: "Within 30 days of commencing data processing operations"
      };
    }

    return {
      required: true,
      title: "Registration Likely Required",
      message: "Based on your responses, you should register with the Personal Data Protection Office. Consult the office for specific requirements.",
      icon: <Clock className="h-12 w-12 text-yellow-500" />
    };
  };

  if (showResult) {
    const result = getRegistrationRequirement();
    
    return (
      <Layout>
        <div className="max-w-4xl mx-auto px-4 py-12">
          <Link to="/country/uganda" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Uganda Modules
          </Link>

          <Card className="p-8">
            <div className="text-center mb-8">
              {result.icon}
              <h2 className="text-2xl font-bold mt-4 mb-2">{result.title}</h2>
              <p className="text-gray-600 text-lg">{result.message}</p>
              {result.deadline && (
                <p className="text-red-600 font-semibold mt-2">Deadline: {result.deadline}</p>
              )}
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-semibold mb-4">Next Steps:</h3>
              <ul className="list-disc list-inside space-y-2">
                {result.required ? (
                  <>
                    <li>Contact Uganda's Personal Data Protection Office</li>
                    <li>Prepare required documentation</li>
                    <li>Submit registration application</li>
                    <li>Pay applicable registration fees</li>
                  </>
                ) : (
                  <>
                    <li>No immediate action required</li>
                    <li>Monitor changes in your data processing activities</li>
                    <li>Re-assess if you begin processing personal data</li>
                  </>
                )}
              </ul>
            </div>

            <div className="mt-8 text-center">
              <Button onClick={() => window.location.reload()} className="mr-4">
                Start New Assessment
              </Button>
              <Button variant="outline" asChild>
                <Link to="/country/uganda">Back to Uganda Modules</Link>
              </Button>
            </div>
          </Card>
        </div>
      </Layout>
    );
  }

  const currentQuestion = questions[currentStep - 1];

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link to="/country/uganda" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Uganda Modules
        </Link>

        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Uganda Registration Assessment</h1>
          <p className="text-gray-600">
            Determine if your organization needs to register with Uganda's Personal Data Protection Office
          </p>
        </div>

        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium">Progress</span>
            <span className="text-sm text-gray-500">{currentStep} of {questions.length}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / questions.length) * 100}%` }}
            ></div>
          </div>
        </div>

        <Card className="p-8">
          <h2 className="text-xl font-semibold mb-6">{currentQuestion.question}</h2>
          <div className="space-y-4">
            {currentQuestion.options.map((option) => (
              <Button
                key={option.value}
                variant="outline"
                className="w-full text-left p-4 h-auto justify-start hover:bg-blue-50"
                onClick={() => handleAnswer(currentQuestion.id, option.value)}
              >
                {option.label}
              </Button>
            ))}
          </div>
        </Card>
      </div>
    </Layout>
  );
};

export default UgandaRegistration;
