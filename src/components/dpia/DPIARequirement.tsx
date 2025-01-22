import { useState } from "react";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { HelpCircle } from "lucide-react";

interface Props {
  onComplete: (required: boolean) => void;
}

const DPIARequirement = ({ onComplete }: Props) => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [answers, setAnswers] = useState({
    q1: "",
    q2: [] as string[],
    q3: "",
    q4: "",
    q5: "",
  });

  const activities = [
    "Automated decision-making or profiling",
    "Large-scale processing of sensitive data",
    "Systematic monitoring of public areas",
    "Processing of children's data",
    "Cross-border data transfers",
  ];

  const handleQ1Answer = (value: string) => {
    setAnswers({ ...answers, q1: value });
    if (value === "no") {
      onComplete(false);
    } else {
      setCurrentQuestion(2);
    }
  };

  const handleQ2Answer = (value: string) => {
    const currentActivities = answers.q2.includes(value)
      ? answers.q2.filter((a) => a !== value)
      : [...answers.q2, value];
    setAnswers({ ...answers, q2: currentActivities });
  };

  const handleQ2Next = () => {
    if (answers.q2.length > 0) {
      setCurrentQuestion(3);
    } else {
      setCurrentQuestion(4);
    }
  };

  const handleQ3Answer = (value: string) => {
    setAnswers({ ...answers, q3: value });
    if (value === "yes") {
      onComplete(true);
    } else {
      setCurrentQuestion(4);
    }
  };

  const handleQ4Answer = (value: string) => {
    setAnswers({ ...answers, q4: value });
    if (value === "yes") {
      onComplete(true);
    } else {
      setCurrentQuestion(5);
    }
  };

  const handleQ5Answer = (value: string) => {
    setAnswers({ ...answers, q5: value });
    onComplete(value === "yes");
  };

  return (
    <div className="space-y-8">
      {currentQuestion === 1 && (
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-xl font-semibold">
              Are you processing personal data that could result in a high risk to the rights 
              and freedoms of individuals?
            </h2>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <HelpCircle className="h-5 w-5 text-gray-400" />
                </TooltipTrigger>
                <TooltipContent className="max-w-sm">
                  "High risk" refers to situations where data processing could lead to 
                  identity theft, financial loss, discrimination, or significant invasion 
                  of privacy.
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <RadioGroup
            className="space-y-4"
            value={answers.q1}
            onValueChange={handleQ1Answer}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes" id="q1-yes" />
              <Label htmlFor="q1-yes">Yes</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="no" id="q1-no" />
              <Label htmlFor="q1-no">No</Label>
            </div>
          </RadioGroup>
        </div>
      )}

      {currentQuestion === 2 && (
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">
            Are you conducting any of the following activities?
          </h2>
          <div className="space-y-4">
            {activities.map((activity) => (
              <div key={activity} className="flex items-center space-x-2">
                <Checkbox
                  id={activity}
                  checked={answers.q2.includes(activity)}
                  onCheckedChange={() => handleQ2Answer(activity)}
                />
                <Label htmlFor={activity}>{activity}</Label>
              </div>
            ))}
          </div>
          <Button onClick={handleQ2Next} className="mt-6">
            Next
          </Button>
        </div>
      )}

      {currentQuestion === 3 && (
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-xl font-semibold">
              Are you using new technologies or are there any innovative processing 
              activities involved?
            </h2>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <HelpCircle className="h-5 w-5 text-gray-400" />
                </TooltipTrigger>
                <TooltipContent>
                  New technologies like AI may involve unknown risks, making a DPIA essential.
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <RadioGroup
            className="space-y-4"
            value={answers.q3}
            onValueChange={handleQ3Answer}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes" id="q3-yes" />
              <Label htmlFor="q3-yes">Yes</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="no" id="q3-no" />
              <Label htmlFor="q3-no">No</Label>
            </div>
          </RadioGroup>
        </div>
      )}

      {currentQuestion === 4 && (
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">
            Could the processing result in denial of services or legal rights to individuals?
          </h2>
          <RadioGroup
            className="space-y-4"
            value={answers.q4}
            onValueChange={handleQ4Answer}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes" id="q4-yes" />
              <Label htmlFor="q4-yes">Yes</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="no" id="q4-no" />
              <Label htmlFor="q4-no">No</Label>
            </div>
          </RadioGroup>
        </div>
      )}

      {currentQuestion === 5 && (
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">
            Are you processing data in a way that may lead to significant harm?
          </h2>
          <RadioGroup
            className="space-y-4"
            value={answers.q5}
            onValueChange={handleQ5Answer}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes" id="q5-yes" />
              <Label htmlFor="q5-yes">Yes</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="no" id="q5-no" />
              <Label htmlFor="q5-no">No</Label>
            </div>
          </RadioGroup>
        </div>
      )}
    </div>
  );
};

export default DPIARequirement;