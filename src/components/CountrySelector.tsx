import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { countries } from "@/data/catalog";

export const CountrySelector = () => (
  <div className="space-y-10">
    <section aria-labelledby="available-countries">
      <h2 id="available-countries" className="text-2xl font-semibold mb-5">Available countries</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {countries.filter(country => country.status === "available").map(country => (
          <Link key={country.id} to={`/country/${country.id}`} className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-colors hover:border-blue-700">
            <span aria-hidden="true" className="text-3xl">{country.flagEmoji}</span>
            <h3 className="mt-3 text-xl font-semibold text-slate-900">{country.name}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">{country.lawName}</p>
            <p className="mt-4 text-sm text-slate-600">{country.modules.filter(module => module.status === "available").length} available assessments</p>
            <span className="mt-4 inline-flex items-center gap-2 font-medium text-blue-800">Explore modules <ArrowRight aria-hidden="true" className="h-4 w-4" /></span>
          </Link>
        ))}
      </div>
    </section>
    <section aria-labelledby="upcoming-countries" className="rounded-xl bg-slate-100 p-6">
      <h2 id="upcoming-countries" className="text-xl font-semibold">Coming next</h2>
      <p className="mt-2 text-slate-600">{countries.filter(country => country.status === "upcoming").map(country => country.name).join(" and ")} assessments are not yet available.</p>
      <a className="mt-3 inline-block font-medium text-blue-800 underline" href="mailto:support@privacyguide.africa">Suggest a country</a>
    </section>
  </div>
);
