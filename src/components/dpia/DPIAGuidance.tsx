import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { dpiaGuidanceSteps } from "@/data/dpiaQuestions";

const DPIAGuidance = () => {
  return (
    <div className="space-y-6">
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
        <p className="text-yellow-700">
          A DPIA is required for your processing activities. Follow the steps below 
          to conduct an effective DPIA.
        </p>
      </div>

      <Accordion type="single" collapsible className="w-full">
        {dpiaGuidanceSteps.map((step, index) => (
          <AccordionItem key={index} value={`step${index + 1}`}>
            <AccordionTrigger>{step.title}</AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc pl-6 space-y-2">
                {step.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <div className="flex gap-4 mt-8">
        <Button onClick={() => window.location.reload()}>
          Start New Assessment
        </Button>
        <Button variant="outline" onClick={() => window.location.href = "/"}>
          Take Other Assessments
        </Button>
      </div>
    </div>
  );
};

export default DPIAGuidance;