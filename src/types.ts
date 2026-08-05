export interface CountryData {
  id: string;
  name: string;
  flag: string;
  bgUrl: string;
  description: string;
  successRate: string;
  averageCost: string;
  topCourses: string[];
  postStudyWork: string;
  intake: string;
}

export interface ServiceData {
  id: string;
  title: string;
  description: string;
  iconName: string;
  details: string[];
}

export interface TestimonialData {
  id: string;
  name: string;
  photo: string;
  university: string;
  country: string;
  flag: string;
  program: string;
  visaDate: string;
  reviewText: string;
  rating: number;
}

export interface OfficeLocation {
  name: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
  gmapsLink: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  specialty: string;
  photo: string;
  experience: string;
  bio: string;
  destinations: string[];
}

