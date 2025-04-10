
import { Shield, Eye, Server, Scale, UserCheck, Cookie, Globe, MessageSquare } from "lucide-react";
import { Layout } from "@/components/shared/Layout";

const PrivacyNotice = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-ndpa-navy mb-3">Privacy Notice</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">Transparent, straightforward, and human</p>
        </div>
        
        <div className="space-y-10">
          <section className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
            <div className="flex items-start mb-4">
              <div className="bg-blue-50 p-3 rounded-lg mr-4">
                <Shield className="h-6 w-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800">About Privacy Guide</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Privacy Guide is a tool designed to help African organisations understand and navigate data protection compliance across the continent. Our goal is to make compliance less intimidating, more accessible, and actually useful, through easy-to-use assessment modules and clear, actionable guidance.
            </p>
          </section>

          <section className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
            <div className="flex items-start mb-4">
              <div className="bg-green-50 p-3 rounded-lg mr-4">
                <Eye className="h-6 w-6 text-green-600" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800">The Data We Process</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              When you visit privacyguide.africa or use our assessment tools, we don't collect personal data unless you choose to share it, like when you contact us for help.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              However, some technical information is automatically shared with our server when you visit the site. This includes:
            </p>
            <ul className="list-disc pl-8 space-y-2 text-gray-700 mb-4">
              <li>Your IP address</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Date and time of your visit</li>
              <li>Pages viewed</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              This data is processed passively and stored temporarily to keep things running smoothly. It is automatically deleted after a short time.
            </p>
          </section>

          <section className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
            <div className="flex items-start mb-4">
              <div className="bg-purple-50 p-3 rounded-lg mr-4">
                <Server className="h-6 w-6 text-purple-600" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800">Why We Need This Data</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use technical information to:
            </p>
            <ul className="list-disc pl-8 space-y-2 text-gray-700 mb-4">
              <li>Recognise your device</li>
              <li>Ensure website stability and security</li>
              <li>Improve your experience while navigating our site</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              If you email us, we'll also process your contact details to respond and support you, nothing more.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4 font-medium">
              We only collect what we actually need, and nothing we don't.
            </p>
          </section>

          <section className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
            <div className="flex items-start mb-4">
              <div className="bg-orange-50 p-3 rounded-lg mr-4">
                <Server className="h-6 w-6 text-orange-600" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800">Analytics: Yes, But the Privacy-Respecting Kind</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use Umami Analytics, a privacy-friendly, cookie-less analytics tool that helps us understand how people use our site, without tracking you.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Umami doesn't use cookies, doesn't collect personal data, and doesn't follow you around the internet. It gives us the insights we need (like which pages are popular) while respecting your privacy 100%.
            </p>
          </section>

          <section className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
            <div className="flex items-start mb-4">
              <div className="bg-indigo-50 p-3 rounded-lg mr-4">
                <Scale className="h-6 w-6 text-indigo-600" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800">Our Lawful Basis</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              We rely on legitimate interest to process:
            </p>
            <ul className="list-disc pl-8 space-y-2 text-gray-700 mb-4">
              <li>Technical data (IP address, browser, etc.)</li>
              <li>Email contact details when you reach out</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              This allows us to keep the website functional and respond to your requests without compromising your rights.
            </p>
          </section>

          <section className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
            <div className="flex items-start mb-4">
              <div className="bg-red-50 p-3 rounded-lg mr-4">
                <UserCheck className="h-6 w-6 text-red-600" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800">Your Rights</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              You have rights over your personal data, and we respect them all:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
              <div className="bg-gray-50 p-3 rounded text-gray-700">Access it</div>
              <div className="bg-gray-50 p-3 rounded text-gray-700">Correct it</div>
              <div className="bg-gray-50 p-3 rounded text-gray-700">Erase it</div>
              <div className="bg-gray-50 p-3 rounded text-gray-700">Object to how we use it</div>
              <div className="bg-gray-50 p-3 rounded text-gray-700">Restrict what we do with it</div>
              <div className="bg-gray-50 p-3 rounded text-gray-700">Transfer it somewhere else</div>
              <div className="bg-gray-50 p-3 rounded text-gray-700">Withdraw consent at any time</div>
            </div>
            <p className="text-gray-700 italic">
              P.S. We don't do profiling or automated decision-making, so nothing sneaky is happening behind the scenes.
            </p>
          </section>

          <section className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
            <div className="flex items-start mb-4">
              <div className="bg-yellow-50 p-3 rounded-lg mr-4">
                <Cookie className="h-6 w-6 text-yellow-600" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800">No Cookies, No Creeping</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              We don't use cookies. None. Nada. Zilch.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Your browsing habits are none of our business.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We do rely on third-party services to keep the site fast and secure, and they may make background requests, but they don't track you or collect personally identifiable information.
            </p>
          </section>

          <section className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
            <div className="flex items-start mb-4">
              <div className="bg-teal-50 p-3 rounded-lg mr-4">
                <Globe className="h-6 w-6 text-teal-600" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800">International Data Transfers</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              If your data has to cross borders (digitally speaking), we only work with service providers who offer strong privacy protections. No wild west vibes, just responsible data handling.
            </p>
          </section>

          <section className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
            <div className="flex items-start mb-4">
              <div className="bg-pink-50 p-3 rounded-lg mr-4">
                <MessageSquare className="h-6 w-6 text-pink-600" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800">Talk to Us</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Got questions? Confused? Curious? Just want to say hi?<br />
              Email us at <a href="mailto:support@privacyguide.africa" className="text-blue-600 hover:underline">support@privacyguide.africa</a>, and a real human (not a bot) will get back to you.
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyNotice;
