
import { Layout } from "@/components/shared/Layout";
import { AssessmentInterface } from "@/components/shared/AssessmentInterface";
import { RwandaDataBreachDescription } from "@/components/data-breach/RwandaDataBreachDescription";
import { rwandaDataBreachQuestions } from "@/data/rwandaDataBreachQuestions";
import { useState } from "react";
import { AlertCircle, Check, Clock, Shield, User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const RwandaDataBreachAssessment = () => {
  const [isCompleted, setIsCompleted] = useState(false);

  return (
    <Layout>
      <div className="container py-8 space-y-6">
        <h1 className="text-3xl font-bold">Data Breach Notification in Rwanda</h1>
        <RwandaDataBreachDescription />
        <AssessmentInterface
          title="Data Breach Notification Assessment"
          questions={rwandaDataBreachQuestions}
          onComplete={() => setIsCompleted(true)}
        />

        {isCompleted && (
          <div className="space-y-4 mt-8 animate-fade-in">
            <h2 className="text-2xl font-semibold">Additional Guidance</h2>
            <Separator className="my-2" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="overflow-hidden hover:shadow-md transition-shadow duration-200">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium text-lg">Personal Data Breach</h3>
                      <p className="text-muted-foreground mt-1">
                        Any event resulting in unauthorised destruction, loss, alteration, or disclosure of personal data.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-md transition-shadow duration-200">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-amber-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium text-lg">Notification Timelines</h3>
                      <ul className="mt-1 text-muted-foreground space-y-2">
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-500 flex-shrink-0 mt-1" />
                          <span>Data Controllers must alert the NCSA within 48 hours of learning of a breach.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-500 flex-shrink-0 mt-1" />
                          <span>Data Processors must alert the Controller within 48 hours of learning of a breach.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-md transition-shadow duration-200">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <User className="h-5 w-5 text-blue-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium text-lg">Controller Responsibilities</h3>
                      <p className="text-muted-foreground mt-1">
                        Controllers submit a detailed report to the NCSA within 72 hours, covering the nature of the breach, affected data, contact details, mitigation steps, and plans for informing data subjects if needed.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-md transition-shadow duration-200">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-purple-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium text-lg">High Risk Situations</h3>
                      <p className="text-muted-foreground mt-1">
                        If the breach is likely to significantly affect individuals (e.g. risk of identity theft, discrimination), you must notify data subjects unless you have effectively neutralised that risk or already informed them publicly. If the NCSA still finds a high risk, they can direct you to notify the affected persons.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default RwandaDataBreachAssessment;
