
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { InfoIcon, Layers, Shield, Users } from "lucide-react";

const RwandaControllerProcessorGuidance: React.FC = () => {
  return (
    <div className="space-y-6 mt-6">
      <div className="flex items-center gap-2">
        <InfoIcon className="h-5 w-5 text-muted-foreground" />
        <h3 className="text-lg font-medium">Additional Guidance</h3>
      </div>
      
      <Tabs defaultValue="controller" className="w-full">
        <TabsList className="grid grid-cols-3 mb-4">
          <TabsTrigger value="controller" className="flex items-center gap-2">
            <Shield className="h-4 w-4" />
            <span>Data Controller</span>
          </TabsTrigger>
          <TabsTrigger value="processor" className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            <span>Data Processor</span>
          </TabsTrigger>
          <TabsTrigger value="dual" className="flex items-center gap-2">
            <Layers className="h-4 w-4" />
            <span>Dual Role</span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="controller">
          <Card>
            <CardHeader>
              <CardTitle>Data Controller</CardTitle>
              <CardDescription>
                A person or entity that determines how and why personal data is processed
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Definition</h4>
                <p className="text-sm text-muted-foreground">
                  A Data Controller is a person or entity (public, private, or legal) that alone or jointly determines how and why personal data is processed. They hold the decision-making power regarding data collection, use, and disclosure.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">When You're Likely a Controller</h4>
                <ul className="text-sm text-muted-foreground space-y-1 list-disc pl-5">
                  <li>You decide which personal data is collected and from whom.</li>
                  <li>You determine the lawful basis for processing and the retention period.</li>
                  <li>You choose whether to share data (and with whom).</li>
                  <li>You have a direct relationship with data subjects, such as employees or customers.</li>
                  <li>You have autonomy over the processing, possibly hiring processors to act on your behalf.</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Key Obligations</h4>
                <ul className="text-sm text-muted-foreground space-y-1 list-disc pl-5">
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
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="processor">
          <Card>
            <CardHeader>
              <CardTitle>Data Processor</CardTitle>
              <CardDescription>
                An entity that processes personal data on behalf of a controller
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Definition</h4>
                <p className="text-sm text-muted-foreground">
                  A Data Processor is an individual or entity that processes personal data solely on behalf of, and under the instructions of, a Data Controller. They do not decide why or how the data is used.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">When You're Likely a Processor</h4>
                <ul className="text-sm text-muted-foreground space-y-1 list-disc pl-5">
                  <li>You receive data or instructions directly from a controller or a third party.</li>
                  <li>You do not decide which data to collect, nor the lawful basis or retention period.</li>
                  <li>You implement the processing under a contract, without making key decisions about the outcomes.</li>
                  <li>You may have technical input but remain guided by the controller's directions.</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Key Obligations</h4>
                <ul className="text-sm text-muted-foreground space-y-1 list-disc pl-5">
                  <li>Register with the NCSA: Just like controllers, processors must also register if they handle data of individuals in Rwanda.</li>
                  <li>Follow Instructions: Process data strictly as directed by the controller.</li>
                  <li>Maintain Security Measures: Protect data from unauthorised access or loss.</li>
                  <li>Notify Breaches: Inform the controller within 48 hours if a data breach occurs.</li>
                  <li>Limit International Transfers: Transfer data outside Rwanda only with controller authorisation and in compliance with legal safeguards.</li>
                  <li>Keep Records: Logs of processing activities may be required.</li>
                  <li>Appoint a DPO (if required): Same criteria as controllers, depending on nature and scope of processing.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="dual">
          <Card>
            <CardHeader>
              <CardTitle>Dual Role</CardTitle>
              <CardDescription>
                Acting as both a controller and processor in different contexts
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Definition & Context</h4>
                <p className="text-sm text-muted-foreground">
                  An organisation may act as both a controller and a processor if, in some activities, it decides how and why data is processed (controller role), but in others, it simply follows the instructions of a different controller (processor role).
                </p>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Typical Scenario</h4>
                <ul className="text-sm text-muted-foreground space-y-1 list-disc pl-5">
                  <li>A company processes its employees' data as a controller (making all decisions on collection and use).</li>
                  <li>It also processes customer data on behalf of a partner company strictly under that partner's directions, taking the processor role.</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Key Points</h4>
                <ul className="text-sm text-muted-foreground space-y-1 list-disc pl-5">
                  <li>Scope Clarity: Each project or data flow needs clear documentation to identify which role you hold.</li>
                  <li>Compliance: You must meet controller obligations (for the activities where you decide on data use) and processor obligations (for the activities where you follow instructions).</li>
                  <li>Liability: You may bear direct responsibility for compliance failures in each respective role.</li>
                </ul>
              </div>
              
              <div className="pt-2">
                <p className="text-sm text-muted-foreground italic">
                  Remember, identifying your role is essential to determining your legal obligations. If in doubt, consult the Rwandan Data Protection and Privacy Office (NCSA) or a legal professional.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default RwandaControllerProcessorGuidance;
