import Contact from "../Contact";
import { HelpCircle, Clock, Calendar, CheckSquare } from "lucide-react";

export default function ContactPage() {
  const faqList = [
    {
      q: "Are there really zero charges for files assessment?",
      a: "Yes. Open World Education stands firmly on academic transparency. Our entire initial counselling, university eligibility checks, SOP reviews, and entry advisory are 100% free with zero files charges."
    },
    {
      q: "Can I apply with a spouse or child?",
      a: "Absolutely. We specialize in family case processing, including dependent spouse visa filing for the UK, Canada, and Australia. We guide you perfectly through financial presentation and marriage verification documents."
    },
    {
      q: "How can I prepare if my IELTS score is under 6.0?",
      a: "Many partnering universities offer pre-sessional English courses. Additionally, select universities in the UK accept Medium of Instruction (MOI) waivers, or allow Duolingo English Tests (DET). Our advisors can audit these routes for you."
    },
    {
      q: "What is the typical university and visa processing time?",
      a: "University offers typically take between 2 to 15 working days. Visa processing varies by country: UK student visas take 15 working days, Canada study permits take 4 to 8 weeks, and USA approvals are instant at the embassy interview."
    }
  ];

  return (
    <div className="py-12 bg-white">
      {/* Main Office Branches & Form Component */}
      <Contact />

      {/* Frequently Asked Questions section */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">

          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-blue-700 bg-blue-100/60 px-3 py-1 rounded-full uppercase tracking-wider">
              Student Helpdesk
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-3">
              Frequently Answered Questions
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-semibold mt-2">
              Have doubts about file requirements, bank financial statements, or admission timelines? We have answers.
            </p>
          </div>

          <div className="space-y-6">
            {faqList.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-100 shadow-sm space-y-2 hover:border-blue-200 transition-all"
              >
                <div className="flex gap-3 items-start">
                  <div className="h-6 w-6 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-700 shrink-0 mt-0.5">
                    <HelpCircle className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-extrabold text-slate-900 leading-snug">{faq.q}</h3>
                    <p className="text-xs sm:text-sm text-slate-600 font-semibold mt-2 leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Schedule Notice */}
          <div className="mt-12 bg-blue-900 text-white p-6 rounded-2xl flex flex-col sm:flex-row justify-between items-center gap-6 text-center sm:text-left border border-blue-950">
            <div className="space-y-1">
              <h4 className="text-sm font-extrabold text-white">Prefer to visit our office?</h4>
              <p className="text-[11px] text-blue-200/80 font-semibold flex items-center justify-center sm:justify-start gap-1">
                <Clock className="h-3.5 w-3.5" />
                Open Saturday - Thursday (10:00 AM - 6:30 PM). Friday Closed.
              </p>
            </div>
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                window.location.hash = "#home";
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="bg-white text-blue-700 px-5 py-2.5 rounded-full font-bold text-xs hover:bg-slate-50 transition-colors shrink-0"
            >
              Book Consultation Session
            </a>
          </div>

        </div>
      </section>
    </div>
  );
}
