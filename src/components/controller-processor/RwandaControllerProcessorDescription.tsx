
import { Info, CheckSquare } from "lucide-react";

export const RwandaControllerProcessorDescription = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 text-sm p-3 rounded-md border">
        <Info className="h-4 w-4 text-blue-500 shrink-0" />
        <p>This assessment will help you determine whether your organization is a Data Controller or Data Processor under Rwanda's Data Protection Law.</p>
      </div>
      
      <div className="p-4 border rounded-md bg-muted/30">
        <h3 className="font-medium mb-2 flex items-center gap-2">
          <CheckSquare className="h-4 w-4 text-ndpa-green" />
          Why this matters
        </h3>
        <p className="text-sm text-muted-foreground mb-3">
          Understanding your role is crucial because Controllers and Processors have different legal obligations:
        </p>
        <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-5">
          <li>Data Controllers have greater responsibilities and must register with the National Cyber Security Authority (NCSA).</li>
          <li>Data Processors act on behalf of Controllers but still have specific legal obligations.</li>
          <li>The classification affects your compliance requirements, data breach notification responsibilities, and potential liability.</li>
        </ul>
      </div>
    </div>
  );
};
