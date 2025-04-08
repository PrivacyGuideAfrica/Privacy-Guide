
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CountryPage from "./pages/CountryPage";
import NDPAApplicability from "./pages/NDPAApplicability";
import RwandaApplicability from "./pages/RwandaApplicability";
import RwandaRegistration from "./pages/RwandaRegistration";
import ControllerProcessor from "./pages/ControllerProcessor";
import DataBreachAssessment from "./pages/DataBreachAssessment";
import DPIAAssessment from "./pages/DPIAAssessment";
import AnnualAudit from "./pages/AnnualAudit";
import LegalNotice from "./pages/LegalNotice";
import PrivacyNotice from "./pages/PrivacyNotice";
import About from "./pages/About";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/country/:countryId" element={<CountryPage />} />
          <Route path="/ndpa-applicability" element={<NDPAApplicability />} />
          <Route path="/rwanda-applicability" element={<RwandaApplicability />} />
          <Route path="/rwanda-registration" element={<RwandaRegistration />} />
          <Route path="/controller-processor" element={<ControllerProcessor />} />
          <Route path="/data-breach" element={<DataBreachAssessment />} />
          <Route path="/dpia-assessment" element={<DPIAAssessment />} />
          <Route path="/annual-audit" element={<AnnualAudit />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<PrivacyNotice />} />
          <Route path="/legal-notice" element={<LegalNotice />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
