import { Landmark, Compass, Award, Building, BookOpen, Users, ArrowRight, CheckCircle2 } from "lucide-react";

interface AboutPageProps {
  onBookClick?: (advisorName?: string) => void;
}

export default function AboutPage({ onBookClick }: AboutPageProps) {
  const handleBooking = (advisorName?: string) => {
    if (onBookClick) {
      onBookClick(advisorName);
    } else {
      window.location.hash = "#contact";
      const contactEl = document.getElementById("contact");
      if (contactEl) contactEl.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-bold text-blue-700 bg-blue-100/60 px-3 py-1 rounded-full uppercase tracking-wider">
            Who We Are
          </span>
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mt-3 leading-tight">
            Dhaka's Most Trusted & Ethical Study Abroad Agency
          </h1>
          <p className="text-slate-600 mt-4 text-sm sm:text-base font-semibold leading-relaxed">
            Open World Education is Bangladesh's premier agency, offering 100% transparent and comprehensive global admissions, scholarship planning, and visa support.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-72 h-72 bg-blue-200/20 rounded-full filter blur-2xl" />
            <img
              src="/about-image.jpg"
              alt="Consultants in a team meeting"
              className="rounded-3xl shadow-xl relative z-10 border border-slate-100"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-6 -right-6 bg-blue-900 text-white p-6 rounded-2xl shadow-lg z-20 max-w-xs border border-blue-950">
              <p className="text-3xl font-black text-blue-400">99.2%</p>
              <p className="text-[11px] font-bold uppercase tracking-wider text-blue-200 mt-1">Visa Success Rate</p>
              <p className="text-[10px] text-blue-100/70 mt-1 leading-normal font-semibold">
                Rigorous profile pre-screening and mock reviews make our approvals seamless.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
              Bridging the Gap to Your Dream University
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-semibold leading-relaxed">
              Founded with the philosophy of total clarity, Open World Education has helped thousands of students from Dhaka, Chittagong, and across Bangladesh secure admissions at top universities in the UK, USA, Canada, and Australia.
            </p>
            <p className="text-xs sm:text-sm text-slate-600 font-semibold leading-relaxed">
              We stand against the common industry practices of hiding costs and charging hefty processing fees. That is why we maintain a strictly enforced <strong>Zero File Assessment Fees Policy</strong> — meaning we assess, shortlist, and consult on your files without charging you a single Taka.
            </p>

            <div className="grid grid-cols-1 gap-4 pt-4">
              <div className="p-4 bg-slate-50 border border-slate-100 rounded-xl">
                <Compass className="h-6 w-6 text-blue-700 mb-2" />
                <h4 className="text-xs font-black uppercase text-slate-900 tracking-wider">350+ Partners</h4>
                <p className="text-[10px] text-slate-500 font-semibold mt-1">Direct tie-ups and official representation of top universities.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Values & Pillars */}
        <div className="bg-slate-50 rounded-3xl p-8 sm:p-12 border border-slate-100 mb-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-xl sm:text-2xl font-black text-slate-900">Our Core Principles</h3>
            <p className="text-xs text-slate-500 font-semibold mt-1">We measure our success purely by the confidence and success of our student cohorts.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <div className="h-10 w-10 bg-white shadow-sm rounded-lg flex items-center justify-center text-blue-700">
                <Building className="h-5 w-5" />
              </div>
              <h4 className="text-sm font-extrabold text-slate-900">Ethical Sourcing</h4>
              <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                We represent and match you to universities that fit your real academic strengths and career objectives, not just agent incentives.
              </p>
            </div>

            <div className="space-y-3">
              <div className="h-10 w-10 bg-white shadow-sm rounded-lg flex items-center justify-center text-blue-700">
                <BookOpen className="h-5 w-5" />
              </div>
              <h4 className="text-sm font-extrabold text-slate-900">Academic Transparency</h4>
              <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                No surprises on tuition fees or other administrative expenses. You will get a detailed financial breakdown before paying any fees.
              </p>
            </div>

            <div className="space-y-3">
              <div className="h-10 w-10 bg-white shadow-sm rounded-lg flex items-center justify-center text-blue-700">
                <Users className="h-5 w-5" />
              </div>
              <h4 className="text-sm font-extrabold text-slate-900">Endless Alumni Support</h4>
              <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                We connect you with current Bangladeshi student community leaders studying at your selected university for landing assistance.
              </p>
            </div>
          </div>
        </div>

        {/* Our Standard Flow */}
        <div className="text-center mb-20">
          <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-12">Our 4-Step Application Management</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Profile Analysis", desc: "Our senior panel audits your academic transcripts, English eligibility, and financial backing." },
              { step: "02", title: "Course Matching", desc: "We map your profile score with top matching programs and look for potential scholarship waivers." },
              { step: "03", title: "SOP & File Build", desc: "Our editors guide you to write powerful SOPs and build a spotless university application portfolio." },
              { step: "04", title: "Visa Mock Training", desc: "We run series of intensive mock embassy interview sessions to build absolute self-confidence." },
            ].map((s, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-100 text-left hover:border-blue-200 transition-colors">
                <div className="text-2xl font-black text-blue-100">{s.step}</div>
                <h4 className="text-xs font-extrabold text-slate-900 uppercase mt-2 tracking-wider">{s.title}</h4>
                <p className="text-[11px] text-slate-500 font-semibold mt-1 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="my-12 border-t border-slate-100" />

      </div>
    </div>
  );
}
