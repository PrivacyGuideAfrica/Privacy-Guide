
import { ArrowRight, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";

const UlinziQuest = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-block p-2 px-4 rounded-full bg-orange-100 text-orange-700 font-medium text-sm mb-4">
            <Trophy className="inline-block mr-1 h-4 w-4" /> Interactive Learning
          </div>
          <h2 className="text-3xl font-bold mb-4">UlinziQuest: Test Your Knowledge</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Challenge yourself with our interactive quiz game designed to help you learn
            about African data protection laws in an engaging way.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 w-full md:w-1/2">
            <div className="flex items-start mb-4">
              <div className="flex-shrink-0 bg-orange-100 p-2 rounded-md">
                <Trophy className="h-6 w-6 text-orange-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold mb-2">Gamified Learning</h3>
                <p className="text-gray-600">
                  Learn complex privacy concepts through fun quizzes and earn badges as you progress.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 w-full md:w-1/2">
            <div className="flex items-start mb-4">
              <div className="flex-shrink-0 bg-indigo-100 p-2 rounded-md">
                <Trophy className="h-6 w-6 text-indigo-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold mb-2">Test Your Knowledge</h3>
                <p className="text-gray-600">
                  Put your understanding of data protection laws to the test and identify areas to improve.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <Button 
            size="lg" 
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold text-base px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            onClick={() => window.open("https://quest.privacyguide.africa", "_blank")}
          >
            Play UlinziQuest Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default UlinziQuest;
