import { Sparkles, CheckCircle, ShieldCheck, GraduationCap, Award, HelpCircle } from "lucide-react";
import EligibilityPredictor from "../EligibilityPredictor";

interface EligibilityPageProps {
  onBookClick: (countryName?: string) => void;
}

export default function EligibilityPage({ onBookClick }: EligibilityPageProps) {
  return (
    <div className="font-sans antialiased text-slate-900 bg-white min-h-screen">
      
      {/* Page Header Banner */}
      <section className="bg-black text-white pt-28 pb-16 border-b border-zinc-800 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-1.5 bg-blue-600/20 text-blue-400 border border-blue-500/30 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              <Sparkles className="h-3.5 w-3.5 text-blue-400" />
              Smart Evaluation Engine
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Study Abroad <span className="text-blue-500">Eligibility Assessor</span>
            </h1>
            <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
              Evaluate your academic qualifications, GPA, and English proficiency against real admission requirements across 350+ global partner universities in the UK, USA, Canada, Australia, and Europe.
            </p>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 pt-8 border-t border-zinc-800">
            <div className="bg-zinc-900/80 p-4 rounded-2xl border border-zinc-800">
              <div className="flex items-center gap-2 text-blue-400 mb-1">
                <ShieldCheck className="h-4 w-4" />
                <span className="text-xs font-bold uppercase tracking-wider">Visa Rate</span>
              </div>
              <p className="text-xl font-black text-white">99.2%</p>
              <p className="text-[10px] text-slate-400 mt-0.5">Assessed candidates</p>
            </div>

            <div className="bg-zinc-900/80 p-4 rounded-2xl border border-zinc-800">
              <div className="flex items-center gap-2 text-blue-400 mb-1">
                <GraduationCap className="h-4 w-4" />
                <span className="text-xs font-bold uppercase tracking-wider">Universities</span>
              </div>
              <p className="text-xl font-black text-white">350+</p>
              <p className="text-[10px] text-slate-400 mt-0.5">Global partners</p>
            </div>

            <div className="bg-zinc-900/80 p-4 rounded-2xl border border-zinc-800">
              <div className="flex items-center gap-2 text-blue-400 mb-1">
                <Award className="h-4 w-4" />
                <span className="text-xs font-bold uppercase tracking-wider">Scholarships</span>
              </div>
              <p className="text-xl font-black text-white">Up to 50%</p>
              <p className="text-[10px] text-slate-400 mt-0.5">Tuition reduction</p>
            </div>

            <div className="bg-zinc-900/80 p-4 rounded-2xl border border-zinc-800">
              <div className="flex items-center gap-2 text-blue-400 mb-1">
                <CheckCircle className="h-4 w-4" />
                <span className="text-xs font-bold uppercase tracking-wider">Evaluation Fee</span>
              </div>
              <p className="text-xl font-black text-white">100% Free</p>
              <p className="text-[10px] text-slate-400 mt-0.5">Zero file charge</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Interactive Predictor Section */}
      <EligibilityPredictor onSuccess={() => onBookClick()} />

      {/* Country Eligibility Requirements Breakdown */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="badge-blue-pill mb-2">GUIDELINES</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              General Eligibility Benchmarks by Country
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Key admission thresholds for Bangladeshi applicants across popular study destinations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* UK */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/70 space-y-3">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🇬🇧</span>
                  <h3 className="text-base font-bold text-slate-900">United Kingdom</h3>
                </div>
                <span className="text-[10px] font-bold bg-blue-100 text-blue-800 px-2.5 py-1 rounded-full">48H Offers</span>
              </div>
              <ul className="space-y-2 text-xs font-medium text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-3.5 w-3.5 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong>Bachelors:</strong> HSC CGPA 3.5+ or A-Levels / Foundation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-3.5 w-3.5 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong>Masters:</strong> Honors CGPA 2.5+ out of 4.0</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-3.5 w-3.5 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong>IELTS / Waiver:</strong> 6.0 overall (MOI accepted by select unis)</span>
                </li>
              </ul>
            </div>

            {/* USA */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/70 space-y-3">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🇺🇸</span>
                  <h3 className="text-base font-bold text-slate-900">United States</h3>
                </div>
                <span className="text-[10px] font-bold bg-blue-100 text-blue-800 px-2.5 py-1 rounded-full">OPT Work Rights</span>
              </div>
              <ul className="space-y-2 text-xs font-medium text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-3.5 w-3.5 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong>Bachelors:</strong> HSC CGPA 3.8+ / SAT optional for many</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-3.5 w-3.5 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong>Masters:</strong> 4-Year Bachelors with CGPA 2.75+</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-3.5 w-3.5 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong>IELTS / Duolingo:</strong> 6.5 IELTS or 105+ DET</span>
                </li>
              </ul>
            </div>

            {/* Canada */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/70 space-y-3">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🇨🇦</span>
                  <h3 className="text-base font-bold text-slate-900">Canada</h3>
                </div>
                <span className="text-[10px] font-bold bg-blue-100 text-blue-800 px-2.5 py-1 rounded-full">PGWP Path</span>
              </div>
              <ul className="space-y-2 text-xs font-medium text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-3.5 w-3.5 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong>Undergrad:</strong> HSC 3.5+ or Diploma with good transcripts</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-3.5 w-3.5 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong>PG Diploma / Masters:</strong> Bachelors CGPA 3.0+</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-3.5 w-3.5 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong>English Test:</strong> IELTS 6.5 overall (no band less than 6.0)</span>
                </li>
              </ul>
            </div>

            {/* Australia */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/70 space-y-3">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🇦🇺</span>
                  <h3 className="text-base font-bold text-slate-900">Australia</h3>
                </div>
                <span className="text-[10px] font-bold bg-blue-100 text-blue-800 px-2.5 py-1 rounded-full">GS Cleared</span>
              </div>
              <ul className="space-y-2 text-xs font-medium text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-3.5 w-3.5 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong>Bachelors:</strong> HSC CGPA 3.5+ or Foundation pathway</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-3.5 w-3.5 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong>Masters:</strong> Bachelors CGPA 2.8+ out of 4.0</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-3.5 w-3.5 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong>PTE / IELTS:</strong> PTE 58+ or IELTS 6.5</span>
                </li>
              </ul>
            </div>

            {/* Europe */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/70 space-y-3">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🇪🇺</span>
                  <h3 className="text-base font-bold text-slate-900">Europe / Schengen</h3>
                </div>
                <span className="text-[10px] font-bold bg-blue-100 text-blue-800 px-2.5 py-1 rounded-full">Low Tuition</span>
              </div>
              <ul className="space-y-2 text-xs font-medium text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-3.5 w-3.5 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong>Germany:</strong> 13 years education for Bachelors / CGPA 3.0+ for Masters</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-3.5 w-3.5 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong>Sweden/Finland:</strong> Bachelors CGPA 3.0+ for direct Masters</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-3.5 w-3.5 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong>English:</strong> IELTS 6.5 or MOI depending on institution</span>
                </li>
              </ul>
            </div>

            {/* Assessment Support Box */}
            <div className="bg-black text-white rounded-2xl p-6 border border-zinc-800 flex flex-col justify-between space-y-4 shadow-xl">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-blue-400">
                  <HelpCircle className="h-5 w-5" />
                  <span className="text-xs font-bold uppercase tracking-wider">Unsure of Your CGPA?</span>
                </div>
                <h3 className="text-base font-bold text-white">Have Study Gaps or Medium of Instruction Queries?</h3>
                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  Our academic officers conduct manual transcript analysis for students with study gaps, credit transfers, or non-traditional education backgrounds.
                </p>
              </div>

              <button
                onClick={() => onBookClick()}
                className="btn-blue w-full justify-center text-xs"
              >
                <span>→</span> Speak to Senior Advisor
              </button>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
