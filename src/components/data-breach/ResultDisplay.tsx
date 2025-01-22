import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ShieldAlert, ShieldCheck, Home, RotateCcw } from "lucide-react";

interface ResultDisplayProps {
  isHighRisk: boolean;
  onReset: () => void;
  onHome: () => void;
}

export const ResultDisplay = ({
  isHighRisk,
  onReset,
  onHome,
}: ResultDisplayProps) => {
  return (
    <div className="space-y-6">
      <CardHeader className="px-0">
        <CardTitle className="text-xl">Assessment Result</CardTitle>
        <CardDescription>
          Review your data breach assessment outcome and next steps
        </CardDescription>
      </CardHeader>

      <Alert variant={isHighRisk ? "destructive" : "default"}>
        {isHighRisk ? (
          <ShieldAlert className="h-5 w-5" />
        ) : (
          <ShieldCheck className="h-5 w-5" />
        )}
        <AlertTitle>
          {isHighRisk ? "High-Risk Breach" : "Low-Risk Breach"}
        </AlertTitle>
        <AlertDescription>
          {isHighRisk
            ? "This breach is considered high-risk. You must notify the NDPC within 72 hours and affected individuals immediately."
            : "This breach is considered low-risk, but it is recommended to document the incident and continue monitoring."}
        </AlertDescription>
      </Alert>

      <div className="flex flex-col sm:flex-row gap-4">
        <Button
          variant="outline"
          className="flex-1 gap-2"
          onClick={onReset}
        >
          <RotateCcw className="h-4 w-4" />
          Start New Assessment
        </Button>
        <Button
          variant="default"
          className="flex-1 gap-2"
          onClick={onHome}
        >
          <Home className="h-4 w-4" />
          Return to Home
        </Button>
      </div>
    </div>
  );
};