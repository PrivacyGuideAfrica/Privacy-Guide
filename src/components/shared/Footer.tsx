import { Link } from "react-router-dom";
import { ArrowUpRight, Mail } from "lucide-react";
import { Brand } from "./Brand";

export const Footer = () => <footer className="site-footer print:hidden">
  <div className="page-container">
    <div className="footer-grid">
      <div><Link to="/" aria-label="PrivacyGuide.Africa home"><Brand /></Link><p className="mt-5 text-slate-600">Data protection made human, for humans.</p><a className="footer-contact" href="mailto:support@privacyguide.africa"><Mail aria-hidden="true" size={18} />support@privacyguide.africa</a></div>
      <div><h2>Explore</h2><ul><li><Link to="/countries">Country modules</Link></li><li><Link to="/about">About us</Link></li><li><a href="https://quest.privacyguide.africa" target="_blank" rel="noopener noreferrer">UlinziQuest <ArrowUpRight aria-hidden="true" size={14} /></a></li></ul></div>
      <div><h2>Information</h2><ul><li><Link to="/privacy">Privacy Notice</Link></li><li><Link to="/legal-notice">Legal Notice</Link></li></ul></div>
      <div><h2>Connect</h2><ul><li><a href="https://www.linkedin.com/company/privacy-guide-africa/" target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight aria-hidden="true" size={14} /></a></li><li><a href="https://x.com/PrivacyGuideAfr" target="_blank" rel="noopener noreferrer">X (Twitter) <ArrowUpRight aria-hidden="true" size={14} /></a></li></ul></div>
    </div>
    <div className="footer-bottom"><span>&copy; {new Date().getFullYear()} DataUlinzi. All rights reserved.</span><span>Built for clarity. Across Africa.</span></div>
  </div>
</footer>;
