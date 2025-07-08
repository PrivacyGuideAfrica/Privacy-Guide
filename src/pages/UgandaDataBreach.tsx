
import { Layout } from "@/components/shared/Layout";
import { AssessmentInterface } from "@/components/shared/AssessmentInterface";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { AlertTriangle, FileText, Phone, Download, ExternalLink } from "lucide-react";

const UgandaDataBreach = () => {
  const [isCompleted, setIsCompleted] = useState(false);

  const questions = [
    {
      id: 1,
      text: "Has personal data that you are responsible for been accessed, lost, destroyed, or changed by someone who was not allowed to?",
      tooltip: "This could be accidental (such as losing a laptop) or intentional (like a cyberattack). 'Personal data' is any information that can identify a person.",
      options: {
        yes: { nextQuestion: 2, message: null },
        no: { 
          nextQuestion: null,
          message: "This does not appear to be a reportable data breach under the Act."
        }
      }
    },
    {
      id: 2,
      text: "Have you taken steps to investigate what happened and reduce any potential harm?",
      tooltip: "This includes attempting to contain the breach, recovering data, and assessing the impact on individuals.",
      options: {
        yes: { 
          nextQuestion: null,
          message: "You must report this data breach."
        },
        no: { 
          nextQuestion: null,
          message: "You must take immediate steps to contain the breach and understand its impact before you report."
        }
      }
    }
  ];

  return (
    <Layout>
      <div className="container py-8 space-y-6">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">Data Breach Notification</h1>
          <p className="text-lg text-muted-foreground">
            This module helps you determine whether an incident constitutes a data breach and outlines the necessary steps to take under Uganda's Data Protection and Privacy Act, 2019.
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 space-y-2">
            <p className="text-sm text-blue-800">
              A data breach occurs when personal data is accidentally lost, stolen, or shared with someone who is not authorised to have it. This can occur in various ways, such as a lost laptop, a cyberattack, or accidentally sending an email to the wrong person.
            </p>
            <p className="text-sm text-blue-800">
              Sensitive data refers to information that could cause serious harm to an individual if it were to be revealed, such as their health records, financial details, or private beliefs.
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
                <h3 className="font-semibold text-lg mb-4">What to Include in the Report (Form 7)</h3>
                <p className="text-sm text-muted-foreground mb-4">Your notification to the Personal Data Protection Office must be made using Form 7 and include the following details:</p>
                
                <ul className="space-y-2 text-sm list-disc list-inside">
                  <li>The nature of the personal data breach.</li>
                  <li>The personal data which is the subject of the data breach.</li>
                  <li>The categories and approximate number of data subjects affected by the personal data breach.</li>
                  <li>The likely consequences of the personal data breach.</li>
                  <li>The appropriate remedial measures taken or proposed to address the personal data breach.</li>
                  <li>The name and contact details of the Data Protection Officer or other point of contact.</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-3">Notifying Affected Individuals</h3>
                <p className="text-sm text-muted-foreground">
                  The Personal Data Protection Office will review your report and determine whether you also need to notify the affected individuals directly. 
                  If direct notification is required, it must provide sufficient information for individuals to take protective measures and can be done via 
                  registered mail, electronic mail, prominent website placement, or mass media publication.
                </p>
              </CardContent>
            </Card>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
              <h3 className="font-medium text-lg mb-2">Who to Notify</h3>
              <ul className="text-sm text-amber-800 list-disc list-inside space-y-1">
                <li>If you are a Data Processor, you should notify your Data Controller immediately.</li>
                <li>Regardless of your role (Data Collector, Data Processor, or Data Controller), you must immediately notify the Personal Data Protection Office.</li>
              </ul>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="font-medium text-lg mb-2">Timeline</h3>
              <p className="text-sm text-blue-800">You must notify the Personal Data Protection Office immediately after the breach occurs.</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button className="flex items-center gap-2" variant="default">
                <Download className="h-4 w-4" />
                Download Form 7 - Notification of Data Breach
              </Button>
              <Button className="flex items-center gap-2" variant="outline">
                <Phone className="h-4 w-4" />
                Contact the Personal Data Protection Office (Uganda)
              </Button>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default UgandaDataBreach;
