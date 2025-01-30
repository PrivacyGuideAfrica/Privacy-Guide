import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Card, CardContent } from "@/components/ui/card";
import { dpiaGuidanceSteps } from "@/data/dpiaQuestions";

const DPIAGuidance = () => {
  return (
    <div className="space-y-6">
      <Alert variant="warning" className="border-l-4">
        <AlertDescription>
          A DPIA is required for your processing activities. Follow the steps below 
          to conduct an effective DPIA.
        </AlertDescription>
      </Alert>

      <Card>
        <CardContent className="pt-6">
          <Accordion type="single" collapsible className="w-full">
            {dpiaGuidanceSteps.map((step, index) => (
              <AccordionItem key={index} value={`step${index + 1}`}>
                <AccordionTrigger className="text-left">
                  {step.title}
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-6 space-y-2 text-left">
                    {step.items.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>

      <div className="flex flex-col sm:flex-row gap-4">
        <Button 
          onClick={() => window.location.reload()} 
          className="w-full sm:w-auto"
        >
          Start New Assessment
        </Button>
        <Button 
          variant="outline" 
          onClick={() => window.location.href = "/"} 
          className="w-full sm:w-auto"
        >
          Take Other Assessments
        </Button>
      </div>
    </div>
  );
};

export default DPIAGuidance;