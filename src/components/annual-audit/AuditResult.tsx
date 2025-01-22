import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useNavigate } from "react-router-dom";
import type { Classification } from "@/pages/AnnualAudit";

interface Props {
  classification: Classification;
  onReset: () => void;
}

export const AuditResult = ({ classification, onReset }: Props) => {
  const navigate = useNavigate();

  const getResultMessage = () => {
    switch (classification) {
      case "MDP-UHL":
        return "Your organisation is classified under MDP-UHL. Conduct an annual audit and submit a Compliance Audit Report (CAR).";
      case "MDP-EHL":
        return "Your organisation is classified under MDP-EHL. Conduct an annual audit and submit a Compliance Audit Report (CAR).";
      case "MDP-OHL":
        return "Your organisation may fall under MDP-OHL. An annual registration update is required, but a full audit may not be necessary.";
      default:
        return "Unable to determine classification. Please try the assessment again.";
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Assessment Result</CardTitle>
      </CardHeader>
      <CardContent>
        <Alert>
          <AlertDescription>{getResultMessage()}</AlertDescription>
        </Alert>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-4">
        <div className="w-full space-y-4">
          <Button className="w-full" onClick={() => navigate("/")}>
            Take Other Assessments
          </Button>
          <Button variant="outline" className="w-full" onClick={onReset}>
            Start Over
          </Button>
        </div>
        <div className="text-sm text-gray-500">
          Was this assessment helpful?{" "}
          <a href="#" className="text-ndpa-green hover:underline">
            Let us know how we can improve
          </a>
        </div>
      </CardFooter>
    </Card>
  );
};