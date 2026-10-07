import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Check, Globe2, ListChecks, FileText, MoveDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CountrySelector } from "@/components/CountrySelector";

const Index = () => <>
  <section className="home-hero">
    <div className="page-container hero-grid">
      <div className="hero-copy">
        <p className="eyebrow"><span /> A little clarity goes a long way</p>
        <h1>Your Compliance Companion for <span>Africa's Privacy Laws</span></h1>
        <p className="hero-description">A free tool to help organisations across Africa assess their data protection obligations and understand local compliance requirements.</p>
        <div className="hero-actions"><Button size="lg" asChild><Link to="/countries">Explore Country Modules <ArrowRight aria-hidden="true" /></Link></Button><a className="text-action" href="#how-it-works">See how it works <MoveDown aria-hidden="true" size={16} /></a></div>
        <ul className="hero-reassurance">{["Free to use", "No account needed"].map(item => <li key={item}><Check aria-hidden="true" size={16} />{item}</li>)}</ul>
      </div>
      <div className="hero-visual" aria-hidden="true">
        <img src="/images/africa-glass.webp" width="1254" height="1254" alt="" fetchPriority="high" />
        <div className="hero-glass-card"><span className="icon-tile"><ListChecks size={22} /></span><div><strong>Your next step, made clearer.</strong><span>Choose. Assess. Understand.</span></div><ArrowUpRight size={20} /></div>
      </div>
    </div>
  </section>
  <section className="page-container section-space" aria-labelledby="home-country-heading">
    <div className="section-heading"><div><p className="eyebrow">Find your starting point</p><h2 id="home-country-heading">Start with your country</h2><p>Local laws. Guidance for your organisation.</p></div><Link className="text-action" to="/countries">View all countries <ArrowUpRight aria-hidden="true" size={18} /></Link></div>
    <CountrySelector compact />
  </section>
  <section className="how-section section-space" id="how-it-works" aria-labelledby="how-heading">
    <div className="page-container">
      <div className="section-heading"><div><p className="eyebrow">A clearer way forward</p><h2 id="how-heading">From questions to next steps</h2><p>Take it one question at a time. We’ll guide you through.</p></div></div>
      <ol className="steps-grid">{[
        { icon: Globe2, title: "Choose a country and topic", text: "Start with applicability if you are unsure where to begin." },
        { icon: ListChecks, title: "Answer at your own pace", text: "Read the explanations and go back to change an answer whenever you need." },
        { icon: FileText, title: "Review and keep your results", text: "Review your answers, read the guidance, and print a copy for your records." },
      ].map((step, index) => <li key={step.title}><div className="step-top"><span className="icon-tile"><step.icon aria-hidden="true" /></span><span className="step-number">0{index + 1}</span></div><h3>{step.title}</h3><p>{step.text}</p></li>)}</ol>
      <p className="guidance-disclaimer">This tool offers general guidance. For decisions specific to your organisation, consult the relevant regulator or a qualified adviser.</p>
    </div>
  </section>
  <section className="page-container section-space"><div className="home-closing"><span className="icon-tile"><Sparkles aria-hidden="true" /></span><h2>Clarity starts with a question.</h2><p>No account needed. No hidden fees. Just clarity.</p><Button asChild size="lg"><Link to="/countries">Start Free Assessment <ArrowRight aria-hidden="true" /></Link></Button></div></section>
</>;
export default Index;
