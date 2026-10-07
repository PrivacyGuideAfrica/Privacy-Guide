import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Brand } from "./Brand";

export const Footer = () => <footer className="site-footer print:hidden">
  <div className="page-container">
    <div className="footer-grid">
      <div><Link to="/" aria-label="PrivacyGuide.Africa home"><Brand /></Link><p className="footer-slogan">Data protection made human, for humans.</p></div>
      <div><h2>Resources</h2><ul><li><Link to="/about">About</Link></li><li><Link to="/privacy">Privacy Notice</Link></li><li><Link to="/legal-notice">Legal Notice</Link></li><li><a href="https://quest.privacyguide.africa" target="_blank" rel="noopener noreferrer">UlinziQuest <ArrowUpRight aria-hidden="true" size={14} /></a></li></ul></div>
      <div><h2>Connect</h2><ul><li><a href="https://www.linkedin.com/company/privacy-guide-africa/" target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight aria-hidden="true" size={14} /></a></li><li><a href="https://x.com/PrivacyGuideAfr" target="_blank" rel="noopener noreferrer">X (Twitter) <ArrowUpRight aria-hidden="true" size={14} /></a></li></ul></div>
    </div>
    <div className="footer-bottom">&copy; {new Date().getFullYear()} DataUlinzi. All rights reserved.</div>
  </div>
</footer>;
