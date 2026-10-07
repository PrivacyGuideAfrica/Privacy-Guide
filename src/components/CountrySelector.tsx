import { Link } from "react-router-dom";
import { ArrowRight, FileText, Plus } from "lucide-react";
import { countries } from "@/data/catalog";

export const CountrySelector = ({ compact = false }: { compact?: boolean }) => <div className="country-selector">
  <section aria-labelledby="available-countries">
    <h2 id="available-countries" className={compact ? "sr-only" : "directory-label"}>Available countries</h2>
    <div className={`country-grid ${compact ? "country-grid-compact" : ""}`}>
      {countries.filter(country => country.status === "available").map(country => <Link key={country.id} to={`/country/${country.id}`} className="country-card">
        <div className="country-card-top"><span aria-hidden="true" className="country-flag">{country.flagEmoji}</span><ArrowRight aria-hidden="true" className="country-arrow" size={20} /></div>
        <h3>{country.name}</h3>
        <p className="country-law">{country.lawName}{!country.lawName?.includes(country.lawYear || "") && ` (${country.lawYear})`}</p>
        <div className="country-card-bottom"><span><FileText aria-hidden="true" size={16} />{country.modules.filter(module => module.status === "available").length} <span className="sr-only">available </span>assessments</span><span className="country-explore">Explore modules <ArrowRight aria-hidden="true" size={16} /></span></div>
      </Link>)}
    </div>
  </section>
  {!compact && <section aria-labelledby="upcoming-countries" className="upcoming-countries"><div><h2 id="upcoming-countries">Coming next</h2><p>{countries.filter(country => country.status === "upcoming").map(country => country.name).join(" and ")} assessments are not yet available.</p></div><a className="text-action" href="mailto:support@privacyguide.africa"><Plus aria-hidden="true" size={18} />Suggest a country</a></section>}
</div>;
