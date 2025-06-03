
import { Layout } from "@/components/shared/Layout";
import { AssessmentInterface } from "@/components/shared/AssessmentInterface";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Eye, Brain, Shield, Users, AlertTriangle, FileText } from "lucide-react";

const UgandaDPIA = () => {
  const [isCompleted, setIsCompleted] = useState(false);

  const questions = [
    {
      id: 1,
      text: "Does your planned processing involve a high risk to the rights and freedoms of individuals?",
      tooltip: "This includes large-scale profiling, surveillance, processing sensitive data, or automated decisions with significant effects.",
      options: {
        yes: { nextQuestion: 2, message: null },
        no: { 
          nextQuestion: null,
          message: "DPIA not legally required — document justification and monitor risk. While not mandatory, consider conducting a DPIA as a best practice to demonstrate accountability and proactive risk management."
        }
      }
    },
    {
      id: 2,
      text: "Does the processing involve new technologies, large-scale data sets, or systematic monitoring?",
      tooltip: "Examples include biometric systems, AI tools, geolocation tracking, or use of machine learning for profiling.",
      options: {
        yes: { 
          nextQuestion: null,
          message: "DPIA is required under Section 25. Your processing activities fall under the mandatory DPIA requirements of the Uganda Data Protection and Privacy Act, 2019. You must complete a DPIA before beginning the processing."
        },
        no: { nextQuestion: 3, message: null }
      }
    },
    {
      id: 3,
      text: "Are you processing children's data or special categories such as health, race, religious beliefs, or sexual life?",
      tooltip: "These are sensitive data types that typically require additional safeguards.",
      options: {
        yes: { 
          nextQuestion: null,
          message: "DPIA strongly recommended. While not explicitly mandated in this case, conducting a DPIA is strongly recommended for children's data and special categories of personal data to ensure adequate protection and compliance."
        },
        no: { 
          nextQuestion: null,
          message: "DPIA may not be required, but conduct a threshold assessment to confirm. Consider the specific risks of your processing and whether a DPIA would help demonstrate compliance and accountability."
        }
      }
    }
  ];

  return (
    <Layout>
      <div className="container py-8 space-y-6">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">Uganda DPIA Assessment</h1>
          <p className="text-lg text-muted-foreground">
            Determine when you need to conduct a Data Protection Impact Assessment under Uganda's Data Protection and Privacy Act, 2019 and its 2021 Regulations, and understand how to carry one out.
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-sm text-blue-800">
              <strong>Important:</strong> A DPIA is mandatory under Section 25 if processing is likely to result in high risk to the rights and freedoms of individuals. Even when not required, conducting a DPIA demonstrates accountability and proactive risk management.
            </p>
          </div>
        </div>
        
        <AssessmentInterface
          title="DPIA Requirements Assessment"
          questions={questions}
          onComplete={() => setIsCompleted(true)}
          onReset={() => setIsCompleted(false)}
        />

        {isCompleted && (
          <div className="space-y-6 mt-8 animate-fade-in">
            <h2 className="text-2xl font-semibold">DPIA Guidance</h2>
            <Separator className="my-2" />

            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
              <h3 className="font-medium text-lg mb-3">What is a DPIA?</h3>
              <p className="text-muted-foreground">
                A Data Protection Impact Assessment (DPIA) is a tool used to identify and mitigate data protection risks in processing activities. 
                Under Section 25 of the Data Protection and Privacy Act, 2019, a DPIA is mandatory if the processing is likely to result in high risk to the rights and freedoms of individuals.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">A DPIA Must Include:</h3>
              <div className="grid grid-cols-1 gap-4">
                <Card className="overflow-hidden hover:shadow-md transition-shadow duration-200">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <FileText className="h-5 w-5 text-blue-500 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-medium">Description of Processing</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          A clear description of the processing activity and its intended purpose
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
                        <h4 className="font-medium">Necessity and Proportionality</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          An assessment of the necessity and proportionality of the processing
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
                        <h4 className="font-medium">Risk Evaluation</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          An evaluation of risks to the rights and freedoms of data subjects
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden hover:shadow-md transition-shadow duration-200">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <Shield className="h-5 w-5 text-purple-500 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-medium">Mitigation Measures</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Measures adopted to address or mitigate the identified risks
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden hover:shadow-md transition-shadow duration-200">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <Users className="h-5 w-5 text-indigo-500 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-medium">Consultation Evidence</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Whether the data controller consulted with the regulator or data subjects (where appropriate)
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Examples Where DPIA is Required:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="overflow-hidden hover:shadow-md transition-shadow duration-200">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <Eye className="h-5 w-5 text-red-500 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-medium text-lg">Biometric Systems</h4>
                        <p className="text-muted-foreground mt-1">
                          Use of facial recognition or biometric identification systems for access control or monitoring
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden hover:shadow-md transition-shadow duration-200">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <Brain className="h-5 w-5 text-purple-500 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-medium text-lg">AI Monitoring</h4>
                        <p className="text-muted-foreground mt-1">
                          Deployment of AI to monitor employees or profile customers for decision-making
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden hover:shadow-md transition-shadow duration-200">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <Eye className="h-5 w-5 text-amber-500 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-medium text-lg">CCTV Monitoring</h4>
                        <p className="text-muted-foreground mt-1">
                          Large-scale CCTV or online monitoring of staff activities and behavior
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
                        <h4 className="font-medium text-lg">Health Data</h4>
                        <p className="text-muted-foreground mt-1">
                          Processing of health data for medical research or insurance purposes
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden hover:shadow-md transition-shadow duration-200">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <Users className="h-5 w-5 text-blue-500 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-medium text-lg">Location Tracking</h4>
                        <p className="text-muted-foreground mt-1">
                          Launching a mobile application that collects and processes location data
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="font-medium text-lg mb-2">Best Practice Recommendation</h3>
              <p className="text-sm text-green-800">
                Even if not explicitly required, conducting a DPIA is considered best practice, especially for complex or sensitive projects. 
                It demonstrates accountability and proactive risk management, and may mitigate liability or regulatory exposure during audits or investigations.
              </p>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
              <h3 className="font-medium text-lg mb-2">Remember</h3>
              <ul className="space-y-2 text-sm text-amber-800">
                <li>• Complete the DPIA before beginning any high-risk processing</li>
                <li>• Consult with your Data Protection Officer if you have one</li>
                <li>• Consider consulting with the regulator for high-risk processing</li>
                <li>• Document all decisions and keep records of your assessment</li>
                <li>• Review and update your DPIA as processing activities change</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default UgandaDPIA;
