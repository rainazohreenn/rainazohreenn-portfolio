export interface Project {
  id: string;
  title: string;
  category: 'Desktop App' | 'Full-Stack' | 'AI / Machine Learning';
  tech: string[];
  github?: string;
  liveDemo?: string;
  description: string;
  keyFeatures: string[];
  date: string;
  imagePlaceholder: {
    title: string;
    gradient: string;
    icon: string;
  };
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  pdfPath: string;
  description: string;
  skills: string[];
  credentialType: string;
}

export interface SkillItem {
  name: string;
  level: number; // 0 to 100
  icon: string;
  highlight?: boolean;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: SkillItem[];
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  location: string;
  cgpa: string;
  graduationDate: string;
  status: string;
  highlights: string[];
}

export interface IndustryProgram {
  id: string;
  title: string;
  organization: string;
  date: string;
  type: string;
  description: string;
  keyLearnings: string[];
  certificatePath?: string;
}

export interface AchievementItem {
  id: string;
  role: string;
  event: string;
  date: string;
  category: string;
  description: string;
  highlights: string[];
  certificatePath?: string;
}
