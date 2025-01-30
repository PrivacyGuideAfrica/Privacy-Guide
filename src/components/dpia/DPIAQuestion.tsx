import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Card, CardContent } from "@/components/ui/card";
import { HelpCircle, CheckCircle2 } from "lucide-react";

interface Props {
  text: string;
  tooltip?: string;
  value: string;
  onValueChange: (value: string) => void;
}

const DPIAQuestion = ({ text, tooltip, value, onValueChange }: Props) => {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex items-start gap-2 mb-6">
          <h2 className="text-xl font-semibold text-left">{text}</h2>
          {tooltip && (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button className="mt-1">
                    <HelpCircle className="h-5 w-5 text-muted-foreground" />
                  </button>
                </TooltipTrigger>
                <TooltipContent className="max-w-sm">
                  <p>{tooltip}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
        </div>
        <RadioGroup
          className="space-y-4"
          value={value}
          onValueChange={onValueChange}
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="yes" id="yes" />
            <Label htmlFor="yes" className="flex items-center gap-2">
              Yes
              {value === "yes" && (
                <CheckCircle2 className="h-4 w-4 text-green-500" />
              )}
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="no" id="no" />
            <Label htmlFor="no" className="flex items-center gap-2">
              No
              {value === "no" && (
                <CheckCircle2 className="h-4 w-4 text-green-500" />
              )}
            </Label>
          </div>
        </RadioGroup>
      </CardContent>
    </Card>
  );
};

export default DPIAQuestion;