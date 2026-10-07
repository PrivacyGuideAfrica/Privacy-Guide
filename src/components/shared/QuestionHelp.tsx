import { HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

export const QuestionHelp = ({ explanation, reference }: { explanation: string; reference?: string }) => (
  <Popover>
    <PopoverTrigger asChild>
      <Button type="button" variant="ghost" className="question-help-trigger">
        <HelpCircle aria-hidden="true" size={17} />Explain this question
      </Button>
    </PopoverTrigger>
    <PopoverContent className="question-help-content" align="start" collisionPadding={16} aria-label="Question explanation">
      <p>{explanation}</p>
      {reference && <p className="question-help-reference"><strong>Legal reference</strong><br />{reference}</p>}
    </PopoverContent>
  </Popover>
);
