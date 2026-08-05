import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import CounsellingScheduler from "./components/CounsellingScheduler";
import Logo from "./components/Logo";
import { Facebook, Instagram, ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Chatbot from "./components/Chatbot";

// Individual high-fidelity pages
import HomePage from "./components/pages/HomePage";
import AboutPage from "./components/pages/AboutPage";
import ServicesPage from "./components/pages/ServicesPage";
import EligibilityPage from "./components/pages/EligibilityPage";
import DestinationsPage from "./components/pages/DestinationsPage";
import SuccessPage from "./components/pages/SuccessPage";
import ContactPage from "./components/pages/ContactPage";

export default function App() {
  const [schedulerOpen, setSchedulerOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Parse hash location dynamically
  const [currentPage, setCurrentPage] = useState(() => {
    const hash = window.location.hash;
    const page = hash ? hash.replace("#", "") : "home";
    if (page === "assess") return "eligibility";
    return ["home", "about", "services", "eligibility", "destinations", "testimonials", "contact"].includes(page) ? page : "home";
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      const page = hash ? hash.replace("#", "") : "home";

      if (["home", "about", "services", "eligibility", "destinations", "testimonials", "contact"].includes(page)) {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else if (page === "assess") {
        setCurrentPage("eligibility");
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        // Fallback to home page
        setCurrentPage("home");
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };

    // Initialize checking hash on mount
    handleHashChange();

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const openScheduler = (countryName: string = "") => {
    setSelectedCountry(countryName);
    setSchedulerOpen(true);
  };

  const closeScheduler = () => {
    setSchedulerOpen(false);
    setSelectedCountry("");
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleAssessClick = () => {
    window.location.hash = "#assess";
  };

  const renderPageContent = () => {
    switch (currentPage) {
      case "about":
        return <AboutPage onBookClick={() => openScheduler()} />;
      case "services":
        return <ServicesPage onBookClick={() => openScheduler()} />;
      case "eligibility":
        return <EligibilityPage onBookClick={(country) => openScheduler(country)} />;
      case "destinations":
        return (
          <DestinationsPage
            onBookClick={(country) => openScheduler(country)}
            onAssessSuccess={() => openScheduler()}
          />
        );
      case "testimonials":
        return <SuccessPage />;
      case "contact":
        return <ContactPage />;
      case "home":
      default:
        return (
          <HomePage
            onBookClick={() => openScheduler()}
            onAssessClick={handleAssessClick}
          />
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between overflow-x-hidden antialiased text-slate-800 bg-slate-50/20">
      
      {/* Dynamic Navigation Header */}
      <Navbar
        activePage={currentPage}
        onBookClick={() => openScheduler()}
        onAssessClick={handleAssessClick}
      />

      {/* Main Content Area with Page Switcher Animation */}
      <main className="flex-grow pt-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
          >
            {renderPageContent()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Premium Footer */}
      <footer className="bg-slate-900 text-slate-400 border-t border-slate-950 py-12 z-10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-b border-slate-800 pb-8 mb-8">
            
            {/* Logo/Description */}
            <div className="md:col-span-6 space-y-4">
              <Logo size="md" variant="light" />
              <p className="text-xs text-slate-400 leading-relaxed max-w-sm font-medium">
                Open World Education is Bangladesh's premier, fully transparent global education agency. We empower aspiring students to reach top-tier academic hubs worldwide with ethical guidance and end-to-end support.
              </p>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-3 space-y-3">
              <h4 className="text-xs font-black uppercase tracking-widest text-slate-200 border-b border-slate-800 pb-1.5">Study Destinations</h4>
              <ul className="space-y-1.5 text-xs font-semibold">
                <li><a href="#destinations" className="hover:text-white transition-colors">Study in United Kingdom</a></li>
                <li><a href="#destinations" className="hover:text-white transition-colors">Study in United States</a></li>
                <li><a href="#destinations" className="hover:text-white transition-colors">Study in Canada</a></li>
                <li><a href="#destinations" className="hover:text-white transition-colors">Study in Australia</a></li>
                <li><a href="#destinations" className="hover:text-white transition-colors">Study in Europe</a></li>
              </ul>
            </div>

            {/* Social handles */}
            <div className="md:col-span-3 space-y-3">
              <h4 className="text-xs font-black uppercase tracking-widest text-slate-200 border-b border-slate-800 pb-1.5">Connect With Us</h4>
              <p className="text-[11px] font-semibold leading-relaxed">Join our active social media networks to stay updated on upcoming intakes, embassy rules, and visa seminars.</p>
              <div className="flex gap-3 pt-1">
                <a href="https://www.facebook.com/profile.php?id=61581278787683" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-800 hover:bg-blue-700 text-slate-300 hover:text-white rounded-lg transition-all" aria-label="Facebook">
                  <Facebook className="h-4 w-4" />
                </a>
                <a href="https://www.instagram.com/openworld.education/" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-800 hover:bg-pink-600 text-slate-300 hover:text-white rounded-lg transition-all" aria-label="Instagram">
                  <Instagram className="h-4 w-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Copyright & legal details */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 font-semibold">
            <p>
              &copy; {new Date().getFullYear()} Open World Education. All rights reserved.
            </p>
            <div className="flex gap-4">
              <span>Zero Files Assessment Fees Policy</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Trigger */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-24 right-6 z-40 bg-blue-700 hover:bg-blue-800 text-white p-3 rounded-full shadow-xl shadow-blue-300/30 transition-all hover:scale-110 cursor-pointer border border-blue-500/30 animate-fade-in"
          id="scroll-to-top-btn"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}

      {/* Counselling Session Booking Modal */}
      <CounsellingScheduler
        isOpen={schedulerOpen}
        onClose={closeScheduler}
        preSelectedCountry={selectedCountry}
      />

      {/* Lead Capture Chatbot */}
      <Chatbot />

    </div>
  );
}
