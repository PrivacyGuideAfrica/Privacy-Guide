import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Navbar } from "@/components/Navbar";
import { ArrowDown, ChevronDown, ArrowRight, MapPin, Globe } from "lucide-react";
import { useState } from "react";
import { CountrySelector } from "@/components/CountrySelector";
import WhoItsFor from "@/components/sections/WhoItsFor";
import HowItWorks from "@/components/sections/HowItWorks";
import WhyPrivacyGuide from "@/components/sections/WhyPrivacyGuide";
import { Link } from "react-router-dom";
import { Footer } from "@/components/shared/Footer";

const Index = () => {
  const [selectedCountry, setSelectedCountry] = useState("nigeria");

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white pb-16 pt-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg 
            width="100%" 
            height="100%" 
            viewBox="0 0 800 600" 
            xmlns="http://www.w3.org/2000/svg"
            className="opacity-20"
          >
            {/* Simplified Africa map shape with texture */}
            <pattern id="pattern-lines" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M0,5 L10,5" stroke="white" strokeWidth="0.5" fill="none" opacity="0.3" />
            </pattern>
            <path 
              d="M400,100 C450,120 500,150 520,200 C540,250 560,300 580,350 C600,400 600,450 580,500 C560,550 530,580 480,590 C430,600 380,590 330,570 C280,550 250,520 230,470 C210,420 200,370 220,320 C240,270 270,230 320,210 C370,190 350,80 400,100 Z" 
              fill="url(#pattern-lines)" 
              stroke="white" 
              strokeWidth="2"
            />
            {/* Nigeria pin */}
            <circle cx="350" cy="350" r="8" fill="#4ADE80" />
            <circle cx="350" cy="350" r="12" fill="none" stroke="#4ADE80" strokeWidth="2">
              <animate attributeName="r" from="12" to="20" dur="1.5s" repeatCount="indefinite" />
              <animate attributeName="opacity" from="1" to="0" dur="1.5s" repeatCount="indefinite" />
            </circle>
            {/* Rwanda pin */}
            <circle cx="450" cy="420" r="8" fill="#4ADE80" />
            <circle cx="450" cy="420" r="12" fill="none" stroke="#4ADE80" strokeWidth="2">
              <animate attributeName="r" from="12" to="20" dur="1.5s" repeatCount="indefinite" />
              <animate attributeName="opacity" from="1" to="0" dur="1.5s" repeatCount="indefinite" />
            </circle>
          </svg>
        </div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl mb-6 leading-tight animate-fade-in">
              Your Compliance Companion for Africa's Privacy Laws
            </h1>
            <p className="mt-5 text-xl sm:text-2xl text-white/90 leading-relaxed">
              A free tool to help organisations across Africa assess their data protection obligations and understand local compliance requirements.
            </p>
            <div className="mt-10 flex justify-center">
              <Button 
                size="lg" 
                variant="default"
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold text-base px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                asChild
              >
                <Link to="/countries">
                  Explore Country Modules
                  <ChevronDown className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Wave SVG for curved transition */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
            <path fill="#ffffff" fillOpacity="1" d="M0,256L48,240C96,224,192,192,288,192C384,192,480,224,576,234.7C672,245,768,235,864,208C960,181,1056,139,1152,138.7C1248,139,1344,181,1392,202.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </div>

      {/* Who It's For Section */}
      <WhoItsFor />

      {/* Countries Section */}
      <div id="countries-section" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block p-2 px-4 rounded-full bg-blue-100 text-blue-800 font-medium text-sm mb-4">
              <MapPin className="inline-block mr-1 h-4 w-4" /> Country Modules
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Select Your Country</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              Choose your jurisdiction to access tailored assessment modules
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Nigeria Card */}
            <Link to="/country/nigeria" className="block transition-all duration-300 transform hover:scale-105">
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 h-full bg-gradient-to-br from-white to-gray-50">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/80 to-blue-400/70 opacity-90" />
                  <div className="h-36 flex justify-center items-center overflow-hidden">
                    <div className="relative z-10 text-white p-6 flex flex-col items-center w-full">
                      <div className="text-4xl mb-2">🇳🇬</div>
                      <h3 className="text-2xl font-bold text-center">Nigeria</h3>
                      <p className="text-white/90 mt-1 text-center text-sm">Nigeria Data Protection Act (NDPA)</p>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex justify-center mt-2">
                    <span className="inline-flex items-center text-sm font-medium text-orange-500">
                      Explore Nigeria's Modules
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Card>
            </Link>
            
            {/* Rwanda Card */}
            <Link to="/country/rwanda" className="block transition-all duration-300 transform hover:scale-105">
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 h-full bg-gradient-to-br from-white to-gray-50">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/80 to-blue-400/70 opacity-90" />
                  <div className="h-36 flex justify-center items-center overflow-hidden">
                    <div className="relative z-10 text-white p-6 flex flex-col items-center w-full">
                      <div className="text-4xl mb-2">🇷🇼</div>
                      <h3 className="text-2xl font-bold text-center">Rwanda</h3>
                      <p className="text-white/90 mt-1 text-center text-sm">Rwanda Data Protection Law</p>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex justify-center mt-2">
                    <span className="inline-flex items-center text-sm font-medium text-orange-500">
                      Explore Rwanda's Modules
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Card>
            </Link>
          </div>
          
          <div className="text-center mt-8">
            <Link 
              to="/countries"
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md shadow-md hover:shadow-lg transition-all"
            >
              <Globe className="mr-2 h-5 w-5" />
              View All Countries & Assessments
            </Link>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <HowItWorks />

      {/* Why Privacy Guide Section */}
      <WhyPrivacyGuide />

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Start Your Privacy Assessment Today</h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            No account needed. No hidden fees. Just clarity.
          </p>
          <Button 
            size="lg" 
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold text-base px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            asChild
          >
            <Link to="/countries">
              Start Free Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Footer */}
      <div className="footer-container">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
