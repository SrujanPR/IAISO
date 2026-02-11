import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from '@/components/Navigation';
import IAISONavigation from '@/components/IAISONavigation';
import Footer from '@/components/Footer';
import HomePage from '@/pages/HomePage';
import BlogPage from '@/pages/BlogPage';
import ShopPage from '@/pages/ShopPage';
import ServicesPage from '@/pages/ServicesPage';
import AboutPage from '@/pages/AboutPage';

// IAISO Pages
import IAISOHomePage from '@/pages/iaiso/IAISOHomePage';
import SystemCertificationsPage from '@/pages/iaiso/SystemCertificationsPage';
import OrganizationalCertificationsPage from '@/pages/iaiso/OrganizationalCertificationsPage';
import ProfessionalCertificationsPage from '@/pages/iaiso/ProfessionalCertificationsPage';
import MembershipPage from '@/pages/iaiso/MembershipPage';
import EventsPage from '@/pages/iaiso/EventsPage';
import RoomanAISolutionsPage from '@/pages/iaiso/RoomanAISolutionsPage';

// Learning Pages - Engineering
import SoftwareEngineersPage from '@/pages/iaiso/learning/engineering/SoftwareEngineersPage';
import MechanicalEngineersPage from '@/pages/iaiso/learning/engineering/MechanicalEngineersPage';
import ElectricalEngineersPage from '@/pages/iaiso/learning/engineering/ElectricalEngineersPage';
import CivilEngineersPage from '@/pages/iaiso/learning/engineering/CivilEngineersPage';
import ElectronicsEngineersPage from '@/pages/iaiso/learning/engineering/ElectronicsEngineersPage';
import BiomedicalEngineersPage from '@/pages/iaiso/learning/engineering/BiomedicalEngineersPage';
import IndustrialEngineersPage from '@/pages/iaiso/learning/engineering/IndustrialEngineersPage';
import ChemicalEngineersPage from '@/pages/iaiso/learning/engineering/ChemicalEngineersPage';
import QualityEngineersPage from '@/pages/iaiso/learning/engineering/QualityEngineersPage';
import SafetyMaintenanceEngineersPage from '@/pages/iaiso/learning/engineering/SafetyMaintenanceEngineersPage';

// Learning Pages - Science
import PhysicsScientistsPage from '@/pages/iaiso/learning/science/PhysicsScientistsPage';
import ChemicalScientistsPage from '@/pages/iaiso/learning/science/ChemicalScientistsPage';
import LifeScienceScientistsPage from '@/pages/iaiso/learning/science/LifeScienceScientistsPage';
import EnvironmentalScientistsPage from '@/pages/iaiso/learning/science/EnvironmentalScientistsPage';
import MathematicalScientistsPage from '@/pages/iaiso/learning/science/MathematicalScientistsPage';
import EarthScienceScientistsPage from '@/pages/iaiso/learning/science/EarthScienceScientistsPage';
import DataScientistsScientificPage from '@/pages/iaiso/learning/science/DataScientistsScientificPage';
import StatisticsScientistsPage from '@/pages/iaiso/learning/science/StatisticsScientistsPage';
import ResearchScientistsPage from '@/pages/iaiso/learning/science/ResearchScientistsPage';
import LaboratoryQualityScientistsPage from '@/pages/iaiso/learning/science/LaboratoryQualityScientistsPage';

// Learning Pages - Arts
import LiteratureScholarsPage from '@/pages/iaiso/learning/arts/LiteratureScholarsPage';
import HistoryScholarsPage from '@/pages/iaiso/learning/arts/HistoryScholarsPage';
import VisualArtsProfessionalsPage from '@/pages/iaiso/learning/arts/VisualArtsProfessionalsPage';
import MediaScholarsPage from '@/pages/iaiso/learning/arts/MediaScholarsPage';
import PhilosophyScholarsPage from '@/pages/iaiso/learning/arts/PhilosophyScholarsPage';
import LanguageScholarsPage from '@/pages/iaiso/learning/arts/LanguageScholarsPage';
import PerformingArtsProfessionalsPage from '@/pages/iaiso/learning/arts/PerformingArtsProfessionalsPage';
import SocialScienceScholarsPage from '@/pages/iaiso/learning/arts/SocialScienceScholarsPage';
import EducationProfessionalsPage from '@/pages/iaiso/learning/arts/EducationProfessionalsPage';
import PsychologyProfessionalsPage from '@/pages/iaiso/learning/arts/PsychologyProfessionalsPage';

// Learning Pages - Medicine
import MedicalProfessionalsPage from '@/pages/iaiso/learning/medicine/MedicalProfessionalsPage';
import DentalProfessionalsPage from '@/pages/iaiso/learning/medicine/DentalProfessionalsPage';
import NursingProfessionalsPage from '@/pages/iaiso/learning/medicine/NursingProfessionalsPage';
import MedicalResearchersPage from '@/pages/iaiso/learning/medicine/MedicalResearchersPage';
import PublicHealthProfessionalsPage from '@/pages/iaiso/learning/medicine/PublicHealthProfessionalsPage';
import PharmaceuticalScientistsPage from '@/pages/iaiso/learning/medicine/PharmaceuticalScientistsPage';
import BiomedicalProfessionalsPage from '@/pages/iaiso/learning/medicine/BiomedicalProfessionalsPage';
import SurgicalProfessionalsPage from '@/pages/iaiso/learning/medicine/SurgicalProfessionalsPage';
import HealthcareAdministratorsPage from '@/pages/iaiso/learning/medicine/HealthcareAdministratorsPage';
import AlliedHealthProfessionalsPage from '@/pages/iaiso/learning/medicine/AlliedHealthProfessionalsPage';

// Learning Pages - Management
import ManagementProfessionalsPage from '@/pages/iaiso/learning/management/ManagementProfessionalsPage';
import BusinessLeadersPage from '@/pages/iaiso/learning/management/BusinessLeadersPage';
import FinanceProfessionalsPage from '@/pages/iaiso/learning/management/FinanceProfessionalsPage';
import OperationsManagersPage from '@/pages/iaiso/learning/management/OperationsManagersPage';
import EconomistsPage from '@/pages/iaiso/learning/management/EconomistsPage';
import MarketingProfessionalsPage from '@/pages/iaiso/learning/management/MarketingProfessionalsPage';
import HRProfessionalsPage from '@/pages/iaiso/learning/management/HRProfessionalsPage';
import InternationalBusinessProfessionalsPage from '@/pages/iaiso/learning/management/InternationalBusinessProfessionalsPage';
import ProjectManagersPage from '@/pages/iaiso/learning/management/ProjectManagersPage';
import EntrepreneursPage from '@/pages/iaiso/learning/management/EntrepreneursPage';

// Learning Pages - School
import FoundationStagePage from '@/pages/iaiso/learning/school/FoundationStagePage';
import ApplicationStagePage from '@/pages/iaiso/learning/school/ApplicationStagePage';
import AdvancementStagePage from '@/pages/iaiso/learning/school/AdvancementStagePage';

import './App.css';

gsap.registerPlugin(ScrollTrigger);

// Navigation wrapper to switch between Rooman and IAISO nav
const AppNavigation = ({ isDark, toggleTheme }: { isDark: boolean; toggleTheme: () => void }) => {
  const location = useLocation();
  const isRoomanRoute = ['/rooman', '/about', '/blog', '/shop', '/services'].includes(location.pathname);
  
  if (isRoomanRoute) {
    return <Navigation isDark={isDark} toggleTheme={toggleTheme} />;
  }
  return <IAISONavigation isDark={isDark} toggleTheme={toggleTheme} />;
};

function App() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  // Apply theme class to document
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  }, [isDark]);

  return (
    <Router>
      <AppContent isDark={isDark} toggleTheme={toggleTheme} />
    </Router>
  );
}

// Separate component to access router context
const AppContent = ({ isDark, toggleTheme }: { isDark: boolean; toggleTheme: () => void }) => {
  const location = useLocation();
  const isRoomanRoute = ['/rooman', '/about', '/blog', '/shop', '/services'].includes(location.pathname);

  return (
    <div className={`min-h-screen transition-colors duration-300`}>
      <AppNavigation isDark={isDark} toggleTheme={toggleTheme} />

      <main className="relative">
        <Routes>
          {/* IAISO Routes (Default) */}
          <Route path="/" element={<IAISOHomePage />} />
          <Route path="/system-certifications" element={<SystemCertificationsPage />} />
          <Route path="/organizational-certifications" element={<OrganizationalCertificationsPage />} />
          <Route path="/professional-certifications" element={<ProfessionalCertificationsPage />} />

          {/* Learning Routes - Engineering */}
          <Route path="/learning/engineering/software" element={<SoftwareEngineersPage />} />
          <Route path="/learning/engineering/mechanical" element={<MechanicalEngineersPage />} />
          <Route path="/learning/engineering/electrical" element={<ElectricalEngineersPage />} />
          <Route path="/learning/engineering/civil" element={<CivilEngineersPage />} />
          <Route path="/learning/engineering/electronics" element={<ElectronicsEngineersPage />} />
          <Route path="/learning/engineering/biomedical" element={<BiomedicalEngineersPage />} />
          <Route path="/learning/engineering/industrial" element={<IndustrialEngineersPage />} />
          <Route path="/learning/engineering/chemical" element={<ChemicalEngineersPage />} />
          <Route path="/learning/engineering/quality" element={<QualityEngineersPage />} />
          <Route path="/learning/engineering/safety-maintenance" element={<SafetyMaintenanceEngineersPage />} />

          {/* Learning Routes - Science */}
          <Route path="/learning/science/physics" element={<PhysicsScientistsPage />} />
          <Route path="/learning/science/chemical" element={<ChemicalScientistsPage />} />
          <Route path="/learning/science/life-science" element={<LifeScienceScientistsPage />} />
          <Route path="/learning/science/environmental" element={<EnvironmentalScientistsPage />} />
          <Route path="/learning/science/mathematical" element={<MathematicalScientistsPage />} />
          <Route path="/learning/science/earth-science" element={<EarthScienceScientistsPage />} />
          <Route path="/learning/science/data-scientists" element={<DataScientistsScientificPage />} />
          <Route path="/learning/science/statistics" element={<StatisticsScientistsPage />} />
          <Route path="/learning/science/research" element={<ResearchScientistsPage />} />
          <Route path="/learning/science/laboratory-quality" element={<LaboratoryQualityScientistsPage />} />

          {/* Learning Routes - Arts */}
          <Route path="/learning/arts/literature" element={<LiteratureScholarsPage />} />
          <Route path="/learning/arts/history" element={<HistoryScholarsPage />} />
          <Route path="/learning/arts/visual-arts" element={<VisualArtsProfessionalsPage />} />
          <Route path="/learning/arts/media" element={<MediaScholarsPage />} />
          <Route path="/learning/arts/philosophy" element={<PhilosophyScholarsPage />} />
          <Route path="/learning/arts/language" element={<LanguageScholarsPage />} />
          <Route path="/learning/arts/performing-arts" element={<PerformingArtsProfessionalsPage />} />
          <Route path="/learning/arts/social-science" element={<SocialScienceScholarsPage />} />
          <Route path="/learning/arts/education" element={<EducationProfessionalsPage />} />
          <Route path="/learning/arts/psychology" element={<PsychologyProfessionalsPage />} />

          {/* Learning Routes - Medicine */}
          <Route path="/learning/medicine/medical" element={<MedicalProfessionalsPage />} />
          <Route path="/learning/medicine/dental" element={<DentalProfessionalsPage />} />
          <Route path="/learning/medicine/nursing" element={<NursingProfessionalsPage />} />
          <Route path="/learning/medicine/medical-research" element={<MedicalResearchersPage />} />
          <Route path="/learning/medicine/public-health" element={<PublicHealthProfessionalsPage />} />
          <Route path="/learning/medicine/pharmaceutical" element={<PharmaceuticalScientistsPage />} />
          <Route path="/learning/medicine/biomedical" element={<BiomedicalProfessionalsPage />} />
          <Route path="/learning/medicine/surgical" element={<SurgicalProfessionalsPage />} />
          <Route path="/learning/medicine/healthcare-admin" element={<HealthcareAdministratorsPage />} />
          <Route path="/learning/medicine/allied-health" element={<AlliedHealthProfessionalsPage />} />

          {/* Learning Routes - Management */}
          <Route path="/learning/management/management" element={<ManagementProfessionalsPage />} />
          <Route path="/learning/management/business-leaders" element={<BusinessLeadersPage />} />
          <Route path="/learning/management/finance" element={<FinanceProfessionalsPage />} />
          <Route path="/learning/management/operations" element={<OperationsManagersPage />} />
          <Route path="/learning/management/economists" element={<EconomistsPage />} />
          <Route path="/learning/management/marketing" element={<MarketingProfessionalsPage />} />
          <Route path="/learning/management/hr" element={<HRProfessionalsPage />} />
          <Route path="/learning/management/international-business" element={<InternationalBusinessProfessionalsPage />} />
          <Route path="/learning/management/project-managers" element={<ProjectManagersPage />} />
          <Route path="/learning/management/entrepreneurs" element={<EntrepreneursPage />} />

          {/* Learning Routes - School */}
          <Route path="/learning/school/foundation" element={<FoundationStagePage />} />
          <Route path="/learning/school/application" element={<ApplicationStagePage />} />
          <Route path="/learning/school/advancement" element={<AdvancementStagePage />} />
          <Route path="/membership" element={<MembershipPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/rooman-ai-solutions" element={<RoomanAISolutionsPage />} />
          
          {/* Rooman Routes */}
          <Route path="/rooman" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/services" element={<ServicesPage />} />
        </Routes>
      </main>

      {isRoomanRoute && <Footer />}
    </div>
  );
}

export default App;
