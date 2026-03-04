import { Layout } from "@/components/shared/Layout";
import { AssessmentInterface, Question } from "@/components/shared/AssessmentInterface";

const questions: Question[] = [
  {
    id: 1,
    text: "Do you have a clear way for individuals to ask if you hold their data, what information you have about them, and who you have shared it with?",
    tooltip: "Individuals have the right to confirm if you process their data, to receive a description of it (including its purpose and recipients), and to know the source of the data, after providing proof of identity and any prescribed fee. You must respond to these requests within forty days.",
    options: {
      yes: { nextQuestion: 2 },
      no: {
        nextQuestion: null,
        message: "You need to improve your handling of individuals' data rights. Your current practices may not fully support all the rights that individuals have regarding their data under Ghana's Data Protection Act, 2012. Establishing clear and efficient processes for all data subject requests is crucial."
      }
    }
  },
  {
    id: 2,
    text: "Do you have a process for individuals to ask you to correct, block, erase, or destroy their data if it is inaccurate, irrelevant, excessive, outdated, incomplete, misleading, or unlawfully obtained?",
    tooltip: "Individuals can request these actions. If you make changes, you must also inform anyone you previously shared that data with. You must comply or provide credible evidence.",
    options: {
      yes: { nextQuestion: 3 },
      no: {
        nextQuestion: null,
        message: "You need to improve your handling of individuals' data rights. Your current practices may not fully support all the rights that individuals have regarding their data under Ghana's Data Protection Act, 2012. Establishing clear and efficient processes for all data subject requests is crucial."
      }
    }
  },
  {
    id: 3,
    text: "Do you have a way for individuals to ask you to stop processing their data if it is causing or is likely to cause them significant damage or distress?",
    tooltip: "Individuals can send you a written notice to stop processing data that causes or is likely to cause them unwarranted substantial damage or distress. You must inform them in writing within twenty-one days whether you have complied or your reasons for not complying.",
    options: {
      yes: { nextQuestion: 4 },
      no: {
        nextQuestion: null,
        message: "You need to improve your handling of individuals' data rights. Your current practices may not fully support all the rights that individuals have regarding their data under Ghana's Data Protection Act, 2012. Establishing clear and efficient processes for all data subject requests is crucial."
      }
    }
  },
  {
    id: 4,
    text: "Do you have a clear process for individuals to tell you to stop using their personal data for direct marketing purposes?",
    tooltip: "Individuals have the right to request in writing that you stop processing their data for direct marketing. You must also obtain prior written consent before using anyone's data for direct marketing.",
    options: {
      yes: { nextQuestion: 5 },
      no: {
        nextQuestion: null,
        message: "You need to improve your handling of individuals' data rights. Your current practices may not fully support all the rights that individuals have regarding their data under Ghana's Data Protection Act, 2012. Establishing clear and efficient processes for all data subject requests is crucial."
      }
    }
  },
  {
    id: 5,
    text: "If you make important decisions about individuals only using automated systems (without human involvement), do you allow them to ask for a human review of that decision?",
    tooltip: "If a decision significantly affecting an individual is based solely on automated processing, they can request reconsideration of that decision in writing. You must inform them of the steps taken within twenty-one days.",
    options: {
      yes: {
        nextQuestion: null,
        message: "Your organisation appears to have good practices for upholding data rights. Based on your answers, your organisation or you, as a data controller, seem to have solid procedures in place to respect and facilitate individuals' rights regarding their data as required by the Act."
      },
      no: {
        nextQuestion: null,
        message: "You need to improve your handling of individuals' data rights. Your current practices may not fully support all the rights that individuals have regarding their data under Ghana's Data Protection Act, 2012. Establishing clear and efficient processes for all data subject requests is crucial."
      }
    }
  }
];

const GhanaDataSubjectRights = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Understanding Data Subject Rights - Ghana
        </h1>
        <p className="text-muted-foreground mb-8 text-center max-w-2xl mx-auto">
          This module helps you, as a data controller, assess how well your organisation upholds the various rights 
          individuals have regarding their data under Ghana's Data Protection Act, 2012 (Act 843).
        </p>
        <div className="mb-6 p-4 bg-muted rounded-lg">
          <p className="text-sm text-muted-foreground">
            <strong>Personal data</strong> refers to any information that can be used to identify an individual. 
            <strong> Processing</strong> means any operation or activity performed on data or personal data, 
            including collecting, using, storing, disclosing, or destroying it.
          </p>
        </div>
        <AssessmentInterface
          title="Data Subject Rights Assessment"
          questions={questions}
          onComplete={() => {}}
          onReset={() => {}}
        />
      </div>
    </Layout>
  );
};

export default GhanaDataSubjectRights;
