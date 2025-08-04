import { Layout } from "@/components/shared/Layout";
import { AssessmentInterface } from "@/components/shared/AssessmentInterface";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { BookOpen, Shield, UserCog, Users } from "lucide-react";

const UgandaDPO = () => {
  const [isCompleted, setIsCompleted] = useState(false);

  const questions = [
    {
      id: 1,
      text: "Do your main activities involve regularly and systematically watching or tracking a large number of individuals?",
      tooltip: "\"Regular and systematic monitoring\" involves ongoing observation, tracking, or analysis of people. \"Large number\" considers factors such as the total number of individuals concerned, the volume and variety of data being processed, the duration or permanence of the data processing activity, and the geographical extent of the processing.",
      options: {
        yes: { 
          nextQuestion: null,
          message: "You need to appoint a Data Protection Officer (DPO). Your organisation's activities meet the criteria for mandatory DPO appointment under Uganda's Data Protection and Privacy Regulations."
        },
        no: { nextQuestion: 2, message: null }
      }
    },
    {
      id: 2,
      text: "Are your main activities focused on processing special personal data?",
      tooltip: "\"Special personal data\" includes information related to religious or philosophical beliefs, political opinions, sexual life, financial information, health status, or medical records of an individual.",
      options: {
        yes: { 
          nextQuestion: null,
          message: "You need to appoint a Data Protection Officer (DPO). Your organisation's activities meet the criteria for mandatory DPO appointment under Uganda's Data Protection and Privacy Regulations."
        },
        no: { 
          nextQuestion: null,
          message: "You are not legally required to appoint a DPO. Based on your answers, your organisation does not currently meet the specific conditions for mandatory DPO appointment. However, having a DPO, or at least a dedicated person responsible for data protection, can still be very beneficial for ensuring compliance and demonstrating good practice."
        }
      }
    }
  ];

  return (
    <Layout>
      <div className="container py-8 space-y-6">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">Uganda Data Protection Officer (DPO) Assessment</h1>
          <p className="text-lg text-muted-foreground">
            This assessment helps you determine if your organisation needs to appoint a Data Protection Officer (DPO) 
            under Uganda's Data Protection and Privacy Act, 2019. A DPO is a designated person with expert knowledge 
            who helps your organisation comply with data protection laws and manage personal data responsibly.
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-sm text-blue-800">
              <strong>Important:</strong> DPO appointment is mandatory for organisations whose main activities involve 
              regular and systematic monitoring of data subjects or processing of special personal data on a large scale.
            </p>
          </div>
        </div>

        <AssessmentInterface
          title="DPO Necessity Assessment"
          questions={questions}
          onComplete={() => setIsCompleted(true)}
          onReset={() => setIsCompleted(false)}
        />

        {isCompleted && (
          <div className="space-y-6 mt-8 animate-fade-in">
            <h2 className="text-2xl font-semibold">DPO Guidance</h2>
            <Separator className="my-2" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="overflow-hidden hover:shadow-md transition-shadow duration-200">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <BookOpen className="h-5 w-5 text-blue-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium text-lg">What Does a DPO Do?</h3>
                      <p className="text-muted-foreground mt-1">
                        A DPO advises on compliance, monitors data processing activities, acts as a contact point with regulators, 
                        conducts assessments, maintains records, and ensures data subject rights are protected.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-md transition-shadow duration-200">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium text-lg">Who Can Be a DPO?</h3>
                      <p className="text-muted-foreground mt-1">
                        A DPO should have expert knowledge of data protection law and practices, with the ability to carry out 
                        prescribed tasks. Organizations must provide relevant training to enable effective performance.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-md transition-shadow duration-200">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <UserCog className="h-5 w-5 text-purple-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium text-lg">DPO Responsibilities</h3>
                      <p className="text-muted-foreground mt-1">
                        Monitor compliance, conduct audits, maintain processing records, handle data subject requests, 
                        and serve as the primary contact with the Personal Data Protection Office.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-md transition-shadow duration-200">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <Users className="h-5 w-5 text-amber-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium text-lg">Expert Knowledge Required</h3>
                      <p className="text-muted-foreground mt-1">
                        The DPO must understand data protection law, processing practices, and have the capability 
                        to effectively carry out all tasks prescribed under the Act.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="font-medium text-lg mb-2">DPO Key Duties</h3>
              <ul className="space-y-2 text-sm text-green-800">
                <li>• Advise organisation and employees on Data Protection and Privacy Act obligations</li>
                <li>• Monitor compliance with the Act and internal data protection policies</li>
                <li>• Act as main contact point with the Personal Data Protection Office</li>
                <li>• Conduct regular assessments and audits to ensure compliance</li>
                <li>• Maintain comprehensive records of all data processing activities</li>
                <li>• Respond to data subjects and inform them about data usage and protection measures</li>
                <li>• Ensure data subject requests for access or erasure are properly handled</li>
              </ul>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="font-medium text-lg mb-2 text-blue-800">Best Practice Recommendation</h3>
              <p className="text-sm text-blue-700">
                Even if not legally required, appointing a DPO or designating a data protection coordinator can help ensure 
                ongoing compliance, demonstrate your commitment to data protection, and provide a clear point of contact 
                for data protection matters within your organisation.
              </p>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default UgandaDPO;