import { Star, ArrowRight } from "lucide-react";

interface AboutSectionProps {
  onLearnMoreClick?: () => void;
}

export default function AboutSection({ onLearnMoreClick }: AboutSectionProps) {
  const handleAction = (advisorName?: string) => {
    if (onLearnMoreClick) {
      onLearnMoreClick();
    } else {
      window.location.hash = "#contact";
      const contactEl = document.getElementById("contact");
      if (contactEl) contactEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="py-20 bg-white font-sans scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main About Story Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Text + Rating + Button */}
          <div className="lg:col-span-5 space-y-6">
            {/* Pill Badge */}
            <span className="badge-lime-pill">
              ABOUT US
            </span>

            {/* Main Section Title */}
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
              The Open World Education Story
            </h2>

            {/* Paragraph Description */}
            <p className="text-sm text-slate-600 font-normal leading-relaxed">
              Open World Education is Bangladesh's premier study abroad consultancy, dedicated to empowering scholars with transparent, ethical, and hassle-free university placement across the UK, USA, Canada, and Australia.
            </p>

            {/* Reviews / Star Rating Row */}
            <div className="flex items-center gap-3 pt-1">
              <div className="flex items-center gap-1 text-amber-500 text-xs font-bold">
                <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                <span>Excellent 4.9 / 5</span>
              </div>
              <span className="text-slate-300 font-light">|</span>
              <div className="flex items-center gap-2">
                <div className="flex -space-x-1.5">
                  <img className="h-6 w-6 rounded-full ring-1 ring-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100" alt="Reviewer" referrerPolicy="no-referrer" />
                  <img className="h-6 w-6 rounded-full ring-1 ring-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100" alt="Reviewer" referrerPolicy="no-referrer" />
                  <img className="h-6 w-6 rounded-full ring-1 ring-white object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100" alt="Reviewer" referrerPolicy="no-referrer" />
                </div>
                <span className="text-xs text-slate-500 font-medium">Reviews 1,200+</span>
              </div>
            </div>

            {/* Action Button */}
            <div className="pt-2">
              <button
                onClick={() => handleAction()}
                className="btn-lime"
              >
                <span>→</span> Learn more about our process
              </button>
            </div>
          </div>

          {/* Center Column: Portrait Photo with Overlapping Glass Badge */}
          <div className="lg:col-span-4 relative">
            <div className="relative rounded-[28px] overflow-hidden shadow-md aspect-[3/4] bg-slate-100">
              <img
                src="/about-us-students.avif"
                alt="Diverse group of university students collaborating"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Glassmorphism Badge Overlapping Bottom Right */}
            <div className="absolute -bottom-6 -right-4 sm:right-2 bg-white/90 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-slate-200/80 max-w-[240px]">
              <h3 className="text-2xl font-bold text-slate-900 tracking-tight">12+ <span className="text-xs font-semibold text-slate-500 uppercase tracking-normal">Years Experience</span></h3>
              <p className="text-[11px] text-slate-600 mt-2 font-normal leading-relaxed">
                Guiding students with 100% genuine documentation support and zero hidden fees.
              </p>
            </div>
          </div>

          {/* Right Column: Light Card with Big Metric */}
          <div className="lg:col-span-3">
            <div className="bg-[#f2f7fa] rounded-[24px] p-6 sm:p-8 border border-slate-100/80 space-y-4">
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold text-slate-900 tracking-tight">99.2%</span>
                <span className="text-xs font-bold text-slate-500">Visa Success</span>
              </div>
              <p className="text-xs text-slate-600 font-normal leading-relaxed">
                Our advisors run rigorous mock interviews and document audits to ensure every candidate submits a foolproof visa application.
              </p>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="my-16 border-t border-slate-100" />

      </div>
    </section>
  );
}
