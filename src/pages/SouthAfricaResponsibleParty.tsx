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
        message: `<div class="space-y-6">
          <div class="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
            <h3 class="text-xl font-bold text-blue-900 mb-2">🏛️ You are a Responsible Party</h3>
            <p class="text-blue-800">As you determine both the purpose (why) and the means (how) personal information is processed, you are the primary entity accountable for ensuring lawful processing under POPIA.</p>
          </div>
          
          <div class="space-y-4">
            <h4 class="text-lg font-semibold text-gray-900">Key Obligations & Responsibilities:</h4>
            
            <div class="grid gap-3">
              <div class="border-l-3 border-orange-400 pl-3">
                <h5 class="font-medium text-gray-900">1. Lawful Processing</h5>
                <p class="text-sm text-gray-700">Process personal information in a lawful and reasonable manner that does not infringe on data subjects' privacy rights.</p>
              </div>
              
              <div class="border-l-3 border-orange-400 pl-3">
                <h5 class="font-medium text-gray-900">2. Purpose Specification</h5>
                <p class="text-sm text-gray-700">Collect personal information only for specific, explicitly defined, and lawful purposes related to your functions or activities.</p>
              </div>
              
              <div class="border-l-3 border-orange-400 pl-3">
                <h5 class="font-medium text-gray-900">3. Processing Limitation</h5>
                <p class="text-sm text-gray-700">Process only personal information that is necessary for your stated purpose - avoid excessive collection.</p>
              </div>
              
              <div class="border-l-3 border-orange-400 pl-3">
                <h5 class="font-medium text-gray-900">4. Data Minimisation</h5>
                <p class="text-sm text-gray-700">Collect the least amount of personal information possible to achieve your purpose.</p>
              </div>
              
              <div class="border-l-3 border-orange-400 pl-3">
                <h5 class="font-medium text-gray-900">5. Information Quality</h5>
                <p class="text-sm text-gray-700">Ensure personal information is complete, accurate, not misleading, and updated when necessary.</p>
              </div>
              
              <div class="border-l-3 border-orange-400 pl-3">
                <h5 class="font-medium text-gray-900">6. Openness & Documentation</h5>
                <p class="text-sm text-gray-700">Be transparent about processing activities, document all operations, and notify data subjects when collecting their information.</p>
              </div>
              
              <div class="border-l-3 border-orange-400 pl-3">
                <h5 class="font-medium text-gray-900">7. Security Safeguards</h5>
                <p class="text-sm text-gray-700">Implement reasonable technical and organisational measures to prevent loss, damage, or unauthorised access to personal information.</p>
              </div>
              
              <div class="border-l-3 border-orange-400 pl-3">
                <h5 class="font-medium text-gray-900">8. Data Subject Participation</h5>
                <p class="text-sm text-gray-700">Allow data subjects to access their personal information and request corrections when needed.</p>
              </div>
              
              <div class="border-l-3 border-orange-400 pl-3">
                <h5 class="font-medium text-gray-900">9. Breach Notification</h5>
                <p class="text-sm text-gray-700">Immediately notify both the Information Regulator and affected data subjects of any security breaches involving unauthorised access.</p>
              </div>
              
              <div class="border-l-3 border-orange-400 pl-3">
                <h5 class="font-medium text-gray-900">10. Information Officer Appointment</h5>
                <p class="text-sm text-gray-700">Appoint an Information Officer (typically the CEO for private bodies) and register them with the Information Regulator before beginning operations.</p>
              </div>
              
              <div class="border-l-3 border-orange-400 pl-3">
                <h5 class="font-medium text-gray-900">11. Operator Contracts</h5>
                <p class="text-sm text-gray-700">Ensure written contracts with operators that require proper security measures. You remain liable for any breaches caused by operators.</p>
              </div>
              
              <div class="border-l-3 border-orange-400 pl-3">
                <h5 class="font-medium text-gray-900">12. Direct Marketing Compliance</h5>
                <p class="text-sm text-gray-700">Only send electronic marketing communications with data subject consent or to existing customers under specific conditions.</p>
              </div>
            </div>
          </div>
          
          <div class="bg-amber-50 border border-amber-200 p-4 rounded-lg">
            <p class="text-sm text-amber-800"><strong>⚠️ Critical:</strong> As a Responsible Party, you hold primary accountability to the Information Regulator for all POPIA compliance matters, including actions of your operators.</p>
          </div>
        </div>`
      },
      no: { 
        nextQuestion: null,
        message: `<div class="space-y-6">
          <div class="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
            <h3 class="text-xl font-bold text-blue-900 mb-2">🏛️ You are a Responsible Party</h3>
            <p class="text-blue-800">As you determine both the purpose (why) and the means (how) personal information is processed, you are the primary entity accountable for ensuring lawful processing under POPIA.</p>
          </div>
          
          <div class="space-y-4">
            <h4 class="text-lg font-semibold text-gray-900">Key Obligations & Responsibilities:</h4>
            
            <div class="grid gap-3">
              <div class="border-l-3 border-orange-400 pl-3">
                <h5 class="font-medium text-gray-900">1. Lawful Processing</h5>
                <p class="text-sm text-gray-700">Process personal information in a lawful and reasonable manner that does not infringe on data subjects' privacy rights.</p>
              </div>
              
              <div class="border-l-3 border-orange-400 pl-3">
                <h5 class="font-medium text-gray-900">2. Purpose Specification</h5>
                <p class="text-sm text-gray-700">Collect personal information only for specific, explicitly defined, and lawful purposes related to your functions or activities.</p>
              </div>
              
              <div class="border-l-3 border-orange-400 pl-3">
                <h5 class="font-medium text-gray-900">3. Processing Limitation</h5>
                <p class="text-sm text-gray-700">Process only personal information that is necessary for your stated purpose - avoid excessive collection.</p>
              </div>
              
              <div class="border-l-3 border-orange-400 pl-3">
                <h5 class="font-medium text-gray-900">4. Data Minimisation</h5>
                <p class="text-sm text-gray-700">Collect the least amount of personal information possible to achieve your purpose.</p>
              </div>
              
              <div class="border-l-3 border-orange-400 pl-3">
                <h5 class="font-medium text-gray-900">5. Information Quality</h5>
                <p class="text-sm text-gray-700">Ensure personal information is complete, accurate, not misleading, and updated when necessary.</p>
              </div>
              
              <div class="border-l-3 border-orange-400 pl-3">
                <h5 class="font-medium text-gray-900">6. Openness & Documentation</h5>
                <p class="text-sm text-gray-700">Be transparent about processing activities, document all operations, and notify data subjects when collecting their information.</p>
              </div>
              
              <div class="border-l-3 border-orange-400 pl-3">
                <h5 class="font-medium text-gray-900">7. Security Safeguards</h5>
                <p class="text-sm text-gray-700">Implement reasonable technical and organisational measures to prevent loss, damage, or unauthorised access to personal information.</p>
              </div>
              
              <div class="border-l-3 border-orange-400 pl-3">
                <h5 class="font-medium text-gray-900">8. Data Subject Participation</h5>
                <p class="text-sm text-gray-700">Allow data subjects to access their personal information and request corrections when needed.</p>
              </div>
              
              <div class="border-l-3 border-orange-400 pl-3">
                <h5 class="font-medium text-gray-900">9. Breach Notification</h5>
                <p class="text-sm text-gray-700">Immediately notify both the Information Regulator and affected data subjects of any security breaches involving unauthorised access.</p>
              </div>
              
              <div class="border-l-3 border-orange-400 pl-3">
                <h5 class="font-medium text-gray-900">10. Information Officer Appointment</h5>
                <p class="text-sm text-gray-700">Appoint an Information Officer (typically the CEO for private bodies) and register them with the Information Regulator before beginning operations.</p>
              </div>
              
              <div class="border-l-3 border-orange-400 pl-3">
                <h5 class="font-medium text-gray-900">11. Operator Contracts</h5>
                <p class="text-sm text-gray-700">Ensure written contracts with operators that require proper security measures. You remain liable for any breaches caused by operators.</p>
              </div>
              
              <div class="border-l-3 border-orange-400 pl-3">
                <h5 class="font-medium text-gray-900">12. Direct Marketing Compliance</h5>
                <p class="text-sm text-gray-700">Only send electronic marketing communications with data subject consent or to existing customers under specific conditions.</p>
              </div>
            </div>
          </div>
          
          <div class="bg-amber-50 border border-amber-200 p-4 rounded-lg">
            <p class="text-sm text-amber-800"><strong>⚠️ Critical:</strong> As a Responsible Party, you hold primary accountability to the Information Regulator for all POPIA compliance matters, including actions of your operators.</p>
          </div>
        </div>`
      },
      notSure: { 
        nextQuestion: null,
        message: `<div class="space-y-6">
          <div class="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-lg">
            <h3 class="text-xl font-bold text-gray-900 mb-2">❓ Your Role Under POPIA is Unclear</h3>
            <p class="text-gray-800">Based on your responses, your specific role in personal information processing may fall outside the direct scope of POPIA definitions, or requires further detailed analysis.</p>
          </div>
          
          <div class="space-y-4">
            <h4 class="text-lg font-semibold text-gray-900">Recommended Next Steps:</h4>
            
            <div class="grid gap-3">
              <div class="border-l-3 border-purple-400 pl-3">
                <h5 class="font-medium text-gray-900">1. Detailed Role Analysis</h5>
                <p class="text-sm text-gray-700">Conduct a comprehensive review of your data handling activities, including what information you collect, why you collect it, and how you process it.</p>
              </div>
              
              <div class="border-l-3 border-purple-400 pl-3">
                <h5 class="font-medium text-gray-900">2. Legal Consultation</h5>
                <p class="text-sm text-gray-700">Consider consulting with a privacy law specialist or data protection expert who can assess your specific circumstances and business model.</p>
              </div>
              
              <div class="border-l-3 border-purple-400 pl-3">
                <h5 class="font-medium text-gray-900">3. Document Your Processing Activities</h5>
                <p class="text-sm text-gray-700">Create a comprehensive record of all personal information processing activities, including purposes, legal bases, and data flows.</p>
              </div>
              
              <div class="border-l-3 border-purple-400 pl-3">
                <h5 class="font-medium text-gray-900">4. Review Contractual Relationships</h5>
                <p class="text-sm text-gray-700">Examine any agreements or relationships with other parties who may be processing personal information in connection with your activities.</p>
              </div>
            </div>
          </div>
          
          <div class="bg-blue-50 border border-blue-200 p-4 rounded-lg">
            <h5 class="font-medium text-blue-900 mb-2">🔍 Possible Scenarios:</h5>
            <ul class="text-sm text-blue-800 space-y-1 list-disc list-inside">
              <li><strong>Joint Responsible Party:</strong> You may share responsibility with another party</li>
              <li><strong>Processor for Multiple Parties:</strong> You may process for different controllers</li>
              <li><strong>Minimal Processing:</strong> Your activities may not trigger POPIA obligations</li>
              <li><strong>Exempt Entity:</strong> You may qualify for specific exemptions under POPIA</li>
              <li><strong>Third Party:</strong> You may be a third party recipient rather than a processor</li>
            </ul>
          </div>
          
          <div class="bg-orange-50 border border-orange-200 p-4 rounded-lg">
            <h5 class="font-medium text-orange-900 mb-2">📞 Resources for Clarification:</h5>
            <ul class="text-sm text-orange-800 space-y-1 list-disc list-inside">
              <li>Information Regulator of South Africa guidance documents</li>
              <li>POPIA compliance frameworks and sector-specific guidance</li>
              <li>Professional legal or privacy consulting services</li>
              <li>Industry associations and privacy professional networks</li>
            </ul>
          </div>
          
          <div class="bg-red-50 border border-red-200 p-4 rounded-lg">
            <p class="text-sm text-red-800"><strong>⚠️ Caution:</strong> Even if your role is unclear, consider implementing basic privacy protection measures as a precautionary approach until you can determine your exact obligations under POPIA.</p>
          </div>
        </div>`
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
        message: `<div class="space-y-6">
          <div class="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg">
            <h3 class="text-xl font-bold text-green-900 mb-2">⚙️ You are an Operator</h3>
            <p class="text-green-800">You process personal information on behalf of a Responsible Party, following their instructions, without determining the purpose or means of processing yourself.</p>
          </div>
          
          <div class="space-y-4">
            <h4 class="text-lg font-semibold text-gray-900">Key Obligations & Responsibilities:</h4>
            
            <div class="grid gap-3">
              <div class="border-l-3 border-green-400 pl-3">
                <h5 class="font-medium text-gray-900">1. Processing on Instruction Only</h5>
                <p class="text-sm text-gray-700">You must only process personal information with the knowledge and authorization of the Responsible Party. Act strictly within the parameters of your agreement and do not exceed your mandate.</p>
              </div>
              
              <div class="border-l-3 border-green-400 pl-3">
                <h5 class="font-medium text-gray-900">2. Confidentiality Requirements</h5>
                <p class="text-sm text-gray-700">Treat all personal information as confidential and do not disclose it unless required by law or in the course of performing your duties as outlined in your contract.</p>
              </div>
              
              <div class="border-l-3 border-green-400 pl-3">
                <h5 class="font-medium text-gray-900">3. Security Measures Implementation</h5>
                <p class="text-sm text-gray-700">Establish and maintain appropriate technical and organisational security measures to protect personal information you process on behalf of the Responsible Party.</p>
              </div>
              
              <div class="border-l-3 border-green-400 pl-3">
                <h5 class="font-medium text-gray-900">4. Immediate Breach Notification</h5>
                <p class="text-sm text-gray-700">If you have reasonable grounds to believe a security compromise has occurred involving personal information, notify the Responsible Party immediately.</p>
              </div>
              
              <div class="border-l-3 border-green-400 pl-3">
                <h5 class="font-medium text-gray-900">5. Subcontracting Restrictions</h5>
                <p class="text-sm text-gray-700">You should limit or prohibit appointing additional operators (sub-processors) without the Responsible Party's prior knowledge and explicit consent.</p>
              </div>
            </div>
          </div>
          
          <div class="bg-blue-50 border border-blue-200 p-4 rounded-lg">
            <h5 class="font-medium text-blue-900 mb-2">📋 Key Contractual Requirements:</h5>
            <ul class="text-sm text-blue-800 space-y-1 list-disc list-inside">
              <li>Written contract or mandate with the Responsible Party</li>
              <li>Clear definition of processing scope and limitations</li>
              <li>Specification of security measures required</li>
              <li>Data retention and deletion procedures</li>
              <li>Incident response and breach notification protocols</li>
            </ul>
          </div>
          
          <div class="bg-amber-50 border border-amber-200 p-4 rounded-lg">
            <p class="text-sm text-amber-800"><strong>⚠️ Important:</strong> While the Responsible Party holds ultimate liability to the Information Regulator, you are contractually bound to fulfill these obligations and can be held liable for breaches caused by non-compliance.</p>
          </div>
        </div>`
      },
      no: { 
        nextQuestion: null,
        message: `<div class="space-y-6">
          <div class="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-lg">
            <h3 class="text-xl font-bold text-gray-900 mb-2">❓ Your Role Under POPIA is Unclear</h3>
            <p class="text-gray-800">Based on your responses, your specific role in personal information processing may fall outside the direct scope of POPIA definitions, or requires further detailed analysis.</p>
          </div>
          
          <div class="space-y-4">
            <h4 class="text-lg font-semibold text-gray-900">Recommended Next Steps:</h4>
            
            <div class="grid gap-3">
              <div class="border-l-3 border-purple-400 pl-3">
                <h5 class="font-medium text-gray-900">1. Detailed Role Analysis</h5>
                <p class="text-sm text-gray-700">Conduct a comprehensive review of your data handling activities, including what information you collect, why you collect it, and how you process it.</p>
              </div>
              
              <div class="border-l-3 border-purple-400 pl-3">
                <h5 class="font-medium text-gray-900">2. Legal Consultation</h5>
                <p class="text-sm text-gray-700">Consider consulting with a privacy law specialist or data protection expert who can assess your specific circumstances and business model.</p>
              </div>
              
              <div class="border-l-3 border-purple-400 pl-3">
                <h5 class="font-medium text-gray-900">3. Document Your Processing Activities</h5>
                <p class="text-sm text-gray-700">Create a comprehensive record of all personal information processing activities, including purposes, legal bases, and data flows.</p>
              </div>
              
              <div class="border-l-3 border-purple-400 pl-3">
                <h5 class="font-medium text-gray-900">4. Review Contractual Relationships</h5>
                <p class="text-sm text-gray-700">Examine any agreements or relationships with other parties who may be processing personal information in connection with your activities.</p>
              </div>
            </div>
          </div>
          
          <div class="bg-blue-50 border border-blue-200 p-4 rounded-lg">
            <h5 class="font-medium text-blue-900 mb-2">🔍 Possible Scenarios:</h5>
            <ul class="text-sm text-blue-800 space-y-1 list-disc list-inside">
              <li><strong>Joint Responsible Party:</strong> You may share responsibility with another party</li>
              <li><strong>Processor for Multiple Parties:</strong> You may process for different controllers</li>
              <li><strong>Minimal Processing:</strong> Your activities may not trigger POPIA obligations</li>
              <li><strong>Exempt Entity:</strong> You may qualify for specific exemptions under POPIA</li>
              <li><strong>Third Party:</strong> You may be a third party recipient rather than a processor</li>
            </ul>
          </div>
          
          <div class="bg-orange-50 border border-orange-200 p-4 rounded-lg">
            <h5 class="font-medium text-orange-900 mb-2">📞 Resources for Clarification:</h5>
            <ul class="text-sm text-orange-800 space-y-1 list-disc list-inside">
              <li>Information Regulator of South Africa guidance documents</li>
              <li>POPIA compliance frameworks and sector-specific guidance</li>
              <li>Professional legal or privacy consulting services</li>
              <li>Industry associations and privacy professional networks</li>
            </ul>
          </div>
          
          <div class="bg-red-50 border border-red-200 p-4 rounded-lg">
            <p class="text-sm text-red-800"><strong>⚠️ Caution:</strong> Even if your role is unclear, consider implementing basic privacy protection measures as a precautionary approach until you can determine your exact obligations under POPIA.</p>
          </div>
        </div>`
      },
      notSure: { 
        nextQuestion: null,
        message: `<div class="space-y-6">
          <div class="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r-lg">
            <h3 class="text-xl font-bold text-gray-900 mb-2">❓ Your Role Under POPIA is Unclear</h3>
            <p class="text-gray-800">Based on your responses, your specific role in personal information processing may fall outside the direct scope of POPIA definitions, or requires further detailed analysis.</p>
          </div>
          
          <div class="space-y-4">
            <h4 class="text-lg font-semibold text-gray-900">Recommended Next Steps:</h4>
            
            <div class="grid gap-3">
              <div class="border-l-3 border-purple-400 pl-3">
                <h5 class="font-medium text-gray-900">1. Detailed Role Analysis</h5>
                <p class="text-sm text-gray-700">Conduct a comprehensive review of your data handling activities, including what information you collect, why you collect it, and how you process it.</p>
              </div>
              
              <div class="border-l-3 border-purple-400 pl-3">
                <h5 class="font-medium text-gray-900">2. Legal Consultation</h5>
                <p class="text-sm text-gray-700">Consider consulting with a privacy law specialist or data protection expert who can assess your specific circumstances and business model.</p>
              </div>
              
              <div class="border-l-3 border-purple-400 pl-3">
                <h5 class="font-medium text-gray-900">3. Document Your Processing Activities</h5>
                <p class="text-sm text-gray-700">Create a comprehensive record of all personal information processing activities, including purposes, legal bases, and data flows.</p>
              </div>
              
              <div class="border-l-3 border-purple-400 pl-3">
                <h5 class="font-medium text-gray-900">4. Review Contractual Relationships</h5>
                <p class="text-sm text-gray-700">Examine any agreements or relationships with other parties who may be processing personal information in connection with your activities.</p>
              </div>
            </div>
          </div>
          
          <div class="bg-blue-50 border border-blue-200 p-4 rounded-lg">
            <h5 class="font-medium text-blue-900 mb-2">🔍 Possible Scenarios:</h5>
            <ul class="text-sm text-blue-800 space-y-1 list-disc list-inside">
              <li><strong>Joint Responsible Party:</strong> You may share responsibility with another party</li>
              <li><strong>Processor for Multiple Parties:</strong> You may process for different controllers</li>
              <li><strong>Minimal Processing:</strong> Your activities may not trigger POPIA obligations</li>
              <li><strong>Exempt Entity:</strong> You may qualify for specific exemptions under POPIA</li>
              <li><strong>Third Party:</strong> You may be a third party recipient rather than a processor</li>
            </ul>
          </div>
          
          <div class="bg-orange-50 border border-orange-200 p-4 rounded-lg">
            <h5 class="font-medium text-orange-900 mb-2">📞 Resources for Clarification:</h5>
            <ul class="text-sm text-orange-800 space-y-1 list-disc list-inside">
              <li>Information Regulator of South Africa guidance documents</li>
              <li>POPIA compliance frameworks and sector-specific guidance</li>
              <li>Professional legal or privacy consulting services</li>
              <li>Industry associations and privacy professional networks</li>
            </ul>
          </div>
          
          <div class="bg-red-50 border border-red-200 p-4 rounded-lg">
            <p class="text-sm text-red-800"><strong>⚠️ Caution:</strong> Even if your role is unclear, consider implementing basic privacy protection measures as a precautionary approach until you can determine your exact obligations under POPIA.</p>
          </div>
        </div>`
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
              <AssessmentInterface
                title="Ascertaining Your Role"
                questions={responsiblePartyQuestions}
                onComplete={() => {}}
                onReset={() => {}}
                introContent={
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
                }
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