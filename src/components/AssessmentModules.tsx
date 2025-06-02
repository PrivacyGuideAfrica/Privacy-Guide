
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Users, AlertTriangle, FileCheck, Clipboard, Globe, User, Building, Gavel, Database, UserCheck, Send } from "lucide-react";
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
    title: "Lawful Basis Assessment",
    description: "Identify the appropriate lawful basis for your data processing activities",
    icon: Gavel,
    link: "/nigeria-lawful-basis",
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
    title: "Does Rwanda's Data Protection Law Apply to You?",
    description: "Determine if Rwanda's Data Protection Law applies to your organization",
    icon: Shield,
    link: "/rwanda-applicability",
  },
  {
    title: "Are You a Data Controller or Processor?",
    description: "Assess your organization's role under Rwanda's data protection framework",
    icon: Users,
    link: "/rwanda-controller-processor",
  },
  {
    title: "Registering with the Data Protection Authority?",
    description: "Understand your registration requirements with Rwanda's Data Protection Authority",
    icon: Globe,
    link: "/rwanda-registration",
  },
  {
    title: "Do You Need to Do a DPIA?",
    description: "Determine if your processing requires a Data Protection Impact Assessment",
    icon: FileCheck,
    link: "/dpia-assessment",
  },
  {
    title: "Do You Need to Appoint a Local Representative?",
    description: "Find out if your organization needs a local representative in Rwanda",
    icon: Building,
    link: "/representative-assessment",
  },
  {
    title: "Do You Need to Appoint a DPO?",
    description: "Assess whether your organization needs a Data Protection Officer",
    icon: User,
    link: "/dpo-assessment",
  },
  {
    title: "Data Breach Notification",
    description: "Understand your data breach notification obligations under Rwanda's law",
    icon: AlertTriangle,
    link: "/rwanda-data-breach",
  },
];

const ugandaModules: Module[] = [
  {
    title: "Registration with Personal Data Protection Office",
    description: "Determine your registration requirements with Uganda's data protection authority",
    icon: Globe,
    link: "/uganda-registration",
  },
  {
    title: "Lawful Basis for Processing",
    description: "Identify the appropriate lawful basis for your data processing activities under Uganda law",
    icon: Gavel,
    link: "/uganda-lawful-basis",
  },
  {
    title: "Cross-border Data Transfer Restrictions",
    description: "Understand restrictions and requirements for transferring data outside Uganda",
    icon: Send,
    link: "/uganda-cross-border-transfer",
  },
  {
    title: "Data Protection Impact Assessments",
    description: "Determine when you need to conduct a DPIA under Uganda's requirements",
    icon: FileCheck,
    link: "/uganda-dpia",
  },
  {
    title: "Responding to Data Subject Rights",
    description: "Learn how to handle data subject requests and rights under Uganda law",
    icon: UserCheck,
    link: "/uganda-data-subject-rights",
  },
  {
    title: "Data Breach Notification",
    description: "Understand your obligations for reporting data breaches to authorities and individuals",
    icon: AlertTriangle,
    link: "/uganda-data-breach",
  },
  {
    title: "Processing of Sensitive Data",
    description: "Assess requirements and safeguards for processing sensitive personal data",
    icon: Database,
    link: "/uganda-sensitive-data",
  },
];

export const AssessmentModules = ({ country }: AssessmentModulesProps) => {
  const modules = country === "nigeria" ? nigeriaModules : 
                 country === "rwanda" ? rwandaModules : 
                 country === "uganda" ? ugandaModules : [];
  const countryName = country === "nigeria" ? "Nigeria" : 
                     country === "rwanda" ? "Rwanda" : 
                     country === "uganda" ? "Uganda" : country;

  return (
    <div>
      <h2 className="text-3xl font-bold text-center mb-12">{countryName}'s Assessment Modules</h2>
      
      {modules.length > 0 ? (
        <>
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
          
          <div className="mt-12 text-center">
            <Link 
              to="/countries" 
              className="inline-flex items-center px-6 py-3 border border-blue-500 text-blue-600 rounded-md font-medium hover:bg-blue-50 transition-colors"
            >
              <Globe className="mr-2 h-5 w-5" />
              Take Other Assessments
            </Link>
          </div>
        </>
      ) : (
        <div className="text-center text-gray-500">
          <p>Assessment modules for {countryName} coming soon!</p>
          
          <div className="mt-8">
            <Link 
              to="/countries" 
              className="inline-flex items-center px-6 py-3 border border-blue-500 text-blue-600 rounded-md font-medium hover:bg-blue-50 transition-colors"
            >
              <Globe className="mr-2 h-5 w-5" />
              Take Other Assessments
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
