import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import useScrollToTop from "./useScrollToTop";

// Layout Components
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/footer/Footer";

// Page Components
import LandingPage from "./pages/Home";
import Biography from "./pages/Biography";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ElectionAlert from "./pages/VotingInfo";
import ContactPage from "./pages/Contact";
import DonateCTA from "./pages/DonateCTA";
import EndorsementsPage from "./pages/Endorsements";

import NotFoundPage from "./pages/NotFound";
import SubmissionsPage from "./admin/SubmissionsPage";

const AppContent: React.FC = () => {
  useScrollToTop();

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/biography" element={<Biography />} />
          <Route path="/endorsements" element={<EndorsementsPage />} />
          <Route path="/donate" element={<DonateCTA />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/voting-info" element={<ElectionAlert />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />

          {/* Protected admin inbox */}
          <Route path="/submissions" element={<SubmissionsPage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

export default App;
