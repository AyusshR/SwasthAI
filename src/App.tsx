import { AppProvider, useApp } from '@/context/AppContext';
import { AuthProvider } from '@/context/AuthContext';
import { Layout } from '@/components/Layout';
import { HomePage } from '@/pages/HomePage';
import { DiseaseInfoPage } from '@/pages/DiseaseInfoPage';
import { ReportExplainerPage } from '@/pages/ReportExplainerPage';
import { MedicineReminderPage } from '@/pages/MedicineReminderPage';
import { PreventiveHealthPage } from '@/pages/PreventiveHealthPage';
import { MentalWellbeingPage } from '@/pages/MentalWellbeingPage';
import { HealthLibraryPage } from '@/pages/HealthLibraryPage';
import { MyHealthPage } from '@/pages/MyHealthPage';
import { AuthPage } from '@/pages/AuthPage';
import { MultilingualPage } from '@/pages/MultilingualPage';
import { AboutPage } from '@/pages/AboutPage';
import { PrivacyPage } from '@/pages/PrivacyPage';
import { TermsPage } from '@/pages/TermsPage';
import { ContactPage } from '@/pages/ContactPage';
import { DisclaimerPage } from '@/pages/DisclaimerPage';

function Router() {
  const { route } = useApp();

  // Auth page has its own full-screen layout (no header/footer)
  if (route === '/auth') return <AuthPage />;

  const page = (() => {
    switch (route) {
      case '/':
        return <HomePage />;
      case '/health-assistant':
        return <DiseaseInfoPage />;
      case '/report-explainer':
        return <ReportExplainerPage />;
      case '/medicine-reminder':
        return <MedicineReminderPage />;
      case '/preventive':
        return <PreventiveHealthPage />;
      case '/mental-wellbeing':
        return <MentalWellbeingPage />;
      case '/health-library':
        return <HealthLibraryPage />;
      case '/my-health':
        return <MyHealthPage />;
      case '/multilingual':
        return <MultilingualPage />;
      case '/about':
        return <AboutPage />;
      case '/privacy':
        return <PrivacyPage />;
      case '/terms':
        return <TermsPage />;
      case '/contact':
        return <ContactPage />;
      case '/disclaimer':
        return <DisclaimerPage />;
      default:
        return <HomePage />;
    }
  })();

  return <Layout>{page}</Layout>;
}

function App() {
  return (
    <AuthProvider>
      <AppProvider>
        <Router />
      </AppProvider>
    </AuthProvider>
  );
}

export default App;
