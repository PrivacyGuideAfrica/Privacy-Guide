import { DocumentLayout } from "@/components/shared/DocumentLayout";

import { Shield, Eye, Server, Scale, UserCheck, Clock, Globe, MessageSquare } from "lucide-react";

const sections = [
  { id: 'about-privacy-guide-africa', label: 'About Privacy Guide Africa' },
  { id: 'the-data-we-process', label: 'The Data We Process' },
  { id: 'why-we-need-this-data', label: 'Why We Need This Data' },
  { id: 'analytics', label: 'Analytics' },
  { id: 'our-lawful-basis', label: 'Our Lawful Basis' },
  { id: 'your-rights', label: 'Your Rights' },
  { id: 'how-long-we-keep-information', label: 'How Long We Keep Information' },
  { id: 'international-data-transfers', label: 'International Data Transfers' },
  { id: 'talk-to-us', label: 'Talk to Us' },
];

const PrivacyNotice = () => {
  return (
    <>
      <DocumentLayout title="Privacy Notice" subtitle="Transparent, straightforward, and human" sections={sections}>
        <div className="space-y-10">
          <section id="about-privacy-guide-africa" className="document-section" tabIndex={-1}>
            <div className="flex items-start mb-4">
              <div className="document-icon">
                <Shield className="h-6 w-6 text-blue-700" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800">About Privacy Guide Africa</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Privacy Guide is a tool designed to help African organisations understand and navigate data protection compliance across the continent. Our goal is to make compliance less intimidating, more accessible, and actually useful, through easy-to-use assessment modules and clear, actionable guidance.
            </p>
          </section>

          <section id="the-data-we-process" className="document-section" tabIndex={-1}>
            <div className="flex items-start mb-4">
              <div className="document-icon">
                <Eye className="h-6 w-6 text-blue-700" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800">The Data We Process</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              You can use our assessments without creating an account. Assessment answers are held in the page while you use it. Printing or saving a PDF uses your browser’s print dialog; copies can include your answers and results. You control the copies you create or share. If you contact us, we process your email address, your name if provided, and the information you include in your message.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Netlify hosts this website. Loading the website involves sending technical information to our hosting provider, including your IP address and browser request information. Technical information may include:
            </p>
            <ul className="list-disc pl-8 space-y-2 text-gray-700 mb-4">
              <li>Your IP address</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Date and time of your visit</li>
              <li>Pages viewed</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Technical information can be personal data even when we do not know your name. The information a provider receives to deliver a service may differ from the information shown to site administrators.
            </p>
          </section>

          <section id="why-we-need-this-data" className="document-section" tabIndex={-1}>
            <div className="flex items-start mb-4">
              <div className="document-icon">
                <Server className="h-6 w-6 text-blue-700" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800">Why We Need This Data</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use technical information to:
            </p>
            <ul className="list-disc pl-8 space-y-2 text-gray-700 mb-4">
              <li>Deliver pages to your browser</li>
              <li>Ensure website stability and security</li>
              <li>Improve your experience while navigating our site</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              If you email us, we use your contact details and message to respond and handle your enquiry. Access to the support mailbox is limited to site administrators.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4 font-medium">
              Please avoid including sensitive personal information or confidential assessment details in support emails.
            </p>
          </section>

          <section id="analytics" className="document-section" tabIndex={-1}>
            <div className="flex items-start mb-4">
              <div className="document-icon">
                <Server className="h-6 w-6 text-blue-700" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800">Analytics</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use Umami Analytics to understand our audience and improve the site. The information available to our site administrators is limited to country and device, browser or operating-system information, such as Chrome or Safari on macOS.
            </p>
            <p className="text-gray-700 leading-relaxed">
              These reports do not give us your name or email address. Your browser contacts Umami to load its analytics service. The limited information in our reports does not establish what technical information Umami processes to produce them.
            </p>
          </section>

          <section id="our-lawful-basis" className="document-section" tabIndex={-1}>
            <div className="flex items-start mb-4">
              <div className="document-icon">
                <Scale className="h-6 w-6 text-blue-700" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800">Our Lawful Basis</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Where permitted by applicable law, we rely on legitimate interests for the following purposes:
            </p>
            <ul className="list-disc pl-8 space-y-2 text-gray-700 mb-4">
              <li>Delivering, maintaining and securing the website using technical information</li>
              <li>Understanding country and device usage through analytics to improve the site</li>
              <li>Responding to enquiries using support email details and messages</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              This basis requires us to consider whether the processing is necessary and balance our interests against your rights and interests. You can contact us to object to processing based on legitimate interests.
            </p>
          </section>

          <section id="your-rights" className="document-section" tabIndex={-1}>
            <div className="flex items-start mb-4">
              <div className="document-icon">
                <UserCheck className="h-6 w-6 text-blue-700" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800">Your Rights</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Depending on the law that applies to you and the circumstances of the processing, you may have rights to:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
              <div className="bg-gray-50 p-3 rounded text-gray-700">Access it</div>
              <div className="bg-gray-50 p-3 rounded text-gray-700">Correct it</div>
              <div className="bg-gray-50 p-3 rounded text-gray-700">Erase it</div>
              <div className="bg-gray-50 p-3 rounded text-gray-700">Object to how we use it</div>
              <div className="bg-gray-50 p-3 rounded text-gray-700">Restrict what we do with it</div>
              <div className="bg-gray-50 p-3 rounded text-gray-700">Transfer it somewhere else</div>
            </div>
            <p className="text-gray-700 italic">
              To ask about these rights or object to processing based on legitimate interests, email support@privacyguide.africa. You may also have the right to complain to the relevant data protection authority. Assessment results provide general guidance; they do not make decisions about your legal rights.
            </p>
          </section>

          <section id="how-long-we-keep-information" className="document-section" tabIndex={-1}>
            <div className="flex items-start mb-4">
              <div className="document-icon">
                <Clock className="h-6 w-6 text-blue-700" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800">How Long We Keep Information</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our retention policy for technical and analytics data under our control is a maximum of three months.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Support emails are retained for one year. Access is limited to site administrators.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Provider retention and deletion settings are being checked against this policy. We cannot yet confirm that Netlify and Umami delete all provider-held information within three months.
            </p>
          </section>

          <section id="international-data-transfers" className="document-section" tabIndex={-1}>
            <div className="flex items-start mb-4">
              <div className="document-icon">
                <Globe className="h-6 w-6 text-blue-700" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800">International Data Transfers</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Our hosting, analytics and email services may involve processing information outside your country. We are confirming the processing locations and any transfer safeguards that apply to our provider accounts. Contact us at support@privacyguide.africa with questions about international processing.
            </p>
          </section>

          <section id="talk-to-us" className="document-section" tabIndex={-1}>
            <div className="flex items-start mb-4">
              <div className="document-icon">
                <MessageSquare className="h-6 w-6 text-blue-700" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800">Talk to Us</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              For privacy questions or requests about your personal data, contact Privacy Guide Africa.<br />
              Email us at <a href="mailto:support@privacyguide.africa" className="text-blue-700 underline hover:no-underline">support@privacyguide.africa</a>.
            </p>
          </section>
        </div>
      </DocumentLayout>
    </>
  );
};

export default PrivacyNotice;
