export type Language = 'zh' | 'en';

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  highlights: string[];
}

export interface StatItem {
  project?: string;
  label: string;
  value: string;
  subLabel?: string;
}

export interface EducationItem {
  school: string;
  degree: string;
  year?: string;
}

export interface CertificationItem {
  name: string;
  detail?: string;
}

export interface LifestyleItem {
  title: string;
  description: string;
  image: string;
  size: 'large' | 'small' | 'tall';
}

export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
  gallery?: string[];
  galleryUrl?: string;
  year?: string;
  stats?: string;
  description?: string;
  details?: {
    context: string;
    strategy: string;
    result: string;
  };
}

export interface ContentData {
  nav: {
    design: string;
    marketing: string;
    lifestyle: string;
    about: string;
    contact: string;
  };
  hero: {
    nameZh: string;
    nameEn: string;
    role: string;
    prefix: string;
    typewriterPhrases: string[];
    ctaText: string;
    wechatLabel: string;
    educationTitle: string;
    education: EducationItem[];
    certificationTitle: string;
    certifications: CertificationItem[];
    personalDescription: string;
  };
  stats: {
    title: string;
    items: StatItem[];
  };
  experience: {
    title: string;
    items: ExperienceItem[];
  };
  portfolio: {
    title: string;
    designTab: string;
    marketingTab: string;
    items: PortfolioItem[];
  };
  lifestyle: {
    title: string;
    subtitle: string;
    items: LifestyleItem[];
  };
  contact: {
    title: string;
    email: string;
    phone: string;
  };
}