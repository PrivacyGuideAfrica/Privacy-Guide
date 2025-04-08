
import { Card, CardContent } from "@/components/ui/card";
import { Users, Building, Globe } from "lucide-react";

const WhoItsFor = () => {
  const audiences = [
    {
      icon: Building,
      title: "Small & Medium Businesses",
      description: "Just getting started with compliance? This tool gives you clarity without the legal jargon."
    },
    {
      icon: Users,
      title: "Compliance Teams",
      description: "Quickly assess gaps and meet annual obligations under local laws."
    },
    {
      icon: Globe,
      title: "Global Companies in Africa",
      description: "Understand which African privacy laws apply to your operations and data flows."
    }
  ];

  return (
    <section className="py-16 bg-gray-50 relative overflow-hidden">
      {/* Abstract texture background */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="pattern-circles" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse">
            <circle id="pattern-circle" cx="10" cy="10" r="1.6257413380501518" fill="#000000"></circle>
          </pattern>
          <rect id="rect" x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)"></rect>
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-3xl font-bold text-center mb-12">Who Is This For?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {audiences.map((item, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow bg-white relative overflow-hidden">
              {/* Subtle texture pattern for each card */}
              <div className="absolute inset-0 opacity-5">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <pattern id={`dots-${index}`} width="20" height="20" patternUnits="userSpaceOnUse">
                    <circle cx="3" cy="3" r="1" fill="#000" />
                  </pattern>
                  <rect width="100%" height="100%" fill={`url(#dots-${index})`} />
                </svg>
              </div>
              
              <CardContent className="pt-6 relative z-10">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-ndpa-green/20 to-orange-400/10 rounded-full flex items-center justify-center mb-4">
                    <item.icon className="h-6 w-6 text-ndpa-green" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoItsFor;
