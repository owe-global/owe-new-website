import React, { useState } from "react";
import { Sparkles, ArrowRight, ArrowLeft, Check, GraduationCap, ClipboardList, Send, Award } from "lucide-react";

interface EligibilityPredictorProps {
  onSuccess: () => void;
}

export default function EligibilityPredictor({ onSuccess }: EligibilityPredictorProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    academicLevel: "masters",
    gpaScale: "4.0",
    gpaValue: "3.5",
    englishTest: "ielts",
    englishScore: "6.5",
    destination: "uk",
    name: "",
    email: "",
    phone: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<null | {
    eligible: boolean;
    visaProbability: string;
    scholarshipProbability: string;
    status: string;
    recommendedUniversities: string[];
    tips: string[];
  }>(null);

  const handleInputChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const nextStep = () => {
    if (step < 4) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const calculateEligibility = () => {
    setSubmitting(true);
    
    // Simulate API delay
    setTimeout(() => {
      const gpa = parseFloat(formData.gpaValue);
      const isScale4 = formData.gpaScale === "4.0";
      const relativeGpa = isScale4 ? gpa / 4.0 : gpa / 5.0;

      let visaProb = "95%";
      let scholarProb = "N/A";
      let recommended: string[] = [];
      let tips: string[] = [];
      let eligible = true;

      // Logic according to country
      if (formData.destination === "uk") {
        recommended = ["University of Greenwich", "Coventry University", "Hertfordshire University"];
        visaProb = relativeGpa > 0.75 ? "98%" : "92%";
        scholarProb = relativeGpa > 0.85 ? "Up to £4,000" : "Up to £2,000";
        tips = [
          "You qualify for rapid 48-hour admissions at UK partner universities.",
          "UK currently offers a 2-year Graduate Route post-study work visa (PSW).",
          formData.englishTest === "moi" 
            ? "Excellent! Several UK universities accept MOI (Medium of Instruction) from Bangladesh to waive IELTS." 
            : "Your English score is highly suitable for direct admission without pre-sessional English."
        ];
      } else if (formData.destination === "new-zealand") {
        recommended = ["University of Auckland", "Victoria University", "Massey University"];
        visaProb = relativeGpa > 0.8 ? "97%" : "90%";
        scholarProb = relativeGpa > 0.9 ? "Up to NZ$10,000 Excellence Scholarship" : "Up to NZ$5,000";
        tips = [
          "New Zealand offers a fantastic environment with excellent post-study work opportunities.",
          "We will help you prepare the robust financial documentation required for the NZ student visa.",
          "Great opportunities for permanent residency after completing your studies."
        ];
      } else if (formData.destination === "canada") {
        recommended = ["York University", "University of Windsor", "Conestoga College"];
        visaProb = relativeGpa > 0.8 ? "94%" : "86%";
        scholarProb = relativeGpa > 0.88 ? "Up to CA$5,000 Entry Scholarship" : "Up to CA$2,000";
        tips = [
          "Canada visa requires a Guaranteed Investment Certificate (GIC) of CA$20,635.",
          "We recommend applying early to secure spots, as Canada admissions fill up 8-10 months in advance.",
          "Great path for post-study work permits (PGWP) and permanent residency."
        ];
      } else if (formData.destination === "australia") {
        recommended = ["Monash University", "Macquarie University", "Deakin University"];
        visaProb = relativeGpa > 0.78 ? "96%" : "88%";
        scholarProb = relativeGpa > 0.88 ? "Up to 25% Tuition Waiver" : "Up to AU$5,000";
        tips = [
          "Australia requires Genuine Student (GS) evaluation. Your profile is ideal for clean clearance.",
          "You will need standard Overseas Student Health Cover (OSHC) throughout your study period.",
          "Excellent part-time work rights and regional post-study work benefits."
        ];
      } else {
        // Malaysia
        recommended = ["Taylor's University", "Sunway University", "Monash University Malaysia"];
        visaProb = "99%";
        scholarProb = "Up to 30% Tuition Waiver";
        tips = [
          "Malaysia offers highly affordable, world-class degrees from top UK and Australian partner universities.",
          "Visa processing is fast and heavily facilitated by the universities (EMGS).",
          "Excellent multicultural hub with very low cost of living compared to Western countries."
        ];
      }

      setResult({
        eligible,
        visaProbability: visaProb,
        scholarshipProbability: scholarProb,
        status: relativeGpa > 0.8 ? "Excellent Profile Match" : "Standard Profile Match",
        recommendedUniversities: recommended,
        tips
      });
      setSubmitting(false);

      // Send lead to Google Sheets
      const DEFAULT_ELIGIBILITY_SHEET_URL =
        "https://script.google.com/macros/s/AKfycbwBKVtW-24pxCu9ei_3DvOi_bA3IYapm-VLCOf-7H14V2yu6WqOizbS4bxm9EgE-daZ/exec";

      const scriptURL =
        import.meta.env.VITE_ELIGIBILITY_SHEET_URL || DEFAULT_ELIGIBILITY_SHEET_URL;
      if (scriptURL) {
        // Map raw values to human-readable labels
        const levelMap: Record<string, string> = {
          "bachelors": "Bachelors / Undergraduate",
          "masters": "Masters / Postgraduate",
          "diploma": "Advanced Diploma",
          "phd": "PhD / Research Degree"
        };
        const testMap: Record<string, string> = {
          "ielts": "IELTS Exam",
          "pte": "PTE Academic",
          "moi": "MOI (Medium of Instruction)",
          "none": "Plan to Take / Studying"
        };
        const destMap: Record<string, string> = {
          "uk": "United Kingdom",
          "canada": "Canada",
          "australia": "Australia",
          "new-zealand": "New Zealand",
          "malaysia": "Malaysia"
        };
        const englishScoreMap: Record<string, string> = {
          "5.0": "5.0 (Limited Proficiency)",
          "5.5": "5.5 (Modest Competency)",
          "6.0": "6.0 (Competent User)",
          "6.5": "6.5 (Very Good User - Recommended)",
          "7.0": "7.0+ (Superior User)",
          "45": "45 - 50 (Competent)",
          "51": "51 - 57 (Good)",
          "58": "58 - 64 (Very Good - Recommended)",
          "65": "65+ (Superior)"
        };

        const payload = {
          sheetName: "Eligible",
          fullName: formData.name,
          emailAddress: formData.email,
          mobileNumber: formData.phone,
          desiredLevelOfStudy: levelMap[formData.academicLevel] || formData.academicLevel,
          gpaScale: `GPA out of ${formData.gpaScale}`,
          gpaScore: formData.gpaValue,
          englishProficiencyStatus: testMap[formData.englishTest] || formData.englishTest,
          englishBandScore: englishScoreMap[formData.englishScore] || formData.englishScore,
          preferredDestinationCountry: destMap[formData.destination] || formData.destination,
          visaProbability: visaProb,
          estimatedScholarship: scholarProb,
          recommendedUniversities: recommended.join(", ")
        };

        fetch(scriptURL, {
          method: 'POST',
          mode: 'no-cors',
          body: JSON.stringify(payload),
          headers: {
            'Content-Type': 'text/plain;charset=utf-8', 
          }
        }).catch(err => console.error("Error saving eligibility lead:", err));
      }
    }, 1500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      alert("Please fill in your name, email, and phone number to view your customized results.");
      return;
    }
    calculateEligibility();
  };

  const resetForm = () => {
    setStep(1);
    setResult(null);
  };

  return (
    <section id="assess" className="py-20 bg-slate-50 border-y border-slate-100 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
            <Sparkles className="h-3 w-3 text-blue-600" />
            Interactive Tools
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Check Study Abroad Eligibility
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 font-medium">
            Get instant, customized visa probability scores and scholarship matchings for major study destinations based on your profile.
          </p>
        </div>

        {/* Predictor Body */}
        <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden" id="predictor-widget">
          
          {/* Header Step Indicator */}
          {!result && (
            <div className="bg-slate-900 px-6 py-4 flex justify-between items-center text-white">
              <div className="flex items-center gap-2">
                <ClipboardList className="h-5 w-5 text-blue-400" />
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider">Assessment Tool</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-bold text-slate-300">
                <span className={`h-2 w-2 rounded-full ${step >= 1 ? "bg-blue-400" : "bg-slate-700"}`} />
                <span className={`h-2 w-2 rounded-full ${step >= 2 ? "bg-blue-400" : "bg-slate-700"}`} />
                <span className={`h-2 w-2 rounded-full ${step >= 3 ? "bg-blue-400" : "bg-slate-700"}`} />
                <span className={`h-2 w-2 rounded-full ${step >= 4 ? "bg-blue-400" : "bg-slate-700"}`} />
                <span className="ml-1 text-[11px]">Step {step} of 4</span>
              </div>
            </div>
          )}

          <div className="p-6 sm:p-10">
            {!result ? (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                
                {/* Step 1: Academic Level & GPA */}
                {step === 1 && (
                  <div className="space-y-6 animate-fade-in">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 uppercase tracking-wider mb-2">
                        1. What is your desired level of study?
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        {[
                          { id: "bachelors", label: "Bachelors / Undergraduate", desc: "For HSC/A-Levels/Diploma grads" },
                          { id: "masters", label: "Masters / Postgraduate", desc: "For Honors/Bachelors graduates" },
                          { id: "diploma", label: "Advanced Diploma", desc: "For intermediate/practical streams" },
                          { id: "phd", label: "PhD / Research Degree", desc: "For academic researchers" },
                        ].map((level) => (
                          <div
                            key={level.id}
                            onClick={() => handleInputChange("academicLevel", level.id)}
                            className={`p-4 rounded-xl border-2 text-left cursor-pointer transition-all ${
                              formData.academicLevel === level.id
                                ? "border-blue-500 bg-blue-50/50"
                                : "border-slate-100 hover:border-slate-200 hover:bg-slate-50/50"
                            }`}
                          >
                            <p className="text-xs font-bold text-slate-900">{level.label}</p>
                            <p className="text-[10px] text-slate-500 mt-1 font-medium">{level.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="border-t border-slate-100 pt-5">
                      <label className="block text-sm font-bold text-slate-700 uppercase tracking-wider mb-3">
                        2. Enter your GPA / CGPA
                      </label>
                      <div className="flex gap-4 items-center">
                        <div className="w-1/3">
                          <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Scale</label>
                          <select
                            value={formData.gpaScale}
                            onChange={(e) => {
                              handleInputChange("gpaScale", e.target.value);
                              handleInputChange("gpaValue", e.target.value === "4.0" ? "3.5" : "4.5");
                            }}
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-sm font-bold text-slate-800"
                          >
                            <option value="4.0">GPA out of 4.0</option>
                            <option value="5.0">GPA out of 5.0</option>
                          </select>
                        </div>
                        <div className="w-2/3">
                          <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Your Score</label>
                          <input
                            type="number"
                            step="0.01"
                            min="2.0"
                            max={formData.gpaScale}
                            value={formData.gpaValue}
                            onChange={(e) => handleInputChange("gpaValue", e.target.value)}
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-bold text-slate-800"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 2: English Language Test */}
                {step === 2 && (
                  <div className="space-y-6 animate-fade-in">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 uppercase tracking-wider mb-3">
                        3. English Language Proficiency Status
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        {[
                          { id: "ielts", label: "IELTS Exam", desc: "Most widely accepted standard" },
                          { id: "pte", label: "PTE Academic", desc: "Rapid computer-based exam" },
                          { id: "moi", label: "MOI (Medium of Instruction)", desc: "English medium schooling proof" },
                          { id: "none", label: "Plan to Take / Studying", desc: "No current scores yet" },
                        ].map((test) => (
                          <div
                            key={test.id}
                            onClick={() => handleInputChange("englishTest", test.id)}
                            className={`p-4 rounded-xl border-2 text-left cursor-pointer transition-all ${
                              formData.englishTest === test.id
                                ? "border-blue-500 bg-blue-50/50"
                                : "border-slate-100 hover:border-slate-200 hover:bg-slate-50/50"
                            }`}
                          >
                            <p className="text-xs font-bold text-slate-900">{test.label}</p>
                            <p className="text-[10px] text-slate-500 mt-1 font-medium">{test.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {(formData.englishTest === "ielts" || formData.englishTest === "pte") && (
                      <div className="border-t border-slate-100 pt-5">
                        <label className="block text-sm font-bold text-slate-700 uppercase tracking-wider mb-2">
                          4. What is your overall band/score?
                        </label>
                        {formData.englishTest === "ielts" ? (
                          <select
                            value={formData.englishScore}
                            onChange={(e) => handleInputChange("englishScore", e.target.value)}
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-bold text-slate-800"
                          >
                            <option value="5.0">5.0 (Limited Proficiency)</option>
                            <option value="5.5">5.5 (Modest Competency)</option>
                            <option value="6.0">6.0 (Competent User)</option>
                            <option value="6.5">6.5 (Very Good User - Recommended)</option>
                            <option value="7.0">7.0+ (Superior User)</option>
                          </select>
                        ) : (
                          <select
                            value={formData.englishScore}
                            onChange={(e) => handleInputChange("englishScore", e.target.value)}
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-bold text-slate-800"
                          >
                            <option value="45">45 - 50 (Competent)</option>
                            <option value="51">51 - 57 (Good)</option>
                            <option value="58">58 - 64 (Very Good - Recommended)</option>
                            <option value="65">65+ (Superior)</option>
                          </select>
                        )}
                      </div>
                    )}
                  </div>
                )}

                {/* Step 3: Preferred Destination */}
                {step === 3 && (
                  <div className="space-y-4 animate-fade-in">
                    <label className="block text-sm font-bold text-slate-700 uppercase tracking-wider mb-3">
                      5. Choose your preferred destination country
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {[
                        { id: "uk", name: "United Kingdom", flag: "🇬🇧" },
                        { id: "canada", name: "Canada", flag: "🇨🇦" },
                        { id: "australia", name: "Australia", flag: "🇦🇺" },
                        { id: "new-zealand", name: "New Zealand", flag: "🇳🇿" },
                        { id: "malaysia", name: "Malaysia", flag: "🇲🇾" },
                      ].map((c) => (
                        <div
                          key={c.id}
                          onClick={() => handleInputChange("destination", c.id)}
                          className={`p-4 rounded-xl border-2 text-center cursor-pointer transition-all ${
                            formData.destination === c.id
                              ? "border-blue-500 bg-blue-50/50 shadow-md"
                              : "border-slate-100 hover:border-slate-200 hover:bg-slate-50/50"
                          }`}
                        >
                          <span className="text-3xl block mb-1">{c.flag}</span>
                          <span className="text-xs font-bold text-slate-800">{c.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 4: Contact Details */}
                {step === 4 && (
                  <div className="space-y-4 animate-fade-in">
                    <label className="block text-sm font-bold text-slate-700 uppercase tracking-wider mb-1">
                      6. Get customized results instantly
                    </label>
                    <p className="text-xs text-slate-500 mb-4 font-medium">
                      Fill in your contact details so our counseling panel can email your official eligibility report and assist you further.
                    </p>

                    <div className="space-y-3.5">
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Full Name</label>
                        <input
                          type="text"
                          required
                          placeholder="E.g., Tanvir Ahmed"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-bold text-slate-800 focus:bg-white focus:border-blue-500 transition-all outline-none"
                        />
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        <div>
                          <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Email Address</label>
                          <input
                            type="email"
                            required
                            placeholder="tanvir@example.com"
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-bold text-slate-800 focus:bg-white focus:border-blue-500 transition-all outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Mobile Number</label>
                          <input
                            type="tel"
                            required
                            placeholder="E.g., 01711223344"
                            value={formData.phone}
                            onChange={(e) => handleInputChange("phone", e.target.value)}
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-bold text-slate-800 focus:bg-white focus:border-blue-500 transition-all outline-none"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Form Navigation Controls */}
                <div className="flex justify-between items-center border-t border-slate-100 pt-6">
                  {step > 1 ? (
                    <button
                      type="button"
                      onClick={prevStep}
                      className="flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-slate-800 bg-slate-100 hover:bg-slate-200 px-4 py-2.5 rounded-xl cursor-pointer transition-colors"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      Back
                    </button>
                  ) : (
                    <div />
                  )}

                  {step < 4 ? (
                    <button
                      type="button"
                      onClick={nextStep}
                      className="flex items-center gap-1.5 text-xs font-bold text-white bg-blue-700 hover:bg-blue-800 px-5 py-2.5 rounded-full shadow-md cursor-pointer transition-all"
                    >
                      Next Step
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={submitting}
                      className={`flex items-center gap-1.5 text-xs font-bold text-white bg-blue-700 hover:bg-blue-800 px-6 py-2.5 rounded-full shadow-md cursor-pointer transition-all ${
                        submitting ? "opacity-70 cursor-not-allowed" : ""
                      }`}
                    >
                      {submitting ? "Calculating Results..." : "Submit & Assess"}
                      <Send className="h-4 w-4" />
                    </button>
                  )}
                </div>

              </form>
            ) : (
              
              /* Eligibility results display */
              <div className="space-y-6 animate-scale-up">
                
                {/* Visual Header */}
                <div className="text-center bg-blue-700 rounded-2xl p-6 sm:p-8 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full filter blur-xl" />
                  <div className="h-12 w-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Check className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black">{result.status}</h3>
                  <p className="text-xs text-blue-100 mt-1 font-semibold">Thank you, {formData.name}! Your profile report has been successfully calculated.</p>
                </div>

                {/* Score cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-blue-50/50 p-5 rounded-2xl border border-blue-100 text-center">
                    <p className="text-[10px] font-bold text-blue-700 uppercase tracking-widest leading-none mb-1">Visa Probability</p>
                    <p className="text-3xl font-black text-blue-900 leading-none">{result.visaProbability}</p>
                    <span className="text-[9px] text-blue-700 font-bold bg-blue-100 px-2 py-0.5 rounded-full mt-2 inline-block">High Approval Match</span>
                  </div>
                  <div className="bg-emerald-50/50 p-5 rounded-2xl border border-emerald-100 text-center">
                    <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest leading-none mb-1">Estimated Scholarship</p>
                    <p className="text-lg sm:text-xl font-black text-emerald-900 leading-none mt-1.5">{result.scholarshipProbability}</p>
                    <span className="text-[9px] text-emerald-700 font-bold bg-emerald-100 px-2 py-0.5 rounded-full mt-2 inline-block">Bursaries & Grants</span>
                  </div>
                </div>

                {/* Universities list */}
                <div className="border border-slate-100 rounded-2xl p-5 bg-white">
                  <h4 className="text-sm font-extrabold text-slate-900 flex items-center gap-2 mb-3.5 border-b border-slate-100 pb-2">
                    <GraduationCap className="h-4 w-4 text-blue-700" />
                    Recommended Universities for Your Profile
                  </h4>
                  <ul className="space-y-2.5">
                    {result.recommendedUniversities.map((uni, index) => (
                      <li key={index} className="flex items-center gap-2 text-xs font-bold text-slate-700 bg-slate-50/50 border border-slate-100 px-3 py-2 rounded-xl">
                        <span className="h-5 w-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-[10px] font-bold font-mono">
                          {index + 1}
                        </span>
                        {uni}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tips & guidelines */}
                <div className="border border-slate-100 rounded-2xl p-5 bg-slate-50/50">
                  <h4 className="text-sm font-extrabold text-slate-900 flex items-center gap-2 mb-3 border-b border-slate-100 pb-2">
                    <Award className="h-4 w-4 text-emerald-600" />
                    Expert Admissions Advising
                  </h4>
                  <ul className="space-y-2 text-xs font-semibold text-slate-600 list-disc list-inside">
                    {result.tips.map((tip, index) => (
                      <li key={index} className="leading-relaxed">
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Call to Action for consultation */}
                <div className="flex flex-col sm:flex-row gap-3.5 pt-2">
                  <button
                    onClick={onSuccess}
                    className="flex-1 flex items-center justify-center gap-2 text-xs font-bold text-white bg-blue-700 hover:bg-blue-800 py-3.5 rounded-full shadow-lg shadow-blue-100 transition-all cursor-pointer"
                  >
                    Lock results & Book Expert Session
                    <ArrowRight className="h-4 w-4" />
                  </button>
                  <button
                    onClick={resetForm}
                    className="sm:w-1/3 flex items-center justify-center text-xs font-bold text-slate-600 bg-white hover:bg-slate-50 border border-slate-200 py-3.5 rounded-xl cursor-pointer"
                  >
                    Recalculate
                  </button>
                </div>

              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
