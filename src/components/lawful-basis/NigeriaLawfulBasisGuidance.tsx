
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, AlertCircle, FileText } from "lucide-react";

interface LawfulBasisTabProps {
  title: string;
  description: string;
  content: React.ReactNode;
}

const LawfulBasisTab = ({ title, description, content }: LawfulBasisTabProps) => (
  <Card>
    <CardHeader>
      <CardTitle className="text-lg">{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
    <CardContent className="space-y-4">
      {content}
    </CardContent>
  </Card>
);

export const NigeriaLawfulBasisGuidance = ({ selectedBasis }: { selectedBasis: string }) => {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold">Guidance on {selectedBasis}</h3>
      
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid grid-cols-3 mb-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="requirements">Requirements</TabsTrigger>
          <TabsTrigger value="documentation">Documentation</TabsTrigger>
        </TabsList>
        
        {selectedBasis === "Consent" && (
          <>
            <TabsContent value="overview">
              <LawfulBasisTab
                title="Consent as a Lawful Basis"
                description="When you rely on explicit and informed consent from data subjects"
                content={
                  <div className="space-y-4">
                    <p>
                      Under the NDPA, consent must be freely given, specific, informed, and unambiguous, with a clear 
                      affirmative action indicating agreement to data processing for stated purposes.
                    </p>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                      <p>Good for processing that is optional and where you can offer genuine choice.</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <AlertCircle className="h-5 w-5 text-amber-600 mt-1" />
                      <p>Not appropriate where there is a power imbalance or where users cannot realistically refuse.</p>
                    </div>
                  </div>
                }
              />
            </TabsContent>
            
            <TabsContent value="requirements">
              <LawfulBasisTab
                title="Requirements for Valid Consent"
                description="How to ensure your consent meets NDPA standards"
                content={
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <span>Must be freely given without coercion or negative consequences for refusal</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <span>Must be specific to particular processing operations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <span>Must be informed with clear explanations of what users are consenting to</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <span>Must involve an affirmative action (opt-in, not opt-out)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <span>Must be as easy to withdraw as it is to give</span>
                    </li>
                  </ul>
                }
              />
            </TabsContent>
            
            <TabsContent value="documentation">
              <LawfulBasisTab
                title="Documentation Requirements"
                description="What you need to document when relying on consent"
                content={
                  <div className="space-y-4">
                    <div className="flex items-start gap-2">
                      <FileText className="h-5 w-5 text-blue-600 mt-1" />
                      <p>Record when and how consent was obtained</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <FileText className="h-5 w-5 text-blue-600 mt-1" />
                      <p>Keep copies of consent language and mechanisms</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <FileText className="h-5 w-5 text-blue-600 mt-1" />
                      <p>Document procedures for withdrawing consent</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <FileText className="h-5 w-5 text-blue-600 mt-1" />
                      <p>Maintain records of consent withdrawals</p>
                    </div>
                  </div>
                }
              />
            </TabsContent>
          </>
        )}
        
        {selectedBasis === "Contractual Necessity" && (
          <>
            <TabsContent value="overview">
              <LawfulBasisTab
                title="Contractual Necessity as a Lawful Basis"
                description="When processing is necessary to fulfill a contract with the data subject"
                content={
                  <div className="space-y-4">
                    <p>
                      This basis applies when you need to process personal data to fulfill your contractual 
                      obligations to an individual or to take steps at their request before entering into a contract.
                    </p>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                      <p>Appropriate for core activities needed to deliver a contracted service.</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <AlertCircle className="h-5 w-5 text-amber-600 mt-1" />
                      <p>Limited to what is genuinely necessary, not just convenient or beneficial.</p>
                    </div>
                  </div>
                }
              />
            </TabsContent>
            
            <TabsContent value="requirements">
              <LawfulBasisTab
                title="Requirements for Contractual Necessity"
                description="How to correctly apply this basis"
                content={
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <span>A contract must exist or be in the process of being formed</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <span>The data subject must be a party to the contract</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <span>Processing must be objectively necessary to deliver the contracted service</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <span>There must be no less intrusive way to achieve the same result</span>
                    </li>
                  </ul>
                }
              />
            </TabsContent>
            
            <TabsContent value="documentation">
              <LawfulBasisTab
                title="Documentation Requirements"
                description="What you need to document when relying on contractual necessity"
                content={
                  <div className="space-y-4">
                    <div className="flex items-start gap-2">
                      <FileText className="h-5 w-5 text-blue-600 mt-1" />
                      <p>Identify the specific contract and the data subject's role</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <FileText className="h-5 w-5 text-blue-600 mt-1" />
                      <p>Document why each data element is necessary to fulfill the contract</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <FileText className="h-5 w-5 text-blue-600 mt-1" />
                      <p>Record why alternative approaches would not be sufficient</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <FileText className="h-5 w-5 text-blue-600 mt-1" />
                      <p>Maintain copies of relevant contract terms</p>
                    </div>
                  </div>
                }
              />
            </TabsContent>
          </>
        )}
        
        {selectedBasis === "Legal Obligation" && (
          <>
            <TabsContent value="overview">
              <LawfulBasisTab
                title="Legal Obligation as a Lawful Basis"
                description="When processing is necessary to comply with a legal requirement"
                content={
                  <div className="space-y-4">
                    <p>
                      This basis applies when you need to process personal data to comply with a Nigerian law, 
                      regulation, court order, or other binding legal requirement.
                    </p>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                      <p>Appropriate when processing is clearly required by law.</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <AlertCircle className="h-5 w-5 text-amber-600 mt-1" />
                      <p>The obligation must be specific and binding, not just a general guidance.</p>
                    </div>
                  </div>
                }
              />
            </TabsContent>
            
            <TabsContent value="requirements">
              <LawfulBasisTab
                title="Requirements for Legal Obligation"
                description="How to correctly apply this basis"
                content={
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <span>The legal obligation must be binding under Nigerian law</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <span>The processing must be genuinely necessary to comply with the obligation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <span>The specific legal provision or regulatory requirement should be identifiable</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <span>Processing should not go beyond what is required by the law</span>
                    </li>
                  </ul>
                }
              />
            </TabsContent>
            
            <TabsContent value="documentation">
              <LawfulBasisTab
                title="Documentation Requirements"
                description="What you need to document when relying on legal obligation"
                content={
                  <div className="space-y-4">
                    <div className="flex items-start gap-2">
                      <FileText className="h-5 w-5 text-blue-600 mt-1" />
                      <p>Identify the specific law, regulation, or legal instrument</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <FileText className="h-5 w-5 text-blue-600 mt-1" />
                      <p>Document how the processing fulfills the legal requirement</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <FileText className="h-5 w-5 text-blue-600 mt-1" />
                      <p>Record why the processing is necessary (not just convenient)</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <FileText className="h-5 w-5 text-blue-600 mt-1" />
                      <p>Keep records of legal advice received, if applicable</p>
                    </div>
                  </div>
                }
              />
            </TabsContent>
          </>
        )}
        
        {selectedBasis === "Vital Interests" && (
          <>
            <TabsContent value="overview">
              <LawfulBasisTab
                title="Vital Interests as a Lawful Basis"
                description="When processing is necessary to protect someone's life or physical integrity"
                content={
                  <div className="space-y-4">
                    <p>
                      This basis applies in situations where processing personal data is essential to protect 
                      someone's life or physical wellbeing, especially in emergency situations.
                    </p>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                      <p>Appropriate for emergency or life-or-death situations.</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <AlertCircle className="h-5 w-5 text-amber-600 mt-1" />
                      <p>Should be used narrowly and only when another basis cannot reasonably be used.</p>
                    </div>
                  </div>
                }
              />
            </TabsContent>
            
            <TabsContent value="requirements">
              <LawfulBasisTab
                title="Requirements for Vital Interests"
                description="How to correctly apply this basis"
                content={
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <span>A genuine life-or-death situation (or serious harm) must exist</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <span>The processing must be necessary to protect vital interests</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <span>You cannot reasonably use another lawful basis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <span>Processing should generally be limited to the duration of the emergency</span>
                    </li>
                  </ul>
                }
              />
            </TabsContent>
            
            <TabsContent value="documentation">
              <LawfulBasisTab
                title="Documentation Requirements"
                description="What you need to document when relying on vital interests"
                content={
                  <div className="space-y-4">
                    <div className="flex items-start gap-2">
                      <FileText className="h-5 w-5 text-blue-600 mt-1" />
                      <p>Record the nature of the emergency or threat</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <FileText className="h-5 w-5 text-blue-600 mt-1" />
                      <p>Document why the processing was necessary to protect vital interests</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <FileText className="h-5 w-5 text-blue-600 mt-1" />
                      <p>Explain why other lawful bases were not appropriate</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <FileText className="h-5 w-5 text-blue-600 mt-1" />
                      <p>Note when the processing under this basis ended</p>
                    </div>
                  </div>
                }
              />
            </TabsContent>
          </>
        )}
        
        {selectedBasis === "Public Interest" && (
          <>
            <TabsContent value="overview">
              <LawfulBasisTab
                title="Public Interest as a Lawful Basis"
                description="When processing is necessary for a task carried out in the public interest"
                content={
                  <div className="space-y-4">
                    <p>
                      This basis applies when you need to process personal data to perform a task in the public 
                      interest or in the exercise of official authority vested in you.
                    </p>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                      <p>Most relevant for public authorities or organizations performing public functions.</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <AlertCircle className="h-5 w-5 text-amber-600 mt-1" />
                      <p>Should be linked to specific public interest tasks or authority in law.</p>
                    </div>
                  </div>
                }
              />
            </TabsContent>
            
            <TabsContent value="requirements">
              <LawfulBasisTab
                title="Requirements for Public Interest"
                description="How to correctly apply this basis"
                content={
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <span>The processing must be necessary for a function of public interest</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <span>The function should have a clear basis in law or official authority</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <span>The processing must be proportionate to the public interest aim</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <span>Consider and document impact on individuals' privacy rights</span>
                    </li>
                  </ul>
                }
              />
            </TabsContent>
            
            <TabsContent value="documentation">
              <LawfulBasisTab
                title="Documentation Requirements"
                description="What you need to document when relying on public interest"
                content={
                  <div className="space-y-4">
                    <div className="flex items-start gap-2">
                      <FileText className="h-5 w-5 text-blue-600 mt-1" />
                      <p>Identify the specific public interest or official function</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <FileText className="h-5 w-5 text-blue-600 mt-1" />
                      <p>Document the legal basis for the public task or authority</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <FileText className="h-5 w-5 text-blue-600 mt-1" />
                      <p>Record why the processing is necessary to achieve the public interest aim</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <FileText className="h-5 w-5 text-blue-600 mt-1" />
                      <p>Document your proportionality assessment</p>
                    </div>
                  </div>
                }
              />
            </TabsContent>
          </>
        )}
        
        {selectedBasis === "Legitimate Interests" && (
          <>
            <TabsContent value="overview">
              <LawfulBasisTab
                title="Legitimate Interests as a Lawful Basis"
                description="When processing is necessary for legitimate interests that don't override data subject rights"
                content={
                  <div className="space-y-4">
                    <p>
                      This basis applies when processing is necessary for your legitimate interests or those of a 
                      third party, provided these interests don't override the fundamental rights and freedoms of the data subject.
                    </p>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                      <p>The most flexible lawful basis, but requires rigorous assessment.</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <AlertCircle className="h-5 w-5 text-amber-600 mt-1" />
                      <p>Requires balance between your interests and individual rights.</p>
                    </div>
                  </div>
                }
              />
            </TabsContent>
            
            <TabsContent value="requirements">
              <LawfulBasisTab
                title="Requirements for Legitimate Interests"
                description="How to correctly apply this basis"
                content={
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <span>Identify a specific legitimate interest (yours or a third party's)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <span>Show that the processing is necessary to achieve that interest</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <span>Balance your interests against the individual's rights and interests</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <span>Per NDPA Section 25, ensure the interest does not override fundamental rights</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <span>Consider whether data subjects would reasonably expect the processing</span>
                    </li>
                  </ul>
                }
              />
            </TabsContent>
            
            <TabsContent value="documentation">
              <LawfulBasisTab
                title="Documentation Requirements"
                description="What you need to document when relying on legitimate interests"
                content={
                  <div className="space-y-4">
                    <div className="flex items-start gap-2">
                      <FileText className="h-5 w-5 text-blue-600 mt-1" />
                      <p>Conduct and document a Legitimate Interest Assessment (LIA)</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <FileText className="h-5 w-5 text-blue-600 mt-1" />
                      <p>Identify the specific legitimate interest being pursued</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <FileText className="h-5 w-5 text-blue-600 mt-1" />
                      <p>Record your necessity assessment</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <FileText className="h-5 w-5 text-blue-600 mt-1" />
                      <p>Document your balancing test between your interests and individual rights</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <FileText className="h-5 w-5 text-blue-600 mt-1" />
                      <p>Record any safeguards implemented to protect data subjects</p>
                    </div>
                  </div>
                }
              />
            </TabsContent>
          </>
        )}
      </Tabs>
    </div>
  );
};
