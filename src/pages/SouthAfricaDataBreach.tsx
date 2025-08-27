import { Layout } from "@/components/shared/Layout";
import { AssessmentInterface, Question } from "@/components/shared/AssessmentInterface";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const dataBreachQuestions: Question[] = [
  {
    id: 1,
    text: "Have you discovered that personal information in your possession or under your control has been lost, destroyed, damaged, or accessed by someone who was not authorised?",
    tooltip: "This includes incidents where personal information is accidentally released, stolen, or otherwise compromised. If you are an Operator (processing data for someone else), you must notify the Responsible Party (the organisation you work for) immediately upon discovering the compromise.",
    options: {
      yes: { nextQuestion: 2 },
      no: { 
        nextQuestion: null,
        message: "No reportable personal information compromise identified."
      }
    }
  },
  {
    id: 2,
    text: "Do you have reasonable grounds to believe that the compromised personal information can be linked to an identifiable individual?",
    tooltip: "This means the information is not fully de-identified or anonymous. For example, it could be names, ID numbers, email addresses, or combinations of information that could reveal a person's identity.",
    options: {
      yes: { 
        nextQuestion: null,
        message: "**Immediate Notification Required**\n\nYou must notify the Information Regulator and affected individuals.\n\n**Explanation:** You have identified a personal information security compromise involving identifiable individuals. POPIA requires prompt action to protect those affected.\n\n**Key Actions & Timeline:**\n- You, as the Responsible Party, must notify the Information Regulator and the affected data subjects as soon as reasonably possible after discovering the compromise.\n- **Operator's Role:** If you are an Operator, you must notify the Responsible Party immediately upon discovering the compromise. The Responsible Party then must notify the Regulator and data subjects.\n\n**How to Notify the Information Regulator (New as of April 2025):**\n- All security compromises must be reported via the Information Regulator's online eServices portal\n- Reporting via email or older forms is no longer sufficient and may be considered non-compliant\n- Access the eServices portal here: https://eservices.inforegulator.org.za\n\n**What to Include in the Notification to Affected Individuals:**\nYour notification to affected individuals must be in writing and provide sufficient information to allow them to take protective measures. This includes:\n- A description of the possible consequences of the compromise\n- A description of the measures you have taken or propose to take to address the compromise\n- A recommendation of measures the data subject can take to mitigate possible adverse effects\n- The identity of the unauthorised person who may have accessed or acquired the personal information, if known\n\n**How to Notify Individuals:** This can be done by mail, email, a prominent placement on your website, publication in the news media, or any other method the Regulator directs.\n\n**Delaying Notification to Individuals:** You may only delay notifying the affected data subjects if a public body (like a security agency or the Regulator itself) determines that notification would impede a criminal investigation.\n\n**Regulator's Authority:** The Information Regulator may also direct you to publicise the compromise in any manner if they believe it would protect affected data subjects.\n\n**Next Steps:**\n- Access the Information Regulator's eServices portal: https://eservices.inforegulator.org.za\n- Contact the Information Regulator (South Africa) for further guidance\n- Seek professional legal advice if unsure about your obligations"
      },
      no: { 
        nextQuestion: null,
        message: "**No notification required for de-identified data.**\n\nThe personal information compromised was either de-identified or otherwise not linked to identifiable individuals, therefore, formal notification obligations under POPIA do not apply. Maintaining strong de-identification practices is key.\n\n**Next Steps:**\n- Continue to monitor and improve your security practices\n- Review your de-identification procedures to ensure they remain effective"
      }
    }
  }
];

const SouthAfricaDataBreach = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="container py-8 space-y-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Data Breach Notification Assessment</h1>
          
          <div className="bg-muted/50 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold mb-3">About Data Breaches Under POPIA</h2>
            <p className="text-muted-foreground mb-4">
              This module guides you through the process of identifying and responding to a personal information security compromise, 
              also known as a data breach, under South Africa's Protection of Personal Information Act (POPIA).
            </p>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-primary mb-2">What is a Personal Information Security Compromise?</h3>
                <p className="text-sm text-muted-foreground">
                  A personal information security compromise (data breach) occurs when personal information in your possession 
                  or control is lost, damaged, destroyed, or accessed by someone who is not authorised to do so. This can happen 
                  either accidentally or intentionally.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-primary mb-2">Why This Assessment Matters</h3>
                <p className="text-sm text-muted-foreground">
                  Understanding whether you have experienced a reportable breach and your notification obligations is crucial 
                  for compliance with POPIA and protecting affected individuals. The assessment will help you determine if 
                  immediate action is required.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-primary mb-2">Important Update (April 2025)</h3>
                <p className="text-sm text-muted-foreground">
                  All security compromises must now be reported via the Information Regulator's online eServices portal. 
                  Reporting via email or older forms is no longer sufficient and may be considered non-compliant.
                </p>
              </div>
            </div>
          </div>

          <AssessmentInterface
            title="Determine Your Data Breach Notification Obligations"
            questions={dataBreachQuestions}
          />

          <div className="mt-8 text-center">
            <Button 
              variant="outline" 
              onClick={() => navigate("/countries/south-africa")}
              className="w-full sm:w-auto"
            >
              Take Other South Africa Assessments
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SouthAfricaDataBreach;