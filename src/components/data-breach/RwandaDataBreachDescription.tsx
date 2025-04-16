
import { AlertTriangle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export const RwandaDataBreachDescription = () => {
  return (
    <div className="space-y-4">
      <Alert>
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Assessment Overview</AlertTitle>
        <AlertDescription>
          This module helps you determine your next steps if you experience a personal data breach.
          Follow the questions to understand your notification obligations under Rwanda's data protection law.
        </AlertDescription>
      </Alert>
    </div>
  );
};
