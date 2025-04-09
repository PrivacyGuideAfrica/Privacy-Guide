
import { AlertTriangle, Info } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export const RwandaDataBreachDescription = () => {
  return (
    <div className="space-y-4">
      <Alert>
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Data Breach Notification in Rwanda</AlertTitle>
        <AlertDescription>
          This module helps you determine your next steps if you experience a personal data breach.
        </AlertDescription>
      </Alert>
      
      <div className="bg-muted p-4 rounded-lg">
        <h3 className="text-lg font-medium flex items-center gap-2">
          <Info className="h-5 w-5 text-primary" />
          What is a Data Breach?
        </h3>
        <p className="mt-2 text-muted-foreground">
          A data breach refers to any incident that causes personal data to be accidentally or 
          unlawfully destroyed, lost, altered, or disclosed without authorisation.
        </p>
      </div>
    </div>
  );
};
