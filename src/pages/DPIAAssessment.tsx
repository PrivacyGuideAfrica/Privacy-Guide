import { useState } from "react";
import { Navbar } from "@/components/Navbar";
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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const DPIAAssessment = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [answers, setAnswers] = useState({
    q1: "",
    q2: [] as string[],
    q3: "",
    q4: "",
    q5: "",
  });
  const [showGuidance, setShowGuidance] = useState(false);

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
      setShowGuidance(false);
      setCurrentQuestion(0); // Show final message
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
      setShowGuidance(true);
      setCurrentQuestion(0);
    } else {
      setCurrentQuestion(4);
    }
  };

  const handleQ4Answer = (value: string) => {
    setAnswers({ ...answers, q4: value });
    if (value === "yes") {
      setShowGuidance(true);
      setCurrentQuestion(0);
    } else {
      setCurrentQuestion(5);
    }
  };

  const handleQ5Answer = (value: string) => {
    setAnswers({ ...answers, q5: value });
    setShowGuidance(value === "yes");
    setCurrentQuestion(0);
  };

  const resetAssessment = () => {
    setCurrentQuestion(1);
    setAnswers({
      q1: "",
      q2: [],
      q3: "",
      q4: "",
      q5: "",
    });
    setShowGuidance(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-center mb-8">
          Data Protection Impact Assessment (DPIA)
        </h1>

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

        {currentQuestion === 0 && !showGuidance && (
          <div className="bg-white p-6 rounded-lg shadow space-y-6">
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <p className="text-blue-700">
                A DPIA is not mandatory based on your current processing activities. 
                However, it is recommended to document your activities for accountability. 
                If the scope, nature, or purpose of your data processing changes in the 
                future—such as implementing new technologies, processing sensitive data, 
                or engaging in large-scale processing—you should reassess whether a DPIA 
                is required.
              </p>
            </div>
            <div className="flex gap-4">
              <Button onClick={resetAssessment}>
                Start New Assessment
              </Button>
              <Button variant="outline" onClick={() => window.location.href = "/"}>
                Take Other Assessments
              </Button>
            </div>
          </div>
        )}

        {currentQuestion === 0 && showGuidance && (
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

            <div className="flex gap-4">
              <Button onClick={resetAssessment}>
                Start New Assessment
              </Button>
              <Button variant="outline" onClick={() => window.location.href = "/"}>
                Take Other Assessments
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DPIAAssessment;