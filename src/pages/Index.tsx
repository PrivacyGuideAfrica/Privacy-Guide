import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { ArrowDown, ChevronDown, ArrowRight, MapPin } from "lucide-react";
import { useState } from "react";
import { CountrySelector } from "@/components/CountrySelector";
import WhoItsFor from "@/components/sections/WhoItsFor";
import HowItWorks from "@/components/sections/HowItWorks";
import WhyPrivacyGuide from "@/components/sections/WhyPrivacyGuide";
import { Link } from "react-router-dom";

const Index = () => {
  const [selectedCountry, setSelectedCountry] = useState("nigeria");

  const scrollToCountries = () => {
    document.getElementById('countries-section')?.scrollIntoView({ behavior: 'smooth' });
  };

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
                onClick={scrollToCountries}
              >
                Explore Country Modules
                <ChevronDown className="ml-2 h-5 w-5" />
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
          <CountrySelector selectedCountry={selectedCountry} onCountryChange={setSelectedCountry} />
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
            onClick={scrollToCountries}
          >
            Start Free Assessment
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-xl font-bold mb-4">PrivacyGuide.Africa</h3>
              <p className="text-gray-400 mb-4 max-w-md">
                Data protection made human, for humans.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
                <li><Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Notice</Link></li>
                <li><Link to="/legal-notice" className="text-gray-400 hover:text-white transition-colors">Legal Notice</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <ul className="space-y-2">
                <li><a href="https://www.linkedin.com/company/privacy-guide-africa/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a></li>
                <li><a href="https://x.com/PrivacyGuideAfr" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">X (Twitter)</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} DataUlinzi. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
