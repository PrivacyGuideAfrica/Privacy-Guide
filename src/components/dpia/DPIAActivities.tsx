import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Card, CardContent } from "@/components/ui/card";
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
    <Card>
      <CardContent className="pt-6">
        <h2 className="text-xl font-semibold mb-6 text-left">
          Are you conducting any of the following activities?
        </h2>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.label} className="flex items-start space-x-2">
              <Checkbox
                id={activity.label}
                checked={selectedActivities.includes(activity.label)}
                onCheckedChange={() => onActivityToggle(activity.label)}
                className="mt-1"
              />
              <div className="flex items-start gap-2">
                <Label 
                  htmlFor={activity.label} 
                  className="text-left leading-none pt-0.5"
                >
                  {activity.label}
                </Label>
                {activity.tooltip && (
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <button>
                          <HelpCircle className="h-4 w-4 text-muted-foreground" />
                        </button>
                      </TooltipTrigger>
                      <TooltipContent className="max-w-sm">
                        <p>{activity.tooltip}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                )}
              </div>
            </div>
          ))}
        </div>
        <Button onClick={onNext} className="mt-6 w-full">
          Next
        </Button>
      </CardContent>
    </Card>
  );
};

export default DPIAActivities;