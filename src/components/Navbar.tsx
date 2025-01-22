import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-ndpa-navy font-bold text-xl">Privacy Guide Africa</span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" asChild>
              <Link to="/about">About</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link to="/legal-notice">Legal Notice</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link to="/privacy">Privacy Notice</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};