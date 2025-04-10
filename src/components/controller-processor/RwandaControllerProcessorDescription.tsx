
import { Info } from "lucide-react";

export const RwandaControllerProcessorDescription = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 text-sm p-3 rounded-md border">
        <Info className="h-4 w-4 text-blue-500 shrink-0" />
        <p>This assessment will help you determine whether your organization is a Controller or Processor under Rwanda's Data Protection Law.</p>
      </div>
    </div>
  );
};
