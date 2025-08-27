
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface CountrySelectorProps {
  selectedCountry: string;
  onCountryChange: (country: string) => void;
}

interface CountryItem {
  id: string;
  name: string;
  description: string;
  flagEmoji: string;
  modules: string[];
  isLive: boolean;
  isNew?: boolean;
}

const countries: CountryItem[] = [
  {
    id: "nigeria",
    name: "Nigeria",
    description: "Nigeria Data Protection Act (NDPA)",
    flagEmoji: "🇳🇬",
    modules: ["NDPA Applicability", "DPIA", "Breach Assessment", "Audit Requirements", "Controller/Processor"],
    isLive: true,
  },
  {
    id: "rwanda",
    name: "Rwanda",
    description: "Rwanda Data Protection Law",
    flagEmoji: "🇷🇼",
    modules: ["RDP Law Overview", "Controller/Processor", "Breach Response"],
    isLive: true,
  },
  {
    id: "uganda",
    name: "Uganda",
    description: "Uganda Data Protection and Privacy Act",
    flagEmoji: "🇺🇬",
    modules: ["Registration", "Lawful Basis", "DPIA", "Data Subject Rights", "Breach Notification", "Sensitive Data", "DPO"],
    isLive: true,
    isNew: true,
  },
  {
    id: "south-africa",
    name: "South Africa",
    description: "Protection of Personal Information Act (POPIA)",
    flagEmoji: "🇿🇦",
    modules: ["Applicability", "Prior Authorisation", "Responsible Party/Operator", "Data Breach", "Data Subject Rights", "Special Information", "Children Data", "Information Officer", "Direct Marketing"],
    isLive: true,
    isNew: true,
  },
  {
    id: "kenya",
    name: "Kenya",
    description: "Coming Soon",
    flagEmoji: "🇰🇪",
    modules: [],
    isLive: false,
  },
  {
    id: "ghana",
    name: "Ghana",
    description: "Coming Soon",
    flagEmoji: "🇬🇭",
    modules: [],
    isLive: false,
  },
  {
    id: "tanzania",
    name: "Tanzania",
    description: "Coming Soon",
    flagEmoji: "🇹🇿",
    modules: [],
    isLive: false,
  },
];

export const CountrySelector = ({ selectedCountry, onCountryChange }: CountrySelectorProps) => {
  const liveCountries = countries.filter(country => country.isLive);
  const comingSoonCountries = countries.filter(country => !country.isLive);

  return (
    <div className="space-y-12">
      {/* Live Countries */}
      <div>
        <h2 className="text-3xl font-bold text-center mb-8 relative">
          <span className="bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">Now Live!</span>
          <span className="absolute -right-6 top-0 text-xl text-orange-500">✨</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {liveCountries.map((country) => (
            <Link
              to={`/country/${country.id}`}
              key={country.id}
              onClick={() => onCountryChange(country.id)}
              className="block transition-all duration-300 transform hover:scale-105"
            >
              <Card
                className={`overflow-hidden hover:shadow-xl transition-all duration-300 h-full bg-gradient-to-br from-white to-gray-50 relative`}
              >
                {country.isNew && (
                  <div className="absolute top-2 right-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-pulse z-10">
                    NEW!
                  </div>
                )}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/80 to-blue-400/70 opacity-90" />
                  <div className="h-36 flex justify-center items-center overflow-hidden">
                    <div className="relative z-10 text-white p-6 flex flex-col items-center w-full">
                      <div className="text-4xl mb-2">{country.flagEmoji}</div>
                      <h3 className="text-2xl font-bold text-center">{country.name}</h3>
                      <p className="text-white/90 mt-1 text-center text-sm">{country.description}</p>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex justify-center mt-2">
                    <span className="inline-flex items-center text-sm font-medium text-orange-500">
                      Explore {country.name}'s Modules
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      {/* Coming Soon */}
      <div>
        <h2 className="text-3xl font-bold text-center mb-8">What's Next?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {comingSoonCountries.map((country) => (
            <div 
              key={country.id}
              className="block transition-all duration-300"
            >
              <Card
                className="overflow-hidden h-full bg-gradient-to-br from-gray-100 to-gray-200 opacity-75"
              >
                <div className="p-6 flex flex-col items-center">
                  <div className="text-4xl mb-3 grayscale">{country.flagEmoji}</div>
                  <h3 className="text-xl font-bold text-center text-gray-700">{country.name}</h3>
                  <p className="mt-2 text-center text-gray-500">Coming Soon</p>
                </div>
              </Card>
            </div>
          ))}
        </div>
        <p className="text-center text-gray-600 mt-6">
          We're working to bring these countries online. Want yours prioritised? 
          <a href="mailto:support@privacyguide.africa" className="text-orange-500 ml-1 font-medium hover:underline">Let us know</a>
        </p>
      </div>
    </div>
  );
};
