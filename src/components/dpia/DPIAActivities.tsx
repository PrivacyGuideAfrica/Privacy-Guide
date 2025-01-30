import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { HelpCircle } from "lucide-react";
import { DPIAActivity } from "@/data/dpiaQuestions";

interface Props {
  activities: DPIAActivity[];
  selectedActivities: string[];
  onActivityToggle: (activity: string) => void;
  onNext: () => void;
}

const DPIAActivities = ({ 
  activities, 
  selectedActivities, 
  onActivityToggle, 
  onNext 
}: Props) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">
        Are you conducting any of the following activities?
      </h2>
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.label} className="flex items-center space-x-2">
            <Checkbox
              id={activity.label}
              checked={selectedActivities.includes(activity.label)}
              onCheckedChange={() => onActivityToggle(activity.label)}
            />
            <div className="flex items-center gap-2">
              <Label htmlFor={activity.label}>{activity.label}</Label>
              {activity.tooltip && (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <HelpCircle className="h-4 w-4 text-gray-400" />
                    </TooltipTrigger>
                    <TooltipContent>{activity.tooltip}</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )}
            </div>
          </div>
        ))}
      </div>
      <Button onClick={onNext} className="mt-6">
        Next
      </Button>
    </div>
  );
};

export default DPIAActivities;