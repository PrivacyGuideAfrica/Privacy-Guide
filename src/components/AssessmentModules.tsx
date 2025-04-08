
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Users, AlertTriangle, FileCheck, Clipboard } from "lucide-react";
import { Link } from "react-router-dom";

interface AssessmentModulesProps {
  country: string;
}

interface Module {
  title: string;
  description: string;
  icon: React.ElementType;
  link: string;
}

const nigeriaModules: Module[] = [
  {
    title: "NDPA Applicability",
    description: "Determine if the Nigerian Data Protection Act applies to your organization",
    icon: Shield,
    link: "/ndpa-applicability",
  },
  {
    title: "Controller or Processor",
    description: "Assess whether your organization acts as a data controller or processor",
    icon: Users,
    link: "/controller-processor",
  },
  {
    title: "Data Breach Assessment",
    description: "Evaluate your data breach response readiness and obligations",
    icon: AlertTriangle,
    link: "/data-breach",
  },
  {
    title: "DPIA Assessment",
    description: "Determine whether your organization needs to conduct a Data Protection Impact Assessment",
    icon: FileCheck,
    link: "/dpia-assessment",
  },
  {
    title: "Annual Audit Requirements",
    description: "Find out if your organization needs to conduct an annual data protection audit",
    icon: Clipboard,
    link: "/annual-audit",
  },
];

const rwandaModules: Module[] = [
  {
    title: "Rwanda DP Law Applicability",
    description: "Determine if Rwanda's Data Protection Law applies to your organization",
    icon: Shield,
    link: "/ndpa-applicability", // For now, will point to the same page
  },
  {
    title: "Controller or Processor",
    description: "Assess whether your organization acts as a data controller or processor under Rwanda's law",
    icon: Users,
    link: "/controller-processor",
  },
  {
    title: "Data Breach Assessment",
    description: "Evaluate your data breach response readiness under Rwanda's requirements",
    icon: AlertTriangle,
    link: "/data-breach",
  },
  {
    title: "DPIA Assessment",
    description: "Understand when a Data Protection Impact Assessment is required in Rwanda",
    icon: FileCheck,
    link: "/dpia-assessment",
  },
];

export const AssessmentModules = ({ country }: AssessmentModulesProps) => {
  const modules = country === "nigeria" ? nigeriaModules : rwandaModules;
  const countryName = country === "nigeria" ? "Nigeria" : "Rwanda";

  return (
    <div>
      <h2 className="text-3xl font-bold text-center mb-12">{countryName}'s Assessment Modules</h2>
      
      {modules.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((module) => (
            <Link to={module.link} key={module.title}>
              <Card className="cursor-pointer hover:shadow-md transition-shadow h-full hover:translate-y-[-4px]">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <module.icon className="h-6 w-6 text-ndpa-green" />
                    <span>{module.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    {module.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500">
          <p>Assessment modules for {countryName} coming soon!</p>
        </div>
      )}
    </div>
  );
};
