
import { Layout } from "@/components/shared/Layout";
import { AssessmentInterface } from "@/components/shared/AssessmentInterface";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Eye, Edit, Trash2, Ban, Download, FileText, Users, Clock, Shield, AlertTriangle } from "lucide-react";

const UgandaDataSubjectRights = () => {
  const [isCompleted, setIsCompleted] = useState(false);

  const questions = [
    {
      id: 1,
      text: "Have you received a request from an individual exercising their rights under the law?",
      tooltip: "Includes access, rectification, erasure, objection, or portability.",
      options: {
        yes: { nextQuestion: 2, message: null },
        no: { 
          nextQuestion: null,
          message: "No action required unless a valid request is received. Keep monitoring for any future data subject rights requests that may come through various channels (email, phone, written letter, etc.)."
        }
      }
    },
    {
      id: 2,
      text: "Can you confirm the identity of the requester using reasonable means?",
      tooltip: "You must verify identity to avoid unauthorised disclosure.",
      options: {
        yes: { nextQuestion: 3, message: null },
        no: { 
          nextQuestion: null,
          message: "Request proof of identity. Do not proceed until verified. Ask for government-issued ID, utility bills, or other documentation that can reasonably confirm the requester's identity before processing any data subject rights request."
        }
      }
    },
    {
      id: 3,
      text: "Has the individual requested access to their personal data?",
      tooltip: "They have a right to know what data you hold and how it is used.",
      options: {
        yes: { nextQuestion: 4, message: null },
        no: { nextQuestion: 5, message: null }
      }
    },
    {
      id: 4,
      text: "Can you provide a copy of the data and processing details within 30 days?",
      tooltip: "Includes purpose, legal basis, retention, recipients, and categories.",
      options: {
        yes: { nextQuestion: 5, message: null },
        no: { nextQuestion: 5, message: null }
      }
    },
    {
      id: 5,
      text: "Has the individual requested rectification of inaccurate or incomplete data?",
      tooltip: "Applies to errors or missing information.",
      options: {
        yes: { nextQuestion: 6, message: null },
        no: { nextQuestion: 7, message: null }
      }
    },
    {
      id: 6,
      text: "Is the data incorrect, and can it be lawfully corrected or updated?",
      tooltip: "Exceptions may apply where the data is factual and accurate.",
      options: {
        yes: { nextQuestion: 7, message: null },
        no: { nextQuestion: 7, message: null }
      }
    },
    {
      id: 7,
      text: "Has the individual requested erasure of their personal data?",
      tooltip: "Also known as the \"right to be forgotten.\"",
      options: {
        yes: { nextQuestion: 8, message: null },
        no: { nextQuestion: 9, message: null }
      }
    },
    {
      id: 8,
      text: "Are you legally or contractually required to retain the data?",
      tooltip: "E.g. employment law, anti-money laundering, tax rules.",
      options: {
        yes: { nextQuestion: 9, message: null },
        no: { nextQuestion: 9, message: null }
      }
    },
    {
      id: 9,
      text: "Has the individual objected to your processing?",
      tooltip: "Typically for direct marketing or processing based on legitimate interests.",
      options: {
        yes: { nextQuestion: 10, message: null },
        no: { nextQuestion: 11, message: null }
      }
    },
    {
      id: 10,
      text: "Is the processing for direct marketing?",
      tooltip: "Objection to direct marketing must always be respected.",
      options: {
        yes: { nextQuestion: 11, message: null },
        no: { nextQuestion: 11, message: null }
      }
    },
    {
      id: 11,
      text: "Has the individual requested data portability?",
      tooltip: "Applies to data provided by the individual, processed by consent or contract, and by automated means.",
      options: {
        yes: { nextQuestion: 12, message: null },
        no: { nextQuestion: 13, message: null }
      }
    },
    {
      id: 12,
      text: "Can you provide the data in a structured, commonly used, machine-readable format?",
      tooltip: "Examples include CSV, JSON, XML.",
      options: {
        yes: { nextQuestion: 13, message: null },
        no: { nextQuestion: 13, message: null }
      }
    },
    {
      id: 13,
      text: "Have you recorded and acknowledged all applicable rights in this request?",
      tooltip: "You must track requests and respond within the required timeframe.",
      options: {
        yes: { 
          nextQuestion: null,
          message: "Proceed with fulfilling the valid rights and respond within 30 days. Ensure all actions are documented and the individual receives a comprehensive response addressing each applicable right they have exercised."
        },
        no: { 
          nextQuestion: null,
          message: "If none of the rights apply, explain this clearly to the individual. Provide a detailed response explaining why their request does not fall under the recognized data subject rights and inform them of their right to lodge a complaint with the PDPO if they disagree."
        }
      }
    }
  ];

  return (
    <Layout>
      <div className="container py-8 space-y-6">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">Uganda Data Subject Rights Assessment</h1>
          <p className="text-lg text-muted-foreground">
            Learn how to handle data subject requests and rights under Uganda's Data Protection and Privacy Act, 2019 and its 2021 Regulations.
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-sm text-blue-800">
              <strong>Important:</strong> Organizations must respond to valid data subject rights requests within 30 days and maintain proper documentation of all requests and responses.
            </p>
          </div>
        </div>
        
        <AssessmentInterface
          title="Data Subject Rights Assessment"
          questions={questions}
          onComplete={() => setIsCompleted(true)}
          onReset={() => setIsCompleted(false)}
        />

        {isCompleted && (
          <div className="space-y-6 mt-8 animate-fade-in">
            <h2 className="text-2xl font-semibold">Data Subject Rights Guidance</h2>
            <Separator className="my-2" />

            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
              <h3 className="font-medium text-lg mb-3">Individual Rights Under Uganda's Data Protection Act</h3>
              <p className="text-muted-foreground">
                Under Uganda's Data Protection and Privacy Act, 2019, individuals have comprehensive rights regarding their personal data. 
                Organizations must verify the requester's identity, apply any lawful exemptions, and respond within 30 days with proper documentation.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Data Subject Rights</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="overflow-hidden hover:shadow-md transition-shadow duration-200">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <Eye className="h-5 w-5 text-blue-500 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-medium text-lg">Right of Access</h4>
                        <p className="text-muted-foreground mt-1">
                          Individuals can request copies of their personal data and information about how it's being processed, including purpose, legal basis, and recipients.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden hover:shadow-md transition-shadow duration-200">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <Edit className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-medium text-lg">Right to Rectification</h4>
                        <p className="text-muted-foreground mt-1">
                          Individuals can request correction of inaccurate or incomplete personal data. Organizations must assess and update where appropriate.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden hover:shadow-md transition-shadow duration-200">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <Trash2 className="h-5 w-5 text-red-500 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-medium text-lg">Right to Erasure</h4>
                        <p className="text-muted-foreground mt-1">
                          Also known as "right to be forgotten." Individuals can request deletion of their data, subject to legal and contractual retention requirements.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden hover:shadow-md transition-shadow duration-200">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <Ban className="h-5 w-5 text-amber-500 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-medium text-lg">Right to Object</h4>
                        <p className="text-muted-foreground mt-1">
                          Individuals can object to processing, especially for direct marketing (must always be honored) or legitimate interests (requires reassessment).
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden hover:shadow-md transition-shadow duration-200">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <Download className="h-5 w-5 text-purple-500 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-medium text-lg">Right to Data Portability</h4>
                        <p className="text-muted-foreground mt-1">
                          Individuals can request data in structured, machine-readable formats (CSV, JSON, XML) for data processed by consent or contract.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Additional Considerations</h3>
              <div className="grid grid-cols-1 gap-4">
                <Card className="overflow-hidden hover:shadow-md transition-shadow duration-200">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <Users className="h-5 w-5 text-indigo-500 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-medium">Proxy or Agent Requests</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Requests may be made by parents, guardians, legal representatives, or authorized agents. Always verify the agent's authority through power of attorney, court orders, or birth certificates.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden hover:shadow-md transition-shadow duration-200">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-medium">Bulk or Repetitive Requests</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          If requests are manifestly unfounded or excessive, organizations may refuse to act or charge a reasonable fee. Always document your reasoning clearly.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden hover:shadow-md transition-shadow duration-200">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <Shield className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-medium">Children's Data</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          When processing children's data, confirm the requester has parental responsibility or guardianship. All decisions should be in the child's best interest.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden hover:shadow-md transition-shadow duration-200">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <FileText className="h-5 w-5 text-blue-500 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-medium">Documentation and Logging</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Keep records of all requests, identity checks, steps taken, decisions made, and correspondence. This supports accountability and audit readiness.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden hover:shadow-md transition-shadow duration-200">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-purple-500 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-medium">Communication Protocols</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          If denying a request (in full or part), clearly explain the lawful basis and inform the data subject of their right to lodge a complaint with the Personal Data Protection Office (PDPO).
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="font-medium text-lg mb-2">Best Practice Recommendations</h3>
              <ul className="space-y-2 text-sm text-green-800">
                <li>• Establish clear procedures for receiving and handling data subject rights requests</li>
                <li>• Train staff on identity verification and rights assessment processes</li>
                <li>• Maintain comprehensive logs of all requests and organizational responses</li>
                <li>• Develop template responses for common scenarios while ensuring personalization</li>
                <li>• Regular review of procedures to ensure continued compliance with Uganda's requirements</li>
              </ul>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
              <h3 className="font-medium text-lg mb-2">Response Timeline</h3>
              <p className="text-sm text-amber-800">
                Organizations must respond to valid data subject rights requests within 30 days of receipt. 
                This timeline begins when you receive a valid request from a verified individual. 
                Extensions may be possible in complex cases, but you must inform the data subject within the initial 30-day period.
              </p>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default UgandaDataSubjectRights;
