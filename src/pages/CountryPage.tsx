import { Link, useParams } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Compass } from "lucide-react";
import { AssessmentModules } from "@/components/AssessmentModules";
import { Button } from "@/components/ui/button";
import { findCountry } from "@/data/catalog";

const CountryPage = () => {
  const { countryId } = useParams<{ countryId: string }>();
  const country = findCountry(countryId || "");
  if (!country || country.status !== "available") return <div className="page-container empty-state"><Compass aria-hidden="true" /><h1>Country not found</h1><p>Find guidance for one of our available countries.</p><Button asChild><Link to="/countries">Explore available countries <ArrowRight aria-hidden="true" /></Link></Button></div>;
  const firstModule = country.modules.find(module => module.link === country.startPath);
  return <div className="page-container page-space">
    <header className="country-intro">
      <div className="country-intro-copy">
        <div className="country-title"><span aria-hidden="true" className="country-flag">{country.flagEmoji}</span><h1>{country.name}</h1></div>
        <p className="country-law-title">{country.lawName}{country.lawName?.includes(country.lawYear || "") ? "" : ` (${country.lawYear})`}</p>
        <p className="country-intro-description">Explore guided assessments to understand your obligations under the {country.lawName} and related requirements.</p>
        {country.regulator && <a className="regulator-link" href={country.regulator.url} target="_blank" rel="noopener noreferrer">{country.regulator.label}<ArrowUpRight aria-hidden="true" size={18} /></a>}
      </div>
      <div className="country-hero-art" aria-hidden="true"><span className="country-outline" style={{ maskImage: `url(/images/countries/${country.id}-outline.svg)` }} /><img className="country-scene" src={`/images/countries/${country.id}.webp`} width="768" height="512" alt="" /></div>
    </header>
    {firstModule && <section aria-labelledby="start-here" className="start-panel"><span className="icon-tile"><Compass aria-hidden="true" /></span><div><h2 id="start-here">Not sure where to start?</h2><p>{firstModule.description}.</p></div><Button asChild><Link to={firstModule.link}>Start here: {firstModule.title}<ArrowRight aria-hidden="true" /></Link></Button></section>}
    <AssessmentModules country={country.id} />
  </div>;
};
export default CountryPage;
