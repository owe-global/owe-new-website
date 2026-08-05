import { Star, Award, Landmark, Calendar } from "lucide-react";
import { testimonialsData } from "../data";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-[#f9fafb] font-sans scroll-mt-20 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <span className="badge-lime-pill">
              OUR SUCCESS STORIES
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
              Approved Visa Success Stories
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 max-w-sm font-normal leading-relaxed">
            Read inspiring feedback from Bangladeshi students who fulfilled their global education dreams with Open World Education.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonialsData.map((student) => (
            <div
              key={student.id}
              className="bg-white rounded-[24px] p-6 sm:p-8 border border-slate-200/70 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              id={`student-story-${student.id}`}
            >
              <div className="space-y-5">
                
                {/* Rating & Header Row */}
                <div className="flex justify-between items-center">
                  <div className="flex text-amber-400">
                    {[...Array(student.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <div className="flex items-center gap-1 bg-slate-50 border border-slate-100 px-2.5 py-1 rounded-full text-slate-600 text-[10px] font-bold">
                    <Calendar className="h-3 w-3 text-blue-600" />
                    {student.visaDate}
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal italic">
                  "{student.reviewText}"
                </p>

              </div>

              {/* Student info footer */}
              <div className="flex items-center gap-4 mt-6 pt-5 border-t border-slate-100">
                <div className="relative h-12 w-12 rounded-full overflow-hidden border-2 border-white shadow-sm shrink-0">
                  <img
                    src={student.photo}
                    alt={student.name}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-none">
                    {student.name}
                  </h4>
                  
                  {/* Academic Details tags */}
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mt-1.5">
                    <span className="text-[10px] text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md font-bold inline-flex items-center gap-1">
                      <Landmark className="h-2.5 w-2.5" />
                      {student.university}
                    </span>
                    <span className="text-[10px] text-slate-500 font-medium flex items-center gap-1">
                      <span>{student.flag}</span>
                      {student.program}
                    </span>
                  </div>
                </div>

                <div className="ml-auto bg-blue-100 text-blue-800 text-[9px] font-bold px-2.5 py-1 rounded-full border border-blue-200 uppercase tracking-wider">
                  Approved
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Global Success Callout Box */}
        <div className="mt-14 bg-black text-white rounded-[28px] p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-zinc-800">
          <div className="flex items-start gap-4">
            <div className="bg-blue-600 text-white p-3.5 rounded-2xl shrink-0 shadow-md">
              <Award className="h-6 w-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white leading-tight">Join Our Rapid Visa Success Group</h4>
              <p className="text-xs text-slate-300 font-normal mt-1 leading-relaxed max-w-xl">
                We maintain an industry-leading <strong>99.2% visa approval rate</strong>. Let us help you streamline your application documents and interview prep.
              </p>
            </div>
          </div>
          <a
            href="#assess"
            className="btn-blue shrink-0 justify-center w-full md:w-auto"
          >
            <span>→</span> Check My Visa Score
          </a>
        </div>

      </div>
    </section>
  );
}
