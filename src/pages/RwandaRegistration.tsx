
import { Navbar } from "@/components/Navbar";
import { AssessmentInterface, Question } from "@/components/shared/AssessmentInterface";

const questions: Question[] = [
  {
    id: 1,
    text: "Do you currently, or do you intend to, handle personal data as a data controller or data processor under the Rwandan Data Protection Law?",
    tooltip: "A data controller decides the purpose and means of processing personal data. A data processor processes personal data on behalf of a data controller.",
    options: {
      yes: {
        nextQuestion: 2,
        message: null
      },
      no: {
        nextQuestion: null,
        message: "You do not need to register right now. However, if your role changes or you begin processing personal data, revisit this module."
      }
    }
  },
  {
    id: 2,
    text: "Do you have your organisation's identity & contact details ready? (e.g. legal name, address, registration number, single point of contact)",
    tooltip: "This information is required to identify your organization and establish a communication channel with the DPPO.",
    options: {
      yes: {
        nextQuestion: 3,
        message: null
      },
      no: {
        nextQuestion: null,
        message: "Please gather these details before proceeding with registration."
      }
    }
  },
  {
    id: 3,
    text: "Have you appointed a representative (if applicable)? If you are required by law to have one, can you provide their identity and address?",
    tooltip: "If your organization is based outside Rwanda but subject to Rwandan data protection law, you may need a local representative.",
    options: {
      yes: {
        nextQuestion: 4,
        message: null
      },
      no: {
        nextQuestion: null,
        message: "If a representative is required, you must have their details ready to register."
      }
    }
  },
  {
    id: 4,
    text: "Can you describe the types of personal data you collect and data subjects involved? (e.g. customers' contact info, employees' records, etc.)",
    tooltip: "You need to clearly identify what kinds of data you handle and whose data it is.",
    options: {
      yes: {
        nextQuestion: 5,
        message: null
      },
      no: {
        nextQuestion: null,
        message: "A clear description of data types and individuals is needed. Collect this information before registering."
      }
    }
  },
  {
    id: 5,
    text: "Do you know the relevant sectors in which you operate? (e.g. healthcare, finance, e-commerce)",
    tooltip: "Different sectors have different data protection requirements and risks.",
    options: {
      yes: {
        nextQuestion: 6,
        message: null
      },
      no: {
        nextQuestion: null,
        message: "Identifying your sectors or industries is mandatory for registration."
      }
    }
  },
  {
    id: 6,
    text: "Can you provide the purposes for processing the personal data you collect? (e.g. marketing, product delivery, research)",
    tooltip: "You must be transparent about why you're collecting and using personal data.",
    options: {
      yes: {
        nextQuestion: 7,
        message: null
      },
      no: {
        nextQuestion: null,
        message: "You must specify why you process personal data."
      }
    }
  },
  {
    id: 7,
    text: "Do you know who receives the data? (e.g. service providers, partners, third parties)",
    tooltip: "You need to disclose who will have access to the personal data you collect.",
    options: {
      yes: {
        nextQuestion: 8,
        message: null
      },
      no: {
        nextQuestion: null,
        message: "You must identify the categories of recipients (or specific recipients) for registration."
      }
    }
  },
  {
    id: 8,
    text: "Do you transfer or intend to transfer data outside Rwanda and do you know the specific destinations?",
    tooltip: "Cross-border data transfers are subject to additional requirements.",
    options: {
      yes: {
        nextQuestion: 9,
        message: null
      },
      no: {
        nextQuestion: null,
        message: "You must clarify the destination(s) before registering."
      }
    }
  },
  {
    id: 9,
    text: "Have you assessed the risks and safeguards? Do you understand the main risks to personal data (e.g. security breaches) and the measures you have in place to mitigate them?",
    tooltip: "You need to demonstrate that you've assessed potential risks and implemented appropriate security measures.",
    options: {
      yes: {
        nextQuestion: null,
        message: "Next steps: How to register\n\n1. Visit the official portal: www.dpo.gov.rw to download the application form.\n2. Complete the form thoroughly with the information from your answers above.\n3. Prepare all supporting documents:\n   - Letter addressed to the Chief Executive Officer of NCSA\n   - Certificate of incorporation\n   - Regulator's license (if applicable)\n   - Legal instrument (if you are a public entity)\n   - Representative's contract (if you appointed one)\n   - Other relevant contracts or a privacy notice\n4. Submit your PDF documents in a zipped folder to registration@dpo.gov.rw and dpp@ncsa.gov.rw, using your organisation's name in the subject line.\n5. Await confirmation—no fee is charged.\n6. A certificate is typically issued within 30 working days if your application is complete.\n7. If rejected, you will be notified within 7 working days and can re-apply after meeting any missing requirements.\n\nRemember: Inform the NCSA within 15 working days if there are changes to your registration details. Failure to do so may result in fines."
      },
      no: {
        nextQuestion: null,
        message: "Risk identification and mitigation strategies are mandatory. Gather these details before registering."
      }
    }
  }
];

const RwandaRegistration = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Registering as a data controller or processor in Rwanda
        </h1>
        <p className="text-gray-600 mb-8 text-center max-w-2xl mx-auto">
          This module helps you determine if you must register with the Data Protection and Privacy Office (DPPO) 
          and guides you through the information needed.
        </p>
        <AssessmentInterface
          title="Registration with Rwanda's DPPO"
          questions={questions}
          onComplete={() => {}}
          onReset={() => {}}
        />
      </div>
    </div>
  );
};

export default RwandaRegistration;
