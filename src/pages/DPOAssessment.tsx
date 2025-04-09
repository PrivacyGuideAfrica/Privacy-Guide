
import { DPOAssessment } from "@/components/dpo/DPOAssessment";
import { Layout } from "@/components/shared/Layout";

export default function DPOAssessmentPage() {
  return (
    <Layout>
      <div className="container py-10">
        <DPOAssessment />
      </div>
    </Layout>
  );
}
