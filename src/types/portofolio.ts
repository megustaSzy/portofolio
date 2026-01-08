export type EducationItem = {
  degree: string;
  school: string;
  year: string;
  gpa: string;
};

export type ExperienceItem = {
  title: string;
  company: string;
  period: string;
  description: string;
};

export type ProjectItem = {
  title: string;
  tech: string[];
  description: string;
  link: string;
};

export type SkillsType = {
  languages: string[];
  frameworks: string[];
  databases: string[];
  tools: string[];
};
