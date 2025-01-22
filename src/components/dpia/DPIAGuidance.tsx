import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
        <AccordionItem value="step1">
          <AccordionTrigger>Step 1: Identify and Describe the Processing</AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc pl-6 space-y-2">
              <li>Define the nature, scope, context, and purposes of the data processing</li>
              <li>Outline the type of personal data and the methods of collection</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="step2">
          <AccordionTrigger>Step 2: Assess Necessity and Proportionality</AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc pl-6 space-y-2">
              <li>Evaluate whether the processing is essential for achieving the specified objectives</li>
              <li>Consider whether less intrusive methods could achieve the same results</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="step3">
          <AccordionTrigger>Step 3: Identify Risks</AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc pl-6 space-y-2">
              <li>List risks to the rights and freedoms of data subjects</li>
              <li>Rank the risks as low, medium, or high based on likelihood and impact</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="step4">
          <AccordionTrigger>Step 4: Mitigate Risks</AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc pl-6 space-y-2">
              <li>Implement technical and organisational measures to reduce risks</li>
              <li>Document how these measures reduce the likelihood or impact of identified risks</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="step5">
          <AccordionTrigger>Step 5: Consult with Stakeholders</AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc pl-6 space-y-2">
              <li>Involve your Data Protection Officer (DPO)</li>
              <li>If necessary, seek advice from external legal advisors</li>
              <li>Consult the Data Protection Authority (NDPC) if high risks remain unresolved</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="step6">
          <AccordionTrigger>Step 6: Document and Review</AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc pl-6 space-y-2">
              <li>Keep comprehensive documentation of the DPIA process</li>
              <li>Periodically review and update the DPIA if the processing activity changes</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
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