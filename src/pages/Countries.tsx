import { CountrySelector } from "@/components/CountrySelector";
const Countries = () => (
  <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
    <h1 className="text-3xl font-bold">Assessment Modules by Country</h1>
    <p className="mt-4 mb-8 max-w-2xl leading-relaxed text-slate-600">Choose your jurisdiction to find guidance for your organisation. Each country has its own assessment topics and requirements.</p>
    <CountrySelector />
  </div>
);
export default Countries;
