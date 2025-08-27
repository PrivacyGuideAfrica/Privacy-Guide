import { AssessmentInterface, Question } from '@/components/shared/AssessmentInterface';
import { Layout } from '@/components/shared/Layout';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const responsiblePartyQuestions: Question[] = [
  {
    id: 1,
    text: "Do you, alone or together with others, decide why personal information is processed?",
    tooltip: "This means you determine the main reason or objective for collecting and using the information.",
    options: {
      yes: { nextQuestion: 2 },
      no: { nextQuestion: 3 },
      notSure: { nextQuestion: 2 }
    }
  },
  {
    id: 2,
    text: "Do you, alone or together with others, also decide how personal information is processed?",
    tooltip: "This means you determine the methods, tools, and steps involved in handling the information.",
    options: {
      yes: { 
        nextQuestion: null,
        message: "You are a Responsible Party. As you determine both the purpose (why) and the means (how) personal information is processed, you are considered the Responsible Party. This makes you the primary entity accountable for ensuring the lawful processing of that personal information."
      },
      no: { 
        nextQuestion: null,
        message: "You are a Responsible Party. As you determine both the purpose (why) and the means (how) personal information is processed, you are considered the Responsible Party. This makes you the primary entity accountable for ensuring the lawful processing of that personal information."
      },
      notSure: { 
        nextQuestion: null,
        message: "You are a Responsible Party. As you determine both the purpose (why) and the means (how) personal information is processed, you are considered the Responsible Party. This makes you the primary entity accountable for ensuring the lawful processing of that personal information."
      }
    }
  },
  {
    id: 3,
    text: "Are you authorised to process personal information on behalf of another person or organisation (a Responsible Party)?",
    tooltip: "This means you handle the information strictly following someone else's instructions and do not decide why or how it is used yourself.",
    options: {
      yes: { 
        nextQuestion: null,
        message: "You are an Operator. You process personal information on behalf of a Responsible Party, following their instructions, without determining the purpose or means of processing. Operators have specific duties, including maintaining security safeguards."
      },
      no: { 
        nextQuestion: null,
        message: "Your role is not clear from these definitions. If you do not determine the purpose or means of processing, and you are not processing data on behalf of another party, your activities may fall outside the direct scope of POPIA, or your specific role may require further analysis."
      },
      notSure: { 
        nextQuestion: null,
        message: "Your role is not clear from these definitions. If you do not determine the purpose or means of processing, and you are not processing data on behalf of another party, your activities may fall outside the direct scope of POPIA, or your specific role may require further analysis."
      }
    }
  }
];

export default function SouthAfricaResponsibleParty() {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-foreground mb-4">
                Responsible Party vs Operator Assessment
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                Determine your role under South Africa's Protection of Personal Information Act (POPIA)
              </p>
            </div>

            <div className="bg-card rounded-lg shadow-lg p-8 mb-8">
              <div className="prose prose-slate max-w-none mb-8">
                <p className="text-muted-foreground text-lg leading-relaxed">
                  This module helps you determine whether you are a "Responsible Party" or an "Operator" under POPIA. 
                  Knowing your role is crucial for understanding your specific responsibilities when handling personal information.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-muted/30 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-foreground mb-3">Responsible Party</h3>
                    <p className="text-muted-foreground">
                      A public or private body, or any other person, that alone or jointly with others, determines 
                      the purpose (why) and means (how) for processing personal information. They are the primary 
                      decision-maker for the data.
                    </p>
                  </div>

                  <div className="bg-muted/30 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-foreground mb-3">Operator</h3>
                    <p className="text-muted-foreground">
                      A person who processes personal information for a Responsible Party, typically under a contract 
                      or mandate. They act on the Responsible Party's instructions without determining the purpose or 
                      means of processing themselves, and they do not come under the Responsible Party's direct authority.
                    </p>
                  </div>
                </div>
              </div>

              <AssessmentInterface
                title="Ascertaining Your Role"
                questions={responsiblePartyQuestions}
                onComplete={() => {}}
                onReset={() => {}}
              />

              <div className="mt-8 text-center">
                <Button 
                  onClick={() => navigate('/countries/south-africa')}
                  variant="outline"
                >
                  Take Other South Africa Assessments
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}