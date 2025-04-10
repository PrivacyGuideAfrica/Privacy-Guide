
import { AlertTriangle, Info } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const RwandaControllerProcessorDescription = () => {
  return (
    <div className="space-y-6">
      <Alert>
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Assessment Overview</AlertTitle>
        <AlertDescription>
          This assessment will help you understand whether your organization is operating as a Data Controller, 
          Data Processor, or has a dual role under Rwanda's Data Protection Law.
        </AlertDescription>
      </Alert>

      <div className="text-sm text-muted-foreground space-y-2">
        <p>Understanding your role under Rwanda's Data Protection Law is crucial for compliance:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Data Controllers decide how and why personal data is processed.</li>
          <li>Data Processors act on instructions from controllers when handling personal data.</li>
          <li>Some organizations have dual roles depending on different processing activities.</li>
        </ul>
        <p className="mt-2">Identifying your correct role determines your specific legal obligations.</p>
      </div>
      
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="controller">
          <AccordionTrigger className="text-sm font-medium">
            Data Controller - Who decides how and why data is used
          </AccordionTrigger>
          <AccordionContent className="text-sm">
            <div className="space-y-3">
              <div>
                <p className="font-medium">Definition</p>
                <p className="text-muted-foreground">
                  A Data Controller is a person or entity (public, private, or legal) that alone or jointly 
                  determines how and why personal data is processed. They hold the decision-making power 
                  regarding data collection, use, and disclosure.
                </p>
              </div>
              
              <div>
                <p className="font-medium">When You're Likely a Controller</p>
                <ul className="list-disc pl-5 text-muted-foreground">
                  <li>You decide which personal data is collected and from whom.</li>
                  <li>You determine the lawful basis for processing and the retention period.</li>
                  <li>You choose whether to share data (and with whom).</li>
                  <li>You have a direct relationship with data subjects, such as employees or customers.</li>
                  <li>You have autonomy over the processing, possibly hiring processors to act on your behalf.</li>
                </ul>
              </div>
              
              <div>
                <p className="font-medium">Key Obligations</p>
                <ul className="list-disc pl-5 text-muted-foreground">
                  <li>Registration: Must register with the National Cyber Security Authority (NCSA).</li>
                  <li>Compliance with Principles: Ensure data is processed lawfully, fairly, and securely.</li>
                  <li>Respect Data Subject Rights: E.g., access, objection, erasure, rectification.</li>
                  <li>Maintain Records: Keep logs of processing activities.</li>
                  <li>Implement Safeguards: Address risks (technical and organisational measures).</li>
                  <li>Notify Breaches: Inform the NCSA within 48 hours if a breach occurs and submit a report within 72 hours.</li>
                  <li>Limit International Transfers: Store personal data in Rwanda or obtain proper authorisation for transfers.</li>
                  <li>Appoint a DPO (if required): When large-scale or specific processing activities apply.</li>
                </ul>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="processor">
          <AccordionTrigger className="text-sm font-medium">
            Data Processor - Who follows instructions on data handling
          </AccordionTrigger>
          <AccordionContent className="text-sm">
            <div className="space-y-3">
              <div>
                <p className="font-medium">Definition</p>
                <p className="text-muted-foreground">
                  A Data Processor is an individual or entity that processes personal data solely on behalf of, 
                  and under the instructions of, a Data Controller. They do not decide why or how the data is used.
                </p>
              </div>
              
              <div>
                <p className="font-medium">When You're Likely a Processor</p>
                <ul className="list-disc pl-5 text-muted-foreground">
                  <li>You receive data or instructions directly from a controller or a third party.</li>
                  <li>You do not decide which data to collect, nor the lawful basis or retention period.</li>
                  <li>You implement the processing under a contract, without making key decisions about the outcomes.</li>
                  <li>You may have technical input but remain guided by the controller's directions.</li>
                </ul>
              </div>
              
              <div>
                <p className="font-medium">Key Obligations</p>
                <ul className="list-disc pl-5 text-muted-foreground">
                  <li>Register with the NCSA: Just like controllers, processors must also register if they handle data of individuals in Rwanda.</li>
                  <li>Follow Instructions: Process data strictly as directed by the controller.</li>
                  <li>Maintain Security Measures: Protect data from unauthorised access or loss.</li>
                  <li>Notify Breaches: Inform the controller within 48 hours if a data breach occurs.</li>
                  <li>Limit International Transfers: Transfer data outside Rwanda only with controller authorisation and in compliance with legal safeguards.</li>
                  <li>Keep Records: Logs of processing activities may be required.</li>
                  <li>Appoint a DPO (if required): Same criteria as controllers, depending on nature and scope of processing.</li>
                </ul>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="dual">
          <AccordionTrigger className="text-sm font-medium">
            Dual Role - Controller for some activities, Processor for others
          </AccordionTrigger>
          <AccordionContent className="text-sm">
            <div className="space-y-3">
              <div>
                <p className="font-medium">Definition & Context</p>
                <p className="text-muted-foreground">
                  An organisation may act as both a controller and a processor if, in some activities, it decides how 
                  and why data is processed (controller role), but in others, it simply follows the instructions of a 
                  different controller (processor role).
                </p>
              </div>
              
              <div>
                <p className="font-medium">Typical Scenario</p>
                <ul className="list-disc pl-5 text-muted-foreground">
                  <li>A company processes its employees' data as a controller (making all decisions on collection and use).</li>
                  <li>It also processes customer data on behalf of a partner company strictly under that partner's directions, taking the processor role.</li>
                </ul>
              </div>
              
              <div>
                <p className="font-medium">Key Points</p>
                <ul className="list-disc pl-5 text-muted-foreground">
                  <li>Scope Clarity: Each project or data flow needs clear documentation to identify which role you hold.</li>
                  <li>Compliance: You must meet controller obligations (for the activities where you decide on data use) and processor obligations (for the activities where you follow instructions).</li>
                  <li>Liability: You may bear direct responsibility for compliance failures in each respective role.</li>
                </ul>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      
      <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted/50 p-3 rounded-md">
        <Info className="h-4 w-4 text-blue-500" />
        <p>Remember, identifying your role is essential to determining your legal obligations. If in doubt, consult the Rwandan Data Protection and Privacy Office (NCSA) or a legal professional.</p>
      </div>
    </div>
  );
};
