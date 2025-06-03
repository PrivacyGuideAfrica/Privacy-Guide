
import { Layout } from "@/components/shared/Layout";
import { AssessmentInterface } from "@/components/shared/AssessmentInterface";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Shield, AlertTriangle, Clock, Users, FileText, Eye, Lock, Database, Heart, Fingerprint, UserCheck, BookOpen, CheckCircle, Scale, FileCheck } from "lucide-react";

const UgandaSensitiveData = () => {
  const [isCompleted, setIsCompleted] = useState(false);

  const questions = [
    {
      id: 1,
      text: "Are you processing any of the following: health data, genetic or biometric data, race, ethnicity, religious beliefs, political opinions, or sexual life?",
      tooltip: "These are classified as sensitive personal data under Ugandan law.",
      options: {
        yes: { nextQuestion: 2, message: null },
        no: { 
          nextQuestion: null,
          message: "This module does not apply to you since you're not processing sensitive personal data. However, you must still comply with general data processing obligations under the Uganda Data Protection and Privacy Act for any personal data you process."
        }
      }
    },
    {
      id: 2,
      text: "Do you have an appropriate lawful basis under Section 14 of the Act?",
      tooltip: "This could include consent, vital interest, legal obligation, or performance of rights and duties under law.",
      options: {
        yes: { nextQuestion: 3, message: null },
        no: { 
          nextQuestion: null,
          message: "Processing is unlawful without a valid lawful basis. You must identify and establish an appropriate lawful basis under Section 14 of the Act before proceeding with any processing of sensitive personal data. Stop all processing until this is resolved."
        }
      }
    },
    {
      id: 3,
      text: "Have you obtained the data subject's consent, where required?",
      tooltip: "Consent must be explicit, informed, freely given, and specific to the purpose.",
      options: {
        yes: { nextQuestion: 4, message: null },
        no: { nextQuestion: 5, message: null }
      }
    },
    {
      id: 4,
      text: "Was the consent valid and properly documented?",
      tooltip: "Ensure consent was not coerced and records are retained.",
      options: {
        yes: { nextQuestion: 6, message: null },
        no: { 
          nextQuestion: null,
          message: "You must seek valid consent or stop processing. Consent for sensitive data must be explicit, specific, informed, and freely given. Review your consent mechanisms and documentation to ensure they meet legal requirements, or consider alternative lawful bases if consent is not appropriate."
        }
      }
    },
    {
      id: 5,
      text: "Does the processing fall under a legal exception (e.g. health care, legal claims, public interest)?",
      tooltip: "Includes processing by health professionals, for legal claims, or substantial public interest.",
      options: {
        yes: { nextQuestion: 6, message: null },
        no: { 
          nextQuestion: null,
          message: "Processing is not allowed without a valid exception or consent. You must either obtain explicit consent from data subjects or ensure your processing falls within a recognized legal exception. Consider seeking legal advice to determine if any exceptions apply to your specific circumstances."
        }
      }
    },
    {
      id: 6,
      text: "Have you implemented appropriate safeguards (e.g. access controls, encryption, policy restrictions)?",
      tooltip: "Sensitive data must be protected with enhanced security and accountability controls.",
      options: {
        yes: { 
          nextQuestion: null,
          message: "Processing permitted under current assessment. Ensure continuous compliance monitoring, regular review of safeguards, and maintain documentation of all processing activities. Stay updated on regulatory guidance and be prepared to demonstrate compliance if required by the Personal Data Protection Office."
        },
        no: { 
          nextQuestion: null,
          message: "You must implement appropriate safeguards before continuing to process sensitive personal data. Enhanced security measures are mandatory for sensitive data processing. Develop and implement comprehensive technical and organizational measures immediately."
        }
      }
    }
  ];

  return (
    <Layout>
      <div className="container py-8 space-y-6">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">Uganda Sensitive Data Assessment</h1>
          <p className="text-lg text-muted-foreground">
            Determine if your processing of sensitive personal data is lawful under Uganda's Data Protection and Privacy Act, 2019 and its 2021 Regulations.
          </p>
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <p className="text-sm text-red-800">
              <strong>Important:</strong> Sensitive personal data requires explicit consent or a specific legal exception, plus enhanced security safeguards. Processing without proper authorization is strictly prohibited.
            </p>
          </div>
        </div>
        
        <AssessmentInterface
          title="Sensitive Data Assessment"
          questions={questions}
          onComplete={() => setIsCompleted(true)}
          onReset={() => setIsCompleted(false)}
        />

        {isCompleted && (
          <div className="space-y-6 mt-8 animate-fade-in">
            <h2 className="text-2xl font-semibold">Processing of Sensitive Personal Data Guidance</h2>
            <Separator className="my-2" />

            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
              <h3 className="font-medium text-lg mb-3">Sensitive Personal Data Under Uganda Law</h3>
              <p className="text-muted-foreground">
                Sensitive personal data requires special protection and can only be processed under strict conditions with explicit consent or specific legal exceptions, 
                combined with appropriate technical and organizational safeguards.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Types of Sensitive Personal Data</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="overflow-hidden hover:shadow-md transition-shadow duration-200">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <Heart className="h-5 w-5 text-red-500 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-medium text-lg">Health Data</h4>
                        <p className="text-muted-foreground mt-1">
                          Information about a person's physical or mental health, medical history, treatment, or healthcare provision.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden hover:shadow-md transition-shadow duration-200">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <Fingerprint className="h-5 w-5 text-blue-500 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-medium text-lg">Genetic & Biometric Data</h4>
                        <p className="text-muted-foreground mt-1">
                          DNA information, fingerprints, facial recognition data, and other unique biological identifiers.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden hover:shadow-md transition-shadow duration-200">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <Users className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-medium text-lg">Race & Ethnicity</h4>
                        <p className="text-muted-foreground mt-1">
                          Information revealing racial or ethnic origin, including tribal affiliation and cultural background.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden hover:shadow-md transition-shadow duration-200">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <BookOpen className="h-5 w-5 text-purple-500 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-medium text-lg">Religious & Political Beliefs</h4>
                        <p className="text-muted-foreground mt-1">
                          Information about religious beliefs, political opinions, philosophical beliefs, and ideological views.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden hover:shadow-md transition-shadow duration-200">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <UserCheck className="h-5 w-5 text-orange-500 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-medium text-lg">Sexual Life & Orientation</h4>
                        <p className="text-muted-foreground mt-1">
                          Information about sexual behavior, sexual orientation, and intimate relationships.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Lawful Basis Requirements</h3>
              <div className="grid grid-cols-1 gap-4">
                <Card className="overflow-hidden hover:shadow-md transition-shadow duration-200">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-medium">Explicit Consent</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Data subject has given clear, specific, informed, and freely given consent for the particular purpose. Must be documented and revocable.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden hover:shadow-md transition-shadow duration-200">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <Heart className="h-5 w-5 text-red-500 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-medium">Healthcare Exception</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Processing by healthcare professionals for medical diagnosis, treatment, or care provision under professional confidentiality obligations.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden hover:shadow-md transition-shadow duration-200">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <Scale className="h-5 w-5 text-blue-500 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-medium">Legal Claims</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Processing necessary for establishing, exercising, or defending legal claims in courts or administrative proceedings.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden hover:shadow-md transition-shadow duration-200">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <Shield className="h-5 w-5 text-indigo-500 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-medium">Substantial Public Interest</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Processing necessary for substantial public interest purposes, proportionate to the aim pursued and respecting fundamental rights.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Required Safeguards</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="overflow-hidden hover:shadow-md transition-shadow duration-200">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <Lock className="h-5 w-5 text-blue-500 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-medium text-lg">Enhanced Access Controls</h4>
                        <p className="text-muted-foreground mt-1">
                          Restrict access to sensitive data to essential personnel only, with role-based permissions and regular access reviews.
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
                        <h4 className="font-medium text-lg">Strong Encryption</h4>
                        <p className="text-muted-foreground mt-1">
                          Encrypt sensitive data both at rest and in transit using industry-standard encryption methods and key management practices.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden hover:shadow-md transition-shadow duration-200">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <FileText className="h-5 w-5 text-purple-500 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-medium text-lg">Policy Restrictions</h4>
                        <p className="text-muted-foreground mt-1">
                          Implement clear policies governing sensitive data processing, including purpose limitation and data minimization principles.
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
                          Maintain comprehensive logs of all access to and processing of sensitive data for accountability and monitoring purposes.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Additional Compliance Recommendations</h3>
              <div className="grid grid-cols-1 gap-4">
                <Card className="overflow-hidden hover:shadow-md transition-shadow duration-200">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <Database className="h-5 w-5 text-blue-500 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-medium">Processing Activity Log</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Maintain detailed records of all processing activities involving sensitive data, including purposes, categories, recipients, and retention periods.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden hover:shadow-md transition-shadow duration-200">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <Users className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-medium">Personnel Training</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Provide specialized training for staff handling sensitive data, including confidentiality obligations and incident reporting procedures.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden hover:shadow-md transition-shadow duration-200">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <FileCheck className="h-5 w-5 text-purple-500 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-medium">Data Protection Impact Assessment</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Conduct DPIAs for high-risk or large-scale processing of sensitive data to identify and mitigate privacy risks.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden hover:shadow-md transition-shadow duration-200">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <Shield className="h-5 w-5 text-indigo-500 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-medium">Vendor Contracts</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Ensure contracts with processors include strict protective clauses for sensitive data, including security requirements and breach notification.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
              <h3 className="font-medium text-lg mb-2">Important Notes on Consent</h3>
              <ul className="space-y-2 text-sm text-amber-800">
                <li>• <strong>No Implied Consent:</strong> Consent must be explicit, specific, and unambiguous</li>
                <li>• <strong>Documentation Required:</strong> Maintain records of when, how, and for what purpose consent was obtained</li>
                <li>• <strong>Revocable:</strong> Data subjects can withdraw consent at any time</li>
                <li>• <strong>Freely Given:</strong> Consent cannot be coerced or bundled with unrelated services</li>
              </ul>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="font-medium text-lg mb-2">Seeking Additional Guidance</h3>
              <p className="text-sm text-blue-800">
                For processing in medical, research, or public interest contexts, consider seeking legal or sector-specific guidance. 
                The Personal Data Protection Office may provide additional guidance on specific scenarios involving sensitive data processing.
              </p>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default UgandaSensitiveData;
