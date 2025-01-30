import { Layout } from "@/components/shared/Layout";
import DPIARequirement from "@/components/dpia/DPIARequirement";
import DPIAGuidance from "@/components/dpia/DPIAGuidance";
import { useState } from "react";

const DPIAAssessment = () => {
  const [dpiaRequired, setDpiaRequired] = useState<boolean | null>(null);

  return (
    <Layout>
      <div className="max-w-4xl mx-auto p-6 space-y-6">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold text-foreground">
            Data Protection Impact Assessment (DPIA)
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            This module will help you determine whether a DPIA is required based on your 
            processing activities and guide you through the steps of conducting a DPIA 
            in accordance with the NDPA.
          </p>
        </div>

        <div className="mt-8">
          {dpiaRequired === null ? (
            <DPIARequirement onComplete={setDpiaRequired} />
          ) : dpiaRequired ? (
            <DPIAGuidance />
          ) : (
            <Alert variant="info" className="border-l-4">
              <AlertDescription>
                A DPIA is not mandatory based on your current processing activities. 
                However, it is recommended that you document your activities for 
                accountability. If the scope, nature, or purpose of your data processing 
                changes in the future—such as implementing new technologies, processing 
                sensitive data, or engaging in large-scale processing—you should reassess 
                whether a DPIA is required.
              </AlertDescription>
            </Alert>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default DPIAAssessment;