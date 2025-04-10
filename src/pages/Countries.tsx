
import { Layout } from "@/components/shared/Layout";
import { CountrySelector } from "@/components/CountrySelector";
import { useState } from "react";
import { MapPin, Globe } from "lucide-react";

const Countries = () => {
  const [selectedCountry, setSelectedCountry] = useState("nigeria");

  return (
    <Layout>
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center p-2 px-4 rounded-full bg-blue-100 text-blue-800 font-medium text-sm mb-4">
              <Globe className="mr-2 h-4 w-4" />
              Countries
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Assessment Modules by Country</h1>
            <p className="mt-2 text-xl text-gray-600 max-w-2xl mx-auto">
              Choose your jurisdiction to access tailored assessment modules for your data protection needs
            </p>
          </div>
          <CountrySelector selectedCountry={selectedCountry} onCountryChange={setSelectedCountry} />
        </div>
      </div>
    </Layout>
  );
};

export default Countries;
