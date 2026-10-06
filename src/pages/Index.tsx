import { Link } from "react-router-dom";
import { ArrowRight, Check, Globe, ListChecks, FileCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CountrySelector } from "@/components/CountrySelector";

const Index = () => (
  <>
    <section className="bg-gradient-to-br from-blue-950 to-blue-800 text-white">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <p className="mb-5 text-sm font-semibold uppercase tracking-widest text-blue-100">PrivacyGuide.Africa</p>
        <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">Your Compliance Companion for Africa's Privacy Laws</h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-blue-50">Find the guidance that applies to your organisation. Choose a country, answer a few questions, and understand your next steps.</p>
        <Button size="lg" asChild className="mt-8 bg-white text-blue-950 hover:bg-blue-50">
          <Link to="/countries">Explore Country Modules <ArrowRight aria-hidden="true" className="ml-2 h-5 w-5" /></Link>
        </Button>
        <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-blue-50">
          {["Free to use", "No account needed", "Clear next steps"].map(item => <li key={item} className="flex items-center gap-2"><Check aria-hidden="true" className="h-4 w-4" />{item}</li>)}
        </ul>
      </div>
    </section>
    <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6" aria-labelledby="home-country-heading">
      <h2 id="home-country-heading" className="text-3xl font-bold">Start with your country</h2>
      <p className="mt-3 mb-8 max-w-2xl leading-relaxed text-slate-600">Rules differ by jurisdiction. Select where your organisation operates or handles personal data.</p>
      <CountrySelector />
    </section>
    <section className="bg-slate-100" aria-labelledby="how-it-works">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <h2 id="how-it-works" className="text-2xl font-semibold">From questions to next steps</h2>
        <ol className="mt-8 grid gap-8 md:grid-cols-3">
          {[
            { icon: Globe, title: "Choose a country and topic", text: "Start with applicability if you are unsure where to begin." },
            { icon: ListChecks, title: "Answer at your own pace", text: "Read the explanations and go back to change an answer whenever you need." },
            { icon: FileCheck, title: "Review and keep your results", text: "Review your answers, read the guidance, and print a copy for your records." },
          ].map((step, index) => <li key={step.title}><step.icon aria-hidden="true" className="h-7 w-7 text-blue-800" /><h3 className="mt-4 text-lg font-semibold">{index + 1}. {step.title}</h3><p className="mt-2 leading-relaxed text-slate-600">{step.text}</p></li>)}
        </ol>
        <p className="mt-8 text-sm text-slate-600">This tool offers general guidance. For decisions specific to your organisation, consult the relevant regulator or a qualified adviser.</p>
      </div>
    </section>
  </>
);
export default Index;
