import React, { useState } from "react";
import { X, Calendar, Clock, MapPin, Video, CheckCircle, Info, User, Mail } from "lucide-react";

interface CounsellingSchedulerProps {
  isOpen: boolean;
  onClose: () => void;
  preSelectedCountry?: string;
}

export default function CounsellingScheduler({
  isOpen,
  onClose,
  preSelectedCountry = "",
}: CounsellingSchedulerProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: preSelectedCountry || "uk",
    mode: "dhaka",
    date: "",
    timeSlot: "11:30 AM",
    notes: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  if (!isOpen) return null;

  const handleInputChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.date) {
      alert("Please fill in all required fields to secure your counseling session.");
      return;
    }
    setSubmitting(true);

    const DEFAULT_COUNSELLING_SHEET_URL =
      "https://script.google.com/macros/s/AKfycbxi3eqgjxE0rqmG_4B5MXpLMyrPhgA2mMqwPuknkJKWwx6Rn1GhPXaWT1KQRtkwQVppZQ/exec";

    const scriptURL = import.meta.env.VITE_GOOGLE_SHEET_URL || DEFAULT_COUNSELLING_SHEET_URL;

    const payload = {
      fullName: formData.name,
      emailAddress: formData.email,
      mobileNumber: formData.phone,
      preferredCountry: formData.country,
      consultationMode: formData.mode,
      selectDate: formData.date,
      preferredTimeSlot: formData.timeSlot,
      academicBackground: formData.notes
    };

    try {
      if (scriptURL) {
        await fetch(scriptURL, {
          method: 'POST',
          mode: 'no-cors',
          body: JSON.stringify(payload),
          headers: {
            'Content-Type': 'text/plain;charset=utf-8', 
          }
        });
        setSubmitting(false);
        setSuccess(true);
      }
    } catch (error: any) {
      console.error('Error saving to Google Sheets:', error);
      alert(`Error booking session: ${error.message || 'Unknown error'}`);
      setSubmitting(false);
    }
  };

  const getOfficeDetails = () => {
    if (formData.mode === "dhaka") {
      return {
        location: "Head Office, Dhaka",
        type: "In-Person Consultation",
        address: "Saimon Point, Level-4, Boshundhara Road, Dhaka, Bangladesh 1229",
      };
    } else {
      return {
        location: "Zoom Video Meeting",
        type: "Virtual Consultation",
        address: "Link sent to email & mobile SMS",
      };
    }
  };

  const office = getOfficeDetails();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto px-4 py-6">
      {/* Dark Overlay Background */}
      <div
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl overflow-hidden z-10 border border-slate-100 transform transition-all animate-scale-up">
        
        {/* Header bar */}
        <div className="bg-blue-700 px-6 py-5 text-white flex justify-between items-center">
          <div>
            <h3 className="text-lg font-black tracking-tight">Book Free Counselling Session</h3>
            <p className="text-xs text-blue-100 font-semibold mt-0.5">Secure a 1-on-1 session with our senior university advisors</p>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:bg-white/10 p-1.5 rounded-full transition-colors cursor-pointer"
            id="close-scheduler-btn"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-6 max-h-[80vh] overflow-y-auto">
          {!success ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Personal Details Row */}
              <div className="space-y-3.5">
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="E.g., Sadia Rahman"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-bold text-slate-800 focus:bg-white focus:border-blue-500 transition-all outline-none"
                  />
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="sadia@example.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-bold text-slate-800 focus:bg-white focus:border-blue-500 transition-all outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Mobile Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="E.g., 017XXXXXXXX"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-bold text-slate-800 focus:bg-white focus:border-blue-500 transition-all outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Preferences Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Preferred Country</label>
                  <select
                    value={formData.country}
                    onChange={(e) => handleInputChange("country", e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-sm font-bold text-slate-800 outline-none focus:border-blue-500"
                  >
                    <option value="uk">United Kingdom 🇬🇧</option>
                    <option value="canada">Canada 🇨🇦</option>
                    <option value="australia">Australia 🇦🇺</option>
                    <option value="new-zealand">New Zealand 🇳🇿</option>
                    <option value="malaysia">Malaysia 🇲🇾</option>
                    <option value="other">Other countries</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Consultation Mode</label>
                  <select
                    value={formData.mode}
                    onChange={(e) => handleInputChange("mode", e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-sm font-bold text-slate-800 outline-none focus:border-blue-500"
                  >
                    <option value="dhaka">In-Person (Head Office, Dhaka)</option>
                    <option value="virtual">Virtual Consultation (Zoom Call)</option>
                  </select>
                </div>
              </div>

              {/* Date & Time Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Select Date *</label>
                  <input
                    type="date"
                    required
                    min={new Date().toISOString().split("T")[0]}
                    value={formData.date}
                    onChange={(e) => handleInputChange("date", e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-bold text-slate-800 focus:bg-white focus:border-blue-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Preferred Time Slot</label>
                  <select
                    value={formData.timeSlot}
                    onChange={(e) => handleInputChange("timeSlot", e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-sm font-bold text-slate-800 outline-none focus:border-blue-500"
                  >
                    <option value="10:30 AM">10:30 AM – 11:30 AM</option>
                    <option value="11:30 AM">11:30 AM – 12:30 PM</option>
                    <option value="02:30 PM">02:30 PM – 03:30 PM</option>
                    <option value="03:30 PM">03:30 PM – 04:30 PM</option>
                    <option value="04:30 PM">04:30 PM – 05:30 PM</option>
                  </select>
                </div>
              </div>

              {/* Extra Comments */}
              <div className="pt-2">
                <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Briefly list your academic background / target courses</label>
                <textarea
                  placeholder="E.g., completed HSC in 2024 with GPA 5.0, looking for Computer Science Bachelor degrees."
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => handleInputChange("notes", e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2 text-xs font-bold text-slate-800 focus:bg-white focus:border-blue-500 transition-all outline-none resize-none"
                />
              </div>

              {/* Trust Badge */}
              <div className="bg-blue-50/50 border border-blue-100 rounded-xl p-3 flex items-start gap-2 text-blue-800 text-[11px] font-semibold leading-relaxed">
                <Info className="h-4 w-4 shrink-0 text-blue-600 mt-0.5" />
                <span>
                  Our services are entirely free with <strong>Zero File Assessment Fees</strong>. Booking secures a private 45-minute consultation.
                </span>
              </div>

              {/* Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={submitting}
                  className={`w-full text-center text-sm font-bold text-white bg-blue-700 hover:bg-blue-800 py-3.5 rounded-full shadow-lg shadow-blue-100 transition-all cursor-pointer ${
                    submitting ? "opacity-75 cursor-not-allowed" : ""
                  }`}
                  id="submit-scheduler-btn"
                >
                  {submitting ? "Scheduling Your Session..." : "Confirm & Secure Free Session"}
                </button>
              </div>

            </form>
          ) : (
            
            /* SUCCESS OVERLAY SCREEN */
            <div className="text-center py-8 space-y-6 animate-scale-up">
              <div className="h-16 w-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-md">
                <CheckCircle className="h-10 w-10" />
              </div>
              <div>
                <h3 className="text-2xl font-black text-slate-900 leading-tight">Session Confirmed!</h3>
                <p className="text-xs text-slate-500 font-semibold mt-1">
                  Congratulations, {formData.name}! Your free study counseling slot is locked.
                </p>
              </div>

              {/* Session Summary info */}
              <div className="border border-slate-100 rounded-2xl bg-slate-50 p-5 space-y-4 text-left max-w-md mx-auto">
                <div className="flex items-center gap-3 text-sm font-bold text-slate-700">
                  <User className="h-4 w-4 text-blue-700 shrink-0" />
                  <span>Name: {formData.name}</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-bold text-slate-700">
                  <Mail className="h-4 w-4 text-blue-700 shrink-0" />
                  <span>Email: {formData.email}</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-bold text-slate-700">
                  <Calendar className="h-4 w-4 text-blue-700 shrink-0" />
                  <span>Date: {formData.date}</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-bold text-slate-700">
                  <Clock className="h-4 w-4 text-blue-700 shrink-0" />
                  <span>Time: {formData.timeSlot}</span>
                </div>
              </div>

              <p className="text-sm text-slate-600 font-bold max-w-sm mx-auto leading-relaxed">
                Thank you! We will be contacting you soon.
              </p>

              <div className="pt-4">
                <button
                  onClick={onClose}
                  className="w-full text-center text-sm font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 py-3 rounded-full cursor-pointer transition-colors"
                >
                  Close Window
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
