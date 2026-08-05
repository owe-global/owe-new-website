import Testimonials from "../Testimonials";
import { Award, CheckCircle, Flame, Star, Sparkles } from "lucide-react";

export default function SuccessPage() {
  const successRates = [
    { country: "United Kingdom", rate: "99.4%", color: "bg-blue-600", count: "420+ Students in 2025" },
    { country: "United States", rate: "98.1%", color: "bg-red-600", count: "180+ Students in 2025" },
    { country: "Canada", rate: "98.9%", color: "bg-rose-600", count: "290+ Students in 2025" },
    { country: "Australia", rate: "99.1%", color: "bg-indigo-600", count: "210+ Students in 2025" },
    { country: "Europe & Germany", rate: "97.5%", color: "bg-amber-500", count: "130+ Students in 2025" },
  ];

  return (
    <div className="py-12 bg-white">
      {/* Testimonials Showcase Component */}
      <Testimonials />

      {/* Dynamic Visa Success Rates Breakdown */}
      <section className="py-20 bg-slate-50/50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Visual Stats Sidebar */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold text-blue-700 bg-blue-100/60 px-3 py-1 rounded-full uppercase tracking-wider inline-block">
                Verified Records
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Our Destination-Wise Visa Approval Rates
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 font-semibold leading-relaxed">
                By maintaining strict transparency and verifying bank solvency, source of funds, and academic progression early, we boast an average agency-wide success rate of <strong>99.2%</strong>.
              </p>

              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
                <div className="h-12 w-12 bg-amber-50 rounded-xl flex items-center justify-center text-amber-500 shrink-0">
                  <Flame className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-xs font-black uppercase text-slate-900 tracking-wider">Top Recipient Agency</h4>
                  <p className="text-[11px] text-slate-500 font-semibold mt-1">
                    Awarded the "Most Value-Aligned Agency" title in 2024 and 2025 by major British public institutions.
                  </p>
                </div>
              </div>
            </div>

            {/* Success Progress Bars */}
            <div className="lg:col-span-7 bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-6">
              <h3 className="text-base font-extrabold text-slate-900">Annual Visa Success Audit (Academic Intake 2024 - 2025)</h3>
              
              <div className="space-y-4">
                {successRates.map((item, idx) => (
                  <div key={idx} className="space-y-1.5">
                    <div className="flex justify-between items-center text-xs font-extrabold text-slate-900">
                      <div className="flex items-center gap-2">
                        <span className={`w-2.5 h-2.5 rounded-full ${item.color}`} />
                        <span>{item.country}</span>
                        <span className="text-[10px] text-slate-400 font-semibold">({item.count})</span>
                      </div>
                      <span className="text-blue-700 font-black">{item.rate}</span>
                    </div>
                    {/* Progress Bar Container */}
                    <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full transition-all duration-1000 ${item.color}`}
                        style={{ width: item.rate }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-slate-100 pt-6 flex items-center gap-2 text-xs text-slate-500 font-semibold">
                <Sparkles className="h-4 w-4 text-amber-500 shrink-0" />
                <span>Verification standard audits verified by UKVI & embassy-published registry logs.</span>
              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
