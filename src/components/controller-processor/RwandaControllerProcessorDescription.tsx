
import { AlertTriangle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export const RwandaControllerProcessorDescription = () => {
  return (
    <div className="space-y-4">
      <Alert>
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Assessment Overview</AlertTitle>
        <AlertDescription>
          This assessment will help you understand whether your organization is operating as a Data Controller, 
          Data Processor, or has a dual role under Rwanda's Data Protection Law.
        </AlertDescription>
      </Alert>
      <div className="text-sm text-muted-foreground">
        <p>Understanding your role under Rwanda's Data Protection Law is crucial for compliance.</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Data Controllers decide how and why personal data is processed.</li>
          <li>Data Processors act on instructions from controllers when handling personal data.</li>
          <li>Some organizations have dual roles depending on different processing activities.</li>
        </ul>
      </div>
    </div>
  );
};
