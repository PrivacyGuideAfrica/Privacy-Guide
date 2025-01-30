import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle } from "lucide-react";

export const DataBreachDescription = () => {
  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <AlertTriangle className="h-5 w-5 text-yellow-500" />
          About This Assessment
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">
          This module will help you assess whether a data breach constitutes a high risk and determine 
          the notification protocol under the NDPA. A data breach is when personal data is accidentally 
          lost, stolen, or shared with someone who should not have it. This tool will help you determine 
          whether you need to notify authorities and affected individuals and what corrective steps to take.
        </p>
      </CardContent>
    </Card>
  );
};