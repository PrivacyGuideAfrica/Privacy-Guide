
import { Globe, ListChecks, FileCheck } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Globe,
      title: "Select Your Country",
      description: "Choose from the list of available African data protection frameworks."
    },
    {
      icon: ListChecks,
      title: "Answer Simple Questions",
      description: "Our guided flow assesses your compliance posture based on your answers."
    },
    {
      icon: FileCheck,
      title: "Receive Your Results",
      description: "Understand your obligations and next steps."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="relative">
                <div className="w-16 h-16 bg-ndpa-green/10 rounded-full flex items-center justify-center mb-5">
                  <step.icon className="h-8 w-8 text-ndpa-green" />
                </div>
                <div className="absolute top-0 -left-4 w-8 h-8 bg-ndpa-green rounded-full flex items-center justify-center text-white font-bold">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-600 max-w-xs">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
