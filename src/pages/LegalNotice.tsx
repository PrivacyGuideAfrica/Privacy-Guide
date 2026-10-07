import { DocumentLayout } from "@/components/shared/DocumentLayout";
import { FileText, AlertTriangle, Link as LinkIcon, AlertCircle, FileBadge, MailQuestion } from "lucide-react";

const sections = [
  { id: 'general-information', label: 'General Information' },
  { id: 'limitation-of-liability', label: 'Limitation of Liability' },
  { id: 'external-links', label: 'External Links' },
  { id: 'website-availability', label: 'Website Availability' },
  { id: 'intellectual-property', label: 'Intellectual Property' },
  { id: 'contact-us', label: 'Contact Us' },
];

const LegalNotice = () => {
  return (
    <>
      <DocumentLayout title="Legal Notice" subtitle="Important information about the use of our website" sections={sections}>
        <div className="space-y-8">
          <section id="general-information" className="document-section" tabIndex={-1}>
            <div className="flex items-start mb-4">
              <div className="document-icon">
                <FileText className="h-6 w-6 text-blue-700" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800">General Information</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              The information contained on this website is for general information purposes only. The information is provided by Privacy Guide Africa ("Us/We"). While we endeavour to keep the information up-to-date and correct through periodic reviews, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability concerning the website or the information or related graphics contained on the website for any purpose. Any reliance you place on such information is, therefore, strictly at your own risk. You should contact a professional if you need specific advice.
            </p>
          </section>

          <section id="limitation-of-liability" className="document-section" tabIndex={-1}>
            <div className="flex items-start mb-4">
              <div className="document-icon">
                <AlertTriangle className="h-6 w-6 text-blue-700" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800">Limitation of Liability</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              In no event will we be liable for any loss or damage, including, without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of or in connection with the use of this website.
            </p>
          </section>

          <section id="external-links" className="document-section" tabIndex={-1}>
            <div className="flex items-start mb-4">
              <div className="document-icon">
                <LinkIcon className="h-6 w-6 text-blue-700" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800">External Links</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Through this website, you may link to other websites that are not under our control. We have no control over the nature, content, and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.
            </p>
          </section>

          <section id="website-availability" className="document-section" tabIndex={-1}>
            <div className="flex items-start mb-4">
              <div className="document-icon">
                <AlertCircle className="h-6 w-6 text-blue-700" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800">Website Availability</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Every effort is made to keep the website up and running smoothly. However, Privacy Guide takes no responsibility for, and will not be liable for, the website being temporarily unavailable due to technical issues beyond our control.
            </p>
          </section>

          <section id="intellectual-property" className="document-section" tabIndex={-1}>
            <div className="flex items-start mb-4">
              <div className="document-icon">
                <FileBadge className="h-6 w-6 text-blue-700" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800">Intellectual Property</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              You may print, save as PDF, and retain your assessment results for your personal records or your organisation’s internal compliance records without requesting permission. Please retain the accompanying sources and disclaimers. Rights in third-party material remain with the relevant rights holders; this permission does not claim exclusive rights over statutes or third-party sources.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              For other copying, modification, republication or commercial reuse of website content, prior written consent is required, except where permitted by applicable law. Contact us at <a href="mailto:support@privacyguide.africa" className="text-blue-700 underline hover:no-underline">support@privacyguide.africa</a>.
            </p>
          </section>

          <section id="contact-us" className="document-section" tabIndex={-1}>
            <div className="flex items-start mb-4">
              <div className="document-icon">
                <MailQuestion className="h-6 w-6 text-blue-700" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800">Contact Us</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              For questions about this Legal Notice or the Website, please contact us at: <a href="mailto:support@privacyguide.africa" className="text-blue-700 underline hover:no-underline">support@privacyguide.africa</a>
            </p>
          </section>
        </div>
      </DocumentLayout>
    </>
  );
};

export default LegalNotice;