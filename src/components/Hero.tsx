import { ArrowRight, Star, Users, Award, ShieldCheck, Sparkles, CheckCircle2 } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { partnerUniversities } from "../data";

interface HeroProps {
  onBookClick: () => void;
  onAssessClick: () => void;
}

export default function Hero({ onBookClick, onAssessClick }: HeroProps) {
  const { scrollY } = useScroll();
  // Zoom in faster and more intensely as the user scrolls down
  const backgroundScale = useTransform(scrollY, [0, 500], [1, 1.35]);

  return (
    <section id="home" className="relative pt-32 pb-16 md:pt-48 md:pb-24 bg-white text-slate-900 overflow-hidden font-sans min-h-[90vh] flex flex-col justify-center">
      {/* Background Image with White Gradient Bottom */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img
          style={{ scale: backgroundScale }}
          src="/hero-bg.jpg"
          alt="Global University Campus Horizon"
          className="w-full h-full object-cover object-center transform origin-top"
          referrerPolicy="no-referrer"
        />
        {/* White gradient dropping from the top */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center">
        
        {/* Main Hero Header Section */}
        <div className="text-center max-w-4xl mx-auto">
          
          {/* Main Title - Dark text for contrast against bright sky/white gradient */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
            Creating a Global Future with <br className="hidden sm:inline" />
            <span className="text-blue-600">Overseas Education Solutions.</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-sm sm:text-base md:text-lg text-slate-700 max-w-2xl mx-auto font-medium leading-relaxed">
            Discover the amazing ways our expert counseling and university partnerships can transform your academic journey to the UK, USA, Canada & Australia.
          </p>

          {/* Centered Action Area (Button + Trusted By) */}
          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-6">
            <button
              onClick={onBookClick}
              className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm sm:text-base px-8 py-4 rounded-full shadow-xl shadow-slate-900/20 transition-all transform hover:-translate-y-0.5 cursor-pointer"
              id="hero-book-btn"
            >
              Get Started
            </button>
            
            {/* Trusted By / Avatars */}
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover shadow-sm" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100" alt="Student" referrerPolicy="no-referrer" />
                <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover shadow-sm" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100" alt="Student" referrerPolicy="no-referrer" />
                <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover shadow-sm" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100" alt="Student" referrerPolicy="no-referrer" />
              </div>
              <div className="text-left">
                <p className="text-xs font-bold text-slate-900 leading-tight">Trusted by 8,500+</p>
                <p className="text-xs font-medium text-slate-600 leading-tight">worldwide users</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
