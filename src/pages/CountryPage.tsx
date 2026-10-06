import { Link, useParams } from "react-router-dom";
import { AssessmentModules } from "@/components/AssessmentModules";
import { Button } from "@/components/ui/button";
import { findCountry } from "@/data/catalog";

const CountryPage = () => {
  const { countryId } = useParams<{ countryId: string }>();
  const country = findCountry(countryId || "");
  if (!country || country.status !== "available") return (
    <div className="mx-auto max-w-3xl px-4 py-12 text-center">
      <h1 className="text-3xl font-bold">Country not found</h1>
      <Link to="/countries" className="mt-6 inline-block text-blue-800 underline">Explore available countries</Link>
    </div>
  );
  const firstModule = country.modules.find(module => module.link === country.startPath);
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      <div className="mb-8">
        <p aria-hidden="true" className="text-4xl mb-3">{country.flagEmoji}</p>
        <h1 className="text-4xl font-bold">{country.name}</h1>
        <p className="mt-3 text-lg text-slate-600">{country.lawName}{country.lawName?.includes(country.lawYear || "") ? "" : ` (${country.lawYear})`}</p>
      </div>
      {firstModule && <section aria-labelledby="start-here" className="mb-10 rounded-xl border border-blue-200 bg-blue-50 p-6">
        <h2 id="start-here" className="text-xl font-semibold">Not sure where to start?</h2>
        <p className="mt-2 mb-5 text-slate-700">{firstModule.description}.</p>
        <Button asChild><Link to={firstModule.link}>Start here: {firstModule.title}</Link></Button>
      </section>}
      <AssessmentModules country={country.id} />
    </div>
  );
};
export default CountryPage;
