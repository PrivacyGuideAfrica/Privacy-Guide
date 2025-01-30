import { AssessmentInterface, Question } from "@/components/shared/AssessmentInterface";
import { Navbar } from "@/components/Navbar";

export type Classification = "MDP-UHL" | "MDP-EHL" | "MDP-OHL" | null;

const questions: Question[] = [
  {
    id: 1,
    text: "Have you been operating for more than 12 months?",
    tooltip: "New businesses are required to perform an audit within their first year to establish a data protection framework early.",
    options: {
      yes: {
        nextQuestion: 2
      },
      no: {
        nextQuestion: null,
        message: "You must conduct a data protection audit within 12 months of starting your business.\n\nConsider engaging a Data Protection Professional or consultant to assist with compliance.\n\nNeed Help with the Audit?\nConducting a data protection audit can seem complicated. If you need help, you can contact a data protection compliance organisation. They can offer expert advice and support to ensure you meet all the requirements."
      }
    }
  },
  {
    id: 2,
    text: "In the last 6 months, have you handled the personal information of more than 1000 people?",
    tooltip: "Consider all types of personal data processing, including customer data, employee records, and digital interactions.",
    options: {
      yes: {
        nextQuestion: 3
      },
      no: {
        nextQuestion: null,
        message: "You might not need an audit right now. But it is still important to keep your data protection practices in check!\n\nConducting voluntary internal audits can help identify risks early and demonstrate accountability under the NDPA.\n\nRegular reviews ensure data security and policy alignment with evolving regulations.\n\nNeed Help?\nIf you need guidance on data protection best practices, consider consulting with a data protection professional."
      }
    }
  },
  {
    id: 3,
    text: "In the last 12 months, have you handled the personal information of more than 2000 people?",
    tooltip: "Include all individuals whose personal data you've processed, including one-time interactions.",
    options: {
      yes: {
        nextQuestion: null,
        message: "Your organisation must conduct a data protection audit and submit a report to the NDPC by March 15th each year.\n\nKey Points:\n• Audits help ensure data protection compliance, risk mitigation, and security improvement\n• Consider engaging a Data Protection Professional or consultant to assist with compliance\n\nNeed Help with the Audit?\nConducting a data protection audit can seem complicated. If you need help, you can contact a data protection compliance organisation. They can offer expert advice and support to ensure you meet all the requirements."
      },
      no: {
        nextQuestion: null,
        message: "You do not need to file a report to the Nigeria Data Protection Commission. But it is still important to periodically review and enhance your data protection measures.\n\nRecommendations:\n• Conducting voluntary internal audits can help identify risks early\n• Regular reviews ensure data security and policy alignment\n• Consider periodic consultations with data protection professionals\n\nMaintaining strong data protection practices demonstrates accountability under the NDPA."
      }
    }
  }
];

const AnnualAudit = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <AssessmentInterface
          title="Annual Audit Requirements Assessment"
          questions={questions}
        />
      </div>
    </div>
  );
};

export default AnnualAudit;