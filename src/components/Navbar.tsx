
import { Button } from "@/components/ui/button";
import { Menu, Trophy } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-ndpa-navy font-bold text-lg sm:text-xl">PrivacyGuide.Africa</span>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" asChild>
              <Link to="/about">About</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link to="/countries">Explore Modules</Link>
            </Button>
            <Button 
              variant="outline" 
              className="border-orange-500 text-orange-500 hover:bg-orange-50" 
              onClick={() => window.open("https://quest.privacyguide.africa", "_blank")}
            >
              <Trophy className="mr-1 h-4 w-4" />
              UlinziQuest
            </Button>
            <Button variant="default" className="bg-orange-500 hover:bg-orange-600" asChild>
              <Link to="/countries">Start Free Assessment</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              <Button variant="ghost" asChild className="justify-start">
                <Link to="/about">About</Link>
              </Button>
              <Button variant="ghost" asChild className="justify-start">
                <Link to="/countries">Explore Modules</Link>
              </Button>
              <Button 
                variant="outline" 
                className="border-orange-500 text-orange-500 hover:bg-orange-50 justify-start" 
                onClick={() => window.open("https://quest.privacyguide.africa", "_blank")}
              >
                <Trophy className="mr-1 h-4 w-4" />
                UlinziQuest
              </Button>
              <Button variant="default" className="bg-orange-500 hover:bg-orange-600 justify-start" asChild>
                <Link to="/countries">Start Free Assessment</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
