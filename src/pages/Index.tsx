import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Navbar } from "@/components/Navbar";
import { Shield, Users, AlertTriangle, FileCheck, Clipboard, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-ndpa-navy to-ndpa-green text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
              NDPA Self-Assessment Tool
            </h1>
            <p className="mt-3 max-w-md mx-auto text-xl sm:text-2xl md:mt-5 md:max-w-3xl">
              Evaluate your organization's compliance with the Nigerian Data Protection Act
            </p>
          </div>
        </div>
      </div>

      {/* Disclaimer Banner */}
      <div className="bg-yellow-50 border-t border-b border-yellow-100">
        <div className="max-w-7xl mx-auto py-3 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            <div className="flex-shrink-0">
              <AlertTriangle className="h-5 w-5 text-yellow-400" aria-hidden="true" />
            </div>
            <div className="ml-3">
              <p className="text-sm text-yellow-700">
                This tool provides general guidance and should not be considered as legal advice.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Modules Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-center mb-12">Assessment Modules</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Link to="/ndpa-applicability">
            <Card className="cursor-pointer hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="h-6 w-6 text-ndpa-green" />
                  <span>NDPA Applicability</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Determine if the Nigerian Data Protection Act applies to your organization
                </p>
              </CardContent>
            </Card>
          </Link>

          <Link to="/controller-processor">
            <Card className="cursor-pointer hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="h-6 w-6 text-ndpa-green" />
                  <span>Controller or Processor</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Assess whether your organization acts as a data controller or processor
                </p>
              </CardContent>
            </Card>
          </Link>

          <Link to="/data-breach">
            <Card className="cursor-pointer hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <AlertTriangle className="h-6 w-6 text-ndpa-green" />
                  <span>Data Breach Assessment</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Evaluate your data breach response readiness and obligations
                </p>
              </CardContent>
            </Card>
          </Link>

          <Link to="/dpia-assessment">
            <Card className="cursor-pointer hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <FileCheck className="h-6 w-6 text-ndpa-green" />
                  <span>DPIA Assessment</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Determine whether your organization needs to conduct a Data Protection Impact Assessment
                </p>
              </CardContent>
            </Card>
          </Link>

          <Link to="/annual-audit">
            <Card className="cursor-pointer hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clipboard className="h-6 w-6 text-ndpa-green" />
                  <span>Annual Audit Requirements</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Find out if your organization needs to conduct an annual data protection audit
                </p>
              </CardContent>
            </Card>
          </Link>

          <Link to="/international-transfer">
            <Card className="cursor-pointer hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Globe className="h-6 w-6 text-ndpa-green" />
                  <span>International Transfer</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Assess the requirements for transferring personal data internationally under the NDPA
                </p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t mt-20">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="mt-8 border-t border-gray-200 pt-8 md:flex md:items-center md:justify-between">
            <div className="flex space-x-6 md:order-2">
              <a href="/about" className="text-gray-400 hover:text-gray-500">
                About
              </a>
              <a href="/privacy" className="text-gray-400 hover:text-gray-500">
                Privacy Notice
              </a>
              <a href="/legal-notice" className="text-gray-400 hover:text-gray-500">
                Legal Notice
              </a>
            </div>
            <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
              &copy; 2024 NDPA Self-Assessment Tool. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
