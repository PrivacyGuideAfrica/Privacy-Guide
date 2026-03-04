import { Layout } from "@/components/shared/Layout";
import { AssessmentInterface, Question } from "@/components/shared/AssessmentInterface";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const GhanaDataBreach = () => {
  const [isCompleted, setIsCompleted] = useState(false);

  const questions: Question[] = [
    {
      id: 1,
      text: "Has personal data that you are responsible for been accessed or acquired by someone who was not authorised?",
      tooltip: "This means personal data has been lost, stolen, or accessed by someone who shouldn't have it.",
      options: {
        yes: { nextQuestion: 2 },
        no: {
          nextQuestion: null,
          message: "This does not appear to be a reportable data breach. Based on your answers, this incident does not meet the criteria for a reportable data breach under the Data Protection Act, 2012."
        }
      }
    },
    {
      id: 2,
      text: "Have you taken steps to restore the security and integrity of your information system following the breach?",
      tooltip: "This means trying to fix the problem and protect your systems to prevent further loss, damage, or unauthorised access.",
      options: {
        yes: {
          nextQuestion: null,
          message: "You must report this data breach. When personal data is accessed or acquired by an unauthorised person, you must notify both the Data Protection Commission and the affected individuals as soon as reasonably practicable after you discover it."
        },
        no: {
          nextQuestion: null,
          message: "You must take steps to restore the integrity of your system immediately. Before or alongside any notification, you must immediately take steps to ensure the restoration of the integrity of your information system to mitigate further risks."
        }
      }
    }
  ];

  return (
    <Layout>
      <div className="container py-8 space-y-6">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">Data Breach Notification - Ghana</h1>
          <p className="text-lg text-muted-foreground">
            This module helps you determine whether an incident constitutes a data breach and outlines the necessary 
            steps to take under Ghana's Data Protection Act, 2012 (Act 843).
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-sm text-blue-800">
              A data breach occurs when personal data is accidentally lost, stolen, or shared with unauthorised individuals. 
              This happens when personal data is accessed or acquired by an unauthorised person. This can occur in many ways, 
              such as a lost laptop, a cyberattack, or even sending an email to the wrong person.
            </p>
          </div>
        </div>

        <AssessmentInterface
          title="Data Breach Assessment: Do you need to report?"
          questions={questions}
          onComplete={() => setIsCompleted(true)}
          onReset={() => setIsCompleted(false)}
        />

        {isCompleted && (
          <div className="space-y-6 mt-8 animate-fade-in">
            <h2 className="text-2xl font-semibold">Breach Notification Guidance</h2>
            <Separator className="my-2" />

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4">Who to Notify & When</h3>
                <ul className="space-y-2 text-sm list-disc list-inside">
                  <li>You must notify the <strong>Data Protection Commission (DPC)</strong> immediately after discovering the unauthorised access or acquisition.</li>
                  <li>You must also notify the <strong>affected individuals (data subjects)</strong> as soon as reasonably practicable.</li>
                  <li><strong>Important:</strong> You should only delay notifying individuals if the security agencies or the Commission inform you that it would hinder a criminal investigation.</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-3">What to Include in the Notification to Individuals</h3>
                <ul className="space-y-2 text-sm list-disc list-inside">
                  <li>Enough information to allow affected individuals to take protective measures against the consequences.</li>
                  <li>If known, the identity of the unauthorised person who accessed or acquired the data.</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-3">How to Notify Individuals</h3>
                <ul className="space-y-2 text-sm list-disc list-inside">
                  <li>Registered mail</li>
                  <li>Electronic mail</li>
                  <li>Posting a prominent notice on your website</li>
                  <li>Publishing in the mass media</li>
                  <li>Any other method the Commission may direct</li>
                </ul>
              </CardContent>
            </Card>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
              <h3 className="font-medium text-lg mb-2">Commission's Power</h3>
              <p className="text-sm text-amber-800">
                The Commission may direct you to publicise the breach if it believes this would protect the affected individuals.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button className="flex items-center gap-2" variant="default" asChild>
                <a href="https://dataprotection.org.gh/report-a-breach/" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4" />
                  Report a Breach to the DPC
                </a>
              </Button>
              <Button className="flex items-center gap-2" variant="outline" asChild>
                <a href="https://dataprotection.org.gh" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4" />
                  Contact the Data Protection Commission (Ghana)
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default GhanaDataBreach;
