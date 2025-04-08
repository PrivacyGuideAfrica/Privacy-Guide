
import { Card } from "@/components/ui/card";
import { Globe } from "lucide-react";
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
}

const countries: CountryItem[] = [
  {
    id: "nigeria",
    name: "Nigeria",
    description: "Nigeria Data Protection Act (NDPA)",
    flagEmoji: "🇳🇬",
  },
  {
    id: "rwanda",
    name: "Rwanda",
    description: "Rwanda Data Protection Law",
    flagEmoji: "🇷🇼",
  },
];

export const CountrySelector = ({ selectedCountry, onCountryChange }: CountrySelectorProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {countries.map((country) => (
        <Link
          to={`/country/${country.id}`}
          key={country.id}
          onClick={() => onCountryChange(country.id)}
          className="block transition-all duration-300 transform hover:scale-105"
        >
          <Card
            className={`overflow-hidden hover:shadow-xl transition-all duration-300 h-full bg-gradient-to-br from-white to-gray-50
              ${selectedCountry === country.id ? "ring-2 ring-ndpa-green" : ""}
            `}
          >
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
            <div className="p-4 flex justify-center items-center">
              <div className="flex items-center space-x-2 text-sm text-gray-600 font-medium">
                <Globe className="h-4 w-4 text-ndpa-green" />
                <span>Explore assessment modules</span>
              </div>
            </div>
          </Card>
        </Link>
      ))}
    </div>
  );
};
