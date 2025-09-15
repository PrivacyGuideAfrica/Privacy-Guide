
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Countries from "./pages/Countries";
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
import RepresentativeAssessment from "./pages/RepresentativeAssessment";
import DPOAssessment from "./pages/DPOAssessment";
import RwandaDataBreachAssessment from "./pages/RwandaDataBreachAssessment";
import RwandaControllerProcessor from "./pages/RwandaControllerProcessor";
import NigeriaLawfulBasis from "./pages/NigeriaLawfulBasis";
import UgandaRegistration from "./pages/UgandaRegistration";
import UgandaAnnualCompliance from "./pages/UgandaAnnualCompliance";
import UgandaDPO from "./pages/UgandaDPO";
import UgandaLawfulBasis from "./pages/UgandaLawfulBasis";

import UgandaDPIA from "./pages/UgandaDPIA";
import UgandaDataSubjectRights from "./pages/UgandaDataSubjectRights";
import UgandaDataBreach from "./pages/UgandaDataBreach";
import UgandaSensitiveData from "./pages/UgandaSensitiveData";
import SouthAfricaApplicability from "./pages/SouthAfricaApplicability";
import SouthAfricaPriorAuthorisation from "./pages/SouthAfricaPriorAuthorisation";
import SouthAfricaResponsibleParty from "./pages/SouthAfricaResponsibleParty";
import SouthAfricaDataBreach from "./pages/SouthAfricaDataBreach";
import SouthAfricaDataSubjectRights from "./pages/SouthAfricaDataSubjectRights";
import SouthAfricaSpecialInformation from "./pages/SouthAfricaSpecialInformation";
import SouthAfricaChildrenInformation from "./pages/SouthAfricaChildrenInformation";
import SouthAfricaInformationOfficer from "./pages/SouthAfricaInformationOfficer";
import SouthAfricaDirectMarketing from "./pages/SouthAfricaDirectMarketing";

const queryClient = new QueryClient();

const App = () => {
  // Debug: Verify JavaScript is loading on deployed site
  console.log("Privacy Assessment Tool - App component loaded successfully");
  
  return (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/countries" element={<Countries />} />
          <Route path="/country/:countryId" element={<CountryPage />} />
          <Route path="/ndpa-applicability" element={<NDPAApplicability />} />
          <Route path="/rwanda-applicability" element={<RwandaApplicability />} />
          <Route path="/rwanda-registration" element={<RwandaRegistration />} />
          <Route path="/controller-processor" element={<ControllerProcessor />} />
          <Route path="/rwanda-controller-processor" element={<RwandaControllerProcessor />} />
          <Route path="/nigeria-lawful-basis" element={<NigeriaLawfulBasis />} />
          <Route path="/data-breach" element={<DataBreachAssessment />} />
          <Route path="/rwanda-data-breach" element={<RwandaDataBreachAssessment />} />
          <Route path="/dpia-assessment" element={<DPIAAssessment />} />
          <Route path="/annual-audit" element={<AnnualAudit />} />
          <Route path="/representative-assessment" element={<RepresentativeAssessment />} />
          <Route path="/dpo-assessment" element={<DPOAssessment />} />
          <Route path="/uganda-registration" element={<UgandaRegistration />} />
          <Route path="/uganda-annual-compliance" element={<UgandaAnnualCompliance />} />
          <Route path="/uganda-dpo" element={<UgandaDPO />} />
          <Route path="/uganda-lawful-basis" element={<UgandaLawfulBasis />} />
          
          <Route path="/uganda-dpia" element={<UgandaDPIA />} />
          <Route path="/uganda-data-subject-rights" element={<UgandaDataSubjectRights />} />
          <Route path="/uganda-data-breach" element={<UgandaDataBreach />} />
          <Route path="/uganda-sensitive-data" element={<UgandaSensitiveData />} />
          
          {/* South Africa Routes */}
          <Route path="/south-africa-applicability" element={<SouthAfricaApplicability />} />
          <Route path="/south-africa-prior-authorisation" element={<SouthAfricaPriorAuthorisation />} />
          <Route path="/south-africa-responsible-party" element={<SouthAfricaResponsibleParty />} />
          <Route path="/south-africa-data-breach" element={<SouthAfricaDataBreach />} />
          <Route path="/south-africa-data-subject-rights" element={<SouthAfricaDataSubjectRights />} />
          <Route path="/south-africa-special-information" element={<SouthAfricaSpecialInformation />} />
          <Route path="/south-africa-children-information" element={<SouthAfricaChildrenInformation />} />
          <Route path="/south-africa-information-officer" element={<SouthAfricaInformationOfficer />} />
          <Route path="/south-africa-direct-marketing" element={<SouthAfricaDirectMarketing />} />
          
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<PrivacyNotice />} />
          <Route path="/legal-notice" element={<LegalNotice />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  );
};

export default App;
