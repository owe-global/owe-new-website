import { useState, useEffect } from "react";
import { Menu, X, Phone, Sparkles } from "lucide-react";
import Logo from "./Logo";

interface NavbarProps {
  activePage: string;
  onBookClick: () => void;
  onAssessClick: () => void;
}

export default function Navbar({ activePage, onBookClick, onAssessClick }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isHeroDark = activePage === "home" && !scrolled;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20 || activePage !== "home") {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activePage]);

  const menuItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Service", href: "#services" },
    { label: "Eligibility", href: "#eligibility" },
    { label: "Destinations", href: "#destinations" },
    { label: "Our Success Stories", href: "#testimonials" },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    window.location.hash = href;
  };

  return (
    <nav
      id="navbar-main"
      className="fixed top-4 left-4 right-4 max-w-5xl mx-auto z-50 transition-all duration-300 font-sans rounded-full bg-white/70 backdrop-blur-lg shadow-sm border border-white/50 py-3 px-6 md:px-8"
    >
      <div className="flex justify-between items-center w-full">
        
        {/* Logo */}
        <div
          className="cursor-pointer flex-shrink-0"
          onClick={() => handleNavClick("#home")}
        >
          <Logo size="md" variant="dark" />
        </div>

        {/* Center Navigation Links */}
        <div className="hidden md:flex items-center justify-center flex-1 mx-8 gap-8">
          {menuItems.map((item) => {
            const itemPage = item.href.replace("#", "");
            const isActive = activePage === itemPage;
            return (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className={`text-sm font-medium transition-colors cursor-pointer relative py-1 ${
                  isActive
                    ? "text-slate-900 font-bold"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-slate-900" />
                )}
              </button>
            );
          })}
        </div>

        {/* Right Action Button */}
        <div className="hidden md:flex items-center gap-3 flex-shrink-0">
          <button
            onClick={onBookClick}
            className="text-xs font-bold px-6 py-2.5 rounded-full border transition-all cursor-pointer bg-slate-900 text-white border-slate-900 hover:bg-slate-800 shadow-sm flex items-center gap-2"
          >
            Registration <span className="text-lg leading-none">→</span>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-2">
            <button
              onClick={onBookClick}
              className="text-xs font-bold bg-blue-600 text-white px-3 py-1.5 rounded-full"
            >
              Consult
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg transition-colors ${isHeroDark ? 'text-white hover:bg-white/10' : 'text-slate-700 hover:bg-slate-100'}`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-200 shadow-xl py-4 px-6 space-y-3 text-slate-900">
          {menuItems.map((item) => {
            const itemPage = item.href.replace("#", "");
            const isActive = activePage === itemPage;
            return (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className={`block w-full text-left py-2 text-base font-semibold ${
                  isActive ? "text-slate-900 font-bold" : "text-slate-600"
                }`}
              >
                {item.label}
              </button>
            );
          })}
          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setIsOpen(false);
                handleNavClick("#contact");
              }}
              className="w-full text-center py-2.5 text-xs font-bold rounded-full bg-slate-900 text-white"
            >
              Contact Us
            </button>
            <button
              onClick={() => {
                setIsOpen(false);
                onBookClick();
              }}
              className="w-full text-center py-2.5 text-xs font-bold rounded-full bg-blue-600 text-white"
            >
              Registration
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
