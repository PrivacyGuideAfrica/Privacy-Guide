import { Navbar } from "@/components/Navbar";

const LegalNotice = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-ndpa-navy mb-8">Legal Notice</h1>
        <div className="space-y-6 text-gray-700">
          <p>
            The information contained on this website is for general information purposes only. The information is provided by Privacy Guide Africa ("Us/We"). While we endeavour to keep the information up-to-date and correct through periodic reviews, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability concerning the website or the information or related graphics contained on the website for any purpose. Any reliance you place on such information is, therefore, strictly at your own risk. You should contact a professional if you need specific advice.
          </p>
          <p>
            In no event will we be liable for any loss or damage, including, without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of or in connection with the use of this website.
          </p>
          <p>
            Through this website, you may link to other websites that are not under our control. We have no control over the nature, content, and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.
          </p>
          <p>
            Every effort is made to keep the website up and running smoothly. However, Privacy Guide takes no responsibility for, and will not be liable for, the website being temporarily unavailable due to technical issues beyond our control.
          </p>
          <p>
            If you intend to save, copy, modify, or use any part of the information on this website for your purposes, including but not limited to commercial purposes, prior written consent is required. You can send us an email at support@privacyguide.africa.
          </p>
          <p>
            For questions about this Legal Notice or the Website, please contact us at: support@privacyguide.africa.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LegalNotice;