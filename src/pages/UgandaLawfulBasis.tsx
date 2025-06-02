
import { Layout } from "@/components/shared/Layout";
import { AssessmentInterface } from "@/components/shared/AssessmentInterface";

const UgandaLawfulBasis = () => {
  const questions = [
    {
      id: 1,
      text: "What is the primary purpose of your data processing?",
      options: {
        yes: {
          nextQuestion: null,
          message: "Your lawful basis for processing has been identified. Under Uganda's data protection law, ensure you have documented this basis, inform data subjects about it in your privacy notice, and only process data for the stated purposes. Remember that consent must be freely given, specific, informed, and withdrawable. For other bases, ensure they genuinely apply to your processing activities."
        },
        no: {
          nextQuestion: null,
          message: "You need to clearly identify and document your lawful basis for processing personal data. Under Uganda's law, you must have at least one lawful basis from: consent, contract performance, legal obligation, vital interests protection, public task performance, or legitimate interests. Each processing activity may require different lawful bases."
        }
      }
    }
  ];

  return (
    <Layout>
      <AssessmentInterface
        title="Uganda Lawful Basis Assessment"
        description="Identify the appropriate lawful basis for your data processing activities under Uganda law"
        questions={questions}
        backLink="/country/uganda"
        backText="Back to Uganda Modules"
      />
    </Layout>
  );
};

export default UgandaLawfulBasis;
