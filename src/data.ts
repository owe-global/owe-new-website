import { CountryData, ServiceData, TestimonialData, OfficeLocation, TeamMember } from "./types";

export const countriesData: CountryData[] = [
  {
    id: "uk",
    name: "United Kingdom",
    flag: "🇬🇧",
    bgUrl: "/united-kingdom.jpg",
    description: "Home to prestigious world-class universities with shorter, more intensive degrees (1-year Masters, 3-year Bachelors). No-IELTS admission options are widely available for eligible applicants.",
    successRate: "98.5%",
    averageCost: "£14,000 - £22,000 / Year",
    topCourses: ["Business & MBA", "Data Science & AI", "Public Health", "Engineering & Tech"],
    postStudyWork: "2 Years Graduate Visa (PSW)",
    intake: "September, January, May"
  },
  {
    id: "canada",
    name: "Canada",
    flag: "🇨🇦",
    bgUrl: "https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?auto=format&fit=crop&q=80&w=800",
    description: "Highly student-friendly immigration policies, exceptional quality of life, and affordable top-ranked universities. Path to permanent residency (PR) makes it extremely popular.",
    successRate: "95.8%",
    averageCost: "CA$18,000 - CA$28,000 / Year",
    topCourses: ["Software Engineering", "Civil Engineering", "Project Management", "Digital Marketing"],
    postStudyWork: "Up to 3 Years (PGWP)",
    intake: "September, January, May"
  },
  {
    id: "australia",
    name: "Australia",
    flag: "🇦🇺",
    bgUrl: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&q=80&w=800",
    description: "Breathtaking lifestyle paired with world-class academic institutions. Excellent regional study incentives and generous post-study work opportunities in global-standard companies.",
    successRate: "96.4%",
    averageCost: "AU$24,000 - AU$36,000 / Year",
    topCourses: ["Nursing & Healthcare", "Information Technology", "Accounting", "Data Science"],
    postStudyWork: "2 to 4 Years (PSW)",
    intake: "February, July, November"
  },
  {
    id: "new-zealand",
    name: "New Zealand",
    flag: "🇳🇿",
    bgUrl: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&q=80&w=800",
    description: "World-leading education system with a safe and welcoming environment. Enjoy post-study work rights and a fantastic work-life balance surrounded by nature.",
    successRate: "97.2%",
    averageCost: "NZ$26,000 - NZ$38,000 / Year",
    topCourses: ["Agriculture", "Environmental Science", "Hospitality Management", "Engineering"],
    postStudyWork: "Up to 3 Years (PSW)",
    intake: "February, July"
  },
  {
    id: "malaysia",
    name: "Malaysia",
    flag: "🇲🇾",
    bgUrl: "/malaysia-banner.avif",
    description: "A booming educational hub offering affordable degrees from top UK & Australian partner universities. Incredible diverse culture and easy visa processes.",
    successRate: "99.1%",
    averageCost: "RM 20,000 - RM 45,000 / Year",
    topCourses: ["Business Administration", "Tourism Management", "Computer Science", "Accounting"],
    postStudyWork: "No PSW, but massive regional job prospects",
    intake: "January, May, September"
  }
];

export const servicesData: ServiceData[] = [
  {
    id: "academic-counseling",
    title: "Personalized Profile Assessment",
    description: "Our certified advisors review your academic transcripts, budget, and aspirations to match you with top-fit universities and pathways.",
    iconName: "Compass",
    details: [
      "One-on-one session with senior academic counselors",
      "Analysis of CGPA, English proficiency (IELTS/PTE), and budget",
      "Shortlisting of courses, universities, and study destinations",
      "Mapping out academic timelines and intake deadlines"
    ]
  },
  {
    id: "university-admission",
    title: "Application & University Admission",
    description: "We handle the entire application process, ensuring your documentation (SOP, CV, recommendation letters) stands out to secure rapid offers.",
    iconName: "FileSpreadsheet",
    details: [
      "Professional reviews of Statement of Purpose (SOP) and Letters of Recommendation",
      "Error-free document compilation and portal submission",
      "Direct follow-up with university admission boards",
      "Securing quick unconditional/conditional offers & CAS/i-20 documents"
    ]
  },
  {
    id: "scholarship-assistance",
    title: "Scholarship & Financial Aid Prep",
    description: "Maximize your chances of landing merit-based awards, bursaries, and partially or fully-funded scholarships with our dedicated team.",
    iconName: "GraduationCap",
    details: [
      "Identification of exclusive state and university bursaries",
      "Guidance on writing impactful scholarship essays",
      "Preparing documents for early application priority scholarships",
      "Negotiating institutional financial aid and discounts"
    ]
  },
  {
    id: "visa-guidance",
    title: "Visa Interview & Documentation Guidance",
    description: "We ensure your financial sponsors, statement of source of funds, and interview performance are pristine, giving you industry-leading visa success rates.",
    iconName: "ShieldCheck",
    details: [
      "Meticulous visa document auditing (funds, sponsors, tax logs)",
      "Strict compliance check matching current embassy rules",
      "Rigorous Mock Visa Interviews simulating real consulate questions",
      "Detailed health insurance (OSHC/IHS) and medical check guidance"
    ]
  },
  {
    id: "language-prep",
    title: "IELTS, PTE & Duolingo Exam Prep",
    description: "Join premium training courses led by native-level instructors with masterclasses, weekly mock tests, and personalized feedback.",
    iconName: "Languages",
    details: [
      "Structured syllabus with interactive live lectures",
      "Extensive pool of test practice materials and past question banks",
      "Regular fully-evaluated Mock Tests with examiner feedback",
      "Special fast-track batches for last-minute test takers"
    ]
  },
  {
    id: "pre-departure",
    title: "Pre-Departure & Accommodation Support",
    description: "Your journey doesn't end with a visa. We organize extensive pre-departure sessions, find budget-friendly housing, and help secure airport pickups.",
    iconName: "PlaneTakeoff",
    details: [
      "Insightful briefings about local lifestyle, student laws, and bank accounts",
      "Help booking safe student accommodation (shared apartments, dorms)",
      "Arranging flights, baggage guidelines, and local SIM cards",
      "Connecting with active alumni networks and existing students abroad"
    ]
  }
];

export const testimonialsData: TestimonialData[] = [
  {
    id: "1",
    name: "ABIR HASAN BIJOY",
    photo: "/abir-hasan.png",
    university: "INTI International University",
    country: "Malaysia",
    flag: "🇲🇾",
    program: "Bachelors Degree",
    visaDate: "Intake: Oct 2026",
    reviewText: "Proud to receive my offer letter from INTI International University without IELTS. Grateful to Open World Education for making the journey easy and successful.",
    rating: 5
  },
  {
    id: "2",
    name: "Mahfuzur Rahman",
    photo: "/mahfuz.png",
    university: "INTI International University",
    country: "Malaysia",
    flag: "🇲🇾",
    program: "Bachelor of Information Technology (Hons)",
    visaDate: "Intake: October 2026",
    reviewText: "Open World Education made my admission process smooth and straightforward. I successfully received my Letter of Eligibility from INTI International University for the October 2026 intake, meeting the English language requirement without IELTS. Their professional guidance and continuous support ensured a hassle-free application process from start to finish.",
    rating: 5
  },
  {
    id: "3",
    name: "Faisal Kabir",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
    university: "Monash University",
    country: "Australia",
    flag: "🇦🇺",
    program: "Master of Public Health",
    visaDate: "Intake: Feb 2026",
    reviewText: "Securing an admission and visa to Australia requires perfect GTE evaluation. Open World Education audited my files so carefully that my visa got approved in just 9 days! They are professional, transparent, and incredibly knowledgeable.",
    rating: 5
  },
  {
    id: "4",
    name: "Nabila Islam",
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
    university: "York University",
    country: "Canada",
    flag: "🇨🇦",
    program: "Bachelor of Business Administration",
    visaDate: "Intake: Sept 2025",
    reviewText: "I am extremely grateful to the team for helping me fulfill my dream of studying in Canada. They helped me choose the perfect program, draft my SOP, and guide my father on tax logs. Their transparency is what sets them apart from other firms.",
    rating: 5
  }
];

export const officeLocations: OfficeLocation[] = [
  {
    name: "Head Office",
    address: "Saimon Point, Level-4, Boshundhara Road, Dhaka, Bangladesh 1229",
    phone: "",
    email: "info@oweglobal.com / admissions@oweglobal.com",
    hours: "Saturday – Thursday: 10:00 AM – 6:30 PM",
    gmapsLink: "https://maps.google.com"
  }
];

export const partnerUniversities = [
  { name: "University of Greenwich", logo: "UG", countryId: "uk" },
  { name: "Coventry University", logo: "CU", countryId: "uk" },
  { name: "University of Essex", logo: "UE", countryId: "uk" },
  { name: "York University", logo: "YU", countryId: "canada" },
  { name: "University of Windsor", logo: "UW", countryId: "canada" },
  { name: "Seneca College", logo: "SC", countryId: "canada" },
  { name: "Monash University", logo: "MU", countryId: "australia" },
  { name: "Macquarie University", logo: "MQ", countryId: "australia" },
  { name: "RMIT University", logo: "RMIT", countryId: "australia" },
  { name: "University of Auckland", logo: "UOA", countryId: "new-zealand" },
  { name: "Victoria University", logo: "VUW", countryId: "new-zealand" },
  { name: "Taylor's University", logo: "TU", countryId: "malaysia" },
  { name: "Sunway University", logo: "SU", countryId: "malaysia" },
];

export const teamMembersData: TeamMember[] = [
  {
    id: "1",
    name: "Dr. Rafiqul Islam",
    role: "Founder & Chief Academic Advisor",
    specialty: "UK Higher Education Pathways",
    photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400",
    experience: "15+ Yrs Exp",
    bio: "Former UK University Admissions Officer with over 15 years guiding Bangladeshi scholars to top global universities.",
    destinations: ["🇬🇧 UK", "🇳🇿 NZ"]
  },
  {
    id: "2",
    name: "Nusrat Jahan",
    role: "Senior Visa & Compliance Specialist",
    specialty: "Australia (GS) & Canada (PGWP)",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
    experience: "10+ Yrs Exp",
    bio: "Certified education counselor specializing in financial auditing, GTE compliance statements, and mock interviews.",
    destinations: ["🇦🇺 Australia", "🇨🇦 Canada"]
  },
  {
    id: "3",
    name: "Mahmudul Hasan",
    role: "Lead Admissions & Scholarship Advisor",
    specialty: "Malaysia & New Zealand Admissions",
    photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400",
    experience: "8+ Yrs Exp",
    bio: "Has helped over 1,200 Bangladeshi students secure admissions and tuition fee waivers across the Asia Pacific and Oceania.",
    destinations: ["🇲🇾 Malaysia", "🇳🇿 NZ", "🇦🇺 Australia"]
  },
  {
    id: "4",
    name: "Farhana Chowdhury",
    role: "IELTS & Test Prep Head Instructor",
    specialty: "Band 8+ IELTS & PTE Strategy",
    photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400",
    experience: "7+ Yrs Exp",
    bio: "CELTA-certified English trainer who has coached 3,000+ students to achieve target band scores in IELTS and PTE.",
    destinations: ["🇬🇧 UK", "🇨🇦 Canada", "🇦🇺 Australia", "🇳🇿 NZ", "🇲🇾 Malaysia"]
  }
];

