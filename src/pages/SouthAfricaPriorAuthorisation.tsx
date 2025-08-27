import { AssessmentInterface, Question } from "@/components/shared/AssessmentInterface";
import { Layout } from "@/components/shared/Layout";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const questions: Question[] = [
  {
    id: 1,
    text: "Are you planning to process unique identifiers (such as ID numbers, passport numbers, email addresses, or biometric data) of individuals for a purpose different from why they were originally collected, AND with the aim of linking this information with data processed by other organisations?",
    tooltip: "This specifically applies if you are matching or combining information using unique identifiers from different sources for a new purpose.",
    options: {
      yes: { nextQuestion: null, message: "Prior Authorisation is Required\n\nYou need to apply for Prior Authorisation from the Information Regulator.\n\nYour planned processing activities fall into a category that requires specific approval from the Information Regulator before you can begin. You cannot start processing this data until you receive authorisation or a notification that a detailed investigation is not required.\n\nWhat to do: You must obtain prior authorisation from the Regulator. Processing subject to prior authorisation must be notified to the Regulator. You may not carry out processing that has been notified until the Regulator completes its investigation or notifies you otherwise.\n\nNext actions:\n• Download the 'Revised Application for Prior Authorisation' form from the Information Regulator's website\n• Contact the Information Regulator (South Africa) for guidance on your application via email: authorisation.SPI@justice.gov.za\n• Seek professional legal advice regarding your specific processing activity" },
      no: { nextQuestion: 2 }
    }
  },
  {
    id: 2,
    text: "Are you processing information about individuals' criminal behaviour or other unlawful or objectionable conduct on behalf of another organisation (a third party)?",
    tooltip: "This applies if you handle data related to someone's criminal record or unacceptable conduct for a service you provide to another entity. For example, a background check company providing services to employers.",
    options: {
      yes: { nextQuestion: null, message: "Prior Authorisation is Required\n\nYou need to apply for Prior Authorisation from the Information Regulator.\n\nYour planned processing activities fall into a category that requires specific approval from the Information Regulator before you can begin. You cannot start processing this data until you receive authorisation or a notification that a detailed investigation is not required.\n\nWhat to do: You must obtain prior authorisation from the Regulator. Processing subject to prior authorisation must be notified to the Regulator. You may not carry out processing that has been notified until the Regulator completes its investigation or notifies you otherwise.\n\nNext actions:\n• Download the 'Revised Application for Prior Authorisation' form from the Information Regulator's website\n• Contact the Information Regulator (South Africa) for guidance on your application via email: authorisation.SPI@justice.gov.za\n• Seek professional legal advice regarding your specific processing activity" },
      no: { nextQuestion: 3 }
    }
  },
  {
    id: 3,
    text: "Are you processing personal information specifically for credit reporting purposes?",
    tooltip: "This refers to activities conducted by credit bureaus or similar entities that collect and process personal information to assess an individual's creditworthiness.",
    options: {
      yes: { nextQuestion: null, message: "Prior Authorisation is Required\n\nYou need to apply for Prior Authorisation from the Information Regulator.\n\nYour planned processing activities fall into a category that requires specific approval from the Information Regulator before you can begin. You cannot start processing this data until you receive authorisation or a notification that a detailed investigation is not required.\n\nWhat to do: You must obtain prior authorisation from the Regulator. Processing subject to prior authorisation must be notified to the Regulator. You may not carry out processing that have been notified until the Regulator completes its investigation or notifies you otherwise.\n\nNext actions:\n• Download the 'Revised Application for Prior Authorisation' form from the Information Regulator's website\n• Contact the Information Regulator (South Africa) for guidance on your application via email: authorisation.SPI@justice.gov.za\n• Seek professional legal advice regarding your specific processing activity" },
      no: { nextQuestion: 4 }
    }
  },
  {
    id: 4,
    text: "Are you planning to transfer 'special personal information' or personal information of children to another country (a third party in a foreign country) that does not provide an adequate level of protection?",
    tooltip: "'Special personal information' includes data revealing racial or ethnic origin, political persuasion, religious or philosophical beliefs, trade union membership, health or sex life, or biometric information, as well as information about criminal behaviour. Personal information of children refers to data about natural persons under the age of 18. An 'adequate level of protection' means the foreign country's laws adequately protect personal information, similar to POPIA. Currently, the Information Regulator has not published a list of such countries.",
    options: {
      yes: { nextQuestion: null, message: "Prior Authorisation is Required\n\nYou need to apply for Prior Authorisation from the Information Regulator.\n\nYour planned processing activities fall into a category that requires specific approval from the Information Regulator before you can begin. You cannot start processing this data until you receive authorisation or a notification that a detailed investigation is not required.\n\nWhat to do: You must obtain prior authorisation from the Regulator. Processing subject to prior authorisation must be notified to the Regulator. You may not carry out processing that has been notified until the Regulator completes its investigation or notifies you otherwise.\n\nNext actions:\n• Download the 'Revised Application for Prior Authorisation' form from the Information Regulator's website\n• Contact the Information Regulator (South Africa) for guidance on your application via email: authorisation.SPI@justice.gov.za\n• Seek professional legal advice regarding your specific processing activity" },
      no: { nextQuestion: null, message: "Prior Authorisation Not Required on These Grounds\n\nPrior Authorisation does not appear to be required based on these specific high-risk grounds.\n\nYour planned processing activities do not seem to trigger the explicit conditions for mandatory Prior Authorisation as outlined in POPIA for unique identifiers, criminal behaviour, credit reporting, or specific international transfers.\n\nImportant Consideration: The Regulator may, by law or regulation, specify other types of processing that carry a particular risk for the legitimate interests of data subjects and may also require Prior Authorisation. It is always best practice to remain informed of any such updates from the Information Regulator." }
    }
  }
];

export default function SouthAfricaPriorAuthorisation() {
  const navigate = useNavigate();

  const handleComplete = () => {
    console.log("Prior Authorisation assessment completed");
  };

  const handleReset = () => {
    console.log("Prior Authorisation assessment reset");
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Prior Authorisation Assessment
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              This module helps you determine if your organisation's (or your individual) personal information processing activities require 'Prior Authorisation' from the Information Regulator in South Africa under the Protection of Personal Information Act (POPIA). Prior Authorisation is a specific approval needed for certain high-risk processing activities before they can begin.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <h3 className="font-semibold text-blue-900 mb-2">Key Definitions:</h3>
              <ul className="text-sm text-blue-800 space-y-1">
                <li><strong>Personal information:</strong> Any information about an identifiable, living natural person, and where applicable, an identifiable existing juristic person.</li>
                <li><strong>Processing:</strong> Any operation or activity, whether automated or not, concerning personal information.</li>
              </ul>
            </div>
          </div>

          <AssessmentInterface
            title="Prior Authorisation Assessment"
            questions={questions}
            onComplete={handleComplete}
            onReset={handleReset}
          />

          <div className="mt-8 text-center">
            <Button 
              variant="outline" 
              onClick={() => navigate('/countries/south-africa')}
              className="mr-4"
            >
              Take Other Assessments
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}