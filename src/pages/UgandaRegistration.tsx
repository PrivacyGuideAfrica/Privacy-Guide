
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Building, FileText, Clock, HelpCircle, Download, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/shared/Layout";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

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
      id: "data_role",
      question: "Are you acting as a Data Collector, Data Processor, or Data Controller for personal data?",
      tooltip: "A Data Collector gathers personal data. A Data Processor handles personal data on behalf of someone else, following their instructions. A Data Controller decides why and how personal data is used.",
      options: [
        { value: "collector", label: "Data Collector" },
        { value: "processor", label: "Data Processor" },
        { value: "controller", label: "Data Controller" },
        { value: "none", label: "None of the above" }
      ]
    },
  ];

  const handleAnswer = (questionId: string, answer: string) => {
    const newAnswers = { ...answers, [questionId]: answer };
    setAnswers(newAnswers);
    
    // Skip remaining questions if user doesn't process data or has no data role
    if (questionId === "data_processing" && answer === "no") {
      setShowResult(true);
      return;
    }
    
    if (questionId === "data_role" && answer === "none") {
      setShowResult(true);
      return;
    }
    
    if (currentStep < questions.length) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResult(true);
    }
  };

  const getRegistrationRequirement = () => {
    const processing = answers.data_processing;
    const role = answers.data_role;

    if (processing === "no" || role === "none") {
      return {
        required: false,
        title: "Registration not required",
        message: "Based on your answers, your organisation does not appear to operate as a Data Collector, Data Processor, or Data Controller, therefore, registration with the Personal Data Protection Office is not currently a mandatory requirement for you.",
        icon: <FileText className="h-12 w-12 text-green-500" />
      };
    }

    if (role === "collector" || role === "processor" || role === "controller") {
      return {
        required: true,
        title: "Registration is Mandatory",
        message: "As a Data Collector, Data Processor, or Data Controller, you are legally required to register with the Personal Data Protection Office (PDPO). Operating without a valid registration certificate is considered an offence and can lead to penalties.",
        icon: <Building className="h-12 w-12 text-red-500" />
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
            </div>

{result.required ? (
              <div className="space-y-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-semibold mb-4">What You Need for Registration:</h3>
                  <ul className="list-disc list-inside space-y-2 text-sm">
                    <li><strong>Your Identity:</strong> Provide your organisation's name and a designated single point of contact. If you are a foreign entity, you will need to provide details of your Ugandan representative.</li>
                    <li><strong>Data Description:</strong> Describe the types of personal data you process and the categories of individuals (data subjects) it relates to (e.g., employees, customers).</li>
                    <li><strong>Purpose of Processing:</strong> Clearly state the reasons why you collect or use personal data.</li>
                    <li><strong>Recipients of Data:</strong> Identify the categories of persons or organisations with whom you intend to share the personal data.</li>
                    <li><strong>Data Retention:</strong> Specify how long you plan to keep the personal data.</li>
                    <li><strong>International Transfers (if applicable):</strong> If you transfer personal data outside Uganda, you must specify the countries involved.</li>
                    <li><strong>Security Measures:</strong> Provide a general description of the measures you have in place to keep personal data secure.</li>
                    <li><strong>DPO Details (if any):</strong> Include the details of your Data Protection Officer, if you have one.</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h3 className="font-semibold mb-4">Undertaking for Data Outside Uganda (Form 3):</h3>
                  <p className="text-sm mb-3">Your application must be accompanied by a signed written undertaking (Form 3). This undertaking confirms that you will not process or store personal data in a country outside Uganda unless:</p>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>That country has adequate measures in place for data protection that are at least equivalent to the protection provided by the Ugandan Act.</li>
                    <li>The data subject has given their consent for the transfer.</li>
                  </ul>
                  <p className="text-sm mt-3 font-medium">Please Note: The Personal Data Protection Office is responsible for publishing a list of countries with adequate data protection measures, but this list is not yet available.</p>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="font-semibold mb-4">Registration Process & What Happens Next:</h3>
                  <ul className="list-disc list-inside space-y-2 text-sm">
                    <li><strong>Registration Fee:</strong> An application fee of UGX 100,000 is required.</li>
                    <li><strong>Application Submission:</strong> You must use Form 2 for your application, ensuring all required documents are attached.</li>
                    <li><strong>Certificate Issuance:</strong> If your application is complete and meets all requirements, the PDPO will issue a registration certificate (Form 4) within 30 working days from the date they receive it.</li>
                    <li><strong>Certificate Validity:</strong> Your registration certificate is valid for 12 months from the date of registration.</li>
                    <li><strong>Reporting Changes:</strong> You are legally obliged to notify the PDPO in writing within 14 days of any change to your registered details.</li>
                    <li><strong>Renewal:</strong> You must apply for renewal of your registration certificate at least three months prior to its expiration date. A renewal fee of UGX 100,000 also applies.</li>
                    <li><strong>Cancellation:</strong> The PDPO may cancel your registration certificate before its expiry date if you submitted false or misleading information or failed to comply with the Act or the certificate's terms.</li>
                    <li><strong>Public Register:</strong> Details of all registered Data Collectors, Processors, and Controllers are kept in a public register by the PDPO, which is available for inspection.</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold mb-4">Next Steps:</h3>
                  <Button variant="default" className="w-full" asChild>
                    <a href="https://www.pdpo.go.ug/register" target="_blank" rel="noopener noreferrer">
                      Register with the Personal Data Protection Office
                    </a>
                  </Button>
                </div>
              </div>
            ) : (
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-semibold mb-4">Next Steps:</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>No immediate action required</li>
                  <li>Monitor changes in your data processing activities</li>
                  <li>Re-assess if you begin processing personal data</li>
                </ul>
              </div>
            )}

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
          <div className="flex items-center gap-2 mb-6">
            <h2 className="text-xl font-semibold">{currentQuestion.question}</h2>
            {currentQuestion.tooltip && (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <HelpCircle className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                  </TooltipTrigger>
                  <TooltipContent className="max-w-sm">
                    <p>{currentQuestion.tooltip}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
          </div>
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
