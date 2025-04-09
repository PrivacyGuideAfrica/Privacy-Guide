
import { RepresentativeAssessment } from "@/components/representative/RepresentativeAssessment";
import { Layout } from "@/components/shared/Layout";

export default function RepresentativePage() {
  return (
    <Layout>
      <div className="container py-10">
        <RepresentativeAssessment />
      </div>
    </Layout>
  );
}
