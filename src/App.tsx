import { lazy, Suspense } from "react";
import { findAssessment } from "./data/catalog";
import { useLocation } from "react-router-dom";
import { Layout } from "./components/shared/Layout";
import { RouteErrorBoundary } from "./components/shared/RouteErrorBoundary";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/shared/ScrollToTop";
const Index = lazy(() => import("./pages/Index"));
const Countries = lazy(() => import("./pages/Countries"));
const CountryPage = lazy(() => import("./pages/CountryPage"));
const NDPAApplicability = lazy(() => import("./pages/NDPAApplicability"));
const RwandaApplicability = lazy(() => import("./pages/RwandaApplicability"));
const RwandaRegistration = lazy(() => import("./pages/RwandaRegistration"));
const ControllerProcessor = lazy(() => import("./pages/ControllerProcessor"));
const DataBreachAssessment = lazy(() => import("./pages/DataBreachAssessment"));
const DPIAAssessment = lazy(() => import("./pages/DPIAAssessment"));
const AssessmentUnavailable = lazy(() => import("./pages/AssessmentUnavailable"));
const NotFound = lazy(() => import("./pages/NotFound"));
const LegalNotice = lazy(() => import("./pages/LegalNotice"));
const PrivacyNotice = lazy(() => import("./pages/PrivacyNotice"));
const About = lazy(() => import("./pages/About"));
const RepresentativeAssessment = lazy(() => import("./pages/RepresentativeAssessment"));
const DPOAssessment = lazy(() => import("./pages/DPOAssessment"));
const RwandaDataBreachAssessment = lazy(() => import("./pages/RwandaDataBreachAssessment"));
const RwandaControllerProcessor = lazy(() => import("./pages/RwandaControllerProcessor"));
const NigeriaLawfulBasis = lazy(() => import("./pages/NigeriaLawfulBasis"));
const UgandaRegistration = lazy(() => import("./pages/UgandaRegistration"));
const UgandaAnnualCompliance = lazy(() => import("./pages/UgandaAnnualCompliance"));
const UgandaDPO = lazy(() => import("./pages/UgandaDPO"));
const UgandaLawfulBasis = lazy(() => import("./pages/UgandaLawfulBasis"));

const UgandaDPIA = lazy(() => import("./pages/UgandaDPIA"));
const UgandaDataSubjectRights = lazy(() => import("./pages/UgandaDataSubjectRights"));
const UgandaDataBreach = lazy(() => import("./pages/UgandaDataBreach"));
const UgandaSensitiveData = lazy(() => import("./pages/UgandaSensitiveData"));
const SouthAfricaApplicability = lazy(() => import("./pages/SouthAfricaApplicability"));
const SouthAfricaPriorAuthorisation = lazy(() => import("./pages/SouthAfricaPriorAuthorisation"));
const SouthAfricaResponsibleParty = lazy(() => import("./pages/SouthAfricaResponsibleParty"));
const SouthAfricaDataBreach = lazy(() => import("./pages/SouthAfricaDataBreach"));
const SouthAfricaDataSubjectRights = lazy(() => import("./pages/SouthAfricaDataSubjectRights"));
const SouthAfricaSpecialInformation = lazy(() => import("./pages/SouthAfricaSpecialInformation"));
const SouthAfricaChildrenInformation = lazy(() => import("./pages/SouthAfricaChildrenInformation"));
const SouthAfricaInformationOfficer = lazy(() => import("./pages/SouthAfricaInformationOfficer"));
const SouthAfricaDirectMarketing = lazy(() => import("./pages/SouthAfricaDirectMarketing"));
const GhanaApplicability = lazy(() => import("./pages/GhanaApplicability"));
const GhanaRegistration = lazy(() => import("./pages/GhanaRegistration"));
const GhanaDataSubjectRights = lazy(() => import("./pages/GhanaDataSubjectRights"));
const GhanaDataBreach = lazy(() => import("./pages/GhanaDataBreach"));
const GhanaDPO = lazy(() => import("./pages/GhanaDPO"));

const AssessmentAvailability = ({ children }: { children: React.ReactNode }) => {
  const { pathname } = useLocation();
  const assessment = findAssessment(pathname);
  return assessment?.module.status === "review"
    ? <AssessmentUnavailable title={assessment.module.title} />
    : children;
};

const queryClient = new QueryClient();

const App = () => {
  return (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
        <RouteErrorBoundary>
        <Suspense fallback={<p role="status" className="px-6 py-12 text-center">Loading guidance…</p>}>
        <ScrollToTop />
        <AssessmentAvailability>
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
          <Route path="/dpia-assessment" element={<Navigate to="/rwanda-dpia" replace />} />
          <Route path="/rwanda-dpia" element={<DPIAAssessment />} />
          <Route path="/nigeria-dpia" element={<AssessmentUnavailable title="DPIA Assessment" />} />
          <Route path="/annual-audit" element={<AssessmentUnavailable title="Annual Audit Requirements" />} />
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
          
          {/* Ghana Routes */}
          <Route path="/ghana-applicability" element={<GhanaApplicability />} />
          <Route path="/ghana-registration" element={<GhanaRegistration />} />
          <Route path="/ghana-data-subject-rights" element={<GhanaDataSubjectRights />} />
          <Route path="/ghana-data-breach" element={<GhanaDataBreach />} />
          <Route path="/ghana-dpo" element={<GhanaDPO />} />
          
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<PrivacyNotice />} />
          <Route path="/legal-notice" element={<LegalNotice />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        </AssessmentAvailability>
        </Suspense>
        </RouteErrorBoundary>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  );
};

export default App;
