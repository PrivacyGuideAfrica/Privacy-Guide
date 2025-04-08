
import { Navbar } from "@/components/Navbar";
import { AssessmentInterface, Question } from "@/components/shared/AssessmentInterface";

const questions: Question[] = [
  {
    id: 1,
    text: "Are you (or do you intend to be) a Data Controller or a Data Processor handling personal data under the Rwandan Data Protection Law?",
    tooltip: "A Data Controller decides the purpose and means of processing personal data. A Data Processor processes data on behalf of a Data Controller. If either applies to you, registration is required.",
    options: {
      yes: { 
        nextQuestion: 2,
        message: "You must register with Rwanda's Data Protection and Privacy Office. Proceed to the next question to see what information you need."
      },
      no: { 
        nextQuestion: null,
        message: "You do not need to register. However, if your role changes or you begin processing personal data, revisit this module."
      }
    }
  },
  {
    id: 2,
    text: "Can you provide your organisation's identity (e.g. legal name, address, registration number) and the contact details of a single point of contact (e.g. data protection liaison)?",
    tooltip: "This information is required to identify your organization and establish a communication channel with the DPA.",
    options: {
      yes: { nextQuestion: 3 },
      no: { 
        nextQuestion: null,
        message: "Please gather this information before registering."
      }
    }
  },
  {
    id: 3,
    text: "If you have appointed a representative, can you provide the identity and address of that representative?",
    tooltip: "If your organization is based outside Rwanda but subject to Rwandan data protection law, you may need a local representative.",
    options: {
      yes: { nextQuestion: 4 },
      no: { 
        nextQuestion: null,
        message: "If a representative is required by law, you must have their details to register."
      }
    }
  },
  {
    id: 4,
    text: "Can you describe the types of personal data you process and the categories of individuals involved (e.g. customers, employees)?",
    tooltip: "You need to clearly identify what kinds of data you handle and whose data it is.",
    options: {
      yes: { nextQuestion: 5 },
      no: { 
        nextQuestion: null,
        message: "A clear description is needed to complete your registration."
      }
    }
  },
  {
    id: 5,
    text: "Can you indicate whether you hold or are likely to hold personal data based on your sectors (e.g. healthcare, finance, e-commerce)?",
    tooltip: "Different sectors have different data protection requirements and risks.",
    options: {
      yes: { nextQuestion: 6 },
      no: { 
        nextQuestion: null,
        message: "You must identify the relevant sectors or industries in which you operate."
      }
    }
  },
  {
    id: 6,
    text: "Can you provide the specific purposes for which you process personal data (e.g. marketing, service delivery, research)?",
    tooltip: "You must be transparent about why you're collecting and using personal data.",
    options: {
      yes: { nextQuestion: 7 },
      no: { 
        nextQuestion: null,
        message: "This information is essential to register."
      }
    }
  },
  {
    id: 7,
    text: "Can you identify the recipients or types of recipients to whom you disclose personal data (e.g. service providers, partners)?",
    tooltip: "You need to disclose who will have access to the personal data you collect.",
    options: {
      yes: { nextQuestion: 8 },
      no: { 
        nextQuestion: null,
        message: "You must know who will receive the data to complete registration."
      }
    }
  },
  {
    id: 8,
    text: "Do you transfer (or intend to transfer) personal data outside Rwanda, directly or indirectly?",
    tooltip: "Cross-border data transfers are subject to additional requirements.",
    options: {
      yes: { 
        nextQuestion: 8.1 
      },
      no: { nextQuestion: 9 }
    }
  },
  {
    id: 8.1,
    text: "Can you specify the destination countries for these data transfers?",
    tooltip: "You need to know which countries will receive the data, as different countries have different data protection standards.",
    options: {
      yes: { nextQuestion: 9 },
      no: { 
        nextQuestion: null,
        message: "Please clarify where you plan to transfer data before registering."
      }
    }
  },
  {
    id: 9,
    text: "Can you describe the main risks of your data processing activities and the security measures or safeguards in place?",
    tooltip: "You need to demonstrate that you've assessed potential risks and implemented appropriate security measures.",
    options: {
      yes: { 
        nextQuestion: null,
        message: "You have the core information needed for registration. Proceed to the next step: \n\n1. Visit the official registration portal: www.dpo.gov.rw to download the application form.\n2. Complete the form thoroughly with the information you compiled above.\n3. Prepare the necessary documents, such as:\n   - Letter addressed to the CEO of NCSA.\n   - Certificate of Incorporation.\n   - License from Regulator (if applicable).\n   - Legal instrument (for public entities).\n   - Contract with a representative (if required).\n   - Supporting documents (contracts, privacy notice, etc.).\n4. Submit your PDF documents in a zipped folder to registration@dpo.gov.rw and dpp@ncsa.gov.rw, including your organisation's name in the subject line.\n5. Await review; there is no fee for registration.\n6. A certificate is usually issued within 30 working days if everything is complete.\n7. If rejected, you have 7 working days to receive notice and can re-apply after meeting requirements.\n\nRemember: You must inform the NCSA within 15 working days if any registration details change. Failure to do so may lead to administrative fines."
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
          Registering with Rwanda's Data Protection Authority
        </h1>
        <p className="text-gray-600 mb-8 text-center max-w-2xl mx-auto">
          This assessment will help you determine if you need to register with Rwanda's Data Protection Authority 
          and what information you'll need to provide during the registration process.
        </p>
        <AssessmentInterface
          title="Registration with Rwanda's DPA"
          questions={questions}
          onComplete={() => {}}
          onReset={() => {}}
        />
      </div>
    </div>
  );
};

export default RwandaRegistration;
