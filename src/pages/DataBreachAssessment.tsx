import { Layout } from "@/components/shared/Layout";
import { AssessmentInterface } from "@/components/shared/AssessmentInterface";
import { DataBreachDescription } from "@/components/data-breach/DataBreachDescription";
import { dataBreachQuestions } from "@/data/dataBreachQuestions";

const DataBreachAssessment = () => {
  return (
    <Layout>
      <div className="container py-8 space-y-6">
        <h1 className="text-3xl font-bold">Data Breach Assessment</h1>
        <DataBreachDescription />
        <AssessmentInterface
          title="Data Breach Risk Assessment"
          questions={dataBreachQuestions}
        />
      </div>
    </Layout>
  );
};

export default DataBreachAssessment;