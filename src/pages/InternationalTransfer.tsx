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
    text: "Who is sending the data?",
    tooltip: "A controller decides why and how personal data is processed, while a processor handles data on behalf of a controller.",
    options: {
      yes: { nextQuestion: 3 },
      no: {
        nextQuestion: null,
        message: "This module does not apply to you based on your role in data processing."
      }
    }
  },
  {
    id: 3,
    text: "Are you transferring personal data to a separate organisation in another country?",
    tooltip: "A transfer occurs when personal data moves from one legal entity to another across borders.",
    options: {
      yes: { nextQuestion: 4 },
      no: {
        nextQuestion: null,
        message: "This might not be an international transfer. Examples of non-transfers include:\n\n• Your employee travels to another country and accesses information from your company's systems\n• Someone in Nigeria sends their own information to a company abroad to buy something online"
      }
    }
  },
  {
    id: 4,
    text: "Is the country you are sending the information to on Nigeria's list of \"adequate\" countries?",
    tooltip: "Note that this mechanism is currently not active because of a court judgement that invalidated it.",
    options: {
      yes: {
        nextQuestion: null,
        message: "You can send the information. These countries have data protection laws similar to those in Nigeria."
      },
      no: { nextQuestion: 5 }
    }
  },
  {
    id: 5,
    text: "Are you sending the information to another company within your own group?",
    tooltip: "The regulator has yet to publish the procedure for applying for it, thereby making it unusable.",
    options: {
      yes: {
        nextQuestion: 7,
        message: "You might be able to use \"Binding Corporate Rules.\" These are special rules for companies to share information safely within their group."
      },
      no: { nextQuestion: 6 }
    }
  },
  {
    id: 6,
    text: "Do you have a contract in place with the recipient organisation?",
    tooltip: "The regulator has yet to publish its module(s) of the Standard Contractual Clauses; therefore, it is currently unusable.",
    options: {
      yes: {
        nextQuestion: 7,
        message: "You might be able to use \"Standard Contractual Clauses.\" These are special contracts with rules to protect the information."
      },
      no: { nextQuestion: 7 }
    }
  },
  {
    id: 7,
    text: "Does your transfer fall under one of these exceptions?\n\n• The person freely agrees to you sending the information\n• You need to send the information for a contract\n• It is in the person's best interests, and they can't give consent themselves\n• It is for important public tasks, like protecting public health\n• It is needed for a court case\n• It is essential to protect someone's life",
    tooltip: "These are called \"derogations\" and should only be used in exceptional circumstances.",
    options: {
      yes: {
        nextQuestion: null,
        message: "You may be able to transfer the data, provided you follow the applicable safeguards.\n\n• Ensure you document your legal basis and have security measures in place\n• If relying on consent, ensure it is freely given and recorded"
      },
      no: {
        nextQuestion: null,
        message: "You may not be able to transfer this data lawfully under the NDPA.\n\n• Reassess the necessity of the transfer\n• Consult a data protection expert for alternative solutions"
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