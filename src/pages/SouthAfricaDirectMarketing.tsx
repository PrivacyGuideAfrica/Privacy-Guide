import React from 'react';
import { AssessmentInterface, Question } from '@/components/shared/AssessmentInterface';
import { Layout } from '@/components/shared/Layout';
import { ArrowLeft, Mail, MessageSquare, Shield } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Alert, AlertDescription } from '@/components/ui/alert';

const directMarketingQuestions: Question[] = [
  {
    id: 1,
    text: "Do you approach individuals for direct marketing purposes using electronic communications (like email, SMS, or automated calls) that they did not specifically ask to receive?",
    tooltip: "This applies if you send marketing messages to individuals without them initiating contact or explicitly requesting to receive such communications from you.",
    options: {
      yes: { nextQuestion: 2 },
      no: { nextQuestion: null, message: "END_NO_ELECTRONIC_MARKETING" }
    }
  },
  {
    id: 2,
    text: "Have you obtained valid and specific consent from the individual to send them these electronic direct marketing communications?",
    tooltip: "Consent must be freely given, specific, and informed. You can only approach an individual once to ask for this consent if you do not already have it, provided they have not previously refused. Consent can be obtained using Form 4 (POPIA Regulations 2021) or a similar, readily accessible method, and can be given via email, telephonically, SMS/WhatsApp, or facsimile.",
    options: {
      yes: { nextQuestion: null, message: "LAWFUL_MARKETING" },
      no: { nextQuestion: 3 }
    }
  },
  {
    id: 3,
    text: "Is the individual an existing customer, and are you marketing your own similar products or services to them, using contact details obtained during a previous sale?",
    tooltip: "This exception applies if you gained their contact details in the context of a sale of a product or service, and you are promoting your own similar goods or services. You must have given them a reasonable opportunity to object, free of charge, both at the time of data collection and in each subsequent communication, and they must not have initially refused such use.",
    options: {
      yes: { nextQuestion: null, message: "LAWFUL_MARKETING" },
      no: { nextQuestion: null, message: "UNLAWFUL_MARKETING" }
    }
  }
];

const SouthAfricaDirectMarketing = () => {
  const navigate = useNavigate();

  const handleComplete = () => {
    // Direct Marketing Assessment completed - no logging needed for production
  };

  const handleReset = () => {
    // Direct Marketing Assessment reset - no logging needed for production
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <Link
                to="/south-africa-applicability"
                className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors mb-6"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to South Africa Assessments
              </Link>

              <div className="text-center space-y-4">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="p-3 bg-green-100 rounded-full">
                    <Mail className="w-8 h-8 text-green-600" />
                  </div>
                  <div className="p-3 bg-blue-100 rounded-full">
                    <MessageSquare className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="p-3 bg-purple-100 rounded-full">
                    <Shield className="w-8 h-8 text-purple-600" />
                  </div>
                </div>
                <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                  Module 9: Direct Marketing
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Understand the strict rules for direct marketing, especially when using unsolicited electronic communications, under South Africa's Protection of Personal Information Act (POPIA).
                </p>
              </div>
            </div>

            <Alert className="mb-8 bg-blue-50 border-blue-200">
              <MessageSquare className="h-4 w-4 text-blue-600" />
              <AlertDescription className="text-blue-700">
                <strong>Key Definitions:</strong> Direct marketing means approaching an individual, either in person or via mail or electronic communication, to promote goods, services, or to request a donation. Electronic communication includes any text, voice, sound, or image message sent over an electronic communications network (e.g., email, SMS, automated calls). Unsolicited refers to communications that the individual did not specifically ask to receive.
              </AlertDescription>
            </Alert>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <AssessmentInterface
                title="Direct Marketing Compliance Assessment"
                questions={directMarketingQuestions}
                onComplete={handleComplete}
                onReset={handleReset}
              />
            </div>

            <div className="mt-8 text-center">
              <button
                onClick={() => navigate('/south-africa-applicability')}
                className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                Take Other South Africa Assessments
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SouthAfricaDirectMarketing;