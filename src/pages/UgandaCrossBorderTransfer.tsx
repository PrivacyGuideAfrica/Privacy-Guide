
import { Layout } from "@/components/shared/Layout";
import { AssessmentInterface } from "@/components/shared/AssessmentInterface";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Globe, Shield, FileText, Users, AlertTriangle, Cloud } from "lucide-react";

const UgandaCrossBorderTransfer = () => {
  const [isCompleted, setIsCompleted] = useState(false);

  const questions = [
    {
      id: 1,
      text: "Are you transferring or giving access to personal data outside Uganda?",
      tooltip: "This includes remote access by staff, cloud storage, or data sharing with third parties abroad.",
      options: {
        yes: { nextQuestion: 2, message: null },
        no: { 
          nextQuestion: null,
          message: "No cross-border transfer — no restrictions apply. Your data processing activities remain within Uganda and do not trigger cross-border transfer obligations under the Data Protection and Privacy Act."
        }
      }
    },
    {
      id: 2,
      text: "Is the destination country recognised by Uganda as providing adequate protection?",
      tooltip: "The PDPO may issue adequacy decisions or recognise treaties ensuring adequate safeguards.",
      options: {
        yes: { 
          nextQuestion: null,
          message: "Transfer permitted under adequacy. The destination country has been recognized by the Personal Data Protection Office (PDPO) as providing adequate protection for personal data."
        },
        no: { nextQuestion: 3, message: null }
      }
    },
    {
      id: 3,
      text: "Have you put in place appropriate safeguards such as a contract with data protection clauses or binding corporate rules?",
      tooltip: "Contracts should reflect Ugandan standards and include security, purpose limitation, and rights protection.",
      options: {
        yes: { 
          nextQuestion: null,
          message: "Transfer allowed with appropriate safeguards. Your contractual or corporate safeguards provide adequate protection that aligns with Ugandan data protection standards."
        },
        no: { nextQuestion: 4, message: null }
      }
    },
    {
      id: 4,
      text: "Has the data subject given their explicit and informed consent for the transfer?",
      tooltip: "Consent must be specific to the transfer and based on a clear explanation of risks.",
      options: {
        yes: { 
          nextQuestion: null,
          message: "Transfer may proceed based on explicit consent. Ensure the consent was specific to the cross-border transfer and included clear information about the risks and destination."
        },
        no: { nextQuestion: 5, message: null }
      }
    },
    {
      id: 5,
      text: "Is the transfer necessary for a legal claim, public interest, contract performance, or to protect vital interests?",
      tooltip: "These are exceptional cases allowed under Section 19 of the Act.",
      options: {
        yes: { 
          nextQuestion: null,
          message: "Transfer may proceed under an exception. The transfer falls under one of the statutory exceptions in Section 19 of the Data Protection and Privacy Act."
        },
        no: { 
          nextQuestion: null,
          message: "Transfer prohibited under Ugandan law. You cannot lawfully transfer this personal data outside Uganda without meeting one of the legal requirements for cross-border transfers."
        }
      }
    }
  ];

  return (
    <Layout>
      <div className="container py-8 space-y-6">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">Uganda Cross-Border Data Transfer Assessment</h1>
          <p className="text-lg text-muted-foreground">
            Determine whether and how you can lawfully transfer personal data outside Uganda under the Data Protection and Privacy Act, 2019 and its 2021 Regulations.
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-sm text-blue-800">
              <strong>Important:</strong> Cross-border transfers include cloud storage and data sharing with third parties abroad. All such arrangements must comply with Uganda's transfer restrictions.
            </p>
          </div>
        </div>

        <AssessmentInterface
          title="Cross-Border Transfer Decision Tree"
          questions={questions}
          onComplete={() => setIsCompleted(true)}
          onReset={() => setIsCompleted(false)}
        />

        {isCompleted && (
          <div className="space-y-6 mt-8 animate-fade-in">
            <h2 className="text-2xl font-semibold">Cross-Border Transfer Guidance</h2>
            <Separator className="my-2" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="overflow-hidden hover:shadow-md transition-shadow duration-200">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <Globe className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium text-lg">Adequacy Decision</h3>
                      <p className="text-muted-foreground mt-1">
                        The Personal Data Protection Office (PDPO) has determined that the destination country provides adequate protection equivalent to Uganda's standards.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-md transition-shadow duration-200">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-blue-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium text-lg">Appropriate Safeguards</h3>
                      <p className="text-muted-foreground mt-1">
                        Contractual clauses or binding corporate rules that ensure security, purpose limitation, and rights protection aligned with Ugandan standards.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-md transition-shadow duration-200">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <Users className="h-5 w-5 text-purple-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium text-lg">Explicit Consent</h3>
                      <p className="text-muted-foreground mt-1">
                        Data subjects have given specific, informed consent for the cross-border transfer based on a clear explanation of risks and destination.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-md transition-shadow duration-200">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <FileText className="h-5 w-5 text-amber-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium text-lg">Statutory Exceptions</h3>
                      <p className="text-muted-foreground mt-1">
                        Transfer necessary for legal claims, public interest, contract performance, or protecting vital interests under Section 19 of the Act.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-md transition-shadow duration-200">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <Cloud className="h-5 w-5 text-indigo-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium text-lg">Cloud Services</h3>
                      <p className="text-muted-foreground mt-1">
                        Cloud storage, IT support, and vendor services with overseas access require compliance with cross-border transfer obligations.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-md transition-shadow duration-200">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-red-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium text-lg">Prohibited Transfers</h3>
                      <p className="text-muted-foreground mt-1">
                        Transfers that don't meet any legal requirements are prohibited under Ugandan law and must not proceed.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
              <h3 className="font-medium text-lg mb-2">Recommended Actions</h3>
              <ul className="space-y-2 text-sm text-amber-800">
                <li>• Verify whether the destination country has been approved by the PDPO</li>
                <li>• If not, put in place legal safeguards that comply with the Act</li>
                <li>• If relying on consent, provide a clear explanation and obtain explicit agreement</li>
                <li>• Maintain proper documentation to demonstrate the legal basis for each transfer</li>
                <li>• Review all cloud-based storage, IT support, and vendor arrangements for compliance</li>
              </ul>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="font-medium text-lg mb-2 text-red-800">Important Notice</h3>
              <p className="text-sm text-red-700">
                Cross-border transfers of personal data from Uganda are restricted unless specific legal conditions are met. 
                This includes any arrangement where personal data is accessed remotely from outside Uganda, including cloud storage, 
                third-party IT support, and data sharing with international partners. Ensure compliance before proceeding with any such arrangements.
              </p>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default UgandaCrossBorderTransfer;
