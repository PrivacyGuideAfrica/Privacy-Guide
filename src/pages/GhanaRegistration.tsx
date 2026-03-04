import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Building, FileText, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/shared/Layout";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const GhanaRegistration = () => {
  const [showResult, setShowResult] = useState<"required" | "not-required" | null>(null);

  if (showResult) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto px-4 py-12">
          <Link to="/country/ghana" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Ghana Modules
          </Link>

          <Card className="p-8">
            {showResult === "required" ? (
              <>
                <div className="text-center mb-8">
                  <Building className="h-12 w-12 text-red-500 mx-auto" />
                  <h2 className="text-2xl font-bold mt-4 mb-2">Registration is Mandatory</h2>
                  <p className="text-muted-foreground text-lg">
                    As a Data Controller, you are legally required to register with the Data Protection Commission before 
                    processing any personal data. Processing personal data without being registered is an offence and can lead to penalties.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="font-semibold mb-4">What You Need for Registration:</h3>
                    <ul className="list-disc list-inside space-y-2 text-sm">
                      <li><strong>Your Identity:</strong> Your business name and address. If your company is an external (foreign) company, you must also provide the name and address of your representative in Ghana.</li>
                      <li><strong>Data Description:</strong> Describe the types of personal data you intend to process and the categories of individuals (data subjects) whose personal data you collect. Indicate if you hold, or are likely to hold, special personal data.</li>
                      <li><strong>Purpose of Processing:</strong> A clear description of the purpose(s) for which you intend to process personal data.</li>
                      <li><strong>Recipients of Data:</strong> The categories of persons or organisations to whom you intend to disclose the personal data.</li>
                      <li><strong>International Transfers (if applicable):</strong> If you transfer personal data outside Ghana, state the name or describe the country to which you may transfer the data.</li>
                      <li><strong>Data Held:</strong> Specify the class of individuals, or where practicable, the names of persons whose personal data you hold.</li>
                      <li><strong>Security Measures:</strong> A general description of the measures you will take to secure the personal data.</li>
                      <li><strong>Other Information:</strong> The Commission may also require any other information.</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="font-semibold mb-4">The Registration Process & What Happens Next:</h3>
                    <ul className="list-disc list-inside space-y-2 text-sm">
                      <li><strong>Application Submission:</strong> You must submit your application in writing to the Commission.</li>
                      <li><strong>Application Fee:</strong> You will need to pay a prescribed fee upon registration.</li>
                      <li><strong>Certificate Issuance:</strong> If your application meets the conditions, the Commission will register you and provide a certificate of registration.</li>
                      <li><strong>Certificate Validity & Renewal:</strong> Your registration must be renewed every two years.</li>
                      <li><strong>Reporting Changes:</strong> You must notify the Commission in writing of any changes in your registered particulars within fourteen days.</li>
                      <li><strong>Cancellation:</strong> The Commission has the power to cancel a registration for good cause, for example, if you submit false or misleading information or fail to comply with the Act.</li>
                      <li><strong>Public Register:</strong> The Commission keeps a public Data Protection Register, available for inspection. You can obtain a certified copy or extract for a fee.</li>
                    </ul>
                  </div>

                  <div className="bg-amber-50 p-6 rounded-lg">
                    <h3 className="font-semibold mb-4">Penalties for Non-Compliance:</h3>
                    <p className="text-sm">
                      Knowingly supplying false information in support of an application is an offence, carrying potential fines or imprisonment. 
                      Failure to register when required is also an offence, punishable by a fine or imprisonment.
                    </p>
                  </div>

                  <div className="bg-muted p-6 rounded-lg">
                    <h3 className="font-semibold mb-4">Next Steps:</h3>
                    <Button variant="default" className="w-full" asChild>
                      <a href="https://dataprotection.org.gh" target="_blank" rel="noopener noreferrer">
                        Contact the Data Protection Commission (Ghana)
                      </a>
                    </Button>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="text-center mb-8">
                  <FileText className="h-12 w-12 text-green-500 mx-auto" />
                  <h2 className="text-2xl font-bold mt-4 mb-2">Registration Not Required</h2>
                  <p className="text-muted-foreground text-lg">
                    Based on your answers, your organisation does not currently fall under the definition of a Data Controller, 
                    therefore, registration with the Data Protection Commission is not a mandatory requirement for you.
                  </p>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-semibold mb-4">Next Steps:</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>No immediate action required</li>
                    <li>Monitor changes in your data processing activities</li>
                    <li>Re-assess if you begin processing personal data as a Data Controller</li>
                  </ul>
                </div>
              </>
            )}

            <div className="mt-8 flex flex-col sm:flex-row gap-4 items-center justify-center">
              <Button onClick={() => setShowResult(null)}>
                Start New Assessment
              </Button>
              <Button variant="outline" asChild>
                <Link to="/country/ghana">Back to Ghana Modules</Link>
              </Button>
            </div>
          </Card>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link to="/country/ghana" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Ghana Modules
        </Link>

        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Registration with the Data Protection Commission</h1>
          <p className="text-muted-foreground">
            This module helps you understand the requirements for registering your data processing activities with the 
            Data Protection Commission (DPC) in Ghana, as mandated by the Data Protection Act, 2012 (Act 843).
          </p>
          <div className="mt-4 p-4 bg-muted rounded-lg">
            <p className="text-sm text-muted-foreground">
              <strong>Personal data</strong> is any information about an individual who can be identified. 
              <strong> Processing</strong> means any operation or activity performed on data or personal data, 
              including collecting, using, storing, disclosing, or destroying it.
            </p>
          </div>
        </div>

        <Card className="p-8">
          <div className="flex items-center gap-2 mb-6">
            <h2 className="text-xl font-semibold">Do you intend to process personal data as a Data Controller in Ghana?</h2>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <HelpCircle className="h-5 w-5 text-muted-foreground hover:text-foreground" />
                </TooltipTrigger>
                <TooltipContent className="max-w-sm">
                  <p>A Data Controller is the person or organisation that decides why and how personal data is processed. This applies if you collect, use, store, or otherwise handle personal data.</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <div className="space-y-4">
            <Button
              variant="outline"
              className="w-full text-left p-4 h-auto justify-start hover:bg-blue-50 whitespace-normal text-wrap break-words"
              onClick={() => setShowResult("required")}
            >
              Yes, I intend to process personal data as a Data Controller
            </Button>
            <Button
              variant="outline"
              className="w-full text-left p-4 h-auto justify-start hover:bg-blue-50 whitespace-normal text-wrap break-words"
              onClick={() => setShowResult("not-required")}
            >
              No, I do not intend to process personal data as a Data Controller
            </Button>
          </div>
        </Card>
      </div>
    </Layout>
  );
};

export default GhanaRegistration;
