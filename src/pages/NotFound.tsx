import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFound = () => (
  <>
    <div className="mx-auto max-w-2xl px-4 py-16 text-center space-y-6">
      <p className="text-sm font-medium text-muted-foreground">404</p>
      <h1 className="text-3xl font-bold">Page not found</h1>
      <p className="text-muted-foreground">
        This page may have moved, or the address may be incorrect. Choose a country to find an assessment.
      </p>
      <Button asChild><Link to="/countries">Explore available countries</Link></Button>
    </div>
  </>
);

export default NotFound;
