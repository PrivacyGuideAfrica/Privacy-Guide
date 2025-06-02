
import { Layout } from "@/components/shared/Layout";
import { AssessmentInterface } from "@/components/shared/AssessmentInterface";

const UgandaDataSubjectRights = () => {
  const questions = [
    {
      id: 1,
      text: "How do you currently handle data subject requests?",
      options: {
        yes: {
          nextQuestion: null,
          message: "Great! Having formal procedures for data subject requests is essential under Uganda's data protection law. Ensure your procedures cover all rights including access, rectification, erasure, restriction of processing, data portability, and objection. You must respond to requests within one month, with possible extensions to three months for complex requests."
        },
        no: {
          nextQuestion: null,
          message: "You need to establish formal procedures for handling data subject requests immediately. Under Uganda's law, individuals have rights to access, rectify, erase, restrict processing, data portability, and object to processing of their personal data. You must respond within one month and provide clear information about exercising these rights."
        }
      }
    }
  ];

  return (
    <Layout>
      <AssessmentInterface
        title="Uganda Data Subject Rights Assessment"
        description="Learn how to handle data subject requests and rights under Uganda law"
        questions={questions}
        backLink="/country/uganda"
        backText="Back to Uganda Modules"
      />
    </Layout>
  );
};

export default UgandaDataSubjectRights;
