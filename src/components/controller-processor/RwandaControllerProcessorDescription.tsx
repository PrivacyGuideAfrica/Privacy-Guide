
import { AlertTriangle, Info } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

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
      
      <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted/50 p-3 rounded-md">
        <Info className="h-4 w-4 text-blue-500" />
        <p>This assessment will guide you through a series of questions to determine your organization's role under Rwanda's data protection framework.</p>
      </div>
    </div>
  );
};
