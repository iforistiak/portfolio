export type NavigationTab = 'home' | 'my-project' | 'gallery' | 'blog' | 'education' | 'contact-me';

export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  tags: string[];
  siteUrl: string;
  inquiryUrl: string;
  fadeDelay: number;
}

export interface Skill {
  id: string;
  name: string;
  percentage: number;
  icon: string;
  iconColor: string;
  colorClass: 's-blue' | 's-green' | 's-red' | 's-purple';
}

export interface GalleryPhoto {
  id: number;
  title: string;
  desc: string;
  category: 'training' | 'certificates' | 'events' | 'infrastructure';
  date: string;
  location: string;
  img: string;
}

export interface BlogPost {
  id: number;
  title: string;
  description: string;
  category: string;
  photo: string;
  date: string;
  readTime: string;
  keywords: string;
  content: string[];
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  badge: string;
  badgeClass: string;
  badgeIcon: string;
  quote: string;
  isBangla?: boolean;
  initials: string;
  avatarGradient: string;
}

export interface ClientPartner {
  id: string;
  name: string;
  sector: string;
  icon: string;
  gradient: string;
}

export interface EducationItem {
  id: string;
  typeBadge: string;
  badgeIcon: string;
  institution: string;
  classYear?: string;
  degree?: string;
  description: string;
}

export interface WorkExperience {
  id: string;
  company: string;
  role: string;
  period: string;
  duration?: string;
  isCurrent: boolean;
  icon: string;
  accentColor: string;
  gradient: string;
}

export interface PersonalProfileInfo {
  fullName: string;
  headlineRoles: string[];
  bio: string;
  company: string;
  companyCategory: string;
  location: string;
  hometown: string;
  birthday: string;
  college: string;
  instagram: string;
  openToWorkRoles: string[];
}

export interface InterestsData {
  hobbies: string[];
  tvShows: string[];
  movies: string[];
}

export type ViewMode = 'box' | 'list';

export interface CoreService {
  id: string;
  title: string;
  description: string;
  icon: string;
  iconColor: string;
}

export interface WorkSkillHighlight {
  id: string;
  title: string;
  category: string;
  summary: string;
  proficiency: number;
  icon: string;
  gradient: string;
}
