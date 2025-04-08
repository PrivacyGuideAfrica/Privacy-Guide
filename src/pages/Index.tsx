
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { ChevronDown, Map, Globe, Shield, BarChart4, FileCheck } from "lucide-react";
import { useState } from "react";
import { CountrySelector } from "@/components/CountrySelector";

const Index = () => {
  const [selectedCountry, setSelectedCountry] = useState("nigeria");

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section with modern styling */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white pb-16 pt-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjA1Ij48cGF0aCBkPSJNMjkgNTguQzE0IDU4IC45IDQ0LjkuOSAyOS45LjkgMTQuOSAxNCAyLjggMjkgMi44YzE0LjkgMCAyNy4xIDEyLjEgMjcuMSAyNy4xIDAgMTUtMTIuMiAyOC4xLTI3LjEgMjguMXpNNjAuOSAyOS45QzYwLjkgNDYuOCA0Ny43IDYwIDMwLjggNjAgMTMuOSA2MCAwLjcgNDYuOCAwLjcgMjkuOSAwLjcgMTMgMTMuOSAtLjIgMzAuOCAtLjIgNDcuNyAtLjIgNjAuOSAxMyA2MC45IDI5Ljl6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold sm:text-6xl md:text-7xl mb-6 leading-tight animate-fade-in">
              Privacy Assessment Tool
            </h1>
            <p className="mt-5 max-w-2xl mx-auto text-xl sm:text-2xl text-white/90 leading-relaxed">
              Evaluate your organisation's compliance with Data Protection Laws across Africa
            </p>
            <div className="mt-10 flex justify-center">
              <Button 
                size="lg" 
                className="bg-white text-blue-700 hover:bg-gray-100 font-semibold text-base px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                onClick={() => document.getElementById('countries-section')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Countries
                <ChevronDown className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
        
        {/* Wave SVG for curved transition */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
            <path fill="#f9fafb" fillOpacity="1" d="M0,256L48,240C96,224,192,192,288,192C384,192,480,224,576,234.7C672,245,768,235,864,208C960,181,1056,139,1152,138.7C1248,139,1344,181,1392,202.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </div>

      {/* Disclaimer Banner */}
      <div className="bg-yellow-50 border-t border-b border-yellow-100">
        <div className="max-w-7xl mx-auto py-3 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            <div className="flex-shrink-0">
              <Shield className="h-5 w-5 text-yellow-400" aria-hidden="true" />
            </div>
            <div className="ml-3">
              <p className="text-sm text-yellow-700">
                This tool provides general guidance and should not be considered as legal advice.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Your Guide to Data Protection Compliance</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              Navigate complex data protection laws across Africa with our easy-to-use assessment tools
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="h-12 w-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
                <Map className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Country-Specific</h3>
              <p className="text-gray-600">Tailored assessments based on each country's unique data protection legislation.</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="h-12 w-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
                <FileCheck className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Comprehensive</h3>
              <p className="text-gray-600">From applicability to auditing requirements, we cover every aspect of compliance.</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="h-12 w-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
                <BarChart4 className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Simple Assessment</h3>
              <p className="text-gray-600">Clear questions and actionable insights to help you navigate compliance requirements.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Countries Section */}
      <div id="countries-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <div className="inline-block p-2 px-4 rounded-full bg-blue-100 text-blue-800 font-medium text-sm mb-4">
            <Globe className="inline-block mr-1 h-4 w-4" /> Available Jurisdictions
          </div>
          <h2 className="text-3xl font-bold text-gray-900">Select Your Country</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Choose your jurisdiction to access tailored assessment modules
          </p>
        </div>
        <CountrySelector selectedCountry={selectedCountry} onCountryChange={setSelectedCountry} />
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Assess Your Compliance?</h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            We believe that understanding data protection shouldn't be daunting. Let's make compliance straightforward together!
          </p>
          <Button 
            size="lg" 
            className="bg-white text-blue-700 hover:bg-gray-100 font-semibold text-base px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            onClick={() => document.getElementById('countries-section')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get Started Now
          </Button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t">
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
