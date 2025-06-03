
import { Layout } from "@/components/shared/Layout";
import { AssessmentInterface } from "@/components/shared/AssessmentInterface";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Shield, AlertTriangle, Clock, Users, FileText, Eye, Lock, Database, Wifi, UserCheck, BookOpen, CheckCircle } from "lucide-react";

const UgandaDataBreach = () => {
  const [isCompleted, setIsCompleted] = useState(false);

  const questions = [
    {
      id: 1,
      text: "Are you processing personal data (as a controller or processor)?",
      tooltip: "Security obligations apply to any entity that processes personal data.",
      options: {
        yes: { nextQuestion: 2, message: null },
        no: { 
          nextQuestion: null,
          message: "No specific security obligations under the Act. However, if you plan to process personal data in the future, you should familiarize yourself with the security requirements before beginning any processing activities."
        }
      }
    },
    {
      id: 2,
      text: "Have you implemented technical and organisational measures to ensure data security?",
      tooltip: "Measures must protect data from unauthorised access, alteration, loss, or disclosure.",
      options: {
        yes: { nextQuestion: 3, message: null },
        no: { 
          nextQuestion: null,
          message: "You must implement appropriate safeguards to ensure compliance. This includes access controls, encryption, backups, audit trails, employee training, and vendor risk assessments. Failure to implement adequate security measures may result in penalties and increased liability in case of a breach."
        }
      }
    },
    {
      id: 3,
      text: "Has there been an actual or suspected personal data breach?",
      tooltip: "This includes accidental or unlawful destruction, loss, alteration, unauthorised disclosure, or access.",
      options: {
        yes: { nextQuestion: 4, message: null },
        no: { 
          nextQuestion: null,
          message: "Continue monitoring and reviewing security controls. Ensure you have proper incident detection mechanisms in place and that all staff know how to identify and report potential breaches immediately. Regular security assessments and updates to your security measures are essential."
        }
      }
    },
    {
      id: 4,
      text: "Does the breach pose a risk to the rights and freedoms of individuals?",
      tooltip: "Consider the type of data, volume, sensitivity, and potential impact on individuals.",
      options: {
        yes: { nextQuestion: 5, message: null },
        no: { 
          nextQuestion: null,
          message: "Document the breach internally but no need to notify the PDPO or individuals. However, you must still investigate the incident, implement corrective measures, and maintain a record in your breach register for audit purposes and to demonstrate accountability."
        }
      }
    },
    {
      id: 5,
      text: "Have you notified the Personal Data Protection Office within 72 hours?",
      tooltip: "Notification should include the breach nature, likely consequences, and mitigation steps.",
      options: {
        yes: { nextQuestion: 6, message: null },
        no: { 
          nextQuestion: null,
          message: "Notify the PDPO immediately unless you can demonstrate no risk. The notification must include: nature of the breach, categories and approximate number of data subjects affected, likely consequences, and measures taken to address the breach. Delays in notification may result in additional penalties."
        }
      }
    },
    {
      id: 6,
      text: "Is the breach likely to result in a high risk to affected individuals?",
      tooltip: "High risk includes identity theft, financial loss, discrimination, or reputational damage.",
      options: {
        yes: { nextQuestion: 7, message: null },
        no: { 
          nextQuestion: null,
          message: "Keep record of breach and mitigation; no need to notify individuals. However, continue monitoring for any escalation of risk and be prepared to notify individuals if the risk assessment changes. Document your risk assessment reasoning thoroughly."
        }
      }
    },
    {
      id: 7,
      text: "Have you notified affected individuals without undue delay?",
      tooltip: "Individuals must be told about risks and what they can do to protect themselves.",
      options: {
        yes: { 
          nextQuestion: null,
          message: "Breach response obligations fulfilled. Continue monitoring the situation, implement lessons learned, and update your security measures and breach response procedures based on this incident. Consider whether additional support should be provided to affected individuals."
        },
        no: { 
          nextQuestion: null,
          message: "Notify affected individuals as soon as possible. The notification must be in clear and plain language, describe the nature of the breach, provide contact details for further information, and recommend measures individuals can take to protect themselves from potential adverse effects."
        }
      }
    }
  ];

  return (
    <Layout>
      <div className="container py-8 space-y-6">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">Uganda Data Breach Assessment</h1>
          <p className="text-lg text-muted-foreground">
            Understand your security obligations and how to handle personal data breaches under Uganda's Data Protection and Privacy Act, 2019 and its 2021 Regulations.
          </p>
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <p className="text-sm text-red-800">
              <strong>Important:</strong> If a breach poses risk to individuals, you must notify the Personal Data Protection Office (PDPO) within 72 hours and affected individuals without undue delay if there's high risk.
            </p>
          </div>
        </div>
        
        <AssessmentInterface
          title="Data Breach Assessment"
          questions={questions}
          onComplete={() => setIsCompleted(true)}
          onReset={() => setIsCompleted(false)}
        />

        {isCompleted && (
          <div className="space-y-6 mt-8 animate-fade-in">
            <h2 className="text-2xl font-semibold">Security and Breach Notification Guidance</h2>
            <Separator className="my-2" />

            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
              <h3 className="font-medium text-lg mb-3">Security Obligations Under Uganda's Data Protection Act</h3>
              <p className="text-muted-foreground">
                Organizations must implement appropriate technical and organisational measures to protect personal data from unauthorized access, alteration, loss, or disclosure. 
                When breaches occur, specific notification requirements apply depending on the risk level to individuals.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Required Security Measures</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="overflow-hidden hover:shadow-md transition-shadow duration-200">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <Lock className="h-5 w-5 text-blue-500 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-medium text-lg">Access Controls</h4>
                        <p className="text-muted-foreground mt-1">
                          Implement role-based access controls, strong authentication, and regular access reviews to ensure only authorized personnel can access personal data.
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
                        <h4 className="font-medium text-lg">Encryption</h4>
                        <p className="text-muted-foreground mt-1">
                          Use encryption for data at rest and in transit to protect personal data from unauthorized access, especially for sensitive information.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden hover:shadow-md transition-shadow duration-200">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <Database className="h-5 w-5 text-purple-500 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-medium text-lg">Backups</h4>
                        <p className="text-muted-foreground mt-1">
                          Maintain secure, regular backups of personal data to ensure availability and enable recovery in case of system failures or security incidents.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden hover:shadow-md transition-shadow duration-200">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <Eye className="h-5 w-5 text-orange-500 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-medium text-lg">Audit Trails</h4>
                        <p className="text-muted-foreground mt-1">
                          Log and monitor access to personal data systems to detect unauthorized access and support incident investigation and accountability.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden hover:shadow-md transition-shadow duration-200">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <BookOpen className="h-5 w-5 text-indigo-500 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-medium text-lg">Employee Training</h4>
                        <p className="text-muted-foreground mt-1">
                          Train staff on data protection principles, security procedures, and incident recognition to prevent breaches and ensure prompt reporting.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden hover:shadow-md transition-shadow duration-200">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <UserCheck className="h-5 w-5 text-teal-500 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-medium text-lg">Vendor Risk Assessments</h4>
                        <p className="text-muted-foreground mt-1">
                          Evaluate and monitor third-party vendors' security practices to ensure they meet data protection standards when processing personal data.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Breach Response Process</h3>
              <div className="grid grid-cols-1 gap-4">
                <Card className="overflow-hidden hover:shadow-md transition-shadow duration-200">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-medium">1. Immediate Assessment</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Assess whether the incident constitutes a personal data breach and evaluate the risk to the rights and freedoms of individuals based on data type, volume, and sensitivity.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden hover:shadow-md transition-shadow duration-200">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-red-500 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-medium">2. PDPO Notification (72 Hours)</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          If the breach poses a risk to individuals, notify the Personal Data Protection Office within 72 hours, including breach nature, consequences, and mitigation steps.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden hover:shadow-md transition-shadow duration-200">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <Users className="h-5 w-5 text-purple-500 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-medium">3. Individual Notification (High Risk)</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          If the breach is likely to result in high risk (identity theft, financial loss, discrimination), notify affected individuals without undue delay about risks and protective measures.
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
                        <h4 className="font-medium">4. Documentation and Follow-up</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Log the incident in your breach register, investigate root causes, implement corrective actions, and update security measures based on lessons learned.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Key Actions for Compliance</h3>
              <div className="grid grid-cols-1 gap-4">
                <Card className="overflow-hidden hover:shadow-md transition-shadow duration-200">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-medium">Formal Breach Response Procedure</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Maintain a documented breach response and escalation procedure that clearly defines roles, responsibilities, and timelines for incident management.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden hover:shadow-md transition-shadow duration-200">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <FileText className="h-5 w-5 text-indigo-500 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-medium">Internal Breach Register</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Log all incidents in an internal breach register, including details of the incident, assessment, actions taken, and outcomes for audit and accountability purposes.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden hover:shadow-md transition-shadow duration-200">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="h-5 w-5 text-orange-500 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-medium">Root Cause Investigation</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Investigate the root cause of each incident and implement corrective actions to prevent recurrence, updating security measures as necessary.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden hover:shadow-md transition-shadow duration-200">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <Users className="h-5 w-5 text-teal-500 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-medium">Employee Training Program</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Train employees to recognise and report incidents promptly, including regular refresher training and testing of incident response procedures.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
              <h3 className="font-medium text-lg mb-2">Special Consideration for Processors</h3>
              <p className="text-sm text-amber-800">
                If you are acting as a data processor, you must notify your data controller immediately after becoming aware of a personal data breach. 
                The controller is then responsible for determining whether to notify the PDPO and affected individuals based on the risk assessment.
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="font-medium text-lg mb-2">Timeline Summary</h3>
              <ul className="space-y-2 text-sm text-blue-800">
                <li>• <strong>Immediate:</strong> Contain the breach and assess the risk</li>
                <li>• <strong>Within 72 hours:</strong> Notify PDPO if there is risk to individuals</li>
                <li>• <strong>Without undue delay:</strong> Notify affected individuals if there is high risk</li>
                <li>• <strong>Ongoing:</strong> Investigate, document, and implement corrective measures</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default UgandaDataBreach;
