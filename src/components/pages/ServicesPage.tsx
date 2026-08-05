import Services from "../Services";
import { BookOpen, Check, HelpCircle } from "lucide-react";

interface ServicesPageProps {
  onBookClick: () => void;
}

export default function ServicesPage({ onBookClick }: ServicesPageProps) {
  return (
    <div className="py-12 bg-white">
      {/* Services Showcase Component */}
      <Services onBookClick={onBookClick} />

      {/* Additional Detailed Services Roadmap */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 border-t border-slate-100 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-6">
            <span className="text-xs font-bold text-blue-700 bg-blue-100/60 px-3 py-1 rounded-full uppercase tracking-wider">
              Service Process
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
              A Closer Look at Our SOP & Visa Mock Advisory
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-semibold leading-relaxed">
              Applying for global studies is highly competitive. At Open World Education, we don't just fill in your online forms; we construct a comprehensive application narrative that instantly stands out to admission directors.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex gap-3">
                <div className="h-5 w-5 bg-blue-50 border border-blue-100 rounded-full flex items-center justify-center text-blue-700 shrink-0 mt-0.5">
                  <Check className="h-3 w-3 font-bold" />
                </div>
                <div>
                  <h4 className="text-xs font-extrabold text-slate-900">Custom Statement of Purpose (SOP) Assistance</h4>
                  <p className="text-[11px] text-slate-500 font-semibold mt-0.5 leading-relaxed">
                    We review, structure, and refine your statement of purpose to ensure your career motives are perfectly aligned with university demands.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="h-5 w-5 bg-blue-50 border border-blue-100 rounded-full flex items-center justify-center text-blue-700 shrink-0 mt-0.5">
                  <Check className="h-3 w-3 font-bold" />
                </div>
                <div>
                  <h4 className="text-xs font-extrabold text-slate-900">Spouse & Family Visa Case Scrutiny</h4>
                  <p className="text-[11px] text-slate-500 font-semibold mt-0.5 leading-relaxed">
                    We specialize in spouse visa file auditing to meet strict financial thresholds and family ties documentation, securing joint travels.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="h-5 w-5 bg-blue-50 border border-blue-100 rounded-full flex items-center justify-center text-blue-700 shrink-0 mt-0.5">
                  <Check className="h-3 w-3 font-bold" />
                </div>
                <div>
                  <h4 className="text-xs font-extrabold text-slate-900">Real-environment Mock Interviews</h4>
                  <p className="text-[11px] text-slate-500 font-semibold mt-0.5 leading-relaxed">
                    Get over speech hesitations and master answers for credible student rules, fund origins, and college module details.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick FAQ / Insights on Services */}
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
            <h3 className="text-lg font-extrabold text-slate-900 mb-6 flex items-center gap-2">
              <HelpCircle className="h-5 w-5 text-blue-700" />
              Frequently Answered
            </h3>

            <div className="space-y-6">
              {[
                {
                  q: "Are there any hidden service or courier fees?",
                  a: "None whatsoever. Our initial assessments, university selection, files processing, SOP critiques, and mock preparation are 100% free of charge."
                },
                {
                  q: "What if I do not have an IELTS scorecard?",
                  a: "We have options! Many UK universities accept Medium of Instruction (MOI) certificates from select Bangladeshi colleges. Alternatively, we also support Duolingo English Test (DET) and OIETC preparation."
                },
                {
                  q: "Do you offer scholarship application assistance?",
                  a: "Yes, every profile is automatically checked against active merit-based, state-funded, and athletic scholarships. We help write scholarship grant letters for you."
                }
              ].map((faq, index) => (
                <div key={index} className="space-y-1">
                  <h4 className="text-xs font-black text-slate-900">{faq.q}</h4>
                  <p className="text-[11px] text-slate-500 font-semibold leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
