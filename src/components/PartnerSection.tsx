import React, { useState } from "react";
import { CheckCircle, Globe, Link as LinkIcon, Building2, User, Mail, Phone, MapPin, FileCheck } from "lucide-react";

interface PartnerSectionProps {
  isPage?: boolean;
}

export default function PartnerSection({ isPage = false }: PartnerSectionProps) {
  const [formData, setFormData] = useState({
    applicantName: "",
    companyName: "",
    email: "",
    countryCode: "+880",
    phone: "",
    address: "",
    nidDriveLink: "",
    licenseDriveLink: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.applicantName || !formData.email || !formData.phone || !formData.address || !formData.nidDriveLink || !formData.licenseDriveLink) {
      alert("Please fill in all required fields marked with *.");
      return;
    }

    setSubmitting(true);

    const DEFAULT_PARTNER_SHEET_URL =
      "https://script.google.com/macros/s/AKfycbwBKVtW-24pxCu9ei_3DvOi_bA3IYapm-VLCOf-7H14V2yu6WqOizbS4bxm9EgE-daZ/exec";

    const scriptURL =
      import.meta.env.VITE_PARTNER_SHEET_URL || DEFAULT_PARTNER_SHEET_URL;

    const fullPhone = `${formData.countryCode} ${formData.phone}`.trim();

    const payload = {
      applicantName: formData.applicantName,
      companyName: formData.companyName || "N/A",
      email: formData.email,
      phoneMobile: fullPhone,
      address: formData.address,
      nidPassportLink: formData.nidDriveLink,
      companyLicenseProfileLink: formData.licenseDriveLink,
      // Complementary aliases for maximum backend script compatibility
      emailAddress: formData.email,
      mobileNumber: fullPhone,
      phone: fullPhone,
      nidPassportDriveLink: formData.nidDriveLink,
      companyLicenseDriveLink: formData.licenseDriveLink,
      formType: "Partner/Agent Application",
      sheetName: "Partner",
    };

    try {
      if (scriptURL) {
        await fetch(scriptURL, {
          method: "POST",
          mode: "no-cors",
          body: JSON.stringify(payload),
          headers: {
            "Content-Type": "text/plain;charset=utf-8",
          },
        });
      }
    } catch (error) {
      console.error("Error submitting partner form:", error);
    }

    setSubmitting(false);
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      applicantName: "",
      companyName: "",
      email: "",
      countryCode: "+880",
      phone: "",
      address: "",
      nidDriveLink: "",
      licenseDriveLink: "",
    });
    setSubmitted(false);
  };

  return (
    <section id="partner" className={`py-16 md:py-24 bg-slate-50/70 font-sans border-t border-slate-200/60 scroll-mt-20 ${isPage ? 'min-h-[85vh] flex flex-col justify-center' : ''}`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 text-blue-900 text-xs font-black uppercase tracking-wider">
            <Building2 className="h-3.5 w-3.5 text-blue-700" />
            <span>BECOME A PARTNER / AGENT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Join Our Global Representative Network
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            Partner with Open World Education to expand student recruitment capabilities with direct university affiliations, fast-track processing, and attractive commission structures.
          </p>
        </div>

        {/* Form Container Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xl shadow-slate-200/50">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Row 1: Applicant Name & Company Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    Applicant name <span className="text-rose-500 font-bold">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      placeholder="Applicant name"
                      value={formData.applicantName}
                      onChange={(e) => handleInputChange("applicantName", e.target.value)}
                      className="w-full bg-white border border-slate-300/80 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-indigo-900 focus:ring-1 focus:ring-indigo-900 outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    Company name
                  </label>
                  <input
                    type="text"
                    placeholder="Company name"
                    value={formData.companyName}
                    onChange={(e) => handleInputChange("companyName", e.target.value)}
                    className="w-full bg-white border border-slate-300/80 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-indigo-900 focus:ring-1 focus:ring-indigo-900 outline-none transition-all"
                  />
                </div>
              </div>

              {/* Row 2: Email & Phone/Mobile */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    Email <span className="text-rose-500 font-bold">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="w-full bg-white border border-slate-300/80 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-indigo-900 focus:ring-1 focus:ring-indigo-900 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    Phone/Mobile <span className="text-rose-500 font-bold">*</span>
                  </label>
                  <div className="flex border border-slate-300/80 rounded-xl overflow-hidden focus-within:border-indigo-900 focus-within:ring-1 focus-within:ring-indigo-900 transition-all bg-white">
                    <div className="flex items-center gap-1.5 px-3 bg-slate-50 border-r border-slate-200 text-slate-700 text-xs font-semibold shrink-0 select-none">
                      <Globe className="h-4 w-4 text-slate-500" />
                      <select
                        value={formData.countryCode}
                        onChange={(e) => handleInputChange("countryCode", e.target.value)}
                        className="bg-transparent text-xs font-semibold text-slate-700 outline-none cursor-pointer pr-1"
                      >
                        <option value="+880">🇧🇩 +880</option>
                        <option value="+1">🇺🇸 +1</option>
                        <option value="+44">🇬🇧 +44</option>
                        <option value="+91">🇮🇳 +91</option>
                        <option value="+971">🇦🇪 +971</option>
                        <option value="+60">🇲🇾 +60</option>
                      </select>
                    </div>
                    <input
                      type="tel"
                      required
                      placeholder="Contact Number"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="w-full px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none bg-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* Row 3: Address (Full Width) */}
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">
                  Address <span className="text-rose-500 font-bold">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Address"
                  value={formData.address}
                  onChange={(e) => handleInputChange("address", e.target.value)}
                  className="w-full bg-white border border-slate-300/80 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-indigo-900 focus:ring-1 focus:ring-indigo-900 outline-none transition-all"
                />
              </div>

              {/* Row 4: Google Drive Document Links */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-1">
                
                {/* NID/Passport Link */}
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-1">
                    Upload Your NID/Passport copy <span className="text-rose-500 font-bold">*</span>
                  </label>
                  <p className="text-xs text-slate-500 mb-2 font-medium">Provide a shareable Google Drive link to document</p>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <LinkIcon className="h-4 w-4 text-emerald-600" />
                    </div>
                    <input
                      type="url"
                      required
                      placeholder="Paste Google Drive link for NID/Passport"
                      value={formData.nidDriveLink}
                      onChange={(e) => handleInputChange("nidDriveLink", e.target.value)}
                      className="w-full bg-slate-50/50 border border-dashed border-slate-400/80 rounded-xl pl-10 pr-4 py-3.5 text-xs font-mono text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-indigo-900 focus:border-solid focus:ring-1 focus:ring-indigo-900 outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Company License or Company Profile Link */}
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-1">
                    Company License / Company Profile <span className="text-rose-500 font-bold">*</span>
                  </label>
                  <p className="text-xs text-slate-500 mb-2 font-medium">Provide a shareable Google Drive link to license or company profile</p>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <LinkIcon className="h-4 w-4 text-emerald-600" />
                    </div>
                    <input
                      type="url"
                      required
                      placeholder="Paste Google Drive link for License or Company Profile"
                      value={formData.licenseDriveLink}
                      onChange={(e) => handleInputChange("licenseDriveLink", e.target.value)}
                      className="w-full bg-slate-50/50 border border-dashed border-slate-400/80 rounded-xl pl-10 pr-4 py-3.5 text-xs font-mono text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-indigo-900 focus:border-solid focus:ring-1 focus:ring-indigo-900 outline-none transition-all"
                    />
                  </div>
                </div>

              </div>

              {/* Row 5: Submit Form Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={submitting}
                  className="bg-[#131b4d] hover:bg-[#0c1236] text-white font-semibold text-sm px-8 py-3.5 rounded-xl shadow-md transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 disabled:opacity-75"
                  id="submit-partner-form-btn"
                >
                  {submitting ? (
                    <>Submitting Application...</>
                  ) : (
                    <>Submit Form</>
                  )}
                </button>
              </div>

            </form>
          ) : (
            /* Success State */
            <div className="text-center py-10 space-y-6 max-w-lg mx-auto">
              <div className="h-16 w-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-md">
                <CheckCircle className="h-9 w-9" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-slate-900">Partner Application Submitted!</h3>
                <p className="text-sm text-slate-600 font-medium leading-relaxed">
                  Thank you for applying to partner with Open World Education. Our institutional partnership board will review your credentials and contact you within 1-2 business days.
                </p>
              </div>

              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200/80 text-left text-xs space-y-2 text-slate-700">
                <p><strong className="text-slate-900">Applicant:</strong> {formData.applicantName}</p>
                {formData.companyName && <p><strong className="text-slate-900">Company:</strong> {formData.companyName}</p>}
                <p><strong className="text-slate-900">Email:</strong> {formData.email}</p>
                <p><strong className="text-slate-900">Phone:</strong> {formData.countryCode} {formData.phone}</p>
              </div>

              <button
                onClick={handleReset}
                className="bg-[#131b4d] hover:bg-[#0c1236] text-white font-semibold text-xs px-6 py-3 rounded-xl transition-all cursor-pointer inline-flex items-center gap-2"
              >
                Submit Another Partner Application
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
