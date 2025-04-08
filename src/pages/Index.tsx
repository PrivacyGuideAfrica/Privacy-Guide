
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Navbar } from "@/components/Navbar";
import { Shield, Users, AlertTriangle, FileCheck, Clipboard, Globe, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { CountrySelector } from "@/components/CountrySelector";
import { AssessmentModules } from "@/components/AssessmentModules";

const Index = () => {
  const [selectedCountry, setSelectedCountry] = useState("nigeria");

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section with improved styling */}
      <div className="bg-gradient-to-r from-ndpa-navy to-ndpa-green text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl animate-fade-in">
              Privacy Assessment Tool
            </h1>
            <p className="mt-5 max-w-xl mx-auto text-xl sm:text-2xl md:mt-5">
              Evaluate your organisation's compliance with Data Protection Laws in Africa
            </p>
            <div className="mt-8 flex justify-center">
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white text-ndpa-navy hover:bg-gray-100 font-semibold"
                onClick={() => document.getElementById('countries-section')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Started
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </div>
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

      {/* Countries Section */}
      <div id="countries-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Select Your Country</h2>
        <CountrySelector selectedCountry={selectedCountry} onCountryChange={setSelectedCountry} />
      </div>

      {/* Assessment Modules Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gray-50">
        <AssessmentModules country={selectedCountry} />
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
              &copy; 2024 DataUlinzi. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
