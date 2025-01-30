import { AssessmentInterface, Question } from "@/components/shared/AssessmentInterface";
import { Navbar } from "@/components/Navbar";

const questions: Question[] = [
  {
    id: 1,
    text: "Are you sending personal information outside of Nigeria?",
    tooltip: "An international transfer means sending personal data from Nigeria to another country, where it will be processed by a separate entity.",
    options: {
      yes: { nextQuestion: 2 },
      no: {
        nextQuestion: null,
        message: "This module does not apply to you as you are not transferring data internationally."
      }
    }
  },
  {
    id: 2,
    text: "Are you transferring personal data to a separate organisation in another country?",
    tooltip: "A transfer occurs when personal data moves from one legal entity to another across borders.",
    options: {
      yes: { nextQuestion: 3 },
      no: {
        nextQuestion: null,
        message: "This might not be an international transfer. Examples of non-transfers include:\n\n• Your employee travels to another country and accesses information from your company's systems\n• Someone in Nigeria sends their own information to a company in China to buy something online"
      }
    }
  },
  {
    id: 3,
    text: "Is the country you are sending the information to on Nigeria's list of \"adequate\" countries?",
    tooltip: "Note that this mechanism is currently not active because of a court judgement that invalidated it.",
    options: {
      yes: {
        nextQuestion: null,
        message: "You can send the information. These countries have data protection laws similar to those in Nigeria."
      },
      no: { nextQuestion: 4 }
    }
  },
  {
    id: 4,
    text: "Are you sending the information to another company within your own group?",
    options: {
      yes: {
        nextQuestion: 6,
        message: "You might be able to use \"Binding Corporate Rules.\" These are special rules for companies to share information safely within their group."
      },
      no: { nextQuestion: 5 }
    }
  },
  {
    id: 5,
    text: "Do you have a contract in place with the recipient organisation?",
    options: {
      yes: {
        nextQuestion: 6,
        message: "You might be able to use \"Standard Contractual Clauses.\" These are special contracts with rules to protect the information."
      },
      no: { nextQuestion: 6 }
    }
  },
  {
    id: 6,
    text: "Does your transfer fall under one of these exceptions?\n\n1. Consent\n2. Fulfillment of contractual obligation\n3. Vital interest\n4. Public task\n5. Legal claims or court proceedings",
    tooltip: "These are called \"derogations\" and should only be used in exceptional circumstances.",
    options: {
      yes: {
        nextQuestion: null,
        message: "You may be able to transfer the data, provided you follow the applicable safeguards.\n\n• Ensure you document your legal basis and have security measures in place\n• If relying on consent, ensure it is freely given and recorded\n\nHow can you transfer data outside Nigeria?\n\nThere are a few ways you can send personal information to other countries:\n\n1. Adequacy Decisions: The authorities might decide that some countries have data protection laws that are good enough to protect information sent from Nigeria. However, there's no list of these countries right now due to a court judgment that invalidated the previous list of countries.\n\n2. Binding Corporate Rules: Sometimes, companies have special rules they follow within their group to send information safely. The procedure to apply for this is not publicly available yet.\n\n3. Contractual Clauses: You can have a special contract with the company receiving the information. This contract will have rules to protect the information. However, the authorities have not published its module of any standard contracts to use yet.\n\n4. Other Ways:\n• Informed Consent: Ask the person if it is okay to send their information abroad\n• Necessary for a Contract: Send information if needed to fulfill a contract\n• Sole Interest of the Data Subject: Send information if it's in the person's best interests\n• Public Interest: Send information for important public tasks\n• Legal Claims: Send information if needed for court cases\n• Vital Interests: Send information to protect someone's life or safety\n\nImportant things to remember:\n• Figure out where the personal data is going\n• Check your tools and services\n• Keep track of where you send information\n• Document your international data transfer mechanism"
      },
      no: {
        nextQuestion: null,
        message: "You may not be able to transfer this data lawfully under the NDPA.\n\n• Reassess the necessity of the transfer\n• Consult a data protection expert for alternative solutions\n\nHow can you transfer data outside Nigeria?\n\nThere are a few ways you can send personal information to other countries:\n\n1. Adequacy Decisions: The authorities might decide that some countries have data protection laws that are good enough to protect information sent from Nigeria. However, there's no list of these countries right now due to a court judgment that invalidated the previous list of countries.\n\n2. Binding Corporate Rules: Sometimes, companies have special rules they follow within their group to send information safely. The procedure to apply for this is not publicly available yet.\n\n3. Contractual Clauses: You can have a special contract with the company receiving the information. This contract will have rules to protect the information. However, the authorities have not published its module of any standard contracts to use yet.\n\n4. Other Ways:\n• Informed Consent: Ask the person if it is okay to send their information abroad\n• Necessary for a Contract: Send information if needed to fulfill a contract\n• Sole Interest of the Data Subject: Send information if it's in the person's best interests\n• Public Interest: Send information for important public tasks\n• Legal Claims: Send information if needed for court cases\n• Vital Interests: Send information to protect someone's life or safety\n\nImportant things to remember:\n• Figure out where the personal data is going\n• Check your tools and services\n• Keep track of where you send information\n• Document your international data transfer mechanism"
      }
    }
  }
];

const InternationalTransfer = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <AssessmentInterface
          title="International Data Transfer Assessment"
          questions={questions}
        />
      </div>
    </div>
  );
};

export default InternationalTransfer;