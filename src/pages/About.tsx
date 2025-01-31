import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Linkedin } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm p-8 space-y-6">
          <h1 className="text-3xl font-bold text-ndpa-navy">About Us</h1>
          
          <div className="space-y-4">
            <p className="text-gray-700">
              Welcome to the Privacy Assessment Tool by Privacy Guide Africa, a platform designed by DataUlinzi to help African organisations of all sizes, small, medium and large, navigate the complexities of compliance with African data protection Laws.
            </p>

            <p className="text-gray-700">
              Our mission is simple: to make data protection compliance accessible, actionable, and user-friendly. With structured and easy-to-use assessment modules, we aim to empower businesses by simplifying the process of identifying their obligations under various data protection laws and fostering a stronger data protection culture across Nigeria.
            </p>

            <p className="text-gray-700">
              This platform is a product of collaboration between Tolulope Ogundele and Ridwan Oloyede, privacy professionals dedicated to supporting organisations in meeting their regulatory obligations efficiently and effectively.
            </p>

            <div className="pt-6">
              <h2 className="text-xl font-semibold mb-4">Connect with us:</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Button variant="outline" asChild className="gap-2">
                    <a
                      href="https://www.linkedin.com/in/tolulope-ogundele/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-4 w-4" />
                      Tolulope Ogundele
                    </a>
                  </Button>
                </div>
                <div className="flex items-center gap-4">
                  <Button variant="outline" asChild className="gap-2">
                    <a
                      href="https://www.linkedin.com/in/oloyederidwan/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-4 w-4" />
                      Ridwan Oloyede
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            <p className="text-gray-700 pt-6 italic">
              We believe that understanding data protection shouldn't be daunting. Let's make compliance straightforward—together!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;