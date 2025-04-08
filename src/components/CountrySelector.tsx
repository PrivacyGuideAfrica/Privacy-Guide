
import { Card } from "@/components/ui/card";
import { Globe, MapPin } from "lucide-react";

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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {countries.map((country) => (
        <Card
          key={country.id}
          className={`cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-lg ${
            selectedCountry === country.id
              ? "ring-2 ring-ndpa-green"
              : "hover:shadow-md"
          }`}
          onClick={() => onCountryChange(country.id)}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-ndpa-navy/80 to-ndpa-green/70 opacity-80" />
            <div className="h-32 bg-gray-200 flex justify-center items-center overflow-hidden">
              <div className="relative z-10 text-white p-6 flex justify-between items-center w-full">
                <div>
                  <h3 className="text-3xl font-bold flex items-center">
                    <span className="mr-2">{country.flagEmoji}</span>
                    {country.name}
                  </h3>
                  <p className="text-white/90 mt-1">{country.description}</p>
                </div>
                <div 
                  className={`bg-white text-ndpa-navy rounded-full p-2 transition-transform ${
                    selectedCountry === country.id ? "scale-110" : "opacity-70"
                  }`}
                >
                  <Globe className="h-5 w-5" />
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 flex items-center justify-center">
            <p className={`text-center ${selectedCountry === country.id ? "font-semibold" : ""}`}>
              {selectedCountry === country.id 
                ? "Currently Selected"
                : "Click to explore assessment modules"}
            </p>
          </div>
        </Card>
      ))}
    </div>
  );
};
