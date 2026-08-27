import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";
import { officeLocations } from "../data";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "uk",
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [activeOffice, setActiveOffice] = useState("Dhaka (Head Office)");

  const handleInputChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      alert("Please fill in required fields (Name, Email, Mobile) to submit your message.");
      return;
    }
    setSubmitting(true);

    const DEFAULT_FORM_SHEET_URL =
      "https://script.google.com/macros/s/AKfycbwBKVtW-24pxCu9ei_3DvOi_bA3IYapm-VLCOf-7H14V2yu6WqOizbS4bxm9EgE-daZ/exec";

    const scriptURL = import.meta.env.VITE_GOOGLE_SHEET_URL || DEFAULT_FORM_SHEET_URL;
    
    if (scriptURL) {
      const payload = {
        sheetName: "FORM",
        fullName: formData.name,
        emailAddress: formData.email,
        mobileNumber: formData.phone,
        preferredCountry: formData.country,
        consultationMode: "Digital Inquiry",
        selectDate: new Date().toISOString().split('T')[0],
        preferredTimeSlot: "N/A",
        academicBackground: formData.message
      };

      try {
        await fetch(scriptURL, {
          method: 'POST',
          mode: 'no-cors',
          body: JSON.stringify(payload),
          headers: {
            'Content-Type': 'text/plain;charset=utf-8', 
          }
        });
      } catch (error) {
        console.error("Error submitting contact form:", error);
      }
    }

    setSubmitting(false);
    setSubmitted(true);
    setFormData({ name: "", email: "", phone: "", country: "uk", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-white font-sans border-t border-slate-100 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <span className="badge-lime-pill">
              CONTACT US
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
              Get in Touch with Our Advisors
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 max-w-sm font-normal leading-relaxed">
            Walk into our Head Office in Dhaka for a private counseling session.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Contact Details & Addresses */}
          <div className="lg:col-span-7 space-y-8 flex flex-col justify-between">
            
            {/* Office Cards */}
            <div className="space-y-4">


              {officeLocations.map((office) => {
                return (
                  <div
                    key={office.name}
                    className="bg-[#f9fafb] rounded-[28px] p-6 sm:p-8 border border-slate-200/80 space-y-6"
                    id={`office-card-${office.name.replace(/\s+/g, "-")}`}
                  >
                    <div className="flex items-center gap-3 border-b border-slate-200/60 pb-4">
                      <div className="bg-blue-600 text-white h-10 w-10 rounded-xl flex items-center justify-center font-bold shadow-md">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-slate-900 leading-none">{office.name}</h3>
                        <span className="text-[10px] text-slate-500 font-medium mt-1 inline-block">Physical Counseling Center</span>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex gap-3">
                        <MapPin className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                        <div>
                          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">Office Address</p>
                          <p className="text-xs sm:text-sm text-slate-800 font-bold leading-relaxed">{office.address}</p>
                        </div>
                      </div>

                      <div className="flex flex-col gap-4">
                        <div className="flex gap-3">
                          <Mail className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                          <div>
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">Official Emails</p>
                            <p className="text-xs sm:text-sm text-slate-800 font-bold">{office.email}</p>
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-3 border-t border-slate-200/60 pt-4">
                        <Clock className="h-4 w-4 text-slate-500 shrink-0 mt-0.5" />
                        <div>
                          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">Working Hours</p>
                          <p className="text-xs sm:text-sm text-slate-700 font-medium">{office.hours}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>



          </div>

          {/* Contact Inquiry Form */}
          <div className="lg:col-span-5 bg-[#f9fafb] rounded-[28px] p-6 sm:p-8 border border-slate-200/80 shadow-sm flex flex-col justify-between">
            {!submitted ? (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <h3 className="text-lg font-bold tracking-tight text-slate-900">Send Digital Inquiry</h3>
                  <p className="text-xs text-slate-500 font-normal mt-1">Our advisory board reviews submissions within 2 hours.</p>
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="E.g., Faisal Kabir"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-xs font-medium text-slate-800 focus:border-[#0d3c61] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="faisal@example.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-xs font-medium text-slate-800 focus:border-[#0d3c61] outline-none"
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
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-xs font-medium text-slate-800 focus:border-[#0d3c61] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Target Study Country</label>
                    <select
                      value={formData.country}
                      onChange={(e) => handleInputChange("country", e.target.value)}
                      className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2.5 text-xs font-medium text-slate-800 outline-none focus:border-[#0d3c61]"
                    >
                      <option value="uk">United Kingdom 🇬🇧</option>
                      <option value="usa">United States 🇺🇸</option>
                      <option value="canada">Canada 🇨🇦</option>
                      <option value="australia">Australia 🇦🇺</option>
                      <option value="europe">Europe / Schengen 🇪🇺</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Your Message</label>
                    <textarea
                      placeholder="Write your study aspirations or queries here..."
                      rows={3}
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2 text-xs font-medium text-slate-800 focus:border-[#0d3c61] outline-none resize-none"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-lime w-full justify-center"
                    id="submit-contact-btn"
                  >
                    <span>→</span> {submitting ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </form>
            ) : (
              <div className="text-center py-10 space-y-4 my-auto">
                <div className="h-12 w-12 bg-[#f0f9d6] text-[#2e5400] rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Inquiry Sent Successfully!</h3>
                  <p className="text-xs text-slate-500 mt-1 max-w-xs mx-auto">
                    Thank you! Our academic advisors will contact you shortly.
                  </p>
                </div>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-lime text-xs"
                >
                  <span>→</span> Send Another Inquiry
                </button>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
