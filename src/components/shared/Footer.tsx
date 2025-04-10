
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-4">PrivacyGuide.Africa</h3>
            <p className="text-gray-400 mb-4 max-w-md">
              Data protection made human, for humans.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Notice</Link></li>
              <li><Link to="/legal-notice" className="text-gray-400 hover:text-white transition-colors">Legal Notice</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li><a href="https://www.linkedin.com/company/privacy-guide-africa/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a></li>
              <li><a href="https://x.com/PrivacyGuideAfr" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">X (Twitter)</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
          &copy; 2025 DataUlinzi. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
