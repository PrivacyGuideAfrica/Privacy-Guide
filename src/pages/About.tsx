import { Button } from "@/components/ui/button";
import { Linkedin, Users, Target, Heart, Zap, ShieldCheck, Globe, Twitter } from "lucide-react";
import { Layout } from "@/components/shared/Layout";

const About = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-ndpa-navy mb-3">About Us</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">Making data protection accessible across Africa</p>
        </div>
        
        <div className="space-y-8">
          <section className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
            <div className="flex items-start mb-6">
              <div className="bg-blue-50 p-3 rounded-lg mr-4">
                <ShieldCheck className="h-6 w-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800">Our Purpose</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Welcome to the Privacy Assessment Tool by Privacy Guide Africa, a platform designed by DataUlinzi to help African organisations of all sizes, small, medium and large, navigate the complexities of compliance with African data protection Laws.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="mx-auto w-12 h-12 flex items-center justify-center bg-indigo-100 rounded-full mb-4">
                  <Target className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="font-medium text-gray-900 mb-1">Accessible</h3>
                <p className="text-gray-600 text-sm">Breaking down complex requirements</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="mx-auto w-12 h-12 flex items-center justify-center bg-green-100 rounded-full mb-4">
                  <Zap className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-medium text-gray-900 mb-1">Actionable</h3>
                <p className="text-gray-600 text-sm">Clear steps to compliance</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="mx-auto w-12 h-12 flex items-center justify-center bg-orange-100 rounded-full mb-4">
                  <Heart className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="font-medium text-gray-900 mb-1">User-friendly</h3>
                <p className="text-gray-600 text-sm">Designed with humans in mind</p>
              </div>
            </div>
          </section>

          <section className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
            <div className="flex items-start mb-6">
              <div className="bg-purple-50 p-3 rounded-lg mr-4">
                <Globe className="h-6 w-6 text-purple-600" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800">Our Mission</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Our mission is simple: to make data protection compliance accessible, actionable, and user-friendly. With structured and easy-to-use assessment modules, we aim to empower businesses by simplifying the process of identifying their obligations under various data protection laws and fostering a stronger data protection culture across Africa.
            </p>
          </section>

          <section className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
            <div className="flex items-start mb-6">
              <div className="bg-green-50 p-3 rounded-lg mr-4">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800">The Team</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-6">
              This platform is a product of collaboration between Tolulope Ogundele and Ridwan Oloyede, privacy professionals dedicated to supporting organisations in meeting their regulatory obligations efficiently and effectively.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-3">Tolulope Ogundele</h3>
                <Button variant="outline" asChild className="gap-2 w-full">
                  <a
                    href="https://www.linkedin.com/in/tolulope-ogundele/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-4 w-4" />
                    Connect on LinkedIn
                  </a>
                </Button>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-3">Ridwan Oloyede</h3>
                <Button variant="outline" asChild className="gap-2 w-full">
                  <a
                    href="https://www.linkedin.com/in/oloyederidwan/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-4 w-4" />
                    Connect on LinkedIn
                  </a>
                </Button>
              </div>
            </div>
          </section>

          <section className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-2">Connect with Privacy Guide Africa</h2>
                <p className="text-gray-700 italic mb-4 md:mb-0">
                  We believe that understanding data protection shouldn't be daunting. Let's make compliance straightforward together!
                </p>
              </div>
              <div className="flex gap-3">
                <Button variant="outline" asChild className="gap-2">
                  <a
                    href="https://www.linkedin.com/company/privacy-guide-africa/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </a>
                </Button>
                <Button variant="outline" asChild className="gap-2">
                  <a
                    href="https://x.com/PrivacyGuideAfr"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Twitter className="h-4 w-4" />
                    Twitter
                  </a>
                </Button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default About;
