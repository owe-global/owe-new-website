import { useState } from "react";
import { ShieldCheck, DollarSign, Calendar, Landmark } from "lucide-react";
import { countriesData, partnerUniversities } from "../data";
import FeaturedUniversities from "./FeaturedUniversities";

interface DestinationsProps {
  onBookClick: (countryName?: string) => void;
}

export default function Destinations({ onBookClick }: DestinationsProps) {
  const [selectedId, setSelectedId] = useState("uk");
  const selectedCountry = countriesData.find((c) => c.id === selectedId) || countriesData[0];

  return (
    <section id="destinations" className="py-20 bg-white font-sans scroll-mt-20 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Reference Pill Badge */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div className="space-y-3">
            <span className="badge-lime-pill">
              STUDY DESTINATIONS
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
              Explore Global Academic Hubs
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 max-w-sm font-normal leading-relaxed">
            We represent hundreds of top-ranking universities in key educational hubs. Choose your ideal destination and receive step-by-step guidance.
          </p>
        </div>

        {/* Tab Selectors */}
        <div className="flex overflow-x-auto pb-4 justify-start md:justify-center items-center gap-3 no-scrollbar mb-10 mt-6">
          {countriesData.map((country) => (
            <button
              key={country.id}
              onClick={() => setSelectedId(country.id)}
              className={`flex items-center gap-2 px-5 py-3 rounded-full font-bold text-xs shrink-0 border transition-all cursor-pointer ${
                selectedId === country.id
                  ? "bg-blue-600 border-blue-600 text-white shadow-md shadow-blue-900/20"
                  : "bg-slate-50 border-slate-200 hover:bg-slate-100 text-slate-700"
              }`}
            >
              <span className="text-lg leading-none">{country.flag}</span>
              {country.name}
            </button>
          ))}
        </div>

        {/* Selected Country Details Card */}
        <div className="bg-[#f9fafb] rounded-[28px] border border-slate-200/80 overflow-hidden shadow-sm" id="destination-details">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Visual Panel */}
            <div className="lg:col-span-5 relative min-h-[250px] lg:min-h-[450px]">
              <img
                src={selectedCountry.bgUrl}
                alt={`${selectedCountry.name} study location landscape`}
                className="absolute inset-0 w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-slate-950/90 via-slate-950/40 to-transparent" />
              
              {/* Floating Content over Image */}
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                <span className="text-4xl">{selectedCountry.flag}</span>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">{selectedCountry.name}</h3>
                <p className="text-xs text-slate-200 leading-relaxed font-normal max-w-sm opacity-90">
                  {selectedCountry.description}
                </p>
              </div>
            </div>

            {/* Information Grid Panel */}
            <div className="lg:col-span-7 p-6 sm:p-10 space-y-8 bg-white">
              
              {/* Core Stats Bar */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50/80 p-4 rounded-2xl border border-blue-200/60 flex items-start gap-3">
                  <div className="bg-blue-600 text-white p-2 rounded-xl shrink-0">
                    <ShieldCheck className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-blue-800 uppercase tracking-wider leading-none mb-1">Visa Success Rate</p>
                    <p className="text-base font-bold text-slate-900">{selectedCountry.successRate}</p>
                  </div>
                </div>

                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/60 flex items-start gap-3">
                  <div className="bg-slate-900 text-white p-2 rounded-xl shrink-0">
                    <DollarSign className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider leading-none mb-1">Average Cost</p>
                    <p className="text-xs font-bold text-slate-900 line-clamp-1 mt-0.5">{selectedCountry.averageCost}</p>
                  </div>
                </div>

                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/60 flex items-start gap-3">
                  <div className="bg-slate-900 text-white p-2 rounded-xl shrink-0">
                    <Landmark className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider leading-none mb-1">Post-Grad Work</p>
                    <p className="text-xs font-bold text-slate-900 line-clamp-1 mt-0.5">{selectedCountry.postStudyWork}</p>
                  </div>
                </div>

                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/60 flex items-start gap-3">
                  <div className="bg-slate-900 text-white p-2 rounded-xl shrink-0">
                    <Calendar className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider leading-none mb-1">Intake Cycles</p>
                    <p className="text-xs font-bold text-slate-900 line-clamp-1 mt-0.5">{selectedCountry.intake}</p>
                  </div>
                </div>
              </div>

              {/* Recommended Courses Block */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">Top Academic Programs</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedCountry.topCourses.map((course, idx) => (
                    <div key={idx} className="flex items-center gap-2 bg-slate-50 border border-slate-200/60 px-4 py-2.5 rounded-xl text-slate-700">
                      <div className="h-2 w-2 rounded-full bg-blue-600 shrink-0" />
                      <span className="text-xs font-bold leading-normal">{course}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA footer inside card */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-bold text-slate-900">Interested in studying in {selectedCountry.name}?</p>
                  <p className="text-[11px] text-slate-500 mt-0.5">Receive personalized university choices, fee structures, and scholarship audits.</p>
                </div>
                <button
                  onClick={() => onBookClick(selectedCountry.name)}
                  className="btn-lime w-full sm:w-auto shrink-0 justify-center"
                >
                  <span>→</span> Apply for {selectedCountry.name}
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
      {/* Full Width Marquee of Featured Universities */}
      <FeaturedUniversities />

    </section>
  );
}
