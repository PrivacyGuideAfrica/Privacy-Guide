
import { Layout } from "@/components/shared/Layout";
import { AssessmentInterface } from "@/components/shared/AssessmentInterface";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Scale, FileText, Shield, Heart, Building, Users } from "lucide-react";

const UgandaLawfulBasis = () => {
  const [isCompleted, setIsCompleted] = useState(false);

  const questions = [
    {
      id: 1,
      text: "Is the processing necessary to comply with a legal obligation?",
      tooltip: "This includes statutory or regulatory requirements, e.g. tax laws, employment laws, AML regulations.",
      options: {
        yes: { 
          nextQuestion: null,
          message: "Lawful basis is Legal Obligation. You must process the data to comply with statutory or regulatory requirements such as tax laws, employment laws, or AML regulations."
        },
        no: { nextQuestion: 2, message: null }
      }
    },
    {
      id: 2,
      text: "Is the processing required to perform a contract with the individual or to take steps at their request before entering into a contract?",
      tooltip: "Applies when processing is necessary for delivering services, managing employment, or fulfilling contractual duties.",
      options: {
        yes: { 
          nextQuestion: null,
          message: "Lawful basis is Contract. The processing is necessary for delivering services, managing employment, or fulfilling contractual duties with the individual."
        },
        no: { nextQuestion: 3, message: null }
      }
    },
    {
      id: 3,
      text: "Has the individual given valid, informed, and freely given consent for the processing?",
      tooltip: "Consent must be specific, informed, and freely given. Silence or pre-ticked boxes are not valid.",
      options: {
        yes: { 
          nextQuestion: null,
          message: "Lawful basis is Consent. Ensure the consent is specific, informed, and freely given. Remember that individuals can withdraw consent at any time."
        },
        no: { nextQuestion: 4, message: null }
      }
    },
    {
      id: 4,
      text: "Is the processing necessary to protect the vital interests of the individual or another person?",
      tooltip: "Typically used for life-threatening situations, such as emergency medical care.",
      options: {
        yes: { 
          nextQuestion: null,
          message: "Lawful basis is Vital Interests. This applies to life-threatening situations such as emergency medical care where processing is necessary to protect someone's life or health."
        },
        no: { nextQuestion: 5, message: null }
      }
    },
    {
      id: 5,
      text: "Is the processing necessary for performing a task carried out in the public interest or in the exercise of official authority?",
      tooltip: "Often applies to public authorities or services provided under legal authority.",
      options: {
        yes: { 
          nextQuestion: null,
          message: "Lawful basis is Public Interest. This applies to public authorities or services provided under legal authority for the public good."
        },
        no: { nextQuestion: 6, message: null }
      }
    },
    {
      id: 6,
      text: "Is the processing necessary for your organisation's legitimate interests, and are those interests not overridden by the rights and freedoms of the individual?",
      tooltip: "A balancing test (Legitimate Interest Assessment) must be conducted to determine proportionality and fairness.",
      options: {
        yes: { 
          nextQuestion: null,
          message: "Lawful basis is Legitimate Interests. You must conduct a Legitimate Interest Assessment (LIA) to ensure your business interests do not override individual rights and freedoms."
        },
        no: { 
          nextQuestion: null,
          message: "No lawful basis applies. You must not process the data. Consider whether you can modify your processing to meet one of the lawful bases or whether the processing is actually necessary."
        }
      }
    }
  ];

  return (
    <Layout>
      <div className="container py-8 space-y-6">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">Uganda Lawful Basis Assessment</h1>
          <p className="text-lg text-muted-foreground">
            Identify the appropriate lawful basis for your data processing activities under the Uganda Data Protection and Privacy Act, 2019.
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-sm text-blue-800">
              <strong>Important:</strong> Organisations must establish and document a lawful basis for every processing activity involving personal data before processing begins.
            </p>
          </div>
        </div>

        <AssessmentInterface
          title="Lawful Basis Decision Tree"
          questions={questions}
          onComplete={() => setIsCompleted(true)}
          onReset={() => setIsCompleted(false)}
        />

        {isCompleted && (
          <div className="space-y-6 mt-8 animate-fade-in">
            <h2 className="text-2xl font-semibold">Lawful Basis Guidance</h2>
            <Separator className="my-2" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="overflow-hidden hover:shadow-md transition-shadow duration-200">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <Scale className="h-5 w-5 text-blue-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium text-lg">Legal Obligation</h3>
                      <p className="text-muted-foreground mt-1">
                        Processing required by statute or regulation (e.g., tax laws, employment laws, AML regulations). Keep records of the specific legal requirement.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-md transition-shadow duration-200">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <FileText className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium text-lg">Contract</h3>
                      <p className="text-muted-foreground mt-1">
                        Processing necessary for contract performance or pre-contractual steps. Covers service delivery, employment management, and contractual duties.
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
                      <h3 className="font-medium text-lg">Consent</h3>
                      <p className="text-muted-foreground mt-1">
                        Must be freely given, specific, informed, and unambiguous. Individuals can withdraw consent at any time. Avoid pre-ticked boxes or silence as consent.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-md transition-shadow duration-200">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <Heart className="h-5 w-5 text-red-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium text-lg">Vital Interests</h3>
                      <p className="text-muted-foreground mt-1">
                        Used for life-threatening situations requiring immediate action, such as emergency medical care. Should be used sparingly and only when truly vital.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-md transition-shadow duration-200">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <Building className="h-5 w-5 text-amber-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium text-lg">Public Interest</h3>
                      <p className="text-muted-foreground mt-1">
                        Processing by public authorities or under official mandates for the public good. Must be necessary for the specific public task or authority.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-md transition-shadow duration-200">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-indigo-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium text-lg">Legitimate Interests</h3>
                      <p className="text-muted-foreground mt-1">
                        Business interests that don't override individual rights. Requires a Legitimate Interest Assessment (LIA) to balance interests and ensure proportionality.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
              <h3 className="font-medium text-lg mb-2">Documentation Requirements</h3>
              <ul className="space-y-2 text-sm text-amber-800">
                <li>• Keep records of the lawful basis selected for each processing activity</li>
                <li>• When relying on consent, maintain evidence of valid consent and withdrawal mechanisms</li>
                <li>• For legitimate interests, document your Legitimate Interest Assessment</li>
                <li>• Ensure privacy notices clearly explain the lawful basis being used</li>
                <li>• Regularly review lawful bases as processing activities change</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default UgandaLawfulBasis;
