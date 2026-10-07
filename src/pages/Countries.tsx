import { CountrySelector } from "@/components/CountrySelector";
const Countries = () => <div className="page-container page-space">
  <header className="page-intro"><p className="eyebrow">Across Africa</p><h1>Assessment Modules <span>by Country</span></h1><p>Choose your jurisdiction to find guidance for your organisation. Each country has its own assessment topics and requirements.</p></header>
  <CountrySelector />
</div>;
export default Countries;
