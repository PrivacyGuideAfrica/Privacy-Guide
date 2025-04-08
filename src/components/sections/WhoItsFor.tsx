
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
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Who Is This For?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {audiences.map((item, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-ndpa-green/10 rounded-full flex items-center justify-center mb-4">
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
