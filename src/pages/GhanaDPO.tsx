import { Layout } from "@/components/shared/Layout";
import { AssessmentInterface, Question } from "@/components/shared/AssessmentInterface";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { BookOpen, Shield, UserCog, Users } from "lucide-react";

const GhanaDPO = () => {
  const [isCompleted, setIsCompleted] = useState(false);

  const questions: Question[] = [
    {
      id: 1,
      text: "Are you processing personal data in a way that could cause significant problems or distress to individuals, or otherwise seriously affect their privacy rights?",
      tooltip: "This applies if your data processing is likely to cause substantial damage (e.g., financial loss, identity theft) or distress, or significantly harm privacy (e.g., extensive profiling, use of sensitive data for unexpected purposes). If the Minister has specifically designated your processing as \"assessable processing,\" this also applies.",
      options: {
        yes: {
          nextQuestion: null,
          message: "Appointing a Data Protection Supervisor (DPO) is strongly recommended for your organisation. Given the potential risks associated with your data processing activities, having a dedicated Data Protection Supervisor is a vital step. This person will help monitor your compliance with the Act."
        },
        no: { nextQuestion: 2 }
      }
    },
    {
      id: 2,
      text: "Do you intend to appoint a Data Protection Supervisor (DPO) to help your organisation manage its data protection compliance?",
      tooltip: "Even if not legally mandatory, many organisations choose to appoint a Data Protection Supervisor as a best practice to ensure strong data protection oversight.",
      options: {
        yes: {
          nextQuestion: null,
          message: "Appointing a Data Protection Supervisor (DPO) is strongly recommended for your organisation. Your proactive decision to enhance compliance through a dedicated Data Protection Supervisor is a vital step. This person will help monitor your compliance with the Act."
        },
        no: {
          nextQuestion: null,
          message: "You are not legally obliged to appoint a Data Protection Supervisor. Based on your answers, your organisation does not currently fall under a specific mandatory requirement to appoint a Data Protection Supervisor. However, to ensure good governance and ongoing compliance with data protection principles, establishing clear oversight for data protection remains a beneficial practice."
        }
      }
    }
  ];

  return (
    <Layout>
      <div className="container py-8 space-y-6">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">Data Protection Supervisor (DPO) Assessment - Ghana</h1>
          <p className="text-lg text-muted-foreground">
            This module helps you work out if your organisation needs to appoint a Data Protection Supervisor under 
            Ghana's Data Protection Act, 2012 (Act 843). While the Act refers to a "Data Protection Supervisor," this 
            role is similar to what is often called a "Data Protection Officer" (DPO) in other data protection laws.
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-sm text-blue-800">
              <strong>Important:</strong> A Data Protection Supervisor is responsible for helping your organisation 
              comply with data protection rules. The Data Protection Commission sets the specific criteria for 
              qualifications for this role.
            </p>
          </div>
        </div>

        <AssessmentInterface
          title="Data Protection Supervisor Necessity Assessment"
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
                      <h3 className="font-medium text-lg">What Does a Data Protection Supervisor Do?</h3>
                      <p className="text-muted-foreground mt-1">
                        They are in charge of monitoring your organisation's compliance with the Data Protection Act, 2012. 
                        They provide expertise and advice on data protection matters and may act as an internal point of 
                        contact for data protection queries.
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
                      <h3 className="font-medium text-lg">Who Can Be a Data Protection Supervisor?</h3>
                      <p className="text-muted-foreground mt-1">
                        You, as the data controller, may appoint a certified and qualified individual. This person can be 
                        an employee of your organisation. The Data Protection Commission sets the specific criteria for qualifications.
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
                      <h3 className="font-medium text-lg">Key Responsibilities</h3>
                      <p className="text-muted-foreground mt-1">
                        Monitor compliance with the Act, provide expertise and advice on data protection matters, 
                        and act as an internal point of contact for data protection queries within the organisation.
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
                      <h3 className="font-medium text-lg">Qualifications</h3>
                      <p className="text-muted-foreground mt-1">
                        The Data Protection Supervisor must be certified and qualified as per the criteria set by the 
                        Data Protection Commission. Relevant training and expertise in data protection law is essential.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="font-medium text-lg mb-2 text-blue-800">Best Practice Recommendation</h3>
              <p className="text-sm text-blue-700">
                Even if not legally required, appointing a Data Protection Supervisor or designating a data protection 
                coordinator can help ensure ongoing compliance, demonstrate your commitment to data protection, and 
                provide a clear point of contact for data protection matters within your organisation.
              </p>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default GhanaDPO;
