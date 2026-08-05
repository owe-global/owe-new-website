import { Award, GraduationCap, Calendar, CheckCircle2 } from "lucide-react";
import { teamMembersData } from "../data";

interface TeamSectionProps {
  onBookClick?: (advisorName?: string) => void;
}

export default function TeamSection({ onBookClick }: TeamSectionProps) {
  return (
    <div className="pt-12 pb-6">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="space-y-3">
          <span className="badge-blue-pill">
            MEET OUR EXPERTS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Our Counselors & Academic Advisors
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 max-w-md font-normal leading-relaxed">
          Meet the dedicated certified counselors, former admissions officers, and visa experts guiding Bangladeshi scholars to top global universities.
        </p>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {teamMembersData.map((member) => (
          <div
            key={member.id}
            className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 flex flex-col justify-between group"
            id={`team-member-${member.id}`}
          >
            <div className="space-y-4">
              {/* Photo & Experience Badge Container */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/4] bg-slate-100 border border-slate-100">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-full border border-white/20 shadow-md">
                  {member.experience}
                </div>
              </div>

              {/* Name & Role */}
              <div>
                <h3 className="text-base font-bold text-slate-900 leading-snug group-hover:text-blue-600 transition-colors">
                  {member.name}
                </h3>
                <p className="text-xs font-semibold text-blue-700 mt-0.5">
                  {member.role}
                </p>
                
                {/* Specialty Pill */}
                <div className="mt-2 inline-flex items-center gap-1 bg-blue-50 text-blue-800 text-[10px] font-bold px-2.5 py-1 rounded-md">
                  <Award className="h-3 w-3 text-blue-600 shrink-0" />
                  <span>{member.specialty}</span>
                </div>
              </div>

              {/* Bio */}
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                {member.bio}
              </p>
            </div>

            {/* Card Footer: Destinations & Action */}
            <div className="mt-5 pt-4 border-t border-slate-100 space-y-3">
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mr-1">Expert in:</span>
                {member.destinations.map((dest, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] font-bold bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md"
                  >
                    {dest}
                  </span>
                ))}
              </div>

              <button
                onClick={() => onBookClick && onBookClick(member.name)}
                className="w-full text-center py-2.5 px-3 bg-slate-50 hover:bg-blue-600 text-slate-700 hover:text-white text-xs font-bold rounded-xl border border-slate-200 hover:border-blue-600 transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
              >
                <Calendar className="h-3.5 w-3.5" />
                <span>Book Session with {member.name.split(" ")[0]}</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
