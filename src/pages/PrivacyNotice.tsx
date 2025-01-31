import { Navbar } from "@/components/Navbar";

const PrivacyNotice = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-ndpa-navy mb-8">Privacy Notice</h1>
        <div className="space-y-6 text-gray-700">
          <section>
            <h2 className="text-xl font-semibold mb-4">About Privacy Guide</h2>
            <p>
              Privacy Guide is a tool designed to assist African organisations with understanding compliance with data protection laws across the continent. Our aim is to simplify compliance through actionable and easy-to-use assessment modules.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">The data we process</h2>
            <p>
              When you visit our website (privacyguide.africa) or complete any of our assessment modules, we do not collect personal data unless you choose to share it—like when you need help resolving an issue. Our goal? To better understand your business operations and help assess your compliance level. However, when you visit, your device may automatically share some information with our website server, including:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Your IP address</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Date and time of your visit</li>
              <li>Pages you viewed</li>
            </ul>
            <p className="mt-4">
              This data is processed without your active intervention and only stored temporarily before it is automatically deleted.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Why we need your data</h2>
            <p>
              When you visit our website to complete our assessment modules, your device automatically shares some information with our servers. This is essential to identify your device and ensure everything works smoothly. If you email us for help, we may process your personal data to respond to your inquiry and provide support to you.
            </p>
            <p className="mt-2">
              We only collect what's necessary to provide you with the best experience.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Our lawful basis</h2>
            <p>
              We rely on legitimate interest as the legal reason for processing your IP address and device information. This helps us recognise your device when you visit our website, making your browsing experience smoother and secure. We also rely on legitimate interest as the legal reason for processing your email address when you make an inquiry.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Your rights under the law</h2>
            <p>
              You're in control! You have a right to access your data and ask us to correct or even erase it. You can object to processing, restrict processing, transfer to another system or entity and even withdraw consent. You also have the right concerning automated decision-making, including profiling, just that we do not profile.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Cookies and tracking technologies</h2>
            <p>
              We don't use cookies on our website. None. Zero. Zilch. Your browsing stays your business. However, to keep the website running smoothly, we rely on third-party services for hosting, performance monitoring, and security. These services may make automated requests in the background to ensure the site remains available and functional. These requests do not track your personal activities, nor do they collect personally identifiable information about you.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">What happens if your data moves outside?</h2>
            <p>
              If your data takes a trip abroad, we make sure we take measures to protect it from choice of service provider to country.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">How to access us</h2>
            <p>
              We believe privacy doesn't have to be complicated. If you've got questions or concerns, reach out to us at support@privacyguide.africa.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyNotice;