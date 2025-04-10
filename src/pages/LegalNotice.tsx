import { FileText, AlertTriangle, Link as LinkIcon, AlertCircle, FileBadge, MailQuestion } from "lucide-react";
import { Layout } from "@/components/shared/Layout";

const LegalNotice = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-ndpa-navy mb-3">Legal Notice</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">Important information about the use of our website</p>
        </div>
        
        <div className="space-y-8">
          <section className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
            <div className="flex items-start mb-4">
              <div className="bg-blue-50 p-3 rounded-lg mr-4">
                <FileText className="h-6 w-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800">General Information</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              The information contained on this website is for general information purposes only. The information is provided by Privacy Guide Africa ("Us/We"). While we endeavour to keep the information up-to-date and correct through periodic reviews, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability concerning the website or the information or related graphics contained on the website for any purpose. Any reliance you place on such information is, therefore, strictly at your own risk. You should contact a professional if you need specific advice.
            </p>
          </section>

          <section className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
            <div className="flex items-start mb-4">
              <div className="bg-orange-50 p-3 rounded-lg mr-4">
                <AlertTriangle className="h-6 w-6 text-orange-600" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800">Limitation of Liability</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              In no event will we be liable for any loss or damage, including, without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of or in connection with the use of this website.
            </p>
          </section>

          <section className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
            <div className="flex items-start mb-4">
              <div className="bg-indigo-50 p-3 rounded-lg mr-4">
                <LinkIcon className="h-6 w-6 text-indigo-600" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800">External Links</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Through this website, you may link to other websites that are not under our control. We have no control over the nature, content, and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.
            </p>
          </section>

          <section className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
            <div className="flex items-start mb-4">
              <div className="bg-green-50 p-3 rounded-lg mr-4">
                <AlertCircle className="h-6 w-6 text-green-600" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800">Website Availability</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Every effort is made to keep the website up and running smoothly. However, Privacy Guide takes no responsibility for, and will not be liable for, the website being temporarily unavailable due to technical issues beyond our control.
            </p>
          </section>

          <section className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
            <div className="flex items-start mb-4">
              <div className="bg-purple-50 p-3 rounded-lg mr-4">
                <FileBadge className="h-6 w-6 text-purple-600" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800">Intellectual Property</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              If you intend to save, copy, modify, or use any part of the information on this website for your purposes, including but not limited to commercial purposes, prior written consent is required. You can send us an email at support@privacyguide.africa.
            </p>
          </section>

          <section className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
            <div className="flex items-start mb-4">
              <div className="bg-pink-50 p-3 rounded-lg mr-4">
                <MailQuestion className="h-6 w-6 text-pink-600" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800">Contact Us</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              For questions about this Legal Notice or the Website, please contact us at: <a href="mailto:support@privacyguide.africa" className="text-blue-600 hover:underline">support@privacyguide.africa</a>
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default LegalNotice;