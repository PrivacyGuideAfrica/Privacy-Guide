import { Link } from "react-router-dom";
import { Layout } from "@/components/shared/Layout";
import { Button } from "@/components/ui/button";

const AssessmentUnavailable = ({ title }: { title: string }) => (
  <Layout>
    <div className="mx-auto max-w-2xl px-4 py-16 text-center space-y-6">
      <p className="text-sm font-medium text-muted-foreground">Nigeria · Under review</p>
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="text-muted-foreground">
        This assessment is temporarily unavailable while we review its guidance for Nigeria.
        You can explore the other available modules in the meantime.
      </p>
      <Button asChild><Link to="/country/nigeria">Explore Nigeria’s modules</Link></Button>
    </div>
  </Layout>
);

export default AssessmentUnavailable;
