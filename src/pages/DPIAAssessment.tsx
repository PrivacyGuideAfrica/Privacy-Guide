
import { Layout } from "@/components/shared/Layout";
import { AssessmentInterface } from "@/components/shared/AssessmentInterface";
import { dpiaQuestions, dpiaActivities } from "@/data/dpiaQuestions";
import { AlertCircle } from "lucide-react";

const DPIAAssessment = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto p-6 space-y-6">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold text-foreground">
            Data Protection Impact Assessment (DPIA) in Rwanda
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            This assessment helps you determine whether you need to conduct a DPIA under Rwandan law. 
            A DPIA evaluates potential risks to individuals' rights and freedoms when you process their personal data.
          </p>
        </div>

        <AssessmentInterface
          title="DPIA Assessment"
          questions={dpiaQuestions}
          renderQuestion={(question) => {
            if (question.id === 2) {
              return (
                <div className="space-y-4">
                  <p className="text-lg">{question.text}</p>
                  <div className="bg-muted p-4 rounded-lg space-y-3">
                    <h3 className="font-medium">High-risk activities include:</h3>
                    <ul className="space-y-2">
                      {dpiaActivities.map((activity, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <AlertCircle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                          <div>
                            <span className="font-medium">{activity.label}</span>
                            {activity.tooltip && (
                              <p className="text-muted-foreground text-sm">{activity.tooltip}</p>
                            )}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            }
            return null;
          }}
        />
      </div>
    </Layout>
  );
};

export default DPIAAssessment;
