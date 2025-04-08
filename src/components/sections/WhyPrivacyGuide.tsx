
import { Check } from "lucide-react";

const WhyPrivacyGuide = () => {
  const features = [
    "Free and easy to use",
    "Designed by African privacy professionals",
    "Focused on local laws and practical compliance needs",
    "No account needed, no hidden fees"
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Built for Africa. Designed for Simplicity.</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We've created a tool that simplifies privacy compliance for organisations across Africa.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-ndpa-green/10 flex items-center justify-center mr-3">
                <Check className="h-5 w-5 text-ndpa-green" />
              </div>
              <p className="text-lg">{feature}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto">
          <blockquote className="italic text-gray-600">
            "This tool has simplified our compliance journey tremendously. As a small business in Nigeria, 
            understanding our obligations under the NDPA seemed overwhelming until we found PrivacyGuide.Africa."
          </blockquote>
          <div className="mt-4 font-medium">
            — Compliance Officer, Lagos-based FinTech
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyPrivacyGuide;
