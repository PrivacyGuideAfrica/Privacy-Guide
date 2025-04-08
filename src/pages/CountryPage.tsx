
import { useParams } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { AssessmentModules } from "@/components/AssessmentModules";
import { useState, useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface CountryInfo {
  id: string;
  name: string;
  description: string;
  flagEmoji: string;
  lawName: string;
  lawYear: string;
}

const countryData: Record<string, CountryInfo> = {
  nigeria: {
    id: "nigeria",
    name: "Nigeria",
    description: "Africa's most populous country with a rapidly evolving digital landscape.",
    flagEmoji: "🇳🇬",
    lawName: "Nigeria Data Protection Act",
    lawYear: "2023",
  },
  rwanda: {
    id: "rwanda",
    name: "Rwanda",
    description: "A leader in technological advancement and digital transformation in East Africa.",
    flagEmoji: "🇷🇼",
    lawName: "Rwanda Data Protection Law",
    lawYear: "2021",
  },
};

const CountryPage = () => {
  const { countryId } = useParams<{ countryId: string }>();
  const [country, setCountry] = useState<CountryInfo | null>(null);

  useEffect(() => {
    if (countryId && countryData[countryId]) {
      setCountry(countryData[countryId]);
    }
  }, [countryId]);

  if (!country) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 py-12 text-center">
          <h1 className="text-2xl font-bold">Country not found</h1>
          <Link to="/" className="text-ndpa-green hover:underline mt-4 inline-block">
            Return to homepage
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Country Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/" 
            className="inline-flex items-center text-white/90 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to countries
          </Link>
          <div className="flex items-center justify-center md:justify-start">
            <span className="text-5xl mr-4">{country.flagEmoji}</span>
            <div>
              <h1 className="text-4xl font-bold sm:text-5xl">{country.name}</h1>
              <p className="mt-2 text-xl text-white/90">{country.description}</p>
            </div>
          </div>
          <div className="mt-8 inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
            <p className="text-white">
              <span className="font-semibold">{country.lawName}</span> ({country.lawYear})
            </p>
          </div>
        </div>
      </div>

      {/* Assessment Modules Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <AssessmentModules country={country.id} />
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

export default CountryPage;
