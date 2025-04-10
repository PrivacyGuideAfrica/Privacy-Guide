
import { useParams } from "react-router-dom";
import { AssessmentModules } from "@/components/AssessmentModules";
import { useState, useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/shared/Layout";

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
      <Layout>
        <div className="max-w-7xl mx-auto px-4 py-12 text-center">
          <h1 className="text-2xl font-bold">Country not found</h1>
          <Link to="/" className="text-ndpa-green hover:underline mt-4 inline-block">
            Return to homepage
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Country Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/countries" 
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
    </Layout>
  );
};

export default CountryPage;
