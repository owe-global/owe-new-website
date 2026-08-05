import { useState } from "react";
import { Compass, FileSpreadsheet, GraduationCap, ShieldCheck, Languages, PlaneTakeoff, Check, ChevronDown, ChevronUp, ArrowUpRight } from "lucide-react";
import { servicesData } from "../data";

const iconMap: { [key: string]: any } = {
  Compass: Compass,
  FileSpreadsheet: FileSpreadsheet,
  GraduationCap: GraduationCap,
  ShieldCheck: ShieldCheck,
  Languages: Languages,
  PlaneTakeoff: PlaneTakeoff,
};

interface ServicesProps {
  onBookClick: () => void;
}

export default function Services({ onBookClick }: ServicesProps) {
  const [expandedId, setExpandedId] = useState<string | null>("academic-counseling");

  const toggleExpand = (id: string) => {
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
    }
  };

  // Featured 3 visual solution cards matching reference image Section 3
  const featuredSolutions = [
    {
      title: "University Admissions",
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=800",
      description: "Direct university placements & offer letters",
    },
    {
      title: "Visa & Embassy Prep",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800",
      description: "Rigid mock interview prep & document audit",
    },
    {
      title: "Scholarships & Grants",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800",
      description: "Up to 100% tuition waivers & funding",
    }
  ];

  return (
    <section id="services" className="py-20 bg-[#f9fafb] font-sans scroll-mt-20 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Row - Matches Reference Image Section 3 Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <span className="badge-lime-pill">
              SERVICE
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
              Our Education Solutions
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 max-w-sm font-normal leading-relaxed">
            We believe in the power of international education to transform lives and communities across Bangladesh and beyond.
          </p>
        </div>

        {/* 3 Solution Image Cards Grid - Matches Reference Image Section 3 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {featuredSolutions.map((solution, i) => (
            <div
              key={i}
              onClick={onBookClick}
              className="group relative rounded-[24px] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 h-64 sm:h-72 cursor-pointer bg-slate-900"
            >
              {/* Card Image */}
              <img
                src={solution.image}
                alt={solution.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                referrerPolicy="no-referrer"
              />
              
              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />

              {/* Bottom Title */}
              <div className="absolute bottom-0 left-0 p-6 pr-16 z-10">
                <h3 className="text-lg font-bold text-white tracking-tight">
                  {solution.title}
                </h3>
                <p className="text-xs text-slate-300 font-normal mt-1 opacity-90">
                  {solution.description}
                </p>
              </div>

              {/* Blue Circular Arrow Button in Bottom Right */}
              <div className="absolute bottom-5 right-5 z-20 h-10 w-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-extrabold shadow-md group-hover:bg-blue-700 group-hover:scale-110 transition-all">
                <ArrowUpRight className="h-5 w-5 stroke-[2.5]" />
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Deep-Dive Services Accordions */}
        <div className="bg-white rounded-[28px] p-6 sm:p-8 border border-slate-200/80 shadow-sm mt-8">
          <h3 className="text-xl font-bold text-slate-900 mb-6">Detailed Services & Guidance</h3>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Services Accordion List */}
            <div className="lg:col-span-7 space-y-3">
              {servicesData.map((service) => {
                const Icon = iconMap[service.iconName] || Compass;
                const isExpanded = expandedId === service.id;

                return (
                  <div
                    key={service.id}
                    className={`border rounded-xl transition-all duration-300 ${
                      isExpanded
                        ? "border-blue-600 bg-blue-50/60 shadow-sm"
                        : "border-slate-100 hover:border-slate-200 bg-white"
                    }`}
                  >
                    <button
                      onClick={() => toggleExpand(service.id)}
                      className="w-full flex items-center justify-between p-4 text-left cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <div className={`p-2.5 rounded-lg border transition-colors ${
                          isExpanded
                            ? "bg-blue-600 text-white border-blue-600"
                            : "bg-slate-50 text-slate-700 border-slate-100"
                        }`}>
                          <Icon className="h-4 w-4" />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-slate-900">
                            {service.title}
                          </h4>
                        </div>
                      </div>
                      <div>
                        {isExpanded ? (
                          <ChevronUp className="h-4 w-4 text-blue-600" />
                        ) : (
                          <ChevronDown className="h-4 w-4 text-slate-400" />
                        )}
                      </div>
                    </button>

                    {isExpanded && (
                      <div className="px-4 pb-5 pt-1 border-t border-slate-200/60 bg-white/60 rounded-b-xl">
                        <p className="text-xs text-slate-600 font-normal leading-relaxed mb-3">
                          {service.description}
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                          {service.details.map((detail, index) => (
                            <div key={index} className="flex items-start gap-1.5">
                              <div className="mt-0.5 p-0.5 bg-blue-100 text-blue-700 rounded-full shrink-0">
                                <Check className="h-2.5 w-2.5 font-bold" />
                              </div>
                              <span className="text-[11px] text-slate-600 font-medium leading-tight">
                                {detail}
                              </span>
                            </div>
                          ))}
                        </div>
                        <button
                          onClick={onBookClick}
                          className="text-xs font-bold text-blue-600 hover:underline flex items-center gap-1"
                        >
                          Book consultation for {service.title} →
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Right Card Highlight */}
            <div className="lg:col-span-5 bg-black text-white p-7 rounded-2xl shadow-xl border border-zinc-800 space-y-4">
              <span className="bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider inline-block">
                Transparent Guarantee
              </span>
              <h3 className="text-xl font-bold tracking-tight">
                Zero File Assessment Fees
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-normal">
                Unlike conventional consultancies, Open World Education charges zero fees for file evaluation or initial university selection. Our guidance is 100% transparent.
              </p>

              <div className="pt-2">
                <button
                  onClick={onBookClick}
                  className="btn-blue w-full justify-center"
                >
                  <span>→</span> Schedule Free Session
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Lime Button - Matches Reference Image Section 3 */}
        <div className="text-center mt-10">
          <button
            onClick={() => {
              window.location.hash = "#services";
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="btn-lime"
          >
            <span>→</span> View all services
          </button>
        </div>

      </div>
    </section>
  );
}
